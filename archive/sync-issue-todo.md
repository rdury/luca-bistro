# Sync Issue â€” To-Do for Next Session

## The problem (what keeps biting us)

The project lives in a **OneDrive-synced folder** (`C:\dev\Projects\luca-bistro`), and running git + editors inside a live-syncing folder has caused three recurring failures:

1. **File truncation.** A bulk CRLF line-ending normalization committed with `git add -A` chopped the end off `index.html` (broke all JS â†’ dead tabs/nav on phones) and also truncated `.vercelignore` (would have published a 1.6 MB screenshot). Both had to be rebuilt from earlier commits.
2. **Stale mount / divergent views.** The Linux workspace mount sometimes showed an old, shorter copy of a file than what was actually on disk â€” risky when editing.
3. **Stuck git locks.** OneDrive holding files open left stale `.git\index.lock` / `HEAD.lock` files that blocked `git checkout`/commit.

## To-do next time (in priority order)

- [ ] **Move the repo out of OneDrive** â€” clone/copy to a non-synced path (e.g. `C:\dev\luca-bistro`) and work there; push to GitHub as usual. This eliminates the root cause of all three issues. *(Best fix.)*
  - Alternative if it must stay in OneDrive: **pause OneDrive sync** while editing/committing, or set the folder to **"Always keep on this device"** so files aren't cloud-only placeholders.
- [ ] **Add a `.gitattributes`** to lock line endings and stop normalization churn/truncation. Suggested:
  ```
  * text=auto
  *.html text eol=lf
  *.css  text eol=lf
  *.js   text eol=lf
  ```
- [ ] **Stop using bulk `git add -A` with line-ending changes.** Commit specific files (`git add index.html`) in small, reviewed commits.
- [ ] **Post-edit integrity ritual** for `index.html`:
  - File ends with `</script></body></html>`
  - Inline JS parses (`node --check`)
  - **Canary:** if the footer shows `Â©` with no year, the script got truncated â€” do not deploy.
- [ ] **Stale-lock cheat sheet** (when git says a `.lock` "File exists" and no git is running):
  ```
  del .git\index.lock .git\HEAD.lock .git\objects\maintenance.lock
  ```
- [ ] **Deploy discipline:** push to `preview` first, verify the preview build, then merge to `master` for production.

## Status of related items (as of Jul 2, 2026)

- `index.html` truncation â€” **fixed & live.**
- `.vercelignore` truncation â€” **fixed** (now also ignores all `*.md` notes + `*.bak` + the stray screenshot).
- Root cause (OneDrive + git) â€” **not yet addressed.** That's what this list is for.

---

## To-Do Tomorrow (Jul 3, 2026)

From the thorough site review â€” no hard errors remain; these are consistency/judgment items. Preview â†’ verify â†’ promote as usual.

**Menu (needs owner decision):**
- [ ] **84 Burger price:** $16 on dinner vs $15 on lunch â€” confirm intended, or match. Also align ingredient order ("Harissa sauce, lettuce, tomato, gruyÃ¨re" vs "Lettuce, tomato, gruyÃ¨re, harissa sauce").
- [ ] **Avocado Shrimp Salad description:** dinner says "Shrimpâ€¦", lunch/brunch say "Grilled shrimpâ€¦" (price already consistent at $20). Align wording.

**Wine accents (verify against the actual bottles first):**
- [ ] "Reserve de Marande" and "Reserve de Mauny" â†’ likely **RÃ©serve**.
- [ ] "Domaine InÃ©s Sancerre" â†’ possibly **InÃ¨s**.

**World Cup (after July 19 teardown):**
- [ ] Remove the WC banner, event card, and fixtures table; disable the recurring match-schedule task.
- [ ] Until then (optional): the R16 rows cite "Winner â€¦" for R32 matches not shown, and the Jul 11 Kansas City QF sits at 9:00 PM (closing time).

**Cosmetic (safe, low value):**
- [ ] Remove the stray double-space in the About `<img>` tag.

**Enhancements (separate, when ready):** see `enhancements-plan.md` â€” Search Console sitemap submit, newsletter signup, private-events callout, embedded map, Instagram feed.


