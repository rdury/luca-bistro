// Shared helpers for the private schedule page (/schedule). Not a function: Vercel skips api files that start with "_".
// Settings (Vercel project settings, never in the repo):
//   SCHEDULE_CODE_FOH   - passcode of the front-of-house manager (edits Front of house)
//   SCHEDULE_CODE_OWNER - passcode of the owner (edits both tabs)
//   SCHEDULE_SECRET     - long random string that signs the sign-in cookie
//   SCHEDULE_DATABASE_URL - Supabase pooler connection as the `schedule_app` login (schema `schedule` only; luca\website\schedule-db.sql)
// Local testing only: serve.js sets SCHEDULE_DEV_MEMORY=1 and the store lives in memory.
const crypto = require('crypto');

const COOKIE = 'luca_sched';
const MAX_AGE = 90 * 24 * 3600; // 90 days, in seconds
const ROLES = { foh: { label: 'Front-of-house manager', edits: ['foh'] }, owner: { label: 'Owner', edits: ['foh', 'kitchen'] } };

// ---------- store: Postgres (schema `schedule`), or memory for local tests ----------
// One row per save in schedule.week_saves (never updated); the current week is its newest row.
const mem = global.__lucaSchedMem || (global.__lucaSchedMem = { saves: [], people: {}, fails: {} });
let sql = null;
function db() {
  const url = process.env.SCHEDULE_DATABASE_URL;
  if (!url) {
    if (process.env.SCHEDULE_DEV_MEMORY === '1') return null;
    const e = new Error('The schedule store is not set up yet.'); e.status = 503; throw e;
  }
  if (!sql) sql = require('postgres')(url, { prepare: false, max: 1, idle_timeout: 20, connect_timeout: 15, ssl: 'require' });
  return sql;
}
async function q(fn, memFn) {
  const s = db();
  if (!s) return memFn();
  try { return await fn(s); }
  catch (err) {
    console.error('schedule store:', err && err.code, err && err.message);
    const e = new Error('The schedule is resting or unreachable. Try again in a minute.'); e.status = 503; throw e;
  }
}
const store = {
  async failCount(ip) {
    return q(async s => { const r = await s`select fails from signin_fails where ip = ${ip} and until > now()`; return r.length ? r[0].fails : 0; },
      () => { const f = mem.fails[ip]; return f && f.until > Date.now() ? f.fails : 0; });
  },
  async addFail(ip) {
    return q(s => s`insert into signin_fails (ip, fails, until) values (${ip}, 1, now() + interval '15 minutes')
                  on conflict (ip) do update set fails = case when signin_fails.until > now() then signin_fails.fails + 1 else 1 end,
                                                 until = now() + interval '15 minutes'`,
      () => { const f = mem.fails[ip]; mem.fails[ip] = { fails: f && f.until > Date.now() ? f.fails + 1 : 1, until: Date.now() + 9e5 }; });
  },
  async clearFails(ip) { return q(s => s`delete from signin_fails where ip = ${ip}`, () => { delete mem.fails[ip]; }); },
  async current(week, tab) {
    return q(async s => { const r = await s`select data, saved_at, saved_by from week_saves where week_start = ${week} and tab = ${tab} order by saved_at desc, id desc limit 1`; return r.length ? withMeta(r[0]) : null; },
      () => { const l = mem.saves.filter(x => x.week === week && x.tab === tab); return l.length ? l[l.length - 1].saved : null; });
  },
  async versions(week, tab, limit) {
    return q(async s => (await s`select data, saved_at, saved_by from week_saves where week_start = ${week} and tab = ${tab} order by saved_at desc, id desc limit ${limit}`).map(withMeta),
      () => mem.saves.filter(x => x.week === week && x.tab === tab).map(x => x.saved).reverse().slice(0, limit));
  },
  async save(week, tab, data, savedBy, rows) {
    return q(async s => {
      const r = await s.begin(async t => {
        const ins = await t`insert into week_saves (week_start, tab, data, saved_by) values (${week}, ${tab}, ${t.json(data)}, ${savedBy}) returning saved_at`;
        for (const p of rows) await t`insert into people (tab, name, usual_job) values (${tab}, ${p.name}, ${p.job || ''})
                                      on conflict (tab, name) do update set usual_job = excluded.usual_job, updated_at = now()`;
        return ins[0].saved_at;
      });
      return new Date(r).toISOString();
    }, () => {
      const savedAt = new Date().toISOString();
      mem.saves.push({ week, tab, saved: Object.assign({}, data, { savedAt, savedBy }) });
      const p = mem.people[tab] || (mem.people[tab] = {}); for (const r of rows) p[r.name] = r.job || '';
      return savedAt;
    });
  },
  async names(tab) {
    return q(async s => { const m = {}; for (const r of await s`select name, usual_job from people where tab = ${tab} order by name`) m[r.name] = r.usual_job; return m; },
      () => Object.assign({}, mem.people[tab] || {}));
  }
};
function withMeta(r) { return Object.assign({}, r.data, { savedAt: new Date(r.saved_at).toISOString(), savedBy: r.saved_by }); }

