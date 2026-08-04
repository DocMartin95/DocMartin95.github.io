# Suspectrum — Research Run Plan

### Two gaps, ready to run

*Prepared for James · v1. Each gap below is a self-contained research brief with a ready-to-paste prompt at the end. Run them as two separate research runs, the questions and literatures barely overlap, so keeping them apart gives you cleaner output.*

---

## How to use this document

Each of the two gaps has five parts: why it matters, what already exists (so the run starts warm, not cold), the research questions, the search strategy (databases and actual query strings), and an extraction template. Then there's a **Ready-to-paste prompt** in a code block, that's the thing you drop into the research run. The shared context block just below goes at the top of either run.

A note on honesty that will make the output more useful: tell the run to distinguish what's *empirically tested* from what's *conceptual or practitioner lore*. Both of these gaps are surrounded by a lot of confident writing that isn't actually data, and the whole value of your contribution depends on seeing that line clearly.

### Shared context block (paste at the top of either run)

```
CONTEXT: I'm developing Suspectrum, a strengths-based, culturally-fair
self-discovery tool for autistic, ADHD, and AuDHD adults, with a long-term aim
of a validated instrument that corrects for how existing autism/ADHD measures
misread people who have had to mask. It is explicitly non-diagnostic. I need a
rigorous literature scout to find the genuine research gap and tell me whether a
publishable contribution exists.

Ground rules for your search:
- Separate EMPIRICAL/measured findings from CONCEPTUAL essays and practitioner
  writing. Label each source as one or the other.
- Only cite real papers you actually find, with authors, year, venue, and a
  working link or DOI/PMID. Never invent a citation.
- Note publication volume and recency, and flag saturation if >~3 systematic
  reviews on the exact question exist in the last 3 years.
- Prioritize peer-reviewed work, but note relevant preprints, theses, and
  autistic-led scholarship (e.g. the journal Autism in Adulthood, Neurodiversity).
```

---

## GAP 1 · Disentangling autistic masking, cultural code-switching, and minority-stress vigilance in racialized adults

**The claim to test.** A racialized autistic or AuDHD adult may be doing three overlapping kinds of self-management at once: masking autistic traits, code-switching for cultural or racial context, and staying vigilant because of minority stress. These look similar on the surface and get collapsed into a single "masking" score, which likely biases every downstream measure. The question is whether anyone has separated and *measured* these three constructs in the same racialized sample, or whether the space is still purely theoretical.

