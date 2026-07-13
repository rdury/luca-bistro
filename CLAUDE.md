# Luca Bistro — Agent Context (read this first)

Marketing site for **Luca Bistro**, a French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet, south-of-France concept). One self-contained file: **`index.html`** (inline `<style>` + `<script>`, no framework, no build, CRLF line endings). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: **fast load, thoughtful Provençal design.**

Repo: `C:\dev\Projects\Code-Home\luca-bistro` · GitHub `rdury/luca-bistro` · Vercel auto-deploy · **lucabistro.com** live. `master` = production, `preview` = preview.

## Rules (non-negotiable)
- **Deploying or committing anything → use the `luca-deploy` skill.** It carries the integrity ritual (this site was once truncated by OneDrive sync — the ritual is the guard) and the full deploy flow.
- **Never `git add -A`** — stage named files only. No line-ending normalization. `core.autocrlf` pinned `false` locally.
- **Ask Raymond before any commit/push** (files + message + branch). Content changes (pricing, menu, new sections) need his approval *before* the edit.

## Current status (Jul 8, 2026)
Live and healthy. Production = `e80574a`; all Jul-4 QC and improvement groups (G2/G3/G5–G8) are deployed. History: `archive/STATUS-HISTORY-2026-07.md`.
**World Cup archived Jul 12** (`485aaa4`, Raymond's call — "event is over for us"): no WC in Current Events; memorial entry with the knockout `.wc-bracket` lives permanently under Missed Events; hero Allez les Bleus banner stays until the scheduled task `luca-worldcup-banner-timeout` (Mon Jul 20, 9 AM, pre-authorized to deploy) removes it and fills final results into the bracket. Daily task `luca-worldcup-daily` is disabled and now moot. Temporary "closed Tue Jul 14" hours notices (deployed `12c0c1c`) are removed by task `luca-tuesday-closure-reversal` (Wed Jul 15, 9 AM, pre-authorized).
**Frédéric queue: empty** (Jul 12 — Raymond deployed the former bundle as owner). Live now: `#private-events` section (INTERIM: full request form whose submit composes a prefilled email to events@lucabistro.com via mailto — no backend; Raymond confirmed the address receives mail; when the dury.net admin project lands, swap the `#pe-form` submit handler for a real POST) and the "Cadre Bistro" parchment menu (CSS-only: every menu tab on aged parchment + grain in the gilt frame with faint cicada watermark; 4-look mockup kept locally as untracked `menu-parchment-preview.html`). Photos for the private-events section still owed by Raymond. (All superseded patch files deleted with Raymond's OK — `archive/` holds no pending patches.)

## Open work
Full working checklist — completed log, ongoing/recurring items, and the "Frédéric's Voice" track — lives in **`TODO.md`** (keep the two in sync; TODO.md is the detailed list, this section is the summary).
- **G1 Menu consistency (owner input):** 84 Burger $16 dinner vs $15 lunch; Avocado Shrimp Salad dinner description → "Grilled shrimp".
- **G2 follow-ups (owner checks bottle labels):** Réserve de Marande region (list says Provence, producer looks Languedoc/Pays d'Oc); Crémant producer "Château" vs "Réserve" de Mauny.
- **⏰ After Jul 19 — G4 World Cup teardown:** remove banner, event card, fixtures table, results line + all orphaned `wc-` CSS (verify `grep -c "wc-"` = 0); keep "Rosé All Day 2026" heading (drop its inline margin-top); disable the scheduled task; optional Past Events memorial entry.
- **Event schema upkeep (Jul 8):** `index.html` head has a second JSON-LD block with `Event` markup for the Rosé All Day dates. Any edit to event cards (add/cancel/date change) must update this block too; remove entries once an event has passed.
- **Enhancements (owner picks):** ~~G9 Search Console~~ (done Jul 8 — domain verified, sitemap submitted; check Performance tab monthly) · G10 newsletter signup via existing Web3Forms pattern · G11 private-events callout · G12 lazy-loaded map · G13 Instagram link tile (@lucabistro84, no embed). Optional: re-export 103 KB `logo.png` at 2×.

## Reference
Design tokens: Provençal blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · gold vars (`--gold #806240`, `--gold-light #c2a882`). Fonts: Cormorant Garamond + Jost. Contact: (513) 621-5822 · lucabistro84@gmail.com · 934 Hatch St.
`.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.env.example`, `.claude/` off the live site. `vercel.json` 301-redirects legacy old-site paths (`/menus/`, `/contact/`, etc.) to section anchors — exact-match only, doesn't touch real asset paths under `/photos/`. Web3Forms `access_key` in the HTML is public by design. Deep history: `archive/`.
