# Suspectrum — Measurement Plan

### Mapping every item to a construct and to the analysis it feeds

*v1. This is the bridge between the app and the two studies. It says what each question measures, which validated instrument it stands in for, and which analysis will use it. It reflects both research verdicts now in the project knowledge.*

---

## The two-layer design

The app deliberately separates a short, fun, universal layer from a longer, opt-in research layer. This resolves the tension between an engaging self-discovery tool and a rigorous research instrument, and it matches the ethics: only consenting contributors ever see or answer the sensitive measures.

**Layer 1, the core test (everyone).** As of v0.7 this is a facet-based instrument, not a flat quiz:
- *Differentiation spine* — an autistic domain across five facets (social communication, sensory, need for sameness, deep focus/interests, literal & detail) and an ADHD domain across five (inattention, hyperactivity, impulsivity, executive/time, emotional intensity), two items per facet, direction- and frequency-scored, modelled on the AQ-10 and ASRS. Yields two domain scores with a screening threshold (neurotypical lands below), a type (Not indicated / Some traits / Autistic-leaning / ADHD-leaning / AuDHD), the ADHD presentation subtype, and a facet breakdown.
- *Strengths* — eleven powers, two items each, plus a **best-worst (MaxDiff) resolution round** that breaks ceiling ties so the ranking reflects what's most core. A combination layer recognizes multi-strength profiles.
- *Masking* — four short items feeding the masking read.
The deeper tier adds two more items per facet and per power (plus wellbeing and context), re-using the MaxDiff choices.

**Layer 2, the research battery (opt-in only).** Additional items across five constructs, shown only after consent. Masking uses the licensed **CAT-Q** and discrimination the **Everyday Discrimination Scale** (both wired in); code-switching, minority stress, and strengths are adapted items pending validation. The structure, scoring, and pipeline are in place and testable now.

A note on instruments and licensing: the CAT-Q and several scales below are free for non-commercial research use but should be obtained and cited from their sources rather than embedded from memory. Treat the in-app items as a scaffold, not the final validated form.

---

## Construct-to-item-to-analysis map

| Construct | Where in app | Validated instrument to license for deployment | Feeds which study / analysis |
|---|---|---|---|
| **Power profile axes** (11 continuous dimensions) | Core quiz, 11 items | Adapt from AQ/BAPQ-style continuous trait items + self-reported strengths (Lampinen et al. 2026) | **Gap 2**: the continuous axes for the complementarity / similarity response-surface models. Also the affirming result. |
| **AuDHD push-pull** | Core quiz, 3 items | Novel; validate against AQ + ASRS co-occurrence | Profile flavor; internal-conflict reporting; exploratory AuDHD marker |
| **Masking (screening)** | Core quiz, 4 items | CAT-Q (Hull et al. 2019) | **Gap 1**: masking-adjusted scoring in-app; short-form signal |
| **Masking (full)** | Research battery, 3 items | **CAT-Q** full (compensation / masking / assimilation subscales) | **Gap 1**: the DIF / measurement-invariance target across race |
| **Racial-cultural code-switching** | Research battery, 3 items | Workplace/cultural code-switching scale (McCluney/Durkee tradition) | **Gap 1**: discriminant-validity partner to masking; second factor in the 3-construct model |
| **Discrimination + vigilance** | Research battery, 3 items | Everyday Discrimination Scale (Williams) + heightened-vigilance subscale | **Gap 1**: minority-stress indicator |
| **Minority stress (autistic)** | Research battery, 3 items | Botha & Frost autistic minority stress / resilience scales | **Gap 1**: third factor in the 3-construct discriminant-validity model |
| **Strengths (self-report)** | Research battery, 3 items | Self-reported strengths inventory (Lampinen et al. 2026) | **Gap 1**: the truly novel DIF target (strengths measure, race DIF); complements Gap 2 axes |
| **Demographics** | Opt-in context block | Standard categories | **Gap 1**: the grouping variables for DIF/invariance. Target ≥200 per major racial group. |

