# AI-Assisted Curriculum Mapping Toolkit

**For:** faculty, course directors, and curriculum committees
**Platform:** copy-and-paste prompts for any AI tool, plus fill-in tables

Ten self-contained tasks for mapping a course: objectives, frameworks, activities, assessments, and the gaps between them. Nothing depends on anything else. Pick the task that matches what you need right now and work in any order.

**How to use it.** Each task tells you what to bring, gives you a table to fill, and provides AI prompts to run. Two ways to work: fill the table yourself and then paste a prompt with your content, or paste the whole task into your AI tool with your materials (syllabus, exam items) and let it help you fill the table first, then run the prompts in the same chat.

> **Data reminder.** Do not put identifying or sensitive information into AI tools unless you are in an approved, secured environment. That includes student records (FERPA), patient information (PHI), personnel data, and confidential institutional data. When in doubt, use de-identified or synthetic examples.

## Task index

| Task | Use when you want to... |
|---|---|
| T-1 Course context setup | Document course details that anchor everything else |
| T-2 Define learning objectives | Write or refine measurable objectives with Bloom levels |
| T-3 Map to programs / disciplines | Match content to program objectives or disciplines |
| T-4 Map to national frameworks | Link objectives to AAMC, Core EPAs, ACGME, CanMEDS, etc. |
| T-5 Design teaching activities | Align instruction to objectives and Bloom levels |
| T-6 Build the assessment blueprint | Specify how each objective is assessed |
| T-7 Backward map: items to objectives | Start from exam items and trace back |
| T-8 Crosswalk items, objectives, teaching | See how it all aligns |
| T-9 Coverage and gap analysis | Find unmapped, unassessed, or misaligned areas |
| T-10 Quality checklists | Run pre-delivery and pre/post-exam checks |

---

## T-1 · Course context setup

Document the foundational details once, then reference them anywhere. Capture: title, term or block, primary content domains, delivery modes, faculty lead(s), target learner level, number of learners, assessment types.

**AI prompts:**
- *Context framing:* "You are an instructional designer. Given only this course information: [paste your context], list suggested categories of learning objectives typical for a course like this (knowledge, clinical reasoning, psychomotor skills, professional behaviors, communication). Do not infer beyond what is provided. Output as a table with sub-categories."
- *Course description:* "Based on this course context: [paste], draft a 3 to 4 sentence course description suitable for a handbook or accreditation report."

---

## T-2 · Define intended learning objectives

Produce a clean, measurable set of objectives, each with an action verb, a condition, and a standard.

| ID | Objective (measurable) | Bloom level | Assessment evidence |
|---|---|---|---|
| LO1 | By the end, learners will be able to... | Remember / Understand / Apply / Analyze / Evaluate / Create | How will you know? |

**AI prompts:**
- *Draft:* "Generate 5 to 7 measurable objectives for a [level] module on [topic]. Each must include an observable action verb and a Bloom level. Return a table: objective, Bloom level, one-line rationale."
- *Refine:* "Review these objectives: [paste]. Improve action verbs, remove redundancy, right-size cognitive levels for [level], tag each with a Bloom level, and flag any that are not assessable as written."
- *Inclusive-language check:* "Check these objectives for inclusive language and alignment with professional-behavior competencies, and suggest revisions: [paste]."

---

## T-3 · Map topics, objectives, and items to programs or disciplines

Understand which program objectives, disciplines, or specialty areas your content aligns with. Bring any mix of topics, objectives, or exam item stems (no answer keys). Optionally provide your program framework; if you leave it out, the AI suggests best-fit disciplines.

| Content ID | Element | Type | Best-fit program objective | Best-fit discipline | Match strength | Rationale |
|---|---|---|---|---|---|---|
| C001 | [topic / objective / item stem] | Topic / Objective / Item | [objective or attribute] | [e.g., Physiology, Clinical Reasoning] | Strong / Moderate / Weak | [why / gaps] |

