var EXPR = {
  neutral:  { bR: 0,    bL: 0,    tR: 0,    tL: 0,    lid: 1.0,   low: 0,   smile: 0.4,  open: 0,    tilt: 0,     q: 0, blush: 0.4 },
  happy:    { bR: 0.35, bL: 0.35, tR: 0.1,  tL: 0.1,  lid: 0.97, low: 0.45, smile: 1,    open: 0.32, tilt: 0.05,  q: 0, blush: 0.95 },
  confused: { bR: -0.3, bL: 0.85, tR: -0.2, tL: 0.3,  lid: 0.88, low: 0.1, smile: -0.35,open: 0.08, tilt: 0.13,  q: 1, blush: 0.35 },
  focused:  { bR: -0.35,bL: -0.35,tR: -0.25,tL: -0.25,lid: 0.78, low: 0.25,smile: 0,    open: 0,    tilt: -0.03, q: 0, blush: 0.3 },
  aha:      { bR: 1,    bL: 1,    tR: 0,    tL: 0,    lid: 1.15, low: 0,   smile: 0.45, open: 0.55, tilt: 0,     q: 0, blush: 0.7 },
  worried:  { bR: 0.45, bL: 0.45, tR: 0.8,  tL: 0.8,  lid: 0.92, low: 0.15,smile: -0.7, open: 0.06, tilt: -0.06, q: 0, blush: 0.25 },
  hopeful:  { bR: 0.6,  bL: 0.6,  tR: 0.45, tL: 0.45, lid: 1.02, low: 0.2, smile: 0.5,  open: 0.12, tilt: 0.08,  q: 0, blush: 0.8 }
};

