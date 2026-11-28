/* =========================================================
   3D
   ========================================================= */
var stage = $('#stage');
var ok = !!window.THREE;
var renderer;
if (ok) {
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { ok = false; }
}
if (!ok) {
  $('#fallback').hidden = false;
  $('#hint').hidden = true;
  window.budi = { scene: playScene };
  setExpr = function (n) { state.expr = n; markExpr(n); qEl.classList.add('off'); };
  startGesture = function (n, cb) { if (cb) setTimeout(cb, 600); };
  setView = function () {};
  positionBubbleFallback();
  return;
}
function positionBubbleFallback() {
  var r = $('#fallback img').getBoundingClientRect();
  bubble.style.left = (r.left + r.width / 2) + 'px';
  bubble.style.top = (r.top - 8) + 'px';
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
stage.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50);
camera.position.set(0.35, 1.5, 2.1);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 0.55;
controls.maxDistance = 5;
controls.minPolarAngle = 0.75;
controls.maxPolarAngle = 1.78;
controls.rotateSpeed = 0.7;
controls.target.set(0, 1.3, 0);

/* ---------- 燈光 ---------- */
scene.add(new THREE.HemisphereLight(0xcfe0f5, 0x2a2219, 0.62));
var key = new THREE.DirectionalLight(0xfff0de, 1.75);
key.position.set(1.3, 2.8, 2.3);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
key.shadow.camera.left = -1.2; key.shadow.camera.right = 1.2;
key.shadow.camera.top = 2.2; key.shadow.camera.bottom = -0.4;
key.shadow.camera.near = 0.5; key.shadow.camera.far = 7;
key.shadow.bias = -0.0012;
key.shadow.normalBias = 0.02;
scene.add(key);
var rim = new THREE.DirectionalLight(0x7fd6c6, 1.05);
rim.position.set(-1.9, 2.1, -1.7);
scene.add(rim);
var fill = new THREE.DirectionalLight(0xffd6b0, 0.38);
fill.position.set(-1.6, 1.2, 1.9);
scene.add(fill);

/* ---------- 材質 ---------- */
function col(h) { return new THREE.Color(h).convertSRGBToLinear(); }
function mat(h, rough, extra) {
  var m = new THREE.MeshStandardMaterial({ color: col(h), roughness: rough == null ? 0.7 : rough, metalness: 0 });
  if (extra) Object.keys(extra).forEach(function (k) { m[k] = extra[k]; });
  return m;
}
var M = {
  skin: mat('#a46c46', 0.6, { emissive: col('#3a1a0a'), emissiveIntensity: 0.14 }),
  skinShade: mat('#86563a', 0.62),
  lip: mat('#7d3b33', 0.5),
  hair: mat('#16110e', 0.72),
  brow: mat('#1b1512', 0.85),
  shirt: mat('#4d6577', 0.86),
  shirtDark: mat('#3d5262', 0.88),
  stripe: mat('#c9d2d6', 0.4),
  pants: mat('#2a3038', 0.9),
  shoe: mat('#1c1d20', 0.55),
  sole: mat('#2f3134', 0.85),
  belt: mat('#1d1c1b', 0.5),
  sclera: mat('#fbf8f2', 0.3),
  iris: new THREE.MeshStandardMaterial({ color: col('#5b3520'), roughness: 0.2 }),
  pupil: new THREE.MeshBasicMaterial({ color: 0x050403 }),
  glint: new THREE.MeshBasicMaterial({ color: 0xffffff }),
  bookCover: mat('#2f5d86', 0.6),
  page: mat('#efe9dc', 0.9),
  mouthIn: new THREE.MeshBasicMaterial({ color: 0xffffff })
};

