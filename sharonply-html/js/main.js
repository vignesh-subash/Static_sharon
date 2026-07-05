/* ============================================================
   SHARONPLY — Main Initialization
   ============================================================ */
(function() {
  'use strict';

  // ── Social Icons ──
  const socialContainer = document.getElementById('socialIcons');
  if (socialContainer) {
    socialContainer.innerHTML = SP_DATA.socialLinks.map(s => `
      <a href="${s.href}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="${s.label}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          ${s.path}
        </svg>
      </a>
    `).join('');
  }

  // ── Footer mobile accordion ──
  const footerAccordion = document.querySelector('.footer-mobile');
  if (footerAccordion) {
    const sections = [
      { title: "Products", links: [{ n:"Plywood", h:"/plywood" },{ n:"Veneer", h:"/veneer" },{ n:"Doors", h:"/door" }] },
      { title: "Technology", links: [{ n:"VIRASAFE", h:"/technology" },{ n:"FIRESAVE", h:"/technology" },{ n:"E-ZERO", h:"/technology" },{ n:"Sharon Secure", h:"/technology" }] },
      { title: "Company", links: [{ n:"Our History", h:"/our-history" },{ n:"CSR", h:"/corporate-social-responsibility" },{ n:"Blog", h:"/blog" },{ n:"Testimonials", h:"/testimonials" },{ n:"Videos", h:"/videos" }] },
      { title: "Contact Us", links: [{ n:"Find Us", h:"/contact" },{ n:"Sales Team", h:"/contact/sales-team" },{ n:"Careers", h:"/careers" },{ n:"Dealers", h:"/dealers" }], extra: '<a href="tel:+914439403950" style="font-size:13px;color:rgba(255,255,255,0.65)">+91 44 3940 3950</a><a href="mailto:admin@sharonply.com" style="font-size:13px;color:rgba(255,255,255,0.65)">admin@sharonply.com</a>' },
    ];

    footerAccordion.innerHTML = sections.map(s => `
      <div class="footer-accordion-item">
        <button class="footer-accordion-trigger">
          ${s.title}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="footer-accordion-content">
          <div class="footer-accordion-content-inner">
            ${s.links.map(l => `<a href="${l.h}">${l.n}</a>`).join('')}
            ${s.extra || ''}
          </div>
        </div>
      </div>
    `).join('');

    // Re-init accordion listeners
    document.querySelectorAll('.footer-accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isOpen = content.classList.contains('open');
        document.querySelectorAll('.footer-accordion-content.open').forEach(c => {
          if (c !== content) {
            c.classList.remove('open');
            c.style.maxHeight = '0';
            c.previousElementSibling.classList.remove('open');
          }
        });
        content.classList.toggle('open');
        content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
        trigger.classList.toggle('open');
      });
    });
  }

  // ── ScrollReveal ──
  SP.initScrollReveal('[data-reveal]');

  console.log('SharonPly — Site initialized');
})();
