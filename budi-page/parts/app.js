/* =========================================================
   共用狀態
   ========================================================= */
var $ = function (s) { return document.querySelector(s); };
var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
var bubble = $('#bubble'), sayEl = $('#say'), subEl = $('#sub'), qEl = $('#qmark');
var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
var state = {
  lang: 'id',          // Budi 說話的語言
  expr: 'neutral',
  talking: 0,
  busy: false,
  lastInput: performance.now(),
  pointer: null,
  pointerAt: 0,
  view: 'both'
};
var token = 0;
var has3D = false;
var TAB = null;        // 平板在 3D 裡的位置（3D 建好後填入）
function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
function touch() { state.lastInput = performance.now(); }
function markExpr() {}
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function isNarrow() { return window.innerWidth <= 760 || window.innerWidth / window.innerHeight <= 1; }
function press(group, el) {
  group.forEach(function (b) {
    var on = b === el;
    b.setAttribute('aria-pressed', String(on));
    if (b.hasAttribute('aria-checked')) b.setAttribute('aria-checked', String(on));
  });
}

/* =========================================================
   面板：分頁、說話語言、技術說明
   ========================================================= */
var tabs = $$('.tab');
function showTab(id) {
  tabs.forEach(function (t) {
    var on = t.id === 'tab-' + id;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    $('#' + t.getAttribute('aria-controls')).hidden = !on;
  });
  $('#panel-body').scrollTop = 0;
}
tabs.forEach(function (t, i) {
  t.addEventListener('click', function () { showTab(t.id.slice(4)); });
  t.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    n.focus(); n.click();
  });
});
$('#safe-tag').addEventListener('click', function () { showTab('safe'); });
$('#jump-alarm').addEventListener('click', function () { showTab('day'); goStep(6); });

var speakBtns = $$('#speak-seg button');
speakBtns.forEach(function (b) {
  b.addEventListener('click', function () { press(speakBtns, b); state.lang = b.dataset.lang; });
});

var TECH = {
  asr: ['語音轉文字（ASR）', '老師傅不必打字。對著平板把處理經驗說一遍，系統轉成文字，再送主管審核。17:40 那一段就是這樣補上紀錄的。'],
  ocr: ['拍照讀字（OCR）', '對著機台銘牌或面板拍照，系統讀出型號和畫面上的文字。看不懂中文的新同事，<em>可以直接上傳照片提問</em>。'],
  rag: ['先查再答（RAG）', 'AI 先在廠內知識庫找相關文件，只根據找到的內容回答，每一段都標上來源編號。<em>找不到就直說查不到</em>，不會自己編。'],
  tr: ['母語翻譯', '同一份中文 SOP，Budi 可以用印尼文問、用印尼文讀；越南籍同事也能用越南文。平板右上角可以切換語言。']
};
var techBtns = $$('#tech-chips .chip');
function showTech(k) {
  press(techBtns, techBtns.filter(function (b) { return b.dataset.k === k; })[0]);
  $('#tech-desc').innerHTML = '<b>' + TECH[k][0] + '</b>' + TECH[k][1];
}
techBtns.forEach(function (b) { b.addEventListener('click', function () { showTech(b.dataset.k); }); });
showTech('asr');

/* =========================================================
   Budi 的對話框
   ========================================================= */
var bubbleTimer = 0, typeTimer = 0;
function say(line) {
  var lang = state.lang;
  var main = lang === 'id' ? line.id : line.zh;
  var sub = lang === 'id' ? line.zh : '';
  clearTimeout(bubbleTimer); clearInterval(typeTimer);
  sayEl.lang = lang === 'id' ? 'id' : 'zh-Hant';
  subEl.textContent = sub;
  bubble.classList.remove('off');
  var est = lang === 'id' ? 420 + main.length * 58 : 380 + main.length * 180;
  var chars = Array.from(main), shown = 0;
  sayEl.textContent = '';
  typeTimer = setInterval(function () {
    shown++;
    sayEl.textContent = chars.slice(0, shown).join('');
    if (shown >= chars.length) clearInterval(typeTimer);
  }, reduceMotion ? 1 : Math.max(18, est / chars.length));
  return new Promise(function (resolve) {
    state.talking = 1;
    setTimeout(function () {
      state.talking = 0;
      sayEl.textContent = main;
      bubbleTimer = setTimeout(function () { bubble.classList.add('off'); }, 3200);
      resolve();
    }, est);
  });
}

