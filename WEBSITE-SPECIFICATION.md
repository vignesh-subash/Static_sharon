# SharonPly Website — Complete Content & Structure Specification

> **Generated from the current Next.js + React + TypeScript + Tailwind CSS codebase**
> Use this document as a prompt to rebuild the entire site in HTML/CSS/JS.

---

## 1. SITE OVERVIEW

### Brand
- **Name**: SharonPly (SharonPly — Premium BWP & Marine Plywood Manufacturer)
- **Tagline**: "India's Most Trusted Plywood Since 1987"
- **Domain**: sharonply.com
- **Type**: Corporate website — product showcase + dealer locator + brand story

### Design Theme
- **Primary Color**: `#00793A` (Sharon Green)
- **Accent Color**: `#ffc107` (Gold/Yellow)
- **Dark Text**: `#020202` or `#1a1a1a`
- **Light Text**: `#6b7280`, `#9ca3af`, `#888`
- **Background**: `#FFFFFF`, `#f9fafb`, `#f8faf9`

### Fonts
| Usage | Font | CSS Variable |
|---|---|---|
| Display/Headings | Playfair Display | `var(--font-playfair)` |
| Condensed UI | Swiss 721 Condensed / Barlow Condensed | `var(--font-barlow-condensed)` |
| Body | Inria Sans | `var(--font-inria-sans)` |
| Alternate | Afacad | `var(--font-afacad)` |
| Sans | Urbanist | `var(--font-urbanist)` |
| Decorative | Cinzel | `var(--font-cinzel)` |

### Global Layout
- **Header**: Fixed/sticky top, 46px nav bar, responsive with mobile hamburger
- **Footer**: Dark green `#00793A` with white text, 5-column desktop grid
- **Body font**: `var(--font-sans)` which maps to Inria Sans

---

## 2. SHARED LAYOUT COMPONENTS

### 2A. HEADER (`Header.tsx`)

**Structure**: Two rows on desktop, stacked:
- **Row 1** (58px height): Logo (left) + SearchBar (center) + Phone/WhatsApp/Enquiry (right)
- **Row 2** (46px height): Main navigation bar with dropdowns

**Desktop Navigation Items** (left to right):

| Label | Type | Href | Dropdown Items |
|---|---|---|---|
| Home | Link | `/` | — |
| Plywood | Dropdown | `/plywood` | Sharon Platinum Ply, Sharon Gold Marine Plywood, Sharon Prima 710, Sovereign 710, Sovereign Film Face, Sovereign MR, Kumki OEM BWP |
| Veneer | Dropdown | `/veneer` | Natural Wood Veneer, Exotic Natura, Sharon Exoti Aura, Pre-Polished Veneer |
| Doors | Dropdown | `/door` | Flush Doors, Sharon Gold Door, Sovereign BWP Doors, Sovereign Door |
| Teak | Link | `/teak` | — |
| Technology | Dropdown | `/technology` | Overview, VIRASAFE, FIRESAVE, E-ZERO, Sharon Secure |
| About Us | Dropdown | `/our-history` | Our History, Awards & Certifications, Our Factory, CSR, Careers |
| Contact | Dropdown | `/contact` | Find Us (icon), Sales Team (icon), Dealers (icon) |
| More | Dropdown | — | Calendar, Blog, Catalogue, Videos, Testimonials, Media & Press |

**Mobile Header**:
- Hamburger menu (left) + Logo (center) + Search (right)
- Accordion-style navigation with expandable sections
- Products shown as a nested accordion

**Logo Image**: `/images/sharon-corporate-logo.webp` (308×85, white background variant)

**Phone**: `+91 44 3940 3950`
**WhatsApp**: `+91 44 3940 3950`

---

### 2B. FOOTER (`Footer.tsx`)

**Structure**: Desktop 5-column grid, Mobile accordion

**Desktop Columns**:

