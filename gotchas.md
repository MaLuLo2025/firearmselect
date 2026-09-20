# FirearmSelect — Gotchas Log

## 2026-09-20 — Blog renderer silently dropped most markdown syntax
- What went wrong: The blog renderer (`src/app/blog/[slug]/page.tsx`) only handled `##` sections, blank-line paragraphs, `[text](url)` links and bare URLs. `###` headings, `- ` bullets, `1. ` lists, `**bold**`, `*italic*` and `---` all rendered as literal text inside paragraphs. 28 of 41 posts were affected (10 posts, 48 lines of literal `###`), including 3 posts shipped in the 2026-09-14 cycle. Nobody noticed because content was never checked in a rendered browser view.
- Root cause: Content was authored as markdown but the renderer was a minimal custom parser that was never extended as content conventions grew. Verification checked that pages built, not how the body text looked.
- Rule going forward:
  - The renderer now supports exactly this subset: `##` h2 (must start a line, after the opening paragraph), `###` h3, `####` h4, `- ` bullets, `1. ` numbered lists (consecutive items group into one list; blank lines do not break a list), `**bold**`, `*italic*`, `[text](url)`, bare `https://` URLs, and `---` as a horizontal rule. A blank line ends a paragraph.
  - Not supported, so do not use: tables, blockquotes (`>`), images, inline code, `* ` bullets, indented or nested lists, `_italic_`, and `#` h1.
  - Do not add a trailing `---` + italic disclaimer to article content. The page template renders the authoritative disclaimer band automatically.
  - Do not put `---` before `##` headings. The layout's section gap is the separator, and a rule doubles it.
  - After adding posts, render 2 of them in a production build and check for literal `###`, `**`, `- ` or `1. ` in the page text before deploying.
