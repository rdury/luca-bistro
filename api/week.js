// /api/week - read or save one week of the schedule for one tab ("foh" or "kitchen"). Sign-in required.
// GET ?week=YYYY-MM-DD&tab=foh            -> { week, tab, data, canEdit, names }
// GET ?week=...&tab=...&history=1         -> { versions: [{ savedAt, savedBy, data }] } (newest first, up to 30)
// POST { week, tab, data }                -> saves; every save is kept, nothing is deleted.
// Stored in schema `schedule` (luca\website\schedule-db.sql): one week_saves row per save, the people list per tab.
const L = require('./_lib');

const TABS = ['foh', 'kitchen'];
function isMonday(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + 'T12:00:00Z');
  return !isNaN(d) && d.getUTCDay() === 1 && d.toISOString().slice(0, 10) === s;
}
function clean(data) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.rows)) throw Object.assign(new Error('Bad schedule.'), { status: 400 });
  if (data.rows.length > 60) throw Object.assign(new Error('Too many rows.'), { status: 400 });
  const txt = (v, n) => String(v == null ? '' : v).slice(0, n);
  const rows = data.rows.map(r => ({
    name: txt(r.name, 40).trim(),
    job: txt(r.job, 20),
    cells: (Array.isArray(r.cells) ? r.cells : []).slice(0, 7).map(c => ({
      shift: txt(c && c.shift, 12), start: txt(c && c.start, 5), end: txt(c && c.end, 5), job: txt(c && c.job, 20)
    }))
  })).filter(r => r.name);
  const closed = {};
  if (data.closed && typeof data.closed === 'object') {
    for (const [k, v] of Object.entries(data.closed)) if (/^\d{4}-\d{2}-\d{2}$/.test(k)) closed[k] = !!v;
  }
  return { rows, closed, note: txt(data.note, 300) };
}

module.exports = async (req, res) => {
  try {
    const role = L.roleFromRequest(req);
    if (!role) return L.send(res, 401, { error: 'Not signed in.' });
    const canEdit = tab => L.ROLES[role].edits.includes(tab);

    if (req.method === 'GET') {
      const q = L.query(req);
      const week = q.get('week'), tab = q.get('tab');
      if (!isMonday(week) || !TABS.includes(tab)) return L.send(res, 400, { error: 'Pick a week (a Monday) and a tab.' });
      if (q.get('history') === '1') {
        return L.send(res, 200, { versions: await L.store.versions(week, tab, 30) });
      }
      const [cur, names] = await Promise.all([L.store.current(week, tab), L.store.names(tab)]);
      return L.send(res, 200, { week, tab, data: cur, canEdit: canEdit(tab), names });
    }

    if (req.method === 'POST') {
      const body = await L.readBody(req);
      const { week, tab } = body;
      if (!isMonday(week) || !TABS.includes(tab)) return L.send(res, 400, { error: 'Pick a week (a Monday) and a tab.' });
      if (!canEdit(tab)) return L.send(res, 403, { error: 'You can view this tab but not change it.' });
      const data = clean(body.data);
      const savedAt = await L.store.save(week, tab, data, L.ROLES[role].label, data.rows);
      return L.send(res, 200, { ok: true, savedAt });
    }
    return L.send(res, 405, { error: 'Not allowed.' });
  } catch (e) {
    return L.send(res, e.status || 500, { error: e.status ? e.message : 'Something went wrong.' });
  }
};
