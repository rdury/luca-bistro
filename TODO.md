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

### Earlier (Jul 4 QC groups — see `archive/STATUS-HISTORY-2026-07.md`)
- [x] G2/G3/G5–G8 deployed

## 🔲 Open — one-time

### Quick (this week)
- [ ] 🧑 GSC: inspect `https://www.lucabistro.com/` and `/menus/` → "Request indexing" (pulls new content + redirect discovery forward)
- [ ] 🧑 GSC: confirm the sitemap "Temporary processing error" cleared (24–48 h; resubmit if not)
- [ ] 🧑 Run homepage through [Rich Results Test](https://search.google.com/test/rich-results) — expect Restaurant + 2 Events
- [ ] 🧑 Google Business Profile setup pass: secondary categories (Brunch restaurant, Bistro, Wine bar), attributes (outdoor seating, walk-ins, dog-friendly?), upload patio/food photos

### Dated
- [ ] ⏰ **Jul 19 — G4 World Cup teardown** 🤖: banner, event card, fixtures, results, orphaned `wc-` CSS (`grep -c "wc-"` = 0); keep "Rosé All Day 2026" heading; disable scheduled task; optional Past Events memorial entry
- [ ] ⏰ **Jul 30 / Aug 29** 🤖: after each Rosé All Day passes, move card to Past Events **and** remove its entry from the Event JSON-LD block

### Owner input needed (carried from CLAUDE.md)
- [ ] 🧑 **G1** Menu consistency: 84 Burger $16 dinner vs $15 lunch; Avocado Shrimp Salad dinner description → "Grilled shrimp"
- [ ] 🧑 **G2 follow-ups** (check bottle labels): Réserve de Marande region; Crémant "Château" vs "Réserve" de Mauny

### Enhancements backlog (owner picks, Claude builds)
- [ ] G10 Newsletter signup (existing Web3Forms pattern) — *see Frédéric's Voice below*
- [ ] G11 Private-events callout ("For events of 10+" already in footer — give it a proper section)
- [ ] G12 Lazy-loaded map
- [ ] G13 Instagram link tile (@lucabistro84, no embed)
- [ ] Re-export 103 KB `logo.png` at 2×

## 🔁 Ongoing / recurring

- [ ] 🧑 **Weekly** — GBP: post each event (use the `/#patio` or `/#events` link), reply to every new review within a few days
- [ ] 🧑 **Monthly** — GSC Performance tab: which queries are moving ("patio," "brunch," "french restaurant cincinnati") → feeds next on-page tweaks
- [ ] 🧑 **Seasonal (spring/early summer)** — pitch Cincinnati food media for "best patio" / "best brunch" roundups (CityBeat, Cincinnati Magazine); lead with patio photos + Enquirer coverage
- [ ] 🤖 **With every event edit** — keep event cards and Event JSON-LD in sync (rule recorded in `CLAUDE.md`)

## 🎙️ Frédéric's Voice — making "part of the family" a strategy

The differentiator is that Luca feels like Frédéric's home. Search engines can't rank a feeling — but they rank the *artifacts* of it: owner replies, fresh first-person content, named people, repeat engagement. Each item below turns the voice into something crawlable.

- [ ] 🧑 **Review replies signed by Frédéric** — short, personal, occasionally a French phrase ("Merci mille fois, à bientôt"). The single highest-leverage recurring item; owner responses are a ranking signal AND read by every future guest.
- [ ] 🤖+🧑 **"Un mot de Frédéric" site section** — a short seasonal chef's letter on the homepage (3–4 sentences: what's on the stove, what's pouring, what the patio smells like). Fresh, first-person, keyword-rich content that updates a few times a year. Claude drafts, Frédéric edits, Raymond approves.
- [ ] 🤖+🧑 **G10 newsletter as a letter, not a blast** — frame the signup as "Letters from Frédéric" and write each send in his voice. Higher open rates, and the signup framing itself reinforces the brand.
- [ ] 🧑 **GBP event posts in his voice** — "We're pouring rosé all day Saturday — come find me on the patio. — F." beats a generic announcement.
- [ ] 🤖+🧑 **Past Events memorials with a personal recap** — one warm sentence from Frédéric per past event ("June's Rosé All Day — merci to Nick for the music and to everyone who stayed for one more glass"). Builds a growing, dated, first-person event history on the page.
- [ ] 🧑 **Faces in Our Story** — a photo of Frédéric (and team, if willing) with names in the About section; people search "chef Luca Bistro," and named humans strengthen the Google entity.
- [ ] 🤖 **Person schema for Chef Frédéric Maniet** — add `founder`/`employee` Person markup to the Restaurant JSON-LD linking his name to the bistro.
- [ ] 🧑 **Instagram captions first-person** — same voice on @lucabistro84; consistency across surfaces is what makes the entity credible.
- [ ] 🧑 **Press angle = his story** — pitches lead with "chef who grew up in the south of France," not "French restaurant"; journalists write about people.
