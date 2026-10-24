# Site To-Do
 
## Due soon
- [ ] CV and resume cleanup, including deleting the old CV/resume files from the repo (due EOD 10/24/26). Note: the old `.docx` in `assets/cv/` is not linked anywhere but is still reachable by its direct URL; the homepage buttons (`index.html`) point to the `_2025_09` PDFs
- [ ] Real images for all ten projects (`assets/images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg`) plus alt text (due 11/1/26)
- [ ] Review every `EDIT:` comment (Ctrl+Shift+F); South Africa and Renal OCT need the most (due 11/1/26)
- [ ] Experience page detail text: review the `EDIT:` comments in `js/experience.js` and refine each role's summary, highlights, and skills (include in the 11/1/26 batch)
- [ ] Experience page: confirm the Army sub-role descriptions (Platoon Leader and Facilities Manager were adapted from the old page) and the Green Tree status line before sharing the page widely

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
- [ ] U.S. Army: confirm and add specifics to all three sub-role descriptions (Platoon Leader, Facilities Manager, Battalion Logistics Officer)
- [ ] U.S. Army: delete the old "replace the months in each segment" `EDIT:` note above `segments` (the months were committed in b6ea10b)
- [ ] Univar: add programs you ran or results you can quantify
- [ ] University of Central Oklahoma: add honors, activities, or coursework
- [ ] Missouri S&T: add thesis, project, or coursework highlights
- [ ] OU MBA: add honors, leadership roles, or case competitions

### Wrap-up after the content pass
- [ ] Ctrl+Shift+F for `EDIT:` and confirm only `_project-template.html` still has one
- [ ] Open the Projects page and all ten project pages and confirm no gray "Image placeholder" boxes remain (they are image files, so a text search will not find them)
- [ ] Then submit `sitemap.xml` in Google Search Console and refresh the LinkedIn preview

## After launch (Experience page)
- [ ] Add months to the three Army sub-roles (the `segments` entries in `js/experience.js`; the boundaries are placeholders at January 2020 and January 2022)

## Launch checks
- [ ] Verify the phone number (no phone number appears on any site page, so this applies to the CV and resume only)
- [ ] Click every link by hand. The 10/24/26 automated audit found no broken internal links, images, or anchors on the published pages; still to check manually: LinkedIn, GitHub, and the Bookshelf Amazon links
- [ ] Check every page on a phone, in light and dark mode (Experience was tested at phone width and in dark mode; the rest still need a pass)
- [ ] Sitemap: `sitemap.xml` exists and lists all 14 published pages, including Experience (confirmed 10/24/26). Submit it in Google Search Console in November, after images and EDIT comments are finished
- [ ] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector

## Later
- [ ] Email forwarding at piercewallar.com (optional; the mailto link works for now)
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Optional polish: on phones, `css/styles.css` line 291 (`html,body{overflow-x:hidden}`) makes the page body scroll instead of the whole page; and in dark mode the site's crimson headings are dim against the dark background (the Experience page already uses a lighter red for its own text)

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