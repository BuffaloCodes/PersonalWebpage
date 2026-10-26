# UPDATES.md: piercewallar.com Idea Backlog

Running idea lists for after launch. Two lists (Professional, Personal & Technical), each ordered easiest to hardest, plus Candidates, Parked, a Maintenance Rhythm and a log.
Created 10-26-26. Last updated 10-26-26 (completed items removed; A7 is next). Status key: IDEA | PLANNED | IN PROGRESS | DONE | DROPPED | FUTURE (wanted, but later) | CONSIDERING.
**IDs are permanent from this version forward.** New items get the next number; the list order shows difficulty, so numbers will not always be in sequence.

## GUIDING PRINCIPLES
- **Whole human, recruiter first.** The site shows several facets (consultant, veteran, builder, dad, reader, traveler). Recruiters should reach the professional story within one click; the personal facets add depth and conversation hooks.
- Test for every addition: does it show a real facet, is it accurate, and can I maintain it?
- Rules: no client names, no LogStat or other sensitive screenshots, no private notes on public pages, no home address or real-time location, nothing that conflicts with employer or internship confidentiality.
- Family: decide the line in advance. Suggested default: no children's names, faces or identifying details on the public site. (Pierce to decide.)
- **Decision (10-26-26):** no client names anywhere, on the site or in documents. Project pages describe organizations generically (for example "a Portugal-based technology company"). `banned_strings` in `career.json` guards the generated outputs; A7 should also scan the HTML pages for them.

## PRIORITY QUEUE
1. **A7 Consistency check script.** The companion to A6; catches drift before a recruiter does. **Next** (Resume and CV are final and live as of 10-26-26).
2. Easy wins A2 to A5, in any order alongside the above.
3. **A12 Physical business cards**, timed to the next networking event or recruiting deadline.

---

## DONE (kept short; details are in the git history and the log)
- **A1 Structured data and icons (10-26-26):** Person and WebSite JSON-LD (generated from `career.json` into `index.html` between the `career-jsonld` markers), icons, manifest, tags on 16 pages. Still to do: validate at validator.schema.org. `worksFor` lists BoomTown only (`works_for_ids` in `career.json`); add `ready3` there if wanted.
- **A6 Career data single source of truth, v1 (10-26-26):** `data/career.json` generates `js/experience-data.js`, `data/career-facts.md`, `data/jsonld-person.html` and the JSON-LD block in `index.html` via `python scripts/build_career.py` (standard library only). Edit workflow: change `career.json`, run the script, commit the outputs; never hand-edit `js/experience-data.js`. Conventions live in the file: official Army duty title first, plain-English phrase after " | ", "Mon YYYY" dates, no client names, no GPAs. Not built yet: the At a Glance page (A9), the document and Positions.csv comparisons (A7), and generated resume or CV text (A16, still CONSIDERING).

---

## A. PROFESSIONAL (built for recruiters and consulting audiences)

### A2. /now page | Easy (an evening) | IDEA
- Three short paragraphs: what I am working on, learning and reading this month. Update monthly (part of the Monthly block in Section E).
- Signals activity to recruiters who revisit. Add to nav and sitemap.xml.

