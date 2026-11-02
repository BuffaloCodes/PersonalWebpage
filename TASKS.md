# Site To-Do (last updated 11/2/26, late morning; origin/main 2e59eb6 plus this file and the uncommitted Experience deep dive edits for Groups 2 to 4)

## Critical this week (Mon 11/2 to Sun 11/8/26)
The hard launch target is January 6, 2027, about nine weeks out. The order matters: finish the website content first (item 1), then fix the public documents once (item 2), so the CV and Resume pick up the final wording in a single export. All ten project pages are done except the hidden Ready 3. Everything else below waits.

1. [x] **Experience deep dive: DONE 11/2/26** (commit pending). All entries, the six Army roles, education, PMP, the "500+" Newmark count and the OU honors are applied in `data/career.json` and rebuilt; the checker passes. Summary file: `SESSION-SUMMARY - Experience Deep Dive - 11-02-26.md` in the Claude Project
2. [ ] **One CV and Resume export.** You finished the CV Word edits from the deep dive on 11/2/26. One CV line is still to add: under the OU entry, "Honors: team won a consulting case competition during MBA Prelude week (August 2025)" and "Rainbolt Student Advisor, 2025 to 2026 school year". Check the Resume still says Newmark "500+" and no other Resume change is needed. The 1220 ENG function phrase ("Construction Engineering Leadership") intentionally differs between the CV and the website because of CV line spacing. Then export the PDFs, replace `assets/cv/Wallar_Pierce_CV_2026_10.pdf` (and the Resume PDF in `assets/resume/` if it changed; update `index.html` only if a file name changes), and run `python scripts/check_consistency.py --resume "<path to Resume .docx>" --cv "<path to CV .docx>"`. The result should read PASS
3. [ ] **One review pass on three pages written this week:** `project-green-tree.html`, `project-army-forecast.html` and `project-boomtown.html`. Confirm or correct: Green Tree (removal of the brand claim, the cyber-policy growth 2014 to 2019 analog wording, the public-market-multiples valuation sentence, the "not launched" status); Army forecast (the combat training center is left unnamed, the operations sergeant major appears by role only, "as far as I know it was still in use," and the kanban and "first in its Brigade" lines were removed from the page); BoomTown (the subtitle "where I own strategy, operations, and delivery from end to end," the Scale and Status facts, and "website live February 2025"). If any Green Tree wording changes, do this before item 2 so the CV matches. Already confirmed in the Experience deep dive on 11/2/26: the Green Tree "not launched" status and "website live February 2025" for BoomTown
4. [ ] **If time remains: LinkedIn sync**, after item 2 so the CV wording is final (see Due soon)