// ---------- request / response ----------
function send(res, status, obj, extraHeaders) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  if (extraHeaders) for (const [k, v] of Object.entries(extraHeaders)) res.setHeader(k, v);
  res.end(JSON.stringify(obj));
}
async function readBody(req) {
  if (req.body !== undefined && req.body !== null) return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  const chunks = []; let size = 0;
  for await (const c of req) { size += c.length; if (size > 300000) { const e = new Error('Too large'); e.status = 413; throw e; } chunks.push(c); }
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}
function query(req) { return new URL(req.url, 'http://x').searchParams; }
function clientIp(req) {
  const f = req.headers['x-forwarded-for'];
  return (f ? String(f).split(',')[0] : (req.socket && req.socket.remoteAddress) || 'unknown').trim();
}

// ---------- passcodes and the signed cookie ----------
function sameText(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}
function roleForCode(code) {
  if (!code) return null;
  let found = null;
  for (const [role, env] of [['owner', 'SCHEDULE_CODE_OWNER'], ['foh', 'SCHEDULE_CODE_FOH']]) {
    const want = process.env[env];
    if (want && want.length >= 4 && sameText(code, want) && !found) found = role;
  }
  return found;
}
function secret() {
  const s = process.env.SCHEDULE_SECRET;
  if (!s || s.length < 16) { const e = new Error('The schedule sign-in is not set up yet.'); e.status = 503; throw e; }
  return s;
}
function sign(payload) { return crypto.createHmac('sha256', secret()).update(payload).digest('base64url'); }
function makeCookie(role, req) {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE;
  const payload = role + '.' + exp;
  const secure = /localhost|127\.0\.0\.1/.test(req.headers.host || '') ? '' : '; Secure';
  return COOKIE + '=' + payload + '.' + sign(payload) + '; Path=/; Max-Age=' + MAX_AGE + '; HttpOnly; SameSite=Strict' + secure;
}
function clearCookie() { return COOKIE + '=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict'; }
function roleFromRequest(req) {
  const raw = String(req.headers.cookie || '').split(/;\s*/).find(c => c.startsWith(COOKIE + '='));
  if (!raw) return null;
  const [role, exp, sig] = raw.slice(COOKIE.length + 1).split('.');
  if (!ROLES[role] || !exp || !sig) return null;
  if (+exp < Date.now() / 1000) return null;
  const want = sign(role + '.' + exp);
  if (want.length !== sig.length || !crypto.timingSafeEqual(Buffer.from(want), Buffer.from(sig))) return null;
  return role;
}

module.exports = { ROLES, store, send, readBody, query, clientIp, roleForCode, makeCookie, clearCookie, roleFromRequest };
