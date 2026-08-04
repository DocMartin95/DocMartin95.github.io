# Adding the validated instruments

### Short answer: yes, we can, and the app is now built so it's a paste, not a rewrite. But it's a licensing-and-fidelity task, so here's how to do it right.

Three things are true about validated scales, and they shape everything below.

First, a validated instrument is only valid if you use it **verbatim, in full, with its own response scale and scoring**. You can't reword items, use a subset, or force it onto a different Likert scale, or you lose the validation, and the DIF study needs the exact original items anyway. That's why the app now supports a **different response scale per instrument** (the CAT-Q is 7-point, the Everyday Discrimination Scale is 6-point frequency), and reverse-scored items.

Second, **licensing varies by instrument**, and some are free while others need permission or don't exist as a single validated scale at all. The map is below.

Third, I have deliberately **not pasted the official item wording into the app from memory**, because getting a validated item slightly wrong makes it un-validated, and because each instrument should be obtained from its source (which is also where you confirm the license). So the app ships with clearly-labelled *placeholder* items, and each construct is an "instrument slot" you fill from the official source.

---

## The core differentiation layer (new in v0.6)

The main test now opens with a facet-based differentiation spine: the autistic domain is measured across five facets (social communication, sensory sensitivity, need for sameness, deep focus/interests, literal & detail thinking) and the ADHD domain across five (inattention, hyperactivity, impulsivity, executive/time, emotional intensity), two items per facet in the main test and two more per facet in the deeper tier. This yields a domain score for each, a screening decision, an in-depth facet breakdown, the ADHD presentation subtype (inattentive / hyperactive-impulsive / combined), and the autistic facets driving the profile. It's modelled on the domains and scoring logic of two free brief screeners: the **AQ-10** (autism) and the **ASRS v1.1** (ADHD). Autism items are direction-scored agreement (some reverse-direction), ADHD items use an Often/Very-often frequency threshold, mirroring how those screeners separate signal from noise. Two axis scores come out, each with a screening line, so a neurotypical respondent lands below both and gets told so plainly, while autistic, ADHD, and AuDHD profiles separate. This is a *suggestive screen, not a diagnosis*, and the app says so on the result.

For a research or screening deployment, swap these paraphrased domain items for the actual validated screeners: the [AQ-10](https://embrace-autism.com/aq-10/) (10 items, free) and the [ASRS v1.1](https://add.org/wp-content/uploads/2015/03/adhd-questionnaire-ASRS111.pdf) (WHO, public). They plug in the same way the slots below do, with their own scoring keys and cutoffs. Cite both.

## How the slots work (in `index.html`)

Find `const INSTRUMENTS = [ ... ]`. Each entry is one construct:

```js
{key:'masking', name:'Masking', instrument:'CAT-Q (25 items, 7-point)',
 source:'...', license:'...', officialCount:25,
 points:7, anchors:['Strongly disagree','Strongly agree'], placeholder:true,
 items:[ {t:"...placeholder..."}, ... ]}
```

To drop in the real instrument:

1. Set `points` and `anchors` to match the official response scale (already set correctly for each).
2. Replace the `items` array with the official items, in order: `{t:"exact item text"}`, and add `rev:true` to any reverse-scored item.
3. Set `placeholder:false` so the "placeholder for…" label disappears.

Scoring is automatic: each item is scored on its own scale, reverse items are flipped, and the block is averaged to a 0–100 subscale under its `key`. The five keys (`masking`, `codeswitch`, `discrimination`, `minoritystress`, `strengths`) stay the same, so your Google Sheet columns don't change.

---

## The instrument map

**Masking → CAT-Q (Camouflaging Autistic Traits Questionnaire). ✓ NOW WIRED IN (validated).** The full 25 items are in the app verbatim, on the correct 7-point scale (Strongly disagree → Strongly agree), with the five reverse-scored items (3, 12, 19, 22, 24) flagged and scored correctly. Items sourced from [cat-q.org / Embrace Autism](https://embrace-autism.com/cat-q/) reproducing Hull et al. (2019). **Free for non-commercial clinical and research use; cite Hull et al. (2019).** The three subscales (compensation, masking, assimilation) are preserved in the item order, so subscale scoring can be added later; right now the app reports one combined masking score.

**Everyday discrimination → Everyday Discrimination Scale (Williams). ✓ NOW WIRED IN (validated).** The 10-item version is in the app verbatim, on the 6-point frequency scale (Never → Almost every day), sourced from the [PhenX Toolkit](https://www.phenxtoolkit.org/protocols/view/210302) reproducing Williams et al. (1997). **Freely available, no permission needed; cite Williams et al. (1997).** (A 9-item version without "followed around in stores" is also common; drop that item if you prefer it.)

**Minority stress → Autistic minority stress (Botha & Frost, 2020).** The autistic-population adaptation of the minority stress model. Not a one-click download; obtain the items from the [paper](https://journals.sagepub.com/doi/10.1177/2156869318804297) and its materials, or by contacting the author, and confirm terms of use. There are also newer autistic minority-stress and internalized-stigma measures worth checking. Slot set to 7-point Likert.

**Cultural / racial code-switching → no single validated scale.** This is the honest gap. There isn't one canonical free instrument the way there is for masking, so you'll likely adapt items from the workplace code-switching literature (the McCluney/Durkee tradition) and validate them yourself. That's actually part of the contribution in Paper 1. Kept as adapted items, 5-point.

**Strengths → no standard licensed inventory.** Self-reported autistic strengths are an emerging area (Lampinen et al., 2026, is a study, not a distributed scale), so this stays a self-built block for now, and validating it is itself novel. 5-point.

---

## What this means practically

Two of the five can be made fully validated right now: the CAT-Q (free) and the Everyday Discrimination Scale (free). Minority stress is obtainable with a bit of legwork and a licence check. Code-switching and strengths don't have off-the-shelf validated instruments, so for those the honest path is to build and validate your own, which the papers already frame as part of the work rather than a shortcut.

One more thing worth saying plainly. For the fun, public-facing version of the app, short paraphrased items are fine and friendlier. The full validated instruments belong in the **research** version, behind consent, aimed at the DIF study, where fidelity matters and length is acceptable because those users have opted in. The slot architecture lets the same codebase serve both: keep placeholders for casual users, flip to the licensed instruments for a research deployment.

---

*Do not deploy the validated instruments publicly without confirming each one's terms of use, and cite each instrument in any published work. The DIF study in particular requires the exact original items.*
