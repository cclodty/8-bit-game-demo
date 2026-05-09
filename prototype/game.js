const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const result = document.getElementById('result');

const keys = new Set();
let startAt = performance.now();
let finished = false;

const config = {
  gravity: 1250,
  moveSpeed: 220,
  jumpVelocity: -420,
  doubleJumpVelocity: -390,
  dashSpeed: 420,
  dashDuration: 0.16,
  dashCooldown: 0.45,
};

const player = {
  x: 40, y: 420, w: 28, h: 36,
  vx: 0, vy: 0,
  grounded: false,
  jumps: 0,
  canDash: true,
  dashTimeLeft: 0,
  dashCooldownLeft: 0,
  hearts: 5,
  coins: 0,
  stars: 0,
};

const platforms = [
  { x: 0, y: 500, w: 300, h: 40 },
  { x: 340, y: 450, w: 130, h: 24 },
  { x: 520, y: 410, w: 150, h: 24 },
  { x: 740, y: 360, w: 130, h: 24 },
  { x: 830, y: 300, w: 100, h: 20 },
];
const hazards = [{ x: 300, y: 520, w: 620, h: 20 }];
const coins = [{ x: 380, y: 420, got: false }, { x: 560, y: 380, got: false }, { x: 770, y: 330, got: false }];
const goal = { x: 900, y: 250, w: 30, h: 50 };

function intersects(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function restart() {
  player.x = 40; player.y = 420; player.vx = 0; player.vy = 0;
  player.grounded = false; player.jumps = 0; player.canDash = true;
  player.dashTimeLeft = 0; player.dashCooldownLeft = 0;
  player.hearts = 5; player.coins = 0;
  coins.forEach(c => c.got = false);
  startAt = performance.now();
  finished = false;
  result.classList.add('hidden');
}

window.addEventListener('keydown', (e) => {
  keys.add(e.key.toLowerCase());
  if ((e.key === ' ' || e.key.toLowerCase() === 'k') && !finished) {
    if (player.grounded) {
      player.vy = config.jumpVelocity;
      player.grounded = false;
      player.jumps = 1;
    } else if (player.jumps === 1) {
      player.vy = config.doubleJumpVelocity;
      player.jumps = 2;
    }
  }
  if (e.key.toLowerCase() === 'r') restart();
});
window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));

function update(dt) {
  if (finished) return;

  const left = keys.has('a') || keys.has('arrowleft');
  const right = keys.has('d') || keys.has('arrowright');
  const dash = keys.has('shift') || keys.has('j');

  if (player.dashCooldownLeft > 0) player.dashCooldownLeft -= dt;
  if (player.dashTimeLeft > 0) {
    player.dashTimeLeft -= dt;
  } else {
    player.vx = (right - left) * config.moveSpeed;
    player.vy += config.gravity * dt;
    if (dash && player.canDash && player.dashCooldownLeft <= 0) {
      const dir = right ? 1 : left ? -1 : 1;
      player.vx = dir * config.dashSpeed;
      player.vy = 0;
      player.dashTimeLeft = config.dashDuration;
      player.dashCooldownLeft = config.dashCooldown;
      player.canDash = false;
    }
  }

  player.x += player.vx * dt;
  player.y += player.vy * dt;
  player.grounded = false;

  for (const p of platforms) {
    if (intersects(player, p) && player.vy >= 0 && player.y + player.h - player.vy * dt <= p.y) {
      player.y = p.y - player.h;
      player.vy = 0;
      player.grounded = true;
      player.jumps = 0;
      player.canDash = true;
    }
  }

  for (const h of hazards) {
    if (intersects(player, h)) {
      player.hearts -= 1;
      player.x = 40; player.y = 420; player.vx = 0; player.vy = 0;
      if (player.hearts <= 0) restart();
    }
  }

  for (const c of coins) {
    if (!c.got && intersects(player, { x: c.x, y: c.y, w: 12, h: 12 })) {
      c.got = true;
      player.coins += 1;
    }
  }

  if (intersects(player, goal)) {
    finished = true;
    const time = Math.round((performance.now() - startAt) / 1000);
    const score = (time <= 150 ? 3000 : time <= 240 ? 2200 : 1400) + player.hearts * 300 + player.coins * 10 + 1000;
    result.innerHTML = `<b>CHAPTER COMPLETE!</b><br>Time: ${time}s | Hearts: ${player.hearts} | Coins: ${player.coins}<br>Score: ${score}`;
    result.classList.remove('hidden');
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#261644';
  ctx.fillRect(0, 0, canvas.width, 40);
  ctx.fillStyle = '#ffd97a';
  ctx.font = '16px sans-serif';
  ctx.fillText(`Hearts: ${'❤'.repeat(Math.max(player.hearts,0))}`, 12, 25);
  ctx.fillText(`Coins: ${player.coins}`, 220, 25);

  ctx.fillStyle = '#6b4a2f';
  platforms.forEach(p => ctx.fillRect(p.x, p.y, p.w, p.h));

  ctx.fillStyle = '#b41d3a';
  hazards.forEach(h => ctx.fillRect(h.x, h.y, h.w, h.h));

  ctx.fillStyle = '#f5d94e';
  for (const c of coins) {
    if (!c.got) ctx.fillRect(c.x, c.y, 12, 12);
  }

  ctx.fillStyle = '#b58cff';
  ctx.fillRect(goal.x, goal.y, goal.w, goal.h);
  ctx.fillStyle = '#fff';
  ctx.fillText('GOAL', goal.x - 6, goal.y - 8);

  ctx.fillStyle = '#2f7fdb';
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

let last = performance.now();
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.033);
  last = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}
restart();
requestAnimationFrame(loop);
