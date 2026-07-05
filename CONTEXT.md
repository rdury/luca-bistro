# Luca Bistro — Agent Context (read this first)

Single source of truth, consolidated **Jul 4, 2026 (late evening)**. Detailed plans live in `archive/` (`IMPROVEMENT-PLAN.md` has line-level detail per group) — open only if needed.

## ⚡ Branch you are on matters
- **`master`** = the live Provençal-blue site (production).
- **`option-2`** = full redesign exploration ("Provençal Heritage", from a Google Stitch design). Same content, different skin. **`index.html` differs completely between branches — check `git branch` before editing.**

## What it is
Marketing site for **Luca Bistro**, a French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet, south-of-France concept). One self-contained file: **`index.html`** (inline `<style>` + `<script>`, no framework, no build, CRLF line endings). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: **fast load, thoughtful Provençal design.**

## Hosting & deploy
- **Vercel**, auto-deploys from GitHub (`rdury/luca-bistro`); **lucabistro.com** live. Vercel Web Analytics on.
- `master` → **production** · `preview` → **preview**. Flow: push to `preview` → verify build → promote `git push origin preview:master`.
- **Owner (Raymond) runs all git from his machine.** Agents prepare edits + exact commands. Sandbox git is now off-limits (see hazards).
- `.vercelignore` keeps `*.md` (incl. `archive/`), `*.bak`, `serve.js`, `.env.example`, `.claude/`, stray screenshot off the live site. Web3Forms powers contact/jobs forms (`access_key` in HTML is public by design).

## ⚠️ Hazards + integrity ritual
1. **Repo moved out of OneDrive Jul 4** to `C:\dev\Projects\luca-bistro` (G8 ✅). Truncation root cause gone, but:
2. **Cowork Linux-mount views go stale mid-session** — files list but won't read, git reports corrupt index, mixed cache pages. **Trust host file tools (Read/Edit/Grep) over the Linux mount. Never run git from the sandbox if the mount looks off.**
3. **Never `git add -A`** — commit specific files (`git add index.html`). No line-ending normalization. If `.gitattributes` is ever added, pin CRLF status quo.
4. **After ANY `index.html` edit:** file ends `</script></body></html>` (Vercel insights tag last); inline JS parses; footer shows `© 2026` with a year (bare `©` = truncated → do not deploy); `<span id="yr">` + `getFullYear()` line present.
5. Stale-lock fix (owner, no git running): `del .git\index.lock`. Corrupt index fix: `del .git\index` then `git reset` (working files untouched).

## Current status (Jul 4, late evening)
- Production = `60d4b8b`-era content + G2 wine accents.
- **Master promotion still BLOCKED (unresolved): commit `e9000d3` (G3 + G5–G7 + results line) is on `preview` only; pushing `preview:master` was rejected non-fast-forward — an unknown commit landed on GitHub `master`. Owner: `git checkout master && git fetch origin && git log --oneline origin/master -3`, identify it, `git pull`, then push `master` and `master:preview`.** Resolve before Monday's task run.
- `.git/config` still has typo line `autocrl = true` (ignored by git; correct spelling would be dangerous here). Owner: `git config core.autocrlf false` + `git config --unset core.autocrl`.
- Old OneDrive copy (`C:\Users\rdury\OneDrive\Documents\Projects\Luca Bistro`) — owner to confirm deleted/renamed.

