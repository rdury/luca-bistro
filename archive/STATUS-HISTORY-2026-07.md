# Status history — July 2026 (archived from CLAUDE.md)

Archived Jul 7, 2026 when CLAUDE.md was slimmed. Newest first. Prior notes from before Jul 3 are in the other files in `archive/`.

## Jul 12–13 — Watch parties weekend (7 production deploys; detail archived from TODO.md Jul 13)
- **Hours** (`12c0c1c`): permanent "Kitchen closes 30 minutes before close" line; temporary Tue Jul 14 notices (hours panel + footer + `specialOpeningHoursSpecification`). Tuesday plan changed same evening from "closed" to **bar & snacks 3–5 PM, no dinner** — notices/schema/GBP updated (`b49f6e7`); GBP special hours set for Jul 14 (3–5), Jul 15 (10–2, 3–9), Jul 19 (10–2, 3–5). Scheduled task `luca-tuesday-closure-reversal` (Wed Jul 15 9 AM, pre-authorized) removes the temporary bits.
- **French Fry Day teardown** (`491963b`): card → Missed Events memorial, hero burst anchor + Event JSON-LD removed.
- **World Cup saga** (same day, three states): archived to Missed Events with a knockout bracket (`485aaa4`, "event over for us") → Raymond reopened for the games that evening → final state (`b49f6e7`, `1c16f3b`): Current tab renamed **"What's On Now"**, leading with **Watch Parties** — three `.parchment-panel` cards in `.wc-cards`, each titled blue `.wc-allez` "Allez les Bleus!" (France v Spain Tue, England v Argentina Wed, The Final Sun; no 3rd-place game); hero banner enlarged to 780px. Daily task `luca-worldcup-daily` DISABLED (manual updates); task `luca-worldcup-banner-timeout` (Mon Jul 20 9 AM, pre-authorized) retires banner + cards, posts memorial with results, strips leftover special hours. GBP post published (elegant wording: bar pouring, light snacks out, kitchen at rest — watch party only, no food service; edited once to add snacks).
- **Naming** (`c6c1d38`): nav Events → **What's On** (section h2 too, eyebrow "At the bistro"); private section surfaced as a small italic second nav line "**Private Dining & Celebrations**" (`.nav-private`, absolute in the 110px sticky bar); section h2 "Private dining & celebrations"; `/private-dining` redirect added.
- **Private events → Private dining** (`7666daa`, `d69cc51`): G11 section deployed owner-approved as INTERIM EMAIL version — full request form `#pe-form` (name/email/phone/event type/guests ≥10/date/time/menu pref/comments) whose submit composes a prefilled mailto to **events@lucabistro.com** (separate mailbox, delivery verified by test email Jul 13); handler swaps to a real POST when the dury.net admin backend lands. The Jul 8 Web3Forms-form patch draft was deleted (rebuild from Contact form pattern if ever needed pre-backend).
- **Parchment menus** (`7666daa`): "Cadre Bistro" treatment deployed — all five menu tabs on aged parchment + grain in the gilt frame with faint cicada watermark; Raymond picked variant C of an A–D mockup (kept untracked as `menu-parchment-preview.html`).
- **Review replies round 2** (Jul 12, via GBP owner wizard): Frédéric-voice replies posted to Savannah Hongell 1★, Dan Healey 1★, Chris Warner 4★, Danielle Ptacek 5★, Julia Belliveau 5★ + Ryan Knight 5★ (new). Backlog 45 → 39. Standing agreement: 5 more per visit.
- **Search Console** (Jul 13): sitemap submitted on the `sc-domain:lucabistro.com` property (the Jul 8 submission never registered there) — status **Success**, 1 page discovered; `lastmod` bumped to 2026-07-13 (`91ab4a9`, which also carried the condensed CLAUDE.md). Note for the UI: the domain property's sitemap field requires the full `https://` URL.
- Superseded patch files (`events-ffd-teardown-wc-bracket`, `wc-bracket`, `private-events-G11`, `menu-parchment-C`) all deleted with Raymond's OK — `archive/` holds no pending patches.

## Jul 7 — Move to Code-Home
- Repo moved `C:\dev\Projects\luca-bistro` → `C:\dev\Projects\Code-Home\luca-bistro`. Verified: `index.html` byte-identical to deployed HEAD, remotes/branches intact, no stale locks.
- CONTEXT.md renamed CLAUDE.md (commit `b4b6315`, pushed to preview).
- QC config fix applied: `core.autocrlf false` set locally; stray `autocrl` typo removed.
- Old OneDrive copy (`OneDrive\Documents\Projects\Luca Bistro`) confirmed deleted. `Luca Bistro.zip` (Jul 2 backup, 16.5 MB) still in `OneDrive\Documents\Projects` — delete candidate.
- Deploy procedure + integrity ritual moved to the **luca-deploy skill** (`Code-Home\.claude\skills\luca-deploy\`), including a runnable `integrity_check.ps1`.

## Jul 4 — Big QC + improvement day (all deployed to production by Jul 5–6)
- **G8 move QC:** clone at `C:\dev\Projects\luca-bistro` verified healthy — HEAD matched production, index.html intact, `.vercelignore` intact, both branches configured.
- **G2 Wine accents** done (Réserve de Marande ×2, Réserve de Mauny, Domaine Inès — owner-confirmed). Committed + deployed.
- **G3 World Cup interim hygiene** done: past rows and out-of-hours R16 rows removed (strict open-hours rule). Owner staying open for BOTH Sat Jul 11 quarter-finals (5 PM Miami + 9 PM Kansas City) — scheduled task has a standing exception for those two rows.
- **Results line** added (owner-approved): `<p class="wc-fx-results">` under fixtures, last 2 days' finals only (max 4, France/bistro first); CSS at `.wc-fx-results`; weekly task maintains it (step 5).
- **G5/G6/G7** done: all 25 imgs intrinsic dims; double-space fixed; footer `.closed` → `#BCC9D7`, `.copy` → `#D5CCB6`; `.event-tabs` mobile scroll + `.wc-fx` mobile de-cramp.
- Scheduled task `luca-bistro-worldcup-schedule` SKILL fixed (correct heading/note text, integrity check added, `git add index.html` not `-A`), re-enabled.
- Production as of Jul 6: `9d03e97` (cicada height fix) — includes all of the above.

## Historical context (why the paranoia)
The repo lived in OneDrive-synced paths that repeatedly truncated `index.html` and `.vercelignore`, showed stale mounts to sandboxed tools, and left stuck `.git` locks. That era ended with the move to `C:\dev`; the integrity ritual and "no `git add -A`" rule are its legacy and remain in force. If a `.gitattributes` is ever added, pin the status quo (`*.html text eol=crlf`) — `* text=auto` + `eol=lf` would trigger the mass rewrite that broke things before.