| Column | Content |
|---|---|
| Col 1 (span 2) | Logo (`/images/sharon-corporate-logo.webp`), Company description |
| Col 2 | **PRODUCTS**: Plywood, Veneer, Doors |
| Col 3 | **TECHNOLOGY**: VIRASAFE, FIRESAVE, E-ZERO, Sharon Secure |
| Col 4 | **COMPANY**: Our History, CSR, Blog, Testimonials, Videos, Calendar, Catalogue |
| Col 5 | **CONTACT US**: Find Us, Sales Team, Careers, Dealers, Phone: +91 44 3940 3950, Email: admin@sharonply.com |

**Row 2** (Desktop):
- **Left section**: "GET THE APP" heading, "Sharon Secure" subheading
  - Download on App Store → https://apps.apple.com/in/app/sharon-secure/id6444338080
  - Get it on Google Play → https://play.google.com/store/apps/details?id=com.loyaltyworks.sharonply&hl=en_IN
- **Right section**: "Follow us" heading + Social media icons

**Social Media Links**:
| Platform | URL |
|---|---|
| Facebook | https://www.facebook.com/SharonPlyIndia |
| Instagram | https://www.instagram.com/sharonplyindia/ |
| X (Twitter) | https://x.com/SharonPlyIndia |
| Threads | https://www.threads.net/@sharonplyindia |
| YouTube | https://youtube.com/sharonply/ |
| LinkedIn | https://www.linkedin.com/company/sharon-ply/ |
| WhatsApp | https://wa.me/914439403950 |

**Bottom Bar**: Copyright © 2026 SharonPly | Terms and Conditions (`/terms-and-conditions`)

**Shared SVG Icons used**: ChevronDown, ChevronDownSm, ArrowRight — defined once at top of Header

---

### 2C. CLIENT SHELL (`ClientShell.tsx`)
- Wraps all pages
- Order: SmoothScrollProvider → Header → `<main>{children}</main>` → Footer
- Outside smooth wrapper: ClientChrome (Fixed CTA Stack, ScrollToTop, StickyFormBar)

---

## 3. HOMEPAGE (`/`)

### Section Order (inside `HomepageScrollSnap`):

```
Section 1: HeroCarousel — Full-screen auto-advancing image carousel (snap-section)
Section 2: ExpandingProductPanels — Product category panels (snap-section)
Section 3: UseCaseGrid — 4×2 grid of application use cases (snap-section)
Section 4: VerticalTabPanel — "Built For" persona selector (snap-section)
Section 5: TestimonialBlock — Customer testimonials (snap-section)
Section 6: FeatureGrid — Technology/feature highlights (snap-section)
Section 7: VideoGallery — Product videos (snap-section)
```

### 3A. HeroCarousel Section

**Full-screen hero** (`height: 100vh`, min 480px) with 4 slides, auto-advancing every 8-9 seconds.

**Slides**:

| # | Image | Headline (left-aligned) |
|---|---|---|
| 1 | `/images/sharon-factory-aerial.jpg` | INDIA'S LARGEST **PLYWOOD** MANUFACTURING FACILITY — Gummidipoondi location pin |
| 2 | `/images/hero-slide1-interior.jpg` | SHARON **PLYWOOD** |
| 3 | `/images/veneer-slide-2.jpg` | SHARON **VENEER** |
| 4 | `/images/hero-slide3-interior.jpg` | SHARON **DOORS** |

**Visual Elements**:
- Dark gradient overlay (105deg, starts at rgba(2,8,4,0.60))
- Slide transitions: 900ms fade, zoom scale(1.04 → 1) over 14s
- Progress bar at bottom of hero
- Pause on hover, swipe support on mobile
- Arrow navigation (left/right) + dot indicators

---

### 3B. ExpandingProductPanels Section

**"Solutions — Product Panels"** heading in Playfair Display, `#00793A` color.

Four product panels expanding horizontally on hover/active:

| Panel | Color | Icon SVG Path |
|---|---|---|
| Plywood | `#00793A` | Mountain/hex path |
| Veneer | `#8B4513` | Tree/leaf path |
| Doors | `#B8860B` | Rectangle/door path |
| Teak | `#5D4037` | Diamond path |

