# AI Learning Toolkit

Practical AI tools for learning and teaching, built to make people think, not to think for them.

**Live site:** https://docmartin95.github.io/ai-learning-toolkit/

Built and maintained by James Martin II, PhD.

## Who it is for

Two tracks, one door each:

- **Students** — a Socratic tutor template you fill in with your own subject, a worked example of one, study tools built on retrieval practice, and a way to structure any prompt.
- **Faculty** — the evidence and architecture behind Socratic tutors, guides for building your own on any platform, and a ten-task curriculum mapping toolkit.

## Tool manifest

| Tool | Track | Slug | Download | Status |
|---|---|---|---|---|
| Build Your Own Socratic Study Partner | Student | `build-your-own-socratic-study-partner` | `Student_Socratic_Tutor_Generic.docx` | ready |
| Example: Cardiology & Nephrology Tutor | Student | `professor-dobbi-cardio-nephro` | `ProfDobbi_CardioNephro_Tutor_Deployable.docx` | ready |
| Study Skills Toolkit | Student | `study-skills-toolkit` | `Study_Skills_Toolkit.docx` | ready |
| TRACI Prompt Literacy | Both | `traci-prompt-literacy` | `TRACI_Prompt_Literacy.docx` | ready |
| Why Build a Socratic AI Tutor | Faculty | `why-build-a-socratic-tutor` | `Why_Build_A_Socratic_Tutor.pptx`, `Why_Build_A_Socratic_Tutor_Handout.pdf` | ready |
| AI Tutor Creation Guide | Faculty | `ai-tutor-creation-guides` | `AI_Tutor_Creation_Guide.docx` | ready |
| Curriculum Mapping Toolkit | Faculty | `curriculum-mapping` | `Curriculum_Mapping_Toolkit.docx` | ready |
| Socratic Tutor Master Template | Faculty | — | — | gated (request access) |

Student track order on the page is: Build Your Own, Example: Cardiology & Nephrology, Study Skills Toolkit, TRACI Prompt Literacy.

Downloads are Word documents so they open cleanly rather than as plain text. The original markdown sources are kept alongside each `.docx` for editing, but nothing on the site links to them.

## How to use it

Visit the site above and pick your track. Every tool is a file you can download and use in whatever AI assistant you already have; nothing requires an account here, and nothing runs on this site.

## The philosophy

A tool should make a person do the thinking. That sounds obvious and is easy to violate: the path of least resistance for any AI tool is to supply the answer, and the path of least resistance for any learner is to take it. So these are built the other way round. The tutor ends every reply with a question. The study tools withhold the model answer until you have attempted one. The faculty materials are meant to be adapted rather than adopted, because a mapping or a tutor you built yourself is one you understand. Struggle that produces retrieval feels worse than rereading and works considerably better, and that trade is the whole design.

## What is here

```
ai-learning-toolkit/
  index.html          landing page: choose a track
  students.html       student track
  faculty.html        faculty track
  about.html          what this is, the disclaimer, how requests work
  assets/style.css    all site styling
  tools/<slug>/       one folder per tool: a README plus the tool's files
  LICENSE
```

The site is zero-build: plain HTML and one CSS file, no Jekyll and no npm. It is served by GitHub Pages from this folder of the `DocMartin95.github.io` repository. Tool files sit under `tools/<slug>/` so they have clean, stable public URLs.

## Requesting a tool

Anyone can ask for a tool they wish existed, without knowing how to build it or what to call it. The [request form](https://docs.google.com/forms/d/e/1FAIpQLSerSm1qCP2Snyl-9muM-snReBUJaLsD_PfKhPtI-Etm9-B4SQ/viewform) is structured on the TRACI framework (Task, Role, Audience, Create, Intent), so a plain description comes out the other end as a clean specification. Responses collect in a linked Google Sheet that serves as the build queue.

## Adding a tool later

1. Create `tools/<slug>/` and place the tool's file(s) there. Prefer `.docx` for anything a reader will download, since GitHub Pages serves `.md` as a plain-text download.
2. Write `tools/<slug>/README.md` following the shape of the existing ones: **For**, **Platform**, **Status**, then *What it does*, *How to use it*, and *Notes* with the disclaimer.
3. Add one card to the right track page, copying the pattern of an existing card. Student cards use the `.tool` grid; faculty cards use the `.tool--row` variant.
4. Add a row to the tool manifest above.
5. Commit and push. Pages redeploys on its own.

## What is deliberately not here

The full Socratic Tutor Master Template (the topic-agnostic engine), the v1 Cardio/Nephro tutor containing the case answer key, and any block-specific tutor naming protected cases or diagnoses are all kept out of this public repository. They are shared directly with collaborators and training cohorts. The faculty page carries a "request access" card for the Master Template and no file.

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — Creative Commons Attribution-NonCommercial 4.0 International. Reuse and adapt for teaching with attribution to James Martin II; commercial repackaging is not permitted. See [`LICENSE`](LICENSE).

## Disclaimer

> These are unofficial educational tools. They are not affiliated with, endorsed by, or approved by any institution, and they can produce errors. Verify anything important against a trusted source. Never enter patient information (PHI) or other sensitive data into any AI tool.

## Contact

jm38@alumni.princeton.edu, or use the request form.
