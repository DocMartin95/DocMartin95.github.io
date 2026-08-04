# Turning on opt-in data collection

This connects the Suspectrum app to a **Google Sheet you own**, using a tiny Google Apps Script as the endpoint. It's free, needs no server, and works from a static GitHub Pages site. Once it's on, every consented response lands as a row in your Sheet, one column per field.

Why a Sheet + script instead of a plain Google Form: each response is a nested object with 40-plus values (eleven power scores, eighteen answers, the context block). A Form would force all that into one ugly text field. This approach keeps everything in clean columns, and the app only needs a single URL, no per-field entry IDs to chase. (If you ever do want a real Form UI as well, you still can, but this is the better fit for this data.)

Total time: about ten minutes.

---

## Part 1 · Create the Sheet and the endpoint

1. Go to [sheets.new](https://sheets.new) to create a new Google Sheet. Name it something like *Suspectrum Responses*.
2. In that Sheet, open **Extensions → Apps Script**. A code editor opens in a new tab.
3. Delete the sample `function myFunction() {}` that's there.
4. Open the `Code.gs` file from this project, copy the **whole thing**, and paste it into the Apps Script editor.
5. Click the **Save** icon (disk). You can rename the script project if you like.
6. Optional but tidy: in the toolbar, choose the function `setup` from the dropdown and click **Run**. The first run asks you to authorize, review and allow it (it's your own script acting on your own Sheet). This creates the header row immediately. If you skip this, the headers get created automatically on the first real response.

---

## Part 2 · Deploy it as a web app

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set:
   - **Description**: anything, e.g. "Suspectrum endpoint v1"
   - **Execute as**: **Me** (your account)
   - **Who has access**: **Anyone**
4. Click **Deploy**, authorize if prompted, and copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfyc.....long.....string/exec`
5. Quick check: paste that URL into a browser tab. You should see `{"ok":true,"service":"suspectrum","ready":true}`. That means the endpoint is live.

> If you ever change `Code.gs`, you must **Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy** for the change to go live. Editing the code alone doesn't update the running web app.

---

## Part 3 · Wire the app to it

> **Note:** research collection is currently **turned off** in this build, and the opt-in panel (context questions + consent) was removed from `index.html` at the maker's request. To turn collection on, follow Parts 1–3 below and then restore the opt-in panel in the results view (it's preserved in the earlier build).

1. Open `index.html` and find this line near the JavaScript comment "DATA COLLECTION":
   ```js
   const RESEARCH_ENDPOINT=null;
   ```
2. Replace `null` with your web app URL in quotes:
   ```js
   const RESEARCH_ENDPOINT="https://script.google.com/macros/s/AKfyc....../exec";
   ```
3. Save `index.html` and push/re-upload it to your GitHub repo (same as when you first deployed the page).

That's it. The app is now collecting.

---

## Part 4 · Test the whole loop

1. Open your live GitHub Pages URL (not the local file, so it behaves like a real visitor).
2. Take the quiz, reach the results, expand **"Optional: add context for research,"** fill a couple of fields, tick the consent box, and click **Package my contribution**.
3. Go back to your Google Sheet. Within a few seconds a new row should appear in the `responses` tab.

If no row appears: re-check that the URL ends in `/exec`, that "Who has access" is **Anyone**, and that you deployed a **new version** after any code change. The browser won't show an error (the request is fire-and-forget by design), so the Sheet is your source of truth.

---

## What lands in the Sheet (column dictionary)

| Column | Meaning |
|---|---|
| `received_at` | server timestamp when the row was saved |
| `client_timestamp` | when the person finished, from their browser |
| `version` | app/data schema version |
| `consent` | TRUE only if they ticked the consent box |
| `primary` | their top strength id (blank if not neurodivergent-positive) |
| `nd_type` | Not strongly indicated / Some traits / Autistic-leaning / ADHD-leaning / AuDHD |
| `nd_positive` | TRUE if either axis cleared the screening threshold |
| `mask` | masking load score, 0–100 |
| `autism_score`, `adhd_score` | screening axis scores, 0–100 (from the differentiation items) |
| `power_diver` … `power_weaver` | all eleven strength scores, 0–100 |
| `ctx_age`, `ctx_gender`, `ctx_ethnicity`, `ctx_diagnosis` | optional context (blank if skipped) |
| `ans_1` … `ans_18` | raw 1–5 answers from the core quiz, in question order |
| `rq_masking` … `rq_strengths` | the five opt-in research subscales (0–100), blank if the battery was skipped |
| `catq_compensation`, `catq_masking`, `catq_assimilation` | the three CAT-Q subscale scores (0–100) — the granularity the DIF analysis wants |
| `tier` | `quick` or `deep` — whether they did the deeper profile |
| `wellbeing` | burnout/distress score (0–100) from the deeper profile, blank if not taken |
| `goal`, `settings` | what they want help with, and the life areas they flagged (settings are pipe-separated) |
| `pair_code` | links two responses into a dyad — same code means a pair; blank if solo |
| `role` | `initiator` (shared the compare link) or `joiner` (opened it) |
| `rel_type`, `rel_outcome` | for a dyad: friend/coworker, and how well the pairing works (0–100) |
| `adhd_presentation` | Predominantly inattentive / Predominantly hyperactive-impulsive / Combined (blank if not ADHD-positive) |
| `autism_emphasis` | the autistic facets driving the profile, e.g. Sensory sensitivity, Need for sameness (pipe-separated) |
| `signature` | their three top strengths (pipe-separated) |

The full facet breakdown (all ten facet scores) is preserved inside `raw_json` for analysis.
| `raw_json` | the full original payload, as a backstop |

This is exactly the shape both research runs will eventually want: masking scores next to demographics (for the fairness / differential-item-functioning work), and full item-level answers (so the instrument can be refined and re-scored later).

---

## Before you collect from real people, three responsibilities

**Consent and a privacy notice.** You're gathering neurodivergence and ethnicity data, which counts as special-category personal data under laws like GDPR. Keep the consent checkbox (it's already wired so the button won't submit without it), and add a short, plain-language privacy notice to the page saying what you collect, why, that it's anonymous, and that it's for research. Never collect names or emails.

**Anonymity in practice.** The app sends no identifiers, and the Sheet stores none. Keep it that way. If you later add anything that could identify someone, revisit the consent language first.

**Representative recruitment.** The entire point of this project is to fix tools that misread under-represented groups. If the people who fill it in skew to one demographic, your future norms will too. Recruit deliberately across communities, and plan from the start to test items for differential item functioning across groups once you have enough data.

---

*Collection is off in this build: `RESEARCH_ENDPOINT` is `null` and the opt-in panel was removed, so nothing is gathered or transmitted, and people can still download their own result. Turn collection on only once you've handled consent, a short data-use notice, and (for publishable work) ethics/IRB approval.*
