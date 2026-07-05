/* ============================================================
   PAGE TEMPLATE — Render a page using the InnerPageLayout
   ============================================================ */
const SP_PAGE = {

  // Render breadcrumbs into a container
  renderBreadcrumbs: (container, items) => {
    if (!container) return '';
    const html = `
      <nav aria-label="Breadcrumb" class="inner-breadcrumbs">
        <ol>
          <li><a href="/">Home</a></li>
          ${items.map((item, i) => `
            <li style="display:flex;align-items:center;gap:4px">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:rgba(255,255,255,0.3)"><polyline points="9 18 15 12 9 6"/></svg>
              ${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span class="crumb-current">${item.label}</span>`}
            </li>
          `).join('')}
        </ol>
      </nav>
    `;
    if (container) container.innerHTML = html;
    return html;
  },

  // Build the hero banner HTML
  heroBanner: (breadcrumbs, title, subtitle, heroImage) => {
    const imgHtml = heroImage
      ? `<img src="${heroImage}" alt="" />`
      : '<div class="gradient-fallback"></div>';
    return `
      <section class="inner-hero">
        <div class="inner-hero-bg">${imgHtml}</div>
        <div class="inner-hero-overlay"></div>
        <div class="inner-hero-tint"></div>
        <div class="inner-hero-deco-1"></div>
        <div class="inner-hero-deco-2"></div>
        <div class="inner-hero-content">
          <nav aria-label="Breadcrumb" class="inner-breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              ${breadcrumbs.map((item, i) => `
                <li style="display:flex;align-items:center;gap:4px">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:rgba(255,255,255,0.3)"><polyline points="9 18 15 12 9 6"/></svg>
                  ${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span class="crumb-current" style="color:rgba(255,255,255,0.8);font-weight:500;font-size:12px;letter-spacing:0.3px">${item.label}</span>`}
                </li>
              `).join('')}
            </ol>
          </nav>
          <div class="inner-title-block">
            <h1>${title}</h1>
            ${subtitle ? `<p>${subtitle}</p>` : ''}
          </div>
        </div>
        <div class="inner-hero-accent-line"></div>
      </section>
    `;
  },

  // Render a page with hero + content
  render: (container, config) => {
    if (!container) return;
    const { breadcrumbs, title, subtitle, heroImage, content } = config;
    container.innerHTML = `
      ${SP_PAGE.heroBanner(breadcrumbs, title, subtitle, heroImage)}
      <main class="inner-page-content container">
        ${content}
      </main>
    `;
  }
};