/* ---------- 給故事用的 Budi 動作（沒有 3D 時只顯示對話框） ---------- */
function bExpr(n) { state.expr = n; if (has3D) setExpr(n); else qEl.classList.add('off'); }
function bGest(n) { if (has3D) startGesture(n); }
function bLook(ms) { if (has3D && TAB) lookOverride = { x: TAB.c.x, y: TAB.c.y, z: TAB.c.z, until: performance.now() + ms }; }
function bView(v) { markView(v); if (has3D) setView(v); }

/* =========================================================
   平板上的知識管理系統
   ========================================================= */
var kmEl = $('#km');
var km = {
  lang: 'id', screen: 'login', user: 'budi', msgs: [], input: '', prefill: null,
  doc: null, docFrom: 'chat', approved: false, asked: [],
  up: { phase: -1, sec: 0, text: '' }
};
var kmListeners = [];
function kmEmit(name, data) { kmListeners.forEach(function (f) { f(name, data); }); }
function t(k) { return T[km.lang][k]; }
function clock() { var d = new Date(); return '2026/11/28 ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }

var LANG_BTN = { zh: '繁體中文', id: 'Bahasa Indonesia', vi: 'Tiếng Việt' };
var LANG_SHORT = { zh: '中', id: 'ID', vi: 'VI' };

function langPills(cls) {
  return Object.keys(LANG_BTN).map(function (l) {
    return '<button type="button" class="' + (km.lang === l ? 'on' : '') + '" data-act="lang" data-v="' + l + '"' +
      (cls === 'short' ? ' aria-label="' + LANG_BTN[l] + '"' : '') + '>' + (cls === 'short' ? LANG_SHORT[l] : LANG_BTN[l]) + '</button>';
  }).join('');
}

function htmlLogin() {
  return '<div class="k-login"><div class="k-lcard">' +
    '<div class="k-lhead"><div class="k-logo">AI</div><div><b>' + t('app') + '</b><small>' + t('appSub') + '</small></div></div>' +
    '<div class="k-field"><span>' + t('account') + '</span><div class="k-input">budi.new</div></div>' +
    '<div class="k-field"><span>' + t('password') + '</span><div class="k-input">••••••••</div></div>' +
    '<div class="k-field"><span>' + t('language') + '</span><div class="k-langs">' + langPills() + '</div></div>' +
    '<button type="button" class="k-primary pulse" data-act="login">' + t('login') + '</button>' +
    '<div class="k-note">' + t('demoNote') + '</div>' +
    '</div></div>';
}

function htmlTop() {
  var title = { dashboard: t('app'), chat: t('titleChat'), upload: t('titleUp'), doc: t('titleKb'), kb: t('titleKb') }[km.screen];
  var navOn = { dashboard: 'dashboard', chat: 'chat', upload: 'upload', doc: 'kb', kb: 'kb' }[km.screen];
  var nav = [['dashboard', 'navDash'], ['chat', 'navChat'], ['upload', 'navUp'], ['kb', 'navKb']].map(function (n) {
    return '<button type="button" class="' + (navOn === n[0] ? 'on' : '') + '" data-act="nav" data-v="' + n[0] + '">' + t(n[1]) + '</button>';
  }).join('');
  var master = km.user === 'master';
  return '<div class="k-top">' +
    '<div class="k-brand"><div class="k-logo">AI</div><div><small>' + t('os') + '</small><b>' + title + '</b></div></div>' +
    '<nav class="k-nav">' + nav + '</nav>' +
    '<div class="k-right"><div class="k-lang">' + langPills('short') + '</div>' +
    '<div class="k-user' + (master ? ' master' : '') + '"><span class="av">' + (master ? '王' : 'B') + '</span><span>' + (master ? '王師傅' : 'Budi') +
    '<small>' + t(master ? 'roleMaster' : 'roleNew') + '</small></span></div></div>' +
    '</div>';
}

function htmlDash() {
  var qa = [['chat', '💬', 'qaChat', 'qaChatS'], ['kb', '📚', 'qaKb', 'qaKbS'], ['upload', '📤', 'qaUp', 'qaUpS'], ['kb', '🗂️', 'qaMine', 'qaMineS']];
  return '<div class="k-dash">' +
    '<div class="k-h1">' + t('welcome') + '</div>' +
    '<dl class="k-stats">' +
    '<div class="k-stat"><dt>' + t('myRole') + '</dt><dd>' + t('roleNew') + '</dd></div>' +
    '<div class="k-stat"><dt>' + t('prefLang') + '</dt><dd>' + t('langName') + '</dd></div>' +
    '<div class="k-stat"><dt>' + t('status') + '</dt><dd>' + t('active') + '</dd></div>' +
    '</dl>' +
    '<div class="k-h2">' + t('quick') + '</div>' +
    '<div class="k-quick">' + qa.map(function (q, i) {
      return '<button type="button" class="k-qa' + (i === 0 && STEP_KEYS[storyIdx] ? ' pulse' : '') + '" data-act="nav" data-v="' + q[0] + '"><span class="ic">' + q[1] + '</span><span><b>' + t(q[2]) + '</b><small>' + t(q[3]) + '</small></span></button>';
    }).join('') + '</div>' +
    '</div>';
}

function cite(key, n) {
  if (!n) return '';
  var d = QA[key].src[n - 1];
  return '<button type="button" class="cite" data-act="doc" data-v="' + d + '">[' + n + ']</button>';
}
function htmlAnswer(key) {
  var a = QA[key].a[km.lang], h = '';
  if (a.none) h += '<div class="none">' + esc(a.none) + '</div>';
  if (a.lead) h += '<p>' + esc(a.lead) + '</p>';
  function list(items) { return '<ul>' + items.map(function (it) { return '<li>' + esc(it[0]) + cite(key, it[1]) + '</li>'; }).join('') + '</ul>'; }
  if (a.list) h += list(a.list);
  if (a.secs) a.secs.forEach(function (s) { h += '<h4>' + esc(s[0]) + '</h4>' + list(s[1]); });
  if (a.note) h += '<div class="note">' + esc(a.note) + '</div>';
  var src = QA[key].src;
  if (src.length) {
    h += '<div class="k-srcs"><span>' + t('srcs') + '</span>' + src.map(function (d, i) {
      return '<button type="button" class="k-src' + (DOCS[d].fresh ? ' new' : '') + '" data-act="doc" data-v="' + d + '"><b>[' + (i + 1) + ']</b>' + esc(DOCS[d].title) + '</button>';
    }).join('') + '</div>';
  }
  return '<div class="k-ans">' + h + '</div>';
}
function htmlLog(m) {
  var Q = QA[m.key], p = m.phase, h = '<ul class="k-log"><div class="lh">' + t('logH') + '</div>';
  h += '<li class="' + (p === 0 ? 'run' : 'ok') + '">' + t('log1') + '</li>';
  if (p >= 1) h += '<li class="ok">' + t('log2') + ' ' + Q.checked + '</li>';
  if (p >= 2) {
    h += '<li class="ok">' + (Q.src.length ? t('log3') : t('log3none')) + '</li>';
    Q.src.forEach(function (d, i) { h += '<li class="src-l">[' + (i + 1) + '] ' + esc(DOCS[d].title) + '</li>'; });
  }
  if (p >= 3) h += '<li class="' + (p === 3 ? 'run' : 'ok') + '">' + t('log4') + '</li>';
  if (p >= 4) h += '<li class="ok">' + (Q.none ? t('log5none') : t('log5')) + '</li>';
  return h + '</ul>';
}
function htmlSugg() {
  return '<div class="k-sugg">' + SUGG.map(function (k) {
    return '<button type="button" data-act="sugg" data-v="' + k + '">' + esc(QA[k].q[km.lang]) + '</button>';
  }).join('') + '</div>';
}
function htmlMsgs() {
  if (!km.msgs.length) {
    return '<div class="k-empty"><b>' + t('emptyT') + '</b><p>' + t('emptyP') + '</p>' + htmlSugg() + '</div>';
  }
  return km.msgs.map(function (m) {
    if (m.role === 'user') {
      var txt = m.key !== 'unknown' ? QA[m.key].q[km.lang] : m.text;
      return '<div class="k-u"><div class="meta">' + t('you') + '・' + m.time + '</div><div class="txt">' + esc(txt) + '</div></div>';
    }
    var body;
    if (m.key === 'unknown') body = '<div class="k-ans"><p>' + t('unknown') + '</p>' + htmlSugg() + '</div>';
    else body = htmlLog(m) + (m.phase >= 4 ? htmlAnswer(m.key) : '');
    return '<div class="k-ai"><div class="av">AI</div><div class="card"><div class="meta">' + t('ai') + '・' + m.time + '</div>' + body + '</div></div>';
  }).join('');
}
function htmlChat() {
  var hist = km.asked.slice().reverse().map(function (k, i) {
    var q = k === 'unknown' ? '…' : QA[k].q[km.lang];
    return '<div class="k-hist' + (i === 0 ? ' on' : '') + '">' + esc(q) + '<small>' + t('today') + '</small></div>';
  }).join('');
  var demos = ['展示｜查無機台知識', '展示｜印尼文', '展示｜越南文', '展示｜AI 不取得管理權限'].map(function (s) {
    return '<div class="k-hist">' + s + '<small>2026/11/27</small></div>';
  }).join('');
  var ready = km.prefill && km.input === QA[km.prefill].q[km.lang];
  var busy = km.msgs.some(function (m) { return m.role === 'ai' && m.phase < 4; });
  return '<aside class="k-side"><button type="button" class="k-new" data-act="newchat">＋ ' + t('newChat') + '</button>' + hist + demos + '</aside>' +
    '<section class="k-chat"><div class="k-msgs" id="k-msgs">' + htmlMsgs() + '</div>' +
    '<div class="k-compose"><div class="k-box">' +
    '<textarea id="k-ta" rows="2" placeholder="' + t('placeholder') + '" aria-label="' + t('placeholder') + '">' + esc(km.input) + '</textarea>' +
    '<button type="button" class="k-cam" aria-label="photo" title="' + t('fine1') + '">📷</button>' +
    '<button type="button" class="k-send' + (ready && !busy ? ' pulse' : '') + '" data-act="send"' + (busy ? ' disabled' : '') + '>' + t('send') + '</button>' +
    '</div><div class="k-fine"><span>' + t('fine1') + '</span><span>' + t('fine2') + '</span></div></div></section>';
}
function htmlDoc() {
  var d = DOCS[km.doc];
  return '<div class="k-doc"><div class="k-crumb">' + t('titleKb') + ' / ' + esc(d.title) + '</div>' +
    '<h3>' + esc(d.title) + '</h3>' +
    '<div class="k-meta"><span class="k-pill">' + t('version') + ' v' + (d.fresh ? 1 : 3) + '</span><span class="k-pill ok">' + t('approved') + '</span><span class="k-pill">' + t('machine') + '：' + esc(d.machine) + '</span><span class="k-pill">/knowledge/' + d.no + '</span></div>' +
    '<div class="k-dbody"><ul>' + d[km.lang].map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul></div>' +
    '<button type="button" class="k-back" data-act="back">← ' + t(km.docFrom === 'kb' ? 'kbAll' : 'back') + '</button></div>';
}
function htmlKb() {
  var keys = Object.keys(DOCS).filter(function (k) { return !DOCS[k].fresh || km.approved; });
  return '<div class="k-doc"><h3>' + t('kbAll') + '</h3><div class="k-list">' + keys.map(function (k) {
    var d = DOCS[k];
    return '<button type="button" class="k-row" data-act="doc" data-v="' + k + '">📄 ' + esc(d.title) + '<span class="k-pill ok">' + t('approved') + '</span></button>';
  }).join('') + '</div></div>';
}
var WAVE = Array.from({ length: 34 }, function (_, i) { return 25 + Math.round(70 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6))); });
function htmlUpload() {
  var u = km.up, p = u.phase;
  if (km.user !== 'master') {
    return '<div class="k-doc"><h3>' + t('titleUp') + '</h3><div class="k-dbody">' + t('qaUpS') + '</div></div>';
  }
  var mm = ('0' + Math.floor(u.sec / 60)).slice(-2) + ':' + ('0' + (u.sec % 60)).slice(-2);
  function st(i, label, sub) {
    var cls = p > i ? 'ok' : (p === i ? 'now' : '');
    if (i === 3 && p >= 4) cls = 'ok';
    return '<li class="' + cls + '"><i></i><span>' + label + (sub ? '<small>' + sub + '</small>' : '') + '</span></li>';
  }
  return '<div class="k-up"><div>' +
    '<div class="k-banner">' + t('upBanner') + '</div>' +
    '<h3>' + t('titleUp') + '</h3>' +
    '<div class="k-row2"><div class="k-field"><span>' + t('upTitle') + '</span><div class="k-input">JM150-DC Servo Overload</div></div>' +
    '<div class="k-field"><span>' + t('upMachine') + '</span><div class="k-input">JM150-DC</div></div></div>' +
    '<div class="k-field"><span>' + t('upType') + '</span><div class="k-types"><span>' + t('tDoc') + '</span><span>' + t('tVideo') + '</span><span>' + t('tImg') + '</span><span class="on">🎙 ' + t('tVoice') + '</span></div></div>' +
    '<div class="k-rec' + (p === 0 ? ' live' : '') + '"><span class="dot"></span><span>' + (p === 0 ? t('recording') : t('recorded')) + '</span>' +
    '<div class="k-wave">' + WAVE.map(function (h, i) { return '<i style="height:' + (p === 0 && i > u.sec * 0.8 ? 8 : h) + '%"></i>'; }).join('') + '</div><time>' + mm + '</time></div>' +
    '<div class="k-field"><span>' + t('asrH') + '</span><div class="k-asr" lang="zh-Hant">' + esc(u.text) + (p === 1 ? '<span class="caret"></span>' : '') + '</div></div>' +
    (p >= 4
      ? '<button type="button" class="k-primary pulse" data-act="again">' + t('again') + '</button>'
      : '<button type="button" class="k-primary' + (p === 2 ? ' pulse' : '') + '" data-act="submit"' + (p !== 2 ? ' disabled style="opacity:.45"' : '') + '>' + t('submit') + '</button>') +
    '</div><div><div class="k-h2">' + t('reviewH') + '</div><ol class="k-steps">' +
    st(0, t('st1'), 'JM150-DC・00:42') + st(1, t('st2')) + st(3, t('st3'), p === 3 ? t('st3s') : '') + st(4, t('st4'), p >= 4 ? t('st4s') : '') +
    '</ol></div></div>';
}

