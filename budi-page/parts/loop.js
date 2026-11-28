
/* =========================================================
   點擊 3D 物件：Budi、手冊、平板、樣品、機台
   ========================================================= */
var pickables = [budi, tg, sample, machine];
function pick(e) {
  var r = renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  var hits = raycaster.intersectObjects(pickables, true);
  if (!hits.length) return null;
  var o = hits[0].object;
  while (o) {
    if (o === book) return 'book';
    if (o === tg) return 'tablet';
    if (o === sample) return 'sample';
    if (o === machine) return 'machine';
    if (o === budi) return 'budi';
    o = o.parent;
  }
  return null;
}
var pokeN = 0;
async function poke(kind) {
  if (kind === 'tablet' && isNarrow()) { openModal(); return; }
  var my = ++token;
  state.busy = true; touch();
  var line, ex, gs;
  if (kind === 'book') { line = LINES.book; ex = 'confused'; gs = 'read'; }
  else if (kind === 'tablet') { line = LINES.tablet; ex = 'hopeful'; gs = 'point'; }
  else if (kind === 'sample') { line = LINES.sample; ex = 'worried'; gs = 'point'; }
  else if (kind === 'machine') { line = LINES.machine; ex = 'aha'; gs = 'nod'; }
  else {
    var opts = [[LINES.poke1, 'hopeful', 'nod'], [LINES.poke2, 'happy', null], [LINES.poke3, 'aha', null]];
    var p = opts[pokeN++ % opts.length];
    line = p[0]; ex = p[1]; gs = p[2];
  }
  bExpr(ex);
  if (gs) bGest(gs);
  await say(line);
  if (my !== token) return;
  await sleep(700);
  if (my !== token) return;
  bExpr('neutral');
  state.busy = false;
}

/* =========================================================
   鏡頭
   ========================================================= */
controls.minAzimuthAngle = -0.8;
controls.maxAzimuthAngle = 0.6;
controls.maxDistance = 6;
controls.minDistance = 0.45;
var view = { w: 1, h: 1, ox: 0, oy: 0, fx: 0, fy: 0, fw: 1, fh: 1 };
var V3 = THREE.Vector3;
function hdrCut() {
  // 電腦版：作品卡蓋住左上角，看平板時把畫面往下移開
  if (isNarrow()) return 0;
  return $('.hdr').getBoundingClientRect().bottom;
}
function tabletDist() {
  var tanH = Math.tan(camera.fov * Math.PI / 360);
  var hFit = 0.155 / (tanH * (view.fh - hdrCut()) / view.h);
  var wFit = 0.22 / (tanH * view.fw / view.h);
  return Math.max(hFit, wFit) * 1.34;
}
var VIEWS = {
  both: function () { return { t: new V3(-0.12, 0.98, 0.05), dir: new V3(0.12, 0.2, 1), d: isNarrow() ? 5.0 : 4.0 }; },
  budi: function () { return { t: new V3(0.32, 1.38, -0.04), dir: new V3(-0.22, 0.12, 1), d: isNarrow() ? 3.0 : 2.35 }; },
  tablet: function () {
    var d = tabletDist(), dir = TAB.n.clone().normalize();
    var up = new V3(0, 1, 0).addScaledVector(dir, -dir.y).normalize();
    var perPx = 2 * d * Math.tan(camera.fov * Math.PI / 360) / view.h;
    return { t: TAB.c.clone().addScaledVector(up, hdrCut() / 2 * perPx), dir: dir, d: d };
  }
};
var camAnim = null;
function setView(name, instant) {
  state.view = name;
  var v = VIEWS[name]();
  var toT = v.t;
  var toP = toT.clone().add(v.dir.normalize().multiplyScalar(v.d));
  if (instant || reduceMotion) { controls.target.copy(toT); camera.position.copy(toP); controls.update(); return; }
  camAnim = { t: 0, dur: 1.3, fT: controls.target.clone(), tT: toT, fP: camera.position.clone(), tP: toP };
}