### A3. Branded email (hello@piercewallar.com) | Easy (about an hour, plus DNS wait) | IDEA
- Cloudflare Email Routing (or the registrar's forwarding) to Gmail, plus Gmail "Send mail as."
- Then update CV, resume, LinkedIn, site and business cards (do this before printing A12).

### A4. Press and bio kit | Easy (an evening) | IDEA
- 50, 100 and 200 word bios, a headshot download, a speaker-intro paragraph and a short "how to introduce me" blurb.
- Draft from the Career Facts so the wording matches. The 50-word bio doubles as the video script seed (A17).

### A5. Recommender kit | Easy (an evening) | IDEA
- Request email template, a short guide for the recommender, and a consent checklist (name display, title, edits allowed).
- Supports A10.

### A7. Consistency check script | Moderate (a weekend) | **HIGH PRIORITY** | IDEA
- A local script compares `career.json` against: resume and CV text (extracted from the .docx or PDF), the site's Experience data, and LinkedIn's Positions.csv (from LinkedIn's "Get a copy of your data" export).
- Flags mismatched dates, titles and employers, plus banned strings (also across the site's HTML pages) (client names, "Sept", GPAs, "[Placeholder", leftover metadata names).
- Output: a one-page pass/fail report. Run it at each quarterly review and before sending any application batch.
- Depends on A6 (done). `career.json` already holds the `banned_strings` list, the conventions and the `docs` flags (which entries belong on the resume, CV and site) that this script should read. Note the one-page Resume currently omits Univar by design (`docs.resume` is false for it). The final Resume and CV (10-26-26, commit 4fd20c9) are the first text sources to check against; keep the final `.docx` files in a private folder, not in the public repo. Known drift already fixed by hand on 10-26-26: the Univar summary, the Green Tree place and the South Africa page text.

### A8. One-page PDF per project | Moderate (a weekend for the first, then repeatable) | IDEA
- A single-page leave-behind per project: Situation, Approach, Result, What I would do differently.
- Link each PDF from its project page. Keep sensitive details out.
- Pairs with A15 (attach the matching PDF to a tailored page) and A14 (automation).

### A9. Recruiter "At a Glance" page | Moderate (a weekend) | IDEA
- Web version of the Career Facts one-pager: roles, dates, credentials, education, downloads.
- Best generated from A6 so it never drifts from the resume.

### A10. Recommendations section | Moderate (the writing is quick; collecting quotes takes time) | IDEA
- Short, approved quotes from supervisors or mentors; first name and title only unless they consent otherwise.
- Use the A5 kit for requests.

### A11. Army-to-consulting translation guide | Moderate (writing heavy) | IDEA
- A page mapping each Army role to consulting competencies (for example, Battalion Logistics Officer to operations and supply chain; Deputy Group Engineer to program management).
- Useful to other veterans, good for search, and gives recruiters a translation layer. Build from the A6 wording.

### A12. Physical business cards (NFC + QR) | Moderate (design polish plus print and tag logistics) | PLANNED when ready
Goal: handout cards that carry Pierce's "whole human" brand and link to the site.
- Design: concept already built; needs a polish pass (hierarchy, spacing, print-safe colors, OU palette consistency).
- **Landing page, not the homepage:** cards point to a small page such as `piercewallar.com/c/` (a real page: short intro, resume, LinkedIn, booking or email, optional vCard (.vcf) contact download). Use a variant per batch or event (`/c/ou`, `/c/networking`) so GoatCounter shows which batch is working. Use your own domain so the link never breaks.
- **NFC:** NTAG213 or NTAG215 tags are about $1 or less each; they are written once with a free phone app (for example NFC Tools) and can be locked after writing. Modern iPhones and most Android phones read them without an app.
- **QR as backup:** print a QR on the card too (not every phone or situation supports a tap). Keep it at least about 0.8 inch square and test with several phones on a printed proof before ordering a full run.
- **Format options:** (1) standard printed card with an NFC sticker or inlay on the back, or (2) an NFC-embedded card from a specialty printer. Compare quotes and a sample before ordering in bulk. Order a small first run of 50 to 100.
- Specs to confirm with the printer: 3.5 x 2 in, 300 DPI, 0.125 in bleed, matte or uncoated stock for writing notes on the back.
- Checklist before printing: A3 email live, phone number verified, URL tested, `/c/` page live, card text proofread against Career Facts.

### A13. Monthly one-slide teardown | Moderate to start, then about 3 to 4 hours per month | IDEA
- One 16:9 slide per month analyzing a company, industry or trend (for example, AI liability insurance). Answer-first headline, three supporting points, "so what," sources in the footer.
- Published as an image plus PDF on a `/teardowns/` page. Builds a visible body of consulting-style work over time.
- Rules: cite sources, double-check every number, add "personal view" wording, and avoid anything touching an employer, client or confidential material.
- Keep a running topic pool in a notes file so the monthly block starts with a topic, not a blank page.

### A14. Print stylesheet and automated PDFs | Intermediate (a weekend) | IDEA
- `print.css` so any page prints cleanly.
- A GitHub Action (see B4) renders project PDFs with headless Chromium whenever a project page changes.
- Depends on A8 and B4.

### A15. Tailored recruiter pages | Intermediate (a few weekends) | IDEA
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

### A16. Documents generated from career.json | Advanced | CONSIDERING (needs a decision)
What it is: a script fills a Word template from `career.json` and produces the resume and CV .docx files, then converts them to PDF. One edit to a date or bullet would flow into every document.
- How it works: the Word files become templates with placeholders (a tool such as docxtpl or docx-js can fill them); LibreOffice converts the result to PDF. Variants (a general resume and a consulting-flavored one) become different selections from the same data.
- Upside: no copy-paste drift, fast variants per audience, PDF metadata set correctly every time.
- Downsides: a one-page resume still needs manual fit-checking; hand-tuned wording and layout are harder to template; real build effort for documents you update only a few times a year.
- Honest take: A6 plus A7 delivers most of the benefit at a fraction of the effort. Revisit A16 after A6 and A7 have been running for a few months; if document edits are still frequent, build it.

### A17. 60-second video bio | Large | **FUTURE (needs a logistics plan)** | IDEA
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

## B. PERSONAL & TECHNICAL

### B1. "Books behind this project" | Easy to moderate (an evening or two) | IDEA
- Each project page gets a small "Books behind this" block linking titles from the bookshelf that shaped the work.
- The bookshelf itself stays as is for now; this only adds links into it.
- Makes the bookshelf a conversation topic instead of a standalone page.

### B2. Duty-station and career map | Moderate (a weekend) | IDEA
- Interactive SVG or Leaflet map: Fort Carson, Joint Base Lewis-McChord, Houston, Denver, Oklahoma City, Norman.
- Each pin links to its Experience entry (hash deep links already exist in js/experience.js).
- Data can come from A6 so the pins and dates always match the resume.

### B3. Personal layers on the map | Moderate (a weekend, after B2) | IDEA
- Toggle layers: Professional, Education, Personal travel, Golf courses.
- Purpose: coffee-chat talking points; each pin carries a one-line "ask me about" hook.
- Privacy rules: city or landmark level only, no home address, and show trips after the fact rather than in real time.
- Photos optional and only ones you are comfortable having public.

### B4. GitHub Actions quality gate | Intermediate (2 to 4 hours, plus tuning) | IDEA
- A workflow file at `.github/workflows/site-checks.yml` that runs on every push and pull request.
- Checks: broken-link scan (lychee), HTML validation, Lighthouse (performance, accessibility, SEO), sitemap.xml regeneration check.
- Custom guard: fail if css/styles.css is suspiciously small or missing its signature rules (would have caught the experience.css overwrite on 10-24-26).
- Outcome: a red or green check on each commit, with an email on failure.
- Limits: with Pages deploying from the branch, a bad push still goes live and the check only warns. To block a bad push, switch Pages to deploy via Actions so failing checks stop the deploy.
- Free for public repos. Expect some tuning (ignore lists for flaky external links such as Amazon).
- Workflow: Claude drafts the YAML; you add it through VS Code and GitHub Desktop.

### B5. Personal data dashboard | Advanced (a weekend per data source) | IDEA
- A scheduled GitHub Action (cron) runs a Python script, writes `data/*.json`, and the site renders charts with plain SVG or JS.
- Example sources:
  - Reading: Goodreads CSV or shelf RSS (the public API was discontinued; verify the feed before relying on it). Charts: books per year, genre mix, pages read.
  - Golf: a simple CSV or published Google Sheet of rounds; scoring trend, courses played.
  - Fitness: Strava API (OAuth) or an Apple Health export; weekly volume.
  - Gaming: public Old School RuneScape hiscores endpoint; skill progress over time.
  - Home server: Plex library counts or uptime from the server's API; could feed the Home Server project page.
- Cautions: the repo is public, so only public-safe data. Scheduled commits can collide with your live edits; confine them to `data/` and pull before you edit.
- A14 and B4 both use GitHub Actions, so set up the workflows folder once.

### B6. Year-in-review page | Advanced (after B5 has a few months of data) | IDEA
- Auto-generated each December from the dashboard data: books read, rounds played, miles, milestones.
- Doubles as a personal archive and an easy source for the next /now update.

---

## C. CANDIDATES (still awaiting a decision)
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

## D. PARKED (suggested 10-26-26, not selected)
- GoatCounter goals and public stats page
- Contact page with form or booking link (hidden page remains)
- Bookshelf v2 generator (bookshelf stays as is for now)
- Writing section with RSS
- Interactive calculators (facilities condition index, unit economics, risk matrix)
- Home-lab status page (Uptime Kuma behind Cloudflare Tunnel)
- "Ask Pierce" assistant (wait until Career Facts are final)
- Self-hosted deployment with staging

---

## E. MAINTENANCE RHYTHM (keeping the site from going stale)

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

**Suggested rollout order after launch:** A6 (done), A7, A1 (done), A2 to A5, A12 (cards), A2 and A13 (start the monthly habit), then B2, B3, B4, and the larger items (A15, A16, A17, B5) one at a time.

---

## F. LOG
- 10-26-26: File created. Selected from the first list of 18: items 2, 3, 4, 6, 7 (PDF part only), 8, 10, 11, 14, 15.
- 10-26-26: Promoted from Candidates: career data single source of truth (high priority), print stylesheet and automated PDFs, press and bio kit, Army-to-consulting guide, personal map layers, books behind this project, year-in-review, recommender kit. Items renumbered.
- 10-26-26: Added from the final round: physical NFC/QR business cards (A12), one-slide teardown (A13), consistency check (A7, high priority), 60-second video bio (A17, future, with logistics plan), documents generated from career.json (A16, considering). Remaining final-round ideas moved to Candidates. Added Guiding Principles and the Maintenance Rhythm. IDs made permanent.
- 10-26-26 (AM session 2): Decisions: document name form "Pierce A. Wallar, PMP" (site nav stays "Pierce A. Wallar"); "Newmark" everywhere; "A" Guttering Jan 2009 to May 2016; Univar bullets supplied. Built and published A6 v1 and A1; Python installed. Order set: finish Resume and CV before A7. Open: the client-name rule vs project pages.
- 10-26-26 (AM session 3): Resume and CV finalized by Pierce and published (commit 4fd20c9): new PDFs in `assets/`, buttons updated, old files and the unlinked `.docx` deleted. CV now has the Univar bullets and key projects under each degree; South Africa filled in (team leader). Client names are kept off the CV (Walmart changed to "a new retail store"). Open: sync `career.json` and the South Africa page to the final CV wording; the client-name rule for project pages; then A7.
- 10-26-26 (AM session 3, later): Synced `career.json` (Univar summary, Green Tree place) and `project-south-africa.html` to the final CV; completed items removed from TASKS.md and UPDATES.md to cut length.
- 10-26-26 (AM session 3, later): Decision: client names are removed everywhere (project pages, Projects cards, descriptions). Updated Renal OCT, Portugal, South Africa, Newmark, Ready 3, Green Tree, BoomTown and Army forecast pages from Pierce's answers, and synced `career.json` (Ready 3, Newmark, Green Tree, BoomTown, Gordian, and the three degrees). Political History, Home Server, and degree honors deferred at his request.
- 10-26-26 (AM session 3, later): Added findings from Pierce's three PDFs to the Renal OCT, Portugal and Newmark pages (kept client names and people out), South Africa timeframe (Aug 2025 to Jan 2026) and client response, BoomTown (one-person operation) and Army forecast scales. Gordian sector list: the CV and Experience page use the fuller list; the one-page Resume keeps the shorter list for space, so A7 should not flag that difference.