/* ---------- 幾何工具 ---------- */
function capsule(r1, r2, len, seg) {
  seg = seg || 20;
  var pts = [], n = 8, i, a;
  for (i = 0; i <= n; i++) { a = -Math.PI / 2 + (Math.PI / 2) * (i / n); pts.push(new THREE.Vector2(Math.max(0.0001, r2 * Math.cos(a)), -len + r2 * Math.sin(a))); }
  for (i = 0; i <= n; i++) { a = (Math.PI / 2) * (i / n); pts.push(new THREE.Vector2(Math.max(0.0001, r1 * Math.cos(a)), r1 * Math.sin(a))); }
  return new THREE.LatheGeometry(pts, seg);
}
function mesh(geo, m, parent, x, y, z, cast) {
  var o = new THREE.Mesh(geo, m);
  o.position.set(x || 0, y || 0, z || 0);
  o.castShadow = cast !== false;
  o.receiveShadow = true;
  if (parent) parent.add(o);
  return o;
}
function sph(r, ws, hs) { return new THREE.SphereGeometry(r, ws || 32, hs || 24); }
function grp(parent, x, y, z) { var g = new THREE.Group(); g.position.set(x || 0, y || 0, z || 0); if (parent) parent.add(g); return g; }
function canvasTex(w, h, draw) {
  var c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  var t = new THREE.CanvasTexture(c);
  t.encoding = THREE.sRGBEncoding;
  t.anisotropy = 4;
  return t;
}
var CJK = '"PingFang TC","Microsoft JhengHei","Noto Sans TC",sans-serif';

/* =========================================================
   建立 Budi
   ========================================================= */
var J = {};            // 關節
var budi = grp(scene);
budi.name = 'budi';

J.hips = grp(budi, 0, 0.94, 0);
// 骨盆與褲子
(function () {
  var p = [[0.150, -0.13], [0.160, -0.08], [0.163, -0.02], [0.158, 0.04], [0.152, 0.08]].map(function (v) { return new THREE.Vector2(v[0], v[1]); });
  var m = mesh(new THREE.LatheGeometry(p, 32), M.pants, J.hips);
  m.scale.z = 0.7;
  var belt = mesh(new THREE.TorusGeometry(0.153, 0.012, 8, 40), M.belt, J.hips, 0, 0.065, 0);
  belt.rotation.x = Math.PI / 2; belt.scale.y = 0.7;
  var buckle = mesh(new THREE.BoxGeometry(0.04, 0.026, 0.008), mat('#9a9a92', 0.35, { metalness: 0.6 }), J.hips, 0, 0.065, 0.108);
})();

