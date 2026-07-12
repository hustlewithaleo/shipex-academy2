/* ============================================================
   Shipex Academy — auth server
   ------------------------------------------------------------
   Handles Discord OAuth2 (authorization code grant) and serves
   the static site in /public. Sessions are a signed, httpOnly
   JWT cookie — no database required.

   Flow:
     GET  /auth/discord           -> redirect user to Discord
     GET  /auth/discord/callback  -> exchange code, set cookie, -> /dashboard
     GET  /api/me                 -> { id, username, avatar } or 401
     GET  /auth/logout            -> clear cookie, -> /login

   Pages are served without their .html extension (e.g. /dashboard instead
   of /dashboard.html) — see the two middlewares right below express.static.

   Fill in the values in .env (copy from .env.example) before running.
   ============================================================ */

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

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
app.use(cookieParser());

// Canonicalize away the .html extension: /dashboard.html -> /dashboard.
app.get(/\.html$/, (req, res) => {
  res.redirect(301, req.path.slice(0, -".html".length) + req.url.slice(req.path.length));
});

// keep the raw body around too — needed to verify the Whop webhook signature
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }));
app.use(express.static(path.join(__dirname, "public")));

// Serve pretty URLs: /dashboard -> public/dashboard.html, if that file exists.
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
const SCOPES = AUTO_JOIN_GUILD ? ["identify", "guilds.join"] : ["identify"];
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
const VIDEO_URL_TTL_SECONDS = 4 * 60 * 60; // 4 hours — comfortably covers watching one lesson

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

/* ---- 1. Start OAuth: send the user to Discord ---- */
app.get("/auth/discord", (req, res) => {
  // CSRF protection: random state stored in a short-lived cookie, checked on return.
  const state = crypto.randomBytes(16).toString("hex");
  res.cookie("oauth_state", state, {
    httpOnly: true, secure: isProd, sameSite: "lax", maxAge: 10 * 60 * 1000,
  });
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
    };
    setSession(res, user);

    // pull the user into your Discord server, if that's configured
    if (AUTO_JOIN_GUILD) {
      await joinGuild(token.access_token, d.id);
    }
    // announce the join in your channel, if that's configured
    if (ANNOUNCE_JOINS) {
      await announceJoin(user);
    }

    res.redirect("/dashboard");
  } catch (e) {
    console.error("[oauth]", e.message);
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
    const url = await getSignedUrl(s3Client, command, { expiresIn: VIDEO_URL_TTL_SECONDS });
    res.json({ url });
  } catch (e) {
    console.error("[r2] failed to sign URL for", key, e.message);
    res.status(500).json({ error: "sign_failed" });
  }
});

/* ---- public homepage preview video: signed URL for one fixed key, no login required ---- */
const PREVIEW_VIDEO_KEY = "preview1.mp4";
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
};
app.post("/api/request-course", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
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

/* ---- mint a per-user Whop checkout link carrying the buyer's Discord ID as metadata ---- */
app.get("/api/vip-checkout-url", async (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ error: "not_authenticated" });
  if (!WHOP_PERSONALIZED_CHECKOUT) {
    return res.json({ url: WHOP_CHECKOUT_URL || null });
  }
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
        metadata: { discord_id: user.id, discord_username: user.username },
      }),
    });
    if (!whopRes.ok) {
      const body = await whopRes.text().catch(() => "");
      console.error("[whop] failed to create checkout configuration:", whopRes.status, body);
      return res.json({ url: WHOP_CHECKOUT_URL || null });
    }
    const config = await whopRes.json();
    const purchaseUrl = config.purchase_url && config.purchase_url.startsWith("http")
      ? config.purchase_url
      : `https://whop.com${config.purchase_url}`;
    res.json({ url: purchaseUrl });
  } catch (e) {
    console.error("[whop] checkout configuration request failed:", e.message);
    res.json({ url: WHOP_CHECKOUT_URL || null });
  }
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

  try {
    await addVipMember(discordId, { whopUserId: data.user?.id || null, username: discordUsername });
    await addVipRole(discordId);
    if (ANNOUNCE_JOINS) {
      await fetch(`${DISCORD_API}/channels/${DISCORD_ANNOUNCE_CHANNEL_ID}/messages`, {
        method: "POST",
        headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify({ content: `💎 <@${discordId}> just purchased **VIP**! Welcome to the inner circle.` }),
      });
    }
    res.json({ ok: true });
  } catch (e) {
    console.error("[whop] failed to record VIP membership:", e.message);
    res.status(500).json({ error: "vip_store_failed" });
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