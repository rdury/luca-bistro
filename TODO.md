# Luca Bistro — Working TODO

Companion to `CLAUDE.md` (rules + current-state brief live there; this is the task list). Owner: Raymond · 🧑 needs Raymond · 🤖 Claude on request. Completed-work detail: `archive/STATUS-HISTORY-2026-07.md`.

## 🔲 Open — one-time

### Owner input needed
- [ ] 🧑 **Web3Forms access keys for the new mailboxes** — register `clients@lucabistro.com` and `jobs@lucabistro.com` at web3forms.com (free, ~2 min each; the key is emailed to that inbox), then hand both keys to Claude. Until then Contact + Jobs **still deliver to lucabistro84@gmail.com** even though the page shows clients@/jobs@ — Web3Forms fixes the destination by key, it can't be set in the page. Swap `access_key` on each `form.web3form` in `index.html` (both branches). Superseded later by the dury.net admin backend.
- [ ] 🧑 **G1** Menu consistency: 84 Burger $16 dinner vs $15 lunch; Avocado Shrimp Salad dinner description → "Grilled shrimp"
- [ ] 🧑 **G2** Wine-label checks: Réserve de Marande region (list says Provence, producer looks Languedoc/Pays d'Oc); Crémant "Château" vs "Réserve" de Mauny
- [ ] 🧑 **Photos for the Private Dining section** (`#private-events`)
- [ ] 🧑 GSC: inspect `https://www.lucabistro.com/` → "Request indexing" (fresh content: watch parties, private dining, parchment menus)
- [ ] 🧑 Run homepage through [Rich Results Test](https://search.google.com/test/rich-results) — expect Restaurant + Events
- [ ] 🧑 GBP setup pass: secondary categories (Brunch restaurant, Bistro, Wine bar), attributes (outdoor seating, walk-ins, dog-friendly?), upload patio/food photos

### Dated / automated
- [ ] ⏰ **Jul 25 / Aug 29** 🤖: after each Rosé All Day passes, move card to Missed Events **and** remove its Event JSON-LD entry (both cards carry the series flyer as of Jul 14, so no flyer hand-off needed — just retire each card whole)
- (World Cup tasks all closed: Tuesday reversal done manually Jul 15; watch parties cancelled Jul 19 → banner/cards/special hours removed from production, v2, and GBP same day; `luca-worldcup-banner-timeout` disabled)

### Enhancements backlog (owner picks, Claude builds)
- [ ] G10 Newsletter signup — as "Letters from Frédéric" (see Frédéric's Voice)
- [ ] G12 Lazy-loaded map
- [ ] G13 Instagram link tile (@lucabistro84, no embed — extension policy blocks instagram.com; caption-via-clipboard is the assist pattern)
- [ ] Re-export 103 KB `logo.png` at 2×
- [ ] (Future, with the dury.net admin project) swap `#pe-form` mailto handler → POST; repoint Contact + Jobs forms off Web3Forms

## 🔁 Ongoing / recurring
- [ ] 🤖+🧑 **Each visit** — reply to more old unreplied Google reviews in Frédéric's voice (draft → Raymond approves → post via GBP owner reply wizard). **Backlog: 78** (Jul 23 2026, confirmed in the wizard header; the old "34" was wrong — it was **85** at the start of the day). Rules: never encourage "ask for [person]"; no free-item implications; no email addresses in replies; 1★s = acknowledge, no excuses, point to the fix, invite back.
  - **Jul 23 — 7 POSTED:** Edward 5★, Triad Oineski 5★, Janice Gerda 5★, malaika vaz 1★ (no text), Julia P 5★ (hours caveat), Liz Jordan 5★, Rhonda Tepe 5★ (birthday for Maman).
  - **APPROVED, READY TO PASTE — do these first next session:** **Francesca Monguzzi** 5★ ("pound for pound the best") — approved Jul 23, ~position 4 newest-sorted, attempt failed only because the wizard froze · **Mary Kidd Ray** 5★ (comfort food, snowy night) · **Conor Brown** 5★ ("My favorite restaurant") · **Joey Tornes** 1★ (closed when listed open) · **Julie Robers** 5★ (regular) · **Austin Guerin** 5★ (fair pricing) · **James Rahner** 5★ ("the ideal restaurant") · **Christina Joey** 1★ (slow service, claims owner won't hire — draft gently corrects: roles ARE posted).
  - 🧑 **HELD FOR FRÉDÉRIC — `marisa thoman` 2★ (18 wks, Local Guide).** Raymond wants to review with him before any reply. The complaint is specific and credible: lobster bisque, cod and salmon all had "a horribly unpleasant fishy flavor"; chicken and steak "tough and rubbery"; **several full plates cleared with no one asking why**; liked the Basil Boursin Crostini and frites; Food 2/5, Service 4/5, Atmosphere 3/5; noise "very loud". Worth showing Frédéric on its own merits, reply or no reply.
  - 🔴 **Next session should target the unanswered 1★s, not newest-first** — sorting the Unreplied list by **Lowest rating** surfaced several never seen before: **Renee Klee, mary burns, Ron Lanham, Ratso, lex gerber, Mark Davis**. That is where the 4.6 rating is leaking.
  - ⚙️ **UI notes:** use the **"Reply to reviews" wizard** (Skip / Reply, one at a time) — the review list's own scrolling is virtualised and jumps unpredictably, and its inline "Reply" links do nothing. **Work in batches of ~6, then reload the page** — after 6–7 replies the wizard degrades to 10–15 s per step and eventually freezes the renderer outright (screenshots start timing out). A full page reload resets it and it's fast again. Skipped reviews are not lost: restarting the wizard puts them back in the queue. Sort control ("Newest / Most relevant / Highest rating / Lowest rating") sits at the top of the list, not in the wizard. Accents and em dashes type through fine.
- [ ] 🧑 **Weekly** — GBP: post each event (link `/#events` or `/#patio`), reply to every new review within days
- [ ] 🧑 **Monthly** — GSC Performance tab: which queries move ("patio," "brunch," "french restaurant cincinnati") → feeds next on-page tweaks
- [ ] 🧑 **Seasonal** — pitch Cincinnati food media for "best patio"/"best brunch" roundups (CityBeat, Cincinnati Magazine); ~Oct: autumn edition of "Un mot de Frédéric"
- [ ] 🤖 **Every event edit** — keep event cards ↔ Event JSON-LD in sync; expired events → Missed Events (rule in `CLAUDE.md`)

## 🎙️ Frédéric's Voice — "part of the family" as strategy
Search engines can't rank a feeling, but they rank its artifacts: owner replies, fresh first-person content, named people, repeat engagement. Done so far: "Un mot de Frédéric" letter (summer edition, refresh seasonally) · Person schema for the chef · 11 review replies in his voice (Jul 8 + Jul 12).
- [ ] 🧑 Review replies signed by Frédéric — highest-leverage recurring item (covered by the 5-per-visit routine above)
- [ ] 🧑 GBP event posts in his voice ("Come find me on the patio. — F.")
- [ ] 🤖+🧑 Past Events memorials with one warm first-person sentence each
- [ ] 🧑 Faces in Our Story — photo of Frédéric (and team) with names; people search "chef Luca Bistro"
- [ ] 🧑 Instagram captions first-person (@lucabistro84)
- [ ] 🧑 Press angle = his story ("chef who grew up in the south of France"), not "a French restaurant"

## ✅ Completed (detail in `archive/STATUS-HISTORY-2026-07.md`)
- **Jul 23** — booking clarity: phone demoted to a single small footer link ("General enquiries — we don't take reservations"), removed from hero/hours/private-dining/mobile bar; `.policy-note` "We do not take reservations" callout on Contact; red "Parties of 10 or more" badge on private dining (prod `b571f4d`, v2 `ea0ded7`). **GBP: found Google had silently flipped the profile to "Accepts reservations"** — set back to *Doesn't accept reservations* (More → Planning) and appended "we do not take reservations. Walk-ins only." to the description (750-char cap; it truncates silently). 6 review replies posted.
- **Jul 16–19** — LucaBistro-v2 mockup redesign built (Phase A + full homepage rebuild, hero/chef-band photo picks); Brunch→Lunch hour labels on production + v2 (menu tabs unchanged, prose unchanged); watch parties cancelled Jul 19 — removed from production (`c9ea4ef`), v2 (`22d0064`), GBP special hours + post
- **Jul 12–13** — watch-parties weekend: hours changes + GBP special hours & post, French Fry Day teardown, World Cup → Watch Parties (3 parchment cards), What's On / Private Dining naming, private-dining section (interim mailto form to events@), Cadre Bistro parchment menus, 6 review replies, sitemap resubmitted (Success) + lastmod bump
- **Jul 8** — SEO push: patio section + alt text, Rosé Event JSON-LD, `#patio` deep link, legacy-URL redirects, chef letter + Person schema, GSC verified, FFD event build, GBP/Instagram posts
- **Jul 4–7** — QC groups G2/G3/G5–G8, move to Code-Home, luca-deploy skill created
