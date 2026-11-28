cd /home/user/RE-MIX/budi-page/parts && python3 - <<'PY'
d='/home/user/RE-MIX/budi-page/parts/'
def rd(n): return open(d+n,encoding='utf8').read()
app=rd('app.js')
app=app.replace("function clock() {","function nowStr() {").replace("var time = clock().slice(-5);","var time = nowStr().slice(-5);")
if "kmEl.style.transform = '';\n  scaler" not in app:
    app=app.replace("  scaler.appendChild(kmEl);\n","  kmEl.style.transform = '';\n  scaler.appendChild(kmEl);\n")
loop=rd('loop.js').replace('clock3.getDelta()','clock.getDelta()')
b1=rd('b1.js')
start=b1.index('if (!ok) {'); end=b1.index('renderer.setPixelRatio')
b1=b1[:start]+"if (!ok) { enterNo3D(); return; }\nhas3D = true;\n\n"+b1[end:]
b4=rd('b4.js')
a="    T = tmpV.set(-1.2, 1.15, 1.1);"; b4=b4.replace(a,"    T = tmpV.copy(TAB.c);")
a="  var yaw = Math.atan2(dx, dz), pitch = Math.atan2(-dy, hz);\n"
b4=b4.replace(a,a+"  yaw -= budi.rotation.y;\n  if (yaw > Math.PI) yaw -= Math.PI * 2; if (yaw < -Math.PI) yaw += Math.PI * 2;\n")
js="(function () {\n'use strict';\n"+rd('data.js')+"\n"+rd('b_expr.js')+"\n"+app+"\n"+b1+"\n"+rd('world.js')+"\n"+rd('b3.js')+"\n"+b4+"\n"+loop+"\n})();\n"
out=rd('head.html')+rd('body.html')+'\n<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>\n<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>\n<script>\n'+js+'</script>\n'
open('/home/user/RE-MIX/budi-page/src.html','w',encoding='utf8').write(out)
PY
cd /tmp/claude-0/-home-user-RE-MIX/cf280e65-4aa2-5559-b531-77691e4239dc/scratchpad && python3 tools/build2.py
