# SharonPly Website — HTML/CSS/JS Implementation

This folder contains a complete HTML/CSS/JS implementation of the SharonPly corporate website, decoupled from Next.js/React. It uses vanilla JavaScript with library-based coding patterns.

## File Structure

```
sharonply-html/
├── index.html              # Homepage (all 7 sections)
├── css/
│   ├── tokens.css           # Design tokens, reset, utility classes
│   ├── header.css           # Header (desktop + mobile)
│   ├── footer.css           # Footer (desktop grid + mobile accordion)
│   ├── homepage.css         # Homepage section styles
│   └── inner-page.css       # Inner page hero + content styles
├── js/
│   ├── lib/
│   │   └── utils.js         # Utility library (debounce, throttle, scroll, etc.)
│   ├── data.js              # All data arrays (apps, personas, testimonials, etc.)
│   ├── header.js            # Header logic (scroll shadow, mobile menu, dropdowns)
│   ├── footer.js            # Footer logic (accordion)
│   ├── hero-carousel.js     # Hero carousel (auto-advance, swipe, progress bar)
│   ├── homepage.js          # Homepage section population
│   ├── page-template.js     # Reusable page template helper
│   └── main.js              # Main initialization (social icons, footer accordion)
└── pages/
    ├── plywood.html         # Example: Product listing page
    ├── door.html            # [TODO]
    ├── veneer.html          # [TODO]
    ├── teak.html            # [TODO]
    ├── our-history.html     # [TODO] About page
    ├── contact.html         # [TODO] Contact page
    ├── dealers.html         # [TODO] Dealer locator
    ├── sales-team.html      # [TODO] Sales team page
    ├── blog.html            # [TODO] Blog listing
    ├── technology.html      # [TODO] Technology page
    ├── testimonials.html    # [TODO] Testimonials page
    ├── videos.html          # [TODO] Video gallery
    └── ...                  # All other pages follow the same pattern
```

## How to Create a New Page

Each page follows this pattern:

### 1. Include required CSS
```html
<link rel="stylesheet" href="../css/tokens.css" />
<link rel="stylesheet" href="../css/header.css" />
<link rel="stylesheet" href="../css/footer.css" />
<link rel="stylesheet" href="../css/inner-page.css" />
<!-- Add page-specific styles in a <style> tag -->
```

### 2. Copy Header HTML (from homepage or template)
The header block includes:
- `.site-header.desktop-header` — Full desktop navigation with dropdowns
- `.mobile-header` — Mobile header with hamburger
- `.mobile-menu` — Mobile slide-out menu

**To customize**: Mark the active nav item with `.active` class on the current page's nav-item.

### 3. Hero Banner Section
```html
<section class="inner-hero">
  <div class="inner-hero-bg">
    <!-- Either: -->
    <img src="hero-image.jpg" alt="" />
    <!-- Or fallback gradient: -->
    <div class="gradient-fallback"></div>
  </div>
  <div class="inner-hero-overlay"></div>
  <div class="inner-hero-tint"></div>
  <div class="inner-hero-deco-1"></div>
  <div class="inner-hero-deco-2"></div>
  <div class="inner-hero-content">
    <nav class="inner-breadcrumbs">...</nav>
    <div class="inner-title-block">
      <h1>Page Title</h1>
      <p>Subtitle (optional)</p>
    </div>
  </div>
  <div class="inner-hero-accent-line"></div>
</section>
```

### 4. Page Content (inside `<main class="container">`)
Add your section content here using the standard spacing classes:
- `.page-section` — Section wrapper with 48px padding
- `.page-section-title` — Section heading (Playfair Display, 24px)

### 5. Copy Footer HTML (from homepage or template)
The footer block includes:
- `.footer-main` — Desktop 5-column grid + mobile accordion + apps & social
- `.footer-bottom` — Copyright + terms bar

### 6. Include required JS
```html
<script src="../js/lib/utils.js"></script>
<script src="../js/data.js"></script>
<script src="../js/header.js"></script>
<script src="../js/footer.js"></script>
<script src="../js/main.js"></script>
<!-- Add page-specific JS for dynamic content -->
```

## Page Types Reference

| Type | Example | Sections |
|---|---|---|
| Homepage | `index.html` | Hero carousel, Product panels, Applications grid, Built For, Testimonials, Technology, Videos |
| Product Listing | `pages/plywood.html` | Hero + product cards grid (populated by JS data) |
| Product Detail | [TODO] | Image gallery, specs table, technical data, CTA — see `ProductDetailTemplate.tsx` |
| Content Page | `pages/our-history.html` | Hero + content sections + trust strip + CTA |
| Contact | [TODO] | Hero + contact form + address + map |
| Dealer Locator | [TODO] | Hero + state/city/search filters + dealer cards grid |
| Sales Team | [TODO] | Hero + search/filter + team member cards |
| Blog | [TODO] | Hero + blog post cards grid |
| Video Gallery | [TODO] | Hero + video thumbnails grid |

## Key Data Files

