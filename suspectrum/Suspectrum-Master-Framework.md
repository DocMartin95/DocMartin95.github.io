# Suspectrum — Master Framework (v0.7)

### A neurodivergent "powers" framework, a culturally-fair instrument, and a now-validated research program

*This is the master document. It folds in the findings from the two literature scouts now in the project knowledge, and it reflects the current state of the build (app v0.3). The name is still a placeholder.*

---

## 1. The concept, and the three commitments that keep it honest

Suspectrum treats autism, ADHD, and their co-occurrence as natural variation, real strengths bundled with real costs in a world not built for them. The X-Men framing works because a mutation is not good or bad on its own, it is good or bad relative to an environment. Hyperfocus is a liability in a room full of interruptions and a superpower in a quiet room with one deep problem. That is the social model of disability, told in a way people actually find engaging, and the engagement is part of the point, because it is what gets an underserved person to take the thing and believe the affirming result.

Three commitments are load-bearing, and everything else rests on them.

First, trauma reveals rather than creates the power. Autism and ADHD are present from early development, so distress does not switch them on. What crisis, burnout, and late diagnosis do is strip the mask, so traits that were always there become visible, often to the person themselves for the first time. The accurate version of the original idea is that the power was always there, the crisis is when you find out.

Second, these are sliders, not a sorting hat. The powers are dimensional and shift with sleep, stress, and setting. A person is a constellation, not a fixed type, and the tool has to feel like a character sheet with dials rather than a house at Hogwarts.

Third, it affirms without diagnosing. The playful powers layer sits on top and carries the message that you are not broken. Underneath, the tool stays honest that it is a self-discovery mirror and not a clinical instrument, and it routes toward real support when answers suggest distress rather than handing over a badge.

---

## 2. The powers taxonomy, now origin-tagged

The eleven starter powers each map to a real trait construct, and each now carries an origin tag so autism, ADHD, and the AuDHD combination are visible rather than blurred: Deep Diver (monotropism, shared), Oracle (systemizing, autism), Spark (divergent ideation, ADHD), Sentinel (justice sensitivity, autism), Antenna (sensory sensitivity, autism), Empath (affective attunement, shared), Firefighter (crisis-state clarity, ADHD), Truth-teller (bottom-up communication, autism), Archivist (deep special interests, autism), Dynamo (kinetic drive, ADHD), and Weaver (associative cognition, shared). Each is described with what it looks like, where it shines, and its kryptonite, because a power with no cost is not believable and the cost is where people actually need help.

The AuDHD case gets its own treatment. Co-occurring autistic and ADHD wiring is not autism plus ADHD side by side, it is a genuine push-pull, one foot on the gas and one on the brake: craving routine and novelty at once, hyperfocus and scatter, wanting people and needing to withdraw. The app detects this and gives it an "inner squad" reading, because the contradiction is a real feature of the profile, not a personal failing.

---

## 3. The culturally-fair layer, which is the real contribution

Existing tools were normed on a narrow slice of people and misread everyone else. Autism is under-referred in ethnic minorities, ADOS ratings shift with race and gender, and Black and Hispanic children get read as "defiant" rather than ADHD. People from marginalized communities often mask earlier and harder to meet family and community expectations, which means a surface test reads their powers as weakest, exactly backwards, and does it worst to those already least recognized.

The correction has three moves: measure masking load directly, separate autistic masking from cultural code-switching from minority-stress vigilance rather than collapsing them into one number, and read a trait through the mask so that high masking plus a suppressed trait reads as a latent power driven underground, not as absence. The technical name for the fairness goal is differential item functioning, when a question behaves differently for two equally-situated groups, and testing for it is the concrete core of the whole project.

---

## 4. The squad model

Neurodiverse teams outperform through complementary variation, not despite it, and the squad model is really a model of complementary pairs and the scaffolding they need. Synergy comes from pairing a generator with a finisher, a high-perception person with a buffer, depth with pace. Friction is reframed honestly: not villains but combinations that need a shared protocol, and much of the friction is a two-way mismatch, the double empathy problem, rather than one person's deficit. The app focuses on friendship and coworking, as chosen, and leaves romance aside.

---

## 5. Research status: both gaps confirmed, both publishable

Two independent literature scouts (full reports in the project knowledge) tested the two most promising gaps. Both held.

