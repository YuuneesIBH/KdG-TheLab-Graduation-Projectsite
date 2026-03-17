(function () {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  const stars = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 160; i += 1) {
    stars.push({
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 2000 - 1000,
      z: Math.random() * 2000,
      pz: 0,
    });
  }

  function draw() {
    ctx.fillStyle = "rgba(13,4,2,0.14)";
    ctx.fillRect(0, 0, width, height);

    for (const star of stars) {
      star.pz = star.z;
      star.z -= 2.4;

      if (star.z <= 0) {
        star.z = 2000;
        star.x = Math.random() * 2000 - 1000;
        star.y = Math.random() * 2000 - 1000;
      }

      const sx = (star.x / star.z) * width * 0.5 + width / 2;
      const sy = (star.y / star.z) * height * 0.5 + height / 2;
      const spx = (star.x / star.pz) * width * 0.5 + width / 2;
      const spy = (star.y / star.pz) * height * 0.5 + height / 2;
      const size = Math.max(0.3, (1 - star.z / 2000) * 2.2);
      const alpha = Math.min(1, (1 - star.z / 2000) * 1.6);
      const r = Math.floor(185 + 70 * (1 - star.z / 2000));
      const g = Math.floor(105 + 85 * (1 - star.z / 2000));
      const b = Math.floor(30 + 40 * (1 - star.z / 2000));

      ctx.beginPath();
      ctx.moveTo(spx, spy);
      ctx.lineTo(sx, sy);
      ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.75})`;
      ctx.lineWidth = size;
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  draw();
})();

(function () {
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

(function () {
  const scoreEl = document.getElementById("s-score");
  if (!scoreEl) return;

  let score = 0;
  window.setInterval(() => {
    score += Math.floor(Math.random() * 420 + 60);
    scoreEl.textContent = String(score).padStart(6, "0");
  }, 1100);
})();
