# Luca Bistro — Working TODO

Companion to `CLAUDE.md` (rules + current-state brief live there; this is the task list). Owner: Raymond · 🧑 needs Raymond · 🤖 Claude on request. Completed-work detail: `archive/STATUS-HISTORY-2026-07.md`.

## 🔲 Open — one-time

### Owner input needed
- [ ] 🧑 **G1** Menu consistency: 84 Burger $16 dinner vs $15 lunch; Avocado Shrimp Salad dinner description → "Grilled shrimp"
- [ ] 🧑 **G2** Wine-label checks: Réserve de Marande region (list says Provence, producer looks Languedoc/Pays d'Oc); Crémant "Château" vs "Réserve" de Mauny
- [ ] 🧑 **Photos for the Private Dining section** (`#private-events`)
- [ ] 🧑 GSC: inspect `https://www.lucabistro.com/` → "Request indexing" (fresh content: watch parties, private dining, parchment menus)
- [ ] 🧑 Run homepage through [Rich Results Test](https://search.google.com/test/rich-results) — expect Restaurant + Events
- [ ] 🧑 GBP setup pass: secondary categories (Brunch restaurant, Bistro, Wine bar), attributes (outdoor seating, walk-ins, dog-friendly?), upload patio/food photos

### Dated / automated (tasks are pre-authorized to deploy; prompts describe current markup — keep in sync)
- [ ] ⏰ Wed Jul 15, 9 AM — task `luca-tuesday-closure-reversal`: removes Tue Jul 14 notices + its schema entry
- [ ] ⏰ Mon Jul 20, 9 AM — task `luca-worldcup-banner-timeout`: retires hero banner + Watch Parties cards/CSS, posts Missed Events memorial with results, strips leftover special hours
- [ ] ⏰ **Jul 25 / Aug 29** 🤖: after each Rosé All Day passes, move card to Missed Events **and** remove its Event JSON-LD entry (both cards carry the series flyer as of Jul 14, so no flyer hand-off needed — just retire each card whole)

### Enhancements backlog (owner picks, Claude builds)
- [ ] G10 Newsletter signup — as "Letters from Frédéric" (see Frédéric's Voice)
- [ ] G12 Lazy-loaded map
- [ ] G13 Instagram link tile (@lucabistro84, no embed — extension policy blocks instagram.com; caption-via-clipboard is the assist pattern)
- [ ] Re-export 103 KB `logo.png` at 2×
- [ ] (Future, with the dury.net admin project) swap `#pe-form` mailto handler → POST; repoint Contact + Jobs forms off Web3Forms

## 🔁 Ongoing / recurring
- [ ] 🤖+🧑 **Each visit** — reply to 5 more old unreplied Google reviews in Frédéric's voice (draft → Raymond approves → post via GBP owner reply wizard, newest-first). **Backlog: 34** (as of Jul 14 — batch 2 done: Eric Isaacs 5★, Angelo Constantine 1★, Val 5★, Mike Wiery 5★, Mike Kearns 5★; next up: Janice Gerda. Rule from Raymond: never encourage "ask for [person]" in replies. Older 1★s are mostly hours/service — acknowledge, no excuses, point to the fix, invite back)
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
- **Jul 12–13** — watch-parties weekend: hours changes + GBP special hours & post, French Fry Day teardown, World Cup → Watch Parties (3 parchment cards), What's On / Private Dining naming, private-dining section (interim mailto form to events@), Cadre Bistro parchment menus, 6 review replies, sitemap resubmitted (Success) + lastmod bump
- **Jul 8** — SEO push: patio section + alt text, Rosé Event JSON-LD, `#patio` deep link, legacy-URL redirects, chef letter + Person schema, GSC verified, FFD event build, GBP/Instagram posts
- **Jul 4–7** — QC groups G2/G3/G5–G8, move to Code-Home, luca-deploy skill created
