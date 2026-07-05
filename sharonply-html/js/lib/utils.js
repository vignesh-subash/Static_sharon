/* ============================================================
   SHARONPLY — Utility Library
   ============================================================ */
const SP = window.SP || {};

// ── Debounce ──
SP.debounce = (fn, delay = 150) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// ── Throttle ──
SP.throttle = (fn, limit = 100) => {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
};

// ── Smooth Scroll to element ──
SP.scrollTo = (target, offset = 0, duration = 800) => {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const start = window.pageYOffset;
  const end = el.getBoundingClientRect().top + start - offset;
  const startTime = performance.now();
  const ease = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (end - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
};

// ── Detect if element is in viewport ──
SP.isInView = (el, threshold = 0.2) => {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  return rect.top < vh * (1 - threshold) && rect.bottom > threshold * vh;
};

// ── Animate elements on scroll ──
SP.initScrollReveal = (selector = '[data-reveal]') => {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;
  const check = SP.throttle(() => {
    els.forEach(el => {
      if (SP.isInView(el)) el.classList.add('revealed');
    });
  }, 100);
  window.addEventListener('scroll', check, { passive: true });
  check();
};

// ── Responsive breakpoint check ──
SP.isMobile = () => window.innerWidth < 1024;
SP.isDesktop = () => window.innerWidth >= 1024;

// ── Format phone number ──
SP.cleanPhone = (phone) => phone.replace(/\s/g, '');

window.SP = SP;
