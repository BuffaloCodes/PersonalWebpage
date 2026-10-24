# Site To-Do
 
## Due soon
- [ ] CV and resume cleanup, including deleting the old CV/resume files from the repo (due EOD 10/24/26). Note: the old `.docx` in `assets/cv/` is not linked anywhere but is still reachable by its direct URL; the homepage buttons (`index.html`) point to the `_2025_09` PDFs
- [ ] Real images for all ten projects (`assets/images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg`) plus alt text (due 11/1/26)
- [ ] Review every `EDIT:` comment (Ctrl+Shift+F); South Africa and Renal OCT need the most (due 11/1/26)
- [ ] Experience page detail text: review the `EDIT:` comments in `js/experience.js` and refine each role's summary, highlights, and skills (include in the 11/1/26 batch)
- [ ] Experience page: confirm the Army sub-role descriptions (Platoon Leader and Facilities Manager were adapted from the old page) and the Green Tree status line before sharing the page widely

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