**AI prompts:**
- *Auto-map (no framework):* "For each content element below, identify the best-fit discipline(s) or specialty area(s), rate match strength (Strong/Moderate/Weak), and give a one-line rationale. List the primary discipline first. Content: [paste]."
- *Map to provided framework:* "Given the program framework below, map each element to the best-fit objective with its ID, match strength, and a one-line rationale. Flag anything with no clear match. Framework: [paste]. Content: [paste]."
- *Coverage summary:* "From the mapping above, show which objectives are well covered, which are under-represented, and which elements have no match. Recommend actions."
- *Distribution:* "Calculate the percentage of elements in each discipline. Present a table and flag imbalances relative to the course goals."

---

## T-4 · Map objectives to national frameworks

Link each objective to one or more frameworks (AAMC Foundational Competencies, Core EPAs, ACGME Milestones, CanMEDS Roles, or institutional outcomes). Upload your framework or ask the AI to apply standard ones.

| Obj. ID | Objective | Framework | Domain | Element / code | Match strength | Notes |
|---|---|---|---|---|---|---|
| LO1 | [statement] | AAMC FC / Core EPA / ACGME / Other | [domain] | [e.g., FC-1.1; EPA 2] | Strong / Moderate / Weak | [how addressed] |

**AI prompts:**
- *Standard frameworks:* "Map each objective below to AAMC Foundational Competencies and Core EPAs. For each: framework, specific code(s), why it fits (20 words max), match strength. Objectives: [paste]."
- *Uploaded framework:* "Using the framework below, map each objective to the best-fit competency with a code, match strength, and one-line rationale. Framework: [paste]. Objectives: [paste]."
- *Coverage check:* "List framework competencies not yet addressed by any objective, and recommend 1 to 2 new or revised objectives to close the gaps."

---

## T-5 · Design teaching and learning activities

Align activities to each objective's Bloom level and to the planned assessments (constructive alignment).

| Obj. ID | Activity | Active-learning strategy | Timing | Modality | Materials |
|---|---|---|---|---|---|
| LO1 | [PBL case, lecture, sim, lab] | [think-pair-share, TBL, flipped] | [week, min] | [in-person / online / hybrid] | [slides, rubric, readings] |

**AI prompts:**
- *Design:* "For each objective below (with Bloom level), propose 2 activities aligned to that level. For each: description, active-learning strategy, time, modality, materials, and how to check understanding in session. Objectives: [paste]."
- *Access and inclusion:* "Suggest accessibility considerations, UDL modifications, and inclusive facilitation moves for these activities: [paste]."
- *Alignment check:* "For each activity, verify the cognitive demand matches its objective's Bloom level. Flag mismatches and suggest fixes. [paste]."

---

## T-6 · Build the assessment blueprint

Ensure every objective is assessed at the right level with appropriate weight.