## Option 2 redesign (branch `option-2`, in progress Jul 4–5)
- **Source:** Google Stitch project "French Riviera Dining / Provençal Heritage" (only the Menu screen + DESIGN.md exported; other pages designed by agent in the same language). Stitch export files kept out of the repo.
- **What it is:** complete rewrite of `index.html` (~1,150 lines, ~80 KB) — same real content (menus/$, wines, events + WC machinery, photos, press, jobs, Web3Forms, JSON-LD, same tab/JS class names) in a new skin. **No Tailwind runtime** (Stitch export used the CDN compiler; rejected for fast-load) — hand-written vanilla CSS.
- **Design language:** warm parchment base (`--surface #f7eedb`, page bg `#eee0c3` — owner asked twice for warmer/less white), terracotta ochre primary `#8b500a`, Libre Caslon Text serif + Plus Jakarta Sans, glass nav with uppercase underline links + Call button (NO reservations button — bistro takes none), offset-frame photos, bento cards, stationery bottom-border inputs, olive chips, **ornamental section frames with terracotta scroll corners** (`.frame` + `<i class="fc">`), dusk bands — dark olive `#2e3720` apéro section, deep iron `#31312d` footer. Cicada emblem kept (hero + footer, owner: "it's our mascot").
- **Iterations so far:** v1 too white → dusk bands added → still too white → warm palette + scroll-corner frames (latest, pushed?). Preview URL pattern: `luca-bistro-<hash>-raymonddury-3181s-projects.vercel.app`.
- **WC caution:** the Monday scheduled task edits `index.html` on whatever branch is CHECKED OUT. Option-2 keeps identical `wc-fx` markup so the task works on either branch — but the run only lands on the checked-out one.
- **Next:** owner review of warm-framed version → more iterations or decision; if adopted, merge `option-2` → `preview` → `master`.

## World Cup machinery (until Jul 19)
- Fixtures table `<table class="wc-fx">` in Events + **results line** `<p class="wc-fx-results">` beneath it (owner-approved Jul 4): final scores from the **last 2 days only**, max 4, France/bistro matches first; remove the line entirely when empty. CSS is `wc-` prefixed so G4's cleanup catches it.
- Scheduled task **`luca-bistro-worldcup-schedule`**: enabled, Mondays ~8:07 AM, repointed to `C:\dev\Projects\luca-bistro`, rebuilds table (strict open-hours rule) + maintains results line + integrity check + `git add index.html` only.
- **Owner exceptions baked into the task — never drop:** Thu Jul 9 4 PM "Morocco v France" QF (showing from 5 PM open); Sat Jul 11 5 PM (Miami) + 9 PM (Kansas City) QFs — staying open late for the 9 PM.
- Open hours (ET): Sun 10–2 · Mon closed · Tue 5–9 · Wed–Sat 10–2 & 5–9.

## Work done ✅
G0 sync (Jul 3) · G2 wine accents (deployed Jul 4) · G3 fixtures tidy + task fixes · G5 intrinsic dims on all 25 imgs + double-space fix · G6 footer contrast (`.closed #BCC9D7`, `.copy #D5CCB6`) · G7 mobile `.event-tabs` scroll + `.wc-fx` de-cramp · G8 repo move + QC · results line feature.

## Open work
- **G1 (PAUSED, owner call needed):** 84 Burger $16 dinner vs $15 lunch + ingredient order; dinner Avocado Shrimp Salad → "Grilled shrimp" (price already $20 everywhere).
- **⏰ G4 World Cup teardown — Jul 20:** delete Events block (h3#world-cup → grid close), orphaned `wc-` CSS (verify `grep -c "wc-"` = 0), drop inline margin-top on "Rosé All Day 2026" h3, disable the scheduled task, optional Past Events memorial + banner deletion. Detail in `archive/IMPROVEMENT-PLAN.md`.
- **G9 (owner):** submit `sitemap.xml` in Google Search Console — biggest free SEO lever.
- **G10–G13 (need approval):** newsletter signup (reuse Web3Forms pattern, no new JS) · private-events callout · lazy Google Map · Instagram (recommend zero-script link tile).
- Optional: re-export 103 KB `photos/logo.png` at 2× display (~188px tall); bottle-checks — Marande region says "Provence" but producer is Languedoc/Pays d'Oc; Crémant label may read "**Château** de Mauny" not "Réserve".

## Design tokens
Provençal blue hero/footer `#1C4B70` · yellow `#F8C325` · French-flag red `#9E1B32` · cream `#E4DAC2` · gold vars (`--gold #806240`, `--gold-light #c2a882`). Fonts: Cormorant Garamond + Jost. Contact: (513) 621-5822 · lucabistro84@gmail.com · 934 Hatch St.
