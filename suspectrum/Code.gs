/**
 * Suspectrum — opt-in data collection endpoint (Google Apps Script)
 * -------------------------------------------------------------------
 * This turns a Google Sheet into a tiny, free backend for the app.
 * The app POSTs each consented response as JSON; this appends it as one
 * row, one column per field, and keeps the full raw JSON as a backstop.
 *
 * SETUP (full steps in SETUP-DATA-COLLECTION.md):
 *   1. Create a Google Sheet.
 *   2. Extensions > Apps Script. Delete the sample, paste this whole file, Save.
 *   3. (Optional) Run `setup` once to create the header row now.
 *   4. Deploy > New deployment > type "Web app".
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the Web app URL (ends in /exec).
 *   5. Paste that URL into RESEARCH_ENDPOINT in index.html, re-upload to GitHub.
 *
 * PRIVACY: this collects neurodivergence + ethnicity data, which is sensitive.
 * Keep the app's consent checkbox, add a short privacy notice, and never collect
 * names or emails. See the setup guide.
 */

var SHEET_NAME = 'responses';

var POWER_IDS = ['diver','oracle','spark','sentinel','antenna','empath',
                 'fire','truth','archivist','dynamo','weaver'];

var HEADERS = ['received_at','client_timestamp','version','consent',
  'primary','nd_type','nd_positive','mask','autism_score','adhd_score']
  .concat(POWER_IDS.map(function(id){ return 'power_' + id; }))
  .concat(['ctx_age','ctx_gender','ctx_ethnicity','ctx_diagnosis'])
  .concat(range18(function(i){ return 'ans_' + (i + 1); }))
  .concat(['rq_masking','rq_codeswitch','rq_discrimination','rq_minoritystress','rq_strengths'])
  .concat(['catq_compensation','catq_masking','catq_assimilation'])
  .concat(['tier','wellbeing','goal','settings','pair_code','role','rel_type','rel_outcome'])
  .concat(['adhd_presentation','autism_emphasis','signature'])
  .concat(['raw_json']);

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var r = data.result || {};
    var c = data.context || {};
    var a = data.answers || [];
    var rs = data.research || {};
    var g = data.goals || {};
    var dy = data.dyad || {};
    var powers = r.powers || {};

    var row = [
      new Date(), data.timestamp || '', data.version || '', data.consent === true,
      r.primary || '', r.type || '', r.nd_positive === true,
      numOrBlank(r.mask), numOrBlank(r.autism_score), numOrBlank(r.adhd_score)
    ]
    .concat(POWER_IDS.map(function(id){ return numOrBlank(powers[id]); }))
    .concat([c.age || '', c.gender || '', c.ethnicity || '', c.diagnosis || ''])
    .concat(range18(function(i){ return a[i] != null ? a[i] : ''; }))
    .concat([numOrBlank(rs.masking), numOrBlank(rs.codeswitch), numOrBlank(rs.discrimination), numOrBlank(rs.minoritystress), numOrBlank(rs.strengths)])
    .concat([numOrBlank(rs.catq_compensation), numOrBlank(rs.catq_masking), numOrBlank(rs.catq_assimilation)])
    .concat([data.tier || '', numOrBlank(data.wellbeing), g.goal || '', (g.settings && g.settings.join) ? g.settings.join('|') : '', dy.pair_code || '', dy.role || '', dy.rel_type || '', numOrBlank(dy.rel_outcome)])
    .concat([r.adhd_presentation || '', (r.autism_emphasis && r.autism_emphasis.join) ? r.autism_emphasis.join('|') : '', (r.signature && r.signature.join) ? r.signature.join('|') : ''])
    .concat([JSON.stringify(data)]);

    getSheet_().appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Health check: visiting the /exec URL in a browser should show {"ok":true,...}
function doGet() {
  return json_({ ok: true, service: 'suspectrum', ready: true });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Run once manually (optional) to create the header row before the first response.
function setup() {
  getSheet_();
}

/* helpers */
function numOrBlank(v){ return (v === null || v === undefined) ? '' : v; }
function range18(fn){ var out = []; for (var i = 0; i < 18; i++) out.push(fn(i)); return out; }
function json_(obj){
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
