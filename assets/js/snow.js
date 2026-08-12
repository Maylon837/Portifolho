/* ==========================================================================
   EFEITO DE NEVE — assinatura visual do site.
   Desenha flocos caindo com leve balanço, em 3 camadas de profundidade
   (flocos ao fundo = menores, mais lentos, mais transparentes).
   Não precisa editar este arquivo para nada relacionado a conteúdo.
   ========================================================================== */
(function () {
  const canvas = document.getElementById("snowfall");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let width, height, flakes;

  // Menos flocos e mais lentos se a pessoa pedir menos movimento no sistema.
  const FLAKE_COUNT = prefersReducedMotion ? 25 : 90;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeFlake() {
    const depth = Math.random(); // 0 = fundo, 1 = frente
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.6 + depth * 2.4,
      speed: (prefersReducedMotion ? 0.15 : 0.35) + depth * (prefersReducedMotion ? 0.15 : 0.9),
      drift: Math.random() * 1.2 - 0.6,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.012,
      opacity: 0.25 + depth * 0.55,
    };
  }

  function init() {
    resize();
    flakes = Array.from({ length: FLAKE_COUNT }, makeFlake);
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#f4faf7";

    for (const f of flakes) {
      f.sway += f.swaySpeed;
      f.x += Math.sin(f.sway) * f.drift * 0.4;
      f.y += f.speed;

      if (f.y > height + 4) {
        f.y = -4;
        f.x = Math.random() * width;
      }
      if (f.x > width + 4) f.x = -4;
      if (f.x < -4) f.x = width + 4;

      ctx.globalAlpha = f.opacity;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  init();
  tick();
})();