function renderKM() {
  kmEl.lang = km.lang === 'zh' ? 'zh-Hant' : km.lang;
  var h;
  if (km.screen === 'login') h = htmlLogin();
  else {
    var body = { dashboard: htmlDash, chat: htmlChat, doc: htmlDoc, kb: htmlKb, upload: htmlUpload }[km.screen]();
    h = htmlTop() + '<div class="k-body">' + body + '</div>';
  }
  kmEl.innerHTML = h;
  var box = $('#k-msgs');
  if (box) box.scrollTop = box.scrollHeight;
}
function renderMsgs() {
  var box = $('#k-msgs');
  if (!box || km.screen !== 'chat') { renderKM(); return; }
  box.innerHTML = htmlMsgs();
  box.scrollTop = box.scrollHeight;
  var send = kmEl.querySelector('.k-send');
  var busy = km.msgs.some(function (m) { return m.role === 'ai' && m.phase < 4; });
  if (send) { send.disabled = busy; send.classList.toggle('pulse', !busy && !!km.prefill && km.input === QA[km.prefill].q[km.lang]); }
}

function setPrefill(k) {
  km.prefill = k;
  km.input = k ? QA[k].q[km.lang] : '';
}
function kmAsk() {
  var text = (km.input || '').trim();
  if (!text) return;
  var key = 'unknown';
  if (km.prefill && text === QA[km.prefill].q[km.lang]) key = km.prefill;
  else {
    Object.keys(QA).forEach(function (k) {
      if (QA[k].q && ['zh', 'id', 'vi'].some(function (l) { return QA[k].q[l] === text; })) key = k;
    });
  }
  if (key === 'alarm2') key = 'alarm';
  if (key === 'alarm' && km.approved) key = 'alarm2';
  var time = clock().slice(-5);
  km.msgs.push({ role: 'user', key: key, text: text, time: time });
  var m = { role: 'ai', key: key, phase: key === 'unknown' ? 4 : 0, time: time };
  km.msgs.push(m);
  km.asked.push(key);
  km.input = ''; km.prefill = null;
  renderKM();
  if (key === 'unknown') return;
  var my = ++kmToken;
  (function step() {
    setTimeout(function () {
      if (my !== kmToken) return;
      m.phase++;
      renderMsgs();
      if (m.phase < 4) step();
      else kmEmit('answer', key);
    }, reduceMotion ? 60 : [700, 650, 900, 1100][m.phase]);
  })();
}
var kmToken = 0;

