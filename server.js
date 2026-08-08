/* ============================================================
   Shipex Academy — auth server
   ------------------------------------------------------------
   Handles Discord OAuth2 (authorization code grant) and serves
   the static site in /public. Sessions are a signed, httpOnly
   JWT cookie — no database required.

   Flow:
     GET  /auth/discord           -> redirect user to Discord
     GET  /auth/discord/callback  -> exchange code, set cookie, -> /library
     GET  /api/me                 -> { id, username, avatar } or 401
     GET  /auth/logout            -> clear cookie, -> /login

   Pages are served without their .html extension (e.g. /library instead
   of /library.html) — see the two middlewares right below express.static.

   Fill in the values in .env (copy from .env.example) before running.
   ============================================================ */

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI,
  SESSION_SECRET,
  DISCORD_BOT_TOKEN,          // optional — only needed to auto-join members into your server
  DISCORD_GUILD_ID,           // optional — the server (guild) ID to auto-join members into
  DISCORD_ANNOUNCE_CHANNEL_ID, // optional — channel to post "X just joined" messages into
  R2_ACCOUNT_ID,               // optional — only needed to serve course video from R2
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME,
  WHOP_CHECKOUT_URL,           // optional — only needed for the VIP purchase flow
  WHOP_WEBHOOK_SECRET,
  WHOP_API_KEY,                // optional — enables per-user checkout links with Discord ID metadata
  WHOP_PLAN_ID,
  ADMIN_DISCORD_IDS,           // optional — comma-separated Discord user IDs allowed on /admin
  GOOGLE_CLIENT_ID,            // optional — enables "Continue with Google"
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  RESEND_API_KEY,              // optional — enables welcome / VIP-purchase emails
  RESEND_FROM_EMAIL,
  PORT = 3000,
  NODE_ENV = "development",
} = process.env;

// Fail fast if the app isn't configured — clearer than a cryptic 500 later.
for (const [k, v] of Object.entries({
  DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI, SESSION_SECRET,
})) {
  if (!v) {
    console.error(`\n[config] Missing ${k}. Copy .env.example to .env and fill it in.\n`);
    process.exit(1);
  }
}

const app = express();
app.set("trust proxy", true); // behind Vercel's proxy — needed for req.ip to be the real client IP
app.use(cookieParser());

// Canonicalize away the .html extension: /dashboard.html -> /dashboard.
app.get(/\.html$/, (req, res) => {
  res.redirect(301, req.path.slice(0, -".html".length) + req.url.slice(req.path.length));
});

// ---- per-course SEO ----
// course.html is one static file shared by every course (routed via
// ?c=<id>), so out of the box every course page has identical, generic
// <title>/<meta>/OG tags. Search engines and link-preview bots (Discord,
// Twitter, Facebook, etc.) largely don't execute JS, so patching these
// client-side wouldn't help indexing or share previews — this rewrites
// them server-side, per course, before the HTML is sent.
let cachedCourses = null;
function loadCoursesData() {
  if (cachedCourses) return cachedCourses;
  try {
    // public/data.js is a plain browser script (`const COURSES = [...]`),
    // not a CommonJS module — run it in a sandbox and pull COURSES back out
    // via a trailing `var` (which, unlike const/let, attaches to the
    // sandbox object) so this stays in sync with data.js automatically.
    const code = fs.readFileSync(path.join(__dirname, "public", "data.js"), "utf8") +
      "\nvar __EXPORTED_COURSES__ = COURSES;";
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    cachedCourses = sandbox.__EXPORTED_COURSES__ || [];
  } catch (e) {
    console.error("[seo] failed to load course data:", e.message);
    cachedCourses = [];
  }
  return cachedCourses;
}
function escapeHtmlAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
app.get("/course", (req, res, next) => {
  const course = loadCoursesData().find((c) => c.id === req.query.c);
  if (!course) return next(); // no/unknown course id -> generic fallback page

  let html;
  try {
    html = fs.readFileSync(path.join(__dirname, "public", "course.html"), "utf8");
  } catch (e) {
    return next();
  }

  const siteUrl = "https://www.shipex.academy";
  const pageUrl = `${siteUrl}/course?c=${encodeURIComponent(course.id)}`;
  const title = `${course.title} — Shipex Academy`;
  const rawDescription = course.tagline || `Watch ${course.title} on Shipex Academy.`;
  const description = rawDescription.length > 160 ? rawDescription.slice(0, 157).trimEnd() + "…" : rawDescription;
  const imageUrl = course.cover
    ? (course.cover.startsWith("http") ? course.cover : `${siteUrl}/${course.cover.replace(/^\.\//, "")}`)
    : `${siteUrl}/shipexban.png`;
  const titleAttr = escapeHtmlAttr(title);
  const descAttr = escapeHtmlAttr(description);

  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${titleAttr}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${descAttr}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${titleAttr}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${descAttr}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeHtmlAttr(pageUrl)}">`)
    .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeHtmlAttr(imageUrl)}">`)
    .replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${escapeHtmlAttr(imageUrl)}">`)
    .replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="index, follow">`);

  const priceNumber = String(course.price || "").replace(/[^0-9.]/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: rawDescription,
    url: pageUrl,
    image: imageUrl,
    provider: { "@type": "Organization", name: "Shipex Academy", sameAs: siteUrl },
  };
  if (priceNumber) {
    jsonLd.offers = { "@type": "Offer", price: priceNumber, priceCurrency: "USD", availability: "https://schema.org/InStock", url: pageUrl };
  }
  const extraTags =
    `\n  <link rel="canonical" href="${escapeHtmlAttr(pageUrl)}">` +
    `\n  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  html = html.replace('<meta name="robots" content="index, follow">', `<meta name="robots" content="index, follow">${extraTags}`);

  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(html);
});

// keep the raw body around too — needed to verify the Whop webhook signature
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }));
app.use(express.static(path.join(__dirname, "public")));

// Old bookmarks/links to /dashboard still work — it's now /library.
app.get("/dashboard", (req, res) => res.redirect(301, "/library"));

// Serve pretty URLs: /library -> public/library.html, if that file exists.
app.get(/^[^.]+$/, (req, res, next) => {
  const htmlFile = path.join(__dirname, "public", req.path + ".html");
  fs.access(htmlFile, fs.constants.R_OK, (err) => {
    if (err) return next();
    res.sendFile(htmlFile);
  });
});

const COOKIE = "shipex_session";
const isProd = NODE_ENV === "production";
const DISCORD_API = "https://discord.com/api";
const AUTO_JOIN_GUILD = Boolean(DISCORD_BOT_TOKEN && DISCORD_GUILD_ID);
// "guilds.join" lets us add the user to your server with the bot token below.
// Drop it if you never set DISCORD_BOT_TOKEN / DISCORD_GUILD_ID — Discord will
// reject the whole auth request if a scope's requirements aren't met.
const SCOPES = AUTO_JOIN_GUILD ? ["identify", "email", "guilds.join"] : ["identify", "email"];
if (!AUTO_JOIN_GUILD) {
  console.log("[discord] DISCORD_BOT_TOKEN / DISCORD_GUILD_ID not set — skipping auto-join to your server.");
}

