/* =========================================================
   姿勢系統（手臂用反向運動學：指定手腕位置，自動算肩與肘）
   ========================================================= */
var JOINT_KEYS = ['hips', 'spine', 'neck', 'head', 'lWr', 'rWr', 'lHip', 'lKn', 'lAn', 'rHip', 'rKn', 'rAn'];
JOINT_KEYS.forEach(function (k) { J[k].rotation.order = 'YXZ'; });

// 閱讀時手冊的朝向：書頁朝向眼睛，左右攤開
var READ_ROT = (function () {
  var n = new THREE.Vector3(0, 0.86, -0.51).normalize();
  var zA = new THREE.Vector3(1, 0, 0);
  var yA = new THREE.Vector3().crossVectors(zA, n).normalize();
  var m = new THREE.Matrix4().makeBasis(n, yA, zA);
  var e = new THREE.Euler().setFromRotationMatrix(m, 'XYZ');
  return [e.x, e.y, e.z];
})();

// 站姿：左手把手冊夾在前臂上
var BASE = {
  hips: [0, 0, 0], spine: [-0.02, 0, 0], neck: [0, 0, 0], head: [0, 0, 0],
  lT: [0.15, 0.1, 0.25], lP: [1, -0.3, -0.8], lWr: [0, 0, 0],
  rT: [-0.215, -0.11, 0.05], rP: [-0.25, 0, -1], rWr: [0, 0.2, 0],
  lHip: [0.0, 0, 0.035], lKn: [0.03, 0, 0], lAn: [-0.03, 0, -0.035],
  rHip: [0.0, -0.12, -0.03], rKn: [0.02, 0, 0], rAn: [-0.02, 0.1, 0.03],
  lCurl: 0.8, rCurl: 0.35, rIdx: 0.3, lThumb: 0.2, rThumb: 0, bookOpen: 0, shrug: 0,
  bOff: [0.0, 0.04, 0.0], bAbs: 0, bAbsP: [0, 0.24, 0.3], bR: [0, 0.9, 0]
};
// 翻閱手冊：雙手在胸前打開書
var READ = {
  lT: [0.14, 0.17, 0.25], lP: [1, -1, -0.4], lWr: [0.3, -0.9, 0],
  rT: [-0.14, 0.17, 0.25], rP: [-1, -1, -0.4], rWr: [0.3, 0.9, 0],
  head: [0.4, 0, 0], neck: [0.12, 0, 0],
  lCurl: 0.45, rCurl: 0.4, rIdx: 0.3, bookOpen: 1,
  bAbs: 1, bAbsP: [0, 0.235, 0.3], bR: READ_ROT
};

var cur = {};
function copyPose(src, dst) { Object.keys(src).forEach(function (k) { dst[k] = Array.isArray(src[k]) ? src[k].slice() : src[k]; }); }
copyPose(BASE, cur);

var gesture = null; // { name, t, dur, fn, cb }
var stance = BASE;
var lookOverride = null;

function lerpPose(a, b, t) {
  var o = {};
  Object.keys(b).forEach(function (k) {
    if (Array.isArray(b[k])) {
      var av = a[k] || BASE[k];
      o[k] = [av[0] + (b[k][0] - av[0]) * t, av[1] + (b[k][1] - av[1]) * t, av[2] + (b[k][2] - av[2]) * t];
    } else {
      var an = a[k] == null ? BASE[k] : a[k];
      o[k] = an + (b[k] - an) * t;
    }
  });
  return o;
}
function ease(t) { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); }
function env(t, a, b, d) { return ease(t / a) * (1 - ease((t - (d - b)) / b)); }

var GESTURES = {
  wave: { dur: 2.8, fn: function (t) {
    var w = env(t, 0.45, 0.55, 2.8);
    var osc = Math.sin((t - 0.45) * Math.PI * 2 * 1.9) * ease((t - 0.35) / 0.3);
    return { w: w, pose: { rT: [-0.38 + osc * 0.045, 0.62, 0.08], rP: [-1, -0.4, 0], rWr: [0, -1.5, osc * 0.35], rCurl: 0, rIdx: 0, rThumb: 0, head: [-0.02, 0, -0.06], spine: [-0.03, 0, 0.03] } };
  } },
  read: { dur: 3.6, fn: function (t) {
    var w = env(t, 0.7, 0.7, 3.6);
    var flip = Math.max(0, Math.sin((t - 1.3) * 2.4)) * ease((t - 1.3) / 0.2) * (1 - ease((t - 2.6) / 0.3));
    var p = Object.assign({}, READ);
    p.rT = [-0.14 + flip * 0.08, 0.17 + flip * 0.06, 0.25 + flip * 0.03];
    return { w: w, pose: p, look: 'book' };
  } },
  scratch: { dur: 2.6, fn: function (t) {
    var w = env(t, 0.5, 0.6, 2.6);
    var osc = Math.sin(t * 15) * ease((t - 0.45) / 0.2);
    return { w: w, pose: { rT: [-0.115, 0.7 + osc * 0.012, -0.03 + osc * 0.008], rP: [-1, 0.5, 0.4], rWr: [0.2, 0.4, -0.3], rCurl: 0.6, rIdx: 0.55, head: [0.06, 0.12, 0.14], neck: [0, 0.05, 0.06] } };
  } },
  point: { dur: 3.0, fn: function (t) {
    var w = env(t, 0.5, 0.6, 3.0);
    return { w: w, pose: { rT: [-0.62, 0.4, 0.3], rP: [0, -1, -0.3], rWr: [0, -1.4, 0], rCurl: 1, rIdx: 0, rThumb: 0.15, spine: [-0.02, -0.16, 0] }, look: t < 1.7 ? 'point' : null };
  } },
  nod: { dur: 1.6, fn: function (t) {
    var w = env(t, 0.15, 0.3, 1.6);
    var n = Math.sin(t * Math.PI * 2 * 1.6) * 0.16 * (1 - ease(t / 1.6));
    return { w: w, pose: { head: [n + 0.04, 0, 0], neck: [n * 0.4, 0, 0] }, additive: true };
  } },
  thumbs: { dur: 2.8, fn: function (t) {
    var w = env(t, 0.5, 0.6, 2.8);
    var bob = Math.sin(t * 5) * 0.012 * ease((t - 0.5) / 0.2);
    return { w: w, pose: { rT: [-0.17, 0.2 + bob, 0.3], rP: [-0.7, -1, 0], rWr: [0, -1.5, 0], rCurl: 1, rIdx: 1, rThumb: 1, head: [-0.03, 0, -0.07], spine: [-0.04, 0, 0.02] } };
  } },
  shrug: { dur: 2.4, fn: function (t) {
    var w = env(t, 0.45, 0.6, 2.4);
    return { w: w, pose: { shrug: 1, rT: [-0.34, 0.04, 0.22], rP: [-0.3, -0.4, -1], rWr: [0, -1.5, 0], rCurl: 0.1, rIdx: 0.05, lT: [0.3, 0.07, 0.25], lP: [0.3, -0.4, -1], head: [0.06, 0, -0.14], neck: [0.03, 0, -0.04] } };
  } },
  readScratch: null
};

