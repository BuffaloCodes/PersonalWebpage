# Site To-Do (last updated 11/2/26, morning; origin/main 90266d5 plus this file)

## Critical this week (Mon 11/2 to Sun 11/8/26)
The hard launch target is January 6, 2027, about nine weeks out. The order matters: finish the website content first (items 1 and 2), then fix the public documents once (item 3), so the CV and Resume pick up the final wording in a single export. Everything else below waits.

1. [ ] **Finish the project deep dive: Home Server and Political History.** Neither page has photos or media to show, so Claude designs one original hero image for each (no existing artwork, logos or portraits). For Home Server, compare Claude's mock-up with the current free Pexels image (`home-server-1.jpg`) and keep whichever you prefer. For each page: Claude designs the hero and writes the alt text, you trim the page to one image (delete the `-2.jpg` and `-3.jpg` slots and files), then run `python scripts/build_career.py` and `python scripts/check_consistency.py`. Use one "PROJECT EDIT" chat per page, or one combined chat. The result: no gray placeholder boxes on any published page (Ready 3 is hidden and not part of this)
2. [ ] **Experience deep dive** (own session, same method as the project chats): review the 9 `EDIT:` items in `data/career.json`, add detail to each role, and confirm the six Army role descriptions and the Green Tree status line. Much of the detail now comes straight from the finished project pages (Army forecast, Newmark, Green Tree, BoomTown and the others), so this should go faster than the project chats did. The Battalion Logistics Officer entry can draw on the Army forecast facts. Then run `python scripts/build_career.py` and `python scripts/check_consistency.py`
3. [ ] **One CV and Resume export, after items 1 and 2.** In the CV Word file: (a) replace the BoomTown bullets with the wording now on the site (the old "price against real costs, manage cash flow" bullet no longer matches); (b) update the South Africa "Key project" bullet (wording is in `data/career.json`: five-person team, August 2025 to January 2026, screened international markets, financial model with upside and downside scenarios, sequenced market-entry plan); (c) Green Tree: change "more than ten interviews" to "more than 80 interviews over 16 weeks" and remove the old market-sizing and brand bullet (the current wording is in `data/career.json`); (d) in both the CV and the Resume, check Newmark says 552 entities (older drafts said "500+" or "roughly 550"); (e) apply any role wording that changed in the Experience deep dive. Then export the PDFs, replace `assets/cv/Wallar_Pierce_CV_2026_10.pdf` (and the Resume PDF in `assets/resume/` if it changed; update `index.html` only if a file name changes), and run `python scripts/check_consistency.py --resume "<path to Resume .docx>" --cv "<path to CV .docx>"`. The result should read PASS
4. [ ] **One review pass on three pages written this week:** `project-green-tree.html`, `project-army-forecast.html` and `project-boomtown.html`. Confirm or correct: Green Tree (removal of the brand claim, the cyber-policy growth 2014 to 2019 analog wording, the public-market-multiples valuation sentence, the "not launched" status); Army forecast (the combat training center is left unnamed, the operations sergeant major appears by role only, "as far as I know it was still in use," and the kanban and "first in its Brigade" lines were removed from the page); BoomTown (the subtitle "where I own strategy, operations, and delivery from end to end," the Scale and Status facts, and "website live February 2025"). If any Green Tree wording changes, do this before item 3 so the CV matches
5. [ ] **If time remains: LinkedIn sync**, after item 3 so the CV wording is final (see Due soon)

