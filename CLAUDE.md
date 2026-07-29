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
- **What's On** — tabs "What's On Now" / "Missed Events". Now: Rosé All Day (Jul 25, Aug 29). (World Cup watch parties were cancelled Jul 19 and removed everywhere — site, schema, GBP special hours + post; `.parchment-panel` treatment kept in CSS for future event cards.)
- **Private dining** (`#private-events`) — request form `#pe-form` whose submit composes a prefilled **mailto to events@lucabistro.com** (separate mailbox, confirmed working; INTERIM until the dury.net admin project's backend replaces the handler with a POST). "Menu Suggestions" auto-defaults from guest count (≤22 → regular menu, ≥23 → prix fixe) with a "plan it with Chef Frédéric" note whenever the choice isn't the regular menu; a manual pick is never overwritten. `/private-events` and `/private-dining` redirect here. Photos for the section still owed by Raymond.
- **Contact + Jobs forms** → Web3Forms (`access_key` in HTML is public by design). Will also move to the dury.net admin backend eventually.
- **Email addresses (Jul 19):** Contact/general = **clients@lucabistro.com** (also the JSON-LD `email` + footer), Private Dining = **events@lucabistro.com** (mailto form), Jobs = **jobs@lucabistro.com**. Each `form.web3form` carries `data-fallback-email` used in its failure message. ⚠️ **INTERIM:** both forms still share access key `4d2a547c-…`, which delivers to **lucabistro84@gmail.com** — Web3Forms fixes the destination by key, it cannot be set in the page. Raymond is registering clients@ and jobs@ at web3forms.com; swap each form's `access_key` when the two new keys arrive.

## Automation (app-scheduled tasks — prompts describe current markup; keep them in sync with any edit they touch)
- All World Cup tasks are DONE or DISABLED: `luca-tuesday-closure-reversal` (done manually Jul 15), `luca-worldcup-banner-timeout` (obsolete — watch parties cancelled Jul 19, teardown done manually same day), `luca-worldcup-daily` (disabled Jul 12). No active scheduled tasks.

## Open items (details + completed log in `TODO.md` — keep the two in sync)
- 🧑 **G1** menu consistency (84 Burger $16 vs $15; Avocado Shrimp Salad → "Grilled shrimp") · 🧑 **G2** wine-label checks (Réserve de Marande region; Crémant "Château" vs "Réserve" de Mauny) · 🧑 photos for private dining.
- 🤖+🧑 **Each visit:** reply to more old unreplied Google reviews in Frédéric's voice (draft → Raymond approves → post via the GBP **"Reply to reviews" wizard**; the list's inline Reply links don't work and its scrolling is unreliable). **~79 unreplied as of Jul 23 2026** — see `TODO.md` for the posted/drafted/outstanding breakdown and the unanswered-1★ hit list.
- ⚠️ **GBP attributes drift on their own** — Google silently set "Accepts reservations" on this profile (fixed Jul 23; More → Planning). Recheck periodically, especially after any booking/hours complaint. GBP description is capped at 750 chars and truncates mid-sentence without warning.
- Backlog (owner picks): G10 newsletter signup · G12 lazy-loaded map · G13 Instagram tile (@lucabistro84) · re-export `logo.png` at 2×.

## Reference
Tokens: blue `#1C4B70` · yellow `#F8C325` · red `#9E1B32` · cream `#E4DAC2` · `--gold #806240` / `--gold-light #c2a882` · fonts Cormorant Garamond + Jost. Contact: (513) 621-5822 · lucabistro84@gmail.com · events@lucabistro.com (private dining) · 934 Hatch St.
`.vercelignore` keeps `*.md`, `*.bak`, `serve.js`, `.claude/` off the live site (md-only commits don't change the deployed site). `vercel.json` = exact-match 301 redirects to section anchors. Local preview: `node serve.js` → localhost:3000 (never file://). Deep history: `archive/` (incl. `STATUS-HISTORY-2026-07.md`).