function startGesture(name, cb) {
  if (name === 'readScratch') { startGesture('read', cb); return; }
  var g = GESTURES[name];
  if (!g) return;
  if (gesture && gesture.cb) { var old = gesture.cb; gesture.cb = null; old(); }
  gesture = { name: name, t: 0, dur: g.dur, fn: g.fn, cb: cb || null };
}

/* ---------- 兩節手臂的反向運動學 ---------- */
var IK = { A: 0.285, B: 0.258 };
var _S = new THREE.Vector3(), _T = new THREE.Vector3(), _D = new THREE.Vector3(), _P = new THREE.Vector3(),
    _E = new THREE.Vector3(), _W = new THREE.Vector3(), _u = new THREE.Vector3(), _f = new THREE.Vector3(),
    _x = new THREE.Vector3(), _y = new THREE.Vector3(), _m = new THREE.Matrix4();
function solveArm(arm, T, P) {
  var a = IK.A, b = IK.B;
  _S.copy(arm.sh.position);
  _T.set(T[0], T[1], T[2]);
  _D.subVectors(_T, _S);
  var d = Math.min(a + b - 0.002, Math.max(0.08, _D.length()));
  _D.normalize();
  _P.set(P[0], P[1], P[2]);
  _P.addScaledVector(_D, -_P.dot(_D));
  if (_P.lengthSq() < 1e-6) _P.set(0, 0, -1).addScaledVector(_D, -_D.z);
  _P.normalize();
  var ca = (a * a + d * d - b * b) / (2 * a * d);
  var al = Math.acos(Math.max(-1, Math.min(1, ca)));
  _E.copy(_S).addScaledVector(_D, a * Math.cos(al)).addScaledVector(_P, a * Math.sin(al));
  _W.copy(_S).addScaledVector(_D, d);
  _u.subVectors(_E, _S).normalize();
  _f.subVectors(_W, _E);
  _f.addScaledVector(_u, -_f.dot(_u));
  if (_f.lengthSq() < 1e-8) _f.copy(_P).negate();
  _f.normalize();
  _y.copy(_u).negate();
  _x.crossVectors(_y, _f).normalize();
  _m.makeBasis(_x, _y, _f);
  arm.sh.quaternion.setFromRotationMatrix(_m);
  var cb = (a * a + b * b - d * d) / (2 * a * b);
  var beta = Math.acos(Math.max(-1, Math.min(1, cb)));
  arm.el.rotation.set(-(Math.PI - beta), 0, 0);
  return _W;
}

/* ---------- 表情 ---------- */
var E = Object.assign({}, EXPR.neutral), Etgt = Object.assign({}, EXPR.neutral);
function setExpr(name) {
  if (!EXPR[name]) return;
  state.expr = name;
  Etgt = Object.assign({}, EXPR[name]);
  markExpr(name);
}

/* =========================================================
   視線
   ========================================================= */
var raycaster = new THREE.Raycaster();
var ndc = new THREE.Vector2();
var gaze = { hy: 0, hp: 0, ey: 0, ep: 0, sy: 0, sp: 0 };
var sacc = { x: 0, y: 0, next: 0 };
var tmpV = new THREE.Vector3(), headPos = new THREE.Vector3();
var blink = { t: 0, next: 1.5, dur: 0.16, dbl: false };
var idleLook = { until: 0, x: 0, y: 0 };

renderer.domElement.addEventListener('pointermove', function (e) {
  var r = renderer.domElement.getBoundingClientRect();
  state.pointer = { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: -((e.clientY - r.top) / r.height) * 2 + 1 };
  state.pointerAt = performance.now();
  var hit = pick(e);
  renderer.domElement.style.cursor = hit ? 'pointer' : 'grab';
});
renderer.domElement.addEventListener('pointerleave', function () { state.pointer = null; });

var downAt = null;
renderer.domElement.addEventListener('pointerdown', function (e) { downAt = { x: e.clientX, y: e.clientY, t: performance.now() }; touch(); });
renderer.domElement.addEventListener('pointerup', function (e) {
  if (!downAt) return;
  var moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
  var quick = performance.now() - downAt.t < 450;
  downAt = null;
  if (moved > 6 || !quick) return;
  var hit = pick(e);
  if (hit) poke(hit);
});
