/* ============================================================
   HERO CAROUSEL
   ============================================================ */
(function() {
  'use strict';

  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const progressBar = document.getElementById('heroProgress');
  const prevBtn = document.querySelector('.hero-arrow-left');
  const nextBtn = document.querySelector('.hero-arrow-right');
  const heroSection = document.querySelector('.hero-carousel');

  if (!slides.length) return;

  let current = 0;
  let isTransitioning = false;
  let autoTimer = null;
  let progressTimer = null;
  let paused = false;

  const TOTAL = slides.length;
  const DELAY_MS = 8000;
  const TRANSITION_MS = 900;

  function goTo(index) {
    if (isTransitioning || index === current) return;
    isTransitioning = true;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });

    current = index;
    resetProgress();

    setTimeout(() => {
      isTransitioning = false;
    }, TRANSITION_MS);
  }

  function next() { goTo((current + 1) % TOTAL); }
  function prev() { goTo((current - 1 + TOTAL) % TOTAL); }

  function resetProgress() {
    if (progressTimer) clearInterval(progressTimer);
    if (progressBar) progressBar.style.width = '0%';
    if (paused) return;

    const step = 100 / (DELAY_MS / 50);
    let p = 0;
    progressTimer = setInterval(() => {
      p = Math.min(p + step, 100);
      if (progressBar) progressBar.style.width = p + '%';
      if (p >= 100) {
        clearInterval(progressTimer);
        if (!paused) next();
      }
    }, 50);
  }

  function startAuto() {
    if (autoTimer) clearTimeout(autoTimer);
    if (!paused) {
      autoTimer = setTimeout(() => {
        next();
        startAuto();
      }, DELAY_MS);
    }
  }

  // ── Event Listeners ──
  if (prevBtn) prevBtn.addEventListener('click', () => { paused = false; prev(); clearTimeout(autoTimer); resetProgress(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { paused = false; next(); clearTimeout(autoTimer); resetProgress(); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index);
      paused = false;
      goTo(idx);
      clearTimeout(autoTimer);
      resetProgress();
      startAuto();
    });
  });

  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
      paused = true;
      if (progressTimer) clearInterval(progressTimer);
    });
    heroSection.addEventListener('mouseleave', () => {
      paused = false;
      resetProgress();
      startAuto();
    });
  }

  // ── Swipe support ──
  let touchStartX = 0, touchStartY = 0;
  heroSection.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });
  heroSection.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      paused = false;
      if (dx < 0) next(); else prev();
      clearTimeout(autoTimer);
      resetProgress();
      startAuto();
    }
  }, { passive: true });

  // ── Init ──
  slides.forEach((s, i) => s.classList.toggle('active', i === 0));
  dots.forEach((d, i) => d.classList.toggle('active', i === 0));
  startAuto();
  resetProgress();
})();
