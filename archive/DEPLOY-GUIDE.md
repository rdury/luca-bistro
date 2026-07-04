# Luca Bistro â€” Deploy Cheat Sheet

How to preview changes safely, promote them to the live site, and push directly to production. All commands run on the **command line**, inside your project folder.

**Setup recap**
- Project folder: `C:\dev\Projects\luca-bistro`
- `master` branch â†’ **Production** (Vercel autoâ€‘deploys this to your live site)
- `preview` branch â†’ **Preview** (Vercel autoâ€‘deploys this to a private preview URL; does NOT affect production)
- Vercel watches GitHub: every push to a branch triggers a deploy automatically.

**Always start here** (go to the folder):
```
cd "C:\dev\Projects\luca-bistro"
```

---

## Quick reference

| Goal | Commands |
|------|----------|
| **Deploy to Preview** | `git checkout preview` â†’ edit files â†’ `git add -A` â†’ `git commit -m "..."` â†’ `git push` |
| **Merge Preview â†’ Production** | `git checkout master` â†’ `git merge preview` â†’ `git push` |
| **Push straight to Production** | `git checkout master` â†’ `git add -A` â†’ `git commit -m "..."` â†’ `git push` |

Then watch **Vercel â†’ Lucaâ€‘Bistro project â†’ Deployments tab** for the new build.

---

## 1. Deploy to Preview (test changes without touching the live site)

1. Switch to the preview branch:
   ```
   git checkout preview
   ```
2. *(Optional but recommended)* sync it with the latest production first:
   ```
   git merge master
   ```
3. Make your edits and save the files.
4. Stage and commit:
   ```
   git add -A
   git commit -m "short description of the change"
   ```
5. Push:
   ```
   git push
   ```
6. In **Vercel â†’ Lucaâ€‘Bistro â†’ Deployments**, the newest row is tagged **`preview`** with a **"Preview"** badge. Click **Visit** for the URL (looks like `luca-bistro-git-preview-â€¦.vercel.app`). Share it for feedback if you like â€” it doesn't affect the live site.

> **If a push says "Everything upâ€‘toâ€‘date"** there was nothing new to send. To force a preview build without code changes:
> ```
> git commit --allow-empty -m "trigger preview deploy"
> git push
> ```

---

## 2. Merge Preview into Production (go live with what you previewed)

When the preview looks right, fold those changes into `master`:

```
git checkout master
git merge preview
git push
```

That push updates `master`, and Vercel **autoâ€‘deploys it to Production**. Check the **Deployments** tab â€” the new row will be tagged **`master`** / **"Production."**

---

## 3. Push straight to Production (skip the preview step)

For a quick change you don't need to preview first:

```
git checkout master
git add -A
git commit -m "short description of the change"
git push
```

`master` push â†’ Vercel autoâ€‘deploys to your production site. Done.

---

## Notes & gotchas

- **First push of a brandâ€‘new branch:** use `git push -u origin <branch>` once to set it up; after that, plain `git push` works.
- **"Everything upâ€‘toâ€‘date":** the branch already matches GitHub â€” commit a change (or use the emptyâ€‘commit trick above) before pushing.
- **Push rejected / "fetch first":** something changed on the remote. Run `git pull`, resolve if needed, then `git push`.
- **Where deployments show up:** Vercel has no "branches" page â€” everything is in the **Deployments** tab. Each row shows its branch and a Preview/Production badge, and has its own permanent URL.
- **Which branch is live:** `master` is the production branch. Any other branch (we use `preview`) produces preview deployments only.
- **The real domain:** `lucabistro.com` still points to the old BentoBox host until the DNS is repointed to Vercel â€” that's a separate oneâ€‘time step (GoDaddy DNS), not part of this push workflow.

---

## Typical dayâ€‘toâ€‘day flow

```
cd "C:\dev\Projects\luca-bistro"
git checkout preview
git merge master                       # start from the latest live version
# ...make edits...
git add -A
git commit -m "what changed"
git push                               # -> preview URL, review it
git checkout master
git merge preview
git push                               # -> live
```