---

## How the data serves each study

### Gap 1 — the masking / code-switching / minority-stress measurement study

The battery collects, in the same person, masking (CAT-Q), code-switching, discrimination-plus-vigilance, autistic minority stress, and strengths, alongside self-identified race, gender, age, and diagnosis status. That is exactly the dataset the field is missing. The analysis pipeline the app is feeding:

1. **Confirmatory factor analysis** specifying masking, code-switching, and minority-stress vigilance as three distinct latent factors, tested against collapsed alternatives.
2. **Measurement invariance across race**, in the nested sequence configural → metric → scalar (ΔCFI ≤ .01 as the working threshold).
3. **Item-level differential item functioning** across racial groups (IRT / ordinal logistic regression), flagging any item that behaves unequally at equal trait level. This is the flagship, and it is empty in the literature for every adult masking and strengths measure.
4. **Discriminant validity**, showing the three constructs separate from one another and from social anxiety and impression management. (Add a short social-desirability / social-anxiety check before deployment; it is the main threat to discriminant validity.)

Sampling implication for recruitment: DIF is data-hungry, so aim for ≥200 respondents per major racial group, with deliberate oversampling of the smallest, and community-participatory item review before launch.

### Gap 2 — the dyadic complementarity study

The eleven continuous power axes are the profile dimensions. To test complementarity properly, pairs of respondents (friends or coworkers) each complete the profile, and outcomes are modeled with:

1. **APIM with response-surface / polynomial regression**, not naive difference scores, so similarity and complementarity are distinguishable features of a surface rather than assumed.
2. A **competitive test of three models** on the same data: main effects only, similarity (profile congruence), and complementarity (a pre-specified profile-by-profile interaction).
3. The **domain-split hypothesis**: similarity predicts felt closeness and rapport, complementarity predicts task and role fit. Register which axes are expected to complement before collecting data, to avoid the jingle-jangle trap.

Design reach: include autistic-autistic, ADHD-ADHD, and AuDHD dyads, and at least one sustained or real-coworking context, since the existing dyadic literature is autism-centric and mostly brief lab interactions between strangers.

Practical note: dyad linkage is now built. When someone finishes, the app generates a shareable link that carries their profile (encoded in the link, no identifiers) plus a memorable pairing code. The person they send it to takes the test, sees an instant squad-compatibility reading computed on their own device, and answers a few relationship-outcome questions. Both responses carry the same pairing code, so the Sheet can reconstruct dyads, with roles (initiator/joiner), relationship type, and an outcome score, which is exactly the paired data the response-surface models need.

---

## Mapping the powers to the complementarity axes

For the response-surface work, the eleven powers collapse onto a smaller set of continuous axes, which is what the Kirton adaption-innovation model and the "generator vs finisher" logic in the app already imply:

- **Idea-generation ↔ pattern-checking** (Spark, Weaver ↔ Oracle, Archivist) — the cleanest KAI-style complementarity axis.
- **Depth ↔ pace** (Deep Diver ↔ Dynamo, Firefighter).
- **Perception ↔ buffering** (Antenna ↔ Empath).
- **Directness ↔ attunement** (Truth-teller ↔ Empath).
- **Structure-need ↔ novelty-need** (the AuDHD push-pull, at the dyad level).

Complementarity is then a hypothesis about specific divergence on these axes predicting task fit, tested against similarity predicting closeness.

---

## Data governance (unchanged, restated because it now matters more)

The research battery collects special-category data (neurodivergence, ethnicity, minority stress). Keep the enforced consent checkbox, add a plain-language privacy notice before launch, collect no identifiers, and treat community-participatory review as part of the method rather than a courtesy. The whole project fails on its own terms if the sample is not recruited representatively, because unrepresentative norms rebuild the very bias the tool exists to correct.

---

*v1. The in-app research items are paraphrased scaffolds; license and cite the named instruments before real collection. Non-diagnostic throughout.*
