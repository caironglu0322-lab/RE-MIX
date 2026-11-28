
/* =========================================================
   場景：地板、工作桌、平板、樣品、背景的 JM150-DC
   ========================================================= */
budi.position.set(0.34, 0, -0.04);
budi.rotation.y = -0.3;

(function () {
  var R = 1.3;
  var plate = mesh(new THREE.CylinderGeometry(R, R, 0.03, 6), mat('#14302c', 0.85), scene, -0.08, -0.015, 0.02, false);
  plate.rotation.y = Math.PI / 6;
  var edge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.CylinderGeometry(R, R, 0.03, 6)), new THREE.LineBasicMaterial({ color: col('#4fb393'), transparent: true, opacity: 0.5 }));
  edge.position.set(-0.08, -0.015, 0.02); edge.rotation.y = Math.PI / 6;
  scene.add(edge);
  var sh = new THREE.Mesh(new THREE.CircleGeometry(3.2, 48), new THREE.ShadowMaterial({ opacity: 0.32 }));
  sh.rotation.x = -Math.PI / 2; sh.position.y = 0.001; sh.receiveShadow = true;
  scene.add(sh);
  var glow = mesh(new THREE.RingGeometry(R + 0.04, R + 0.7, 6), new THREE.MeshBasicMaterial({ color: col('#4fb393'), transparent: true, opacity: 0.05, depthWrite: false }), scene, -0.08, 0.002, 0.02, false);
  glow.rotation.x = -Math.PI / 2; glow.rotation.z = Math.PI / 6;
})();
key.shadow.camera.left = -1.6; key.shadow.camera.right = 1.4;
key.shadow.camera.updateProjectionMatrix();

// 工作桌
var bench = grp(scene, -0.5, 0, 0.14);
bench.rotation.y = 0.22;
(function () {
  var steel = mat('#4a5763', 0.42, { metalness: 0.35 });
  var leg = mat('#2b3138', 0.6, { metalness: 0.4 });
  mesh(new THREE.BoxGeometry(0.92, 0.04, 0.56), steel, bench, 0, 0.86, 0);
  mesh(new THREE.BoxGeometry(0.92, 0.014, 0.014), mat('#d6a645', 0.5), bench, 0, 0.846, 0.282, false);
  [[-0.42, -0.24], [0.42, -0.24], [-0.42, 0.24], [0.42, 0.24]].forEach(function (p) {
    mesh(new THREE.BoxGeometry(0.04, 0.84, 0.04), leg, bench, p[0], 0.42, p[1]);
  });
  mesh(new THREE.BoxGeometry(0.86, 0.02, 0.5), leg, bench, 0, 0.18, 0);
  // 層架上的零件盒
  [['#2f6f9f', -0.28], ['#d07a2e', -0.02], ['#2f6f9f', 0.24]].forEach(function (b) {
    mesh(new THREE.BoxGeometry(0.2, 0.11, 0.3), mat(b[0], 0.7), bench, b[1], 0.245, 0.02);
  });
})();

// 工業平板（橘色防撞角）
var tabG = grp(bench, -0.06, 0.88, 0.03);
(function () {
  var dark = mat('#1d2329', 0.35, { metalness: 0.4 });
  mesh(new THREE.BoxGeometry(0.17, 0.014, 0.13), dark, tabG, 0, 0.007, -0.02);
  var arm = mesh(new THREE.BoxGeometry(0.035, 0.17, 0.022), dark, tabG, 0, 0.09, -0.05);
  arm.rotation.x = -0.32;
})();
var tg = grp(tabG, 0, 0.215, -0.02);
tg.rotation.x = -0.34;
(function () {
  mesh(new THREE.BoxGeometry(0.44, 0.31, 0.02), mat('#20262c', 0.4, { metalness: 0.3 }), tg, 0, 0, 0);
  var bump = mat('#e0852e', 0.6);
  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (c) {
    mesh(new THREE.BoxGeometry(0.05, 0.05, 0.03), bump, tg, c[0] * 0.205, c[1] * 0.14, 0);
  });
  var scr = new THREE.Mesh(new THREE.PlaneGeometry(0.412, 0.286), new THREE.MeshBasicMaterial({ color: 0x0b1118 }));
  scr.position.z = 0.0102;
  tg.add(scr);
})();
scene.updateMatrixWorld(true);
TAB = {
  g: tg,
  c: new THREE.Vector3(0, 0, 0.0103).applyMatrix4(tg.matrixWorld),
  n: new THREE.Vector3(0, 0, 1).transformDirection(tg.matrixWorld),
  corners: [[-0.206, 0.143], [0.206, 0.143], [-0.206, -0.143], [0.206, -0.143]].map(function (p) {
    return new THREE.Vector3(p[0], p[1], 0.0103).applyMatrix4(tg.matrixWorld);
  })
};

// 樣品：JM150-DC 做的雙色手柄，邊緣有一道刮痕
var sample = grp(bench, 0.27, 0.905, 0.1);
sample.rotation.y = 0.7;
(function () {
  var body = mesh(capsule(0.024, 0.021, 0.15, 18), mat('#3a3f45', 0.5), sample, 0, 0, 0);
  body.rotation.z = Math.PI / 2; body.position.x = 0.075;
  var grip = mesh(capsule(0.0275, 0.0275, 0.07, 18), mat('#e07a2e', 0.75), sample, 0, 0, 0);
  grip.rotation.z = Math.PI / 2; grip.position.x = 0.02;
  var scratch = mesh(new THREE.BoxGeometry(0.045, 0.0025, 0.003), new THREE.MeshBasicMaterial({ color: 0xf4efe6 }), sample, -0.06, 0.0205, 0.006, false);
  scratch.rotation.y = 0.25;
})();

