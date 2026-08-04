# Suspectrum

A playful, honest self-discovery web app for autistic, ADHD, and AuDHD minds. You take a short quiz, meet your "power set," learn how to use it across friendships, work, and family, and see who your complementary squad is. It also carries a **culturally-fair masking layer** that corrects for how much people from different backgrounds have been pushed to hide their traits.

**This is a prototype and a self-discovery tool, not a clinical assessment.** It cannot diagnose anything. Nothing a user answers leaves their device unless a research pipeline is deliberately connected (see the last section), and even then only with explicit opt-in consent.

---

## What's in here

```
suspectrum/
├── index.html      # the entire app — self-contained, no build step, no dependencies
└── README.md       # this file
```

The whole app is one static HTML file with inline CSS and JavaScript. There is no server, no framework, and no npm install. That's deliberate, it means it runs anywhere and hosts free on GitHub Pages.

---

## Host it on GitHub Pages (free)

1. Create a new GitHub repository, for example `suspectrum`.
2. Add `index.html` (and this README) to the repository. You can drag them into the web uploader, or push from your machine:
   ```bash
   git init
   git add index.html README.md
   git commit -m "Suspectrum prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/suspectrum.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick branch **main** and folder **/ (root)**, and save.
5. Wait about a minute. Your app will be live at `https://YOUR-USERNAME.github.io/suspectrum/`.

That's it, share the link and people can play with it immediately.

---

## How it works, briefly (v0.7)

- **Differentiation spine.** The main test opens with a facet-based screen: the autistic domain across five facets (social communication, sensory, need for sameness, deep focus/interests, literal & detail) and the ADHD domain across five (inattention, hyperactivity, impulsivity, executive/time, emotional intensity), two items each, modelled on the domains and scoring of the AQ-10 and ASRS. It produces two domain scores with a screening line, so a neurotypical person lands **below** and is told so, while autistic, ADHD, and AuDHD profiles separate. For ADHD it also reports the **presentation subtype** (inattentive / hyperactive-impulsive / combined).
- **Profile in detail.** The result breaks each domain into its facets, so you see *which* parts drive your profile, not just a single number.
- **Strengths + resolution.** Eleven powers, two items each. Because a neurodivergent person genuinely endorses many, a short **best-worst "zoom-in" round** (tap most-you / least-you across a few sets) breaks the ceiling ties and ranks what's truly core. Strengths show ranked strongest-first with your primary starred.
- **Your combination.** A multi-strength ("multipotentialite") profile is recognized and framed as an edge, your top three stacked into what the combination uniquely brings and the arenas that reward it, with an honest note on focus/finishing.
- **Weaknesses per type**, a **masking read**, and the **cultural-masking** thesis throughout.
- **Deeper tier.** Optional "go deeper" adds two more items per facet and per power (plus wellbeing routing and context/goal tailoring) and re-uses your zoom-in choices.
- **Dyad linking.** A share link encodes your profile (no identifiers) plus a pairing code; whoever opens it sees an instant squad-compatibility reading and answers relationship-outcome questions, both linked under the code in the Sheet.
- **Opt-in research battery.** Behind consent: masking uses the real **CAT-Q**, discrimination uses the real **Everyday Discrimination Scale**; code-switching, minority stress, and strengths are adapted items pending validation.
- **Non-diagnostic.** It's a suggestive screen modelled on brief tools, and it says so; only a professional can diagnose.

The instrument is v0.7 and is meant to be refined against data (the DIF/validation work in the research plan), not treated as settled science.

---

## The data model (privacy-first by design)

Right now the app **collects nothing and transmits nothing**. `RESEARCH_ENDPOINT` is `null`, and the opt-in research section (the context questions and the consent checkbox) has been removed from the results view for now. All the app does is let a user **download their own result** as a JSON file to keep. Their answers never leave their browser.

The reason it's off: neurodivergence plus ethnicity is special-category personal data, and collecting it responsibly means genuine informed consent, a data-use policy, and, for anything meant for publication, ethics/IRB approval. The plumbing for opt-in collection is still in the repo (`Code.gs`, `SETUP-DATA-COLLECTION.md`, and the dormant opt-in code in `index.html`), so it can be switched back on once that groundwork is in place.

---

## Turning opt-in collection back on (later)

Collection is currently off. When you're ready to gather consented research data, the included `Code.gs` (a tiny Google Apps Script) turns a **Google Sheet you own** into the backend, and each consented response lands as clean columns.

Full walkthrough is in **`SETUP-DATA-COLLECTION.md`**: create the Sheet, paste in `Code.gs`, deploy it as a Web app, restore the opt-in panel in `index.html`, and paste the resulting `/exec` URL into `RESEARCH_ENDPOINT`. Do the consent and ethics groundwork first, that's the part worth not rushing.

Two responsibilities come with real collection, and they matter especially for this project:

- **Consent and a privacy notice.** Because you're collecting ethnicity and health-adjacent data, add a short, plain-language privacy notice and keep the explicit consent checkbox (it's already there). Under regimes like GDPR this is "special category" data and needs a clear lawful basis and genuine, informed opt-in.
- **Representative recruitment.** The whole point is to fix biased tools. If your respondents skew to one group, your future norms will too, and you'll have rebuilt the bias you set out to correct. Recruit deliberately across communities, and plan from the start to test items for **differential item functioning** (whether a question behaves differently for two groups who actually match) — that's the technical definition of the culturally-fair goal.

---

*Prototype v0.2. Not a diagnostic instrument, and not a substitute for professional assessment. The framework treats autism and ADHD as present from early development; trauma and crisis are framed as revealing existing traits, not causing them.*