## Due soon (after this week)
- [ ] LinkedIn: apply the final CV wording and make the Career Facts sheet the standard (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering Jan 2009 to May 2016; "Newmark" (not Newmark RF); the two Univar bullets; Industrial Safety and Geological Engineering degree names; PMP Sep 2022). The CV Profile now says "engineer officer" and "real estate management consulting"
- [ ] Career Facts: re-review `data/career-facts.md` against the final Resume and CV (generated reference; not yet re-reviewed since 10/26/26)
- [ ] Basic website check (after the content pass): every page, links, meta tags, accessibility basics, and a "what is missing" list, including a short privacy page (the site uses GoatCounter analytics)
- [ ] Restore Ready 3 when the project is finished (four steps): (1) in `projects.html`, delete the two `HIDDEN-UNTIL-FINISHED` comment lines around the card; (2) in `project-ready3.html`, change the robots meta back to `index, follow`; (3) in `sitemap.xml`, un-comment the Ready 3 line; (4) in `data/career.json`, restore the Ready 3 link (exact text is in that entry's `todo`), then run `python scripts/build_career.py`. Also add the three images (`ready3-1.jpg`, `-2.jpg`, `-3.jpg`) and alt text

## Remaining content by page
Image status (11/2/26): 19 slots hold real images (`army-forecast-1`, `boomtown-1` to `-3`, `green-tree-1`, `-2`, `home-server-1`, `newmark-1` to `-3`, `portugal-1` to `-6`, `renal-oct-1`, `-2`, `south-africa-1`). Eight are still gray "Image placeholder" files: `home-server-2`/`-3`, `political-history-1` to `-3` and `ready3-1` to `-3`. Home Server and Political History are being trimmed to one hero image each (critical item 1), which leaves only the hidden Ready 3 placeholders. Alt text is still the generic default on Home Server (including the real `home-server-1`), Political History and Ready 3. Keep each file name and the `.jpg` extension. Finished pages (Renal OCT, Portugal, South Africa, Newmark, BoomTown, Green Tree, Army forecast) need nothing further except the CV and review items above.

### American Political History (`project-political-history.html`)
- [ ] Hero image: Claude designs one original image, writes the alt text, and the page is trimmed to one image (critical item 1)
- [ ] Add an example: a period covered, a question you tested, or one exhibit you are proud of (deferred at your request, 10/26/26)

### Home Server (`project-home-server.html`)
- [ ] Hero image: compare Claude's mock-up with the current Pexels `home-server-1.jpg`, keep one, write the alt text, and trim the page to one image (critical item 1)
- [ ] Add hardware specs, how it is networked at home, and other services (backups, monitoring) (deferred at your request, 10/26/26)
- [ ] Add what you plan to build next, or something that went wrong and what you learned (deferred at your request, 10/26/26)

### Experience page text (`data/career.json`; edit there, then run `python scripts/build_career.py`)
- [ ] Default selected role (`DEFAULT_ID` in `js/experience.js`, currently `newmark`): keep or change
- [ ] U.S. Army: confirm and add specifics to all six role descriptions (19D Cavalry Scout, Engineer Platoon Leader (Guard), Engineer Platoon Leader, Engineer Company Executive Officer, Deputy Group Engineer, Battalion Logistics Officer)
- [ ] University of Central Oklahoma: add honors or activities (deferred at your request, 10/26/26)
- [ ] OU MBA: add honors, leadership roles, or case competitions (deferred at your request, 10/26/26)

### Wrap-up after the content pass
- [ ] Ctrl+Shift+F for `EDIT:` and confirm only `_project-template.html`, the `DEFAULT_ID` line in `js/experience.js`, the two deferred comments in `now.html`, and the deferred detail comments in `project-home-server.html` and `project-political-history.html` (invisible to visitors) still have one, and that no `EDIT:` items remain in `data/career.json`
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
- [ ] A7 follow-ups (deferred 10/27/26): run the checker with the Word files (item 1 above covers this once) and try it with a LinkedIn `Positions.csv` export (experimental). `contact.html` was deleted 10/27/26, so that decision is closed
- [ ] A3: follow `A3-Branded-Email-Guide.md` (about 1 hour plus DNS wait) when you have time; do it before printing business cards (A12). Email forwarding at piercewallar.com is part of this
- [ ] Decide whether the structured data (JSON-LD) `worksFor` should add Ready 3 (`works_for_ids` in `data/career.json`)
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [ ] Rewrite `README.md` for a general audience (visitors, recruiters, and anyone who finds the repository) instead of as working instructions to me; no due date. Its "Finding things you still need to edit" and Files sections are out of date (Experience data lives in `data/career.json`; add the `data/` and `scripts/` folders, the career-data workflow and the checker)
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied
- [ ] Optional: sync the Experience page bullets (Ready 3, Newmark, Gordian) with the more specific wording on the Resume and CV by editing `data/career.json`; those site versions are still the general drafts
