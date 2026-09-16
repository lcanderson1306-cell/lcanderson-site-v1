# lcanderson.co — v1

## What's in this folder
- `index.html` — the content and structure of the page (this is the file you'll edit most)
- `styles.css` — all colors, fonts, spacing, layout
- `script.js` — the nav highlight-on-scroll and the click-to-expand project rows
- `assets/` — empty for now; this is where images and your resume PDF go

## How to look at it right now
Unzip this folder, then just double-click `index.html`. It opens directly in your
browser — no server, no install needed. This works because everything uses
relative file paths inside one folder.

## How to make small edits yourself
Open the folder in VS Code (File > Open Folder). A few safe starting points:
- Change any wording: edit the text directly inside `index.html`
- Change the accent color: in `styles.css`, edit the `--accent` value at the very
  top of the file — everything that uses that color updates automatically
- Swap a placeholder for a real image: find the matching `<div class="placeholder-block">`
  in `index.html` and replace it with `<img src="assets/your-file.jpg" alt="description">`
  (put the image file in the `assets` folder first)

## Adding your resume PDF
Drop your resume file into `assets/` and name it `resume.pdf` — the download
button on the Resume section already points to that exact path.

## What's next
This is the structure and content, styled and interactive, but with placeholder
blocks where photos/screenshots go. Once you're ready:
1. Push this folder to GitHub
2. Connect Netlify to that repo
3. Point lcanderson.co's DNS at Netlify

Ping me when you're ready for that step and we'll do it together.