function startUpload() {
  var my = ++kmToken;
  km.up = { phase: 0, sec: 0, text: '' };
  renderKM();
  var chars = Array.from(MASTER_SAY);
  var tick = setInterval(function () {
    if (my !== kmToken) { clearInterval(tick); return; }
    var u = km.up;
    if (u.phase === 0) {
      u.sec = Math.min(42, u.sec + 3);
      if (u.sec >= 42) u.phase = 1;
    } else if (u.phase === 1) {
      var n = Array.from(u.text).length + 3;
      u.text = chars.slice(0, n).join('');
      if (n >= chars.length) { u.phase = 2; clearInterval(tick); kmEmit('transcribed'); }
    }
    if (km.screen === 'upload') renderKM();
  }, reduceMotion ? 20 : 90);
}

/* ---------- 平板上的點擊 ---------- */
kmEl.addEventListener('input', function (e) {
  if (e.target.id === 'k-ta') {
    km.input = e.target.value;
    var send = kmEl.querySelector('.k-send');
    if (send) send.classList.toggle('pulse', !!km.prefill && km.input === QA[km.prefill].q[km.lang]);
  }
});
kmEl.addEventListener('keydown', function (e) {
  if (e.target.id === 'k-ta' && e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
    e.preventDefault();
    var send = kmEl.querySelector('.k-send');
    if (send && !send.disabled) kmAsk();
  }
});
kmEl.addEventListener('click', function (e) {
  var b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  touch();
  var act = b.dataset.act, v = b.dataset.v;
  if (act === 'lang') {
    var wasPrefill = km.prefill && km.input === QA[km.prefill].q[km.lang];
    km.lang = v;
    if (wasPrefill) km.input = QA[km.prefill].q[km.lang];
    renderKM();
    kmEmit('lang', v);
  } else if (act === 'login') {
    km.screen = 'dashboard'; renderKM(); kmEmit('login');
  } else if (act === 'nav') {
    km.screen = v; renderKM(); kmEmit('nav', v);
  } else if (act === 'sugg') {
    if (km.screen !== 'chat') km.screen = 'chat';
    setPrefill(v); renderKM();
    var ta = $('#k-ta'); if (ta && !isNarrow()) ta.focus();
  } else if (act === 'send') {
    kmAsk();
  } else if (act === 'newchat') {
    km.msgs = []; kmToken++; renderKM();
  } else if (act === 'doc') {
    km.docFrom = km.screen === 'kb' ? 'kb' : 'chat';
    km.doc = v; km.screen = 'doc'; renderKM(); kmEmit('doc', v);
  } else if (act === 'back') {
    km.screen = km.docFrom; renderKM();
  } else if (act === 'submit') {
    km.up.phase = 3; renderKM(); kmEmit('submitted');
    var my = kmToken;
    setTimeout(function () {
      if (my !== kmToken) return;
      km.up.phase = 4; km.approved = true;
      if (km.screen === 'upload') renderKM();
      kmEmit('approved');
    }, reduceMotion ? 200 : 2200);
  } else if (act === 'again') {
    km.user = 'budi'; km.screen = 'chat'; km.msgs = [];
    setPrefill('alarm'); renderKM(); kmEmit('again');
  }
});