function resize() {
  var w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  var narrow = isNarrow();
  var panel = $('.panel').getBoundingClientRect();
  var hdr = $('.hdr').getBoundingClientRect();
  if (narrow) {
    view.fx = 0; view.fw = w;
    view.fy = hdr.bottom; view.fh = Math.max(120, panel.top - hdr.bottom);
  } else {
    view.fx = 0; view.fw = panel.left; view.fy = 0; view.fh = h;
  }
  view.ox = w / 2 - (view.fx + view.fw / 2);
  view.oy = h / 2 - (view.fy + view.fh / 2);
  view.w = w; view.h = h;
  camera.setViewOffset(w, h, view.ox, view.oy, w, h);
  camera.fov = narrow ? 36 : 30;
  camera.updateProjectionMatrix();
  if (!camAnim && state.view) setView(state.view, true);
}
window.addEventListener('resize', resize);

/* =========================================================
   把系統畫面貼到 3D 平板上（四個角投影 → CSS matrix3d）
   ========================================================= */
function solve8(A, b) {
  var n = 8, i, j, k;
  for (i = 0; i < n; i++) A[i].push(b[i]);
  for (i = 0; i < n; i++) {
    var max = i;
    for (k = i + 1; k < n; k++) if (Math.abs(A[k][i]) > Math.abs(A[max][i])) max = k;
    var tmp = A[i]; A[i] = A[max]; A[max] = tmp;
    if (Math.abs(A[i][i]) < 1e-12) return null;
    for (k = i + 1; k < n; k++) {
      var f = A[k][i] / A[i][i];
      for (j = i; j <= n; j++) A[k][j] -= f * A[i][j];
    }
  }
  var x = new Array(n);
  for (i = n - 1; i >= 0; i--) {
    var s = A[i][n];
    for (j = i + 1; j < n; j++) s -= A[i][j] * x[j];
    x[i] = s / A[i][i];
  }
  return x;
}
function homography(w, h, P) {
  var S = [[0, 0], [w, 0], [0, h], [w, h]], A = [], b = [];
  for (var i = 0; i < 4; i++) {
    var sx = S[i][0], sy = S[i][1], dx = P[i][0], dy = P[i][1];
    A.push([sx, sy, 1, 0, 0, 0, -sx * dx, -sy * dx]); b.push(dx);
    A.push([0, 0, 0, sx, sy, 1, -sx * dy, -sy * dy]); b.push(dy);
  }
  var x = solve8(A, b);
  if (!x) return null;
  return 'matrix3d(' + [x[0], x[3], 0, x[6], x[1], x[4], 0, x[7], 0, 0, 1, 0, x[2], x[5], 0, 1].map(function (v) { return v.toFixed(8); }).join(',') + ')';
}
var _pv = new THREE.Vector3(), _cv = new THREE.Vector3(), lastMat = '';
function positionScreen() {
  if (!modal.hidden) { wrap.classList.add('hide'); return; }
  _cv.copy(camera.position).sub(TAB.c);
  var facing = _cv.dot(TAB.n) > 0.02;
  var pts = [], ok2 = facing;
  for (var i = 0; i < 4 && ok2; i++) {
    _pv.copy(TAB.corners[i]).applyMatrix4(camera.matrixWorldInverse);
    if (_pv.z > -0.05) { ok2 = false; break; }
    _pv.copy(TAB.corners[i]).project(camera);
    pts.push([(_pv.x * 0.5 + 0.5) * view.w, (-_pv.y * 0.5 + 0.5) * view.h]);
  }
  if (!ok2) { wrap.classList.add('hide'); return; }
  var m = homography(720, 500, pts);
  if (!m) { wrap.classList.add('hide'); return; }
  wrap.classList.remove('hide');
  if (m !== lastMat) { wrap.style.transform = m; lastMat = m; }
  var wpx = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
  wrap.classList.toggle('mini', isNarrow() || wpx < 720 * 0.6);
}

/* =========================================================
   對話框跟著 Budi
   ========================================================= */