**Masking, code-switching, and minority stress (the measurement gap).** No published study has jointly measured all three constructs in racially minoritized autistic adults, and, more pointedly, nobody has ever tested differential item functioning across race for the CAT-Q or for any adult masking or strengths self-report. The template exists on the wrong axis, White et al. (2024) modeled masking and minority stress together in trans and non-binary autistic adults, just never on race, and never with code-switching added. The flagship contribution is a measurement-invariance and DIF study across race for a masking and strengths instrument, ideally a Registered Report, with a faster conceptual agenda paper to stake priority first. This sits directly on Suspectrum's central premise, and it is confirmably novel.

**Squad complementarity (the dyadic gap).** The closest rigorous science measures similarity, not complementarity: Bolis et al. (2021) found that more similar autistic-trait profiles predicted better friendships, the opposite of a naive "opposites attract" story. The binary autistic/non-autistic match literature is maturing but answers a different question, and nobody has tested a true profile-by-profile complementarity interaction, nor touched ADHD or AuDHD dyads, nor left the brief-lab-stranger setup for real friendship or coworking. The recommended path is a scoping review built around the empty cell plus a pilot that pits similarity against complementarity, with the falsifiable domain-split prediction that similarity drives felt closeness while complementarity drives task fit.

Both verdicts point the same direction on the build: the app should measure what these studies need, and it now does.

---

## 6. The build as it stands (app v0.7)

The app is a playable, non-diagnostic self-discovery tool, hostable free on GitHub Pages, wired for privacy-first opt-in data collection into a Google Sheet the owner controls. Over several iterations it grew from a flat quiz into a facet-based instrument.

The core test does four things. It runs a differentiation spine, an autistic domain across five facets and an ADHD domain across five, two items each, modelled on the AQ-10 and ASRS, producing two domain scores with a screening line so a neurotypical person lands below and is told so, a type (Not indicated, Some traits, Autistic-leaning, ADHD-leaning, AuDHD), the ADHD presentation subtype, and a facet-by-facet breakdown of what drives the profile. It measures the eleven strengths with two items each, then runs a best-worst (MaxDiff) "zoom-in" round, because a neurodivergent person genuinely endorses many strengths, and a rating scale ceilings; the forced most-you/least-you choices break the ties so the ranking reflects what is truly core. It recognizes the multi-strength ("multipotentialite") profile and frames the breadth as an edge, stacking the top three into what the combination uniquely brings and the arenas that reward it, with an honest note on focus and finishing. And it reads masking, gives weaknesses per type, and carries the cultural-masking thesis throughout. An optional deeper tier adds two more items per facet and per power and re-uses the zoom-in choices.

Behind consent, an opt-in research battery feeds the studies: masking uses the licensed CAT-Q and discrimination the Everyday Discrimination Scale (both wired in verbatim), with code-switching, minority stress, and strengths as adapted items pending validation. The data model is exactly what the research needs: facet and strength scores and masking next to self-identified race and other demographics for the fairness work, dyad linkage via a no-identifier pairing code for the complementarity study, and every raw answer preserved. The measurement plan maps each item to its construct and to the specific analysis, invariance and DIF for the first study, APIM with response-surface modeling for the second.

---

## 7. Roadmap and next steps

Stage 1 is underway: draft conceptual and agenda papers for both gaps exist and are ready to refine toward Neurodiversity or Autism in Adulthood. Stage 2 is the flagship empirical work, the race-DIF measurement study and the dyadic complementarity pilot, both best pre-registered. The app is the instrument that generates the datasets neither literature currently has, which is what makes the ambitious version reachable rather than hypothetical.

The pairing-code dyad linkage and the wellbeing routing are now built. The remaining near-term requirement before any real collection is a plain-language privacy notice on the page, because the battery gathers special-category data. The whole project fails on its own terms if the sample is not recruited representatively, so representative recruitment and community-participatory item review are part of the method, not an afterthought. The honest frontier from here is data, not more item-writing: deploy, collect consented responses, and run the invariance/DIF and complementarity work the research plan lays out.

Project artifacts: the two literature scout reports live here in the project knowledge; the drafted Stage 1 papers, the measurement plan, the data-collection setup guide, the app, and its endpoint script live in the project repository delivered in chat.

---

*v0.2 master framework. Non-diagnostic throughout. Autism and ADHD are treated as present from early development; trauma and crisis reveal existing traits rather than causing them.*
