# Site To-Do and Idea Backlog (last updated 11/3/26, afternoon; origin/main 2058c4b plus this file)

This is the single working file for piercewallar.com. It replaces `UPDATES.md` (merged 11/2/26). Sections run from most urgent to least urgent: this week, due soon, content status, launch checks, later, the idea backlog, then reference material. Each item lives in exactly one place: promoting an idea means moving it up a section with its ID, never copying it. Update the date in the title line whenever this file changes.

## Critical this week (Mon 11/2 to Sun 11/8/26)
The hard launch target is January 6, 2027, about nine weeks out. The order matters: finish the review pass (item 1) before the LinkedIn sync (item 2), so LinkedIn picks up the final wording. The Experience deep dive, the November CV and Resume PDFs (live on the homepage, old October files deleted) and the Career Facts refresh are done (11/2/26). All ten project pages are done except the hidden Ready 3. Everything else below waits.

1. [x] **One review pass on three pages (done 11/3/26; Pierce confirmed all wording as is, no page edits, consistency check passes):** `project-green-tree.html`, `project-army-forecast.html` and `project-boomtown.html`. Confirm or correct: Green Tree (removal of the brand claim, the cyber-policy growth 2014 to 2019 analog wording, the public-market-multiples valuation sentence, the "not launched" status); Army forecast (the combat training center is left unnamed, the operations sergeant major appears by role only, "as far as I know it was still in use," and the kanban and "first in its Brigade" lines were removed from the forecast page; the Experience page and CV still say "first in the brigade" on purpose, confirmed 11/2/26); BoomTown (the subtitle "where I own strategy, operations, and delivery from end to end," the Scale and Status facts, and "website live February 2025"). If any Green Tree wording changes, update `data/career.json` and the CV and Resume so they still match. Already confirmed in the Experience deep dive on 11/2/26: the Green Tree "not launched" status and "website live February 2025" for BoomTown
2. [ ] **LinkedIn sync** (deferred to 11/4/26): the first export arrived 11/3/26 but holds only `Profile.csv` (headline, About, website); the full archive with `Positions.csv`, `Education.csv` and `Certifications.csv` is still needed for the experience check (`python scripts/check_consistency.py --linkedin Positions.csv`). The headline ("MBA Candidate | Veteran | Dad") already matches. The About text must be rewritten to match Career Facts: "ten years" (not "over 10"), cavalry scout then engineer officer, 80+ million square feet across 18+ assessments, 4 to 17% funding increases and 8 to 13% wasteful spending (not "5 million dollar infusion" or "double digit"), plus the MBA, Newmark, Green Tree, BoomTown and Ready 3. Pierce answered the open questions 11/3/26: (1) "around the world" is supportable (study abroad, international consulting engagements, and military work and engagements in Asia), so keep it, but say what it refers to if space allows; (2) the $5M infusion and "nearly 900 facilities" stay out; (3) drop "energy" from the roles sentence; (4) leave Ready 3 out of the About text until the internship ends and the page is restored. Then see Due soon for the full list of Experience, Education and Skills edits
3. [x] **Open Graph (OG) card update** (added 11/2/26; built 11/3/26, Post Inspector refresh done 11/3/26): `assets/images/og-image.jpg` (1200 x 630, same file name, so no HTML edits) was rebuilt with an off-white right panel, crimson text and a Stone (`#BEB4A5`) divider. The homepage `<title>` and `og:title` now read "Pierce A. Wallar | MBA Candidate, Army Veteran, Dad", and the `meta description`, `og:description` and `site.webmanifest` description read "Personal site of Pierce Wallar: MBA candidate at the University of Oklahoma and U.S. Army veteran". The JSON-LD `jobTitle` ("Founder") comes from `career.json` and was left as is. Optional: the headshot source is only 900 px square; with a larger original the card could be rebuilt at 2400 x 1260 (the `og:image:width` and `height` tags in 16 pages would then change)
4. [x] **Basic website check** (done 11/3/26): all 13 published pages passed an automated scan of links, anchors, image files, alt text, titles, descriptions, canonical tags, Open Graph and Twitter tags, headings, landmarks, duplicate IDs and sitemap coverage, with no problems found. Pierce also checked external links, color contrast and real-device behavior by hand (all good). Fixes made the same day: added `privacy.html` (GoatCounter, Google Fonts, GitHub Pages hosting, browser storage for the dark-mode choice, Amazon search links, email), linked it from every page footer and from `sitemap.xml`; added a skip-to-content link on every page with a `<main>` (the `.skip-link` rules are at the end of `css/styles.css`, and `<main>` now has `id="main"`); set the footer date to November 2026 on every page. Follow-ups are under Later

