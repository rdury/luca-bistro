# Status history — July 2026 (archived from CLAUDE.md)

Archived Jul 7, 2026 when CLAUDE.md was slimmed. Newest first. Prior notes from before Jul 3 are in the other files in `archive/`.

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