J.spine = grp(J.hips, 0, 0.05, 0);
var torso;
(function () {
  var prof = [[0.148, -0.02], [0.152, 0.06], [0.163, 0.16], [0.176, 0.26], [0.180, 0.33], [0.172, 0.39], [0.150, 0.425], [0.105, 0.448], [0.062, 0.46]];
  var p = prof.map(function (v) { return new THREE.Vector2(v[0], v[1]); });
  torso = mesh(new THREE.LatheGeometry(p, 40), M.shirt, J.spine);
  torso.scale.z = 0.64;
  // 肩膀
  [-1, 1].forEach(function (s) {
    var sh = mesh(sph(0.064), M.shirt, J.spine, s * 0.168, 0.405, -0.005);
    sh.scale.set(1, 0.82, 0.86);
  });
  // 領子
  var collar = mesh(new THREE.TorusGeometry(0.066, 0.016, 10, 36, Math.PI * 1.5), M.shirtDark, J.spine, 0, 0.452, -0.004);
  collar.rotation.x = Math.PI / 2;
  collar.rotation.z = Math.PI * 0.25 + Math.PI;
  collar.scale.set(1, 0.82, 1);
  // 領口兩片
  [-1, 1].forEach(function (s) {
    var flap = mesh(new THREE.BoxGeometry(0.05, 0.05, 0.006), M.shirtDark, J.spine, s * 0.03, 0.425, 0.068);
    flap.rotation.z = s * 0.75; flap.rotation.x = -0.35;
  });
  // V 領內的皮膚
  var v = mesh(new THREE.CircleGeometry(0.028, 3), M.skin, J.spine, 0, 0.432, 0.067, false);
  v.rotation.z = -Math.PI / 2; v.rotation.x = -0.35; v.scale.set(1.25, 0.9, 1);
  // 鈕扣
  [0.08, 0.18, 0.28, 0.37].forEach(function (y) {
    var r = 0.152 + (y > 0.2 ? 0.024 : 0.012) * 1;
    mesh(sph(0.0065, 10, 8), mat('#d9d4c8', 0.4), J.spine, 0, y, r * 0.64 + 0.003, false);
  });
  // 前襟線
  var placket = mesh(new THREE.BoxGeometry(0.016, 0.36, 0.004), M.shirtDark, J.spine, 0, 0.23, 0.108, false);
  placket.rotation.x = -0.06;
  // 右胸口袋
  var pk = mesh(new THREE.BoxGeometry(0.07, 0.075, 0.006), M.shirtDark, J.spine, -0.078, 0.29, 0.101, false);
  pk.rotation.y = -0.38;
  // 名牌
  var badgeTex = canvasTex(256, 140, function (g, w, h) {
    g.fillStyle = '#f7f4ec'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#2f8f74'; g.fillRect(0, 0, w, 30);
    g.fillStyle = '#ffffff'; g.font = '700 19px ' + CJK; g.textBaseline = 'middle';
    g.fillText('新進員工  PEGAWAI BARU', 12, 16);
    g.fillStyle = '#18232c'; g.font = '800 48px "Rajdhani",' + CJK;
    g.fillText('Budi', 12, 74);
    g.fillStyle = '#4d5c66'; g.font = '600 20px ' + CJK;
    g.fillText('射出成型課・Day 1', 12, 116);
  });
  var badge = mesh(new THREE.PlaneGeometry(0.076, 0.042), new THREE.MeshStandardMaterial({ map: badgeTex, roughness: 0.4 }), J.spine, 0.082, 0.302, 0.1035, false);
  badge.rotation.y = 0.4;
})();