| Obj. ID | Method | Weight | Item IDs / stations | Bloom level | Standard |
|---|---|---|---|---|---|
| LO1 | MCQ / SAQ / OSCE / Project | 15% | [Q12, OSCE#3] | [level] | [rubric / benchmark] |

**AI prompts:**
- *Generate:* "Create an assessment blueprint from these objectives. Propose number of items per objective, cognitive-level distribution, methods, and weights totaling 100%. Objectives: [paste]."
- *Item shells:* "For objective [#] at Bloom level [level], draft 2 board-style MCQ item shells (stem and key concept only, no answer key) and 1 OSCE station outline (task and checklist domains)."
- *Standards:* "Recommend performance standards and a brief justification for each method in this blueprint: [paste]."

---

## T-7 · Backward map: exam items to objectives

Start from an existing exam. Paste item stems or topic summaries (no answer keys) and infer the construct, Bloom level, and best-fit objectives or codes. Useful for auditing legacy assessments and accreditation prep.

| Item ID | Stem / summary | Construct | Obj. ID(s) | Bloom level | Framework | Match strength | Flags |
|---|---|---|---|---|---|---|---|
| Q001 | [summary] | Knowledge / Reasoning / Communication | [LO#] | [level] | [FC / EPA / ACGME] | Strong / Moderate / Weak | [flaws] |

**AI prompts:**
- *Batch analysis:* "For each item below, infer the construct, Bloom level, likely objective(s), and map to AAMC FC and Core EPA codes with a one-line rationale and match strength. Flag item-writing flaws (leading cues, unfocused stem, implausible distractors). Items: [paste]."
- *Map to provided objectives:* "Using the objectives below, map each item to its best-fit objective(s) with Bloom level, match strength, and a one-line rationale. Flag items that map to none. Objectives: [paste]. Items: [paste]."
- *Item rewrite:* "Rewrite item [ID] to better align with objective [#] at Bloom level [level]. Give a revised stem and distractors keyed to common misconceptions. No answer key."

---

## T-8 · Crosswalk: items, objectives, and teaching

See how items distribute across objectives and where each is taught, to spot over- and under-sampling.

| Obj. ID | Summary | # Items | Item IDs | Where taught | Sampling note |
|---|---|---|---|---|---|
| LO1 | [summary] | [#] | [Q001, Q014] | [Lecture 4; PBL Case 2] | Over / Under / Balanced |

**AI prompts:**
- *Roll-up:* "From the item mapping below, compute items per objective and show over- or under-representation relative to each objective's importance. Recommend rebalancing (add, retire, rewrite items; adjust instruction). [paste]."
- *Committee summary:* "Produce a polished blueprint summary for an assessment committee: domain weights, cognitive-level distribution, competency coverage, and one paragraph on major changes from the prior version. [paste]."

---

## T-9 · Coverage and gap analysis

Surface objectives with no teaching, objectives with no assessment, items with no objective, Bloom mismatches, and competencies addressed nowhere.

| Obj. ID | Summary | Framework? | Taught? | Assessed? | Bloom OK? | Action |
|---|---|---|---|---|---|---|
| LO1 | [summary] | Y/N | Y/N | Y/N | Y/N | [action needed] |

**AI prompts:**
- *Full audit:* "From the mapping data below, produce a one-page alignment audit: unassessed objectives, unaddressed competencies, Bloom mismatches, untaught objectives. Prioritize fixes with suggested owners and timelines. Data: [paste]."
- *Redundancy scan:* "Identify overlapping activities or assessments that could be consolidated without losing coverage. [paste]."
- *Action plan:* "Generate a prioritized action list: issue, recommended fix, which task (T-1 to T-10) to use, owner, due date. [paste issue log]."

---

## T-10 · Quality checklists

A final quality gate before delivery or an exam.

**Pre-delivery (course design):**
- Objectives are measurable, use action verbs, and are Bloom-tagged (T-2)
- Every objective maps to at least one framework or program competency (T-4)
- Every objective has an activity aligned to its Bloom level (T-5)
- Assessments sample each objective with appropriate weight (T-6)
- Each item or task has a clear objective mapping (T-6 / T-7)
- Professional and inclusion competencies are integrated where applicable
- Gap analysis is complete with no critical gaps (T-9)
- Stakeholders have reviewed and approved

**Pre-exam:**
- Every item maps to an objective and competency (T-7)
- Item cognitive level aligns with objective and instruction (T-7 / T-8)
- Content is proportional to blueprint weights (T-6 / T-8)
- Duplicate items removed and item-writing flaws addressed (T-7)
- Subject-matter expert review complete

**Post-exam (after psychometrics):**
- Item analysis reviewed (difficulty, discrimination, distractors)
- Misfitting items investigated and mappings updated (T-7)
- Curriculum adjustments logged (T-9)
- Findings reported to the committee
- Blueprint and crosswalk updated (T-6 / T-8)

**AI prompts:**
- *Faculty note:* "Draft a brief email to faculty summarizing the finalized blueprint, key objectives, and what to emphasize. Context: [paste]. Objectives: [paste]."
- *Student summary:* "Create a clear, supportive student-facing summary of objectives and assessment types (no answer keys). Objectives: [paste]. Methods: [paste]."
- *Post-exam interpretation:* "Given this item analysis (item ID, difficulty, discrimination, distractor counts): [paste], identify items for review and hypothesize causes (content gap, flawed distractor, ambiguous stem)."
- *Closing the loop:* "Draft a brief report of post-exam findings, mapping updates, and recommended adjustments for the committee. [paste]."

---

*An unofficial faculty toolkit. Not affiliated with or endorsed by any institution. Adapt it freely, and keep real student, patient, and personnel data out of unsecured AI tools.*