// Adds the user to your Discord server using their OAuth access token + your bot token.
// Safe to call even if the user is already a member (Discord just returns 204).
async function joinGuild(accessToken, discordUserId) {
  const res = await fetch(
    `${DISCORD_API}/guilds/${DISCORD_GUILD_ID}/members/${discordUserId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token: accessToken }),
    }
  );
  // 201 = newly added, 204 = already a member — both are success.
  if (!res.ok && res.status !== 204) {
    const body = await res.text().catch(() => "");
    console.error("[discord] failed to add member to guild:", res.status, body);
  }
}

// Discord role granted on VIP purchase. Whop also grants a role natively via
// its own Discord integration — this is our own bot doing it too, so VIP
// access on Discord doesn't depend solely on that separate integration.
const VIP_ROLE_ID = "1518038773990952960";
async function addVipRole(discordUserId) {
  if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) return;
  const res = await fetch(
    `${DISCORD_API}/guilds/${DISCORD_GUILD_ID}/members/${discordUserId}/roles/${VIP_ROLE_ID}`,
    { method: "PUT", headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` } }
  );
  if (!res.ok && res.status !== 204) {
    const body = await res.text().catch(() => "");
    console.error("[discord] failed to add VIP role:", res.status, body);
  }
}
async function removeVipRole(discordUserId) {
  if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) return;
  const res = await fetch(
    `${DISCORD_API}/guilds/${DISCORD_GUILD_ID}/members/${discordUserId}/roles/${VIP_ROLE_ID}`,
    { method: "DELETE", headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` } }
  );
  if (!res.ok && res.status !== 204) {
    const body = await res.text().catch(() => "");
    console.error("[discord] failed to remove VIP role:", res.status, body);
  }
}

const ANNOUNCE_JOINS = Boolean(DISCORD_BOT_TOKEN && DISCORD_ANNOUNCE_CHANNEL_ID);
if (DISCORD_BOT_TOKEN && !DISCORD_ANNOUNCE_CHANNEL_ID) {
  console.log("[discord] DISCORD_ANNOUNCE_CHANNEL_ID not set — skipping join announcements.");
}

// ---- Google sign-in (parallel to Discord OAuth, and to local accounts) ----
const GOOGLE_CONFIGURED = Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET && GOOGLE_REDIRECT_URI);
if (!GOOGLE_CONFIGURED) {
  console.log("[google] GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REDIRECT_URI not set — Google sign-in is disabled.");
}

// ---- transactional email (Resend) ----
const RESEND_CONFIGURED = Boolean(RESEND_API_KEY && RESEND_FROM_EMAIL);
if (!RESEND_CONFIGURED) {
  console.log("[email] RESEND_API_KEY / RESEND_FROM_EMAIL not set — welcome/VIP emails are disabled.");
}
async function sendEmail(to, subject, html) {
  if (!RESEND_CONFIGURED || !to) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: RESEND_FROM_EMAIL, to, subject, html }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[email] send failed:", res.status, body);
      return false;
    }
    return true;
  } catch (e) {
    console.error("[email] send error:", e.message);
    return false;
  }
}

// Plain, personal-note-style shell (white background, no buttons/boxes) —
// heavy dark HTML with big CTA buttons reads as "marketing" to Gmail's
// classifier and gets filed under Promotions instead of the primary inbox.
function emailShell(bodyHtml) {
  const f = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="margin:0;padding:0;background-color:#ffffff;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;">
<tr><td align="center" style="padding:32px 20px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;font-family:${f};">
<tr><td style="padding-bottom:22px;">
<span style="font-size:15px;font-weight:700;letter-spacing:-0.01em;color:#111111;">Shipex<span style="color:#FF4211;">.</span>Academy</span>
</td></tr>
<tr><td style="color:#1a1a1a;font-size:15px;line-height:1.65;font-family:${f};">
${bodyHtml}
</td></tr>
<tr><td style="padding-top:28px;border-top:1px solid #eeeeee;">
<p style="margin:20px 0 0;font-size:13px;color:#999999;font-family:${f};">Shipex Academy · <a href="https://discord.gg/shipex" style="color:#999999;">Join us on Discord</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function welcomeEmailHtml(name, checkoutUrl) {
  return emailShell(`
<p style="margin:0 0 16px;">Hey ${name},</p>
<p style="margin:0 0 16px;">You're in. Browse the full catalog here: <a href="https://www.shipex.academy/library" style="color:#FF4211;">shipex.academy/library</a></p>
<p style="margin:0 0 16px;">Everything in it is VIP-only — courses that cost thousands elsewhere, all unlocked for $29/month, plus everything we add after, and you can cancel whenever: <a href="${checkoutUrl}" style="color:#FF4211;">get VIP</a>.</p>
<p style="margin:0;">Come say hi in <a href="https://discord.gg/shipex" style="color:#FF4211;">Discord</a> — that's where new courses get announced first.</p>
`);
}

function vipEmailHtml(name) {
  return emailShell(`
<p style="margin:0 0 16px;">Hey ${name},</p>
<p style="margin:0 0 16px;">You're VIP now — everything that was locked is unlocked, and every course we add from here on is included automatically for as long as you're a member.</p>
<p style="margin:0 0 16px;">See what just opened up: <a href="https://www.shipex.academy/library" style="color:#FF4211;">shipex.academy/library</a></p>
<p style="margin:0 0 16px;">Two things worth doing now — grab your VIP role in <a href="https://discord.gg/shipex" style="color:#FF4211;">Discord</a> (that's also where new courses get announced first), and if there's a course you want us to go get, request it from the library — VIP requests get looked at first.</p>
<p style="margin:0;">Cancel anytime from Whop, no contracts, no hoops.</p>
`);
}

function newCourseEmailHtml(name, course, checkoutUrl) {
  const vipLine = course.vipOnly
    ? `<p style="margin:0 0 16px;">This one's VIP-only. If you're not VIP yet, $29/month gets you this course plus everything else in the library, and you can cancel anytime: <a href="${checkoutUrl}" style="color:#FF4211;">get VIP</a>.</p>`
    : `<p style="margin:0 0 16px;">It's free — no VIP needed.</p>`;
  const findLine = course.externalUrl
    ? `<p style="margin:0 0 16px;">You can also find it directly here: <a href="${course.externalUrl}" style="color:#FF4211;">${course.externalUrl}</a></p>`
    : "";
  const imgHtml = course.cover
    ? `<img src="${course.cover}" alt="${course.title}" style="width:100%;max-width:480px;border-radius:12px;margin:0 0 16px;display:block;">`
    : "";
  return emailShell(`
<p style="margin:0 0 16px;">Hey ${name},</p>
<p style="margin:0 0 16px;">We just added a new course to the library — <strong>${course.title}</strong>${course.price ? ` (worth ${course.price})` : ""}.</p>
${imgHtml}
<p style="margin:0 0 16px;">Watch it here: <a href="${course.courseUrl}" style="color:#FF4211;">${course.courseUrl}</a></p>
${findLine}
${vipLine}
`);
}

// Posts "X just joined" into your announcement channel. Fires on every completed
// login, not just the very first one — there's no database here to tell a brand
// new sign-up apart from someone logging back in.
async function announceJoin(user) {
  const res = await fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `🎉 <@${user.id}> just registered and joined the server!`,
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[discord] failed to post join announcement:", res.status, body);
  }
}

function setSession(res, user) {
  const token = jwt.sign(user, SESSION_SECRET, { expiresIn: "30d" });
  res.cookie(COOKIE, token, {
    httpOnly: true,
    secure: isProd,          // HTTPS-only in production
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}

// Reads the session cookie and returns the user, or null if missing/invalid.
function currentUser(req) {
  const t = req.cookies[COOKIE];
  if (!t) return null;
  try {
    return jwt.verify(t, SESSION_SECRET);
  } catch {
    return null;
  }
}

const ADMIN_IDS = new Set(
  (ADMIN_DISCORD_IDS || "").split(",").map((s) => s.trim()).filter(Boolean)
);
function isAdmin(req) {
  const user = currentUser(req);
  return Boolean(user && ADMIN_IDS.has(user.id));
}

// ---- course video: private R2 bucket, unlocked with short-lived signed URLs ----
const VIDEO_STORAGE_CONFIGURED = Boolean(R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY && R2_BUCKET_NAME);
if (!VIDEO_STORAGE_CONFIGURED) {
  console.log("[r2] R2 credentials not set in .env — /api/video-url will return 503 until configured.");
}
let s3Client = null;
let R2GetObjectCommand = null;
let getSignedUrl = null;
if (VIDEO_STORAGE_CONFIGURED) {
  const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
  R2GetObjectCommand = GetObjectCommand;
  getSignedUrl = require("@aws-sdk/s3-request-presigner").getSignedUrl;
  s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
  });
}
const VIDEO_URL_TTL_SECONDS = 4 * 60 * 60; // 4 hours — for resource/preview downloads, fine to be long-lived
// Lesson videos get a much shorter-lived URL — a leaked/copied link is only
// useful for a few minutes. The player transparently re-fetches a fresh one
// before this expires, so real viewers never notice.
const LESSON_VIDEO_URL_TTL_SECONDS = 8 * 60; // 8 minutes

// ---- VIP membership (Whop) ----
// No database here, so VIP membership is tracked as a small JSON file sitting
// in the same R2 bucket as the videos: { "<discordId>": { at, whopUserId } }.
const WHOP_CONFIGURED = Boolean(WHOP_CHECKOUT_URL && WHOP_WEBHOOK_SECRET);
if (!WHOP_CONFIGURED) {
  console.log("[whop] WHOP_CHECKOUT_URL / WHOP_WEBHOOK_SECRET not set — VIP purchase flow is disabled.");
}
// Per-user checkout links (so the webhook gets the buyer's Discord ID back as
// metadata — Whop's own webhook payload doesn't otherwise include it).
const WHOP_PERSONALIZED_CHECKOUT = Boolean(WHOP_API_KEY && WHOP_PLAN_ID);
if (!WHOP_PERSONALIZED_CHECKOUT) {
  console.log("[whop] WHOP_API_KEY / WHOP_PLAN_ID not set — VIP purchase button will use the generic checkout link.");
}
const VIP_STORE_KEY = "_vip-members.json";
let R2PutObjectCommand = null;
if (VIDEO_STORAGE_CONFIGURED) {
  R2PutObjectCommand = require("@aws-sdk/client-s3").PutObjectCommand;
}
async function readVipMembers() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: VIP_STORE_KEY }));
    const text = await res.Body.transformToString();
    return JSON.parse(text);
  } catch (e) {
    return {}; // file doesn't exist yet, or is unreadable — treat as "no VIPs yet"
  }
}
async function addVipMember(discordId, extra) {
  const members = await readVipMembers();
  members[discordId] = { at: Date.now(), ...extra };
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: VIP_STORE_KEY,
    Body: JSON.stringify(members, null, 2),
    ContentType: "application/json",
  }));
  return members;
}
async function removeVipMember(discordId) {
  const members = await readVipMembers();
  delete members[discordId];
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: VIP_STORE_KEY,
    Body: JSON.stringify(members, null, 2),
    ContentType: "application/json",
  }));
  return members;
}
async function isVip(discordId) {
  if (!discordId) return false;
  const members = await readVipMembers();
  return Boolean(members[discordId]);
}

