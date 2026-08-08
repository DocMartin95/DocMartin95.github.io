# How to Build Your Own AI Tutor

**For:** faculty (and ambitious students)
**Platform:** applies to Gemini Gems, ChatGPT custom GPTs, Claude Projects, and NotebookLM

The hard part of building a tutor is the instructions, not the platform. Once you have a good system prompt, standing it up on any of these tools takes a few minutes. This guide walks the durable steps. Exact button names shift as the platforms update, so follow the spirit of each step and use the current menus.

## Before you start

Have three things ready:

1. **Your instructions.** This is the system prompt that defines how the tutor behaves. If you are building a Socratic tutor, start from a tested scaffold rather than a blank page, and fill in your course. The four things that separate a tutor from a chatbot are session state, an answer-evaluation gate, a warm-plus-sharp persona pair, and protected practice.
2. **Your sources.** The materials you want the tutor grounded in: a syllabus, learning objectives, lecture notes, selected readings. Grounding a tutor in your own sources sharply reduces invented facts.
3. **A structured prompt habit.** If your instructions are thin, run them through TRACI first (Task, Role, Audience, Create, Intent) so the tutor's job is unambiguous.

---

## Option A: A Gemini Gem

A Gem is a saved, reusable version of Gemini with your own instructions and files baked in.

1. Open Gemini and go to the area for managing Gems, then start a new Gem.
2. Name it something students will recognize, for example the tutor's persona name.
3. Paste your full instructions into the instructions field.
4. Add your sources as knowledge files where the Gem allows uploads, so it teaches from your materials rather than the open web.
5. Save the Gem.
6. Test it in a fresh chat (see Testing below), then share it with students using the share option. Confirm the share setting matches your audience.

Good fit when your institution is on Google and students already have Gemini access.

---

## Option B: A ChatGPT custom GPT

A custom GPT is a saved ChatGPT configured with your instructions, files, and starter prompts.

1. Open the GPT builder and create a new GPT.
2. Use the configure view (not just the chat builder) so you control the exact wording.
3. Give it a name and a short description.
4. Paste your full instructions into the instructions field.
5. Upload your sources as knowledge files.
6. Add three or four conversation starters that model good first moves, for example "Walk me through [topic]" or "Quiz me on [topic]."
7. Save, then set who can access it (link-only or wider) and share the link.

Good fit when your students have ChatGPT access and you want ready-made starter prompts.

---

## Two more places the same instructions work

- **Claude Project.** Create a project, put your instructions in the project's custom instructions, and add your sources as project knowledge. Strong when you want the tutor to reason over a larger set of documents.
- **NotebookLM.** Upload your sources and steer behavior through your prompts. Best when you want answers tightly grounded in specific materials and less free-ranging. A good low-risk starting point for students.

The instructions travel across all four with little change. That portability is the point: build the prompt once, deploy it wherever your learners already are.

---

## Testing before you share

Do not ship a tutor you have not tried to break. Run these checks in a fresh session:

- **Does it withhold answers?** Give a wrong answer and confirm it says you are wrong and re-asks, rather than praising you and handing over the right answer.
- **Does it stay in scope?** Ask something off-topic and confirm it redirects instead of wandering.
- **Does it protect what it should?** If you told it not to reveal graded case answers, try to extract one and confirm it refuses.
- **Does it end with a question?** A tutoring turn should leave the student with something to do.
- **Is it grounded?** Ask something answerable only from your uploaded sources and confirm it uses them.

When something fails, fix it in the instructions, not by scolding the tutor mid-chat, then re-test.

---

## A short checklist

1. Write or adapt the instructions; run thin ones through TRACI.
2. Gather your sources.
3. Create the Gem, GPT, Project, or notebook and paste the instructions.
4. Upload the sources.
5. Test: wrong answer, off-topic, protected content, ends-with-a-question, grounded.
6. Fix the instructions, re-test, then share with the right access setting.

---

*An unofficial how-to. Not affiliated with or endorsed by any platform or institution. Platform interfaces change; verify each step against the current tool.*
