# Site To-Do
 
## Due soon
- [ ] Finalize the new Resume, CV, and Career Facts (drafted 10/24/26: one-page general Resume, three-page CV, one-page Career Facts; you are making the final manual edits). Then export PDFs, replace `assets/cv/Wallar_Pierce_CV_2025_09.pdf` and `assets/resume/Wallar_Pierce_Resume_2025_09.pdf`, update the two download buttons in `index.html` (file names and `download=` attributes) if the names change, and delete the old files, including the unlinked `.docx` in `assets/cv/` (still reachable by its direct URL) (originally due EOD 10/24/26)
  - [ ] Why the old files must go: the published CV PDF repeats its Professional Summary three times, shows Gordian text under Univar, has a "[Placeholder for BoomTown Home Services]" bullet, and carries file metadata reading "CATHERINE A" / "ctull" (the `.docx` also lists "Bay Area Legal Aid"); neither old PDF has a phone number; both list the MBA as December 2026
  - [ ] After exporting, open each PDF's Document Properties and confirm Title and Author read Pierce Wallar
- [ ] Make the Career Facts sheet the standard everywhere: update LinkedIn to match (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering; Industrial Safety and Geological Engineering degree names; PMP Sep 2022)
- [ ] Decide two wording questions: the site header says "Pierce A. Wallar" while the documents say "Pierce Wallar, PMP"; and the documents say "Newmark" while the Experience and Newmark pages say "Newmark RF"
- [ ] Univar: add one or two bullets (programs run or results) to the Resume, CV, and Experience page. "A" Guttering: confirm the exact company name and the start and end months
- [ ] Confirm the spelled-out Army unit names in the CV (A/23 BEB, B/23 BEB, HHC/299 BEB, HHC/1SFG(A), A/180 CAV, 1220 ENG) and the function phrases (drafted by Claude, not by you)
- [ ] Real images for all ten projects (`assets/images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg`) plus alt text (due 11/1/26)
- [ ] Review every `EDIT:` comment (Ctrl+Shift+F); South Africa and Renal OCT need the most (due 11/1/26)
- [ ] Experience page detail text: review the `EDIT:` comments in `js/experience.js` and refine each role's summary, highlights, and skills (include in the 11/1/26 batch)
- [ ] Experience page: confirm the six Army role descriptions (rewritten 10/24/26 from the CV) and the Green Tree status line before sharing the page widely

## 11/1/26 content checklist (by page)
Built 10/24/26 from a scan of every `EDIT:` comment and image slot in the repo (commit b6ea10b). Work top to bottom; the first two pages need the most. Search for `EDIT:` (Ctrl+Shift+F) to jump to each item, and delete the comment once the item is done.

Image status: 3 of 30 slots hold real images (`army-forecast-1`, `boomtown-1`, `home-server-1`); the other 27 are still the gray "Image placeholder" files. Alt text is still the generic default on all 30 (for example "Home server image 1"), including the three real images, so each needs a real description. Keep each file name and the `.jpg` extension.

### South Africa (`project-south-africa.html`): thinnest draft
- [ ] Images: `south-africa-1.jpg` (top image and Projects-page card), `-2.jpg`, `-3.jpg` (side-by-side pair), plus alt text
- [ ] Describe what GoBuild360 does, the question the team was asked, the timeframe, and your role
- [ ] List the deliverables, the headline recommendation, and the outcome

### Renal OCT (`project-renal-oct.html`)
- [ ] Images: `renal-oct-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Confirm which organization is the client and which is the program partner; correct the technology description if needed
- [ ] Describe your part of the work (the questions or workstreams you owned)
- [ ] List the deliverables (report, deck, financials), the main recommendation, and the client's response

### Portugal (`project-portugal.html`)
- [ ] Images: `portugal-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] One sentence on what bizAPIs does, in your own words, and the main question the client asked
- [ ] Headline findings or recommendation, and how the client responded

### Newmark (`project-newmark.html`)
- [ ] Images: `newmark-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Confirm firm name, dates, and anything the firm prefers not to be described publicly
- [ ] Spell out DCT if you want (for example, data conversion testing) and add any results or client feedback

### Ready 3 (`project-ready3.html`)
- [ ] Images: `ready3-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Describe the consulting scope (client question, team, deliverables), keeping sensitive company and customer details out
- [ ] Add the projects, tools, and results you are comfortable sharing publicly

