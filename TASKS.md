# Site To-Do (last updated 10/29/26, mid-morning; origin/main 4b75b69 plus this file)

## Decisions on your 10/27 notes (answered 10/29/26; now tracked below)
- Ready 3 is hidden until the project is finished (done 10/29/26; see "Restore Ready 3" in Due soon)
- Update banner is live on every page (done 10/29/26; see "Remove the banner at launch" in Due soon)
- Experience page deep dive and the basic website check are scheduled as tasks below

## Due soon
- [ ] Remove the update banner at launch: in `js/site.js` change `var SHOW_UPDATE_BANNER = true;` to `false` (the styles in `css/styles.css` can stay or be deleted), then commit
- [ ] Restore Ready 3 when the project is finished (four steps): (1) in `projects.html`, delete the two `HIDDEN-UNTIL-FINISHED` comment lines around the card; (2) in `project-ready3.html`, change the robots meta back to `index, follow`; (3) in `sitemap.xml`, un-comment the Ready 3 line; (4) in `data/career.json`, restore the Ready 3 link (exact text is in that entry's `todo`), then run `python scripts/build_career.py`. Also add the three images and alt text
- [ ] Experience page deep dive (own session, same method as the project chats): review the 9 `EDIT:` items in `data/career.json`, add detail to each role, confirm the six Army role descriptions, then run `python scripts/build_career.py` and `python scripts/check_consistency.py`
- [ ] Basic website check (after the content pass): every page, links, meta tags, accessibility basics, and a "what is missing" list, including a short privacy page (the site uses GoatCounter analytics)
- [ ] CV: replace the BoomTown bullets in the CV Word file with the wording now on the site (suggested text was sent 10/29/26; the old "price against real costs, manage cash flow" bullet no longer matches), export the PDF, replace `assets/cv/Wallar_Pierce_CV_2026_10.pdf`, then run `python scripts/check_consistency.py --cv "<path to CV .docx>"`. Do this together with the South Africa bullet and the Newmark 552 check below, in one export
- [ ] Review the BoomTown subtitle and fact strip I drafted ("where I own strategy, operations, and delivery from end to end"; Scale and Status facts) and edit as you like; confirm "website live February 2025" (I read your "2/25" that way)
- [ ] A7 (tomorrow): run `python scripts/check_consistency.py --resume "<path to Resume .docx>" --cv "<path to CV .docx>"` (keep the .docx files in a private folder). First run flagged `contact.html`, a retired page still in the repo with a placeholder email (`your@email.com`). Decide: delete the file, or fix the address. Then try it with a LinkedIn `Positions.csv` export (experimental)
- [ ] A2 (tomorrow): finish `now.html`. Confirm the two EDIT: comments (this month's learning topics and the book you are reading), then remove the `noindex` meta line, add the Now link to the nav of all 16 pages (after Experience or Projects), add `https://piercewallar.com/now.html` to `sitemap.xml`, and set the "Last updated" footers. Update it monthly (Site Sunday)
- [ ] A3 (when you have time): follow `A3-Branded-Email-Guide.md` (about 1 hour plus DNS wait). Do it before printing business cards (A12)
- [ ] Army forecast: build a new dashboard image (no unit names, locations, or readiness data), replace `army-forecast-1.jpg`, and send it to me for alt text (deferred at your request, 10/26/26)
- [ ] Career Facts: re-review `data/career-facts.md` against the final Resume and CV (the Resume and CV are final and live as of 10/26/26; Career Facts has not been re-reviewed)
- [ ] Make the Career Facts sheet the standard everywhere: update LinkedIn to match (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering Jan 2009 to May 2016; "Newmark" (not Newmark RF); the two Univar bullets; Industrial Safety and Geological Engineering degree names; PMP Sep 2022). `data/career-facts.md` is the generated reference
- [ ] LinkedIn: apply the final CV wording (see the Career Facts item above); also note the CV Profile now says "engineer officer" and "real estate management consulting"
- [ ] CV: update the South Africa "Key project" bullet in the CV Word file (new wording is in `data/career.json`: five-person team, August 2025 to January 2026, screened international markets, financial model with upside and downside scenarios, sequenced market-entry plan), export the PDF, replace `assets/cv/Wallar_Pierce_CV_2026_10.pdf` (update `index.html` only if the file name changes), then run `python scripts/check_consistency.py --cv "<path to CV .docx>"`
- [ ] Real images for all ten projects (`assets/images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg`) plus alt text (due 11/1/26)
- [ ] Review every `EDIT:` comment (Ctrl+Shift+F); Renal OCT, Portugal, South Africa, Newmark and BoomTown are done (11/1/26 is a self-imposed target; progress is on pace)
- [ ] Experience page detail text: review the `EDIT:` items in `data/career.json` (no longer in `js/experience.js`), refine each role's summary, highlights, and skills, then run `python scripts/build_career.py` and commit (include in the 11/1/26 batch)
- [ ] Experience page: confirm the six Army role descriptions (rewritten 10/24/26 from the CV) and the Green Tree status line before sharing the page widely

## 11/1/26 content checklist (by page)
Built 10/24/26 from a scan of every `EDIT:` comment and image slot in the repo (commit b6ea10b). Work top to bottom; the first two pages need the most. Search for `EDIT:` (Ctrl+Shift+F) to jump to each item, and delete the comment once the item is done.

Image status (10/29/26): 17 slots hold real images (`army-forecast-1`, `boomtown-1` to `-3`, `home-server-1`, `newmark-1` to `-3`, `renal-oct-1`, `renal-oct-2`, `portugal-1` to `-6`, `south-africa-1`); the other 13 are still the gray "Image placeholder" files (`army-forecast-2`/`-3`, `green-tree-1` to `-3`, `home-server-2`/`-3`, `political-history-1` to `-3`, `ready3-1` to `-3`). Renal OCT (two images), Portugal (six), South Africa (one), Newmark (three) and BoomTown (three) are finished. Alt text is still the generic default on the remaining pages (for example "Home server image 1"), including the two older real images (`army-forecast-1`, `home-server-1`), so each needs a real description. Each page is being finished in its own "PROJECT EDIT" chat. Keep each file name and the `.jpg` extension.

### South Africa (`project-south-africa.html`): DONE 10/27/26 (commit a4d670e)
- [x] Page rewritten, title now "Global Business Experience: South Africa", one free-license hero image with alt text and an "illustrative" caption, card text and career data updated, no `EDIT:` comments left, unused images deleted
- [ ] CV bullet update (see Due soon)

### Renal OCT (`project-renal-oct.html`): DONE 10/27/26 (commit 92a7f64)
- [x] Page rewritten, title now "Healthcare Technology Consulting Engagement", two images with alt text, card text and career data updated, no `EDIT:` comments left

### Portugal (`project-portugal.html`): DONE (commits 5fe618e and 76995fe)
- [x] Page updated, six images in place (`portugal-1` to `-6`), no `EDIT:` comments left

### Newmark (`project-newmark.html`): DONE 10/27/26 (commit d62deb5)
- [x] Page rewritten, three images and alt text in place (logo hero, summary slide, redrawn process diagram), no `EDIT:` comments left; Newmark HR approved the logo image
- [ ] When the CV and Resume are next exported, check both say 552 entities (the site and `data/career.json` now say 552; older drafts said "500+" or "roughly 550"), then run `python scripts/check_consistency.py --cv "<path to CV .docx>"`

### Ready 3 (`project-ready3.html`): HIDDEN until the project is finished (10/29/26)
- [x] Card hidden on the Projects page, page set to `noindex`, removed from `sitemap.xml`, link removed from the Experience page (restore steps in Due soon)
- [ ] Images: `ready3-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text (only needed when you restore it)

### Green Tree Risk Group (`project-green-tree.html`)
- [ ] Images: `green-tree-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text

### BoomTown (`project-boomtown.html`): DONE 10/29/26 (commit 4b75b69)
- [x] Page rewritten (Gordian capital-planning origin, four service areas, home planning, how it is run), three images with alt text (logo hero, Oklahoma mark, website screenshot), card text and `career.json` synced, no `EDIT:` comments left. Molly is deliberately not mentioned and "one-person operation" is gone: do not add either back
- [ ] CV bullets, subtitle and fact-strip review (see Due soon)

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
- [ ] Open the Projects page and every published project page and confirm no gray "Image placeholder" boxes remain (they are image files, so a text search will not find them); Ready 3 is hidden, so its placeholders will not show until it is restored
- [ ] Then submit `sitemap.xml` in Google Search Console and refresh the LinkedIn preview

## Launch checks
- Hard launch plus LinkedIn post target: no later than January 6, 2027 (the site is live and "soft launched" now; the update banner stays until then)
- [ ] Spot-check the live site on your iPhone after the 10/24/26 CSS changes (automated review passed)
- [ ] Sitemap: `sitemap.xml` exists and lists the published pages, including Experience (13 URLs while Ready 3 is hidden; 14 once restored). Submit it in Google Search Console in November, after images and EDIT comments are finished
- [ ] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector

## Later
- [ ] Email forwarding at piercewallar.com (optional; the mailto link works for now)
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Rewrite `README.md` for a general audience (visitors, recruiters, and anyone who finds the repository) instead of as working instructions to me; no due date. Its "Finding things you still need to edit" and Files sections are now out of date (Experience data lives in `data/career.json`; add the `data/` and `scripts/` folders and the career-data workflow)
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied
- [ ] Optional: sync the Experience page bullets (Ready 3, Newmark, Gordian) with the more specific wording on the Resume and CV by editing `data/career.json`; those site versions are still the general drafts; BoomTown was synced 10/29/26