Each panel shows on hover: product name (large), brief description, "Explore" link.

---

### 3C. UseCaseGrid Section

**Heading**: "Right Plywood for every **purpose**" (Playfair Display, green)

4×2 grid of application cards:

| # | Icon Key | Title | Link |
|---|---|---|---|
| 01 | kitchen | Kitchen Cabinets | `/plywood` |
| 02 | wardrobe | Wardrobes | `/plywood` |
| 03 | vanity | Bathroom Vanities | `/plywood` |
| 04 | office | Office Furniture | `/plywood` |
| 05 | commercial | Commercial Interiors | `/plywood` |
| 06 | hospitality | Hospitality | `/plywood` |
| 07 | retail | Retail & Displays | `/plywood` |
| 08 | furniture | Furniture Design | `/plywood` |

Each card has SVG icon (76×76) + title + "View Products →" link. Hover: background turns `#0F0F0E`, text turns white, link turns `#ffc107`.

---

### 3D. VerticalTabPanel Section — "Built For"

**Heading**: "Built for every **creator** of spaces" (Playfair Display, green)

**Structure**: Left sidebar with persona buttons, right panel with hero card + product recommendations

**Personas** (4):

| # | Icon | Label |
|---|---|---|
| 0 | Architect (triangle building icon) | Architects & Interior Designers |
| 1 | Carpenter (saw/tool icon) | Carpentry & Contractors |
| 2 | Builder (building icon) | Builders & Developers |
| 3 | Home (house icon) | Home Owners |

**For each persona**:
- Hero image (24/9 aspect ratio) with name + role + description overlay
- "Explore Products" CTA button
- "Recommended for You" section with 3 product cards (4/3 aspect ratio images)

---

### 3E. TestimonialBlock Section

**Layout**: Centered content, left side testimonial text, right side image placeholder

**Content**:
- Quote text in large serif font
- Author name + role
- Navigation arrows (left/right) at bottom-left
- "All Testimonials →" link at bottom-right

---

### 3F. FeatureGrid Section

**Heading**: "What makes SharonPly **different** from every other" (Playfair Display, green)

Grid of technology/feature cards:
- Each card: icon + title + description
- Icons for: Waterproof, VIRASAFE, FIRESAVE, E-ZERO, Termite Proof, Lifetime Warranty

---

### 3G. VideoGallery Section

Grid of video thumbnails with play button overlay. Click opens video player.

---

## 4. INNER PAGE TEMPLATE (`InnerPageLayout.tsx`)

Used by all inner pages. Structure:

```
┌─────────────────────────────────────┐
│  Hero Banner (38vw height,          │
│  max 280px / desktop: 60vh, 560px)  │  ← Image or green gradient background
│                                     │
│  Breadcrumb: Home > Page > Sub      │
│                                     │
│  ┌─────────────────────────────┐    │
│  │      PAGE TITLE             │    │  ← Glassmorphic card (backdrop-filter blur)
│  │      Subtitle (optional)    │    │
│  └─────────────────────────────┘    │
│                                     │
│  Gold accent line at bottom         │
└─────────────────────────────────────┘
│                                     │
│  {children — page content}          │
│                                     │
└─────────────────────────────────────┘
```

**Props**:
- `breadcrumbs`: `{ label: string; href?: string }[]`
- `title`: string
- `subtitle?`: string
- `heroImage?`: string (URL for background image; fallback is green gradient)
- `children`: ReactNode

**Layout**: `min-h-screen`, content in `<main>` tag below hero.

**Hero fallback gradient**: `linear-gradient(135deg, #00793A 0%, #005a2b 60%, #003d1e 100%)`

---

## 5. PRODUCT PAGES

### 5A. Product Detail Template (`ProductDetailTemplate.tsx`)

**Used by**: All individual product pages (/plywood/sharon-platinum-ply, /door/flush-doors, /veneer/natural-wood-veneer, etc.)

