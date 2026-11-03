# piercewallar.com

This repository holds the source for [piercewallar.com](https://piercewallar.com), the personal website of Pierce A. Wallar: MBA candidate at the University of Oklahoma, U.S. Army veteran, and founder of BoomTown Home Services. The site is where I keep my story, my project write-ups and my résumé in one place, for recruiters, classmates, colleagues and anyone curious about the work.

If you arrived here from the site or from LinkedIn, the live version is easier to read than the code. If you are interested in how it is built, read on.

## What is on the site

| Page | What you will find |
|---|---|
| Home | A short introduction and downloads of my CV and one-page résumé |
| Experience | An interactive timeline of roles, education and credentials, with detail for each |
| Projects | Case-study write-ups from consulting engagements, start-up work, Army operations and personal builds |
| Bookshelf | The books I read and keep for reference, with search |
| Privacy | What visitor information the site and its services handle |

Project pages describe organizations generically. They contain no client names and no confidential material.

## How it is built

The site is deliberately simple: plain HTML, CSS and a small amount of JavaScript, with no framework and no build step. What is in the repository is what gets published. It is hosted on GitHub Pages and served from the custom domain in `CNAME`.

A few design choices worth noting:

- **One source of truth for career facts.** Every date, title and bullet on the Experience page, in the structured data (JSON-LD) on the home page and in the Career Facts reference comes from a single file, `data/career.json`. A small Python script regenerates the dependent files, and a second script checks that the site, the published CV and résumé, and the data still agree.
- **Light and dark themes**, chosen by the visitor and remembered in the browser. The site never sets cookies.
- **Accessibility basics:** semantic landmarks, descriptive alt text, a skip-to-content link, visible keyboard focus and responsive layouts that work on a phone.
- **Privacy-minded analytics.** The site uses [GoatCounter](https://www.goatcounter.com/), which does not use cookies or store IP addresses. The [privacy page](https://piercewallar.com/privacy.html) lists everything else.
- **Search and sharing metadata:** a sitemap, canonical URLs, Open Graph tags for link previews and schema.org markup.

## Repository layout

| Path | Purpose |
|---|---|
| `index.html`, `experience.html`, `projects.html`, `bookshelf.html`, `privacy.html` | Main pages |
| `project-*.html` | One page per project |
| `_project-template.html` | Blank template for a new project (not published) |
| `now.html` | A monthly "what I am working on" page (unpublished draft) |
| `404.html`, `coming-soon.html` | Error page and a legacy placeholder (neither is indexed) |
| `css/` | `styles.css` (site-wide) and `experience.css` (timeline) |
| `js/` | `site.js` (menu, theme toggle, filters, search), `experience.js` (timeline) and `experience-data.js` (generated; do not edit by hand) |
| `data/` | `career.json` (the source of truth) and the files generated from it: `career-facts.md` and `jsonld-person.html` |
| `scripts/` | `build_career.py` and `check_consistency.py` |
| `assets/` | Images, the CV and résumé PDFs, and icons |
| `sitemap.xml`, `robots.txt`, `site.webmanifest`, `CNAME` | Search engine, app and domain settings |
| `TASKS.md` | The working to-do list and idea backlog for the site |

## Running the site locally

No installation is needed to read the code. To preview the site, either open `index.html` in a browser or serve the folder:

```
python -m http.server 8000
```

then visit `http://localhost:8000`. In Visual Studio Code, the Live Server extension also works and refreshes as you save.

## Updating career information

Edit `data/career.json`, then run these two commands from the repository root (Python 3.8 or newer, standard library only):

```
python scripts/build_career.py
python scripts/check_consistency.py
```

The first rebuilds the generated files. The second reports whether the site, the generated files and the published CV and résumé still match; PDF checks need the free Poppler tools (`pdftotext`, `pdfinfo`) and are skipped without them. Commit the generated files along with the data.

## Publishing

Commit and push to `main`. GitHub Pages publishes within a minute or two. When a page changes, update the month and year in its "Last updated" footer line.

## Copyright and reuse

Unless a file says otherwise, the contents of this repository, including the code, written content, project descriptions, photographs and images, are copyright Pierce A. Wallar, all rights reserved. Nothing here is licensed for reuse. You are welcome to read the code and take ideas from how the site is built, but please do not copy the content or the design.

## Contact

The best way to reach me is through [LinkedIn](https://www.linkedin.com/in/pierce-wallar) or by email at [piercewallar@gmail.com](mailto:piercewallar@gmail.com).