// ---- local (email/username/password) accounts ----
// Same "JSON file in the R2 bucket" pattern as VIP members — no real
// database here either.
const USERS_STORE_KEY = "_users.json";
async function readUsers() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: USERS_STORE_KEY }));
    const text = await res.Body.transformToString();
    return JSON.parse(text);
  } catch (e) {
    return {};
  }
}
async function writeUsers(users) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: USERS_STORE_KEY,
    Body: JSON.stringify(users, null, 2),
    ContentType: "application/json",
  }));
}
function findUserByEmailOrUsername(users, identifier) {
  const needle = String(identifier || "").trim().toLowerCase();
  return Object.values(users).find(
    (u) => u.email.toLowerCase() === needle || u.username.toLowerCase() === needle
  );
}

// ---- one account per IP: whichever account first signs up from an IP
// claims it — any later signup attempt (Discord or local) from that same
// IP is blocked. Existing accounts logging back in are never affected.
const SIGNUP_IPS_KEY = "_signup-ips.json";
async function readSignupIps() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: SIGNUP_IPS_KEY }));
    return JSON.parse(await res.Body.transformToString());
  } catch (e) {
    return {};
  }
}
async function writeSignupIps(obj) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: SIGNUP_IPS_KEY,
    Body: JSON.stringify(obj, null, 2),
    ContentType: "application/json",
  }));
}
async function claimSignupIp(ip, userId) {
  if (!ip) return;
  const signupIps = await readSignupIps();
  signupIps[ip] = { userId, at: Date.now() };
  await writeSignupIps(signupIps);
}

// ---- members (everyone who's ever signed in — Discord or local) ----
// Separate from the auth-only _users.json store above: this tracks every
// member for the admin dashboard (discord handle, niche if known, total
// watch time), regardless of how they signed in.
const MEMBERS_STORE_KEY = "_members.json";
async function readMembers() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: MEMBERS_STORE_KEY }));
    const text = await res.Body.transformToString();
    return JSON.parse(text);
  } catch (e) {
    return {};
  }
}
async function writeMembers(members) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: MEMBERS_STORE_KEY,
    Body: JSON.stringify(members, null, 2),
    ContentType: "application/json",
  }));
}
async function upsertMember(user, extra) {
  const members = await readMembers();
  const existing = members[user.id] || {};
  members[user.id] = {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    authProvider: user.authProvider || existing.authProvider || "discord",
    discordUsername: user.authProvider === "local" ? (existing.discordUsername || null) : user.username,
    niche: (extra && extra.niche) || existing.niche || null,
    email: (extra && extra.email) || existing.email || null,
    firstSeen: existing.firstSeen || Date.now(),
    lastSeen: Date.now(),
    totalWatchSeconds: existing.totalWatchSeconds || 0,
  };
  await writeMembers(members);
  return members[user.id];
}

// ---- per-course analytics: total watch time, unique viewers, likes ----
const COURSE_STATS_KEY = "_course-stats.json";
async function readCourseStats() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: COURSE_STATS_KEY }));
    const text = await res.Body.transformToString();
    return JSON.parse(text);
  } catch (e) {
    return {};
  }
}
async function writeCourseStats(stats) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: COURSE_STATS_KEY,
    Body: JSON.stringify(stats, null, 2),
    ContentType: "application/json",
  }));
}

// ---- shoutbox: a single shared list of short public messages ----
const SHOUTBOX_KEY = "_shoutbox.json";
const SHOUTBOX_MAX_MESSAGES = 200;
const SHOUTBOX_COOLDOWN_MS = 3000;
const lastShoutAt = {}; // in-memory per-user cooldown, fine to reset on redeploy
async function readShoutbox() {
  if (!s3Client) return [];
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: SHOUTBOX_KEY }));
    const text = await res.Body.transformToString();
    return JSON.parse(text);
  } catch (e) {
    return [];
  }
}
async function writeShoutbox(messages) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: SHOUTBOX_KEY,
    Body: JSON.stringify(messages, null, 2),
    ContentType: "application/json",
  }));
}

// ---- daily watch-time limit for non-VIP users ----
const DAILY_WATCH_LIMIT_SECONDS = 60 * 60; // 1 hour/day
const DAILY_WATCH_KEY = "_daily-watch.json";
function todayUTC() {
  return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
}
async function readDailyWatch() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: DAILY_WATCH_KEY }));
    return JSON.parse(await res.Body.transformToString());
  } catch (e) {
    return {};
  }
}
async function writeDailyWatch(obj) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: DAILY_WATCH_KEY,
    Body: JSON.stringify(obj, null, 2),
    ContentType: "application/json",
  }));
}
// Adds `seconds` to today's watched total for `userId` (resetting the
// counter if the stored date isn't today) and returns the seconds left.
async function addDailyWatchSeconds(userId, seconds) {
  const all = await readDailyWatch();
  const today = todayUTC();
  const entry = all[userId] && all[userId].date === today ? all[userId] : { date: today, seconds: 0 };
  entry.seconds += seconds;
  all[userId] = entry;
  await writeDailyWatch(all);
  return Math.max(0, DAILY_WATCH_LIMIT_SECONDS - entry.seconds);
}
async function getDailyWatchRemaining(userId) {
  const all = await readDailyWatch();
  const entry = all[userId];
  if (!entry || entry.date !== todayUTC()) return DAILY_WATCH_LIMIT_SECONDS;
  return Math.max(0, DAILY_WATCH_LIMIT_SECONDS - entry.seconds);
}

// ---- affiliate program ----
// Flat 40% commission on VIP payments made by someone's referrals, from
// their very first referral — no tiers, no ramp-up. An individual account
// can carry its own `rateOverride` (set manually, e.g. via a one-off admin
// script) to earn a different flat rate instead.
const DEFAULT_AFFILIATE_RATE = 0.40;
function affiliateCommissionRate(referralCount, account) {
  if (account && typeof account.rateOverride === "number") return account.rateOverride;
  return DEFAULT_AFFILIATE_RATE;
}

const AFFILIATE_LINKS_KEY = "_affiliate-links.json";
async function readAffiliateLinks() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: AFFILIATE_LINKS_KEY }));
    return JSON.parse(await res.Body.transformToString());
  } catch (e) {
    return {};
  }
}
async function writeAffiliateLinks(links) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME, Key: AFFILIATE_LINKS_KEY,
    Body: JSON.stringify(links, null, 2), ContentType: "application/json",
  }));
}

const REFERRALS_KEY = "_referrals.json";
async function readReferrals() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: REFERRALS_KEY }));
    return JSON.parse(await res.Body.transformToString());
  } catch (e) {
    return {};
  }
}
async function writeReferrals(referrals) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME, Key: REFERRALS_KEY,
    Body: JSON.stringify(referrals, null, 2), ContentType: "application/json",
  }));
}

