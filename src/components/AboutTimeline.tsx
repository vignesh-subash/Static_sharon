"use client";
import { useRef } from "react";

const milestones = [
  {
    year: "1987",
    title: "Production Commences",
    description:
      "SharonPly begins its manufacturing journey from Chennai, laying the foundation for India&#39;s premium plywood industry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M2 20h20"/><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/><rect x="10" y="8" width="4" height="4"/>
      </svg>
    ),
  },
  {
    year: "1988",
    title: "Sharon Gold Launched",
    description:
      "Introduction of the flagship Sharon Gold — BWP Marine Grade plywood that set a new benchmark for quality and durability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    year: "1990",
    title: "Product Portfolio Expansion",
    description:
      "Expanded the product line with Sharon Platinum Ply, Flush Doors, and Block Boards to serve a wider market.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    year: "1992",
    title: "Sharon ElastiPly",
    description:
      "Pioneered flexible plywood engineered for 360° bending — a first-of-its-kind innovation for curved furniture applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M4 19c2-4 4-6 8-6s6 2 8-2"/><path d="M4 12c2-4 4-6 8-6s6 2 8-2"/><path d="M4 5h2M18 5h2M4 19h2M18 19h2"/>
      </svg>
    ),
  },
  {
    year: "1994",
    title: "Kyoto ProTech Technology",
    description:
      "Incorporated Japanese technology from Kyoto University&#39;s Wood Research Institute — the only Indian brand to export plywood to Japan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/>
      </svg>
    ),
  },
  {
    year: "1994",
    title: "Double Press Technology",
    description:
      "Upgraded manufacturing capacity with Double Press Technology, improving production efficiency and board quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="3" y="15" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/>
      </svg>
    ),
  },
  {
    year: "2002",
    title: "MKVV School",
    description:
      "Established the MKVV School in Gummidipoondi, reflecting SharonPly&#39;s commitment to education and community development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M2 20h20"/><path d="M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/>
      </svg>
    ),
  },
  {
    year: "2006",
    title: "Sharon Veneers",
    description:
      "Entered the decorative veneer segment, offering premium natural wood surfaces for high-end interiors and architectural finishes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20"/><path d="M2 15h20"/><path d="M9 3v6"/><path d="M15 15v6"/>
      </svg>
    ),
  },
  {
    year: "2007",
    title: "Sovereign Launched",
    description:
      "Introduced the Sovereign series, offering value-engineered plywood solutions for the budget-conscious segment without compromising on quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    year: "2011",
    title: "SharonPrelam Launched",
    description:
      "Launched decorative pre-laminated plywood surfaces, expanding into the interior design and furniture manufacturing segment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M12 3v18"/>
      </svg>
    ),
  },
  {
    year: "2014",
    title: "SharonPrima Launched",
    description:
      "Introduced SharonPrima, strengthening the mid-segment product line with quality-engineered plywood for a wider customer base.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    year: "2016",
    title: "Sharon Particle Board",
    description:
      "Expanded manufacturing capabilities with Sharon Particle Board, offering versatile engineered wood solutions for modern interiors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="4" y="4" width="16" height="16" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="10" y1="4" x2="10" y2="20"/>
      </svg>
    ),
  },
  {
    year: "2017",
    title: "Triple Press Technology",
    description:
      "Upgraded manufacturing with Triple Press Technology, ensuring superior bonding strength and uniform thickness across every board.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="3" y="15" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="5" width="18" height="4" rx="1"/><path d="M12 2v3M12 19v3M8 21h8"/>
      </svg>
    ),
  },
  {
    year: "2018",
    title: "Core Composer Introduced",
    description:
      "Introduced advanced Core Composer technology, revolutionizing the structural integrity and consistency of plywood core assembly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    year: "2018",
    title: "Quadruple Press & Solar Plant",
    description:
      "Introduced the MAT Process (Multi-Action Technology) with quadruple pressing and installed a 1056 KV solar captive power plant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    ),
  },
  {
    year: "2019",
    title: "Sovereign 710 Launched",
    description:
      "Launched the Sovereign 710 waterproof plywood series using advanced Kyoto University technology for the value-conscious segment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    year: "2019",
    title: "#iamstrongest Awards",
    description:
      "Launched the #iamstrongest awards program, celebrating courage, resilience, and community strength beyond manufacturing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    year: "2020",
    title: "VIRASAFE Technology",
    description:
      "Introduced VIRASAFE anti-microbial plywood technology, creating hygienic wood surfaces for healthier indoor spaces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    year: "2021",
    title: "FSC Certification",
    description:
      "Achieved FSC (Forest Stewardship Council) certification, ensuring responsible sourcing and sustainable forestry practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    year: "2021",
    title: "FIRESAVE Technology",
    description:
      "Launched fire-retardant plywood certified under IS:5509, offering an extra layer of safety for commercial and residential spaces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    ),
  },
  {
    year: "2022",
    title: "Calibrated Plywood",
    description:
      "Introduced precision-calibrated plywood with exact thickness tolerances, meeting the highest demands of modern furniture manufacturing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <line x1="4" y1="4" x2="20" y2="20"/><line x1="4" y1="20" x2="20" y2="4"/>
      </svg>
    ),
  },
  {
    year: "2022",
    title: "IS:5509 Certification",
    description:
      "Achieved IS:5509 certification for fire-retardant plywood, strengthening our commitment to safety-certified building materials.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    year: "2022",
    title: "25th Anniversary Celebrations",
    description:
      "Celebrated 25 years of excellence in plywood manufacturing, marking a quarter-century of quality, trust, and innovation in the Indian wood industry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    year: "2022",
    title: "E-Zero Technology Launched",
    description:
      "Launched E-Zero certified plywood with CARB compliance for zero-emission indoor air quality, setting a new benchmark for eco-friendly plywood in India.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Super Strong Particle Board",
    description:
      "Launched Super Strong Particle Board — future-ready panels engineered for high-strength furniture and modular interior applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="4" y="4" width="16" height="16" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="10" y1="4" x2="10" y2="20"/>
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Kumki OEM BWP Plywood",
    description:
      "Introduced Kumki OEM BWP plywood, expanding our OEM solutions for industrial and trade partners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    year: "2026",
    title: "SharonPRIMA Armor",
    description:
      "Launched SharonPRIMA Armor — a fire-safe BWP innovation combining structural strength with enhanced fire-retardant properties.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const highlightData = [
  {
    svgPath: (
      <path
        d="M8 44h32v-4H8v4zm4-6h24V22H12v16zm-2-18h28V12H10v8zM24 4L4 14v4h40v-4L24 4z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 48 48",
    title: "Integrated Manufacturing Strength",
    description:
      "Built for consistency, scale, and quality control from raw material to finished board. Our integrated facility in Gummidipoondi ensures every sheet meets the highest international standards.",
    stat: "World-Class Facility",
    statSub: "Gummidipoondi, Chennai",
    accent: "#00793A",
  },
  {
    svgPath: (
      <path
        d="M24 2l3.09 9.51H37l-8.09 5.88 3.09 9.51L24 21.02l-7.91 5.88 3.09-9.51L11.09 11.51H21.09L24 2z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 48 48",
    title: "Innovation Since 1987",
    description:
      "From SharonGold to ElastiPly, VIRASAFE, FIRESAVE, and E-Zero — SharonPly has continuously introduced stronger, safer, and more advanced solutions for the Indian wood industry.",
    stat: "38+ Years of Innovation",
    statSub: "Industry Firsts Since 1987",
    accent: "#ffc107",
  },
  {
    svgPath: (
      <path
        d="M24 4L6 12v12c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V12L24 4zm-2 28l-8-8 2.8-2.8L22 26.4l9.2-9.2L34 20 22 32z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 48 48",
    title: "Advanced Technology",
    description:
      "Kyoto ProTech and modern production systems help improve bonding strength, stability, and performance — making SharonPly products a preferred choice for demanding architectural and construction applications.",
    stat: "World-Class Technology",
    statSub: "Only Indian Brand Licensed",
    accent: "#1976d2",
  },
  {
    svgPath: (
      <path
        d="M24 4L12 8v16l12-4V4zm2 12l8-3v12l-8 3V16zm-4-2l-8 3V5l8-3v12z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 48 48",
    title: "Responsible Manufacturing",
    description:
      "Solar energy, FSC certification, and quality-led production reflect a long-term commitment to responsible growth. Our 1056 KW solar plant and E-Zero compliance set the benchmark for sustainable plywood manufacturing.",
    stat: "Green & Sustainable",
    statSub: "Solar · FSC · E-Zero",
    accent: "#2e7d32",
  },
];


export default function AboutTimeline() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative" style={{ height: "70vh", minHeight: 480, overflow: "hidden" }}>
        <img
          src="/images/our-history-hero.jpg"
          alt="SharonPly — 38 Years of Premium Plywood Manufacturing"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(0,30,15,0.82) 0%, rgba(0,60,28,0.65) 50%, rgba(0,0,0,0.78) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", padding: "0 24px", maxWidth: 760 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
                padding: "8px 22px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "rgba(255,193,7,0.15)",
                border: "1px solid rgba(255,193,7,0.5)",
                color: "#ffc107",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Since 1987 · Gummidipoondi
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                fontWeight: 900,
                color: "white",
                marginBottom: 18,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Shaping Stronger Spaces{" "}
              <span style={{ color: "#ffc107" }}>Since 1987</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                color: "rgba(255,255,255,0.78)",
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto 36px",
              }}
            >
              From our integrated manufacturing facility in Gummidipoondi, SharonPly has built a legacy of trusted plywood, veneers, and doors — engineered with advanced technology, certified quality, and a commitment to lasting performance.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  const el = sectionRefs.current["intro"];
                  if (!el) return;
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 32px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "white",
                  background: "linear-gradient(135deg, #00793A, #005c2c)",
                  boxShadow: "0 8px 32px rgba(0,121,58,0.4)",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
              >
                Explore Our Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 2: INTRO ── */}
      <section
        id="intro"
        ref={(el) => { sectionRefs.current["intro"] = el; }}
        style={{ padding: "24px 0 32px", background: "white", position: "relative", overflow: "hidden" }}
      >
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.025, pointerEvents: "none" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="intro-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="#00793A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intro-grid)" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 24,
                  transform: "translate(16px,16px)",
                  background: "linear-gradient(135deg, rgba(0,121,58,0.12), rgba(255,193,7,0.12))",
                }}
              />
              <img
                src="/images/sharon-brand-story.jpg"
                alt="SharonPly Manufacturing Excellence"
                style={{
                  position: "relative",
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  borderRadius: 24,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  padding: "8px 16px",
                  borderRadius: 12,
                  background: "rgba(255,193,7,0.95)",
                  boxShadow: "0 4px 16px rgba(255,193,7,0.35)",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>Est. 1987</div>
                <div style={{ fontSize: 11, color: "#555" }}>Chennai, India</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 20,
                  padding: "6px 16px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  background: "#f0faf4",
                  color: "#00793A",
                  border: "1px solid rgba(0,121,58,0.2)",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00793A" }} />
                Our Legacy
              </div>
              <h2
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#1a1a1a", marginBottom: 4, lineHeight: 1.15 }}
              >
                A Legacy Built
              </h2>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#00793A",
                  marginBottom: 24,
                  lineHeight: 1.15,
                  WebkitTextFillColor: "#00793A",
                }}
              >
                Layer by Layer
              </h2>

              {/* Client-provided history content */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, margin: 0 }}>
                  For more than three decades, SharonPly has grown from a manufacturing vision in Tamil Nadu into one of South India&apos;s trusted names in plywood and interior wood solutions. Every sheet we manufacture reflects our focus on strength, stability, safety, and long-term customer confidence.
                </p>
                <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, margin: 0 }}>
                  From architects and designers to builders, carpenters, and homeowners, SharonPly continues to support the people who create stronger, safer, and more beautiful spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* ── LEADERSHIP ── */}
      <section style={{ padding: "48px 0", background: "white" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, padding: "6px 16px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", background: "#f0faf4", color: "#00793A", border: "1px solid rgba(0,121,58,0.2)" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00793A" }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 8, lineHeight: 1.2 }}>
              From the <span style={{ color: "#00793A" }}>MD&apos;s Desk</span>
            </h2>
            <div style={{ maxWidth: 700, margin: "0 auto", padding: "20px 28px", background: "#f8faf9", borderRadius: 16, border: "1px solid rgba(0,121,58,0.1)", borderLeft: "4px solid #00793A", textAlign: "left" }}>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, fontStyle: "italic", marginBottom: 12 }}>
                &quot;At SharonPly, our mission has always been to deliver quality that builders and homeowners can trust. Every sheet that leaves our factory represents decades of craftsmanship, innovation, and a deep commitment to Indian homes and spaces.&quot;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#b0b0b0", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 16 }}>
                  
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>Vishnu Khemani</div>
                  <div style={{ fontSize: 12, color: "#888" }}>Managing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", background: "white", borderBottom: "1px solid rgba(0,121,58,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, padding: "6px 16px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", background: "#f0faf4", color: "#00793A", border: "1px solid rgba(0,121,58,0.2)" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00793A" }} />
              Quality & Standards
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 8, lineHeight: 1.2 }}>
              Certifications & <span style={{ color: "#00793A" }}>Quality Standards</span>
            </h2>
            <p style={{ fontSize: 14, color: "#666", maxWidth: 600, margin: "0 auto" }}>
              SharonPly products are manufactured in compliance with national and international standards ensuring safety, performance, and environmental responsibility.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "BIS / ISI", desc: "IS:710 · IS:303 · IS:5509" },
              { name: "ISO 9001:2015", desc: "Quality Management System" },
              { name: "FSC Certified", desc: "Responsible Forestry Practices" },
              { name: "CARB E0", desc: "Zero Emission Compliance" },
              { name: "IS:5509 Fire Retardant", desc: "Fire Safety Certified" },
              { name: "Green Product", desc: "Eco-Friendly Manufacturing" },
            ].map((cert, i) => (
              <div key={i} style={{ padding: "16px 24px", borderRadius: 14, background: "#f8faf9", border: "1px solid rgba(0,121,58,0.1)", textAlign: "center", minWidth: 140 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#00793A", marginBottom: 4 }}>{cert.name}</div>
                <div style={{ fontSize: 11, color: "#888" }}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ── CSR ── */}
      <section style={{ padding: "48px 0", background: "#f0faf4" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div style={{ flex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, padding: "6px 16px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", background: "white", color: "#00793A", border: "1px solid rgba(0,121,58,0.2)" }}>
                Community Commitment
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 12, lineHeight: 1.2 }}>
                Beyond Manufacturing <span style={{ color: "#00793A" }}>Building Communities</span>
              </h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>
                Beyond manufacturing, SharonPly continues to invest in education, social responsibility, and initiatives that strengthen communities. From the #iSayNoToPlastic movement to the SharonPlyCares initiatives, our commitment extends far beyond plywood.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "iSayNoToPlastic", desc: "Plastic-Free Initiative" },
                  { label: "#iamstrongest", desc: "Honoring Courage & Resilience" },
                  { label: "SharonPlyCares", desc: "Community Development" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "12px 18px", borderRadius: 12, background: "white", border: "1px solid rgba(0,121,58,0.1)", flex: 1, minWidth: 140 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#00793A", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, padding: 32, borderRadius: 20, background: "linear-gradient(135deg, #00793A, #005c2c)", color: "white", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Explore CSR Initiatives</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 16 }}>
                Discover how SharonPly gives back to communities and the environment.
              </div>
              <a href="/corporate-social-responsibility" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, fontSize: 13, fontWeight: 700, color: "#1a1a1a", background: "#ffc107", textDecoration: "none" }}>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section
        style={{
          padding: "32px 0",
          background: "linear-gradient(135deg, #00793A 0%, #005c2c 50%, #003d1e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
        <div
          className="max-w-6xl mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: heading + subtext */}
            <div style={{ flex: 1 }}>
              <h2
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "white", marginBottom: 12, lineHeight: 1.2 }}
              >
                Build with a Brand{" "}
                <span style={{ color: "#ffc107" }}>Trusted Since 1987</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                Trusted by architects, interior designers, builders, and homeowners across South India for over three decades.
              </p>
            </div>

            {/* Right: buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                flexShrink: 0,
              }}
            >
              <a
                href="/plywood"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "white",
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.2s",
                }}
              >
                View Our Products
              </a>
              <a
                href="/contact-us"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "#1a1a1a",
                  background: "linear-gradient(135deg, #ffc107, #f57c00)",
                  boxShadow: "0 6px 24px rgba(255,193,7,0.35)",
                  transition: "transform 0.2s",
                }}
              >
                Find a Dealer Near You
              </a>
              <a
                href="/contact-us"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "white",
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.2s",
                }}
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Factory ── */}
      <section ref={(el) => { sectionRefs.current["factory"] = el; }} className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
                padding: "6px 16px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                background: "#f0faf4",
                color: "#00793A",
                border: "1px solid rgba(0,121,58,0.2)",
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00793A" }} />
              Our Manufacturing
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "#1a1a1a",
                marginBottom: 4,
                lineHeight: 1.15,
              }}
            >
              Integrated{" "}
              <span style={{ color: "#00793A" }}>Plywood Facility</span>
            </h2>
            <div
              style={{
                margin: "0 auto",
                height: 4,
                width: 96,
                borderRadius: 999,
                background: "linear-gradient(90deg, #00793A, #ffc107)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 24,
                  transform: "translate(16px, 16px)",
                  background: "linear-gradient(135deg, rgba(0,121,58,0.12), rgba(255,193,7,0.12))",
                }}
              />
              <img
                src="/images/sharon-factory-aerial.jpg"
                alt="SharonPly Manufacturing Facility — Gummidipoondi"
                style={{
                  position: "relative",
                  width: "100%",
                  height: 440,
                  objectFit: "cover",
                  borderRadius: 24,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.16)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  padding: "14px 22px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(12px)",
                  border: "2px solid rgba(0,121,58,0.2)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 900, color: "#00793A" }}>Est. 1987</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Manufacturing Facility
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  padding: "8px 16px",
                  borderRadius: 12,
                  background: "rgba(255,193,7,0.95)",
                  boxShadow: "0 4px 16px rgba(255,193,7,0.35)",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>Est. 1987</div>
                <div style={{ fontSize: 11, color: "#555" }}>Gummidipoondi</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div
                style={{
                  padding: 24,
                  borderRadius: 16,
                  marginBottom: 24,
                  background: "linear-gradient(135deg, #f0faf4, #fffbeb)",
                  borderLeft: "4px solid #ffc107",
                  boxShadow: "0 4px 20px rgba(0,121,58,0.08)",
                }}
              >
                <p style={{ fontSize: 16, fontWeight: 600, color: "#222", lineHeight: 1.7, marginBottom: 12 }}>
                  Our state-of-the-art manufacturing facility in Gummidipoondi, near Chennai, is
                  equipped with cutting-edge Japanese Kyoto ProTech technology and India&apos;s first
                  plywood-grade solar captive power plant.
                </p>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                  From raw timber to finished board — every step of production is monitored by our in-house
                  quality lab, ensuring every SharonPly product meets the highest international standards.
                </p>
              </div>

              {/* Production Lines */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Plywood", capacity: "BWP, Marine & MR Grades", icon: "🪵" },
                  { label: "Veneer", capacity: "Natural Decorative Finishes", icon: "🌿" },
                  { label: "Doors", capacity: "Sovereign Premium Range", icon: "🚪" },
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f9fafb",
                      borderRadius: 14,
                      padding: "14px 12px",
                      textAlign: "center",
                      border: "1px solid rgba(0,121,58,0.1)",
                    }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{line.icon}</div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>{line.label}</p>
                    <p style={{ fontSize: 11, color: "#888", lineHeight: 1.4 }}>{line.capacity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