// 脖子與頭
J.neck = grp(J.spine, 0, 0.455, -0.004);
mesh(capsule(0.05, 0.055, 0.075, 20), M.skin, J.neck, 0, 0.07, 0);
J.head = grp(J.neck, 0, 0.058, 0.006);
var H = grp(J.head, 0, 0.14, 0); // 頭部中心
H.scale.setScalar(1.3);           // 卡通比例：頭比較大
var face = {};
var SK = { x: 0.1, y: 0.11, z: 0.105 }; // 頭殼橢球半徑
// 頭殼表面上的點與法線（給腮紅貼在臉上）
function skullPoint(x, y, lift) {
  var z = SK.z * Math.sqrt(Math.max(0, 1 - Math.pow(x / SK.x, 2) - Math.pow(y / SK.y, 2)));
  var n = new THREE.Vector3(x / (SK.x * SK.x), y / (SK.y * SK.y), z / (SK.z * SK.z)).normalize();
  return { p: new THREE.Vector3(x, y, z).addScaledVector(n, lift), n: n };
}
(function () {
  var skull = mesh(sph(1, 48, 36), M.skin, H);
  skull.scale.set(SK.x, SK.y, SK.z);
  // 圓圓的臉頰與小下巴
  var jaw = mesh(sph(0.082, 48, 36), M.skin, H, 0, -0.036, 0.004);
  jaw.scale.set(1.0, 0.9, 0.96);
  // 耳朵
  [-1, 1].forEach(function (s) {
    var ear = mesh(sph(0.027, 20, 16), M.skin, H, s * 0.1, -0.01, -0.008);
    ear.scale.set(0.42, 1, 0.64);
    ear.rotation.y = s * 0.3;
    var inner = mesh(sph(0.015, 14, 10), M.skinShade, H, s * 0.107, -0.011, -0.004, false);
    inner.scale.set(0.3, 0.85, 0.5);
  });
  // 小圓鼻頭
  var tip = mesh(sph(0.0105, 20, 16), M.skin, H, 0, -0.022, 0.1035, false);
  tip.scale.set(1.25, 0.9, 0.85);
  // 大眼睛
  var ER = 0.024;
  function cap(r, ang, m) {
    var g = new THREE.SphereGeometry(r, 32, 12, 0, Math.PI * 2, 0, ang);
    g.rotateX(Math.PI / 2);
    return new THREE.Mesh(g, m);
  }
  face.eyes = [];
  face.upper = []; face.lower = [];
  [-1, 1].forEach(function (s) {
    var base = grp(H, s * 0.041, 0.002, 0.077);
    var eye = grp(base);
    mesh(sph(ER, 32, 24), M.sclera, eye, 0, 0, 0, false);
    eye.add(cap(ER + 0.00015, 0.66, M.iris));   // 黑眼珠
    eye.add(cap(ER + 0.0003, 0.33, M.pupil));   // 瞳孔
    // 兩個反光點：一大一小
    [[0.006, 0.0068, 0.0042], [-0.0045, -0.0052, 0.0019]].forEach(function (g) {
      var gl = mesh(new THREE.CircleGeometry(g[2], 16), M.glint, eye, g[0], g[1], 0, false);
      gl.position.z = Math.sqrt(ER * ER - g[0] * g[0] - g[1] * g[1]) + 0.0006;
      gl.rotation.order = 'YXZ';
      gl.rotation.y = Math.asin(g[0] / ER);
      gl.rotation.x = -Math.asin(g[1] / ER);
    });
    face.eyes.push(eye);
    var up = mesh(new THREE.SphereGeometry(ER * 1.055, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2), M.skin, base, 0, 0, 0, false);
    var lo = mesh(new THREE.SphereGeometry(ER * 1.035, 32, 14, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), M.skin, base, 0, 0, 0, false);
    // 上眼線（卡通感的粗線）
    var lash = mesh(new THREE.TorusGeometry(ER * 1.065, 0.0017, 6, 32, Math.PI), M.brow, up, 0, 0, 0, false);
    lash.rotation.x = Math.PI / 2;
    face.upper.push(up); face.lower.push(lo);
  });
  // 眉毛（細、帶弧度）
  face.brows = [];
  [-1, 1].forEach(function (s) {
    var g = grp(H, s * 0.043, 0.046, 0.088);
    var R = 0.034, arc = 0.78;
    var geo = new THREE.TorusGeometry(R, 0.0032, 8, 20, arc);
    geo.rotateZ(Math.PI / 2 - arc / 2);
    geo.translate(0, -R, 0);
    var b = mesh(geo, M.brow, g, 0, 0, 0, false);
    b.scale.set(1, 1, 0.6);
    b.rotation.z = s * -0.12;
    g.userData.s = s;
    g.rotation.y = s * 0.38;
    face.brows.push(g);
  });
  // 腮紅（柔邊，濃淡跟著表情）
  var blushTex = canvasTex(64, 64, function (g, w, h) {
    var gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,120,120,0.9)');
    gr.addColorStop(0.55, 'rgba(255,120,120,0.45)');
    gr.addColorStop(1, 'rgba(255,120,120,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  face.blushM = new THREE.MeshBasicMaterial({ map: blushTex, transparent: true, depthWrite: false, opacity: 0.4 });
  [-1, 1].forEach(function (s) {
    var sp = skullPoint(s * 0.06, -0.026, 0.0018);
    var bl = mesh(new THREE.CircleGeometry(0.016, 24), face.blushM, H, sp.p.x, sp.p.y, sp.p.z, false);
    bl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), sp.n);
    bl.scale.set(1.25, 0.8, 1);
    bl.renderOrder = 2;
  });
  // 頭髮：沿頭型長出來，前額髮際、側分、後腦到頸部
  var hairTex = canvasTex(256, 256, function (g, w, h) {
    g.fillStyle = '#17120f'; g.fillRect(0, 0, w, h);
    for (var i = 0; i < 900; i++) {
      var x = (i * 97) % w, y = (i * 53) % h, l = 10 + (i % 7) * 4;
      g.strokeStyle = i % 3 ? 'rgba(70,58,50,0.35)' : 'rgba(5,4,3,0.5)';
      g.lineWidth = 1;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + ((i % 5) - 2), y + l); g.stroke();
    }
  });
  var hairM = new THREE.MeshStandardMaterial({ map: hairTex, roughness: 0.62, color: 0xffffff });
  var hg = new THREE.SphereGeometry(1, 72, 54);
  var pos = hg.attributes.position, v = new THREE.Vector3();
  for (var i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    var x = v.x, y = v.y, z = v.z;
    var line = -0.05 + 0.72 * z + 0.28 * Math.abs(x) * (1 - Math.abs(z));
    // 太陽穴兩側稍微往後
    line += 0.08 * Math.exp(-Math.pow((Math.abs(x) - 0.6) / 0.18, 2)) * Math.max(0, z);
    var side = Math.abs(x) > 0.86 && z > -0.1 && z < 0.34 && y > -0.26 && y < 0.25;  // 鬢角
    var isHair = y > line || side;
    var r;
    if (isHair) {
      var vol = 1.07 + 0.055 * Math.max(0, y) * (0.55 + 0.45 * Math.max(0, z));
      vol += 0.012 * Math.sin(x * 23 + z * 7) * Math.sin(y * 19) ;
      vol -= 0.022 * Math.exp(-Math.pow((x - 0.38) / 0.07, 2)) * Math.max(0, y - 0.2); // 側分線
      vol += 0.03 * Math.exp(-Math.pow((x + 0.1) / 0.35, 2)) * Math.max(0, z - 0.2) * Math.max(0, y - 0.3) * 3; // 前額蓬起
      if (side && !(y > line)) vol = 1.012;
      r = vol;
    } else {
      r = 0.93;
    }
    pos.setXYZ(i, x * r, y * r, z * r);
  }
  hg.computeVertexNormals();
  var hair = mesh(hg, hairM, H, 0, 0.002, -0.002);
  hair.scale.set(SK.x, SK.y, SK.z);
})();

