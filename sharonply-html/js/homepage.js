/* ============================================================
   HOMEPAGE — Section Population
   ============================================================ */
(function() {
  'use strict';

  const D = SP_DATA;

  // ── Applications Grid ──
  const appsGrid = document.getElementById('appsGrid');
  if (appsGrid) {
    appsGrid.innerHTML = D.applications.map(a => `
      <a href="${a.href}" class="app-card">
        <div class="app-icon">${a.icon}</div>
        <div class="app-title">${a.title}</div>
        <div class="app-link">View Products →</div>
      </a>
    `).join('');
  }

  // ── Built For ──
  const sidebar = document.getElementById('personaSidebar');
  const main = document.getElementById('personaMain');
  let activePersona = 0;

  function renderPersona(index) {
    const p = D.personas[index];
    if (!p) return;

    // Sidebar buttons
    if (sidebar) {
      sidebar.innerHTML = D.personas.map((persona, i) => {
        const icons = ['architect', 'carpenter', 'builder', 'homeowner'];
        const iconPaths = [
          '<path d="M12 3l8 15H4l8-15z"/><path d="M8 21l4-7 4 7H8z"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
          '<path d="M14.7 3a1 1 0 0 1 .6.3l2.7 2.7a1 1 0 0 1 0 1.4L11 14H8l-1-3 4.3-4.3a1 1 0 0 1 1.4 0z"/><path d="M5 19h14"/><path d="M7 14l-3 5"/><path d="M17 14l3 5"/>',
          '<rect x="4" y="3" width="16" height="18" rx="1"/><rect x="8" y="13" width="8" height="8" rx="0.5"/><line x1="12" y1="3" x2="12" y2="7"/>',
          '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        ];
        return `
          <button class="persona-btn ${i === index ? 'active' : ''}" data-persona="${i}">
            <span class="persona-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                ${iconPaths[i]}
              </svg>
            </span>
            <span>${persona.label}</span>
          </button>
        `;
      }).join('');

      // Add click handlers
      sidebar.querySelectorAll('.persona-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.persona);
          activePersona = idx;
          renderPersona(idx);
        });
      });
    }

    // Main content
    if (main) {
      main.innerHTML = `
        <div class="builtfor-hero">
          <img src="${p.image}" alt="${p.name}" class="builtfor-hero-image" />
          <div class="builtfor-hero-name">${p.name}</div>
          <div class="builtfor-hero-role">${p.role}</div>
          <div class="builtfor-hero-desc">${p.desc}</div>
          <a href="/plywood" class="builtfor-hero-cta">Explore Products</a>
        </div>
        <div class="builtfor-recommended">
          <h4>Recommended for You</h4>
          <div class="builtfor-cards">
            ${p.recommendations.map(r => `
              <div class="builtfor-card">
                <img src="${r.image}" alt="${r.name}" />
                <div class="builtfor-card-info">
                  <h5>${r.name}</h5>
                  <p>${r.benefit}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  renderPersona(0);

  // ── Testimonials ──
  let testIndex = 0;
  const quoteEl = document.getElementById('testimonialQuote');
  const authorEl = document.getElementById('testimonialAuthor');
  const testPrev = document.getElementById('testPrev');
  const testNext = document.getElementById('testNext');

  function renderTestimonial(idx) {
    const t = D.testimonials[idx];
    if (!t) return;
    if (quoteEl) quoteEl.textContent = `"${t.quote}"`;
    if (authorEl) authorEl.innerHTML = `<strong>${t.author}</strong><span>${t.role}</span>`;
  }

  if (testPrev) testPrev.addEventListener('click', () => {
    testIndex = (testIndex - 1 + D.testimonials.length) % D.testimonials.length;
    renderTestimonial(testIndex);
  });
  if (testNext) testNext.addEventListener('click', () => {
    testIndex = (testIndex + 1) % D.testimonials.length;
    renderTestimonial(testIndex);
  });

  renderTestimonial(0);

  // ── Technology Grid ──
  const techGrid = document.getElementById('techGrid');
  if (techGrid) {
    const techIcons = {
      waterproof: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
      virasafer: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      firesave: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
      ezero: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>',
      termite: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      warranty: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    };

    techGrid.innerHTML = D.technologies.map(t => `
      <div class="tech-card">
        <div class="tech-card-icon" style="color:${t.color}">${techIcons[t.icon] || ''}</div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      </div>
    `).join('');
  }

  // ── Video Grid ──
  const videoGrid = document.getElementById('videoGrid');
  if (videoGrid) {
    videoGrid.innerHTML = D.videos.map(v => `
      <div class="video-card">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy" />
        <div class="video-play-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <div class="video-card-title">${v.title}</div>
      </div>
    `).join('');
  }
})();
