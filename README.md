# Pierce A. Wallar — Personal Website

Source for https://piercewallar.com, hosted on GitHub Pages. The site is plain HTML, CSS, and a little JavaScript. There is no build step: what you see in the files is what gets published.

## Previewing changes in VS Code
1. Install the **Live Server** extension (Ritwick Dey).
2. Right-click `index.html` and choose **Open with Live Server**.
3. Edit and save any file; the browser refreshes on its own.

## Publishing
Commit your changes in VS Code (Source Control panel) and push to `main`. GitHub Pages publishes within a minute or two. Update the month and year in the "Last updated" footer line when you publish (search the files for `Last updated`).

## Finding things you still need to edit
Press **Ctrl+Shift+F** in VS Code and search for `EDIT:`. Every draft passage that needs your input is marked with an HTML comment starting with `EDIT:`. Delete the comment once you have handled it.

## Files
| File | What it is |
|---|---|
| `index.html` | Home page and bio |
| `projects.html` | Project grid with category filter |
| `project-*.html` | One page per project (ten of them) |
| `_project-template.html` | Blank template for a new project (see below); not published |
| `bookshelf.html` | Grouped book list with search |
| `experience.html`, `contact.html` | Hidden for now (see below) |
| `css/styles.css` | All styling |
| `js/site.js` | Menu, dark mode toggle, project filter, bookshelf search |
| `assets/images/projects/` | Project images, named `<project>-1.jpg`, `-2.jpg`, `-3.jpg` |
| `sitemap.xml`, `robots.txt`, `CNAME` | Search engine and domain settings; leave `CNAME` alone |

## Common tasks
**Swap a project image.** Save your picture as a `.jpg` with the same name as the placeholder (for example `portugal-2.jpg`) in `assets/images/projects/`. Then update the image's `alt` text in the project page. `-1` is the top image and also the card picture on the Projects page. To add a caption, find the commented-out `<figcaption>` under the image and remove the comment markers.

**Add a project.** Copy `_project-template.html` to `project-your-name.html`, fill it in, add images, then copy an existing card in `projects.html` and point it at the new page. Add the page to `sitemap.xml`. The `data-category` on the card must match one of the filter buttons.

**Add a book.** In `bookshelf.html`, copy one `<li>` line inside the right section and edit it. Each line includes an Amazon search link; replace the address inside `href="..."` with a direct or affiliate link when you have one. To add a section, copy a whole `<details>` block.

**Show Experience or Contact later.** Both pages currently redirect to `coming-soon.html`. To bring one back: remove the `<meta http-equiv="refresh" ...>` line at the top of the page, change its `noindex, nofollow` robots tag to `index, follow`, remove the comment markers around its link in the nav (on every page), and add it to `sitemap.xml`. Those two pages still need their own cleanup first (they reference older file paths).

**Change colors.** The main palette is at the top of `css/styles.css`; the Projects palette is the block labeled "Projects page palette".

## License
MIT. Reuse the structure, but replace the personal content with your own.
