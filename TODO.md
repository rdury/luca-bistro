# Luca Bistro — SEO & Site Enhancements TODO

Created Jul 8, 2026. Companion to `CLAUDE.md` (agent rules live there; this is the working list).
Owner: Raymond · Site: lucabistro.com · Items marked 🧑 need Raymond; 🤖 Claude can do on request.

## ✅ Completed

### Jul 8, 2026 — SEO push (live in production, commits `ec73f62` + `51ed151`)
- [x] Garden patio section — keyword-bearing heading + copy in the Photos section (`#patio`)
- [x] Descriptive, location-bearing alt text on all five patio photos
- [x] `Event` JSON-LD for Rosé All Day July 30 & August 29 (rich-result eligible)
- [x] `#patio` deep link auto-selects the Back patio gallery tab (shareable for GBP/Instagram/press)
- [x] `sitemap.xml` lastmod refreshed
- [x] **G9** Google Search Console — domain verified, sitemap submitted 🧑
- [x] Legacy old-site URLs (`/menus/`, `/contact/`, `/gallery/`, etc.) 301-redirect to section anchors instead of 404ing (`vercel.json`)
- [x] "Un mot de Frédéric" chef's letter in Our Story (approved by Raymond Jul 8) — refresh seasonally (~Oct: autumn edition)
- [x] `Person` schema for Chef Frédéric Maniet (`founder` in Restaurant JSON-LD)
- [x] National French Fry Day event (Jul 10) — flyer, card with free-fries offer, hero burst, Event schema with Offer

### Earlier (Jul 4 QC groups — see `archive/STATUS-HISTORY-2026-07.md`)
- [x] G2/G3/G5–G8 deployed

## 🔲 Open — one-time

