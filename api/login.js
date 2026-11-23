// /api/login - sign in to the private schedule page with a personal passcode.
// GET: who is signed in ({ role, label, edits }) or 401.  POST { code }: sign in.  POST { logout: true }: sign out.
// Wrong passcodes are counted per address for 15 minutes; after 5 the address waits.
const L = require('./_lib');

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const role = L.roleFromRequest(req);
      if (!role) return L.send(res, 401, { error: 'Not signed in.' });
      return L.send(res, 200, { role, label: L.ROLES[role].label, edits: L.ROLES[role].edits });
    }
    if (req.method !== 'POST') return L.send(res, 405, { error: 'Not allowed.' });
    const body = await L.readBody(req);
    if (body.logout) return L.send(res, 200, { ok: true }, { 'Set-Cookie': L.clearCookie() });

    const ip = L.clientIp(req);
    const fails = await L.store.failCount(ip);
    if (fails >= 5) return L.send(res, 429, { error: 'Too many tries. Wait 15 minutes, then try again.' });

    const role = L.roleForCode(String(body.code || '').trim());
    if (!role) {
      await L.store.addFail(ip);
      await new Promise(r => setTimeout(r, 600));
      return L.send(res, 401, { error: 'That passcode is not right.' });
    }
    await L.store.clearFails(ip);
    return L.send(res, 200, { role, label: L.ROLES[role].label, edits: L.ROLES[role].edits }, { 'Set-Cookie': L.makeCookie(role, req) });
  } catch (e) {
    return L.send(res, e.status || 500, { error: e.status ? e.message : 'Something went wrong.' });
  }
};
