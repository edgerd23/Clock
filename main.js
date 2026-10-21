// Alama za dakika (60 ticks, kila ya 5 ni kubwa)
const clock = document.getElementById('clock');
for (let i = 0; i < 60; i++) {
  const t = document.createElement('div');
  t.className = 'tick' + (i % 5 === 0 ? ' big' : '');
  t.style.transform = `rotate(${i * 6}deg)`;
  clock.appendChild(t);
}

const pad = (n) => String(n).padStart(2, '0');

function updateClock() {
  const now = new Date();
  const h = (now.getHours() % 12) * 30 +
    now.getMinutes() * 0.5;
  const m = now.getMinutes() * 6;
  const s = now.getSeconds() * 6;

  document.getElementById('hourHand').style
    .transform = `rotate(${h}deg)`;
  document.getElementById('minuteHand').style
    .transform = `rotate(${m}deg)`;
  document.getElementById('secondHand').style
    .transform = `rotate(${s}deg)`;

  // Saa ya digital na tarehe
  document.getElementById('digitalTime').textContent =
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  document.getElementById('digitalDate').textContent =
    now.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short'
    });
}
updateClock();
setInterval(updateClock, 1000);