const AFFILIATE_ACCOUNTS_KEY = "_affiliate-accounts.json";
async function readAffiliateAccounts() {
  if (!s3Client) return {};
  try {
    const res = await s3Client.send(new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: AFFILIATE_ACCOUNTS_KEY }));
    return JSON.parse(await res.Body.transformToString());
  } catch (e) {
    return {};
  }
}
async function writeAffiliateAccounts(accounts) {
  await s3Client.send(new R2PutObjectCommand({
    Bucket: R2_BUCKET_NAME, Key: AFFILIATE_ACCOUNTS_KEY,
    Body: JSON.stringify(accounts, null, 2), ContentType: "application/json",
  }));
}
function ensureAffiliateAccount(accounts, userId) {
  if (!accounts[userId]) {
    accounts[userId] = { balance: 0, totalEarned: 0, referralCount: 0, payoutRequests: [] };
  }
  return accounts[userId];
}

// Credits a referrer's account when their referral makes a VIP payment.
// amount is the raw payment amount in dollars (e.g. 29 for a $29 charge).
async function creditAffiliateCommission(paidUserId, amount) {
  if (!s3Client || !amount) return;
  try {
    const [referrals, accounts] = await Promise.all([readReferrals(), readAffiliateAccounts()]);
    const referral = referrals[paidUserId];
    if (!referral) return; // this user wasn't referred by anyone

    const account = ensureAffiliateAccount(accounts, referral.referrerId);
    const rate = affiliateCommissionRate(account.referralCount, account);
    const commission = Math.round(amount * rate * 100) / 100;

    account.balance = Math.round((account.balance + commission) * 100) / 100;
    account.totalEarned = Math.round((account.totalEarned + commission) * 100) / 100;
    referral.totalEarned = Math.round(((referral.totalEarned || 0) + commission) * 100) / 100;
    referral.lastPaymentAt = Date.now();

    await Promise.all([writeReferrals(referrals), writeAffiliateAccounts(accounts)]);
  } catch (e) {
    console.error("[affiliate] commission credit failed:", e.message);
  }
}

// Records a brand-new referral (called once, at registration time only).
async function recordReferral(referredUserId, code) {
  if (!s3Client || !code) return;
  try {
    const [links, referrals, accounts] = await Promise.all([readAffiliateLinks(), readReferrals(), readAffiliateAccounts()]);
    const link = links[code];
    if (!link) return; // unknown/invalid code
    if (link.ownerId === referredUserId) return; // no self-referrals
    if (referrals[referredUserId]) return; // already has a referrer, first one wins

    referrals[referredUserId] = {
      referrerId: link.ownerId, code, referredAt: Date.now(), totalEarned: 0, lastPaymentAt: null,
    };
    const account = ensureAffiliateAccount(accounts, link.ownerId);
    account.referralCount += 1;

    await Promise.all([writeReferrals(referrals), writeAffiliateAccounts(accounts)]);
  } catch (e) {
    console.error("[affiliate] record referral failed:", e.message);
  }
}

/* ---- 1. Start OAuth: send the user to Discord ---- */
app.get("/auth/discord", (req, res) => {
  // CSRF protection: random state stored in a short-lived cookie, checked on return.
  const state = crypto.randomBytes(16).toString("hex");
  res.cookie("oauth_state", state, {
    httpOnly: true, secure: isProd, sameSite: "lax", maxAge: 10 * 60 * 1000,
  });
  // remembers "take them straight to VIP checkout" across the round trip to
  // Discord and back, since query params don't survive that redirect
  if (req.query.next === "vip") {
    res.cookie("post_auth_next", "vip", {
      httpOnly: true, secure: isProd, sameSite: "lax", maxAge: 10 * 60 * 1000,
    });
  }
  const url = new URL(DISCORD_API + "/oauth2/authorize");
  url.searchParams.set("client_id", DISCORD_CLIENT_ID);
  url.searchParams.set("redirect_uri", DISCORD_REDIRECT_URI);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", SCOPES.join(" "));
  url.searchParams.set("state", state);
  url.searchParams.set("prompt", "consent");
  res.redirect(url.toString());
});

/* ---- 2. Callback: exchange code, fetch profile, set session ---- */
app.get("/auth/discord/callback", async (req, res) => {
  const { code, state, error } = req.query;
  if (error) return res.redirect("/login?error=" + encodeURIComponent(error));
  if (!code) return res.redirect("/login?error=no_code");
  if (!state || state !== req.cookies.oauth_state) {
    return res.redirect("/login?error=bad_state");
  }
  res.clearCookie("oauth_state");

  try {
    // exchange the code for an access token
    const tokenRes = await fetch(DISCORD_API + "/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: String(code),
        redirect_uri: DISCORD_REDIRECT_URI,
      }),
    });
    if (!tokenRes.ok) throw new Error("token exchange failed: " + tokenRes.status);
    const token = await tokenRes.json();

    // fetch the user's Discord profile
    const meRes = await fetch(DISCORD_API + "/users/@me", {
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    if (!meRes.ok) throw new Error("profile fetch failed: " + meRes.status);
    const d = await meRes.json();

    const user = {
      id: d.id,
      username: d.username,                       // the @handle, e.g. "shipexfounder"
      displayName: d.global_name || d.username,   // the display name shown on Discord
      avatar: d.avatar
        ? `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.png`
        : null,
      authProvider: "discord",
    };
    // record a referral only for a brand-new member — not on every re-login
    const isNewMember = !(await readMembers())[d.id];

    // one account per IP: block a brand-new signup if this IP already
    // claimed an account — existing members logging back in are unaffected
    if (isNewMember) {
      const signupIps = await readSignupIps();
      const claim = signupIps[req.ip];
      if (claim && claim.userId !== d.id) {
        return res.redirect("/login?error=ip_limit_reached");
      }
    }

    setSession(res, user);
    upsertMember(user, { email: d.email || null }).catch((e) => console.error("[members] upsert failed:", e.message));
    if (isNewMember) {
      if (req.cookies.ref_code) {
        recordReferral(d.id, req.cookies.ref_code).catch((e) => console.error("[affiliate] failed:", e.message));
      }
      claimSignupIp(req.ip, d.id).catch((e) => console.error("[signup-ip] claim failed:", e.message));
      // Discord only shares an email if the user granted the "email" scope
      // (and has one verified) — send the welcome email when we actually got one.
      if (d.email) {
        getPersonalizedCheckoutUrl(d.id, d.username)
          .then((checkoutUrl) => sendEmail(d.email, "Welcome to Shipex Academy", welcomeEmailHtml(user.displayName, checkoutUrl)))
          .catch((e) => console.error("[email] welcome send failed:", e.message));
      }
    }
    res.clearCookie("ref_code");

    // pull the user into your Discord server, if that's configured
    if (AUTO_JOIN_GUILD) {
      await joinGuild(token.access_token, d.id);
    }
    // announce the join in your channel, if that's configured
    if (ANNOUNCE_JOINS) {
      await announceJoin(user);
    }

    const wantsVipCheckout = req.cookies.post_auth_next === "vip";
    res.clearCookie("post_auth_next");
    res.redirect(wantsVipCheckout ? "/library?vip_checkout=1" : "/library");
  } catch (e) {
    console.error("[oauth]", e.message);
    res.redirect("/login?error=oauth_failed");
  }
});

/* ---- Google sign-in: parallel flow to Discord OAuth above ---- */
app.get("/auth/google", (req, res) => {
  if (!GOOGLE_CONFIGURED) return res.redirect("/login?error=google_not_configured");
  const state = crypto.randomBytes(16).toString("hex");
  res.cookie("oauth_state", state, {
    httpOnly: true, secure: isProd, sameSite: "lax", maxAge: 10 * 60 * 1000,
  });
  // remembers "take them straight to VIP checkout" across the round trip to
  // Google and back, since query params don't survive that redirect
  if (req.query.next === "vip") {
    res.cookie("post_auth_next", "vip", {
      httpOnly: true, secure: isProd, sameSite: "lax", maxAge: 10 * 60 * 1000,
    });
  }
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.set("client_id", GOOGLE_CLIENT_ID);
  url.searchParams.set("redirect_uri", GOOGLE_REDIRECT_URI);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid email profile");
  url.searchParams.set("state", state);
  url.searchParams.set("prompt", "select_account");
  res.redirect(url.toString());
});