**Props**:
- `name`: string — Product name
- `grade`: string — e.g. "BWP Grade", "IS:710"
- `gradeColor`: string — color hex for the grade badge
- `tagline`: string — short description
- `description`: string — long HTML description
- `specifications`: `{ label: string; value: string }[]` — technical specs table
- `technicalTable?`: `TechTableRow[]` — hierarchical tech specs
- `applications?`: string[] — application tags
- `images`: string[] — product images
- `badges?`: string[] — star/badge labels
- `thickness?`: string[] — available thickness options
- `sizes?`: string[] — available size options
- `firesafeTests?`: `{ label: string; value: string }[]`
- `blockboardNote?`: string

**Product Images Section** (left column):
- Main image display (larger)
- Thumbnail gallery below (if multiple images)
- Grade badge overlay on image
- Left/right arrow navigation
- Dot indicator buttons
- Click opens lightbox viewer

**Product Info Section** (right column):
- Badges (star icons with labels)
- Product name (h1, large bold)
- Grade badge
- Tagline description
- Long description (HTML)
- Applications tags (pill-shaped buttons linking to /plywood etc.)
- Thickness tags (pill-shaped)
- Size tags

**Technical Specifications Section** (full width):
- "Complete Details" label (gold, uppercase)
- "Technical Specifications" heading
- Two-column table layout
  - Left table: Individual specs (Specification → Value rows)
  - Right table: Hierarchical tech specs (grouped by category)
- "Available Thickness" tags
- "Available Sizes" tags

**Bottom CTA Section**: Contact/Enquiry form or link

---

### 5B. Product Catalog Pages

#### Plywood Page (`/plywood`)
- Product listing grid
- Products: Sharon Platinum Ply, Sharon Gold Marine Plywood, Sharon Prima 710, Sovereign 710, Sovereign Film Face, Sovereign MR, Kumki OEM BWP Ply
- Each: Image + Name + Brief + "View Details →"

#### Doors Page (`/door`)
- Product listing grid
- Products: Flush Doors, Sharon Gold Door, Sovereign BWP Doors, Sovereign Door

#### Veneer Page (`/veneer`)
- Product listing + subcategories: Natural Wood Veneer, Exotic Natura (→ species), Sharon Exoti Aura (→ species), Pre-Polished Veneer

#### Teak Page (`/teak`)
- Single product page

#### Prelam Page (`/prelam`)
- Prelaminated product page

---

## 6. ABOUT PAGES

### 6A. Our History (`/our-history`)
**Component**: `AboutTimeline.tsx`

**Sections**:
1. **HERO**: Banner with "Our History" title
2. **Founder's Vision**: Founder image + quote text
3. **Timeline**: Vertical timeline with milestone entries
4. **Trust Strip**: 6-column stats grid
   - Since 1987 — Manufacturing Legacy
   - Integrated Facility — Gummidipoondi, Chennai
   - BIS Certified — Quality Assurance
   - E-Zero Options — Eco-Friendly Solutions
   - Trusted by Professionals — Architects & Builders
   - Dealer Network — South India Wide
5. **Highlights**: Key achievement cards
6. **Why Choose Us**: Benefit cards (3 columns)
7. **CTA**: Enquiry/contact strip

### 6B. Awards & Certifications (`/awards-certifications`)
- Grid of award logos/cards
- Certification badges

### 6C. Our Factory (`/our-factory`)
**Component**: `FactorySection.tsx`
- Facility images and description
- Manufacturing capabilities
- Infrastructure details

### 6D. CSR (`/corporate-social-responsibility`)
**Component**: `CsrBanner.tsx`
- Grid of CSR initiative cards
- Each with image, title, description
- Individual CSR initiative pages:
  - Beach Cleanup, COVID Relief, Flood Relief, Free Helmet Distribution, Grow The Green, Health Camps, I Am Strongest, I Say No To Plastic, Paper Bags, Quench The Thirst, Umbrella, World Environment Day

### 6E. Careers (`/careers`)
- Job listings
- Application process

---

## 7. CONTACT PAGES

