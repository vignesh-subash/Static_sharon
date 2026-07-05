/* ============================================================
   SHARONPLY — Header
   ============================================================ */
(function() {
  'use strict';

  const header = document.querySelector('.site-header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item.has-sub');

  // ── Scroll shadow ──
  if (header) {
    window.addEventListener('scroll', SP.throttle(() => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, 50), { passive: true });
  }

  // ── Desktop dropdown hover (CSS handles it, but we need touch support) ──
  const navItems = document.querySelectorAll('.nav-item.has-dropdown');
  navItems.forEach(item => {
    let timeout;
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      item.classList.add('active');
    });
    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => item.classList.remove('active'), 180);
    });
  });

  // ── Mobile menu toggle ──
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // ── Mobile accordion sub-nav ──
  mobileNavItems.forEach(item => {
    const trigger = item.querySelector('.mobile-nav-link');
    const sub = item.querySelector('.mobile-nav-sub');
    if (trigger && sub) {
      trigger.addEventListener('click', () => {
        const isOpen = sub.classList.contains('open');
        // Close all others
        document.querySelectorAll('.mobile-nav-sub.open').forEach(s => {
          if (s !== sub) {
            s.classList.remove('open');
            s.style.maxHeight = '0';
            s.previousElementSibling?.querySelector('svg')?.classList.remove('rotate-180');
          }
        });
        sub.classList.toggle('open');
        sub.style.maxHeight = isOpen ? '0' : sub.scrollHeight + 'px';
        const chevron = trigger.querySelector('svg');
        if (chevron) chevron.classList.toggle('rotate-180');
      });
    }
  });
})();
