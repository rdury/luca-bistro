# Luca Bistro â€” Quick-Fix Plan (Errors & Issues)

QC pass on **July 2, 2026**, desktop rendered live + full mobile-CSS review. The big one â€” the truncated `index.html` that broke tabs/nav on phones â€” is **already fixed and live**. What follows is the remaining punch list, ordered by priority. Nothing here is on fire; it's polish and time-sensitive housekeeping.

## Priority 1 â€” Time-sensitive (content correctness)

1. **World Cup teardown after July 19.** The header/event banner, the "World Cup 2026 / Allez les Bleus" card, and the live-fixtures table are all dated **June 11 â€“ July 19, 2026**. The day the tournament ends they date the whole site. Action when ready: remove the World Cup event card + fixtures table, and disable the recurring match-schedule task. One clean pass.
2. **Fixtures are auto-generated and unverified.** The knockout slate (Jul 2â€“11) was generated, not checked against an official schedule. There's a "subject to change" note, which helps, but a guest could still show up for a match that isn't really on. Sanity-check the fixtures, or lean harder on the disclaimer.

## Priority 2 â€” Mobile layout (verify on a real phone, then fix if needed)

3. **World Cup fixtures table is dense inside its framed card.** On a ~350px phone the 3-column table (date Â· time Â· long "Winner â€¦" matchups) is cramped and may crowd or overflow the decorative border. Fix if it does: shrink the fixture font on mobile, let date+time share a line, or allow the table to scroll horizontally inside the card. *(Goes away with the July 19 teardown â€” only worth doing if the banner stays up a while.)*
4. **`.event-tabs` isn't in the mobile horizontal-scroll rule.** The About/Menu/Photos tab rows scroll sideways on mobile; the Events "Current/Past" tabs don't share that rule (line ~421). Only 2 buttons so it likely fits, but add it for consistency â€” one-line change.

## Priority 3 â€” Performance & accessibility (small, safe wins)

5. **Add intrinsic `width`/`height` to images** that lack them â€” the nav logo, the About-tab photo, and the gallery images. Lets the browser reserve space and removes layout shift (Core Web Vitals nudge).
6. **Downscale `world-cup-banner.webp`.** It's ~3046px wide but never displays wider than ~700px; a ~1400px version cuts load with zero visible change. *(Moot after July 19.)*
7. **Nudge two muted footer colors** for contrast on the blue: the "Closed" label (`#A7B7C8`) and the copyright line (`#C4B99F`). Low-priority secondary text, but a touch brighter reads cleaner.

## Required last step â€” verify (given the recent truncation)

After any edit to `index.html`: re-render desktop **and** check on an actual phone, and confirm file integrity â€” the file must still end with `</script></body></html>` and the inline JS must parse. A fast canary: if the footer shows `Â©` with no year, the script got cut off again.

> Note on process: the truncation came from a bulk CRLF-normalization committed with `git add -A`. Avoid that pattern on this repo â€” small, targeted commits don't carry the risk.

