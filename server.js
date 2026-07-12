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
app.get("/api/me", (req, res) => {
  const t = req.cookies[COOKIE];
  if (!t) return res.status(401).json({ error: "not_authenticated" });
  try {
    const user = jwt.verify(t, SESSION_SECRET);
    res.json({ id: user.id, username: user.username, displayName: user.displayName, avatar: user.avatar });
  } catch {
    res.status(401).json({ error: "invalid_session" });
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