// 嘴巴（每次表情改變時重建）
var mouthG = grp(H, 0, -0.056, 0.0955);
var mouthTex = canvasTex(64, 64, function (g, w, h) {
  var gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, '#3a1612'); gr.addColorStop(1, '#5c211d');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = '#ebe5d8'; g.fillRect(0, 0, w, 20);
  g.fillStyle = 'rgba(120,100,90,0.5)';
  for (var i = 1; i < 6; i++) g.fillRect(i * w / 6, 0, 1, 20);
  g.fillStyle = '#8c3a33'; g.beginPath(); g.ellipse(w / 2, h + 6, w * 0.32, 18, 0, 0, Math.PI * 2); g.fill();
});
M.mouthIn.map = mouthTex;
M.mouthIn.color = new THREE.Color(0xffffff);
var mouthParts = null, mouthKey = '';
function buildMouth(open, smile) {
  var k = open.toFixed(3) + '|' + smile.toFixed(3);
  if (k === mouthKey) return;
  mouthKey = k;
  if (mouthParts) mouthParts.forEach(function (m) { mouthG.remove(m); m.geometry.dispose(); });
  var w = 0.0155 + Math.max(0, smile) * 0.004 - open * 0.002;
  var cy = smile * 0.0068;
  var upMid = 0.0012 + open * 0.0036;
  var loMid = -0.0012 - open * 0.017 - Math.max(0, smile) * 0.0035;
  function curve(mid, n) {
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var x = -w + (2 * w) * (i / n), u = x / w;
      var y = cy + (1 - u * u) * (mid - cy);
      pts.push(new THREE.Vector3(x, y, -u * u * 0.0065));
    }
    return pts;
  }
  var up = curve(upMid, 8), lo = curve(loMid, 8);
  var upT = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(up), 24, 0.0024, 6, false);
  var loT = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lo), 24, 0.003, 6, false);
  var parts = [new THREE.Mesh(upT, M.lip), new THREE.Mesh(loT, M.lip)];
  if (upMid - loMid > 0.0035) {
    var shape = new THREE.Shape();
    shape.moveTo(up[0].x, up[0].y);
    for (var i = 1; i < up.length; i++) shape.lineTo(up[i].x, up[i].y);
    for (i = lo.length - 1; i >= 0; i--) shape.lineTo(lo[i].x, lo[i].y);
    var sg = new THREE.ShapeGeometry(shape);
    var pos = sg.attributes.position, uv = sg.attributes.uv;
    for (i = 0; i < pos.count; i++) {
      var x = pos.getX(i), y = pos.getY(i), u2 = x / w;
      var top = cy + (1 - u2 * u2) * (upMid - cy), bot = cy + (1 - u2 * u2) * (loMid - cy);
      uv.setXY(i, (x + w) / (2 * w), 1 - (top - y) / Math.max(0.0001, top - bot));
      pos.setZ(i, -u2 * u2 * 0.0065 - 0.0012);
    }
    parts.push(new THREE.Mesh(sg, M.mouthIn));
  }
  parts.forEach(function (m) { mouthG.add(m); });
  mouthParts = parts;
}