**What already exists (start warm).** The conceptual groundwork is strong but almost entirely non-empirical. There's a minority-group model of autistic masking and neurotypical privilege ([Karger, Human Development](https://karger.com/hde/article/66/2/113/828423/Conceptualising-Autistic-Masking-Camouflaging-and)), camouflaging framed through social-identity theory as a stigma response ([JADD](https://link.springer.com/article/10.1007/s10803-021-04987-w)), and explicit essays drawing the masking/code-switching parallel ([ASHA LSHSS letter](https://pubs.asha.org/doi/10.1044/2023_LSHSS-23-00037)). On the measurement side there's the CAT-Q as the standard camouflaging instrument and a recent [meta-analytic review of camouflaging quantification methods](https://www.nature.com/articles/s41598-025-06137-z), plus early cross-cultural CAT-Q adaptation work. What appears to be missing is any study that operationalizes all three constructs and tests how they combine in Black or other minoritized autistic/AuDHD adults. That's the gap to confirm.

**Research questions.**
1. Has autistic masking been empirically distinguished from cultural/racial code-switching and from minority-stress coping in the same study? With what measures?
2. What instruments exist for each construct, and have any been validated in racially minoritized autistic or ADHD adults specifically?
3. Is there quantitative evidence on how masking load varies by race/ethnicity, and whether it mediates diagnostic delay or measurement bias?
4. Has differential item functioning or measurement invariance been tested for masking or strengths measures across racial/ethnic groups (as opposed to the deficit-symptom scales where some DIF work exists)?

**Search strategy.** Databases: PubMed, PsycINFO, Web of Science, Scopus, Google Scholar, plus the journals *Autism in Adulthood*, *Autism*, *Neurodiversity*, and *JADD* directly, and preprint servers (PsyArXiv). Query angles, run each separately:

- `(autistic OR autism) AND (masking OR camouflaging) AND ("code-switching" OR "code switching")`
- `(autism OR ADHD) AND camouflaging AND (race OR ethnicity OR "racially minoritized" OR Black)`
- `(autistic masking OR camouflaging) AND ("minority stress" OR discrimination OR stigma)`
- `CAT-Q AND (validation OR "measurement invariance" OR "differential item functioning")`
- `(autism OR neurodivergent) AND masking AND (intersectionality OR "intersectional")`
- `(autism OR ADHD) AND ("differential item functioning" OR "measurement invariance") AND (race OR ethnicity OR gender)`

**Extraction template (per relevant paper).** Authors, year, venue, link · empirical or conceptual · sample (size, race/ethnicity, autistic/ADHD/AuDHD, adult/child) · constructs measured and instruments used · whether masking, code-switching, and minority stress were separated · key finding · limitation the paper names. Then a one-line "does this fill or narrow the gap" verdict.

**Likely contribution and manuscript type.** If the gap holds, the strongest first paper is probably a **conceptual-plus-measurement Perspective or Hypothesis & Theory piece** that proposes a three-construct model and a measurement approach, or a **scoping review** if there's more empirical material than expected. Once your app collects consented data with masking items and demographics, that same model becomes testable as an **original measurement study** (running DIF across groups). Target venues: *Autism in Adulthood* (autistic-led, ideal fit), *Neurodiversity*, *Autism*, *JADD*, or *Frontiers in Psychology*.

**Ready-to-paste prompt for GAP 1.**

```
[Paste the shared CONTEXT block first, then:]

TASK: Scout the literature on whether autistic masking, cultural/racial
code-switching, and minority-stress coping have been empirically separated and
measured in the same racially minoritized autistic or AuDHD adult population.

Search these angles separately and report coverage for each:
1. autistic masking/camouflaging AND code-switching
2. autism/ADHD camouflaging AND race/ethnicity/Black/minoritized
3. autistic masking AND minority stress/discrimination/stigma
4. CAT-Q validation / measurement invariance / differential item functioning
5. autism/neurodivergence masking AND intersectionality
6. autism/ADHD differential item functioning across race/ethnicity/gender

Use PubMed, PsycINFO, Web of Science, Scopus, Google Scholar, and the journals
Autism in Adulthood, Autism, Neurodiversity, and JADD directly. Include relevant
PsyArXiv preprints and theses.

For every relevant source give: authors, year, venue, working link; whether it is
EMPIRICAL or CONCEPTUAL; sample details; which of the three constructs it measured
and with what instrument; and a one-line verdict on whether it fills or narrows
the gap.

Deliver: (a) a "What exists" landscape with citations, split empirical vs
conceptual; (b) a saturation assessment; (c) a specific, arguable gap statement;
(d) the single most publishable contribution and its manuscript type; (e) 3-5
target journals with fit rationale; (f) what data a new tool would need to collect
to test the gap empirically (think masking measures + demographics + fairness
testing).
```

---

## GAP 2 · Dyadic complementarity: which neurodivergent profile pairings actually work, in friendship and coworking

**The claim to test.** The "squad" model assumes specific pairings of neurodivergent profiles amplify each other (a fast idea-generator with a careful pattern-checker, a deep-focuser with a high-energy mover) while others need scaffolding. This is intuitive and widely asserted, but the question is whether *dyadic* complementarity has ever been measured, as opposed to team-level effects or romantic-couple anecdote.

**What already exists (start warm).** The evidence thins out fast once you leave team-level and couples writing. There's solid team-level work, neurodiverse teams linking individual variation to effectiveness ([Journal of Management, 2026](https://journals.sagepub.com/doi/10.1177/20413866261426472)) and a [systematic review of neurodivergence in the workplace](https://journals.sagepub.com/doi/10.1177/10522263251337564), and a small [pilot on autistic/non-autistic online collaboration](https://pmc.ncbi.nlm.nih.gov/articles/PMC12273868/). But specific *pair-level* complementarity, the claim that profile A works well with profile B in friendship or coworking, appears to live almost entirely in practitioner blogs and couples-counseling content. That makes this the more wide-open of your two gaps, and the one your app is best placed to feed with real pairing data.

**Research questions.**
1. Has any study measured dyadic (pair-level) outcomes as a function of the neurodivergent profiles of the two people, in friendship or work contexts?
2. What does the broader organizational-psychology literature on team composition, cognitive diversity, and "faultlines" predict about complementary vs clashing trait pairings, and has it been applied to neurodivergence?
3. Is there evidence on the double-empathy problem at the dyad level, i.e. that mismatch is mutual rather than one person's deficit, that could ground a friction model?
4. What outcome measures (collaboration quality, friendship satisfaction, conflict, complementarity) have been used, and could they be adapted to a self-report pairing tool?

**Search strategy.** Databases: PubMed and PsycINFO for the clinical side, plus Business Source / Web of Science / Scopus and Google Scholar for the organizational-psychology side (this gap is genuinely cross-disciplinary, don't let it default to PubMed only). Query angles:

- `(autism OR ADHD OR neurodivergent) AND (dyad OR pair OR pairing) AND (collaboration OR friendship OR teamwork)`
- `"double empathy" AND (dyad OR interaction OR mismatch)`
- `("team composition" OR "cognitive diversity" OR "team faultlines") AND (neurodiversity OR autism OR ADHD)`
- `(complementarity OR "complementary skills") AND (personality OR cognitive style) AND (team OR dyad)`
- `neurodiverse teams AND (strengths OR performance OR effectiveness)`
- `(autistic OR ADHD) AND (workplace OR coworker) AND (relationship OR collaboration) AND outcomes`

**Extraction template (per relevant paper).** Authors, year, venue, link · empirical or conceptual · level of analysis (individual / dyad / team) · context (friendship / work / romantic) · what pairing or composition variable was tested · outcome measured · finding · whether it supports, refutes, or is silent on pair-level complementarity.

**Likely contribution and manuscript type.** Given how sparse the pair-level evidence is, the honest first move is a **scoping review** that maps what's known across the clinical and organizational literatures and names the untested pairing question, very possibly paired with **pilot data from your app** (people reporting which real pairings work) as a **Brief Report** or **Original Research** once you have responses. This is a strong two-step: review to stake the claim, then your data to test it. Target venues: *Autism in Adulthood*, *Autism*, *Journal of Autism and Developmental Disorders*, and on the org side *Group & Organization Management*, *Journal of Business and Psychology*, or *Frontiers in Psychology* (Organizational Psychology section).

**Ready-to-paste prompt for GAP 2.**

```
[Paste the shared CONTEXT block first, then:]

TASK: Scout the literature on dyadic (pair-level) complementarity between
neurodivergent people, whether specific pairings of autistic/ADHD/AuDHD profiles
have been shown to work well or poorly together in FRIENDSHIP or COWORKING
contexts. Distinguish this sharply from team-level effects and from romantic-couple
anecdote.

This is cross-disciplinary. Search BOTH the clinical literature (PubMed, PsycINFO,
Autism in Adulthood, Autism, JADD) AND the organizational-psychology literature
(Business Source, Web of Science, Scopus, Google Scholar) for team composition,
cognitive diversity, and team-faultline work, then look for crossover.

Search angles, reported separately:
1. autism/ADHD/neurodivergent AND dyad/pair AND collaboration/friendship/teamwork
2. "double empathy" AND dyad/interaction/mismatch
3. team composition / cognitive diversity / faultlines AND neurodiversity
4. complementarity of cognitive styles AND team/dyad outcomes
5. neurodiverse teams AND performance/effectiveness
6. autistic/ADHD coworker relationships AND outcomes

For every relevant source give: authors, year, venue, link; EMPIRICAL or
CONCEPTUAL; level of analysis (individual/dyad/team); context; the pairing or
composition variable tested; outcome measure; finding; and whether it supports,
refutes, or is silent on pair-level complementarity.

Deliver: (a) a "What exists" landscape split by discipline and by
empirical/conceptual; (b) a saturation assessment (I expect this is wide open —
confirm or correct that); (c) a specific gap statement about pair-level
complementarity; (d) recommended manuscript type, addressing a scoping-review +
pilot-data two-step; (e) 3-5 target journals across the clinical and org-psych
sides; (f) which outcome measures could be adapted into a self-report pairing tool.
```

---

## Cross-cutting notes

**Your app is the asset both gaps are missing.** Neither literature has the dataset it needs: Gap 1 needs masking measures collected alongside race/ethnicity so fairness (differential item functioning) can actually be tested, and Gap 2 needs real reports of which pairings work. A deployed Suspectrum that collects consented, anonymized responses produces exactly both. So the sequencing is: run these scouts to stake the conceptual claims (review/perspective papers you can write now), then let the app generate the data that upgrades each into an empirical study. That's a credible path from a fun tool to genuine, co-authorable contributions.

**One methodological thread runs through everything: differential item functioning.** It's the statistical test for whether a question behaves unfairly across groups. Some DIF work exists on deficit-focused childhood symptom scales ([ADHD ratings](https://link.springer.com/article/10.1007/s10802-020-00618-7), [Autism Spectrum Rating Scales](https://journals.sagepub.com/doi/abs/10.1177/0734282920945529)), but not on adult self-report strengths or masking measures. If either run surfaces a DIF study on strengths or masking across race/ethnicity, that's important, flag it immediately, because it would sit right on top of your central premise.

**Guard the sample.** Whichever study you eventually run from your own data, representative recruitment across communities is not optional, it's the thing that keeps you from rebuilding the very bias you're trying to correct.

---

*Prepared v1. Anchor citations above are real and drawn from prior searching; the research runs should verify and extend them, and must not fabricate any source. This plan supports a non-diagnostic tool and a strengths-based research program.*
