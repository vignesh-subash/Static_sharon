"use client";

import { useState } from "react";
import Link from "next/link";

interface Recommendation {
  image: string;
  benefit: string;
  href: string;
}

interface Persona {
  label: string;
  heroImage: string;
  heroHeadline: string;
  heroSentence: string;
  recommendations: Recommendation[];
}

const PERSONAS: Persona[] = [
  {
    label: "Architect & Interior Designer",
    heroImage: "/images/hero-slide1-interior.jpg",
    heroHeadline: "Design with elegance. Deliver with confidence.",
    heroSentence: "Premium plywood and veneers that bring your vision to life with beauty and precision.",
    recommendations: [
      {
        image: "/images/veneer-slide-1.jpg",
        benefit: "Veneers — specified daily for premium interiors.",
        href: "/veneer/",
      },
      {
        image: "/images/sharon-platinum-ply-card.jpg",
        benefit: "PlatinumPly — the plywood behind every design.",
        href: "/plywood/sharon-platinum-ply",
      },
      {
        image: "/images/hero-slide3-interior.jpg",
        benefit: "Doors that elevate every space, every project.",
        href: "/plywood/sharon-gold-marine-plywood",
      },
    ],
  },
  {
    label: "Builders & Developers",
    heroImage: "/images/our-history-hero.jpg",
    heroHeadline: "Build stronger. Scale faster.",
    heroSentence: "Structural-grade plywood and certified materials engineered for large-scale projects.",
    recommendations: [
      {
        image: "/images/sovereign-710-slide2.jpg",
        benefit: "Plywood trusted for high-load structural projects.",
        href: "/plywood/sovereign-710",
      },
      {
        image: "/images/sovereign-film-face-card.jpg",
        benefit: "Film-faced ply for weather-resistant construction.",
        href: "/plywood/sovereign-film-face/",
      },
      {
        image: "/images/sharon-door-product.jpg",
        benefit: "Doors engineered for large-scale installations.",
        href: "/door/",
      },
    ],
  },
  {
    label: "Carpentry & Contractors",
    heroImage: "/images/sharon-prima-armor-card.jpg",
    heroHeadline: "Craft with precision. Build to last.",
    heroSentence: "Workmanship-friendly materials designed for flawless on-site execution.",
    recommendations: [
      {
        image: "/images/sovereign-710-slide2.jpg",
        benefit: "Precision plywood for flawless on-site cuts.",
        href: "/plywood/sovereign-710",
      },
      {
        image: "/images/sharon-prima-armor-card.jpg",
        benefit: "Dense core ply for perfect screw-hold every time.",
        href: "/plywood/sharon-prima-710",
      },
      {
        image: "/images/sharon-door-product.jpg",
        benefit: "Doors that install fast and perform for years.",
        href: "/door/",
      },
    ],
  },
  {
    label: "Home & Owners",
    heroImage: "/images/hero-slide3-interior.jpg",
    heroHeadline: "Create spaces you'll love forever.",
    heroSentence: "Lifetime-backed materials that make every home beautiful, safe, and resilient.",
    recommendations: [
      {
        image: "/images/sharon-gold-slide2.jpg",
        benefit: "Warranty-backed protection for your home.",
        href: "/plywood/sharon-gold-marine-plywood",
      },
      {
        image: "/images/veneer-slide-1.jpg",
        benefit: "Veneers that bring natural warmth to every room.",
        href: "/veneer/",
      },
      {
        image: "/images/sharon-prima-armor-card.jpg",
        benefit: "Strong ply for shelves, wardrobes, and cabinets.",
        href: "/plywood/sharon-prima-710",
      },
    ],
  },
];

// ── SVG Icon Components ──────────────────────────────────────────────────────
const ArchitectIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 15H4l8-15z" />
    <path d="M8 21l4-7 4 7H8z" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const BuilderIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20V9l8-7 8 7v11" />
    <rect x="8" y="14" width="8" height="6" rx="0.5" />
    <path d="M12 6v5" />
    <rect x="9" y="15" width="2" height="2" />
    <rect x="13" y="18" width="2" height="2" />
  </svg>
);

const CarpenterIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
    <path d="M7.05 4.05l2.12 2.12M14.83 14.83l2.12 2.12M4.05 7.05l2.12 2.12M14.83 9.17l2.12-2.12" />
  </svg>
);

const HomeownerIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11l8-7 8 7" />
    <rect x="6" y="11" width="12" height="10" rx="1" />
    <path d="M10 21v-5h4v5" />
    <rect x="11" y="15" width="2" height="2" />
    <rect x="15" y="15" width="2" height="2" />
  </svg>
);

const PERSONA_ICONS = [<ArchitectIcon />, <BuilderIcon />, <CarpenterIcon />, <HomeownerIcon />];

export default function VerticalTabPanel() {
  const [activeTab, setActiveTab] = useState(0);
  const persona = PERSONAS[activeTab];

  return (
    <section className="snap-section" style={{
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      padding: "0 52px 0", justifyContent: "flex-start",
    }}>
      {/* Section Heading */}
      <div style={{ flexShrink: 0, padding: "52px 0 28px" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', var(--font-playfair)",
            fontSize: "clamp(27px, 2.7vw, 44px)",
            fontWeight: 700,
            color: "#00793A",
            lineHeight: 1.1,
          }}
        >
          Built for every creator<br />of spaces.
        </h2>
      </div>

      {/* Two-column CSS Grid body */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "270px 1fr",
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          minHeight: 0,
        }}
      >
        {/* ── Column 1: Audience Navigation ── */}
        <div
          style={{
            borderRight: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {PERSONAS.map((p, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={p.label}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  cursor: "pointer",
                  borderLeft: isActive ? "4px solid #00793A" : "4px solid transparent",
                  background: isActive ? "#f0faf5" : "#FFFFFF",
                  textAlign: "left",
                  transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  width: "100%",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.background = "#f9faf7";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                }}
              >
                <span style={{
                  flexShrink: 0,
                  color: isActive ? "#00793A" : "rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                }}>
                  {PERSONA_ICONS[i]}
                </span>
                <span style={{
                  flex: 1,
                  fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: isActive ? "#00793A" : "#1a1a1a",
                  lineHeight: 1.2,
                  letterSpacing: "0.02em",
                }}>
                  {p.label.includes(" & ") ? <>{p.label.split(" & ")[0] + " &"}<br />{p.label.split(" & ")[1]}</> : <>{p.label}</>}
                </span>
                <span style={{
                  flexShrink: 0,
                  color: isActive ? "#00793A" : "rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Column 2: Product Recommendations ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
            overflow: "hidden",
            padding: "0 28px 6px",
            background: "#FFFFFF",
            gap: 6,
          }}
        >
          {/* Recommended for you */}
          <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 4,
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "#00793A",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                fontSize: 11,
                fontWeight: 700,
                color: "#00793A",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                Recommended for you
              </span>
            </div>

            {/* Exactly 3 recommendation cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
            }}>
              {persona.recommendations.map((rec) => (
                <Link
                  key={rec.href}
                  href={rec.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#FFFFFF",
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.04)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "0 6px 20px rgba(0,121,58,0.10), 0 2px 6px rgba(0,0,0,0.04)";
                    el.style.transform = "translateY(-2px)";
                    el.style.borderColor = "rgba(0,121,58,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "#f5f5f5",
                  }}>
                    <img
                      src={rec.image}
                      alt={rec.benefit}
                      style={{
                        width: "100%",
                        aspectRatio: "7/5",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                      onError={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.display = "none";
                      }}
                    />
                  </div>
                  <div style={{
                    padding: "6px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    background: "#FFFFFF",
                  }}>
                    <p style={{
                      fontFamily: "'DM Sans', var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#1a1a1a",
                      lineHeight: 1.4,
                      margin: 0,
                    }}>
                      {rec.benefit}
                    </p>
                    <div style={{
                      marginTop: "auto",
                      fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#00793A",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}>
                      Explore →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