## Due soon (after this week)
- [ ] LinkedIn (waiting on the data export; the CV wording and Career Facts are now final): apply the final CV wording and make the Career Facts sheet the standard (official Army title plus function phrase; the six Army roles with units; Guard roles; "A" Guttering Jan 2009 to May 2016; "Newmark" (not Newmark RF); the two Univar bullets; Industrial Safety and Geological Engineering degree names; the Military Geological Engineering graduate certificate; UCO minor in Military Science and Dean's Honor Roll; OU case competition win and Rainbolt Student Advisor role; PMP Sep 2022). The CV Profile now says "ten years of Army service as a cavalry scout and engineer officer" and "real estate management consulting"
- [ ] **Standing task: Career Facts.** Whenever anything career-related changes (an entry, dates, a title, education, a document wording rule), update `data/career.json`, run `python scripts/build_career.py` and `python scripts/check_consistency.py`, then refresh the Career Facts Word file (`Career Facts - 202611 - WALLAR PIERCE.docx`, stored privately outside the repo; rename it with the new yyyymm when the month changes) and re-export the CV and Resume if they are affected
- [ ] When the Ready 3 internship ends (estimated December 1, 2026): in `data/career.json` change the Ready 3 `end` from `"present"` to the final month, rebuild, decide whether `DEFAULT_ID` in `js/experience.js` should change from `newmark`, and update the Ready 3 dates on the Resume, the CV and the Career Facts Word file (`Career Facts - 202611 - WALLAR PIERCE.docx`, stored privately outside the repo) before the next export
- [ ] Restore Ready 3 when the project is finished (four steps): (1) in `projects.html`, delete the two `HIDDEN-UNTIL-FINISHED` comment lines around the card; (2) in `project-ready3.html`, change the robots meta back to `index, follow`; (3) in `sitemap.xml`, un-comment the Ready 3 line; (4) in `data/career.json`, restore the Ready 3 link (exact text is in that entry's `todo`), then run `python scripts/build_career.py`. Also add the three images (`ready3-1.jpg`, `-2.jpg`, `-3.jpg`) and alt text

## Remaining content by page
Image status (11/2/26): 20 slots hold real images (`army-forecast-1`, `boomtown-1` to `-3`, `green-tree-1`, `-2`, `home-server-1`, `newmark-1` to `-3`, `political-history-1`, `portugal-1` to `-6`, `renal-oct-1`, `-2`, `south-africa-1`). Only `ready3-1` to `-3` are still gray "Image placeholder" files; Ready 3 is hidden, so they do not show on the live site. Alt text is still the generic default on Ready 3 only. Keep each file name and the `.jpg` extension. Finished pages (Renal OCT, Portugal, South Africa, Newmark, BoomTown, Green Tree, Army forecast, Home Server, Political History) need nothing further except the CV and review items above.

### Experience page text (`data/career.json`; edit there, then run `python scripts/build_career.py`)
- [x] Default selected role (`DEFAULT_ID` in `js/experience.js`): keep `newmark` until the Ready 3 internship ends (about December 1, 2026), then revisit (see Due soon)

### Wrap-up after the content pass
- [ ] Ctrl+Shift+F for `EDIT:` and confirm only `_project-template.html`, the `DEFAULT_ID` line in `js/experience.js`, and the two deferred comments in `now.html` still have one (plus `project-ready3.html` until it is finished), and that the only `EDIT:` items left in `data/career.json` are the Ready 3 link (until that page is finished) (1 in total)
- [ ] Open the Projects page and every published project page and confirm no gray "Image placeholder" boxes remain (they are image files, so a text search will not find them); Ready 3 is hidden, so its placeholders will not show until it is restored
- [x] Then submit `sitemap.xml` in Google Search Console and refresh the LinkedIn preview (both done 11/3/26)

## Launch checks
- Hard launch plus LinkedIn post target: no later than January 6, 2027 (the site is live and "soft launched" now)
- [ ] Remove the update banner at launch: in `js/site.js` change `var SHOW_UPDATE_BANNER = true;` to `false` (the styles in `css/styles.css` can stay or be deleted), then commit
- [x] Spot-check the live site on your iPhone after the 10/24/26 CSS changes (automated review passed; Pierce confirmed real-device behavior, color contrast and external links 11/3/26)
- [x] Sitemap: `sitemap.xml` lists the published pages, including Experience and Privacy. Submitted in Google Search Console 11/3/26 (property verified with the meta tag in `index.html`; leave that tag in place)
- [x] After pushing the Open Graph tags, refresh LinkedIn's cached preview with Post Inspector (done 11/3/26 after the new card and homepage title and description)

## Later
- [ ] Privacy page upkeep (added 11/3/26): update `privacy.html` and its date whenever a service that touches visitor data is added or removed (a new analytics tool, embedded video, a form, Amazon Associates links, or a change of host). If Amazon Associates is ever added, also add `rel="sponsored"` and a disclosure sentence on the Bookshelf (see the comment in `bookshelf.html`)
- [ ] Optional sitemap polish (found 11/3/26): add `lastmod` dates to `sitemap.xml` entries. Optional; Google does not require them
- [ ] Optional accessibility polish (found 11/3/26): links turn bold on hover and focus (`a:hover,a:focus` in `css/styles.css`), which can shift text slightly. Also, while the update banner is showing, its Dismiss button is the first keyboard stop and the skip link is second; this resolves itself when the banner is removed at launch
- [ ] A2: finish `now.html` (deferred at your request, 10/27/26). Confirm the two EDIT: comments (this month's learning topics and the book you are reading), remove the `noindex` meta line, add the Now link to the nav of all pages, add `https://piercewallar.com/now.html` to `sitemap.xml`, and set the "Last updated" footers. Update it monthly (Site Sunday). The page is three short paragraphs (what I am working on, learning and reading this month) and signals activity to recruiters who revisit
- [ ] A7 follow-ups (deferred 10/27/26): try the checker with a LinkedIn `Positions.csv` export (experimental; the Word-file check was skipped 11/2/26 because the PDF check already passes). `contact.html` was deleted 10/27/26, so that decision is closed. The script itself and its intentional exceptions are described under Reference (Built tooling)
- [ ] A3: follow `A3-Branded-Email-Guide.md` (about 1 hour plus DNS wait) when you have time; do it before printing business cards (A12). Email forwarding at piercewallar.com is part of this. The setup is Cloudflare Email Routing (or the registrar's forwarding) to Gmail plus Gmail "Send mail as"; afterwards update the CV, Resume, LinkedIn, site and cards
- [ ] Decide whether the structured data (JSON-LD) `worksFor` should add Ready 3 (`works_for_ids` in `data/career.json`)
- [ ] Optional: add a short example to `project-political-history.html` (a period you covered or a question you tested); deferred at your request, and the page is complete without it
- [ ] Amazon Associates for Bookshelf links (deferred; likely a lot of work)
- [x] Rewrite `README.md` for a general audience (done 11/3/26): the new README covers what the site is, the pages, how it is built (including the career data workflow, the checker, privacy and accessibility choices), the repository layout, running it locally, publishing, reuse and contact. The old README's MIT claim was removed 11/3/26 (there was no `LICENSE` file); the README now states that nothing is licensed for reuse
- [ ] Bookshelf: leave as is for now; you have an idea to run down later. The 10/24/26 GoodReads review (102 rows against 44 shelved books) found about ten candidate additions; none were applied

## Idea backlog (not scheduled; promote an item to Due soon or Later when it gets a date)

Two lists (A Professional, B Personal & Technical), each ordered easiest to hardest, then Candidates and Parked.
Status key: IDEA | PLANNED | IN PROGRESS | DONE | DROPPED | FUTURE (wanted, but later) | CONSIDERING.
**IDs are permanent from this version forward.** New items get the next number; the list order shows difficulty, so numbers will not always be in sequence.
A1 and A6 (done) and A7 (v1 built) are under Reference; the open A2, A3 and A7 follow-ups are under Later.

### A. PROFESSIONAL (built for recruiters and consulting audiences)

#### A4. Press and bio kit | Easy (an evening) | IDEA
- 50, 100 and 200 word bios, a headshot download, a speaker-intro paragraph and a short "how to introduce me" blurb.
- Draft from the Career Facts so the wording matches. The 50-word bio doubles as the video script seed (A17).

#### A5. Recommender kit | Easy (an evening) | IDEA
- Request email template, a short guide for the recommender, and a consent checklist (name display, title, edits allowed).
- Supports A10.

#### A8. One-page PDF per project | Moderate (a weekend for the first, then repeatable) | IDEA
- A single-page leave-behind per project: Situation, Approach, Result, What I would do differently.
- Link each PDF from its project page. Keep sensitive details out.
- Pairs with A15 (attach the matching PDF to a tailored page) and A14 (automation).

#### A9. Recruiter "At a Glance" page | Moderate (a weekend) | IDEA
- Web version of the Career Facts one-pager: roles, dates, credentials, education, downloads.
- Best generated from A6 so it never drifts from the resume.

#### A10. Recommendations section | Moderate (the writing is quick; collecting quotes takes time) | IDEA
- Short, approved quotes from supervisors or mentors; first name and title only unless they consent otherwise.
- Use the A5 kit for requests.

#### A11. Army-to-consulting translation guide | Moderate (writing heavy) | IDEA
- A page mapping each Army role to consulting competencies (for example, Battalion Logistics Officer to operations and supply chain; Deputy Group Engineer to program management).
- Useful to other veterans, good for search, and gives recruiters a translation layer. Build from the A6 wording.

#### A12. Physical business cards (NFC + QR) | Moderate (design polish plus print and tag logistics) | PLANNED when ready
Goal: handout cards that carry Pierce's "whole human" brand and link to the site.
- Design: concept already built; needs a polish pass (hierarchy, spacing, print-safe colors, OU palette consistency).
- **Landing page, not the homepage:** cards point to a small page such as `piercewallar.com/c/` (a real page: short intro, resume, LinkedIn, booking or email, optional vCard (.vcf) contact download). Use a variant per batch or event (`/c/ou`, `/c/networking`) so GoatCounter shows which batch is working. Use your own domain so the link never breaks.
- **NFC:** NTAG213 or NTAG215 tags are about $1 or less each; they are written once with a free phone app (for example NFC Tools) and can be locked after writing. Modern iPhones and most Android phones read them without an app.
- **QR as backup:** print a QR on the card too (not every phone or situation supports a tap). Keep it at least about 0.8 inch square and test with several phones on a printed proof before ordering a full run.
- **Format options:** (1) standard printed card with an NFC sticker or inlay on the back, or (2) an NFC-embedded card from a specialty printer. Compare quotes and a sample before ordering in bulk. Order a small first run of 50 to 100.
- Specs to confirm with the printer: 3.5 x 2 in, 300 DPI, 0.125 in bleed, matte or uncoated stock for writing notes on the back.
- Checklist before printing: A3 email live, phone number verified, URL tested, `/c/` page live, card text proofread against Career Facts.

#### A13. Monthly one-slide teardown | Moderate to start, then about 3 to 4 hours per month | IDEA
- One 16:9 slide per month analyzing a company, industry or trend (for example, AI liability insurance). Answer-first headline, three supporting points, "so what," sources in the footer.
- Published as an image plus PDF on a `/teardowns/` page. Builds a visible body of consulting-style work over time.
- Rules: cite sources, double-check every number, add "personal view" wording, and avoid anything touching an employer, client or confidential material.
- Keep a running topic pool in a notes file so the monthly block starts with a topic, not a blank page.

#### A14. Print stylesheet and automated PDFs | Intermediate (a weekend) | IDEA
- `print.css` so any page prints cleanly.
- A GitHub Action (see B4) renders project PDFs with headless Chromium whenever a project page changes.
- Depends on A8 and B4.

#### A15. Tailored recruiter pages | Intermediate (a few weekends) | IDEA
Unlisted, noindex pages at `/for/<slug>` with a customized intro, the three most relevant projects and a tracked path.
- Use cases:
  1. A link in the application email or cover letter ("I built a short page for your team").
  2. A QR code or card link at a career fair or info session (ties to A12).
  3. A follow-up leave-behind after a coffee chat or networking call.
  4. A thank-you note after a case interview, pointing to the most relevant project.
  5. A LinkedIn message to an alumnus at the firm.
- Page contents: personalized headline, 3 relevant projects, a short "why this firm" paragraph, matching one-page PDF (A8), resume link, booking link.
- Tracking: GoatCounter records per-path hits, so each page shows up as its own row. It shows counts, times and referrers, not names.
- Build: one HTML template plus a `firms.json`, rendered by a local Python script.
- Cautions: use `noindex` (do not list slugs in robots.txt, which would publish them); keep them out of sitemap.xml; assume the firm will read it; keep it subtle.

#### A16. Documents generated from career.json | Advanced | CONSIDERING (needs a decision)
What it is: a script fills a Word template from `career.json` and produces the resume and CV .docx files, then converts them to PDF. One edit to a date or bullet would flow into every document.
- How it works: the Word files become templates with placeholders (a tool such as docxtpl or docx-js can fill them); LibreOffice converts the result to PDF. Variants (a general resume and a consulting-flavored one) become different selections from the same data.
- Upside: no copy-paste drift, fast variants per audience, PDF metadata set correctly every time.
- Downsides: a one-page resume still needs manual fit-checking; hand-tuned wording and layout are harder to template; real build effort for documents you update only a few times a year.
- Honest take: A6 plus A7 delivers most of the benefit at a fraction of the effort. Revisit A16 after A6 and A7 have been running for a few months; if document edits are still frequent, build it.

#### A17. 60-second video bio | Large | **FUTURE (needs a logistics plan)** | IDEA
Placement: About page and LinkedIn Featured section. Build after A4 (bios) and the career facts are final.
Logistics plan (about 6 to 8 weeks in small blocks):
1. **Script (week 1):** about 150 words; open with the whole-human hook, one proof point, one invitation. Start from the A4 50-word bio. Read it aloud and time it.
2. **Plan (week 2):** shot list, wardrobe, location, background. Decide whether to feature personal facets (for example, an Oklahoma setting, a bookshelf).
3. **Equipment (week 2):** phone on a tripod, a clip-on microphone (audio matters more than video), soft window light or one inexpensive light, a teleprompter app or cue notes.
4. **Record (week 3):** several takes in one session; record a clean 10 seconds of room tone.
5. **Edit (weeks 4 to 5):** free or low-cost editor; trim, level audio, add burned-in captions.
6. **Accessibility (week 5):** a caption file (.srt) and a transcript on the page.
7. **Hosting (week 6):** choose between a YouTube unlisted video embedded with the privacy-enhanced domain, or a self-hosted compressed MP4 (individual files should stay well under GitHub's 100 MB file limit; keep the repo light). Add a poster image and lazy-load so the page stays fast.
8. **Publish and test (weeks 6 to 7):** embed, test on phone and slow connection, add to LinkedIn Featured.
9. **Refresh:** re-record or re-edit once a year or after a major role change.
- Dependencies: A4 bios, finalized career facts, a quiet recording block, and a decision on whether to feature family or personal settings.

---

### B. PERSONAL & TECHNICAL

#### B1. "Books behind this project" | Easy to moderate (an evening or two) | IDEA
- Each project page gets a small "Books behind this" block linking titles from the bookshelf that shaped the work.
- The bookshelf itself stays as is for now; this only adds links into it.
- Makes the bookshelf a conversation topic instead of a standalone page.

#### B2. Duty-station and career map | Moderate (a weekend) | IDEA
- Interactive SVG or Leaflet map: Fort Carson, Joint Base Lewis-McChord, Houston, Denver, Oklahoma City, Norman.
- Each pin links to its Experience entry (hash deep links already exist in js/experience.js).
- Data can come from A6 so the pins and dates always match the resume.

#### B3. Personal layers on the map | Moderate (a weekend, after B2) | IDEA
- Toggle layers: Professional, Education, Personal travel, Golf courses.
- Purpose: coffee-chat talking points; each pin carries a one-line "ask me about" hook.
- Privacy rules: city or landmark level only, no home address, and show trips after the fact rather than in real time.
- Photos optional and only ones you are comfortable having public.

#### B4. GitHub Actions quality gate | Intermediate (2 to 4 hours, plus tuning) | IDEA
- A workflow file at `.github/workflows/site-checks.yml` that runs on every push and pull request.
- Checks: broken-link scan (lychee), HTML validation, Lighthouse (performance, accessibility, SEO), sitemap.xml regeneration check.
- Custom guard: fail if css/styles.css is suspiciously small or missing its signature rules (would have caught the experience.css overwrite on 10-24-26).
- Outcome: a red or green check on each commit, with an email on failure.
- Limits: with Pages deploying from the branch, a bad push still goes live and the check only warns. To block a bad push, switch Pages to deploy via Actions so failing checks stop the deploy.
- Free for public repos. Expect some tuning (ignore lists for flaky external links such as Amazon).
- Workflow: Claude drafts the YAML; you add it through VS Code and GitHub Desktop.

#### B5. Personal data dashboard | Advanced (a weekend per data source) | IDEA
- A scheduled GitHub Action (cron) runs a Python script, writes `data/*.json`, and the site renders charts with plain SVG or JS.
- Example sources:
  - Reading: Goodreads CSV or shelf RSS (the public API was discontinued; verify the feed before relying on it). Charts: books per year, genre mix, pages read.
  - Golf: a simple CSV or published Google Sheet of rounds; scoring trend, courses played.
  - Fitness: Strava API (OAuth) or an Apple Health export; weekly volume.
  - Gaming: public Old School RuneScape hiscores endpoint; skill progress over time.
  - Home server: Plex library counts or uptime from the server's API; could feed the Home Server project page.
- Cautions: the repo is public, so only public-safe data. Scheduled commits can collide with your live edits; confine them to `data/` and pull before you edit.
- A14 and B4 both use GitHub Actions, so set up the workflows folder once.

#### B6. Year-in-review page | Advanced (after B5 has a few months of data) | IDEA
- Auto-generated each December from the dashboard data: books read, rounds played, miles, milestones.
- Doubles as a personal archive and an easy source for the next /now update.

---

### C. CANDIDATES (still awaiting a decision)
1. QR-coded resume: small QR in the resume footer pointing to a tagged URL (partly covered by A12; decide whether the resume also needs one).
2. Weekly visit digest: an Action reads the GoatCounter API and emails or commits a summary of /for/ page visits, downloads and referrers.
3. Colophon page: how the site is built, accessibility approach, Lighthouse scores, repo link.
4. Per-page social cards: script-generated OG images with each page's title on the brand template.
5. Accessibility audit and statement: keyboard, contrast and screen-reader pass with a short published statement.
6. Network update email: a short monthly or quarterly note to contacts, drawn from the /now page, through a free newsletter tool.
7. Theme filter on the Experience timeline: tag roles (operations, construction, risk, entrepreneurship) and filter by theme; reuses A6 data.
8. Army skills translator: an interactive version of A11 (pick an Army role, see consulting competencies).
9. Outreach tracker: a private sheet of firms, contacts and follow-up dates, with /for/ page-hit counts pulled in.
10. Self-hosted GoatCounter at stats.piercewallar.com on the home server.

### D. PARKED (suggested 10-26-26, not selected)
- GoatCounter goals and public stats page
- Contact page with form or booking link (`contact.html` was deleted 10/27/26)
- Bookshelf v2 generator (bookshelf stays as is for now)
- Writing section with RSS
- Interactive calculators (facilities condition index, unit economics, risk matrix)
- Home-lab status page (Uptime Kuma behind Cloudflare Tunnel)
- "Ask Pierce" assistant (wait until Career Facts are final)
- Self-hosted deployment with staging

---

## Reference

### Guiding principles
- **Whole human, recruiter first.** The site shows several facets (consultant, veteran, builder, dad, reader, traveler). Recruiters should reach the professional story within one click; the personal facets add depth and conversation hooks.
- Test for every addition: does it show a real facet, is it accurate, and can I maintain it?
- Rules: no client names, no LogStat or other sensitive screenshots, no private notes on public pages, no home address or real-time location, nothing that conflicts with employer or internship confidentiality.
- Family: decide the line in advance. Suggested default: no children's names, faces or identifying details on the public site. (Pierce to decide.)
- **Decision (10-26-26):** no client names anywhere, on the site or in documents. Project pages describe organizations generically (for example "a Portugal-based technology company"). `banned_strings` in `career.json` guards the generated outputs; A7 should also scan the HTML pages for them.

### Built tooling and shipped items
- **A1 Structured data and icons (10-26-26):** Person and WebSite JSON-LD (generated from `career.json` into `index.html` between the `career-jsonld` markers), icons, manifest, tags on 16 pages. Validated 10-26-26 (validator.schema.org and Google Rich Results Test: no errors). `worksFor` lists BoomTown only (`works_for_ids` in `career.json`); add `ready3` there if wanted.
- **A6 Career data single source of truth, v1 (10-26-26):** `data/career.json` generates `js/experience-data.js`, `data/career-facts.md`, `data/jsonld-person.html` and the JSON-LD block in `index.html` via `python scripts/build_career.py` (standard library only). Edit workflow: change `career.json`, run the script, commit the outputs; never hand-edit `js/experience-data.js`. Conventions live in the file: official Army duty title first, plain-English phrase after " | ", "Mon YYYY" dates, no client names, no GPAs. Not built yet: the At a Glance page (A9), the document and Positions.csv comparisons (A7), and generated resume or CV text (A16, still CONSIDERING).

---

#### A7. Consistency check script (v1 built 10-26-26; follow-ups under Later)
- A local script compares `career.json` against: resume and CV text (extracted from the .docx or PDF), the site's Experience data, and LinkedIn's Positions.csv (from LinkedIn's "Get a copy of your data" export).
- Flags mismatched dates, titles and employers, plus banned strings (also across the site's HTML pages) (client names, "Sept", GPAs, "[Placeholder", leftover metadata names).
- Output: a one-page pass/fail report. Run it at each quarterly review and before sending any application batch.
- Depends on A6 (done). `career.json` already holds the `banned_strings` list, the conventions and the `docs` flags (which entries belong on the resume, CV and site) that this script should read. Note the one-page Resume currently omits Univar by design (`docs.resume` is false for it). The final Resume and CV (10-26-26, commit 4fd20c9) are the first text sources to check against; keep the final `.docx` files in a private folder, not in the public repo. Known drift already fixed by hand on 10-26-26: the Univar summary, the Green Tree place and the South Africa page text.
- **v1 built 10-26-26:** `scripts/check_consistency.py` checks the site pages (banned text, no phone number, email links, open EDIT: count), that the generated files match a fresh build, the Resume and CV (`.docx` given on the command line, or the published PDFs when `pdftotext` and `pdfinfo` are installed: header, contact, entries, dates, exclusions, banned text, file properties), and optionally LinkedIn's `Positions.csv` (experimental). First run found: the "A" Guttering date override, PMP flagged for the Resume though it is not listed there, and a placeholder email on the retired `contact.html`. Next: the LinkedIn export check and a quarterly reminder (see the A7 follow-ups under Later; the `contact.html` question is closed).

### Decisions carried over from the old log
- Document name form "Pierce A. Wallar, PMP" (the site nav stays "Pierce A. Wallar"); "Newmark" everywhere; "A" Guttering Jan 2009 to May 2016 (decided 10-26-26).
- Gordian sector list: the CV and the Experience page use the fuller list; the one-page Resume keeps the shorter list for space, so A7 should not flag that difference.

### Maintenance rhythm (keeping the site from going stale)

**Two modes.** Effort should follow purpose.
- **Recruiting mode** (now through landing a full-time role, roughly spring 2027): about 7 hours per month.
- **Steady mode** (after you accept a role): about 3 to 4 hours per month. Drop the weekly check to 15 minutes and the teardown to every other month.

**Fixed calendar blocks (suggested; adjust to the real schedule):**
| Cadence | Block | Tasks |
|---|---|---|
| Weekly | 30 min, same slot each week (for example Sunday evening) | Open GoatCounter (downloads, /for/ page hits, referrers); follow up on any firm whose page was opened; confirm the Actions check (B4, once built) is green; drop one note into the running capture file (a win, a photo, a book finished, a topic idea). |
| Monthly | "Site Sunday," first Sunday, 2.5 to 3 hours | Update /now (30 min); write and publish the one-slide teardown (about 2 hours); update the bookshelf if books were finished (15 min); send the network update if built; scan analytics for the month. |
| Quarterly | Half day (about 4 hours) in Jan, Apr, Jul, Oct | Update `career.json` and run `python scripts/build_career.py`; run the consistency check (A7) across resume, CV, site and LinkedIn; export fresh PDFs and replace old files; refresh one project page (new image, result or lessons learned); run the link and Lighthouse check; prune stale /for/ pages; check the "Last updated" footer; review recommendation quotes. |
| Annually | One weekend in December | Year-in-review (B6); check domain auto-renew and DNS; accessibility pass; bump GitHub Action versions; reorder or reprint cards if the inventory is low; review the video bio for freshness; archive the year's teardowns; reset the yearly goals in this file. |

**Event triggers (do these within a week):** new role or title, certification, graduation, a finished project, a new publication, a move, or a change of contact details.

**Anti-stale rules:**
1. At least one visible change every month (the /now update or a teardown).
2. Date everything that can age (/now, teardowns, "Last updated").
3. Automate anything repeatable (B4, A6, A7) so manual time goes to content.
4. Delete or archive rather than leave stale pages up.
5. Never add something you cannot maintain; use the Candidates list as a holding pen.
6. Protect the capture file: ten minutes of weekly notes makes Site Sunday easy.

**Suggested rollout order after launch:** A6 (done), A1 (done), A7 (v1 done), A2 to A5, A12 (cards), A2 and A13 (start the monthly habit), then B2, B3, B4, and the larger items (A15, A16, A17, B5) one at a time.

---