app.get("/auth/google/callback", async (req, res) => {
  const { code, state, error } = req.query;
  if (error) return res.redirect("/login?error=" + encodeURIComponent(error));
  if (!code) return res.redirect("/login?error=no_code");
  if (!state || state !== req.cookies.oauth_state) {
    return res.redirect("/login?error=bad_state");
  }
  res.clearCookie("oauth_state");

  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: String(code),
        redirect_uri: GOOGLE_REDIRECT_URI,
      }),
    });
    if (!tokenRes.ok) throw new Error("token exchange failed: " + tokenRes.status);
    const token = await tokenRes.json();

    const meRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    if (!meRes.ok) throw new Error("profile fetch failed: " + meRes.status);
    const g = await meRes.json();

    // Google IDs aren't Discord snowflakes, so prefix them — same idea as
    // local accounts' "local_..." IDs, and it keeps Discord-only side effects
    // (role grants, @mentions) correctly skipped via looksLikeDiscordId checks.
    const id = "google_" + g.id;
    const user = {
      id,
      username: g.email || g.name || id,
      displayName: g.name || g.email || "there",
      avatar: g.picture || null,
      authProvider: "google",
    };

    const isNewMember = !(await readMembers())[id];

    // one account per IP: block a brand-new signup if this IP already
    // claimed an account — existing members logging back in are unaffected
    if (isNewMember) {
      const signupIps = await readSignupIps();
      const claim = signupIps[req.ip];
      if (claim && claim.userId !== id) {
        return res.redirect("/login?error=ip_limit_reached");
      }
    }

    setSession(res, user);
    upsertMember(user, { email: g.email || null }).catch((e) => console.error("[members] upsert failed:", e.message));
    if (isNewMember) {
      if (req.cookies.ref_code) {
        recordReferral(id, req.cookies.ref_code).catch((e) => console.error("[affiliate] failed:", e.message));
      }
      claimSignupIp(req.ip, id).catch((e) => console.error("[signup-ip] claim failed:", e.message));
      if (ANNOUNCE_JOINS) {
        fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
          method: "POST",
          headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📝 **New registration (Google)**\nName: ${user.displayName}\nEmail: ${g.email || "—"}\nIP: ${req.ip}`,
          }),
        }).catch((e) => console.error("[discord] google join announcement failed:", e.message));
      }
      if (g.email) {
        getPersonalizedCheckoutUrl(id, user.username)
          .then((checkoutUrl) => sendEmail(g.email, "Welcome to Shipex Academy", welcomeEmailHtml(user.displayName, checkoutUrl)))
          .catch((e) => console.error("[email] welcome send failed:", e.message));
      }
    }
    res.clearCookie("ref_code");

    const wantsVipCheckout = req.cookies.post_auth_next === "vip";
    res.clearCookie("post_auth_next");
    res.redirect(wantsVipCheckout ? "/library?vip_checkout=1" : "/library");
  } catch (e) {
    console.error("[oauth google]", e.message);
    res.redirect("/login?error=oauth_failed");
  }
});

/* ---- 3. Who am I? (used by the front-end to gate pages) ---- */
app.get("/api/me", async (req, res) => {
  const t = req.cookies[COOKIE];
  if (!t) return res.status(401).json({ error: "not_authenticated" });
  try {
    const user = jwt.verify(t, SESSION_SECRET);
    const vip = await isVip(user.id);
    res.json({ id: user.id, username: user.username, displayName: user.displayName, avatar: user.avatar, vip });
  } catch {
    res.status(401).json({ error: "invalid_session" });
  }
});

/* ---- video: mint a short-lived signed URL for a lesson, logged-in users only ---- */
app.get("/api/video-url", async (req, res) => {
  if (!currentUser(req)) return res.status(401).json({ error: "not_authenticated" });
  if (!VIDEO_STORAGE_CONFIGURED) return res.status(503).json({ error: "video_storage_not_configured" });

  const key = req.query.key;
  if (!key) return res.status(400).json({ error: "missing_key" });

  try {
    const command = new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: String(key) });
    const url = await getSignedUrl(s3Client, command, { expiresIn: LESSON_VIDEO_URL_TTL_SECONDS });
    res.json({ url, expiresIn: LESSON_VIDEO_URL_TTL_SECONDS });
  } catch (e) {
    console.error("[r2] failed to sign URL for", key, e.message);
    res.status(500).json({ error: "sign_failed" });
  }
});

/* ---- public homepage preview video: signed URL for one fixed key, no login required ---- */
const PREVIEW_VIDEO_KEY = "preview2.mp4";
app.get("/api/preview-video-url", async (req, res) => {
  if (!VIDEO_STORAGE_CONFIGURED) return res.status(503).json({ error: "video_storage_not_configured" });
  try {
    const command = new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: PREVIEW_VIDEO_KEY });
    const url = await getSignedUrl(s3Client, command, { expiresIn: VIDEO_URL_TTL_SECONDS });
    res.json({ url });
  } catch (e) {
    console.error("[r2] failed to sign URL for preview video", e.message);
    res.status(500).json({ error: "sign_failed" });
  }
});

/* ---- course-intro preview videos: signed URL for a whitelisted set of keys, no login required ---- */
const INTRO_VIDEO_KEYS = new Set([
  "Zakaria Airakaz - ECOM Masterclass  [ JUN-2026 ]/1. Unlock the 100M$ Version of Yourself/4. How To Unfuck Your Life And Protect It To Go To The 100M$.mp4",
  "Intro Videos/HTE Welcome Video.mp4",
  "Intro Videos/Evolve.mp4",
  "Intro Videos/Impact.mp4",
  "Intro Videos/AB Inner Circle.mp4",
  "Intro Videos/Viral Ai Wizards.mp4",
  "nkalchemy.mp4",
]);
app.get("/api/intro-video-url", async (req, res) => {
  if (!VIDEO_STORAGE_CONFIGURED) return res.status(503).json({ error: "video_storage_not_configured" });
  const key = req.query.key;
  if (!key || !INTRO_VIDEO_KEYS.has(String(key))) return res.status(400).json({ error: "invalid_key" });
  try {
    const command = new R2GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: String(key) });
    const url = await getSignedUrl(s3Client, command, { expiresIn: VIDEO_URL_TTL_SECONDS });
    res.json({ url });
  } catch (e) {
    console.error("[r2] failed to sign URL for intro video", key, e.message);
    res.status(500).json({ error: "sign_failed" });
  }
});

/* ---- resource downloads (PDFs, worksheets, etc.) — same gate as video ---- */
app.get("/api/download-url", async (req, res) => {
  if (!currentUser(req)) return res.status(401).json({ error: "not_authenticated" });
  if (!VIDEO_STORAGE_CONFIGURED) return res.status(503).json({ error: "video_storage_not_configured" });

  const key = req.query.key;
  if (!key) return res.status(400).json({ error: "missing_key" });
  const filename = req.query.name ? String(req.query.name) : path.basename(String(key));

  try {
    const command = new R2GetObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: String(key),
      ResponseContentDisposition: `attachment; filename="${filename.replace(/"/g, "")}"`,
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: VIDEO_URL_TTL_SECONDS });
    res.json({ url });
  } catch (e) {
    console.error("[r2] failed to sign download URL for", key, e.message);
    res.status(500).json({ error: "sign_failed" });
  }
});

/* ---- "request a course" — logged-in users only, posts into your Discord channel ---- */
const CATEGORY_LABELS = {
  "ecommerce": "E-Commerce",
  "ai-automation": "AI & Automation",
  "affiliate": "Affiliate Marketing",
  "copywriting": "Sales & Copywriting",
  "growth": "Growth",
  "lead-generation": "Lead Generation",
  "finance-trading": "Finance & Trading",
  "video-editing": "Video Editing",
  "viral-content": "Viral Content",
};
app.post("/api/request-course", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!(await isVip(user.id))) return res.status(403).json({ error: "vip_only" });
  if (!ANNOUNCE_JOINS) return res.status(503).json({ error: "announce_channel_not_configured" });

  const name = String(req.body?.name || "").trim().slice(0, 200);
  const category = String(req.body?.category || "").trim();
  const price = String(req.body?.price || "").trim().slice(0, 60);
  if (!name || !price) return res.status(400).json({ error: "missing_fields" });

  const categoryLabel = CATEGORY_LABELS[category] || category || "—";

  try {
    const r = await fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:
          `📚 New course request from <@${user.id}>\n` +
          `**Name:** ${name}\n` +
          `**Category:** ${categoryLabel}\n` +
          `**Price:** ${price}`,
      }),
    });
    if (!r.ok) {
      const body = await r.text().catch(() => "");
      console.error("[discord] failed to post course request:", r.status, body);
      return res.status(502).json({ error: "post_failed" });
    }
    res.json({ ok: true });
  } catch (e) {
    console.error("[discord] course request error:", e.message);
    res.status(500).json({ error: "post_failed" });
  }
});

