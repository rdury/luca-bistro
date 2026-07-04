# Luca Bistro â€” Improvement Plan (verified against production commit `2b66b0b`, Jul 3 2026)

**Orientation (read this, then you need no other file):**
1. **What it is:** marketing site for Luca Bistro (French bistro, Mt. Adams, Cincinnati). One self-contained `index.html` (inline CSS + JS, no framework, CRLF line endings) + `photos/`, favicons, `sitemap.xml`, `robots.txt`. Hosted on Vercel, live at lucabistro.com. Priorities: fast load, "south of France" design.
2. **âš ï¸ OneDrive hazard:** the repo lives in a OneDrive-synced folder that has repeatedly truncated files. After EVERY `index.html` edit run the **integrity ritual** (Â§Verification ritual below). Never `git add -A`; commit specific files; no line-ending normalization.
3. **The owner (Raymond) runs all git.** Deploy flow: push to `preview` â†’ verify Vercel preview build â†’ promote to `master` (`git push origin preview:master`). Agents prepare edits + exact commands; owner executes git.
4. **Approval gates:** any pricing/menu/content change and any new section requires **explicit owner approval before editing**. Each group below states its gate.
5. **Line numbers** below are per production commit `2b66b0b`, which the working copy will match after G0 (do G0 first â€” the local file is currently one commit stale).

**Verification ritual (mandatory after any `index.html` edit):**
- File still ends with `</script></body></html>` (last bytes are the Vercel insights `<script defer src="/_vercel/insights/script.js"></script>`, then `</body>`, `</html>`, CRLF).
- Extract the inline `<script>` blocks and run `node --check` on them (or equivalent syntax check).
- Render locally (`node serve.js` exists in the repo) â€” the footer must show `Â© 2026 â€¦`. A bare `Â©` with no year = truncated script â†’ **do not deploy**.
- Diff should touch only intended lines (`git diff index.html`); commit `git add index.html` only.

---

## ~~G0 â€” Sync local working copy to production~~ âœ… DONE (Jul 3 2026 â€” `git pull` completed, local HEAD = `2b66b0b`, matches production)

- **Goal:** bring the stale local checkout up to the deployed commit so no fixed bugs get resurrected.
- **Approval gate:** No (repo hygiene; owner runs the command anyway).
- **Why it's urgent:** Verified Jul 3: local `master` = `4865284`, **one commit behind** `origin/master` = `2b66b0b`, working tree clean. The QC-fix commit `2b66b0b` (avocado-salad price, wine `ChÃ¢teau`/`FÃ¨vre`/`CÃ´tes`/`ChÃ¢teauneuf` accents, job-listing wording, fixture cleanup) is NOT in the local file. Any edit made before pulling would revert those fixes when committed. Also, the **Monday scheduled task** (`luca-bistro-worldcup-schedule`, next run **Mon Jul 6, ~8:07 AM**) edits this local file â€” if it runs against the stale copy and the result is committed, production regresses.
- **Exact changes:** owner runs, in `C:\dev\Projects\luca-bistro`:
  - `git pull` (fast-forward to `2b66b0b`; no conflicts expected â€” tree is clean, only untracked `.md` notes present).
  - Verify: `git rev-parse HEAD` â†’ `2b66b0bdbe6d861bb9aeb030f2d2edaf4a9f4f2e`.
- **Risk / blast radius:** Low. No dependencies; every other group depends on this.
- **Verification:** `git status` clean & up to date; spot-check line 743 of `index.html` reads `$20` (avocado salad dinner price) and line 1290 reads `ChÃ¢teau Valmer Vouvray`.
- **Effort:** S.

## G1 â€” Menu consistency fixes (84 Burger, Avocado Shrimp Salad)