The `js/data.js` file contains ALL reusable data:
- `SP_DATA.applications` — 8 application use cases with SVG icons
- `SP_DATA.personas` — 4 persona profiles with recommendations
- `SP_DATA.testimonials` — 4 testimonial entries
- `SP_DATA.technologies` — 6 technology feature cards
- `SP_DATA.videos` — 6 video entries
- `SP_DATA.socialLinks` — 7 social media links

## Design Tokens

Defined in `css/tokens.css` as CSS custom properties:
- **Colors**: `--color-green-primary: #00793A`, `--color-gold: #ffc107`, etc.
- **Fonts**: `--font-display` (Playfair Display), `--font-condensed` (Barlow Condensed), etc.
- **Spacing**: `--page-max-width: 1280px`
- **Shadows**: `--shadow-sm` through `--shadow-xl`

## Full Pages List (50+ Total)

### Product Pages
| Page | File | Type |
|---|---|---|
| Plywood Listing | `/plywood` | Product listing |
| Sharon Platinum Ply | `/plywood/sharon-platinum-ply` | Product detail |
| Sharon Gold Marine Plywood | `/plywood/sharon-gold-marine-plywood` | Product detail |
| Sharon Prima 710 | `/plywood/sharon-prima-710` | Product detail |
| Sovereign 710 | `/plywood/sovereign-710` | Product detail |
| Sovereign Film Face | `/plywood/sovereign-film-face` | Product detail |
| Sovereign MR | `/plywood/sovereign-mr` | Product detail |
| Kumki OEM BWP Ply | `/plywood/kumki-oem-bwp-ply` | Product detail |
| Veneer Listing | `/veneer` | Product listing |
| Natural Wood Veneer | `/veneer/natural-wood-veneer` | Product detail |
| Exotic Natura | `/veneer/exotic-natura` | Product listing → species |
| Sharon Exoti Aura | `/veneer/sharon-exoti-aura` | Product listing → species |
| Pre-Polished Veneer | `/veneer/pre-polished-veneer` | Product detail |
| Doors Listing | `/door` | Product listing |
| Flush Doors | `/door/flush-doors` | Product detail |
| Sharon Gold Door | `/door/sharon-gold-door` | Product detail |
| Sovereign BWP Doors | `/door/sovereign-bwp-doors` | Product detail |
| Sovereign Door | `/door/sovereign-door` | Product detail |
| Teak | `/teak` | Product detail |
| Prelam | `/prelam` | Product detail |

### About Pages
| Page | File | Type |
|---|---|---|
| Our History | `/our-history` | Content page |
| Awards & Certifications | `/awards-certifications` | Content page |
| Our Factory | `/our-factory` | Content page |
| CSR | `/corporate-social-responsibility` | Listing + 12 detail pages |
| Careers | `/careers` | Content page |

### Contact Pages
| Page | File | Type |
|---|---|---|
| Contact Us | `/contact` | Contact form page |
| Find Us | `/find-us` | Map + addresses |
| Sales Team | `/contact/sales-team` | Team directory |
| Dealers | `/dealers` | Dealer locator |

### Other Pages
| Page | File | Type |
|---|---|---|
| Blog | `/blog` | Blog listing |
| Technology | `/technology` | Content page |
| Testimonials | `/testimonials` | Testimonial cards |
| Videos | `/videos` | Video gallery |
| Calendar | `/calendar` | Calendar page |
| Catalogue | `/catalogue` | Catalogue download |
| Media & Press | `/media-press` | Press listing |
| Search | `/search` | Search results |

## How to Create Each Page Type

### Product Listing Page (e.g., `/plywood`)
1. Copy `pages/plywood.html` as a template
2. Update breadcrumbs, title, subtitle
3. Change the product data in the JS array
4. Update hero gradient or add background image

### Product Detail Page (e.g., `/plywood/sharon-platinum-ply`)
1. Use hero banner with product name
2. Two-column layout: image gallery (left) + product info (right)
3. Technical Specifications table (uses grouped rendering)
4. Available thickness/sizes tags
5. CTA section (enquiry/contact)

### Content Page (e.g., `/our-history`)
1. Use hero banner with breadcrumbs
2. Content sections with heading + paragraph + optional images
3. Optional: Trust/milestones strip
4. Optional: CTA at bottom

### Contact Form Page
1. Hero banner
2. Two-column: contact form (left) + contact info (right)
3. Form fields: Name, Email, Phone, Message
4. Map embed (optional)

### Dealer Locator Page
1. Hero banner
2. Filter bar: state dropdown + city dropdown + search input + search button
3. Dealer cards grid (populated from data)
4. No results state

## JS Library Pattern

All JS follows a module-like pattern using an `SP` namespace object:
- `SP.debounce()`, `SP.throttle()` — Performance utilities
- `SP.scrollTo()` — Smooth scrolling
- `SP.isInView()` — Viewport detection
- `SP.initScrollReveal()` — Scroll-triggered animations
- `SP_DATA` — Global data object

Each JS file is wrapped in an IIFE for encapsulation:
```javascript
(function() {
  'use strict';
  // ...
})();
```
