# luca-bistro - the deployed site repo

This file covers repo mechanics only.
Project context lives one level up, outside this repo: `../AGENTS.md` is the operating guide (site map, email routing, the event and closure retirement checklists, the deploy flow), `../PROJECT.md` the status and decisions, `../CLAUDE.md` the project rules, `../TODO.md` the open items.

Marketing site for Luca Bistro, French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet).
One self-contained `index.html` (inline style/script, no framework, no build, CRLF line endings); assets in `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: fast load, Provençal design.
Repo `C:\dev\Projects\Code-Home\luca\website\site` · GitHub `rdury/luca-bistro` · Vercel auto-deploy · lucabistro.com · `master` = production, `preview` = staging.

## Rules (owned by ../CLAUDE.md + the luca-deploy skill)
Deploy via `luca-deploy` every time; never `git add -A`; `index.html` stays 100% CRLF; event cards and the head Event JSON-LD stay in sync; any hours or closure hits the site AND Google the same day; new content goes to Frédéric as a patch; ask before commit, push or delete. Repo-only: markdown here is LF, do not convert it.

## Branches
`master` = production (v2, launched Jul 31 2026); read `origin/master` with `git rev-parse --short origin/master`, never pin a hash here. `preview` = staging, kept in sync with `master` on the remote; deploy flow is edit -> `preview` -> `push origin preview:master`.
That promote moves only `origin/master`, never the LOCAL `master` (it silently lags), so read `origin/master` and fast-forward the local ref with `git fetch origin master:master` when needed.
Only these two branches remain; the deleted `LucaBistro-v2` and `option-2` are preserved as tags `v2-launched-20260731` and `option-2-archive-20260731`. Deep history: `../PROJECT.md`.

## Build and preview
No build step. Local preview: `node serve.js` -> localhost:3000 (never `file://`).
`.vercelignore` keeps `serve.js`, `*.md`, `.env.example`, `.claude/`, `.Codex/` and `*.bak` off the live site, so md-only commits do not change the deployed site. `vercel.json` = exact-match 301 redirects to section anchors. `.gitignore` keeps `graphify-out/` out; the website graph is built from `..\`, never inside this repo.

## Reference
Tokens: blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · `--gold #806240` / `--gold-light #c2a882` · fonts Cormorant Garamond + Jost.
Deep history: `archive/STATUS-HISTORY-2026-07.md`.
