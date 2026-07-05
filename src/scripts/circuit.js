// ===== Circuit animation on A4 grid =====
(function() {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const GRID = 20;
  const ACCENT = '26,180,164';
  const TRAIL = 0.12;
  const COUNT = 20;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:-1;';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function rand(min, max) { return min + Math.random() * (max - min); }
  function randInt(min, max) { return Math.floor(rand(min, max)); }

  class Circuit {
    constructor() {
      this.reset();
      this.prog = Math.random(); // distribute randomly across path
    }

    reset() {
      this.pts = this.genPath();
      this.prog = 0;
      this.speed = rand(0.002, 0.006);
      this.done = false;
      this.pause = 0;
    }

    genPath() {
      const cols = Math.floor(W / GRID);
      const rows = Math.floor(H / GRID);
      if (cols < 3 || rows < 3) return [{x: GRID, y: GRID}];

      // Spread across full grid, not just center
      let x = randInt(1, cols - 1) * GRID;
      let y = randInt(1, rows - 1) * GRID;
      const pts = [{x, y}];
      const steps = randInt(5, 12);

      for (let i = 0; i < steps; i++) {
        const horiz = Math.random() > 0.5;
        const dir = Math.random() > 0.5 ? 1 : -1;
        const dist = GRID * randInt(2, 6);
        x += horiz ? dir * dist : 0;
        y += horiz ? 0 : dir * dist;
        x = Math.max(GRID, Math.min(W - GRID, x));
        y = Math.max(GRID, Math.min(H - GRID, y));
        pts.push({x, y});
      }
      return pts;
    }

    totalLen() {
      let len = 0;
      for (let i = 1; i < this.pts.length; i++)
        len += Math.abs(this.pts[i].x - this.pts[i-1].x) + Math.abs(this.pts[i].y - this.pts[i-1].y);
      return len || 1;
    }

    update() {
      if (this.done) {
        if (this.pause > 0) {
          this.pause--;
          if (this.pause === 0) this.reset();
        }
        return;
      }
      this.prog += this.speed;
      if (this.prog >= 1) {
        this.prog = 1;
        this.done = true;
        this.pause = randInt(20, 50);
      }
    }

    draw() {
      if (this.done || this.prog <= 0) return;

      const total = this.totalLen();
      const tEnd = this.prog;
      const tStart = Math.max(0, tEnd - TRAIL);
      const len = total;

      ctx.save();
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      let headX, headY, headAlpha;

      let acc = 0;
      for (let i = 0; i < this.pts.length - 1; i++) {
        const sl = Math.abs(this.pts[i+1].x - this.pts[i].x) + Math.abs(this.pts[i+1].y - this.pts[i].y);
        if (sl === 0) continue;
        const s0 = acc / len;
        const s1 = (acc + sl) / len;

        if (s1 >= tStart && s0 <= tEnd) {
          const lo = Math.max(0, (tStart - s0) / (s1 - s0));
          const hi = Math.min(1, (tEnd - s0) / (s1 - s0));
          const sx = this.pts[i].x + (this.pts[i+1].x - this.pts[i].x) * lo;
          const sy = this.pts[i].y + (this.pts[i+1].y - this.pts[i].y) * lo;
          const ex = this.pts[i].x + (this.pts[i+1].x - this.pts[i].x) * hi;
          const ey = this.pts[i].y + (this.pts[i+1].y - this.pts[i].y) * hi;

          const tMid = (s0 + lo * (s1 - s0) + s0 + hi * (s1 - s0)) / 2 || 0;
          const distFromHead = (tEnd - tMid) / TRAIL;
          const alpha = Math.max(0, Math.min(0.5, (1 - distFromHead) * 0.55));

          if (alpha > 0.005) {
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.strokeStyle = `rgba(${ACCENT},${alpha.toFixed(3)})`;
            ctx.stroke();

            if (hi >= 0.99) {
              headX = ex;
              headY = ey;
              headAlpha = alpha;
            }
          }
        }
        acc += sl;
        if (s0 > tEnd) break;
      }

      // Draw the head as a small round dot
      if (headX != null && headAlpha > 0.02) {
        ctx.beginPath();
        ctx.arc(headX, headY, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT},${Math.min(0.6, headAlpha * 1.8).toFixed(3)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(headX, headY, 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fill();
      }

      ctx.restore();
    }
  }

  const circuits = Array.from({ length: COUNT }, () => new Circuit());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    for (const c of circuits) { c.update(); c.draw(); }
    requestAnimationFrame(animate);
  }
  animate();
})();