- **Goal:** align the two remaining dinner-vs-lunch menu inconsistencies.
- **Approval gate:** **YES â€” pricing + menu wording.** Owner must confirm intended burger price and preferred ingredient order before editing.
- **Exact changes** (`index.html`, lines per `2b66b0b`):
  1. **84 Burger price:** dinner line 831 `<span class="menu-price">$16</span>` vs lunch line 983 `<span class="menu-price">$15</span>`. Ask owner: is the $1 difference intentional? If not, set both to the confirmed price.
  2. **84 Burger ingredient order:** dinner line 829 `Harissa sauce, lettuce, tomato, gruyÃ¨re` vs lunch line 981 `Lettuce, tomato, gruyÃ¨re, harissa sauce`. Pick one order (suggest the dinner wording) and use it in both.
  3. **Avocado Shrimp Salad description:** dinner line 741 `<p>Shrimp, avocado, tomatoes, croutons, Dijon dressing</p>` â†’ `<p>Grilled shrimp, avocado, tomatoes, croutons, Dijon dressing</p>` to match lunch (line 928) and brunch (line 1161). **Note: the price is already $20 in all three menus in production** (dinner line 743) â€” do NOT change prices here; only the word "Grilled" is missing.
- **Risk / blast radius:** Low â€” three text-only edits inside `.menu-item` blocks. Depends on G0.
- **Verification:** integrity ritual; grep for `84 Burger` (2 hits, matching descriptions) and `Grilled shrimp` (3 hits); preview branch render.
- **Effort:** S.

## G2 â€” Wine accent verification (RÃ©serve Ã—2, InÃ¨s)

