/* ============================================================
   APP LOGIC — auth (mock), progress, and page rendering
   ------------------------------------------------------------
   AUTH IS A PLACEHOLDER. Right now "register" / "login" just
   store a fake session in localStorage so the flow works as a
   static site. When you add a backend, replace the three
   Auth.* functions with real Discord OAuth calls — nothing
   else on the pages needs to change.
   ============================================================ */

var Auth = {
  // Ask the server who's logged in. Resolves to a user object or null.
  me: function () {
    return fetch("/api/me", { credentials: "same-origin" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  },
  // Kick off the Discord OAuth flow (server handles the redirect dance).
  login: function () { location.href = "/auth/discord"; },
  // Clear the session cookie on the server, then land on login.
  signOut: function () { location.href = "/auth/logout"; },
  // Gate a page: run cb(user) if signed in, else redirect to login.
  guard: function (cb) {
    this.me().then(function (user) {
      if (!user) { location.href = "login.html"; return; }
      cb(user);
    });
  },
};

/* ---- progress: which lessons are done + last position ---- */
var Progress = {
  KEY: "shipex_progress",
  all: function () {
    try { return JSON.parse(localStorage.getItem(this.KEY) || "{}"); }
    catch (e) { return {}; }
  },
  save: function (data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },
  forCourse: function (courseId) { return this.all()[courseId] || { done: {}, last: null, time: {} }; },
  setLast: function (courseId, lessonId) {
    var d = this.all();
    d[courseId] = d[courseId] || { done: {}, last: null, time: {} };
    d[courseId].last = lessonId;
    this.save(d);
  },
  markDone: function (courseId, lessonId, value) {
    var d = this.all();
    d[courseId] = d[courseId] || { done: {}, last: null, time: {} };
    d[courseId].done[lessonId] = value !== false;
    this.save(d);
  },
  setTime: function (courseId, lessonId, seconds) {
    var d = this.all();
    d[courseId] = d[courseId] || { done: {}, last: null, time: {} };
    d[courseId].time[lessonId] = seconds;
    this.save(d);
  },
  percent: function (course) {
    var p = this.forCourse(course.id);
    var total = 0, done = 0;
    course.chapters.forEach(function (ch) {
      ch.lessons.forEach(function (ls) { total++; if (p.done[ls.id]) done++; });
    });
    return total ? Math.round((done / total) * 100) : 0;
  },
};

/* ---- tiny helpers ---- */
function el(tag, cls, html) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function initials(name) {
  return (name || "?").trim().slice(0, 1).toUpperCase();
}
// Prefer the Discord display name, fall back to the @handle.
function displayName(user) {
  return (user && (user.displayName || user.username)) || "there";
}
// Avatar chip: real Discord avatar if we have one, else an initial.
function userChip(user) {
  var name = displayName(user);
  var av = user && user.avatar
    ? '<img class="userchip__img" src="' + user.avatar + '" alt="">'
    : '<span class="userchip__av">' + initials(name) + '</span>';
  return av + '<span>' + name + '</span>';
}
function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

/* ============================================================
   MOCK DISCORD CONNECT
   Simulates the OAuth round-trip. Replace with a redirect to
   your backend's /auth/discord endpoint when ready.
   ============================================================ */
function startDiscord(btn) {
  btn.disabled = true;
  btn.innerHTML = discordSpinner() + "<span>Redirecting to Discord…</span>";
  Auth.login(); // -> /auth/discord on the server
}
function discordSpinner() {
  return '<span class="spin" aria-hidden="true"></span>';
}
function discordMark() {
  return '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.446.865-.61 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.036A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.42 2.157-2.42 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419Z"/>' +
    '</svg>';
}