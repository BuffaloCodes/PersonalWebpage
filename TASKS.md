# Site To-Do (last updated 10/27/26, morning; origin/main 92a7f64 plus this file)
 
## Due soon
- [ ] A7 (tomorrow): run `python scripts/check_consistency.py --resume "<path to Resume .docx>" --cv "<path to CV .docx>"` (keep the .docx files in a private folder). First run flagged `contact.html`, a retired page still in the repo with a placeholder email (`your@email.com`). Decide: delete the file, or fix the address. Then try it with a LinkedIn `Positions.csv` export (experimental)
- [ ] A2 (tomorrow): finish `now.html`. Confirm the two EDIT: comments (this month's learning topics and the book you are reading), then remove the `noindex` meta line, add the Now link to the nav of all 16 pages (after Experience or Projects), add `https://piercewallar.com/now.html` to `sitemap.xml`, and set the "Last updated" footers. Update it monthly (Site Sunday)
- [ ] A3 (when you have time): follow `A3-Branded-Email-Guide.md` (about 1 hour plus DNS wait). Do it before printing business cards (A12)
- [ ] Army forecast: build a new dashboard image (no unit names, locations, or readiness data), replace `army-forecast-1.jpg`, and send it to me for alt text (deferred at your request, 10/26/26)
- [ ] Career Facts: re-review `data/career-facts.md` against the final Resume and CV (the Resume and CV are final and live as of 10/26/26; Career Facts has not been re-reviewed)
- [ ] Make the Career Facts sheet the standard everywhere: update LinkedIn to match (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering Jan 2009 to May 2016; "Newmark" (not Newmark RF); the two Univar bullets; Industrial Safety and Geological Engineering degree names; PMP Sep 2022). `data/career-facts.md` is the generated reference
- [ ] LinkedIn: apply the final CV wording (see the Career Facts item above); also note the CV Profile now says "engineer officer" and "real estate management consulting"
- [ ] Real images for all ten projects (`assets/images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg`) plus alt text (due 11/1/26)
- [ ] Review every `EDIT:` comment (Ctrl+Shift+F); South Africa needs the most; Renal OCT is done (due 11/1/26)
- [ ] Experience page detail text: review the `EDIT:` items in `data/career.json` (no longer in `js/experience.js`), refine each role's summary, highlights, and skills, then run `python scripts/build_career.py` and commit (include in the 11/1/26 batch)
- [ ] Experience page: confirm the six Army role descriptions (rewritten 10/24/26 from the CV) and the Green Tree status line before sharing the page widely

## 11/1/26 content checklist (by page)
Built 10/24/26 from a scan of every `EDIT:` comment and image slot in the repo (commit b6ea10b). Work top to bottom; the first two pages need the most. Search for `EDIT:` (Ctrl+Shift+F) to jump to each item, and delete the comment once the item is done.

Image status (10/27/26): 5 slots hold real images (`army-forecast-1`, `boomtown-1`, `home-server-1`, `renal-oct-1`, `renal-oct-2`); the other 24 are still the gray "Image placeholder" files. Renal OCT is finished and uses two images (its third slot was retired). Alt text is still the generic default everywhere else (for example "Home server image 1"), including the three older real images, so each needs a real description. Each page is being finished in its own "PROJECT EDIT" chat. Keep each file name and the `.jpg` extension.

### South Africa (`project-south-africa.html`): thinnest draft
- [ ] Images: `south-africa-1.jpg` (top image and Projects-page card), `-2.jpg`, `-3.jpg` (side-by-side pair), plus alt text

### Renal OCT (`project-renal-oct.html`): DONE 10/27/26 (commit 92a7f64)
- [x] Page rewritten, title now "Healthcare Technology Consulting Engagement", two images with alt text, card text and career data updated, no `EDIT:` comments left

### Portugal (`project-portugal.html`)
- [ ] Images: `portugal-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text

### Newmark (`project-newmark.html`)
- [ ] Images: `newmark-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text

### Ready 3 (`project-ready3.html`)
- [ ] Images: `ready3-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text

### Green Tree Risk Group (`project-green-tree.html`)
- [ ] Images: `green-tree-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text

### BoomTown (`project-boomtown.html`)
- [ ] Image `boomtown-1.jpg` is real; replace `boomtown-2.jpg` and `-3.jpg`, then write alt text for all three

### Army Unit Commodities Forecast (`project-army-forecast.html`)
- [ ] Images: replace `army-forecast-1.jpg` with the new dashboard image, replace `-2.jpg` and `-3.jpg`, then write alt text for all three

### American Political History (`project-political-history.html`)
- [ ] Images: `political-history-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Add an example: a period covered, a question you tested, or one exhibit you are proud of (deferred at your request, 10/26/26)

### Home Server (`project-home-server.html`)
- [ ] Image `home-server-1.jpg` is real; replace `-2.jpg` and `-3.jpg`, then write alt text for all three
- [ ] Add hardware specs, how it is networked at home, and other services (backups, monitoring) (deferred at your request, 10/26/26)
- [ ] Add what you plan to build next, or something that went wrong and what you learned (deferred at your request, 10/26/26)

### Experience page text (`data/career.json`; edit there, then run `python scripts/build_career.py`)
- [ ] Default selected role (`DEFAULT_ID` in `js/experience.js`, currently `newmark`): keep or change
- [ ] U.S. Army: confirm and add specifics to all six role descriptions (19D Cavalry Scout, Engineer Platoon Leader (Guard), Engineer Platoon Leader, Engineer Company Executive Officer, Deputy Group Engineer, Battalion Logistics Officer)
- [ ] University of Central Oklahoma: add honors or activities (deferred at your request, 10/26/26)
- [ ] OU MBA: add honors, leadership roles, or case competitions (deferred at your request, 10/26/26)

### Wrap-up after the content pass
- [ ] Ctrl+Shift+F for `EDIT:` and confirm only `_project-template.html` (and the `DEFAULT_ID` line in `js/experience.js`) still has one, and that no `EDIT:` items remain in `data/career.json`
- [ ] Open the Projects page and all ten project pages and confirm no gray "Image placeholder" boxes remain (they are image files, so a text search will not find them)
- [ ] Then submit `sitemap.xml` in Google Search Console and refresh the LinkedIn preview

## Launch checks
- [ ] Spot-check the live site on your iPhone after the 10/24/26 CSS changes (automated review passed)
- [ ] Sitemap: `sitemap.xml` exists and lists all 14 published pages, including Experience (confirmed 10/24/26). Submit it in Google Search Console in November, after images and EDIT comments are finished
- [ ] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector

## Later
- [ ] Email forwarding at piercewallar.com (optional; the mailto link works for now)
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Rewrite `README.md` for a general audience (visitors, recruiters, and anyone who finds the repository) instead of as working instructions to me; no due date. Its "Finding things you still need to edit" and Files sections are now out of date (Experience data lives in `data/career.json`; add the `data/` and `scripts/` folders and the career-data workflow)
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied
- [ ] Optional: sync the Experience page bullets (Ready 3, Newmark, Gordian, BoomTown) with the more specific wording on the Resume and CV by editing `data/career.json`; the site versions are still the general drafts