function positionOverlays() {
  H.getWorldPosition(headPos);
  var top = headPos.clone(); top.y += 0.24;
  top.project(camera);
  var x = (top.x * 0.5 + 0.5) * view.w, y = (-top.y * 0.5 + 0.5) * view.h;
  var narrow = isNarrow();
  var hdr = $('.hdr').getBoundingClientRect();
  var panel = $('.panel').getBoundingClientRect();
  var bw = bubble.offsetWidth, bh = bubble.offsetHeight;
  var right = narrow ? view.w : panel.left;
  var off = x < view.fx + 10 || x > right - 10 || y > view.fy + view.fh;
  var docked = off;
  var bx, by;
  if (docked) {
    // Budi 不在畫面上（例如看平板時），對話框停在左下角
    bx = 16 + (narrow ? 0 : 4);
    by = (narrow ? panel.top - 12 : view.h - 74) - bh;
    if (!narrow) by = Math.max(hdr.bottom + 12, by);
  } else {
    var minX = 12 + bw / 2, maxX = right - 12 - bw / 2;
    var minY = (narrow ? hdr.bottom : 12) + 10 + bh;
    bx = Math.max(minX, Math.min(maxX, x + (narrow ? 0 : 50)));
    by = Math.max(minY, Math.min(view.h - 40, y));
    if (!narrow && by - bh < hdr.bottom + 6) bx = Math.min(maxX, Math.max(bx, hdr.right + 14 + bw / 2));
    if (narrow && y < minY + 4) { bx = view.w / 2; by = panel.top - 54; }
  }
  bubble.classList.toggle('docked', docked);
  bubble.classList.toggle('below', !docked && narrow && y < (hdr.bottom + 14 + bh));
  bubble.style.left = bx + 'px';
  bubble.style.top = by + 'px';
  if (!docked) {
    var tail = Math.max(18, Math.min(bw - 18, x - (bx - bw / 2)));
    bubble.style.setProperty('--tail', tail + 'px');
  }
  var q = headPos.clone(); q.y += 0.2; q.x += 0.13; q.project(camera);
  qEl.style.left = ((q.x * 0.5 + 0.5) * view.w) + 'px';
  qEl.style.top = ((-q.y * 0.5 + 0.5) * view.h) + 'px';
  if (off) qEl.classList.add('off');
}

function idleBrain() {
  var now = performance.now();
  if (state.busy || gesture) return;
  var quiet = now - state.lastInput;
  if (quiet > 9000 && now > idleLook.until + 5000 && Math.random() < 0.004) {
    if (Math.random() < 0.5) {
      lookOverride = { x: TAB.c.x, y: TAB.c.y, z: TAB.c.z, until: now + 1800 };
      idleLook = { until: now + 1800, x: 0, y: 0 };
    } else {
      idleLook = { until: now + 1400, x: (Math.random() < 0.5 ? -1 : 1) * 1.2, y: 1.6, z: 0.8 };
    }
  }
  if (quiet > 30000 && !idleBrain.asked) {
    idleBrain.asked = true;
    var my = ++token;
    state.busy = true;
    bExpr('hopeful');
    say(LINES.idle).then(function () { if (my === token) { bExpr('neutral'); state.busy = false; } });
  }
  if (quiet < 2000) idleBrain.asked = false;
}

function frame() {
  var dt = Math.min(0.1, clock3.getDelta());
  tAll += dt;
  if (camAnim) {
    camAnim.t += dt;
    var k = ease(camAnim.t / camAnim.dur);
    controls.target.lerpVectors(camAnim.fT, camAnim.tT, k);
    camera.position.lerpVectors(camAnim.fP, camAnim.tP, k);
    if (camAnim.t >= camAnim.dur) camAnim = null;
  }
  controls.update();
  var look = applyPose(dt);
  setJoints(tAll, look, dt);
  idleBrain();
  updateMachine(tAll);
  renderer.render(scene, camera);
  camera.updateMatrixWorld();
  positionScreen();
  positionOverlays();
  requestAnimationFrame(frame);
}
controls.addEventListener('start', function () { camAnim = null; touch(); });

window.budi = {
  step: goStep, expr: setExpr, gesture: startGesture, view: setView, km: km, cur: cur,
  camera: camera, controls: controls, g: function () { return gesture && gesture.name; }
};

/* ---------- 開場 ---------- */
wrap.appendChild(kmEl);
resize();
setView('both', true);
requestAnimationFrame(frame);
goStep(0);