### 7A. Contact Us (`/contact`)
**Component**: `ContactContent.tsx`
- Contact form
- Office address
- Phone/email links

### 7B. Find Us (`/find-us`)
**Component**: `FindUsClient.tsx`
- Office location with map embed
- Branch addresses

### 7C. Sales Team (`/contact/sales-team`)
**Component**: Uses `InnerPageLayout`
- Team member cards grouped by department (Sales, Projects) and region
- Each card: Avatar (initials, gradient), Name, Designation, Phone, Email
- Search + City filter
- 30+ team members across Tamil Nadu

### 7D. Dealers (`/dealers`)
**Component**: `DealersClient.tsx`
- State selector (Tamil Nadu, Andhra Pradesh, Telangana)
- City dropdown (filtered by state)
- Search input + Search button
- Dealer cards in alphabetical order
- 120+ dealers across 3 states
- Each card: Name, Contact person, Division badges, Phone, Address, Call button, Map button

---

## 8. OTHER PAGES

### 8A. Blog (`/blog`)
**Component**: `BlogLanding.tsx`
- Blog post cards grid
- Categories: General, Technology, CSR, Events

### 8B. Individual Blog Post (`/[year]/[month]/[slug]`)
**Component**: `BlogPostTemplate.tsx`
- Featured image, title, date, author
- Content body with WordPress-style blocks
- Related posts section

### 8C. Technology (`/technology`)
- VIRASAFE, FIRESAVE, E-ZERO, Sharon Secure overview
- Technology feature cards with icons

### 8D. Testimonials (`/testimonials`)
- Customer testimonial cards grid
- Quote, name, role, company

### 8E. Videos (`/videos`)
**Component**: `VideoGallery.tsx`
- Grid of video thumbnails with play buttons
- Video categories

### 8F. Calendar (`/calendar`)
- Event/calendar page

### 8G. Catalogue (`/catalogue`)
**Component**: `CatalogueClient.tsx`
- Product catalogue download/request
- PDF catalogues

### 8H. Media & Press (`/media-press`)
- Press releases
- Media coverage

### 8I. Search (`/search`)
- Search results page

---

## 9. SHARED COMPONENTS

### SearchBar (`SearchBar.tsx`)
- Search input with icon
- Auto-suggest/dropdown
- Navigates to /search?q=query

### StickyFormBar (`StickyFormBar.tsx`)
- Fixed bottom bar with enquiry form
- Shown/hidden based on scroll position
- Hidden on homepage

### FixedCtaStack (`FixedCtaStack.tsx`)
- Fixed position bottom-right button stack
- Phone, WhatsApp, Email buttons

### ScrollToTop (`ScrollToTop.tsx`)
- Floating button that appears on scroll
- Smooth scrolls to top

### EnquiryModal (`EnquiryModal.tsx`)
- Modal form for product enquiries
- Fields: Name, Email, Phone, Message

### HomepageScrollSnap (`HomepageScrollSnap.tsx`)
- CSS scroll-snap container for homepage sections
- Side navigation dots
- Smooth scroll between sections

### SmoothScrollProvider (`SmoothScrollProvider.tsx`)
- Lenis smooth scrolling library integration
- Easing: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`

---

## 10. DATA ARRAYS

### 10A. Dealers Data
**States**: Tamil Nadu, Andhra Pradesh, Telangana
**Total dealers**: ~150+
**Each dealer**: name, contact, address, city, state, pincode, phone, email, division (Plywood / Veneer / Sovereign / Plywood / Veneer)
**Dealer divisions**: Plywood, Veneer, Sovereign, Plywood / Veneer

### 10B. Sales Team Data
**Total members**: ~30+
**Departments**: Sales, Projects
**Regions**: Chennai & South, Trichy & Central, Salem & West, Vellore & North, Other Regions
**Each member**: name, designation, phone, email, cities

### 10C. Product Data (PLATINUM_TECH_TABLE → TechTableRow[])
**Interface**: `{ label: string; value?: string; isGroup?: boolean; isSubHeader?: boolean; indent?: boolean; }`

Example structure:
```
Static Bending Strength (N/mm²)                   [isGroup]
  Modulus of Elasticity (MoE)                     [isSubHeader]
    Along the Face Grain → Above 8000              [indent, value]
    Across the Face Grain → Above 9000             [indent, value]
  Modulus of Rupture (MoR)                         [isSubHeader]
    Along the Face Grain → Above 50                [indent, value]
    Across the Face Grain → Above 60               [indent, value]
