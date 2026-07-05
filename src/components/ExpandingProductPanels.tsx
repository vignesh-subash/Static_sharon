"use client";

import { useState } from "react";
import Link from "next/link";

interface PanelData {
  num: string;
  title: string;
  href: string;
  image: string;
  gradient: string;
  patternAngle: number;
}

const PANELS: PanelData[] = [
  {
    num: "01",
    title: "Sharon Plywood",
    href: "/plywood",
    image: "/images/sharon-platinum-ply-card.jpg",
    gradient: "linear-gradient(160deg, #5C3A1E 0%, #2C1608 100%)",
    patternAngle: 12,
  },
  {
    num: "02",
    title: "Sharon Veneer",
    href: "/veneer",
    image: "/images/veneer-slide-3.jpg",
    gradient: "linear-gradient(160deg, #4A3520 0%, #1E1005 100%)",
    patternAngle: 6,
  },
  {
    num: "03",
    title: "Sharon Doors",
    href: "/door",
    image: "/images/sharon-door-product.jpg",
    gradient: "linear-gradient(160deg, #3D2A1A 0%, #150A04 100%)",
    patternAngle: 8,
  },
];

export default function ExpandingProductPanels() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="snap-section" style={{
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ padding: "52px 0 28px", flexShrink: 0 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', var(--font-playfair)",
            fontSize: "clamp(27px, 2.7vw, 44px)",
            fontWeight: 700,
            color: "#00793A",
            lineHeight: 1.1,
            paddingLeft: 52,
            paddingRight: 52,
          }}
        >
          Three product lines.<br />One uncompromising{' '}
          standard
        </h2>
      </div>

      {/* Expanding panels */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          gap: 1,
          background: "rgba(0,0,0,0.06)",
        }}
      >
        {PANELS.map((panel, i) => {
          const isHovered = hovered === i;
          const flexValue = isHovered ? 1.8 : 1;

          return (
            <Link
              key={panel.num}
              href={panel.href}
              style={{
                flex: flexValue,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Product image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: "transform 14s cubic-bezier(0.25,0.1,0.15,1)" }}
                />
              </div>
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.55) 15%, rgba(0,0,0,0.03) 60%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Sans', var(--font-sans)",
                    fontSize: 56,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {panel.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', var(--font-playfair)",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: 14,
                  }}
                >
                  {panel.title}
                </h3>
                <div
                  style={{
                    fontFamily: "'DM Sans', var(--font-sans)",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: 1.5,
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                >
                  EXPLORE →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
