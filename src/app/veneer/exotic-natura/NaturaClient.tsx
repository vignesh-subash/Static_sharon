"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// Note: ABOUT_IMAGES kept for potential future use but gallery now uses static image
import { getCollection } from "@/data/veneerData";

const COLLECTION_SLUG = "sharon-exoti-natura";
const ACCENT = "#c4922a";

const CATEGORIES = [
  {
    name: "Dark Series",
    desc: "Rich, deep wood tones. Walnut, Dark Cherry, African Mahogany.",
    species: ["walnut", "mahogany"],
    basePly: "100% Gurjan Hardwood Core",
    spec: "0.30–0.45 mm veneer · BWR Grade · 2440×1220 mm panels",
    // TODO: Replace with actual Dark Series veneer image (dark walnut / mahogany grain)
    img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=85",
  },
  {
    name: "Natural Series",
    desc: "Classic mid-tones. Natural Oak, Burma Teak, Natural Ash.",
    species: ["oak", "teak", "ash"],
    basePly: "100% Gurjan Hardwood Core",
    spec: "0.30–0.50 mm veneer · BWR Grade · 2440×1220 mm panels",
    // TODO: Replace with actual Natural Series veneer image (oak / teak grain)
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
  },
  {
    name: "Light Series",
    desc: "Bright, airy surfaces. Maple, White Ash, Light Walnut.",
    species: ["maple", "ash"],
    basePly: "100% Gurjan Hardwood Core",
    spec: "0.25–0.45 mm veneer · MR Grade · 2440×1220 mm panels",
    // TODO: Replace with actual Light Series veneer image (maple / white ash grain)
    img: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=800&q=85",
  },
  {
    name: "Warm Series",
    desc: "Golden amber tones. Honey Teak, Golden Oak, Cherry.",
    species: ["teak", "cherry"],
    basePly: "100% Gurjan Hardwood Core",
    spec: "0.30–0.50 mm veneer · BWR Grade · 2440×1220 mm panels",
    // TODO: Replace with actual Warm Series veneer image (honey teak / cherry grain)
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=85",
  },
  {
    name: "Figured Series",
    desc: "Rare figured cuts. Bird's Eye Maple, Curly Maple, Figured Walnut.",
    species: ["maple", "walnut"],
    basePly: "Premium Gurjan / MDF Backed",
    spec: "0.30–0.40 mm veneer · BWR Grade · 2440×1220 mm panels",
    // TODO: Replace with actual Figured Series veneer image (bird's eye / curly maple grain)
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
  },
  {
    name: "Heritage Series",
    desc: "Classic Indian choices. Burma Teak, Santos Mahogany.",
    species: ["teak", "mahogany"],
    basePly: "100% Gurjan Hardwood Core",
    spec: "0.35–0.50 mm veneer · BWR Grade · 2440×1220 mm panels",
    // TODO: Replace with actual Heritage Series veneer image (Burma teak / Santos mahogany grain)
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=85",
  },
];