// 手臂
function buildArm(s) {
  var sh = grp(J.spine, s * 0.178, 0.405, -0.006);
  sh.userData.baseY = 0.405;
  var sleeve = mesh(capsule(0.056, 0.05, 0.15, 24), M.shirt, sh);
  var hem = mesh(new THREE.TorusGeometry(0.049, 0.007, 8, 28), M.shirtDark, sh, 0, -0.17, 0);
  hem.rotation.x = Math.PI / 2;
  var band = mesh(new THREE.TorusGeometry(0.0545, 0.0055, 6, 28), M.stripe, sh, 0, -0.085, 0, false);
  band.rotation.x = Math.PI / 2;
  mesh(capsule(0.042, 0.038, 0.27, 20), M.skin, sh, 0, -0.02, 0);
  var el = grp(sh, 0, -0.285, 0);
  mesh(capsule(0.039, 0.031, 0.235, 20), M.skin, el);
  var wr = grp(el, 0, -0.258, 0);
  // 手
  var hand = grp(wr);
  var palm = mesh(sph(0.042, 20, 16), M.skin, hand, 0, -0.045, 0);
  palm.scale.set(0.5, 1.05, 0.95);
  var knuck = grp(hand, 0, -0.08, 0);
  var idx = grp(knuck, 0, 0, 0.022);
  mesh(capsule(0.0105, 0.0095, 0.048, 10), M.skin, idx);
  var fing = grp(knuck, 0, 0, -0.008);
  var f = mesh(capsule(0.012, 0.011, 0.045, 12), M.skin, fing);
  f.scale.set(0.95, 1, 2.3);
  var th = grp(hand, -s * 0.012, -0.035, 0.03);
  var thm = mesh(capsule(0.011, 0.01, 0.035, 10), M.skin, th);
  th.rotation.x = -0.55;
  return { sh: sh, el: el, wr: wr, hand: hand, idx: idx, fing: fing, th: th, s: s };
}
var armL = buildArm(1), armR = buildArm(-1);
J.lSh = armL.sh; J.lEl = armL.el; J.lWr = armL.wr;
J.rSh = armR.sh; J.rEl = armR.el; J.rWr = armR.wr;