/* =========================================================
   放大平板
   ========================================================= */
var modal = $('#modal'), scaler = $('#modal-scaler'), wrap = $('#screen-wrap');
function fitModal() {
  var vw = window.innerWidth, vh = window.innerHeight;
  var compact = vw < 640;
  // 手機：平板改成單欄、窄版，字才看得清楚
  var kw = compact ? 440 : 720;
  var s = Math.min((vw - 52) / kw, compact ? 1 : (vh - 120) / 500, 1.45);
  var kh = compact ? Math.max(420, Math.min(760, (vh - 110) / s)) : 500;
  kmEl.classList.toggle('compact', compact);
  kmEl.style.width = kw + 'px';
  kmEl.style.height = kh + 'px';
  scaler.style.transform = 'scale(' + s + ')';
  scaler.parentNode.style.width = (kw * s + 20) + 'px';
  scaler.parentNode.style.height = (kh * s + 20) + 'px';
  var box = $('#k-msgs'); if (box) box.scrollTop = box.scrollHeight;
}
function openModal() {
  if (!modal.hidden) return;
  scaler.appendChild(kmEl);
  fitModal();
  modal.hidden = false;
  $('#modal-close').focus();
}
function closeModal() {
  if (modal.hidden) return;
  kmEl.classList.remove('compact');
  kmEl.style.width = ''; kmEl.style.height = '';
  (has3D ? wrap : $('#flat-host')).appendChild(kmEl);
  modal.hidden = true;
  if (!has3D) fitFlat();
}
$('#modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
$('#zoom-btn').addEventListener('click', openModal);
$('#open-tablet').addEventListener('click', openModal);
wrap.addEventListener('click', function () { if (wrap.classList.contains('mini')) openModal(); });
window.addEventListener('resize', function () { if (!modal.hidden) fitModal(); if (!has3D) fitFlat(); });

/* ---------- 鏡頭按鈕 ---------- */
var toolBtns = $$('.tool[data-view]');
function markView(v) { press(toolBtns, toolBtns.filter(function (b) { return b.dataset.view === v; })[0]); }
toolBtns.forEach(function (b) { b.addEventListener('click', function () { touch(); bView(b.dataset.view); }); });

/* =========================================================
   故事：Budi 的一天
   ========================================================= */
var STEP_KEYS = [null, null, 'machines', 'cnc', 'defect', 'handover', 'alarm', null];
var BEFORE = [null, null, 'tablet', 'cncQ', 'defectQ', 'handQ', 'alarmQ', 'master'];
var AFTER = { machines: ['found', 'aha', 'nod'], cnc: ['cncA', 'happy', 'nod'], defect: ['defectA', 'happy', 'thumbs'], handover: ['handA', 'happy', 'nod'], alarm: ['alarm', 'worried', 'shrug'], alarm2: ['thanks', 'happy', 'thumbs'] };
var storyIdx = 0;
var stepDone = STEPS.map(function () { return false; });

var stepList = $('#steps');
STEPS.forEach(function (s, i) {
  var li = document.createElement('li');
  li.innerHTML = '<button type="button" class="step" data-i="' + i + '"><span class="t">' + s.time + '</span><b>' + s.title + '</b><i aria-hidden="true"></i></button>';
  stepList.appendChild(li);
});
var stepBtns = $$('.step');
stepBtns.forEach(function (b) { b.addEventListener('click', function () { goStep(+b.dataset.i); }); });
$('#prev').addEventListener('click', function () { if (storyIdx > 0) goStep(storyIdx - 1); });
$('#next').addEventListener('click', function () { goStep(storyIdx < STEPS.length - 1 ? storyIdx + 1 : 0, true); });

function renderStep() {
  var s = STEPS[storyIdx];
  $('#now-time').textContent = s.time;
  $('#now-count').textContent = (storyIdx + 1) + ' / ' + STEPS.length;
  $('#now-title').textContent = s.title;
  $('#now-story').textContent = s.story;
  var todo = $('#now-todo');
  todo.textContent = stepDone[storyIdx] ? s.done : s.todo;
  todo.classList.toggle('done', stepDone[storyIdx]);
  $('#prev').disabled = storyIdx === 0;
  var last = storyIdx === STEPS.length - 1;
  var next = $('#next');
  next.textContent = last ? (stepDone[storyIdx] ? '重新開始這一天' : '從頭開始') : '下一步：' + STEPS[storyIdx + 1].time + ' ' + STEPS[storyIdx + 1].title;
  next.classList.toggle('ready', stepDone[storyIdx]);
  $('#open-tablet').hidden = storyIdx === 1;
  stepBtns.forEach(function (b, i) {
    if (i === storyIdx) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    b.classList.toggle('done', stepDone[i]);
    b.querySelector('i').textContent = stepDone[i] ? '✓' : '';
  });
}
function finish(i) {
  stepDone[i] = true;
  if (i === storyIdx) renderStep();
}

function goStep(i, fromNext) {
  touch();
  var my = ++token;
  if (fromNext && i === 0) {
    // 重新開始一天
    stepDone = STEPS.map(function () { return false; });
    km.msgs = []; km.asked = []; km.lang = 'id'; km.approved = false;
  }
  storyIdx = i;
  kmToken++;
  if (i < 7) { km.approved = false; km.user = 'budi'; }
  km.msgs = km.msgs.filter(function (m) { return m.role === 'user' || m.phase >= 4; });
  if (i === 0) { km.screen = 'login'; km.prefill = null; km.input = ''; }
  else if (i === 1) { km.screen = 'dashboard'; }
  else if (i === 7) { km.user = 'master'; km.screen = 'upload'; startUpload(); }
  else { km.screen = 'chat'; km.msgs = []; setPrefill(STEP_KEYS[i]); }
  renderKM();
  renderStep();
  bubble.classList.add('off');
  perform(i, my);
}

async function perform(i, my) {
  function alive() { return my === token; }
  state.busy = true;
  if (i === 0) {
    bView('both');
    bExpr('happy'); bGest('wave');
    await say(LINES.hello); if (!alive()) return;
    bExpr('hopeful'); bLook(2600);
    await say(LINES.login); if (!alive()) return;
  } else if (i === 1) {
    bView('budi');
    bExpr('focused'); bGest('read');
    await sleep(1700); if (!alive()) return;
    bExpr('confused');
    var p = say(LINES.manual);
    await sleep(900); if (!alive()) return;
    bGest('scratch');
    await p; if (!alive()) return;
    await sleep(500); if (!alive()) return;
    bExpr('hopeful'); bGest('point');
    await say(LINES.help); if (!alive()) return;
    finish(1);
  } else {
    bView(i === 7 ? 'tablet' : 'tablet');
    bExpr(i === 6 ? 'worried' : 'hopeful');
    if (i === 2) bGest('point');
    bLook(3000);
    await say(LINES[BEFORE[i]]); if (!alive()) return;
  }
  state.busy = false;
  bExpr('neutral');
}

kmListeners.push(function (name, data) {
  var my = token;
  function alive() { return my === token; }
  if (name === 'login' && storyIdx === 0) {
    finish(0);
    token++; my = token;
    bExpr('happy'); bGest('nod');
    say(LINES.loginOk).then(function () { if (alive()) bExpr('neutral'); });
  } else if (name === 'answer') {
    var r = AFTER[data];
    if (!r) return;
    if (STEP_KEYS[storyIdx] === data || (storyIdx === 7 && data === 'alarm2')) finish(storyIdx);
    token++; my = token;
    state.busy = true;
    bExpr(r[1]); bGest(r[2]);
    say(LINES[r[0]]).then(function () {
      if (!alive()) return;
      state.busy = false;
      if (data !== 'alarm2') bExpr('neutral');
    });
  } else if (name === 'approved' && storyIdx === 7) {
    bExpr('happy'); bGest('nod');
  } else if (name === 'again' && storyIdx === 7) {
    bExpr('hopeful'); bLook(2500);
  } else if (name === 'transcribed' && storyIdx === 7) {
    bLook(1500);
  }
});

/* ---------- 沒有 3D 時：平板畫面平放在頁面上 ---------- */
function fitFlat() {
  var host = $('#flat-host');
  var w = host.parentNode.clientWidth - 8;
  var s = Math.min(1, w / 720);
  host.style.width = (720 * s) + 'px';
  host.style.height = (500 * s) + 'px';
  kmEl.style.transformOrigin = '0 0';
  kmEl.style.transform = 'scale(' + s + ')';
}
function enterNo3D() {
  document.documentElement.classList.add('no3d');
  $('#flat-host').appendChild(kmEl);
  fitFlat();
  bubble.classList.add('docked');
  var place = function () {
    var r = $('#flat img').getBoundingClientRect();
    bubble.style.left = (r.right + 12) + 'px';
    bubble.style.top = (r.top) + 'px';
  };
  place();
  window.addEventListener('resize', place);
  goStep(0);
}
