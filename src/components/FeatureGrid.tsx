"use client";

import { useState } from "react";
import Link from "next/link";

interface Feature {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  image: string;
}

const FEATURES: Feature[] = [
  {
    num: "01",
    title: "VIRASAFE",
    subtitle: "ANTIVIRAL PROTECTION",
    desc: "Advanced anti-viral technology for healthier interior spaces.",
    href: "/technology#virasafer",
    image: "/images/hero-slide1-interior.jpg",
  },
  {
    num: "02",
    title: "FIRESAVE",
    subtitle: "FIRE SAFETY",
    desc: "Fire-retardant certified under IS:5509, limiting fire and smoke spread.",
    href: "/technology#firesafe",
    image: "/images/sovereign-film-face-card.jpg",
  },
  {
    num: "03",
    title: "E-ZERO",
    subtitle: "ZERO EMISSION",
    desc: "CARB E0 certified — ≤0.5 mg/L formaldehyde for healthier indoor air.",
    href: "/technology#e-zero",
    image: "/images/hero-slide3-interior.jpg",
  },
  {
    num: "04",
    title: "SHARON SECURE",
    subtitle: "LONG-TERM PROTECTION",
    desc: "Premium protection engineered for lasting safety and durability.",
    href: "/technology#sharon-secure",
    image: "/images/sharon-door-product.jpg",
  },
];

export default function FeatureGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="snap-section" style={{
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      padding: 0,
    }}>
      {/* Header */}
      <div style={{ padding: "52px 52px 28px", flexShrink: 0 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', var(--font-playfair)",
            fontSize: "clamp(27px, 2.7vw, 44px)",
            fontWeight: 700,
            color: "#00793A",
            lineHeight: 1.1,
          }}
        >
          What makes SharonPly<br />{' '}
          different{' '}from every others.
        </h2>
      </div>

      {/* 4-up grid */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {FEATURES.map((feature, idx) => (
          <Link
            key={feature.num}
            href={feature.href}
            style={{
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              textDecoration: "none",
              borderRight: idx < FEATURES.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
              transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
              position: "relative",
              overflow: "hidden",
              transform: hoveredIdx === idx ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hoveredIdx === idx
                ? "0 8px 32px rgba(0,121,58,0.12), 0 2px 8px rgba(0,0,0,0.04)"
                : "none",
              zIndex: hoveredIdx === idx ? 2 : 1,
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Image */}
            <div style={{
              width: "100%",
              aspectRatio: "4/3",
              overflow: "hidden",
              background: "#f5f5f5",
              flexShrink: 0,
            }}>
              <img
                src={feature.image}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                  transform: hoveredIdx === idx ? "scale(1.06)" : "scale(1)",
                }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.display = "none";
                }}
              />
            </div>
            {/* Content */}
            <div style={{
              padding: "22px 24px 24px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 4,
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', var(--font-playfair)",
                fontSize: 20,
                fontWeight: 700,
                color: "#00793A",
                lineHeight: 1.3,
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', var(--font-sans)",
                fontSize: 12,
                color: "rgba(0,0,0,0.48)",
                lineHeight: 1.55,
                margin: 0,
                flex: 1,
              }}>
                {feature.desc}
              </p>
              <div style={{
                fontFamily: "'DM Sans', var(--font-sans)",
                fontSize: 10,
                color: hoveredIdx === idx ? "#00793A" : "rgba(0,121,58,0.6)",
                letterSpacing: 1.5,
                transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
                marginTop: 10,
              }}>
                LEARN MORE →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: "20px 52px", flexShrink: 0 }}>
        <Link
          href="/technology"
          style={{
            fontFamily: "'DM Sans', var(--font-sans)",
            fontSize: 11,
            color: "#00793A",
            letterSpacing: 2,
            cursor: "pointer",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color 0.25s cubic-bezier(0.22,1,0.36,1)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0F0F0E"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#00793A"; }}
        >
          EXPLORE ALL TECHNOLOGIES →
        </Link>
      </div>
    </section>
  );
}