// 腿
function buildLeg(s) {
  var hip = grp(J.hips, s * 0.088, -0.05, 0);
  mesh(capsule(0.086, 0.066, 0.4, 24), M.pants, hip);
  var kn = grp(hip, 0, -0.43, 0);
  mesh(capsule(0.067, 0.058, 0.36, 22), M.pants, kn);
  var an = grp(kn, 0, -0.39, 0);
  var shoe = mesh(sph(0.056, 24, 18), M.shoe, an, 0, -0.022, 0.035);
  shoe.scale.set(0.95, 0.62, 1.85);
  var sole = mesh(new THREE.BoxGeometry(0.096, 0.016, 0.205), M.sole, an, 0, -0.053, 0.035);
  return { hip: hip, kn: kn, an: an };
}
var legL = buildLeg(1), legR = buildLeg(-1);
J.lHip = legL.hip; J.lKn = legL.kn; J.lAn = legL.an;
J.rHip = legR.hip; J.rKn = legR.kn; J.rAn = legR.an;

// 手冊（拿在左手）
var book = grp(J.spine);
var bookParts = {};
(function () {
  var W = 0.17, Hh = 0.235, T = 0.012;
  var coverTex = canvasTex(256, 352, function (g, w, h) {
    g.fillStyle = '#2f5d86'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#e4d9c0'; g.fillRect(0, 54, w, 4);
    g.font = '800 30px ' + CJK; g.fillStyle = '#f4efe4'; g.textBaseline = 'top';
    g.fillText('射出成型機', 22, 82);
    g.fillText('操作手冊', 22, 120);
    g.font = '700 34px "Rajdhani",' + CJK; g.fillStyle = '#e8c98f';
    g.fillText('JM150', 22, 172);
    g.font = '500 16px ' + CJK; g.fillStyle = 'rgba(244,239,228,0.75)';
    g.fillText('MK6 / DC 共用版', 22, 214);
    g.fillText('第 3 版・內部文件', 22, 300);
  });
  var pageTex = canvasTex(256, 352, function (g, w, h) {
    g.fillStyle = '#efe9dc'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#2b2b2b'; g.font = '700 18px ' + CJK; g.textBaseline = 'top';
    g.fillText('第四章 模溫設定', 20, 22);
    g.fillStyle = 'rgba(40,40,40,0.55)';
    for (var y = 58; y < h - 20; y += 15) {
      var len = 150 + ((y * 37) % 60);
      g.fillRect(20, y, len, 6);
    }
  });
  var coverM = new THREE.MeshStandardMaterial({ map: coverTex, roughness: 0.6 });
  var pageM = new THREE.MeshStandardMaterial({ map: pageTex, roughness: 0.9 });
  // 兩半，以書脊（x=0）為軸
  function half(dir) {
    var g = grp(book);
    var c = mesh(new THREE.BoxGeometry(W, Hh, 0.004), M.bookCover, g, W / 2, 0, dir * (T / 2 + 0.002));
    var p = mesh(new THREE.BoxGeometry(W - 0.008, Hh - 0.01, T / 2), M.page, g, W / 2, 0, dir * T / 4);
    return { g: g, cover: c, pages: p };
  }
  bookParts.front = half(1);
  bookParts.back = half(-1);
  var face1 = mesh(new THREE.PlaneGeometry(W - 0.002, Hh - 0.002), coverM, bookParts.front.g, W / 2, 0, T / 2 + 0.0042, false);
  var inner = mesh(new THREE.PlaneGeometry(W - 0.012, Hh - 0.014), pageM, bookParts.back.g, W / 2, 0, 0.0002 + 0.0001, false);
  inner.position.z = 0.0003;
  bookParts.inner = inner;
  var spine = mesh(new THREE.BoxGeometry(0.008, Hh, T + 0.008), M.bookCover, book, 0, 0, 0);
})();

