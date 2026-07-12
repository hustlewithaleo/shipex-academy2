# Shipex Academy — Discord login

Course platform with **Discord OAuth2 login**. The Node server handles the
login flow and serves the site; sessions are a signed httpOnly cookie (no
database needed).

## What you need to do once: create a Discord app

1. Go to <https://discord.com/developers/applications> → **New Application**.
2. Open **OAuth2** in the sidebar. Copy the **Client ID** and **Client Secret**. 1525577387863965887 / wBKtjFpt7b7qUfBNY7RpM12oZqet7P_6
3. Under **Redirects**, add:
   - `http://localhost:3000/auth/discord/callback` (for local testing)
   - `https://YOUR-DOMAIN/auth/discord/callback` (for production, once you deploy)
4. Save.

## Configure

```bash
cp .env.example .env
```

Open `.env` and paste in your **Client ID**, **Client Secret**, and a random
**SESSION_SECRET**. Generate the secret with:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Make sure `DISCORD_REDIRECT_URI` in `.env` **exactly matches** the redirect you
added in the Discord portal (protocol, host, port, path — all identical).

## Run

```bash
npm install
npm start          # or: npm run dev  (auto-restarts on file changes)
```

Open <http://localhost:3000>. Click **Join our free academy** → **Continue with
Discord** → authorize → you land on the dashboard.

## How it fits together

| Route                        | What it does                                        |
|------------------------------|-----------------------------------------------------|
| `GET /auth/discord`          | Sends the user to Discord to authorize              |
| `GET /auth/discord/callback` | Exchanges the code, sets the session, → dashboard   |
| `GET /api/me`                | Returns the logged-in user, or 401                  |
| `GET /auth/logout`           | Clears the session, → login                         |

The front-end (`public/app.js`) calls these through `Auth.login()`,
`Auth.me()`, `Auth.guard()`, and `Auth.signOut()`. The dashboard and course
pages call `Auth.guard()` on load, which redirects to `login.html` if there's
no valid session.

## Deploying

Any host that runs Node works (Railway, Render, Fly.io, a VPS). Set the same
environment variables there, set `NODE_ENV=production` (this makes the session
cookie HTTPS-only), and add your production redirect URL both in `.env` and in
the Discord portal.

## Common gotchas

- **"Invalid OAuth2 redirect_uri"** → the URI in `.env` doesn't byte-for-byte
  match the one in the Discord portal. Check http vs https, port, trailing slash.
- **Login works but dashboard bounces to login** → in production the cookie is
  `secure`, so it only works over HTTPS. Serve the site over HTTPS.

## Optional upgrades (say the word and I'll add them)

- **Gate access to your Discord server members only** (add `guilds` scope and
  check membership on callback).
- **Auto-join users to your Discord** on login (`guilds.join` scope + bot token).
- **Server-side progress** instead of per-browser localStorage.