## Due soon (after this week)
- [ ] LinkedIn: apply the final CV wording and make the Career Facts sheet the standard (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering Jan 2009 to May 2016; "Newmark" (not Newmark RF); the two Univar bullets; Industrial Safety and Geological Engineering degree names; the Military Geological Engineering graduate certificate; UCO minor in Military Science and Dean's Honor Roll; OU case competition win and Rainbolt Student Advisor role; PMP Sep 2022). The CV Profile now says "engineer officer" and "real estate management consulting"
- [ ] Career Facts: re-review `data/career-facts.md` against the final Resume and CV (generated reference; not yet re-reviewed since 10/26/26)
- [ ] Basic website check (after the content pass): every page, links, meta tags, accessibility basics, and a "what is missing" list, including a short privacy page (the site uses GoatCounter analytics)
- [ ] When the Ready 3 internship ends (estimated December 1, 2026): in `data/career.json` change the Ready 3 `end` from `"present"` to the final month, rebuild, decide whether `DEFAULT_ID` in `js/experience.js` should change from `newmark`, and update the Ready 3 dates on the Resume and CV before the next export
- [ ] Restore Ready 3 when the project is finished (four steps): (1) in `projects.html`, delete the two `HIDDEN-UNTIL-FINISHED` comment lines around the card; (2) in `project-ready3.html`, change the robots meta back to `index, follow`; (3) in `sitemap.xml`, un-comment the Ready 3 line; (4) in `data/career.json`, restore the Ready 3 link (exact text is in that entry's `todo`), then run `python scripts/build_career.py`. Also add the three images (`ready3-1.jpg`, `-2.jpg`, `-3.jpg`) and alt text

## Remaining content by page
Image status (11/2/26): 20 slots hold real images (`army-forecast-1`, `boomtown-1` to `-3`, `green-tree-1`, `-2`, `home-server-1`, `newmark-1` to `-3`, `political-history-1`, `portugal-1` to `-6`, `renal-oct-1`, `-2`, `south-africa-1`). Only `ready3-1` to `-3` are still gray "Image placeholder" files; Ready 3 is hidden, so they do not show on the live site. Alt text is still the generic default on Ready 3 only. Keep each file name and the `.jpg` extension. Finished pages (Renal OCT, Portugal, South Africa, Newmark, BoomTown, Green Tree, Army forecast, Home Server, Political History) need nothing further except the CV and review items above.

### Experience page text (`data/career.json`; edit there, then run `python scripts/build_career.py`)
- [x] Default selected role (`DEFAULT_ID` in `js/experience.js`): keep `newmark` until the Ready 3 internship ends (about December 1, 2026), then revisit (see Due soon)

### Wrap-up after the content pass
- [ ] Ctrl+Shift+F for `EDIT:` and confirm only `_project-template.html`, the `DEFAULT_ID` line in `js/experience.js`, and the two deferred comments in `now.html` still have one (plus `project-ready3.html` until it is finished), and that the only `EDIT:` items left in `data/career.json` are the Ready 3 link (until that page is finished) (1 in total)
- [ ] Open the Projects page and every published project page and confirm no gray "Image placeholder" boxes remain (they are image files, so a text search will not find them); Ready 3 is hidden, so its placeholders will not show until it is restored
- [ ] Then submit `sitemap.xml` in Google Search Console and refresh the LinkedIn preview

## Launch checks
- Hard launch plus LinkedIn post target: no later than January 6, 2027 (the site is live and "soft launched" now)
- [ ] Remove the update banner at launch: in `js/site.js` change `var SHOW_UPDATE_BANNER = true;` to `false` (the styles in `css/styles.css` can stay or be deleted), then commit
- [ ] Spot-check the live site on your iPhone after the 10/24/26 CSS changes (automated review passed)
- [ ] Sitemap: `sitemap.xml` exists and lists the published pages, including Experience. Submit it in Google Search Console in November, after images and EDIT comments are finished
- [ ] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector

## Later
- [ ] A2: finish `now.html` (deferred at your request, 10/27/26). Confirm the two EDIT: comments (this month's learning topics and the book you are reading), remove the `noindex` meta line, add the Now link to the nav of all pages, add `https://piercewallar.com/now.html` to `sitemap.xml`, and set the "Last updated" footers. Update it monthly (Site Sunday)
- [ ] A7 follow-ups (deferred 10/27/26): run the checker with the Word files (critical item 2 covers this once) and try it with a LinkedIn `Positions.csv` export (experimental). `contact.html` was deleted 10/27/26, so that decision is closed
- [ ] A3: follow `A3-Branded-Email-Guide.md` (about 1 hour plus DNS wait) when you have time; do it before printing business cards (A12). Email forwarding at piercewallar.com is part of this
- [ ] Decide whether the structured data (JSON-LD) `worksFor` should add Ready 3 (`works_for_ids` in `data/career.json`)
- [ ] Optional: add a short example to `project-political-history.html` (a period you covered or a question you tested); deferred at your request, and the page is complete without it
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Rewrite `README.md` for a general audience (visitors, recruiters, and anyone who finds the repository) instead of as working instructions to me; no due date. Its "Finding things you still need to edit" and Files sections are out of date (Experience data lives in `data/career.json`; add the `data/` and `scripts/` folders, the career-data workflow and the checker)
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied
