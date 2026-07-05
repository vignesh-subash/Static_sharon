"use client";

import { useState } from "react";
import Link from "next/link";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Quality of Sharon Plywood is very consistent. The waterproof plywood is among the best in the market.",
    author: "Ar. Vidya Chandar",
    role: "Principal Architect · M/s. CS Designs Pvt. Ltd., Chennai",
    initials: "VC",
  },
  {
    quote: "We've been using SharonPly for over a decade. Their BWP grade plywood has never let us down, even in high-moisture coastal projects.",
    author: "Ar. Rajesh Menon",
    role: "Managing Director · Menon Architects, Kochi",
    initials: "RM",
  },
  {
    quote: "The consistency in quality and finish across batches makes SharonPly our go-to spec for all residential projects. Truly reliable.",
    author: "Ar. Priya Sharma",
    role: "Senior Architect · StudioPrana, Bengaluru",
    initials: "PS",
  },
];

export default function TestimonialBlock() {
  const [activeIdx, setActiveIdx] = useState(0);
  const t = TESTIMONIALS[activeIdx];

  const prev = () => setActiveIdx((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActiveIdx((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="snap-section" style={{
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      padding: 0,
      overflow: "hidden",
      gap: 0,
    }}>
      {/* Left: quote content (~70%) */}
      <div style={{ flex: 7, display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 52px" }}>
        {/* Trusted By Professionals label */}
        <div
          style={{
            fontFamily: "'DM Sans', var(--font-sans)",
            fontSize: 11,
            fontWeight: 700,
            color: '#00793A',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Trusted By Professionals
        </div>

        {/* Large quote mark */}
        <div
          style={{
            fontFamily: "'Playfair Display', var(--font-playfair)",
            fontSize: 100,
            color: "#ffc107",
            lineHeight: 0.6,
            marginBottom: 28,
            userSelect: "none",
          }}
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote
          key={activeIdx}
          style={{
            fontFamily: "'Playfair Display', var(--font-playfair)",
            fontSize: "clamp(20px, 2vw, 30px)",
            fontWeight: 400,
            color: "#0F0F0E",
            lineHeight: 1.48,
            fontStyle: "italic",
            marginBottom: 36,
            transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {t.quote}
        </blockquote>

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 44 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#0F0F0E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              borderRadius: 0,
            }}
          >
            <span style={{ fontFamily: "'DM Sans', var(--font-sans)", fontSize: 12, fontWeight: 600, color: "#FFFFFF" }}>
              {t.initials}
            </span>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Sans', var(--font-sans)", fontSize: 14, fontWeight: 600, color: "#0F0F0E" }}>
              {t.author}
            </div>
            <div style={{ fontFamily: "'DM Sans', var(--font-sans)", fontSize: 11, color: "#9A9890", marginTop: 2 }}>
              {t.role}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{
            fontFamily: "'DM Sans', var(--font-sans)",
            fontSize: 11,
            color: "#C5C3BA",
            letterSpacing: 1,
          }}>
            {`0${activeIdx + 1} / 0${TESTIMONIALS.length}`}
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={prev}
              style={{
                width: 40,
                height: 40,
                border: "1px solid #D8D5D0",
                background: "transparent",
                cursor: "pointer",
                fontSize: 14,
                color: "#9A9890",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
                borderRadius: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#0F0F0E";
                (e.currentTarget as HTMLElement).style.color = "#0F0F0E";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#D8D5D0";
                (e.currentTarget as HTMLElement).style.color = "#9A9890";
              }}
            >
              &larr;
            </button>
            <button
              onClick={next}
              style={{
                width: 40,
                height: 40,
                border: "none",
                background: "#0F0F0E",
                cursor: "pointer",
                fontSize: 14,
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.25s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              &rarr;
            </button>
          </div>
          <Link
            href="/testimonials"
            style={{
              fontFamily: "'DM Sans', var(--font-sans)",
              fontSize: 11,
              color: "#00793A",
              letterSpacing: 1.5,
              cursor: "pointer",
              marginLeft: "auto",
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "color 0.25s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0F0F0E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#00793A"; }}
          >
            ALL TESTIMONIALS &rarr;
          </Link>
        </div>
      </div>

      {/* Right: portrait image (~30%) */}
      <div style={{ flex: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div
          style={{
            width: "100%",
            maxWidth: 320,
            aspectRatio: "3/4",
            background: "#F0EDE8",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Warm gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, #5C3A1E 0%, #8B6040 60%, #3D2410 100%)",
              opacity: 0.16,
            }}
          />
          {/* Diagonal line pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "repeating-linear-gradient(10deg, transparent 0, transparent 24px, rgba(0,0,0,0.04) 24px, rgba(0,0,0,0.04) 25px)",
            }}
          />
          {/* Green accent line on left */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: 2,
              background: "#00793A",
            }}
          />
          {/* PORTRAIT label */}
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 18,
              fontFamily: "'DM Sans', var(--font-sans)",
              fontSize: 8,
              color: "#C5C3BA",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            portrait
          </div>
        </div>
        <div
          style={{
            marginTop: 14,
            fontFamily: "'DM Sans', var(--font-sans)",
            fontSize: 11,
            color: "#9A9890",
            lineHeight: 1.55,
            fontWeight: 400,
          }}
        >
          Trusted by architects, builders, and homeowners across India.
        </div>
      </div>
    </section>
  );
}
