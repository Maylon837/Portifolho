/* ==========================================================================
   COMPORTAMENTO GERAL DO SITE
   - Abre/fecha o menu no celular
   - Anima os blocos de conteúdo quando entram na tela
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "✕" : "☰";
    });
    // Fecha o menu automaticamente ao tocar em um link (celular)
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }

  // Animação leve de entrada (ignora se a pessoa prefere menos movimento)
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealEls = document.querySelectorAll(".reveal");
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
