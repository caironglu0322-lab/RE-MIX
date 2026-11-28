/* =========================================================
   動畫
   ========================================================= */
var clock = new THREE.Clock();
var tAll = 0;
function damp(a, b, k, dt) { return a + (b - a) * (1 - Math.exp(-k * dt)); }
function noise(t, s) { return Math.sin(t * 1.3 + s) * 0.5 + Math.sin(t * 0.71 + s * 2.1) * 0.35 + Math.sin(t * 2.3 + s * 0.7) * 0.15; }

function applyPose(dt) {
  // 目標姿勢 = 站姿 + 動作
  var target = {};
  copyPose(stance, target);
  Object.keys(BASE).forEach(function (k) { if (target[k] == null) target[k] = Array.isArray(BASE[k]) ? BASE[k].slice() : BASE[k]; });
  var look = null;
  if (gesture) {
    gesture.t += dt;
    var r = gesture.fn(gesture.t);
    look = r.look || null;
    if (r.additive) {
      Object.keys(r.pose).forEach(function (k) {
        var v = r.pose[k];
        if (Array.isArray(v)) target[k] = [target[k][0] + v[0] * r.w, target[k][1] + v[1] * r.w, target[k][2] + v[2] * r.w];
        else target[k] += v * r.w;
      });
    } else {
      var blended = lerpPose(target, r.pose, r.w);
      Object.keys(blended).forEach(function (k) { target[k] = blended[k]; });
    }
    if (gesture.t >= gesture.dur) { var cb = gesture.cb; gesture = null; if (cb) cb(); }
  }
  var kArm = gesture ? 11 : 6;
  Object.keys(target).forEach(function (k) {
    var kk = /^(l|r)(T|P|Wr)$/.test(k) ? kArm : 7;
    if (Array.isArray(target[k])) {
      for (var i = 0; i < 3; i++) cur[k][i] = damp(cur[k][i], target[k][i], kk, dt);
    } else cur[k] = damp(cur[k], target[k], kk, dt);
  });
  return look;
}