// 背景：JM150-DC 雙色射出成型機
var machine = grp(scene, -0.35, 0, -1.75);
machine.rotation.y = 0.08;
var MACH = {};
(function () {
  var frameM = mat('#22384a', 0.7);
  var cover = mat('#5d6a74', 0.6);
  mesh(new THREE.BoxGeometry(2.6, 0.72, 0.85), frameM, machine, 0, 0.36, 0);
  mesh(new THREE.BoxGeometry(1.5, 0.46, 0.62), cover, machine, 0.35, 0.95, 0);
  mesh(new THREE.BoxGeometry(0.85, 0.95, 0.8), frameM, machine, -0.82, 1.08, 0);
  var hop = mesh(new THREE.CylinderGeometry(0.17, 0.06, 0.34, 20), cover, machine, 0.85, 1.36, 0);
  var hop2 = mesh(new THREE.CylinderGeometry(0.12, 0.17, 0.08, 20), mat('#e07a2e', 0.6), machine, 0.55, 1.26, 0.12);
  // 控制面板
  var panel = grp(machine, 1.05, 1.15, 0.44);
  mesh(new THREE.BoxGeometry(0.38, 0.3, 0.05), mat('#1b2025', 0.5), panel, 0, 0, 0);
  MACH.panelCanvas = document.createElement('canvas');
  MACH.panelCanvas.width = 256; MACH.panelCanvas.height = 192;
  MACH.panelTex = new THREE.CanvasTexture(MACH.panelCanvas);
  MACH.panelTex.encoding = THREE.sRGBEncoding;
  var scr = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.25), new THREE.MeshBasicMaterial({ map: MACH.panelTex }));
  scr.position.z = 0.0255;
  panel.add(scr);
  // 銘牌
  var plateTex = canvasTex(256, 64, function (g, w, h) {
    g.fillStyle = '#d7dadc'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#1b2025'; g.font = '700 30px "Rajdhani",' + CJK; g.textBaseline = 'middle';
    g.fillText('JM150-DC', 12, 24);
    g.font = '600 15px ' + CJK; g.fillStyle = '#4d5c66';
    g.fillText('雙色射出成型機', 12, 49);
  });
  var plate = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.1), new THREE.MeshStandardMaterial({ map: plateTex, roughness: 0.4 }));
  plate.position.set(-0.3, 0.52, 0.426);
  machine.add(plate);
  // 三色燈
  var tower = grp(machine, 1.22, 1.45, 0.3);
  mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.25, 8), mat('#222', 0.5), tower, 0, -0.13, 0);
  function lamp(y, c) {
    var m = new THREE.MeshStandardMaterial({ color: col(c), emissive: col(c), emissiveIntensity: 0.15, roughness: 0.3 });
    mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.06, 16), m, tower, 0, y, 0, false);
    return m;
  }
  MACH.green = lamp(0.03, '#3ccf6e');
  MACH.amber = lamp(0.095, '#f0b44c');
  MACH.red = lamp(0.16, '#ff4d4d');
})();
MACH.alarm = null;
function drawPanel(alarm, blink) {
  var g = MACH.panelCanvas.getContext('2d'), w = 256, h = 192;
  g.fillStyle = alarm ? (blink ? '#4a0d0d' : '#2a0909') : '#0c1a14'; g.fillRect(0, 0, w, h);
  g.fillStyle = alarm ? '#ff6b6b' : '#4ade80';
  g.font = '700 26px "Rajdhani",' + CJK; g.textBaseline = 'top';
  g.fillText(alarm ? 'ALARM' : 'RUN', 14, 12);
  g.font = '600 18px "Rajdhani",' + CJK; g.fillStyle = '#d6e2ea';
  g.fillText('JM150-DC', 14, 48);
  if (alarm) {
    g.fillStyle = '#ffb3ab'; g.font = '700 22px "Rajdhani",' + CJK;
    g.fillText('SERVO OVERLOAD', 14, 92);
    g.font = '500 15px ' + CJK; g.fillStyle = '#ffd6d2';
    g.fillText('E-217  伺服過載', 14, 128);
  } else {
    g.font = '500 16px ' + CJK; g.fillStyle = '#9ae6b4';
    g.fillText('Cycle 28.4 s', 14, 92);
    g.fillText('Shot 1,286', 14, 118);
  }
  MACH.panelTex.needsUpdate = true;
}
function updateMachine(t) {
  var alarm = storyIdx === 6 || (storyIdx === 7 && !km.approved);
  var blink = Math.floor(t * 2.4) % 2 === 0;
  var key2 = alarm + '|' + (alarm ? blink : '');
  if (key2 !== MACH.alarm) { MACH.alarm = key2; drawPanel(alarm, blink); }
  MACH.green.emissiveIntensity = alarm ? 0.05 : 1.2;
  MACH.red.emissiveIntensity = alarm ? (blink ? 2.2 : 0.2) : 0.08;
}