/* ---- am I VIP? used by the front-end for the badge + course gating ---- */
app.get("/api/vip-status", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  res.json({ vip: await isVip(user.id) });
});

/* ---- admin: manage VIP members (view / add / remove), gated to ADMIN_DISCORD_IDS ---- */
app.get("/api/admin/me", (req, res) => {
  res.json({ admin: isAdmin(req) });
});

app.get("/api/admin/vip-members", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const members = await readVipMembers();
  res.json({ members });
});

app.post("/api/admin/vip-members", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const discordId = String(req.body?.discordId || "").trim();
  const username = String(req.body?.username || "").trim() || null;
  if (!discordId) return res.status(400).json({ error: "missing_discord_id" });
  await addVipMember(discordId, { username, addedBy: currentUser(req).id, manual: true });
  await addVipRole(discordId);
  res.json({ ok: true });
});

app.delete("/api/admin/vip-members/:discordId", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const discordId = req.params.discordId;
  await removeVipMember(discordId);
  await removeVipRole(discordId);
  res.json({ ok: true });
});

/* ---- watch-time tracking: the player reports accumulated seconds periodically ---- */
app.post("/api/track-progress", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!s3Client) return res.json({ ok: true });

  const courseId = String(req.body?.courseId || "").trim();
  // clamp to a sane per-report ceiling so one bad/malicious request can't
  // blow up the numbers — the player reports every ~20s of real playback.
  const seconds = Math.max(0, Math.min(300, Math.round(Number(req.body?.seconds) || 0)));
  if (!courseId || !seconds) return res.json({ ok: true });

  try {
    const [members, stats] = await Promise.all([readMembers(), readCourseStats()]);

    const m = members[user.id] || {
      id: user.id, username: user.username, displayName: user.displayName || user.username,
      authProvider: user.authProvider || "discord",
      discordUsername: user.authProvider === "local" ? null : user.username,
      niche: null, firstSeen: Date.now(), totalWatchSeconds: 0,
    };
    m.totalWatchSeconds = (m.totalWatchSeconds || 0) + seconds;
    m.lastSeen = Date.now();
    members[user.id] = m;

    const s = stats[courseId] || { watchSeconds: 0, viewerIds: [], likedBy: [] };
    s.watchSeconds = (s.watchSeconds || 0) + seconds;
    if (!s.viewerIds.includes(user.id)) s.viewerIds.push(user.id);
    stats[courseId] = s;

    const writes = [writeMembers(members), writeCourseStats(stats)];

    // non-VIP users are capped at DAILY_WATCH_LIMIT_SECONDS of playback per
    // day — VIP members are exempt and never touch this store.
    let dailyRemainingSeconds = null;
    if (!(await isVip(user.id))) {
      dailyRemainingSeconds = await addDailyWatchSeconds(user.id, seconds);
    }

    await Promise.all(writes);
    res.json({ ok: true, dailyRemainingSeconds });
  } catch (e) {
    console.error("[track] failed:", e.message);
    res.status(500).json({ error: "track_failed" });
  }
});

/* ---- shoutbox: shared public message list, polled by the frontend ---- */
app.get("/api/shoutbox", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  try {
    const messages = await readShoutbox();
    res.json({ messages: messages.slice(-100) });
  } catch (e) {
    console.error("[shoutbox] read failed:", e.message);
    res.status(500).json({ error: "shoutbox_failed" });
  }
});

app.post("/api/shoutbox", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!s3Client) return res.status(500).json({ error: "shoutbox_failed" });

  const text = String(req.body?.text || "").trim().slice(0, 300);
  if (!text) return res.status(400).json({ error: "empty_message" });

  const now = Date.now();
  const last = lastShoutAt[user.id] || 0;
  if (now - last < SHOUTBOX_COOLDOWN_MS) {
    return res.status(429).json({ error: "too_fast" });
  }
  lastShoutAt[user.id] = now;

  try {
    const messages = await readShoutbox();
    const message = {
      id: crypto.randomBytes(8).toString("hex"),
      userId: user.id,
      username: user.username,
      displayName: user.displayName || user.username,
      avatar: user.avatar || null,
      vip: await isVip(user.id),
      text,
      at: now,
    };
    messages.push(message);
    while (messages.length > SHOUTBOX_MAX_MESSAGES) messages.shift();
    await writeShoutbox(messages);
    res.json({ ok: true, message });
  } catch (e) {
    console.error("[shoutbox] post failed:", e.message);
    res.status(500).json({ error: "shoutbox_failed" });
  }
});

/* ---- daily watch-time limit: how much is left today for this user ---- */
app.get("/api/daily-watch-status", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });

  const vip = await isVip(user.id);
  const remainingSeconds = vip ? DAILY_WATCH_LIMIT_SECONDS : await getDailyWatchRemaining(user.id);
  res.json({ vip, limitSeconds: DAILY_WATCH_LIMIT_SECONDS, remainingSeconds });
});

/* ---- likes: toggle a like on a course ---- */
app.post("/api/courses/:id/like", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!s3Client) return res.status(503).json({ error: "not_configured" });

  const courseId = req.params.id;
  try {
    const stats = await readCourseStats();
    const s = stats[courseId] || { watchSeconds: 0, viewerIds: [], likedBy: [] };
    const idx = s.likedBy.indexOf(user.id);
    let liked;
    if (idx === -1) { s.likedBy.push(user.id); liked = true; }
    else { s.likedBy.splice(idx, 1); liked = false; }
    stats[courseId] = s;
    await writeCourseStats(stats);
    res.json({ liked, count: s.likedBy.length });
  } catch (e) {
    console.error("[like] failed:", e.message);
    res.status(500).json({ error: "like_failed" });
  }
});

/* ---- per-course stats for the logged-in user (like button state + counts) ---- */
app.get("/api/course-stats", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  const stats = await readCourseStats();
  const out = {};
  Object.keys(stats).forEach((id) => {
    const s = stats[id];
    out[id] = {
      watchSeconds: s.watchSeconds || 0,
      viewers: (s.viewerIds || []).length,
      likes: (s.likedBy || []).length,
      likedByMe: (s.likedBy || []).includes(user.id),
    };
  });
  res.json({ stats: out });
});

/* ---- admin: full member list + course analytics ---- */
app.get("/api/admin/members", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const members = await readMembers();
  res.json({ members });
});

app.get("/api/admin/course-stats", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const stats = await readCourseStats();
  const out = {};
  Object.keys(stats).forEach((id) => {
    const s = stats[id];
    out[id] = {
      watchSeconds: s.watchSeconds || 0,
      viewers: (s.viewerIds || []).length,
      likes: (s.likedBy || []).length,
    };
  });
  res.json({ stats: out });
});

/* ---- admin: email every member (with an email on file) about a newly-added course ----
   Fires in the background instead of awaiting the full send loop — with enough
   members this can easily run past a serverless function's time limit, so the
   route responds immediately and the send loop keeps going after that. */
app.post("/api/admin/announce-course", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  if (!RESEND_CONFIGURED) return res.status(503).json({ error: "email_not_configured" });

  const { id, title, cover, externalUrl, vipOnly, price } = req.body || {};
  if (!id || !title) return res.status(400).json({ error: "missing_course" });

  const courseUrl = `https://www.shipex.academy/course?c=${encodeURIComponent(id)}`;
  const coverUrl = cover ? `https://www.shipex.academy/${String(cover).replace(/^\.\//, "")}` : null;

  const members = await readMembers();
  const recipients = Object.values(members).filter((m) => m.email);

  res.json({ started: true, total: recipients.length });

  (async () => {
    let sent = 0;
    let failed = 0;
    for (const m of recipients) {
      const checkoutUrl = vipOnly ? await getPersonalizedCheckoutUrl(m.id, m.discordUsername || m.username) : null;
      const name = m.displayName || m.username || "there";
      const ok = await sendEmail(
        m.email,
        `New course: ${title}`,
        newCourseEmailHtml(name, { title, cover: coverUrl, externalUrl, vipOnly: Boolean(vipOnly), price, courseUrl }, checkoutUrl)
      );
      if (ok) sent++; else failed++;
      await new Promise((r) => setTimeout(r, 600)); // stay under Resend's rate limit
    }
    console.log(`[email] course announcement "${title}" — sent ${sent}/${recipients.length} (${failed} failed)`);
  })();
});