function setJoints(t, look, dt) {
  // 呼吸與重心
  var br = Math.sin(t * 1.55);
  var sway = reduceMotion ? 0 : noise(t * 0.35, 1.7);
  JOINT_KEYS.forEach(function (k) {
    J[k].rotation.set(cur[k][0], cur[k][1], cur[k][2]);
  });
  J.hips.position.x = sway * 0.012;
  J.hips.position.y = 0.94 - Math.abs(sway) * 0.004;
  J.hips.rotation.z += sway * 0.025;
  J.spine.rotation.z += -sway * 0.03;
  J.spine.rotation.x += br * 0.012;
  torso.scale.x = 1 + br * 0.008;
  torso.scale.z = 0.64 * (1 + br * 0.018);
  J.lSh.position.y = J.lSh.userData.baseY + br * 0.003 + cur.shrug * 0.032;
  J.rSh.position.y = J.rSh.userData.baseY + br * 0.003 + cur.shrug * 0.032;
  J.lHip.rotation.z -= sway * 0.02; J.rHip.rotation.z -= sway * 0.02;
  var wl = solveArm(armL, cur.lT, cur.lP).clone();
  solveArm(armR, cur.rT, cur.rP);

  // 手指
  [[armL, cur.lCurl, cur.lCurl, cur.lThumb], [armR, cur.rCurl, cur.rIdx, cur.rThumb]].forEach(function (a) {
    var arm = a[0], s = arm.s;
    arm.fing.rotation.set(0, 0, -s * a[1] * 1.6);
    arm.idx.rotation.set(0, 0, -s * a[2] * 1.5);
    arm.th.rotation.set(-0.55 + a[3] * 0.3, 0, -s * (0.25 - a[3] * 0.25) + s * a[3] * 2.6);
  });

  // 手冊
  var ba = cur.bAbs;
  book.position.set(
    (wl.x + cur.bOff[0]) * (1 - ba) + cur.bAbsP[0] * ba,
    (wl.y + cur.bOff[1]) * (1 - ba) + cur.bAbsP[1] * ba,
    (wl.z + cur.bOff[2]) * (1 - ba) + cur.bAbsP[2] * ba);
  book.rotation.set(cur.bR[0], cur.bR[1], cur.bR[2]);
  var op = cur.bookOpen;
  bookParts.front.g.rotation.y = -op * 1.35;
  bookParts.back.g.rotation.y = op * 1.35;
  bookParts.inner.visible = op > 0.05;

  // 視線
  H.getWorldPosition(headPos);
  var now = performance.now();
  var T;
  if (lookOverride && now < lookOverride.until) {
    T = tmpV.set(lookOverride.x, lookOverride.y, lookOverride.z);
  } else if (look === 'book') {
    book.getWorldPosition(tmpV); tmpV.y += 0.05;
    T = tmpV;
  } else if (look === 'point') {
    T = tmpV.set(-1.2, 1.15, 1.1);
  } else if (now < idleLook.until) {
    T = tmpV.set(idleLook.x, idleLook.y, 0.9);
  } else if (state.pointer && now - state.pointerAt < 3500) {
    raycaster.setFromCamera(state.pointer, camera);
    var d = camera.position.distanceTo(headPos);
    T = tmpV.copy(raycaster.ray.origin).addScaledVector(raycaster.ray.direction, d * 0.92);
  } else {
    T = tmpV.copy(camera.position);
  }
  if (t > sacc.next) {
    sacc.x = (Math.random() - 0.5) * 0.06; sacc.y = (Math.random() - 0.5) * 0.04;
    sacc.next = t + 0.6 + Math.random() * 2.2;
  }
  var dx = T.x - headPos.x, dy = T.y - headPos.y, dz = T.z - headPos.z;
  var hz = Math.sqrt(dx * dx + dz * dz);
  var yaw = Math.atan2(dx, dz), pitch = Math.atan2(-dy, hz);
  var behind = Math.abs(yaw) > 1.9;
  if (behind) { yaw = 0; pitch = 0; }
  yaw = Math.max(-1.1, Math.min(1.1, yaw));
  pitch = Math.max(-0.45, Math.min(0.6, pitch));
  var poseHeadP = cur.head[0];
  var gy = gesture && gesture.name === 'read' ? 0.15 : 1;
  gaze.hy = damp(gaze.hy, yaw * 0.62 * gy, 3.2, dt);
  gaze.hp = damp(gaze.hp, (pitch * 0.5) * gy, 3.2, dt);
  gaze.sy = damp(gaze.sy, yaw * 0.18 * gy, 2.2, dt);
  J.spine.rotation.y += gaze.sy;
  J.neck.rotation.y += gaze.hy * 0.35;
  J.head.rotation.y += gaze.hy * 0.65;
  J.head.rotation.x += gaze.hp;
  J.head.rotation.z += E.tilt;
  // 頭部微動
  if (!reduceMotion) {
    J.head.rotation.x += noise(t * 0.6, 4.1) * 0.02;
    J.head.rotation.y += noise(t * 0.5, 7.3) * 0.025;
  }
  var headYaw = gaze.sy + gaze.hy;
  var eyeY = Math.max(-0.42, Math.min(0.42, yaw - headYaw + sacc.x));
  var eyeP = Math.max(-0.32, Math.min(0.38, pitch - gaze.hp - poseHeadP * 0.85 + sacc.y));
  if (behind) { eyeY = 0; eyeP = 0; }
  gaze.ey = damp(gaze.ey, eyeY, 22, dt);
  gaze.ep = damp(gaze.ep, eyeP, 22, dt);
  face.eyes.forEach(function (e) { e.rotation.set(gaze.ep, gaze.ey, 0, 'YXZ'); });

  // 眨眼
  blink.t += dt;
  var bAmt = 0;
  if (blink.t > blink.next) {
    var p = (blink.t - blink.next) / blink.dur;
    bAmt = p < 0.45 ? p / 0.45 : 1 - (p - 0.45) / 0.55;
    if (p >= 1) {
      if (blink.dbl) { blink.dbl = false; blink.next = blink.t + 0.12; }
      else { blink.next = blink.t + 1.8 + Math.random() * 4.2; blink.dbl = Math.random() < 0.2; }
      bAmt = 0;
    }
  }
  bAmt = Math.max(0, Math.min(1, bAmt));

  // 表情插值
  Object.keys(Etgt).forEach(function (k) { E[k] = damp(E[k], Etgt[k], 7, dt); });
  var lid = E.lid * (1 - bAmt);
  var upTh = 1.45 - lid * 2.17 + Math.max(0, gaze.ep) * 0.55;
  var loTh = 0.78 - E.low * 0.42 - Math.max(0, -gaze.ep) * 0.3;
  face.upper.forEach(function (u) { u.rotation.x = Math.min(1.5, upTh); });
  face.lower.forEach(function (l) { l.rotation.x = loTh; });
  face.brows.forEach(function (b) {
    var s = b.userData.s;
    var raise = s < 0 ? E.bR : E.bL, tilt = s < 0 ? E.tR : E.tL;
    b.position.y = 0.046 + raise * 0.009 + (state.talking ? Math.max(0, Math.sin(t * 5.3)) * 0.0018 : 0);
    b.rotation.z = (s < 0 ? 1 : -1) * tilt * 0.3;
  });
  var talk = 0;
  if (state.talking) {
    talk = Math.max(0, Math.sin(t * 17) * 0.6 + Math.sin(t * 9.3) * 0.4) * (0.5 + 0.5 * Math.abs(Math.sin(t * 2.7)));
  }
  buildMouth(Math.min(1, E.open + talk * 0.42), E.smile - talk * 0.15);
  face.blushM.opacity = Math.max(0, Math.min(1, E.blush));
  qEl.classList.toggle('off', E.q < 0.5);
}
