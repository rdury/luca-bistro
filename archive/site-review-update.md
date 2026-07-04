# Luca Bistro â€” Site Review & Enhancement Ideas (Update)

A fresh top-to-bottom review of the current site (blue hero, World Cup feature, jobs, blue footer with Guild badge). The site is in great shape and looks cohesive. Below, grouped by priority â€” **time-sensitive items first**, since a couple could actually mislead guests if left as-is.

---

## 1. Time-sensitive â€” handle these first

### a. The World Cup content has an expiration date (July 19)
The header banner, the "World Cup 2026 / Allez les Bleus" event, and the live-match table are all tied to **June 11 â€“ July 19, 2026**. The day the tournament ends, all of it should come down or it instantly dates the whole site. When you're ready, this means removing: the `wc-banner` in the header, the "World Cup 2026" heading + card + fixtures table in Events, and disabling the Monday match-schedule scheduled task. **Say the word on/after July 19 and I'll strip it out in one pass.**

### b. Verify the live-match list against the *real* schedule âš ï¸
The fixtures table currently shows matches like "France v Sweden," "United States v Bosnia & Herzegovina," "Argentina v Cabo Verde" (Jun 30 â€“ Jul 3). These are generated automatically and I can't confirm they're the actual World Cup fixtures. **If a guest comes in expecting a match that isn't really on, that's a bad experience.** Please sanity-check the teams and kickoff times against the official schedule. Also, the note says "group stage," but by late June/July the tournament is in the knockout rounds â€” that label is likely wrong now.

### c. A past RosÃ© event is still showing
"RosÃ© All Day â€” June" (June 27th) has already passed. Like we did with the May card, it should be removed so the first card is always the next upcoming date (July 30, then Aug 29). **Quick fix â€” want me to remove it now?**

---

## 2. Content & accuracy (owner confirm)

- **Menu prices to double-check:** Salade NiÃ§oise is **$18 on dinner** but **$19 on lunch**; "Gazpacho" (dinner) vs "Tomato Gazpacho" (lunch). Intentional, or should they match?
- **Web3Forms key in the code is fine.** The `access_key` visible in the contact/jobs forms is *meant* to be public (that's how Web3Forms works) â€” it is **not** a security leak, so no action needed there.
- **Jobs intro line** still says "Feel free to send in your resumeâ€¦" which now aligns nicely with the email note you added. Good and consistent.

---

## 3. Performance

- **The World Cup banner image is oversized.** `world-cup-banner.webp` is 3046px wide but never displays wider than ~720px. Serving a ~1500px version would shave load time with zero visible change. (Moot once the banner comes down after July 19 â€” but worth it if it stays up a while.)
- **Add intrinsic `width`/`height` to the About and gallery images** (the banner already has them). Removes any layout shift and nudges Core Web Vitals. Small, safe win.

---

## 4. Accessibility (all minor)

- Contrast on the new blue sections is strong â€” yellow `#F8C325` and cream `#E4DAC2` both read clearly on the `#1C4B70` blue. Nice.
- Two footer colors are on the lighter side against the blue: the "Closed" label (`#A7B7C8`) and the copyright line (`#C4B99F`). They're low-priority muted text, but I can nudge them a touch brighter if you want them crisper.
- Tabs, ARIA roles, alt text, and reduced-motion support are all in place â€” solid.

---

## 5. Housekeeping (invisible, just tidy)

- A few CSS rules are now **orphaned** and can be removed: `.hero-img` (the hero is text-only now), `.bg-dark` (no dark sections), and `.guild-row` (the badge moved into the Contact column). Harmless, but cleaner without them.

---

## 6. Enhancement ideas (nice-to-haves, your call)

- **Email/newsletter signup.** Your old BentoBox site had one. If you want to keep collecting guest emails for events like RosÃ© All Day, I can add a simple signup (via Web3Forms) to the footer or Events section.
- **Embedded Google Map** in the Hours & Location tab (right now it's a text link). Adds convenience; costs a little load time.
- **Gift cards / large-party inquiry.** You mention 10+ events in the hours note â€” a dedicated "Private events & large parties" blurb or button could make that easier to find.
- **Instagram feed.** A small live feed of `@lucabistro84` in the Photos section keeps the page feeling current with minimal upkeep.
- **Post-launch SEO:** once `lucabistro.com` is serving the new site, submit your `sitemap.xml` in Google Search Console so Google re-indexes the new pages/content.

---

## Suggested order

1. **Verify the World Cup fixtures** (b) â€” accuracy risk.
2. **Remove the past June RosÃ© card** (c) â€” 2-minute fix.
3. Confirm the **menu price** questions (2).
4. Downscale the **banner image** + add image dimensions (3).
5. Whenever the tournament ends: **remove all World Cup content** (a).
6. Then pick any **enhancements** from section 6 you like.

Nothing here is urgent except double-checking those match fixtures. The site is polished, cohesive, and ready â€” this is the "keep it fresh and accurate" layer. Tell me which items to action and I'll take care of them.

