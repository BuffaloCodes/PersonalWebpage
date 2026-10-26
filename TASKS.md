# Site To-Do
 
## Due soon
- [ ] Commit and push the 10/26/26 content changes (`TASKS.md`, `UPDATES.md`, `data/career.json`, `js/experience-data.js`, `projects.html`, and eight project pages: Army forecast, BoomTown, Green Tree, Newmark, Portugal, Ready 3, Renal OCT, South Africa; `css/styles.css` should not appear). Then click both homepage download buttons on the live site and confirm each downloads the new file
- [ ] Army forecast: build a new dashboard image (no unit names, locations, or readiness data), replace `army-forecast-1.jpg`, and send it to me for alt text (deferred at your request, 10/26/26)
- [ ] CV wording, your call: the Renal OCT bullet could say you were team leader (the South Africa bullet is accurate as written)
- [ ] Career Facts: re-review `data/career-facts.md` against the final Resume and CV (the Resume and CV are final and live as of 10/26/26; Career Facts has not been re-reviewed)
- [ ] Make the Career Facts sheet the standard everywhere: update LinkedIn to match (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering Jan 2009 to May 2016; "Newmark" (not Newmark RF); the two Univar bullets; Industrial Safety and Geological Engineering degree names; PMP Sep 2022). `data/career-facts.md` is the generated reference
- [ ] LinkedIn: apply the final CV wording (see the Career Facts item above); also note the CV Profile now says "engineer officer" and "real estate management consulting"
- [ ] Resume line to place or drop: "managed 2 large-scale infrastructure projects" appears only on the Resume (Army block); decide which role it belongs to or remove it at the next Resume edit
- [ ] Real images for all ten projects (`assets/images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg`) plus alt text (due 11/1/26)
- [ ] Review every `EDIT:` comment (Ctrl+Shift+F); South Africa and Renal OCT need the most (due 11/1/26)
- [ ] Experience page detail text: review the `EDIT:` items in `data/career.json` (no longer in `js/experience.js`), refine each role's summary, highlights, and skills, then run `python scripts/build_career.py` and commit (include in the 11/1/26 batch)
- [ ] Experience page: confirm the six Army role descriptions (rewritten 10/24/26 from the CV) and the Green Tree status line before sharing the page widely

## 11/1/26 content checklist (by page)
Built 10/24/26 from a scan of every `EDIT:` comment and image slot in the repo (commit b6ea10b). Work top to bottom; the first two pages need the most. Search for `EDIT:` (Ctrl+Shift+F) to jump to each item, and delete the comment once the item is done.

Image status: 3 of 30 slots hold real images (`army-forecast-1`, `boomtown-1`, `home-server-1`); the other 27 are still the gray "Image placeholder" files. Alt text is still the generic default on all 30 (for example "Home server image 1"), including the three real images, so each needs a real description. Keep each file name and the `.jpg` extension.

### South Africa (`project-south-africa.html`): thinnest draft
- [ ] Images: `south-africa-1.jpg` (top image and Projects-page card), `-2.jpg`, `-3.jpg` (side-by-side pair), plus alt text

### Renal OCT (`project-renal-oct.html`)
- [ ] Images: `renal-oct-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Add how the client responded to the final presentation

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
- [ ] Click every link by hand. The 10/24/26 automated audit found no broken internal links, images, or anchors on the published pages; still to check manually: LinkedIn, GitHub, and the Bookshelf Amazon links
- [ ] Spot-check the live site on your iPhone after the 10/24/26 CSS changes (automated review passed)
- [ ] Sitemap: `sitemap.xml` exists and lists all 14 published pages, including Experience (confirmed 10/24/26). Submit it in Google Search Console in November, after images and EDIT comments are finished
- [ ] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector
- [ ] Validate the new JSON-LD: paste `https://piercewallar.com/` into validator.schema.org or Google's Rich Results Test (expect a Person and a WebSite, no errors). Optionally add the site to your iPhone home screen to confirm the new touch icon

## Later
- [ ] Email forwarding at piercewallar.com (optional; the mailto link works for now)
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Rewrite `README.md` for a general audience (visitors, recruiters, and anyone who finds the repository) instead of as working instructions to me; no due date. Its "Finding things you still need to edit" and Files sections are now out of date (Experience data lives in `data/career.json`; add the `data/` and `scripts/` folders and the career-data workflow)
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied
- [ ] Optional: sync the Experience page bullets (Ready 3, Newmark, Gordian, BoomTown) with the more specific wording on the Resume and CV by editing `data/career.json`; the site versions are still the general drafts