- **Goal:** correct remaining wine-name accents â€” but only after checking real bottle labels.
- **Approval gate:** **YES â€” content accuracy.** Owner must confirm against the physical bottles (producers do vary; don't guess).
- **Exact changes** (`index.html`, only those the owner confirms):
  1. Line 1254: `<h3>Reserve de Marande</h3>` â†’ `<h3>RÃ©serve de Marande</h3>` (RosÃ© list).
  2. Line 848: pairing text `Reserve de Marande RosÃ© Â· glass $12` â†’ `RÃ©serve de Marande RosÃ© Â· glass $12` (keep the two in sync â€” this is the Chicken Ballotine pairing).
  3. Line 1298: `<h3>Reserve de Mauny CrÃ©mant Brut</h3>` â†’ `<h3>RÃ©serve de Mauny CrÃ©mant Brut</h3>` (Blanc list).
  4. Line 1286: `<h3>Domaine InÃ©s Sancerre</h3>` â†’ `<h3>Domaine InÃ¨s Sancerre</h3>` (Blanc list).
  - ~~**Already fixed in production â€” do not redo:** `ChÃ¢teau Valmer`, `ChÃ¢teau Moulin Ferrand`, `ChÃ¢teau St. Georges`, `FÃ¨vre Chablis`, `Hautes CÃ´tes de Nuits`, `ChÃ¢teauneuf-du-Pape` â€” all corrected in `2b66b0b`.~~ âœ… done
- **Risk / blast radius:** Low â€” UTF-8 text edits. File is UTF-8 with plenty of existing accents; no encoding risk if edited with the file tools. Depends on G0.
- **Verification:** integrity ritual; grep `Reserve de` returns 0 hits after both are confirmed/changed; visual check of the Wine tab on preview.
- **Effort:** S.

## G3 â€” World Cup interim hygiene (fixtures table + weekly task) â€” only worth doing before Jul 19

- **Goal:** stop the fixtures table showing impossible/confusing rows, and fix the weekly refresh task that maintains it.
- **Approval gate:** **YES (light)** â€” removing/adjusting fixture rows is guest-facing content; the KC decision (item 3) is genuinely the owner's call.
- **Context (verified):** a scheduled task `luca-bistro-worldcup-schedule` (SKILL at `C:\Users\rdury\Claude\Scheduled\luca-bistro-worldcup-schedule\SKILL.md`, enabled, Mondays ~8:07 AM, next run **Jul 6**) rewrites all `<tr>` rows of `<table class="wc-fx">` weekly and, per its own rules, drops any "Winner â€¦/TBD" rows. So hand-edits to fixture rows have a shelf life of days â€” prioritize fixing the TASK, treat table edits as a quick tidy.
- **Exact changes:**
  1. `index.html` line 1386: `Winner USA/Bosnia v Winner Belgium/Senegal` and line 1388: `Winner Switzerland/Algeria v Winner Colombia/Ghana` â€” both reference Round-of-32 matches **not shown in the visible list** (those R32 games fell outside open hours and were removed in `2b66b0b`). Either resolve to real team names once known, or delete the two rows (the note on line 1395 already covers "set once earlier rounds finish").
  2. Lines 1376â€“1379 (Thu Jul 2 / Fri Jul 3 rows) are already in the past â€” the Jul 6 task run will clear them; no manual action needed unless deploying before Monday.
  3. Line 1393: `Sat Jul 11 Â· 9:00 PM Â· TBD Â· Kansas City` â€” kickoff is exactly at closing time (9pm Sat). Ask owner: staying open for it, or drop the row? Don't silently decide.
  4. **Task SKILL.md fixes** (file above, not in the repo â€” no git needed):
     - Step 5 says to leave heading `"This week â€” showing during open hours"` intact, but the live heading (line 1373) is `"Next 10 days â€” shown during open hours"`, and the note text also differs. Update the SKILL to match reality so a future run doesn't "restore" stale text.
     - Step 7 tells the owner to deploy with `git add -A` â€” **this contradicts the repo's no-bulk-add rule** (bulk add + normalization caused the truncations). Change to `git add index.html`.
     - Add the integrity ritual (footer-year canary) to the task's step 6.
- **Risk / blast radius:** Low for the table (self-contained rows); Low for the SKILL edit (plain text file outside the repo). Depends on G0. Superseded entirely by G4 after Jul 19.
- **Verification:** integrity ritual for any `index.html` edit; re-read SKILL.md; confirm next task run (Mon Jul 6) produces a sane table.
- **Effort:** S.

## G4 â€” World Cup teardown (execute after July 19, 2026) â°

- **Goal:** remove all World Cup content the day after the final so the site doesn't date itself.
- **Approval gate:** **YES** â€” teardown is pre-agreed in concept (see `CONTEXT.md`), but confirm timing and whether to memorialize it under Past Events before deleting.
- **Exact changes** (`index.html`, lines per `2b66b0b`):
  1. Delete the World Cup block in Events, lines **1361â€“1399**: from `<h3 id="world-cup">World Cup 2026</h3>` (1361), the `.rule` (1362), the "Live Matches" badge div (1363â€“1365), through the full `events-grid` containing the event card, `world-cup-banner.webp` `<img>` (1368) and the `.wc-fixtures` table (1372â€“1396), ending at the grid's closing `</div>` (1399).
  2. Line 1400: `<h3 style="margin-top: 3.5rem;">RosÃ© All Day 2026</h3>` â€” remove the inline `margin-top:3.5rem` (it becomes the first heading in the panel).
  3. Delete now-orphaned CSS: line 97 `.wc-card-banner { â€¦ }`; line 161 `#world-cup { scroll-margin-top: 130px; }`; lines 292â€“300 (`.wc-fixtures`, `.wc-fx-head`, `.wc-fx`, `.wc-fx td*`, `.wc-fx-note` rules).
  4. Optional (owner's call): add a Past Events entry (pattern at lines 1424â€“1436) â€” e.g. `June 11 â€“ July 19, 2026 Â· World Cup 2026 / Allez les Bleus â€” we showed the matches all tournament long.`
  5. **Disable the scheduled task** `luca-bistro-worldcup-schedule` (set enabled:false / owner toggles it off). The task's own step 1 handles post-Jul-19 gracefully, but it should not keep running forever.
  6. Optional: `git rm photos/world-cup-banner.webp` (44 KB; only if the Past Events entry doesn't reuse it). Commit files individually.
  7. Also check for any WC mention elsewhere: verified â€” nav, hero, meta tags and footer contain **no** World Cup references; the block above is the entirety.
- **Risk / blast radius:** **Medium** â€” largest single deletion; a mis-scoped cut could unbalance the Events markup. Cut exactly from the `h3#world-cup` line to the matching grid close; the "RosÃ© All Day 2026" `<h3>` must remain. Depends on G0; supersedes G3 and the mobile-fixture part of G7; makes the banner part of G5 moot.
- **Verification:** integrity ritual; Events tab renders with RosÃ© All Day as the first item; no `wc-` string remains in the file (`grep -c "wc-"` = 0); Past Events tab still switches; scheduled task shows disabled.
- **Effort:** M.

## G5 â€” Image intrinsic dimensions + asset weight (perf/CLS)

- **Goal:** eliminate residual layout shift and trim oversized raster assets.
- **Approval gate:** No (no visible change) â€” but ship via preview branch like everything else.
- **Exact changes** (`index.html`):
  1. Add real `width`/`height` attributes (intrinsic pixels of each file â€” measure first, don't guess) to:
     - Nav logo, line 437: `<img src="photos/logo.png" â€¦>` (rendered 94px tall; CSS `height:94px; width:auto` stays).
     - Hero cicada, line 450: `<img class="cigale" src="photos/cicada.png" â€¦>`.
     - About photo, line 484: `photos/food/_MG_4486.webp` (CSS fixes height 380px; attribute still helps).
     - All 21 gallery `<img>`s in the five `.photo-panel` blocks, lines ~1456â€“1490 (`.pm` has `aspect-ratio:1` so CLS is already contained there â€” add dims anyway; it's free).
     - The WC banner (line 1368) already has `width="3046" height="528"` â€” skip.
     - Measure dims in the workspace: `identify` / `node -e` with image-size, or PowerShell `System.Drawing`.
  2. **While at line 484, delete the stray double space**: `alt="Roasted goat cheese salad at Luca Bistro"  loading="lazy"` â†’ single space (cosmetic; folded in here to avoid a one-character commit).
  3. **`photos/world-cup-banner.webp` downscale â€” reality check:** the file is only **44 KB on disk** despite being 3046px wide, and it's deleted in G4 anyway. Downscaling to ~1500px saves maybe 20â€“30 KB. **Skip unless G4 is delayed past mid-August.**
  4. Optional, better payoff: `photos/logo.png` is **103 KB** and renders at 94px tall on every page view (above the fold). Re-export at 2Ã— display size (~188px tall) as PNG or WebP (~15â€“25 KB expected). Keep the filename or update line 437 `src`; verify transparency edges on the cream nav background. `photos/cicada.png` (36 KB) is a smaller optional win, same approach.
- **Risk / blast radius:** Low. Wrong dims could distort only if CSS were removed (it isn't). Asset re-export needs a visual before/after check. Depends on G0.
- **Verification:** integrity ritual; Lighthouse/DevTools CLS check before vs after; logo/cicada look crisp at 100% and on a retina display; all 24 images still load (no 404s from renamed files).
- **Effort:** S (dims + space) / M (with asset re-exports).

## G6 â€” Footer contrast nudges

- **Goal:** lift two muted footer text colors to comfortably pass WCAG AA on the blue footer (`#1C4B70`).
- **Approval gate:** No (imperceptible design tweak), but include a before/after screenshot when handing the preview to the owner â€” it's his palette.
- **Exact changes** (`index.html`):
  1. Line 369: `.footer-hours .closed { color: #A7B7C8; }` â€” measures â‰ˆ4.5:1 on `#1C4B70` (borderline for 14px text). Change to `#BCC9D7` (â‰ˆ5.5:1) or similar.
  2. Line 391: `.copy { â€¦; color: #C4B99F; }` â€” measures â‰ˆ4.7:1 at only 12px. Change to `#D5CCB6` (â‰ˆ5.6:1) or similar.
  - Keep both clearly "muted" relative to the cream body text `#E4DAC2` â€” the hierarchy (bright headings / body / muted) is intentional.
- **Risk / blast radius:** Low â€” two CSS color values. No dependencies beyond G0.
- **Verification:** integrity ritual; check both pairs in a contrast checker (target â‰¥4.5:1); eyeball the footer on preview at desktop + mobile.
- **Effort:** S.

## G7 â€” Mobile hardening (event tabs + fixtures table)

- **Goal:** make the Events tab row behave like the other tab rows on narrow phones, and de-cramp the fixtures table while it's still up.
- **Approval gate:** No (defensive CSS only).
- **Exact changes** (`index.html`, inside the `@media (max-width: 768px)` block):
  1. Line 421: `.about-tabs, .menu-tabs, .photo-tabs {` â†’ add `.event-tabs`: `.about-tabs, .menu-tabs, .photo-tabs, .event-tabs {` (horizontal-scroll rule). Line 424 (`::-webkit-scrollbar` hider) and line 425 (`.about-tab-btn, .menu-tab-btn, .tab-btn` padding/nowrap rule) â†’ add `.event-tabs::-webkit-scrollbar` / `.event-tab-btn` respectively. Only 2 event tabs exist so overflow is unlikely â€” this is consistency armor.
  2. **Fixtures table (skip if G4 is imminent):** the 3-column `.wc-fx` table sits inside a card that loses ~72px to its decorative frame; on a ~350px phone long "Winner â€¦" cells get cramped. Add to the mobile block: `.wc-fx td { font-size: 13px; padding-right: 0.5rem; } .wc-fx td.d { font-size: 11px; }` â€” verify at 320/350/390px widths in DevTools before and after. If it still crowds the frame, wrap the table in a `<div style="overflow-x:auto">` instead.
- **Risk / blast radius:** Low â€” additive CSS in the mobile query. Item 2 is deleted by G4 (note the dependency: do G4's CSS cleanup last if both ship).
- **Verification:** integrity ritual; DevTools responsive check at 320â€“428px: tab rows scroll, nothing overflows the framed card; desktop unchanged.
- **Effort:** S.

## G8 â€” Repo hygiene: get out from under OneDrive ✅ DONE (moved to `C:\dev\Projects\luca-bistro`; QC'd Jul 4 2026)

**QC (Jul 4):** HEAD `2b66b0b` = production; `index.html` intact (ending, footer-year script, balanced tags); `.vercelignore` intact; remote + branches configured; no locks; live site matches local. Scheduled task repointed to the new path + G3 SKILL fixes applied (task currently disabled). Owner loose ends: fix `.git/config` typo (`git config core.autocrlf false` + `git config --unset core.autocrl`); delete/rename the old OneDrive copy.

- **Goal:** remove the root cause of the truncation/stale-mount/git-lock incidents.
- **Approval gate:** **YES** â€” owner's machine, owner's workflow.
- **Exact changes (owner actions, from `sync-issue-todo.md`, still not done):**
  1. Preferred: clone the repo to a non-synced path (e.g. `C:\dev\luca-bistro`) and work there; keep the OneDrive copy as read-only reference or delete it.
  2. If it must stay in OneDrive: pause sync while editing/committing, and mark the folder "Always keep on this device".
  3. **Caution on the previously suggested `.gitattributes`:** the repo's files are currently CRLF. Introducing `* text=auto` + `eol=lf` would trigger exactly the mass line-ending rewrite that caused the truncation. If a `.gitattributes` is added at all, pin the status quo (`*.html text eol=crlf`) or use `-text`, and commit it alone, verifying `git status` shows no phantom modifications afterward.
  4. Stale-lock cheat sheet stays valid: `del .git\index.lock .git\HEAD.lock .git\objects\maintenance.lock` (only when no git process is running).
- **Risk / blast radius:** Medium if done carelessly (path change breaks the Cowork mount + the scheduled task's hard-coded path `C:\dev\Projects\luca-bistro` in `luca-bistro-worldcup-schedule\SKILL.md` â€” update it, or do this after G4 disables the task). No site code changes.
- **Verification:** fresh clone builds/serves; `git status` clean; scheduled-task path updated or task disabled; a test edit + commit + push round-trips.
- **Effort:** M.

## G9 â€” Submit sitemap.xml to Google Search Console (owner action, zero code)

- **Goal:** get Google re-indexing the new site/hours faster. Biggest free SEO lever available.
- **Approval gate:** No approval needed to *plan*, but only the owner can do it (Google account ownership).
- **Exact steps:** verify `https://www.lucabistro.com/sitemap.xml` and `/robots.txt` serve correctly (both exist in repo â€” sitemap.xml 278 bytes, robots.txt 72 bytes); owner adds the property in Google Search Console (DNS or HTML-file verification), submits `sitemap.xml`, and requests indexing of the homepage. Also worth checking the "Restaurant" rich-result eligibility (JSON-LD already present, lines 37â€“73).
- **Risk / blast radius:** None (no code). No dependencies.
- **Verification:** GSC shows sitemap "Success"; `site:lucabistro.com` reflects new title/description within a couple weeks.
- **Effort:** S.

## G10 â€” Newsletter / email signup (Web3Forms)

- **Goal:** collect guest emails for RosÃ© All Day and seasonal events, using the form stack already on the site.
- **Approval gate:** **YES â€” new section/content.** Owner approves placement, copy, and that Web3Forms email volume is acceptable (signups arrive as emails to `lucabistro84@gmail.com`; Web3Forms is not a mailing-list manager â€” set that expectation).
- **Exact changes (proposed, pending approval):** add a compact single-field form in the footer's first column (after the address, line ~1576) or at the end of the Events section: reuse the existing `web3form` pattern (access key at lines 528/590 â€” public by design), fields: hidden `subject` = "Newsletter signup â€” Luca Bistro", one `email` input + submit; the existing JS handler at lines 1705â€“1734 targets `form.web3form` generically, so **no new JS is required** â€” just include a `.form-status` element and a `.form-submit` button so the handler finds its hooks. Add a honeypot `botcheck` input like the other forms (line 531).
- **Risk / blast radius:** Low-Medium â€” new markup in footer/Events + reliance on existing JS; test the submit path for real. Depends on G0.
- **Verification:** integrity ritual; test submission arrives at the Web3Forms inbox; error path (offline) shows the fallback message; mobile layout of the footer column intact.
- **Effort:** M.

## G11 â€” "Private events & large parties" callout

- **Goal:** make group-booking inquiries findable (currently one buried line in the Hours note, line 519, and a footer italic, line 1607).
- **Approval gate:** **YES â€” new content.** Owner approves copy and placement.
- **Exact changes (proposed):** a short callout in the Events section (above or below RosÃ© All Day) or in About â†’ Hours: e.g. an `.event-card`-framed blurb "Private events & large parties â€” planning a celebration for 10 or more? Call (513) 621-5822 or send us a message." with `tel:` link and a link to the Contact tab (`#about` + activating the contact tab needs a small JS hook, or simply link `mailto:lucabistro84@gmail.com` / tel: to keep it zero-JS). Reuse existing card + `.btn` styles; no new CSS needed.
- **Risk / blast radius:** Low. Depends on G0; if placed in Events, coordinate with G4's layout change.
- **Verification:** integrity ritual; links dial/mail correctly on mobile; card frame renders on both column layouts.
- **Effort:** S.

## G12 â€” Embedded Google Map in Hours & Location (lazy-loaded)

- **Goal:** one-tap directions inside About â†’ Hours & Location. (Drafted once before and canceled â€” confirm the owner actually wants it this time before building.)
- **Approval gate:** **YES â€” new section content**, plus a privacy/perf tradeoff (third-party iframe) the owner should sign off on.
- **Exact changes (proposed):** in `#about-hours` (lines 490â€“522), add below the `.hours-note` a Google Maps embed `<iframe>` for 934 Hatch St with `loading="lazy"` `referrerpolicy="no-referrer-when-downgrade"` and a fixed `width/height` (or `aspect-ratio` CSS) to avoid CLS; keep the existing maps.google.com text link (line 494) as fallback. Because the panel is hidden until the tab is clicked and the iframe is lazy, initial page weight is unaffected. Alternative that costs zero JS/iframe: a static map image linking out â€” offer both options to the owner.
- **Risk / blast radius:** Medium â€” first third-party embed on an otherwise self-contained page (CSP-free today, so no header changes needed; slight GDPR/cookie surface). Depends on G0.
- **Verification:** integrity ritual; network tab shows no maps request until the Hours tab is opened/scrolled; mobile layout stacks cleanly.
- **Effort:** M.

## G13 â€” Instagram feed (@lucabistro84)

- **Goal:** keep the Photos section feeling current with zero manual upkeep.
- **Approval gate:** **YES â€” new section + third-party script.** This is the group most in tension with the "fast load" priority; present the tradeoff honestly.
- **Exact changes (proposed, pick one after owner input):**
  - **Option A (recommended, lightest):** a styled "Follow us on Instagram â†’ @lucabistro84" tile in the Photos grid linking out (already have the Instagram SVG at line 1591) â€” zero scripts, zero risk.
  - **Option B:** a third-party widget (Behold/SnapWidget/Elfsight free tiers) as a lazy-loaded embed in a new Photos tab â€” adds an external script + their branding; Instagram's own oEmbed now requires an app token, so DIY is not practical.
  - Either way: do NOT add Meta's official embed JS globally; lazy-load whatever is chosen (IntersectionObserver pattern already exists in the file, lines 1671â€“1682).
- **Risk / blast radius:** Medium (Option B: external dependency can break/expire silently; check its GDPR posture). Low for Option A. Depends on G0.
- **Verification:** integrity ritual; Lighthouse perf score unchanged (Â±2) for Option A / measured and reported for Option B; feed renders on mobile.
- **Effort:** S (A) / Mâ€“L (B).

---

## Summary

| Group | Title | Approval? | Risk | Effort | When |
|---|---|---|---|---|---|
| ~~G0~~ | ~~Sync working copy to production (`git pull`)~~ âœ… | â€” | â€” | â€” | **DONE Jul 3** |
| G1 | Menu consistency (84 Burger, shrimp salad) | **Yes** | Low | S | Now |
| G2 | Wine accents (RÃ©serve Ã—2, InÃ¨s) | **Yes** (check bottles) | Low | S | Now |
| G3 | WC interim fixtures (~~weekly-task fixes~~ ✅ Jul 4) | **Yes** (light) | Low | S | Only before Jul 19 |
| G4 | World Cup teardown | **Yes** (timing) | Med | M | **After Jul 19** |
| G5 | Image dims + asset weight | No | Low | Sâ€“M | Anytime |
| G6 | Footer contrast nudges | No (show preview) | Low | S | Anytime |
| G7 | Mobile hardening (tabs, fixtures) | No | Low | S | Anytime (item 2 pre-Jul 19 only) |
| ~~G8~~ | ~~Move repo out of OneDrive~~ ✅ | — | — | — | **DONE Jul 4** (2 owner loose ends) |
| G9 | Google Search Console sitemap submit | Owner action | None | S | Anytime |
| G10 | Newsletter signup (Web3Forms) | **Yes** | Low-Med | M | When approved |
| G11 | Private events callout | **Yes** | Low | S | When approved |
| G12 | Embedded Google Map (lazy) | **Yes** | Med | M | When approved |
| G13 | Instagram feed | **Yes** | Low-Med | Sâ€“L | When approved |