/* ---- mint a per-user Whop checkout link carrying the buyer's Discord ID as metadata ---- */
async function getPersonalizedCheckoutUrl(userId, username) {
  if (!WHOP_PERSONALIZED_CHECKOUT) return WHOP_CHECKOUT_URL || null;
  try {
    const whopRes = await fetch("https://api.whop.com/api/v1/checkout_configurations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHOP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan_id: WHOP_PLAN_ID,
        mode: "payment",
        metadata: { discord_id: userId, discord_username: username },
      }),
    });
    if (!whopRes.ok) {
      const body = await whopRes.text().catch(() => "");
      console.error("[whop] failed to create checkout configuration:", whopRes.status, body);
      return WHOP_CHECKOUT_URL || null;
    }
    const config = await whopRes.json();
    return config.purchase_url && config.purchase_url.startsWith("http")
      ? config.purchase_url
      : `https://whop.com${config.purchase_url}`;
  } catch (e) {
    console.error("[whop] checkout configuration request failed:", e.message);
    return WHOP_CHECKOUT_URL || null;
  }
}

app.get("/api/vip-checkout-url", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  const url = await getPersonalizedCheckoutUrl(user.id, user.username);
  res.json({ url });
});

/* ---- Whop webhook: fires when a VIP purchase completes ---- */
app.post("/api/whop-webhook", async (req, res) => {
  if (!WHOP_CONFIGURED) return res.status(503).end();

  // Whop signs webhooks with headers webhook-id / webhook-timestamp /
  // webhook-signature, signed content "{id}.{timestamp}.{body}", HMAC-SHA256
  // keyed with the literal secret string as-is (no "ws_" stripping, no base64
  // decoding — confirmed empirically via a real delivery, see commit history).
  const webhookId = req.get("webhook-id");
  const webhookTimestamp = req.get("webhook-timestamp");
  const webhookSignature = req.get("webhook-signature") || "";
  if (!webhookId || !webhookTimestamp || !webhookSignature) {
    console.error("[whop] missing standard-webhooks headers:", JSON.stringify(req.headers));
    return res.status(401).end();
  }

  const secretBytes = Buffer.from(WHOP_WEBHOOK_SECRET, "utf8");
  const signedContent = `${webhookId}.${webhookTimestamp}.${(req.rawBody || Buffer.from("")).toString("utf8")}`;
  const expectedSig = crypto.createHmac("sha256", secretBytes).update(signedContent).digest("base64");

  const providedSigs = webhookSignature.split(" ").map((s) => s.split(",")[1]).filter(Boolean);
  const valid = providedSigs.some((sig) => {
    try {
      return sig.length === expectedSig.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig));
    } catch (e) {
      return false;
    }
  });
  if (!valid) {
    console.error("[whop] webhook signature mismatch", { webhookId, providedSigs, expectedSig });
    return res.status(401).end();
  }

  const event = req.body || {};
  console.log("[whop] webhook received:", event.action || event.type || "(no action field)");

  const action = event.action || event.type;
  const data = event.data || {};
  // "payment.created" fires for every payment attempt regardless of outcome —
  // only treat it as a success once it's actually paid.
  const successActions = ["payment.succeeded", "membership.activated", "membership.went_valid", "membership.valid"];
  const paymentCreatedAndPaid = action === "payment.created" && (data.status === "paid" || data.substatus === "succeeded");
  if (!successActions.includes(action) && !paymentCreatedAndPaid) {
    return res.json({ ok: true, ignored: true });
  }

  // We attach the buyer's Discord ID as checkout metadata ourselves (see
  // /api/vip-checkout-url) since Whop's own payload has no such field —
  // that's the reliable path; the rest are speculative fallbacks.
  const discordId =
    data.metadata?.discord_id ||
    data.discord_id ||
    data.user?.discord_id ||
    data.discord?.id ||
    data.user?.social_accounts?.discord?.id ||
    null;
  const discordUsername =
    data.metadata?.discord_username ||
    data.discord_username ||
    data.user?.discord_username ||
    data.discord?.username ||
    null;

  if (!discordId) {
    console.error("[whop] could not find a Discord ID in webhook payload:", JSON.stringify(event));
    return res.status(200).json({ ok: true, warning: "no_discord_id" });
  }

  // metadata.discord_id comes from whoever was logged in at checkout — local
  // (email/password) accounts don't have a real Discord ID, so skip the
  // Discord-side effects for those rather than pinging a bogus mention.
  const looksLikeDiscordId = /^\d{17,20}$/.test(discordId);

  try {
    await addVipMember(discordId, { whopUserId: data.user?.id || null, username: discordUsername });
    // commission is based on what was actually charged (post-discount), not
    // the plan's list price — falls back to subtotal if "total" isn't present
    const paidAmount = Number(data.total ?? data.subtotal ?? 0);
    if (paidAmount > 0) {
      creditAffiliateCommission(discordId, paidAmount).catch((e) => console.error("[affiliate] credit failed:", e.message));
    }
    if (looksLikeDiscordId) {
      await addVipRole(discordId);
      if (ANNOUNCE_JOINS) {
        await fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
          method: "POST",
          headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}`, "Content-Type": "application/json" },
          body: JSON.stringify({ content: `💎 <@${discordId}> just purchased **VIP**! Welcome to the inner circle.` }),
        });
      }
    }
    // Whop's payload usually has the buyer's email directly; fall back to
    // whatever we already have on file for them (from signup) if not.
    const buyerEmail = data.user?.email || data.email || data.customer?.email || null;
    (async () => {
      const member = (await readMembers())[discordId];
      const email = buyerEmail || member?.email || null;
      if (!email) return;
      await sendEmail(email, "You're VIP now 🎉", vipEmailHtml(member?.displayName || discordUsername || "there"));
    })().catch((e) => console.error("[email] VIP send failed:", e.message));
    res.json({ ok: true });
  } catch (e) {
    console.error("[whop] failed to record VIP membership:", e.message);
    res.status(500).json({ error: "vip_store_failed" });
  }
});

/* ---- Local accounts: email/username/password, parallel to Discord login ---- */
app.post("/auth/register", async (req, res) => {
  if (!s3Client) return res.status(503).json({ error: "account_storage_not_configured" });

  const email = String(req.body?.email || "").trim().toLowerCase();
  const username = String(req.body?.username || "").trim();
  const password = String(req.body?.password || "");
  const niche = String(req.body?.niche || "").trim().slice(0, 60);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "invalid_email" });
  }
  if (username.length < 3 || username.length > 32) {
    return res.status(400).json({ error: "invalid_username" });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: "weak_password" });
  }
  if (!niche) {
    return res.status(400).json({ error: "missing_niche" });
  }

  try {
    const users = await readUsers();
    if (findUserByEmailOrUsername(users, email) || findUserByEmailOrUsername(users, username)) {
      return res.status(409).json({ error: "already_exists" });
    }

    // one account per IP: block if this IP has already claimed an account
    const signupIps = await readSignupIps();
    if (signupIps[req.ip]) {
      return res.status(403).json({ error: "ip_limit_reached" });
    }

    const id = "local_" + crypto.randomBytes(12).toString("hex");
    const passwordHash = await bcrypt.hash(password, 10);
    users[id] = { id, email, username, passwordHash, niche, createdAt: Date.now() };
    await writeUsers(users);
    claimSignupIp(req.ip, id).catch((e) => console.error("[signup-ip] claim failed:", e.message));

    setSession(res, { id, username, displayName: username, avatar: null, authProvider: "local" });
    upsertMember({ id, username, displayName: username, authProvider: "local" }, { niche, email }).catch((e) => console.error("[members] upsert failed:", e.message));
    if (req.cookies.ref_code) {
      recordReferral(id, req.cookies.ref_code).catch((e) => console.error("[affiliate] failed:", e.message));
      res.clearCookie("ref_code");
    }

    if (ANNOUNCE_JOINS) {
      const niches = CATEGORY_LABELS[niche] || niche;
      fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
        method: "POST",
        headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          content:
            `📝 **New registration**\n` +
            `Email: ${email}\n` +
            `Username: ${username}\n` +
            `IP: ${req.ip}\n` +
            `Niche: ${niches}`,
        }),
      }).catch((e) => console.error("[discord] registration announcement failed:", e.message));
    }

    getPersonalizedCheckoutUrl(id, username)
      .then((checkoutUrl) => sendEmail(email, "Welcome to Shipex Academy", welcomeEmailHtml(username, checkoutUrl)))
      .catch((e) => console.error("[email] welcome send failed:", e.message));

    res.json({ ok: true });
  } catch (e) {
    console.error("[auth] registration failed:", e.message);
    res.status(500).json({ error: "registration_failed" });
  }
});

app.post("/auth/login", async (req, res) => {
  if (!s3Client) return res.status(503).json({ error: "account_storage_not_configured" });

  const identifier = String(req.body?.identifier || "").trim();
  const password = String(req.body?.password || "");
  if (!identifier || !password) return res.status(400).json({ error: "missing_fields" });

  try {
    const users = await readUsers();
    const user = findUserByEmailOrUsername(users, identifier);
    if (!user) return res.status(401).json({ error: "invalid_credentials" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "invalid_credentials" });

    setSession(res, { id: user.id, username: user.username, displayName: user.username, avatar: null, authProvider: "local" });
    upsertMember({ id: user.id, username: user.username, displayName: user.username, authProvider: "local" }, { niche: user.niche }).catch((e) => console.error("[members] upsert failed:", e.message));
    res.json({ ok: true });
  } catch (e) {
    console.error("[auth] login failed:", e.message);
    res.status(500).json({ error: "login_failed" });
  }
});

/* ---- affiliate program ---- */
function generateAffiliateCode() {
  return crypto.randomBytes(5).toString("hex"); // 10 chars, e.g. "a1b2c3d4e5"
}

app.get("/api/affiliate/links", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  const links = await readAffiliateLinks();
  const mine = Object.values(links).filter((l) => l.ownerId === user.id);
  res.json({ links: mine });
});

const CUSTOM_AFFILIATE_CODE_RE = /^[a-z0-9](?:[a-z0-9-]{1,28}[a-z0-9])?$/; // 3-30 chars, url-safe

app.post("/api/affiliate/links", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!s3Client) return res.status(503).json({ error: "not_configured" });
  const customCode = String(req.body?.code || "").trim().toLowerCase();

  try {
    const links = await readAffiliateLinks();
    let code;
    if (customCode) {
      if (!CUSTOM_AFFILIATE_CODE_RE.test(customCode)) {
        return res.status(400).json({ error: "invalid_code" });
      }
      if (links[customCode]) {
        return res.status(409).json({ error: "code_taken" });
      }
      code = customCode;
    } else {
      do { code = generateAffiliateCode(); } while (links[code]);
    }
    links[code] = { code, ownerId: user.id, createdAt: Date.now() };
    await writeAffiliateLinks(links);
    res.json({ link: links[code] });
  } catch (e) {
    console.error("[affiliate] create link failed:", e.message);
    res.status(500).json({ error: "create_failed" });
  }
});

app.get("/api/affiliate/dashboard", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });

  try {
    const [accounts, referrals, members] = await Promise.all([readAffiliateAccounts(), readReferrals(), readMembers()]);
    const account = accounts[user.id] || { balance: 0, totalEarned: 0, referralCount: 0, payoutRequests: [] };
    const myReferrals = Object.keys(referrals)
      .filter((refId) => referrals[refId].referrerId === user.id)
      .map((refId) => {
        const r = referrals[refId];
        const m = members[refId];
        return {
          username: (m && (m.displayName || m.username)) || refId,
          referredAt: r.referredAt,
          totalEarned: r.totalEarned || 0,
          lastPaymentAt: r.lastPaymentAt || null,
        };
      })
      .sort((a, b) => b.referredAt - a.referredAt);

    res.json({
      balance: account.balance,
      totalEarned: account.totalEarned,
      referralCount: account.referralCount,
      commissionRate: affiliateCommissionRate(account.referralCount, account),
      referrals: myReferrals,
      payoutRequests: (account.payoutRequests || []).slice().sort((a, b) => b.requestedAt - a.requestedAt),
    });
  } catch (e) {
    console.error("[affiliate] dashboard failed:", e.message);
    res.status(500).json({ error: "dashboard_failed" });
  }
});

app.post("/api/affiliate/payout-request", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!s3Client) return res.status(503).json({ error: "not_configured" });

  const amount = Math.round(Number(req.body?.amount) * 100) / 100;
  if (!amount || amount <= 0) return res.status(400).json({ error: "invalid_amount" });

  try {
    const accounts = await readAffiliateAccounts();
    const account = ensureAffiliateAccount(accounts, user.id);
    if (amount > account.balance) return res.status(400).json({ error: "insufficient_balance" });

    const request = { id: crypto.randomBytes(6).toString("hex"), amount, requestedAt: Date.now(), status: "pending" };
    account.balance = Math.round((account.balance - amount) * 100) / 100;
    account.payoutRequests = account.payoutRequests || [];
    account.payoutRequests.push(request);
    await writeAffiliateAccounts(accounts);

    if (ANNOUNCE_JOINS) {
      fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
        method: "POST",
        headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `💸 **Payout requested**\nUser: ${user.displayName || user.username} (${user.id})\nAmount: $${amount.toFixed(2)}`,
        }),
      }).catch((e) => console.error("[discord] payout announcement failed:", e.message));
    }

    res.json({ ok: true, request });
  } catch (e) {
    console.error("[affiliate] payout request failed:", e.message);
    res.status(500).json({ error: "payout_failed" });
  }
});

app.get("/api/admin/affiliates", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const [accounts, members] = await Promise.all([readAffiliateAccounts(), readMembers()]);
  const out = Object.keys(accounts).map((id) => {
    const a = accounts[id];
    const m = members[id];
    return {
      id,
      username: (m && (m.displayName || m.username)) || id,
      balance: a.balance,
      totalEarned: a.totalEarned,
      referralCount: a.referralCount,
      payoutRequests: a.payoutRequests || [],
      rate: typeof a.rateOverride === "number" ? a.rateOverride : DEFAULT_AFFILIATE_RATE,
      isCustomRate: typeof a.rateOverride === "number",
    };
  });
  res.json({ affiliates: out });
});

app.post("/api/admin/affiliates/:userId/rate", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  const rate = Number(req.body && req.body.rate);
  if (!Number.isFinite(rate) || rate < 0 || rate > 1) return res.status(400).json({ error: "invalid_rate" });
  try {
    const accounts = await readAffiliateAccounts();
    const account = ensureAffiliateAccount(accounts, req.params.userId);
    account.rateOverride = rate;
    await writeAffiliateAccounts(accounts);
    res.json({ ok: true, rate });
  } catch (e) {
    console.error("[affiliate] rate update failed:", e.message);
    res.status(500).json({ error: "update_failed" });
  }
});

app.delete("/api/admin/affiliates/:userId/rate", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  try {
    const accounts = await readAffiliateAccounts();
    const account = accounts[req.params.userId];
    if (account) delete account.rateOverride;
    await writeAffiliateAccounts(accounts);
    res.json({ ok: true, rate: DEFAULT_AFFILIATE_RATE });
  } catch (e) {
    console.error("[affiliate] rate reset failed:", e.message);
    res.status(500).json({ error: "reset_failed" });
  }
});

app.post("/api/admin/affiliate-payouts/:userId/:requestId/mark-paid", async (req, res) => {
  if (!isAdmin(req)) return res.status(403).json({ error: "not_admin" });
  try {
    const accounts = await readAffiliateAccounts();
    const account = accounts[req.params.userId];
    const request = account && (account.payoutRequests || []).find((r) => r.id === req.params.requestId);
    if (!request) return res.status(404).json({ error: "not_found" });
    request.status = "paid";
    request.paidAt = Date.now();
    await writeAffiliateAccounts(accounts);
    res.json({ ok: true });
  } catch (e) {
    console.error("[affiliate] mark-paid failed:", e.message);
    res.status(500).json({ error: "mark_paid_failed" });
  }
});

/* ---- 4. Log out ---- */
app.get("/auth/logout", (req, res) => {
  res.clearCookie(COOKIE);
  res.redirect("/login");
});

// Vercel imports this file as a serverless function and calls the exported
// app directly — it never runs this file with `node server.js`, so only
// bind a real port when we're actually running locally.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\nShipex Academy running → http://localhost:${PORT}\n`);
  });
}

module.exports = app;