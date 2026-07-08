# Luca Bistro — Agent Context (read this first)

Marketing site for **Luca Bistro**, a French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet, south-of-France concept). One self-contained file: **`index.html`** (inline `<style>` + `<script>`, no framework, no build, CRLF line endings). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: **fast load, thoughtful Provençal design.**

Repo: `C:\dev\Projects\Code-Home\luca-bistro` · GitHub `rdury/luca-bistro` · Vercel auto-deploy · **lucabistro.com** live. `master` = production, `preview` = preview.

## Rules (non-negotiable)
- **Deploying or committing anything → use the `luca-deploy` skill.** It carries the integrity ritual (this site was once truncated by OneDrive sync — the ritual is the guard) and the full deploy flow.
- **Never `git add -A`** — stage named files only. No line-ending normalization. `core.autocrlf` pinned `false` locally.
- **Ask Raymond before any commit/push** (files + message + branch). Content changes (pricing, menu, new sections) need his approval *before* the edit.

## Current status (Jul 8, 2026)
Live and healthy. Production = `e80574a`; all Jul-4 QC and improvement groups (G2/G3/G5–G8) are deployed. History: `archive/STATUS-HISTORY-2026-07.md`.
World Cup fixtures/results are maintained by the app-scheduled task `luca-worldcup-daily` (daily ~8:09 AM, pre-authorized to commit/push its own updates after the integrity ritual). The old stale Desktop task has been deleted.

## Open work
- **G1 Menu consistency (owner input):** 84 Burger $16 dinner vs $15 lunch; Avocado Shrimp Salad dinner description → "Grilled shrimp".
- **G2 follow-ups (owner checks bottle labels):** Réserve de Marande region (list says Provence, producer looks Languedoc/Pays d'Oc); Crémant producer "Château" vs "Réserve" de Mauny.
- **⏰ After Jul 19 — G4 World Cup teardown:** remove banner, event card, fixtures table, results line + all orphaned `wc-` CSS (verify `grep -c "wc-"` = 0); keep "Rosé All Day 2026" heading (drop its inline margin-top); disable the scheduled task; optional Past Events memorial entry.
- **Event schema upkeep (Jul 8):** `index.html` head has a second JSON-LD block with `Event` markup for the Rosé All Day dates. Any edit to event cards (add/cancel/date change) must update this block too; remove entries once an event has passed.
- **Enhancements (owner picks):** ~~G9 Search Console~~ (done Jul 8 — domain verified, sitemap submitted; check Performance tab monthly) · G10 newsletter signup via existing Web3Forms pattern · G11 private-events callout · G12 lazy-loaded map · G13 Instagram link tile (@lucabistro84, no embed). Optional: re-export 103 KB `logo.png` at 2×.

## Reference
Design tokens: Provençal blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · gold vars (`--gold #806240`, `--gold-light #c2a882`). Fonts: Cormorant Garamond + Jost. Contact: (513) 621-5822 · lucabistro84@gmail.com · 934 Hatch St.
`.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.env.example`, `.claude/` off the live site. Web3Forms `access_key` in the HTML is public by design. Deep history: `archive/`.
