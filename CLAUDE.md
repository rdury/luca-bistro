# luca-bistro — the deployed site repo

> **Project context lives one level up: [`../CLAUDE.md`](../CLAUDE.md).**
> That file is the entry point — site map, email routing, v2 status, SEO/GBP/review rules, mailbox
> work. Open items are in `../TODO.md`. **This file covers repo mechanics only.**

Marketing site for **Luca Bistro**, French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet).
One self-contained **`index.html`** (inline style/script, no framework, no build, **CRLF line
endings**). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: fast load,
Provençal design.

Repo `C:\dev\Projects\Code-Home\lb-web\site` · GitHub `rdury/luca-bistro` · Vercel auto-deploy ·
**lucabistro.com** · `master` = production, `preview` = preview branch.

## Rules (non-negotiable)

- **Any commit/deploy → the `luca-deploy` skill** (integrity ritual after every `index.html` edit —
  the site was once truncated mid-edit; the ritual is the guard).
- **Never `git add -A`** — stage named files only. No line-ending changes (`core.autocrlf` false;
  `index.html` must stay 100% CRLF). Markdown in this repo is LF — don't convert it either.
- **Ask Raymond before commit/push** (files + message + branch). New content/design → package as a
  git patch for **Frédéric's sign-off** first, unless Raymond deploys as owner. Ask before deleting.
- **Keep event cards and the head Event JSON-LD in sync** on every event add/change/expiry; move
  expired events to the Missed Events tab.
- **Hours accuracy is a sore point** — any closure or odd hours goes to the site (hours note + footer
  + `specialOpeningHoursSpecification` JSON-LD) **AND** Google Business Profile, same day.

## Branches

`master` (production) · `preview` (preview deploys) · `LucaBistro-v2` (the v2 redesign — diverged
from `origin/master`, **rebase owed before any merge**) · `option-2` (earlier design exploration).
Full v2 status in `../CLAUDE.md`.

## Build & preview

No build step. **Local preview: `node serve.js` → localhost:3000 (never `file://`).**
`.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.claude/` off the live site — md-only commits do
not change the deployed site. `vercel.json` = exact-match 301 redirects to section anchors.

## Reference

Tokens: blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · `--gold #806240` /
`--gold-light #c2a882` · fonts Cormorant Garamond + Jost.
Deep history: `archive/` (incl. `STATUS-HISTORY-2026-07.md`).
