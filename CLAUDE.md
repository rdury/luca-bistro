# Luca Bistro — Agent Context (read this first)

Marketing site for **Luca Bistro**, French bistro in Mt. Adams, Cincinnati (Chef Frédéric Maniet, south-of-France concept). One self-contained **`index.html`** (inline style/script, no framework, no build, **CRLF line endings**). Assets: `photos/`, favicons, `sitemap.xml`, `robots.txt`. Priorities: fast load, Provençal design.

Repo `C:\dev\Projects\Code-Home\luca-bistro` · GitHub `rdury/luca-bistro` · Vercel auto-deploy · **lucabistro.com** · `master` = production, `preview` = preview branch.

## Rules (non-negotiable)
- **Any commit/deploy → `luca-deploy` skill** (integrity ritual after every index.html edit — the site was once truncated mid-edit; the ritual is the guard).
- **Never `git add -A`** — stage named files only. No line-ending changes (`core.autocrlf` false; file must stay 100% CRLF).
- **Ask Raymond before commit/push** (files + message + branch). New content/design → package as a git patch for Frédéric's sign-off first, unless Raymond deploys as owner. Ask before deleting anything.
- **Keep event cards and the head Event JSON-LD in sync** on every event add/change/expiry; move expired events to the Missed Events tab.
- **Hours accuracy is a sore point** (multiple 1★ reviews from "posted open, actually closed"): any closure or odd hours goes to the site (hours note + footer + `specialOpeningHoursSpecification` JSON-LD) AND Google Business Profile special hours, same day.

## Site map (current)
Nav: About · Menu · **What's On** (`#events`) · Photos · News, plus a small italic second line "**Private Dining & Celebrations**" (`.nav-private` → `#private-events`).
- **Menu** — 5 tabs, each on aged parchment in a gilt frame with faint cicada watermark ("Cadre Bistro", CSS-only via `.menu-panel`; 4-look mockup kept as untracked `menu-parchment-preview.html`).
- **What's On** — tabs "What's On Now" / "Missed Events". Now: **Watch Parties** (3 `.parchment-panel` cards in `.wc-cards`, each titled `.wc-allez` "Allez les Bleus!" — France v Spain Tue 3–5 bar & snacks only, England v Argentina Wed 3–5 + dinner from 5, The Final Sun 3–5) then Rosé All Day (Jul 25, Aug 29).
- **Private dining** (`#private-events`) — request form `#pe-form` whose submit composes a prefilled **mailto to events@lucabistro.com** (separate mailbox, confirmed working; INTERIM until the dury.net admin project's backend replaces the handler with a POST). `/private-events` and `/private-dining` redirect here. Photos for the section still owed by Raymond.
- **Contact + Jobs forms** → Web3Forms (`access_key` in HTML is public by design) → lucabistro84@gmail.com. Will also move to the dury.net admin backend eventually.

## Automation (app-scheduled tasks — prompts describe current markup; keep them in sync with any edit they touch)
- `luca-tuesday-closure-reversal` — Wed Jul 15 9 AM: removes the temporary "Tue Jul 14 bar & snacks 3–5" notices + its JSON-LD entry, deploys (pre-authorized).
- `luca-worldcup-banner-timeout` — Mon Jul 20 9 AM: retires the hero Allez les Bleus banner (max-width 780px) + Watch Parties cards + their CSS + leftover special hours, posts a Missed Events memorial with real results, deploys (pre-authorized).
- `luca-worldcup-daily` — DISABLED (manual World Cup updates per Raymond, Jul 12).

## Open items (details + completed log in `TODO.md` — keep the two in sync)
- 🧑 **G1** menu consistency (84 Burger $16 vs $15; Avocado Shrimp Salad → "Grilled shrimp") · 🧑 **G2** wine-label checks (Réserve de Marande region; Crémant "Château" vs "Réserve" de Mauny) · 🧑 photos for private dining.
- 🤖+🧑 **Each visit:** reply to 5 more old unreplied Google reviews in Frédéric's voice (draft → Raymond approves → post via GBP reply wizard; ~39 left as of Jul 12).
- Backlog (owner picks): G10 newsletter signup · G12 lazy-loaded map · G13 Instagram tile (@lucabistro84) · re-export `logo.png` at 2×.

## Reference
Tokens: blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · `--gold #806240` / `--gold-light #c2a882` · fonts Cormorant Garamond + Jost. Contact: (513) 621-5822 · lucabistro84@gmail.com · events@lucabistro.com (private dining) · 934 Hatch St.
`.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.claude/` off the live site (md-only commits don't change the deployed site). `vercel.json` = exact-match 301 redirects to section anchors. Local preview: `node serve.js` → localhost:3000 (never file://). Deep history: `archive/` (incl. `STATUS-HISTORY-2026-07.md`).