```

### 10D. Products by Category

**Plywood Products**:
| Product | Slug | Grade |
|---|---|---|
| Sharon Platinum Ply | sharon-platinum-ply | BWP Grade |
| Sharon Gold Marine Plywood | sharon-gold-marine-plywood | Marine Grade |
| Sharon Prima 710 | sharon-prima-710 | IS:710 |
| Sovereign 710 | sovereign-710 | IS:710 |
| Sovereign Film Face | sovereign-film-face | Film Faced |
| Sovereign MR | sovereign-mr | MR Grade |
| Kumki OEM BWP Ply | kumki-oem-bwp-ply | BWP Grade |

**Door Products**:
| Product | Slug |
|---|---|
| Flush Doors | flush-doors |
| Sharon Gold Door | sharon-gold-door |
| Sovereign BWP Doors | sovereign-bwp-doors |
| Sovereign Door | sovereign-door |

**Veneer Products**:
| Product | Slug |
|---|---|
| Natural Wood Veneer | natural-wood-veneer |
| Exotic Natura | exotic-natura (→ species subpage) |
| Sharon Exoti Aura | sharon-exoti-aura (→ species subpage) |
| Pre-Polished Veneer | pre-polished-veneer |

---

## 11. DESIGN TOKENS SUMMARY

### Colors
```
--green-primary: #00793A
--green-dark: #016933
--gold-accent: #ffc107
--dark-text: #020202
--gray-600: #6b7280
--gray-400: #9ca3af
--light-bg: #f9fafb
--white: #FFFFFF
```

### Spacing
- Page max-width: `max-w-7xl` (1280px)
- Section padding: `py-14` (56px) or `py-12` (48px)
- Inner padding: `px-4 lg:px-8` (16px / 32px)

### Border Radius
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-xl` (12px)
- Pills: `rounded-full`

### Shadows
- Cards: `shadow-lg`, `shadow-xl`
- Hover: `hover:shadow-xl transition-shadow`
- Sticky header: `shadow-sm`

### Transitions
- Default: `transition-all duration-300`
- Hover: `hover:-translate-y-1`
- Smooth: `cubic-bezier(0.22, 1, 0.36, 1)`

---

## 12. SITE MAP

```
/
├── /plywood/
│   ├── /plywood/sharon-platinum-ply
│   ├── /plywood/sharon-gold-marine-plywood
│   ├── /plywood/sharon-prima-710
│   ├── /plywood/sovereign-710
│   ├── /plywood/sovereign-film-face
│   ├── /plywood/sovereign-mr
│   └── /plywood/kumki-oem-bwp-ply
├── /veneer/
│   ├── /veneer/natural-wood-veneer
│   ├── /veneer/exotic-natura/ (→ /veneer/exotic-natura/[species])
│   ├── /veneer/sharon-exoti-aura/ (→ /veneer/sharon-exoti-aura/[species])
│   └── /veneer/pre-polished-veneer
├── /door/
│   ├── /door/flush-doors
│   ├── /door/sharon-gold-door
│   ├── /door/sovereign-bwp-doors
│   └── /door/sovereign-door
├── /teak
├── /prelam
├── /technology
├── /our-history
├── /our-factory
├── /awards-certifications
├── /corporate-social-responsibility/ (→ 12 CSR subpages)
├── /careers
├── /contact
├── /contact/sales-team
├── /dealers
├── /find-us
├── /blog (→ /[year]/[month]/[slug])
├── /testimonials
├── /videos
├── /calendar
├── /catalogue
├── /media-press
├── /search
└── /terms-and-conditions
```
