# Luca Bistro — Agent Context (read this first)

Single source of truth, consolidated Jul 3, 2026. All prior notes (`IMPROVEMENT-PLAN.md`, `DEPLOY-GUIDE.md`, `quick-fixes-plan.md`, `enhancements-plan.md`, `sync-issue-todo.md`, `site-review-update.md`, `website-suggestions.md`) now live in `archive/` — open them only for line-level detail.

## What it is
Marketing site for **Luca Bistro**, a French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet, south-of-France concept). One self-contained file: **`index.html`** (inline `<style>` + `<script>`, no framework, no build, CRLF line endings). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: **fast load, thoughtful Provençal design.**

## Hosting & deploy
- **Vercel**, auto-deploys from GitHub; **lucabistro.com** is live (cut over from BentoBox). Vercel Web Analytics on.
- `master` → **production** · `preview` → **preview**. Flow: push to `preview` → verify preview build in Vercel → promote with `git push origin preview:master`.
- **Owner (Raymond) runs all git** — the sandbox can't push (GitHub 403). Agents prepare edits + exact commands.
- Deploy essentials (full cheat sheet in `archive/DEPLOY-GUIDE.md`): work in the project folder; first push of a new branch needs `git push -u origin <branch>`; "Everything up-to-date" means nothing new — use `git commit --allow-empty` to force a build; all builds appear in Vercel → Deployments.
- `.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.env.example`, `.claude/`, and the stray screenshot off the live site. Web3Forms powers contact/jobs forms — the `access_key` in the HTML is **public by design**, not a leak.

## ⚠️ Critical: sync/truncation hazard + integrity ritual
The repo previously lived in a OneDrive-synced path that repeatedly **truncated files** (`index.html`, `.vercelignore`), showed **stale mounts**, and left **stuck `.git` locks**. The repo is now at **`C:\dev\projects\luca-bistro`**; if any tooling still shows stale file views, trust the host file tools over the Linux mount.
- **Never `git add -A`**; commit specific files (`git add index.html`). No line-ending normalization (that caused the truncations).
- **After ANY `index.html` edit:** file ends with `</script></body></html>`; inline JS parses (`node --check`); footer shows `© 2026` with a year — a bare `©` means the script got truncated → **do not deploy**.
- Stale-lock fix: `del .git\index.lock .git\HEAD.lock .git\objects\maintenance.lock` (only when no git is running).
- If a `.gitattributes` is ever added, pin the status quo (`*.html text eol=crlf`) — `* text=auto` + `eol=lf` would trigger the mass rewrite that broke things before.

## Current status (Jul 4, 2026)
Live and healthy. Production = local HEAD = `2b66b0b` (QC fixes; G0 sync done). Full markup review passed.
**G8 move QC'd Jul 4:** clone at `C:\dev\Projects\luca-bistro` verified healthy — HEAD matches production, `index.html` intact (ending, footer-year script, balanced script tags), `.vercelignore` intact, remote + both branches configured, no stale locks, live site matches local.
The scheduled task **`luca-bistro-worldcup-schedule`** (Mondays ~8:07 AM) was repointed Jul 4 to the new repo path, and its SKILL fixed (correct heading/note text, integrity check added, `git add index.html` instead of `git add -A`). It is currently **disabled** — owner to decide whether to re-enable before Jul 19.
**Owner to-dos from QC:** (1) `.git/config` has an ignored typo line `autocrl = true` — run `git config core.autocrlf false` then `git config --unset core.autocrl`; (2) confirm the old OneDrive copy (`C:\Users\rdury\OneDrive\Documents\Projects\Luca Bistro`) is deleted or renamed so nothing edits the stale copy.

## Open work (details per group in `archive/IMPROVEMENT-PLAN.md`)
Approval gates: any pricing/menu/content change or new section needs explicit owner approval first.

**Now (owner approval needed):**
- **G1 Menu consistency:** 84 Burger $16 dinner vs $15 lunch (confirm/align) + ingredient order; Avocado Shrimp Salad dinner description → "Grilled shrimp" (price already $20 everywhere).
- ~~**G2 Wine accents**~~ ✅ done Jul 4 (Réserve de Marande ×2, Réserve de Mauny, Domaine Inès — owner-confirmed, edited, integrity ritual passed; **awaiting commit + deploy**). Two follow-ups from online verification: (a) Réserve de Marande is a Languedoc/Pays d'Oc producer but the list says "Provence" — check the bottle's region; (b) the Crémant producer appears online as "**Château** de Mauny", not "Réserve" — check the label.
- **G3 World Cup interim hygiene** (only worth it before Jul 19): resolve/remove two "Winner …" fixture rows; owner decision on the Jul 11 9:00 PM Kansas City row (kickoff at closing time). ~~SKILL fixes~~ ✅ done Jul 4 (see status above).

**⏰ After July 19 — G4 World Cup teardown:** remove banner, event card, fixtures table + orphaned `wc-` CSS; keep "Rosé All Day 2026" heading (drop its inline margin-top); disable the scheduled task; optional Past Events memorial entry. Verify `grep -c "wc-"` = 0.

**Anytime, no approval:** G5 intrinsic image `width`/`height` (+ fix double-space in About `<img>`; consider re-exporting the 103 KB `logo.png`); G6 footer contrast nudges (`.closed` → ~`#BCC9D7`, `.copy` → ~`#D5CCB6`); G7 add `.event-tabs` to the mobile horizontal-scroll rules.

**Enhancements (owner picks):** G9 submit `sitemap.xml` in Google Search Console (owner action, biggest free SEO lever) · G10 newsletter signup via existing Web3Forms pattern (no new JS needed) · G11 private-events/large-parties callout · G12 lazy-loaded Google Map in Hours · G13 Instagram (@lucabistro84) — recommend a zero-script link tile, not an embed.

## Design tokens
Provençal blue hero/footer `#1C4B70` · yellow `#F8C325` · French-flag red `#9E1B32` · cream `#E4DAC2` · warm gold vars (`--gold #806240`, `--gold-light #c2a882`). Fonts: Cormorant Garamond (serif) + Jost (sans). Contact: (513) 621-5822 · lucabistro84@gmail.com · 934 Hatch St.
