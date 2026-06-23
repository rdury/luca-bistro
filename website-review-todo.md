# Luca Bistro — Website Review Checklist

Action items from the review, ordered by priority. Top two directly serve the "fast + thoughtful" goal.

_Last updated: June 23, 2026._

## Critical
- [x] **Optimize photos** — ✅ Done. All 28 JPEGs converted to WebP (~1600px, originals kept). Total photo weight 267 MB → 6.2 MB; first-paint image weight now ~552 KB.
- [x] **Add `loading="lazy"`** to gallery images — ✅ Done. All 26 below-the-fold images lazy-load; hero gets `fetchpriority="high"`. (Layout shift already handled by CSS `aspect-ratio`/fixed heights.)
- [~] **Revoke the Firecrawl API key** — ⏳ Code done: key removed from `scrape.js` + `scrape_toast.js`, now read from `FIRECRAWL_API_KEY` env var; `.env.example` added. **Still TODO (you): rotate/revoke the old key in the Firecrawl dashboard** — it remains in git history and is compromised.

## High
- [x] **Replace the `mailto:` forms** (contact + jobs) — ✅ Done. Both now post to Web3Forms with an in-page success/error message, spam honeypot, and résumé upload preserved. Access key is in place. _Test once hosted: confirm a message + a job application (with résumé) arrive._
- [x] **Fix the hero image** — ✅ Done. Hero is now the back-patio photo (`photos/back-patio.webp`, 1600×1067, 418 KB), also used as the large image in the Photos → Back Patio panel. (Superseded the earlier south-of-france crop, which has been deleted.)
- [x] **Delete the orphaned `app/src/` React folder** — ✅ Done. Removed from the working tree (still in git history; commit the deletion).

## Medium / SEO
- [x] Add a `<meta name="description">` — ✅ Done.
- [x] Add Open Graph + Twitter card tags — ✅ Done (7 OG + 4 Twitter tags, image = hero).
- [x] Add a favicon — ✅ Done. Generated `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` from the cicada emblem on the brand-dark background.
- [x] Improve `<title>` — ✅ Done: "Luca Bistro — French Bistro in Mt. Adams, Cincinnati".
- [n/a] Link `rose-all-day.pdf` from the Events section — dropped. The PDF was removed; events are listed inline in the Events section instead.

## Polish
- [x] Rewrite the duplicated news copy — ✅ Done. Both blurbs now distinct; dropped the awkward "no loops thrown"; crème brûlée now appears once.
- [x] Optional: add ARIA roles / `aria-selected` to the tab buttons — ✅ Done. All three tab groups (About, Menu, Photos) now use the proper ARIA tabs pattern (`role=tablist/tab/tabpanel`, `aria-selected`, `aria-controls`, roving `tabindex`) with arrow-key + Home/End keyboard navigation. Also consolidated three duplicated handlers into one.

## Worth keeping (no action)
- Single-file, no-framework, no-build architecture — genuinely fast once images are fixed.
- Strong design: Cormorant Garamond + Jost pairing, restrained palette, sticky blurred nav, thoughtful mobile breakpoints.
- Good alt text and `rel="noopener"` on external links.