const HERO_SLIDE = { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=90", label: "Sharon Exoti Natura", sub: "Exoti Natura" };

const ABOUT_IMAGES = [
  { img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=900&q=90", species: "Walnut", note: "Crown Cut · American Black Walnut" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=90", species: "Natural Oak", note: "Quarter Cut · European Oak" },
  { img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&q=90", species: "Burma Teak", note: "Crown Cut · Tectona grandis" },
  { img: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=900&q=90", species: "Maple", note: "Rift Cut · Hard Maple" },
  { img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=90", species: "Santos Mahogany", note: "Crown Cut · Mesoamerican Origin" },
  { img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=900&q=90", species: "European Ash", note: "Crown Cut · Fraxinus excelsior" },
  { img: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=900&q=90", species: "Cherry", note: "Crown Cut · American Cherry" },
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90", species: "Figured Maple", note: "Bird's Eye Cut · Hard Maple" },
];

// SVG icon components for the marquee
const IconLeaf = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);
const IconSparkles = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/>
  </svg>
);
const IconShieldCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const IconBadge = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
const IconTrees = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>
  </svg>
);
const IconSun = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MARQUEE_FEATURES = [
  { Icon: IconLeaf,       label: "Natural Wood Grain",      desc: "Every sheet carries genuine grain patterns unique to its timber origin." },
  { Icon: IconSparkles,   label: "Premium Surface Finish",  desc: "Precision-sanded to a consistent, polish-ready surface quality." },
  { Icon: IconShieldCheck,label: "Eco-Certified",           desc: "FSC-certified supply chain — legally harvested, sustainably managed." },
  { Icon: IconBadge,      label: "Authentic Character",     desc: "No two sheets are identical — true natural variation in every panel." },
  { Icon: IconTrees,      label: "Wide Species Range",      desc: "Walnut, Oak, Teak, Maple, Cherry, Ash, Mahogany and more." },
  { Icon: IconSun,        label: "UV Stable Finish",        desc: "Colour-stable formulation resists fading under sustained light exposure." },
];

export default function ExotiNaturaPage() {
  const collection = getCollection(COLLECTION_SLUG)!;

  const [activeCat, setActiveCat] = useState(0);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [selectedShade, setSelectedShade] = useState<null | { name: string; code: string; gradient: string; finish: string; grain: string; speciesName: string; basePly: string; spec: string }>(null);
  const STATIC_ROOM_IMG = "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=900&q=90";
  const catTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const catShades = CATEGORIES[activeCat].species.flatMap((slug) => {
    const sp = collection.species.find((s) => s.slug === slug);
    return sp ? sp.shades.map((sh) => ({ ...sh, speciesName: sp.name, basePly: CATEGORIES[activeCat].basePly, spec: CATEGORIES[activeCat].spec })) : [];
  });

  useEffect(() => {
    if (selectedShade) return;
    if (catTimer.current) clearInterval(catTimer.current);
    setHighlightIdx(0);
    catTimer.current = setInterval(() => {
      setHighlightIdx((prev) => {
        const next = prev + 1;
        if (next >= catShades.length) {
          setActiveCat((c) => (c + 1) % CATEGORIES.length);
          return 0;
        }
        return next;
      });
    }, 2200);
    return () => { if (catTimer.current) clearInterval(catTimer.current); };
  }, [activeCat, selectedShade, catShades.length]);

  const handleCatClick = (idx: number) => {
    if (idx === activeCat) return;
    setSelectedShade(null);
    setHighlightIdx(0);
    setActiveCat(idx);
  };

  const handleShadeClick = (shade: typeof catShades[0]) => {
    if (catTimer.current) clearInterval(catTimer.current);
    setSelectedShade({ ...shade });
  };

  const handleCloseDetail = () => { setSelectedShade(null); };

  return (
    <div style={{ background: "#faf9f7", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "92vh", minHeight: 600, overflow: "hidden" }}>
        <img src={HERO_SLIDE.img} alt={HERO_SLIDE.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />

        {/* Breadcrumb */}
        <div style={{ position: "absolute", top: 32, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 1280, padding: "0 40px", zIndex: 10 }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/veneer" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Veneer</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Sharon Exoti Natura</span>
          </nav>
        </div>

        {/* Hero content */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 0 80px", zIndex: 5 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 32, height: 2, background: ACCENT }} />
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: ACCENT }}>{HERO_SLIDE.sub}</p>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6.5vw, 5.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 36 }}>{HERO_SLIDE.label}</h1>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#collections" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em" }}>
                Explore Species
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <Link href="/catalogue" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em", border: "1.5px solid rgba(255,255,255,0.25)", backdropFilter: "blur(6px)" }}>
                Request a Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "80px 0 0", background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Left — about text */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 28, height: 2, background: ACCENT }} />
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: ACCENT }}>About Exoti Natura</p>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#141210", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>India's Finest Natural<br />Wood Veneers</h2>
              <div style={{ width: 40, height: 2, background: ACCENT, marginBottom: 28 }} />
              <p style={{ fontSize: 17, color: "#5a5550", lineHeight: 1.85, marginBottom: 16 }}>Sharon Exoti Natura presents a range of authentic natural veneers sourced from sustainable forests of Africa, South-East Asia, Europe, and the Americas — inspired by natural diversity, crafted to perfection.</p>
              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.85 }}>Each Natura sheet is sliced directly from real timber — the grain patterns, figure, and tonal variation are genuinely natural. No two sheets are identical.</p>
            </div>

            {/* Right — room image */}
            <div style={{ position: "sticky", top: 100 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, marginBottom: 20 }}>Natural Veneer in Space</p>
              <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", height: 400 }}>
                <img src={STATIC_ROOM_IMG} alt="Natural veneer in interior" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,7,4,0.7) 0%, rgba(10,7,4,0.1) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px 28px", zIndex: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 12px", background: `${ACCENT}cc`, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", display: "inline-block", alignSelf: "flex-start", marginBottom: 10 }}>Natural Veneer</span>
                  <p style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", marginBottom: 5 }}>Sharon Exoti Natura</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Authentic grain · Sustainably sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── KEY FEATURES MARQUEE ── */}
        <div style={{ marginTop: 64, borderTop: "1px solid #ede9e0", borderBottom: "1px solid #ede9e0", background: "#faf9f7", overflow: "hidden", paddingTop: 0, paddingBottom: 0 }}>
          {/* Label row */}
          <div style={{ padding: "20px 40px 0", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 20, height: 1.5, background: ACCENT }} />
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT }}>Key Features</p>
          </div>

          {/* Scrolling track */}
          <div
            style={{ overflow: "hidden", padding: "20px 0 24px", cursor: "default" }}
            onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector<HTMLDivElement>(".marquee-track");
              if (track) track.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector<HTMLDivElement>(".marquee-track");
              if (track) track.style.animationPlayState = "running";
            }}
          >
            {/* Render items twice for seamless loop */}
            <div className="marquee-track" style={{ display: "flex", gap: 12, width: "max-content", animation: "marqueeScroll 28s linear infinite" }}>
              {[...MARQUEE_FEATURES, ...MARQUEE_FEATURES].map(({ Icon, label, desc }, i) => (
                <div
                  key={i}
                  style={{
                    width: 240,
                    flexShrink: 0,
                    background: "#fff",
                    border: "1px solid #ede9e0",
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div style={{ color: ACCENT, lineHeight: 1 }}>
                    <Icon />
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 800, color: "#141210", marginBottom: 6, lineHeight: 1.3 }}>{label}</p>
                    <p style={{ fontSize: 12.5, color: "#777", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes marqueeScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee-track { animation-play-state: running; }
        `}</style>
      </section>

      {/* ── NATURA COLLECTIONS ── */}
      <section id="collections" style={{ padding: "80px 0", background: "#faf9f7", scrollMarginTop: 80 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: ACCENT }} />
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT }}>Browse by Series</p>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#141210", letterSpacing: "-0.02em" }}>Explore Veneer Species</h2>
          </div>

          {/* 3-col image card grid */}
          <div className="collections-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
            {CATEGORIES.map((cat, i) => {
              const isActive = activeCat === i;
              return (
                <button
                  key={i}
                  onClick={() => handleCatClick(i)}
                  className="collection-card"
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "block",
                    width: "100%",
                    outline: isActive ? `3px solid ${ACCENT}` : "none",
                    outlineOffset: -3,
                  }}
                >
                  {/* Photo */}
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="collection-card-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.5s ease" }}
                  />

                  {/* Permanent dark gradient at bottom for name legibility */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,7,4,0.72) 0%, rgba(10,7,4,0.1) 50%, transparent 100%)" }} />

                  {/* Hover overlay — "View Details" */}
                  <div className="collection-card-overlay" style={{ position: "absolute", inset: 0, background: `${ACCENT}cc`, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.6)", padding: "10px 22px" }}>
                      View Details
                    </span>
                  </div>

                  {/* Active badge */}
                  {isActive && (
                    <div style={{ position: "absolute", top: 12, right: 12, fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: ACCENT, color: "#fff", padding: "4px 10px" }}>
                      Selected
                    </div>
                  )}

                  {/* Name bar */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 18px" }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", letterSpacing: "0.01em", lineHeight: 1.2 }}>{cat.name}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── SHADE EXPLORER — expands below grid when a series is selected ── */}
          <div style={{ marginTop: 3, background: "#fff", border: "1px solid #e8e3d8", overflow: "hidden" }}>

            {/* Explorer header */}
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #f0ece4", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: 16, fontWeight: 900, color: "#141210", letterSpacing: "-0.01em" }}>{CATEGORIES[activeCat].name}</p>
                <p style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{CATEGORIES[activeCat].desc}</p>
              </div>
              {selectedShade && (
                <button onClick={handleCloseDetail} style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", background: "none", border: "1px solid #ddd", padding: "6px 14px", cursor: "pointer", borderRadius: 2 }}>
                  Clear Selection
                </button>
              )}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: selectedShade ? "1fr 320px" : "1fr", transition: "grid-template-columns 0.35s cubic-bezier(0.22,1,0.36,1)" }}>

              {/* Shade grid */}
              <div style={{ padding: "20px 24px 24px", overflow: "auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 8 }}>
                  {catShades.map((sh, idx) => {
                    const isHighlighted = !selectedShade && highlightIdx === idx;
                    const isSelected = selectedShade?.code === sh.code;
                    return (
                      <div key={sh.code} onClick={() => handleShadeClick(sh)}
                        style={{ cursor: "pointer", overflow: "hidden", border: isSelected ? `3px solid ${ACCENT}` : isHighlighted ? `2px solid ${ACCENT}80` : "2px solid #f0ece4", transition: "transform 0.25s, border 0.3s, box-shadow 0.3s", transform: isHighlighted || isSelected ? "scale(1.03)" : "scale(1)", boxShadow: isHighlighted || isSelected ? `0 6px 24px rgba(196,146,42,0.25)` : "none", position: "relative" }}>
                        <div style={{ height: 80, background: sh.gradient, position: "relative" }}>
                          {isHighlighted && <div style={{ position: "absolute", inset: 0, background: `${ACCENT}20`, animation: "pulse 1s ease-in-out infinite alternate" }} />}
                          <div className="shade-hover-label" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.25s" }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", background: "rgba(10,7,4,0.7)", padding: "4px 9px", borderRadius: 20, letterSpacing: "0.06em" }}>Select</span>
                          </div>
                        </div>
                        <div style={{ padding: "7px 8px 9px", background: isSelected ? "#fdf4e3" : "#fff", transition: "background 0.3s" }}>
                          <p style={{ fontSize: 11, fontWeight: 800, color: "#141210", lineHeight: 1.2, marginBottom: 1 }}>{sh.name}</p>
                          <p style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.04em" }}>{sh.code}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Detail panel — slides in */}
              {selectedShade && (
                <div style={{ borderLeft: "1px solid #f0ece4", display: "flex", flexDirection: "column", animation: "panelSlideIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards" }}>
                  <div style={{ position: "relative", aspectRatio: "3/2", background: selectedShade.gradient, flexShrink: 0 }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,7,4,0.55) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 18px" }}>
                      <p style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 3 }}>{selectedShade.name}</p>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{selectedShade.code}</span>
                    </div>
                  </div>
                  <div style={{ padding: "18px 18px 20px", flex: 1 }}>
                    <div style={{ border: "1px solid #f0ece4" }}>
                      {[
                        { label: "Species",    value: selectedShade.speciesName },
                        { label: "Shade Code", value: selectedShade.code },
                        { label: "Grain",      value: selectedShade.grain || "Crown Cut" },
                      ].map((row, i) => (
                        <div key={i} style={{ display: "flex", borderBottom: i < 2 ? "1px solid #f0ece4" : "none" }}>
                          <div style={{ width: "40%", padding: "10px 12px", background: "#fdf9f3", borderRight: "1px solid #f0ece4" }}>
                            <p style={{ fontSize: 10, fontWeight: 700, color: "#bbb", textTransform: "uppercase", letterSpacing: "0.12em" }}>{row.label}</p>
                          </div>
                          <div style={{ flex: 1, padding: "10px 12px" }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: "#141210" }}>{row.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: `${ACCENT}12`, border: `1px solid ${ACCENT}30` }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
                        <span style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>Natural Veneer</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        <style>{`
          .collections-grid { }
          .collection-card-img { }
          .collection-card:hover .collection-card-img { transform: scale(1.06); }
          .collection-card:hover .collection-card-overlay { opacity: 1 !important; }
          div[style*="cursor: pointer"]:hover .shade-hover-label { opacity: 1 !important; }
          @keyframes pulse { from { opacity: 0.3; } to { opacity: 0.7; } }
          @keyframes panelSlideIn { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        `}</style>
      </section>

      {/* ── DOWNLOADS & CONTACT ── */}
      <section style={{ padding: "40px 0", background: "rgba(0,0,0,0.8)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Downloads &amp; Contact</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <Link href="/catalogue" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: ACCENT, color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Request a Sample
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: "transparent", color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              Request a Sample
            </Link>
            <Link href="/dealers" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 24px", background: "transparent", color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em", border: "1.5px solid rgba(255,255,255,0.15)" }}>
              Find a Dealer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
