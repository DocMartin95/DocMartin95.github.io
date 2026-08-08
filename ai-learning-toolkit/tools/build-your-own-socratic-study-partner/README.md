# Build Your Own Socratic Study Partner

**For:** students
**Platform:** a prompt you paste (Gemini Gem, Claude Project, custom GPT, or NotebookLM)
**Status:** ready

## What it does

A ready-to-use tutor prompt you make yours by filling in your subject. It teaches by asking, not telling: every reply ends with a question, and it will not hand over an answer without first making you think.

It is subject-agnostic. Organic chemistry, constitutional law, Spanish, statistics — the engine is the same, and you supply the topic. The [Cardiology & Nephrology tutor](../professor-dobbi-cardio-nephro/README.md) is a finished example of exactly this template, filled in for a medical-school block.

## How to use it

1. Download [`Student_Socratic_Tutor_Generic.docx`](Student_Socratic_Tutor_Generic.docx).
2. Fill in the four bracketed slots near the top of the system prompt:
   - **[SUBJECT]** — what you are studying.
   - **[WHO YOU ARE]** — your level and context.
   - **[YOUR GOAL]** — what you are working toward.
   - **[YOUR MATERIALS]** — your syllabus, notes, or objectives, uploaded as sources if your tool allows it, or pasted as a topic list where the prompt points you.
3. Copy everything below the line marked **System prompt** into a new Gemini Gem, Claude Project, custom GPT, or NotebookLM notebook.
4. Start talking to it.

Example prompts:

- "Walk me through [topic] from the beginning."
- "I don't understand [concept], can you break it down?"
- "How does this connect to [something else]?"
- "Quiz me on [topic]," or "Make me flashcards for [topic]."
- "Give me a prompt to restart where we left off."

Expect it to withhold answers until you have tried. If you are genuinely stuck, say so, and it will teach from a simpler starting point.

The markdown source ([`Student_Socratic_Tutor_Generic.md`](Student_Socratic_Tutor_Generic.md)) is kept alongside the Word file if you would rather copy from plain text.

## Notes

Unofficial. Not affiliated with or endorsed by any institution. It can be wrong; verify anything important. Never enter patient information or other sensitive data.