### Green Tree Risk Group (`project-green-tree.html`)
- [ ] Images: `green-tree-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Confirm how the company is described publicly and its current status (keep consistent with the Experience page status line)

### BoomTown (`project-boomtown.html`)
- [ ] Image `boomtown-1.jpg` is real; replace `boomtown-2.jpg` and `-3.jpg`, then write alt text for all three
- [ ] Add specifics: service lines, crew size, customers served, tools you use

### Army Unit Commodities Forecast (`project-army-forecast.html`)
- [ ] Image `army-forecast-1.jpg` is real (a LOGSTAT dashboard); replace `-2.jpg` and `-3.jpg`, then write alt text for all three
- [ ] Before publishing, confirm the dashboard image shows no unit names, locations, or readiness data that should not be public
- [ ] Describe the inputs, time horizon, how leaders used it, and any measurable results

### American Political History (`project-political-history.html`)
- [ ] Images: `political-history-1.jpg`, `-2.jpg`, `-3.jpg`, plus alt text
- [ ] Add an example: a period covered, a question you tested, or one exhibit you are proud of

### Home Server (`project-home-server.html`)
- [ ] Image `home-server-1.jpg` is real; replace `-2.jpg` and `-3.jpg`, then write alt text for all three
- [ ] Add hardware specs, how it is networked at home, and other services (backups, monitoring)
- [ ] Add what you plan to build next, or something that went wrong and what you learned

### Experience page text (`js/experience.js`)
- [ ] Default selected role (`DEFAULT_ID`, currently `newmark`): keep or change
- [ ] Ready 3: keep general; only what Ready 3 is comfortable having public
- [ ] Newmark: keep client details general; confirm anything Newmark prefers not described
- [ ] Green Tree Risk Group: confirm or reword the status line
- [ ] BoomTown: add service lines, crew size, customers served, tools
- [ ] Gordian: add outcomes, portfolio sizes, or client types you can share
- [ ] U.S. Army: confirm and add specifics to all six role descriptions (19D Cavalry Scout, Engineer Platoon Leader (Guard), Engineer Platoon Leader, Engineer Company Executive Officer, Deputy Group Engineer, Battalion Logistics Officer)
- [ ] "A" Guttering: confirm start and end months (the bar uses January 2009 to May 2016 as placeholders)
- [ ] Univar: add programs you ran or results you can quantify
- [ ] University of Central Oklahoma: add honors, activities, or coursework
- [ ] Missouri S&T: add thesis, project, or coursework highlights
- [ ] OU MBA: add honors, leadership roles, or case competitions

### Wrap-up after the content pass
- [ ] Ctrl+Shift+F for `EDIT:` and confirm only `_project-template.html` still has one
- [ ] Open the Projects page and all ten project pages and confirm no gray "Image placeholder" boxes remain (they are image files, so a text search will not find them)
- [ ] Then submit `sitemap.xml` in Google Search Console and refresh the LinkedIn preview

## After launch (Experience page)
- [X] Add months to the three Army sub-roles (the `segments` entries in `js/experience.js`; the boundaries are placeholders at January 2020 and January 2022) - COMPLETE

## Launch checks
- [ ] Verify the phone number (no phone number appears on any site page, so this applies to the CV and resume only). The new Resume and CV include (405) 830-9772; the old published PDFs do not, so confirm it appears in the exported PDFs
- [ ] Click every link by hand. The 10/24/26 automated audit found no broken internal links, images, or anchors on the published pages; still to check manually: LinkedIn, GitHub, and the Bookshelf Amazon links
- [x] Check every page on a phone, in light and dark mode (10/24/26 automated review of all 16 pages at 320 to 1280 px: no sideways overflow; fixed dim dark-mode headings, the phone scroll container, and homepage side margins)
- [ ] Spot-check the live site on your iPhone after the 10/24/26 CSS changes (automated review passed)
- [ ] Sitemap: `sitemap.xml` exists and lists all 14 published pages, including Experience (confirmed 10/24/26). Submit it in Google Search Console in November, after images and EDIT comments are finished
- [ ] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector

## Later
- [ ] Email forwarding at piercewallar.com (optional; the mailto link works for now)
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Rewrite `README.md` for a general audience (visitors, recruiters, and anyone who finds the repository) instead of as working instructions to me; no due date
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied
- [ ] Optional: sync the Experience page bullets (Ready 3, Newmark, Gordian, BoomTown) with the more specific wording on the Resume and CV; the site versions are still the general drafts

## Done
- [x] Green Tree Risk Group name confirmed for public use
- [x] Ready 3 and Newmark confirmed (limit details of work done)
- [x] Bio live
- [x] HTTPS confirmed
- [x] LinkedIn complete
- [x] Contact page retired
- [x] Open Graph share image and tags
- [x] Custom 404 page
- [x] Lightweight analytics: GoatCounter live on all pages (10/24/26)
- [x] Experience page launched (10/24/26): shared-axis timeline, clickable detail panel, phone layout, dark mode, Experience link in the nav of every page, and listed in `sitemap.xml`
- [x] Internal link audit (10/24/26): no broken links, images, or anchors on the published pages
- [x] CSS polish pass (10/24/26): phone scrolling fixed, lighter red for headings and small red text in dark mode, homepage side margins on phones. Live after the accidental overwrite of `css/styles.css` in commit f55c14b was restored in ddee31e
- [x] Phone and dark-mode review of all pages (10/24/26)
- [x] 11/1/26 content checklist built (above)
- [x] Experience page synced to the new standards (10/24/26): Army now Jan 2014 to Jan 2024 with six roles and units (two Guard, four active duty), "A" Guttering entry added, role titles and the Industrial Safety and Geological Engineering degree names updated, six-shade Army bar
- [x] Resume, CV, and Career Facts drafted (10/24/26); finalization is open above