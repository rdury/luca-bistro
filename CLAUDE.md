# luca-bistro - the deployed site repo

> **Project context lives one level up: [`../CLAUDE.md`](../CLAUDE.md).**
> That file is the entry point - site map, email routing, v2 status. Open items are in `../TODO.md`.
> **This file covers repo mechanics only.** (SEO/GBP, review replies and the chef@ mailbox moved to
> `../../marketing/` in the Aug 17 2026 split — they are no longer covered by `../CLAUDE.md`.)
> Workspace orientation: `../../../AGENTS.md`. Status owner: `../../../MASTER-TODO.md` → the **Luca - Website** section (refer by name — the numbering re-sorts) — view the live list with the **`/todo`** skill.

Marketing site for **Luca Bistro**, French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet).
One self-contained **`index.html`** (inline style/script, no framework, no build, **CRLF line
endings**). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: fast load,
Provençal design.

Repo `C:\dev\Projects\Code-Home\luca\website\site` · GitHub `rdury/luca-bistro` · Vercel auto-deploy ·
**lucabistro.com** · `master` = production, `preview` = preview branch.

## Rules — owned by `../CLAUDE.md` + the `luca-deploy` skill

The non-negotiable rules of engagement (deploy via `luca-deploy` every time · never `git add -A` · `index.html` stays 100% CRLF · event cards ↔ Event JSON-LD in sync · any hours/closure hits the site AND Google the same day · new content → patch for Frédéric · ask before commit/push/delete) are stated once in [`../CLAUDE.md`](../CLAUDE.md) and enforced by the **`luca-deploy`** skill — read them before touching anything here. One repo-only addition: **markdown in this repo is LF — don't convert it.**

## Branches

`master` = production - **the v2 redesign, LAUNCHED Jul 31 2026** (read the head with `git rev-parse --short origin/master`; do not pin a hash in this file - it goes stale). `preview` =
staging, kept in sync with `master` (deploy flow is edit → `preview` → `push origin preview:master`).
**Only these two branches remain.** Branch tidy done Jul 31 2026: the redundant `LucaBistro-v2` and the
unused `option-2` were deleted (local + remote) after verifying redundancy against `origin/master`;
their content is preserved on GitHub as tags `v2-launched-20260731` and `option-2-archive-20260731`.
Full history in `../CLAUDE.md`.

## Build & preview

No build step. **Local preview: `node serve.js` → localhost:3000 (never `file://`).**
`.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.claude/` off the live site - md-only commits do
not change the deployed site. `vercel.json` = exact-match 301 redirects to section anchors.

## Reference

Tokens: blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · `--gold #806240` /
`--gold-light #c2a882` · fonts Cormorant Garamond + Jost.
Deep history: `archive/` (incl. `STATUS-HISTORY-2026-07.md`).
