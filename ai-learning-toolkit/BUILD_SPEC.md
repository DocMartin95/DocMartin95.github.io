# BUILD_SPEC — AI Learning Toolkit

**Status: reconciled with what is actually built, as of v1.2.**

This is the working specification for the AI Learning Toolkit hub. It replaces the original pre-build spec, which described a plan that has since changed in three ways: the site lives in this repository rather than a standalone one, it is served from the repository root rather than a `/docs` folder, and downloads are Word documents rather than markdown. Anything written against the old spec should be read against this file instead.

This file is the canonical tool manifest (Section 4). When a tool is added, renamed, or has its files changed, update Section 4 in the same commit.

---

## 0. Values

- `SITE_TITLE`: AI Learning Toolkit
- `OWNER`: James Martin II, PhD
- `SITE_ROOT`: `/ai-learning-toolkit/` inside the `DocMartin95/DocMartin95.github.io` repository
- `LIVE_URL`: https://docmartin95.github.io/ai-learning-toolkit/
- `FORM_URL`: `https://docs.google.com/forms/d/e/1FAIpQLSerSm1qCP2Snyl-9muM-snReBUJaLsD_PfKhPtI-Etm9-B4SQ/viewform`
- `CONTACT`: jm38@alumni.princeton.edu
- `LICENSE`: CC BY-NC 4.0

---

## 1. What this is

A public library of AI teaching and learning tools, serving a two-track website (students and faculty) from GitHub Pages. It is a subfolder of the owner's personal GitHub Pages site rather than a standalone repository, so it survives a job change and needs no separate Pages configuration.

Gated material does not live here. See Section 6.

---

## 2. Structure

```
ai-learning-toolkit/
  index.html            landing: choose a track, plus the support section
  students.html         student track
  faculty.html          faculty track
  about.html            what this is, disclaimer, how requests work, license
  README.md
  BUILD_SPEC.md         this file
  LICENSE
  assets/
    style.css           all site styling
    paypal_qr.png       support section QR codes
    venmo_qr.png
  tools/<slug>/         one folder per tool: README.md plus the tool's files
```

Pages serves the repository root, so this folder is reachable directly and there is no `/docs` directory. There is no separate source-of-truth mirror of the tool READMEs: a single copy under `tools/<slug>/` is both the source and the published file.

Zero-build: plain HTML and one stylesheet. No Jekyll config of our own, no npm, no build step.

---

## 3. The site

**Design tokens** (defined once at the top of `assets/style.css`):

- Ink `#0F3B44` (dominant dark), Teal `#1C7293` (secondary), Amber `#E8A33D` (accent)
- Backgrounds white `#FFFFFF`, card tint `#EEF3F4`, hairline `#DCE5E7`
- Text `#1F2A2E`, muted `#5B6B70`
- Display and headings: Spectral, falling back to Cambria and Georgia. Body: the system UI sans stack. One serif, one sans, no more.
- Motif: cards with a subtle tint and soft shadow, and a small colored circle for icons and tags. No accent stripes, no color bars, no underlines beneath headings.

**Pages.** Each track page varies its layout rather than repeating one template: the student page uses a card grid, the faculty page a stacked column of wide rows, the About page a single narrow reading column.

- `index.html` — title, one-line purpose, two large cards routing to the tracks, a quieter row of secondary links, then the support section, then the footer.
- `students.html`, `faculty.html` — header, short intro, tool cards, a prominent "Request a tool" button, and links back to the landing and across to the other track.
- `about.html` — what the hub is, who made it, the full disclaimer, how the request process works, and the license.

**Tool card.** Title, one-line description, a row of small tags (audience, platform, status), and action links: a download plus a "How to use" pointing at the tool's README. A gated tool shows a card with no download and a "Request access" link.

---

## 4. Tool manifest

This table is canonical. Keep it in step with the cards and folders.

| Tool | Track | Slug | Download | Status |
|---|---|---|---|---|
| Build Your Own Socratic Study Partner | Student | `build-your-own-socratic-study-partner` | `Student_Socratic_Tutor_Generic.docx` | ready |
| Example: Cardiology & Nephrology Tutor | Student | `professor-dobbi-cardio-nephro` | `ProfDobbi_CardioNephro_Tutor_Deployable.docx` | ready |
| Study Skills Toolkit | Student | `study-skills-toolkit` | `Study_Skills_Toolkit.docx` | ready |
| TRACI Prompt Literacy | Both | `traci-prompt-literacy` | `TRACI_Prompt_Literacy.docx` | ready |
| Why Build a Socratic AI Tutor | Faculty | `why-build-a-socratic-tutor` | `Why_Build_A_Socratic_Tutor.pptx`, `Why_Build_A_Socratic_Tutor_Handout.pdf` | ready |
| AI Tutor Creation Guide | Faculty | `ai-tutor-creation-guides` | `AI_Tutor_Creation_Guide.docx` | ready |
| Curriculum Mapping Toolkit | Faculty | `curriculum-mapping` | `Curriculum_Mapping_Toolkit.docx` | ready |
| Socratic Tutor Master Template | Faculty | — | — | gated, request access |