### Quick (this week)
- [x] Rosé All Day GBP post — posted Jul 8 with the 2026 flyer (July 25 + Aug 29 series; flyer date July 25 corrected on site same day). FFD GBP post published Jul 8.
- [x] Instagram — FFD and Rosé All Day both posted Jul 8 (manual; the Claude Chrome extension blocks instagram.com by policy — captions via clipboard works well as the assist pattern)
- [ ] 🧑 GSC: inspect `https://www.lucabistro.com/` and `/menus/` → "Request indexing" (pulls new content + redirect discovery forward)
- [ ] 🧑 GSC: confirm the sitemap "Temporary processing error" cleared (24–48 h; resubmit if not)
- [ ] 🧑 Run homepage through [Rich Results Test](https://search.google.com/test/rich-results) — expect Restaurant + 2 Events
- [ ] 🧑 Google Business Profile setup pass: secondary categories (Brunch restaurant, Bistro, Wine bar), attributes (outdoor seating, walk-ins, dog-friendly?), upload patio/food photos

### Dated
- [x] ⏰ **French Fry Day teardown** 🤖 — DONE Jul 12 (deployed `491963b`): card → Missed Events, hero burst anchor removed (container + CSS kept per plan), Event JSON-LD entry removed
- [x] 🤖 **Jul 12 hours updates** (deployed `12c0c1c`): "Kitchen closes 30 minutes before close" (permanent, low-key) + "closed Tuesday, July 14" notice (hours panel, footer, schema specialOpeningHoursSpecification) + GBP special hours Jul 14 Closed (auto-expires). Scheduled task `luca-tuesday-closure-reversal` removes the temporary notices Wed Jul 15 9 AM. World Cup daily task DISABLED (Raymond: manual updates from now on). Bracket redesign pending Frédéric: `archive/wc-bracket-jul12.patch`
- [x] 🤖 **Review replies round 2** — DONE Jul 12: posted Frédéric-voice replies to Savannah Hongell 1★, Dan Healey 1★, Chris Warner 4★, Danielle Ptacek 5★, Julia Belliveau 5★ + Ryan Knight 5★ (new). Unreplied backlog now 39 (older; mostly service/hours complaints 7mo+) — decide with Raymond whether to work through in batches
- [x] ⏰ **G4 World Cup teardown — done EARLY Jul 12** (`485aaa4`, Raymond: "event is over for us" — closed for the semis): event card/fixtures/results removed from Current Events; memorial entry + knockout `.wc-bracket` added to Missed Events (bracket CSS stays permanently); Rosé now leads Current Events. REMAINING → scheduled task `luca-worldcup-banner-timeout` (Mon Jul 20 9 AM, pre-authorized): remove hero banner anchor + `.hero-bursts`/`.hero-burst*`/`.hero-banner-link` CSS, fill final scores into the bracket, deploy
- [ ] ⏰ **Jul 25 / Aug 29** 🤖: after each Rosé All Day passes, move card to Missed Events **and** remove its entry from the Event JSON-LD block (Jul 25 card carries the series flyer — move the flyer img to the Aug 29 card when Jul passes)

### Owner input needed (carried from CLAUDE.md)
- [ ] 🧑 **G1** Menu consistency: 84 Burger $16 dinner vs $15 lunch; Avocado Shrimp Salad dinner description → "Grilled shrimp"
- [ ] 🧑 **G2 follow-ups** (check bottle labels): Réserve de Marande region; Crémant "Château" vs "Réserve" de Mauny

### Enhancements backlog (owner picks, Claude builds)
- [x] **Parchment menu ("Cadre Bistro")** — DEPLOYED Jul 12 (owner-approved): CSS-only, all menu tabs on aged parchment + grain in the gilt event-card frame with faint cicada watermark. Raymond picked variant C of A–D (4-look mockup kept in untracked `menu-parchment-preview.html`)
- [ ] G10 Newsletter signup (existing Web3Forms pattern) — *see Frédéric's Voice below*
- [x] **G11 Private events — DEPLOYED Jul 12** (owner-approved, INTERIM EMAIL VERSION): `#private-events` section + nav link + footer/Hours links + `/private-events` redirect; inquiries via mailto to events@lucabistro.com (prefilled subject/body template) until the dury.net admin site's request form replaces it. Photos for the section still to come (owner picks). The Jul 8 Web3Forms-form version stays in `archive/private-events-G11.patch` for reference until deleted
- [ ] G12 Lazy-loaded map
- [ ] G13 Instagram link tile (@lucabistro84, no embed)
- [ ] Re-export 103 KB `logo.png` at 2×

## 🔁 Ongoing / recurring

- [ ] 🧑 **Weekly** — GBP: post each event (use the `/#patio` or `/#events` link), reply to every new review within a few days
- [ ] 🧑 **Monthly** — GSC Performance tab: which queries are moving ("patio," "brunch," "french restaurant cincinnati") → feeds next on-page tweaks
- [ ] 🧑 **Seasonal (spring/early summer)** — pitch Cincinnati food media for "best patio" / "best brunch" roundups (CityBeat, Cincinnati Magazine); lead with patio photos + Enquirer coverage
- [ ] 🤖 **With every event edit** — keep event cards and Event JSON-LD in sync (rule recorded in `CLAUDE.md`)
- [ ] 🤖+🧑 **Each visit (standing, Raymond Jul 12)** — reply to 5 more of the old unreplied Google reviews in Frédéric's voice (draft → Raymond approves → post via the owner reply wizard, newest-first). Backlog at 39 after the Jul 12 batch; many old 1★s are hours/service complaints — acknowledge, no excuses, point to the fix, invite back

## 🎙️ Frédéric's Voice — making "part of the family" a strategy

The differentiator is that Luca feels like Frédéric's home. Search engines can't rank a feeling — but they rank the *artifacts* of it: owner replies, fresh first-person content, named people, repeat engagement. Each item below turns the voice into something crawlable.

- [ ] 🧑 **Review replies signed by Frédéric** — short, personal, occasionally a French phrase ("Merci mille fois, à bientôt"). The single highest-leverage recurring item; owner responses are a ranking signal AND read by every future guest.
- [x] 🤖+🧑 **"Un mot de Frédéric" site section** — DONE Jul 8 (summer edition live). Recurring: refresh the letter seasonally — autumn (~Oct), winter (~Dec), spring (~Mar), summer (~Jun).
- [ ] 🤖+🧑 **G10 newsletter as a letter, not a blast** — frame the signup as "Letters from Frédéric" and write each send in his voice. Higher open rates, and the signup framing itself reinforces the brand.
- [ ] 🧑 **GBP event posts in his voice** — "We're pouring rosé all day Saturday — come find me on the patio. — F." beats a generic announcement.
- [ ] 🤖+🧑 **Past Events memorials with a personal recap** — one warm sentence from Frédéric per past event ("June's Rosé All Day — merci to Nick for the music and to everyone who stayed for one more glass"). Builds a growing, dated, first-person event history on the page.
- [ ] 🧑 **Faces in Our Story** — a photo of Frédéric (and team, if willing) with names in the About section; people search "chef Luca Bistro," and named humans strengthen the Google entity.
- [x] 🤖 **Person schema for Chef Frédéric Maniet** — DONE Jul 8 (`founder` Person markup in Restaurant JSON-LD).
- [ ] 🧑 **Instagram captions first-person** — same voice on @lucabistro84; consistency across surfaces is what makes the entity credible.
- [ ] 🧑 **Press angle = his story** — pitches lead with "chef who grew up in the south of France," not "French restaurant"; journalists write about people.
