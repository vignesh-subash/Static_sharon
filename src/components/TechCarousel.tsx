"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TECHS = [
  {
    id: "virasafe",
    name: "VIRASAFE™ Antiviral Technology",
    tagline: "A Shield for Every Surface",
    description:
      "VIRASAFE™ is Sharon's proprietary anti-microbial plywood technology — proven to inhibit 99.9% of viruses and bacteria on the board surface. Ideal for healthcare facilities, hospitality, and hygiene-sensitive residential spaces.",
    accent: "#00793A",
    accentLight: "#e8f5ee",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M24 4L8 12v12c0 13.2 7.3 20.4 16 24 8.7-3.6 16-10.8 16-24V12L24 4z"/>
        <path d="m17 24 4 4 10-10"/>
        <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: "firesave",
    name: "FIRESAVE™ Fire Retardant Technology",
    tagline: "Safety Built Into Every Board",
    description:
      "FIRESAVE™ is Sharon's fire-retardant plywood technology certified to IS: 5509. Treated boards self-extinguish on flame removal, limiting fire spread in commercial buildings, institutions, and high-rise residential projects.",
    accent: "#b91c1c",
    accentLight: "#fee2e2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M17 29a5 5 0 0 0 5 5c2.76 0 5-2.24 5-5 0-2.76-2-5-3-7-2.14-4.29-.45-8.1 4-12 1 5 4 9.8 8 13 4 3.2 6 7 6 11a14 14 0 0 1-28 0c0-2.3.87-4.59 2-6a5 5 0 0 0 1 1z"/>
        <path d="M24 34v-6"/>
      </svg>
    ),
  },
  {
    id: "kyoto",
    name: "Kyoto ProTech Technology",
    tagline: "Japanese Precision, Indian Scale",
    description:
      "Developed in partnership with Kyoto University's Wood Research Institute, Kyoto ProTech is a proprietary bonding and treatment process that delivers superior adhesive strength, dimensional stability, and moisture resistance — making SharonPly the only Indian brand licensed to export plywood to Japan.",
    accent: "#1e3a5f",
    accentLight: "#e8edf5",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <circle cx="24" cy="24" r="4"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(0 24 24)"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)"/>
      </svg>
    ),
  },
];

const N = TECHS.length;
const AUTO_MS = 4000;

export default function TechCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  const go = useCallback((idx: number) => setActive(idx), []);
  const next = useCallback(() => go((active + 1) % N), [active, go]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!pausedRef.current) timerRef.current = setTimeout(next, AUTO_MS);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, resetTimer]);

  const t = TECHS[active];

  return (
    <section
      style={{ paddingTop: 60, paddingBottom: 72, background: "#f9fafb" }}
      onMouseEnter={() => { pausedRef.current = true; if (timerRef.current) clearTimeout(timerRef.current); }}
      onMouseLeave={() => { pausedRef.current = false; resetTimer(); }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 32px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#9ca3af" }}>
            Innovation
          </span>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#111827", marginTop: 6, letterSpacing: "-0.02em" }}>
            Our Proprietary Technologies
          </h2>
        </div>

        {/* Carousel card */}
        <div style={{
          background: "#fff",
          borderRadius: 20,
          border: `1.5px solid ${t.accent}22`,
          boxShadow: `0 4px 32px ${t.accent}12`,
          overflow: "hidden",
          transition: "border-color 0.4s, box-shadow 0.4s",
        }}>
          {/* Accent top bar */}
          <div style={{ height: 3, background: t.accent, transition: "background 0.4s" }} />

          <div style={{ display: "flex", alignItems: "stretch", minHeight: 240 }}>

            {/* Icon panel */}
            <div style={{
              width: 200, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: t.accentLight,
              padding: 40,
              transition: "background 0.4s",
            }}
              className="hidden sm:flex"
            >
              <div style={{ width: 72, height: 72, color: t.accent, transition: "color 0.4s" }}>
                {t.icon}
              </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: t.accent, marginBottom: 10, transition: "color 0.4s" }}>
                {t.tagline}
              </p>
              <h3 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 900, color: "#111827", marginBottom: 14, lineHeight: 1.2 }}>
                {t.name}
              </h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
                {t.description}
              </p>
            </div>

          </div>
        </div>

        {/* Controls row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24 }}>

          {/* Dot indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {TECHS.map((tech, i) => (
              <button
                key={tech.id}
                onClick={() => go(i)}
                style={{
                  all: "unset", cursor: "pointer",
                  width: active === i ? 28 : 8,
                  height: 8, borderRadius: 99,
                  background: active === i ? t.accent : "#d1d5db",
                  transition: "width 0.35s ease, background 0.35s",
                }}
                aria-label={tech.name}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => go((active - 1 + N) % N)}
              style={{
                all: "unset", cursor: "pointer",
                width: 40, height: 40, borderRadius: "50%",
                border: "1.5px solid #e5e7eb",
                background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.background = t.accentLight; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fff"; }}
              aria-label="Previous technology"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              onClick={() => go((active + 1) % N)}
              style={{
                all: "unset", cursor: "pointer",
                width: 40, height: 40, borderRadius: "50%",
                background: t.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.3s",
                boxShadow: `0 4px 14px ${t.accent}45`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              aria-label="Next technology"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