**Student track order on the page:** Build Your Own, then Example: Cardiology & Nephrology, then Study Skills Toolkit, then TRACI Prompt Literacy. The generic template leads and the cardiology tutor follows it as a worked example of the same template.

**TRACI appears on both tracks**, pointing at the same file in one folder.

Markdown sources are kept alongside the `.docx` for editing. Nothing on the site links to them.

---

## 5. Per-tool README template

Every `tools/<slug>/README.md` uses this shape:

```
# <Tool name>

**For:** <students / faculty / both>
**Platform:** <a prompt you paste / Gemini Gem / Claude Project / custom GPT / NotebookLM / worksheet / slides>
**Status:** <ready / coming soon>

## What it does
<2 to 3 sentences>

## How to use it
<numbered setup, plus a few example prompts or steps>

## Notes
Unofficial. Not affiliated with or endorsed by any institution. It can be wrong; verify anything
important. Never enter patient information or other sensitive data.
```

---

## 6. Gated content

These stay out of this public repository, shared directly with collaborators and training cohorts:

- The full **Socratic Tutor Master Template**, the topic-agnostic engine.
- The full **v1 Cardio/Nephro tutor** containing the case answer key.
- Any block-specific tutor naming protected cases or diagnoses.

The faculty page references the Master Template only as a request-access card with no file. Before publishing any tutor, confirm no answer key and no protected case material is present.

---

## 7. Request intake

A Google Form structured on TRACI (Task, Role, Audience, Create, Intent), so a requester who cannot spec a tool is guided into a clean request. Responses collect in a linked Google Sheet, which is the build queue. The site links to the form and does not host it.

`FORM_URL` appears on both track pages ("Request a tool"), on the About page, and on the Master Template card ("Request access").

---

## 8. Support section

A voluntary tip jar on the landing page, below the track cards and above the footer, with a PayPal card and a Venmo card. Each card shows a QR code and a button.

- PayPal: `https://www.paypal.com/qrcodes/p2pqrc/SB9BQDTVM8K5Q`
- Venmo: `https://venmo.com/u/James-MartinII-1`

The Venmo QR image encodes the numeric-ID form of the same destination (`venmo.com/code?user_id=...`) rather than the username URL, which is how Venmo generates printed codes. If either payment destination is ever regenerated, replace both the QR image and the button URL together, and rescan to confirm.

Keep the "personal, unofficial project ... entirely voluntary" wording. It keeps the tip jar clearly personal and separate from any institution. A "Support" link sits in the footer of every page.

---

## 9. License and disclaimer

**License:** CC BY-NC 4.0. Educators may reuse and adapt with attribution; commercial repackaging is blocked. `LICENSE` states the grant and points at the canonical legal code at creativecommons.org, which is authoritative.

**Disclaimer**, used verbatim on About, in every tool README, and in every page footer:

> These are unofficial educational tools. They are not affiliated with, endorsed by, or approved by any institution, and they can produce errors. Verify anything important against a trusted source. Never enter patient information (PHI) or other sensitive data into any AI tool.

---

## 10. How to add a tool

1. Create `tools/<slug>/` and place the tool's file(s) there.
2. Write `tools/<slug>/README.md` from the Section 5 template.
3. Add one card to the right track page, following an existing card. Student cards use the `.tool` grid; faculty cards use the `.tool--row` variant.
4. Add a row to the Section 4 manifest.
5. Commit and push to `main`. Pages redeploys on its own.

---

## 11. Conventions worth knowing

- **Serve `.docx`, not `.md`.** GitHub Pages serves markdown as a plain-text download, which reads as confusing raw text to anyone who is not a developer. Anything a reader downloads should be a Word document, a PDF, or a deck.
- **Markdown files must not start with YAML front matter.** Pages runs the repository through Jekyll. A markdown file with front matter gets converted to HTML and its `.md` URL stops working; without front matter it is copied verbatim and the URL holds.
- **"How to use" links point at github.com**, not at the site, because GitHub renders README markdown and Pages does not.
- **Card counts affect layout.** The student grid holds two cards per row so that an even number of tools does not orphan one on its own line. Revisit if the count changes.
