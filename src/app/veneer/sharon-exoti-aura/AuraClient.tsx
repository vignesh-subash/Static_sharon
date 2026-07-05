"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCollection } from "@/data/veneerData";

const COLLECTION_SLUG = "sharon-exoti-aura";
const ACCENT = "#7c6aba";

const CATEGORIES = [
  {
    name: "Grey Series",
    desc: "Nordic Oak, Smoke Maple, Cool Tones. Matte and satin finishes for Scandinavian and contemporary minimal interiors.",
    species: ["oak", "maple"],
    basePly: "MDF / Plywood Backed",
    spec: "0.30–0.45 mm veneer · UV-Cured Matte/Satin · 2400×1200 mm",
    // TODO: Replace with actual Grey Series Aura veneer image (grey oak / smoke maple)
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=85",
  },
  {
    name: "Teak Series",
    desc: "Matte Teak, Lacquered Teak. Factory-finished interpretation of India's most iconic wood species.",
    species: ["teak"],
    basePly: "100% Gurjan Core / MDF Backed",
    spec: "0.35–0.50 mm veneer · Matte / High-Gloss · 2400×1200 mm",
    // TODO: Replace with actual Teak Series Aura veneer image (matte / lacquered teak)
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=85",
  },
  {
    name: "Dark Series",
    desc: "Natural Wenge, Dark Wenge, Ebony. Near-black tones for maximum drama in feature walls and statement furniture.",
    species: ["wenge", "ebony"],
    basePly: "Premium Plywood / MDF Backed",
    spec: "0.30–0.45 mm veneer · Matte / Satin / High-Gloss · 2400×1200 mm",
    // TODO: Replace with actual Dark Series Aura veneer image (wenge / ebony grain)
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85",
  },
  {
    name: "Light Series",
    desc: "White Maple, Satin White Oak. The cleanest, brightest factory surfaces for modern light-filled interiors.",
    species: ["maple", "oak"],
    basePly: "MDF / Plywood Backed",
    spec: "0.25–0.40 mm veneer · Matte / Satin · 2400×1200 mm",
    // TODO: Replace with actual Light Series Aura veneer image (white maple / satin oak)
    img: "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=85",
  },
  {
    name: "Abstract Series",
    desc: "Macassar Ebony, Textured Oak. Rare figured wood species with wire-brushed or satin factory finish.",
    species: ["ebony", "oak"],
    basePly: "Premium MDF / Plywood Backed",
    spec: "0.30–0.45 mm veneer · Textured / Satin · 2400×1200 mm",
    // TODO: Replace with actual Abstract Series Aura veneer image (macassar / textured oak)
    img: "https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=800&q=85",
  },
  {
    name: "Gloss Series",
    desc: "High-Gloss Walnut, Gloss Smoked Oak. Mirror-polished factory finish.",
    species: ["walnut", "oak"],
    basePly: "Premium Plywood / MDF Backed",
    spec: "0.30–0.45 mm veneer · High-Gloss · 2400×1200 mm",
    // TODO: Replace with actual Gloss Series Aura veneer image (high-gloss walnut / smoked oak)
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
  },
];

const HERO_SLIDE = {
  // TODO: Replace with actual Aura factory-finished veneer hero image
  img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=90",
  label: "Sharon Exoti Aura",
  sub: "Exoti Aura",
};

// SVG icon components for the marquee
const IconSparkles = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    <path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/>
  </svg>
);
const IconSun = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);
const IconShieldCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const IconPalette = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);
const IconLayers = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
);
const IconZap = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const MARQUEE_FEATURES = [
  { Icon: IconSparkles, label: "Factory UV Finish",       desc: "UV-cured lacquer applied under controlled conditions — delivered site-ready." },
  { Icon: IconSun,      label: "UV Stable Colour",        desc: "Colour-stable formulation resists fading under sustained light exposure." },
  { Icon: IconShieldCheck, label: "Eco-Certified",        desc: "FSC-certified supply chain — legally harvested, sustainably managed timber." },
  { Icon: IconPalette,  label: "Wide Shade Range",        desc: "Matte, Satin, High-Gloss and Textured finishes across multiple species." },
  { Icon: IconLayers,   label: "Consistent Tone",         desc: "Every panel matches across the batch — ideal for large-scale projects." },
  { Icon: IconZap,      label: "Zero Site Polishing",     desc: "No sanding or lacquering on site — significant time and cost saving." },
];

export default function ExotiAuraPage() {
  const collection = getCollection(COLLECTION_SLUG)!;

  const [activeCat, setActiveCat] = useState(0);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [selectedShade, setSelectedShade] = useState<null | { name: string; code: string; gradient: string; finish: string; grain: string; speciesName: string; basePly: string; spec: string }>(null);
  const STATIC_ROOM_IMG = "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=90";
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

  const handleCloseDetail = () => setSelectedShade(null);

  const finishDot = (f: string) => {
    if (f === "Matte") return "#555";
    if (f === "Satin") return ACCENT;
    if (f === "High-Gloss") return "#2c5282";
    return "#2e7d32";
  };

  return (
    <div style={{ background: "#faf9f7", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "92vh", minHeight: 600, overflow: "hidden" }}>
        <img src={HERO_SLIDE.img} alt={HERO_SLIDE.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />

        {/* Breadcrumb */}
        <div style={{ position: "absolute", top: 32, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 1280, padding: "0 32px", zIndex: 10 }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/veneer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Veneer</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)" }}>Sharon Exoti Aura</span>
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
              <a href="#categories" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: ACCENT, color: "#fff", fontSize: 14, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em" }}>
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
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: ACCENT }}>About Exoti Aura</p>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#141210", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>Reconstituted<br />Excellence</h2>
              <div style={{ width: 40, height: 2, background: ACCENT, marginBottom: 28 }} />
              <p style={{ fontSize: 17, color: "#5a5550", lineHeight: 1.85, marginBottom: 16 }}>Sharon Exoti Aura is the Reconstituted Wood Veneer range — a re-manufactured product born from genuine plantation wood. Each shade is contrived through templates and pre-developed dye moulds, giving designers complete control over tone and consistency.</p>
              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.85 }}>The result: extraordinary tonal uniformity across large panel runs — ideal for residential, hospitality, and commercial projects demanding consistent colour.</p>
            </div>

            {/* Right — room image */}
            <div style={{ position: "sticky", top: 100 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, marginBottom: 20 }}>Aura Veneer in Space</p>
              <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", height: 400 }}>
                <img src={STATIC_ROOM_IMG} alt="Factory-finished veneer in interior" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,18,0.75) 0%, rgba(12,10,18,0.1) 55%, transparent 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px 28px", zIndex: 2 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 12px", background: `${ACCENT}cc`, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", display: "inline-block", alignSelf: "flex-start", marginBottom: 10 }}>Factory Finish</span>
                  <p style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", marginBottom: 5 }}>Sharon Exoti Aura</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>UV-Cured · Site-Ready · Multiple Finish Types</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── KEY FEATURES MARQUEE ── */}
        <div style={{ marginTop: 64, borderTop: "1px solid #e8e5f0", borderBottom: "1px solid #e8e5f0", background: "#faf9f7", overflow: "hidden" }}>
          {/* Label row */}
          <div style={{ padding: "20px 40px 0", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 20, height: 1.5, background: ACCENT }} />
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT }}>Key Features</p>
          </div>

          {/* Scrolling track */}
          <div
            style={{ overflow: "hidden", padding: "20px 0 24px", cursor: "default" }}
            onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector<HTMLDivElement>(".aura-marquee-track");
              if (track) track.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector<HTMLDivElement>(".aura-marquee-track");
              if (track) track.style.animationPlayState = "running";
            }}
          >
            <div className="aura-marquee-track" style={{ display: "flex", gap: 12, width: "max-content", animation: "auraMarqueeScroll 28s linear infinite" }}>
              {[...MARQUEE_FEATURES, ...MARQUEE_FEATURES].map(({ Icon, label, desc }, i) => (
                <div
                  key={i}
                  style={{
                    width: 240,
                    flexShrink: 0,
                    background: "#fff",
                    border: "1px solid #e8e5f0",
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
          @keyframes auraMarqueeScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .aura-marquee-track { animation-play-state: running; }
        `}</style>
      </section>

      {/* ── AURA COLLECTIONS ── */}
      <section id="categories" style={{ padding: "80px 0", background: "#faf9f7", scrollMarginTop: 80 }}>
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
          <div className="aura-collections-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
            {CATEGORIES.map((cat, i) => {
              const isActive = activeCat === i;
              return (
                <button
                  key={i}
                  onClick={() => handleCatClick(i)}
                  className="aura-collection-card"
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
                    className="aura-collection-card-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.5s ease" }}
                  />

                  {/* Permanent dark gradient */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,18,0.75) 0%, rgba(12,10,18,0.1) 50%, transparent 100%)" }} />

                  {/* Hover overlay */}
                  <div className="aura-collection-card-overlay" style={{ position: "absolute", inset: 0, background: `${ACCENT}cc`, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease" }}>
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

          {/* ── SHADE EXPLORER — below grid ── */}
          <div style={{ marginTop: 3, background: "#fff", border: "1px solid #e8e4f0", overflow: "hidden" }}>

            {/* Explorer header */}
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #f0ecf8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                        style={{ cursor: "pointer", overflow: "hidden", border: isSelected ? `3px solid ${ACCENT}` : isHighlighted ? `2px solid ${ACCENT}80` : "2px solid #f0ecf8", transition: "transform 0.25s, border 0.3s, box-shadow 0.3s", transform: isHighlighted || isSelected ? "scale(1.03)" : "scale(1)", boxShadow: isHighlighted || isSelected ? `0 6px 24px rgba(124,106,186,0.25)` : "none", position: "relative" }}>
                        <div style={{ height: 80, background: sh.gradient, position: "relative" }}>
                          {isHighlighted && <div style={{ position: "absolute", inset: 0, background: `${ACCENT}20`, animation: "aura-pulse 1s ease-in-out infinite alternate" }} />}
                          <div style={{ position: "absolute", top: 7, right: 7, width: 9, height: 9, borderRadius: "50%", background: finishDot(sh.finish), border: "2px solid rgba(255,255,255,0.8)" }} />
                          <div className="aura-shade-hover-label" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.25s", background: "rgba(12,10,18,0.5)" }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>Select</span>
                          </div>
                        </div>
                        <div style={{ padding: "7px 8px 9px", background: isSelected ? "#f0edf9" : "#fff", transition: "background 0.3s" }}>
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
                <div style={{ borderLeft: "1px solid #f0ecf8", display: "flex", flexDirection: "column", animation: "aura-panelSlideIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards" }}>
                  <div style={{ position: "relative", aspectRatio: "3/2", background: selectedShade.gradient, flexShrink: 0 }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,18,0.55) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 18px" }}>
                      <p style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 3 }}>{selectedShade.name}</p>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{selectedShade.code}</span>
                    </div>
                  </div>
                  <div style={{ padding: "18px 18px 20px", flex: 1 }}>
                    <div style={{ border: "1px solid #f0ecf8" }}>
                      {[
                        { label: "Species", value: selectedShade.speciesName },
                        { label: "Shade Code", value: selectedShade.code },
                        { label: "Finish",  value: selectedShade.finish || "Matte" },
                      ].map((row, i) => (
                        <div key={i} style={{ display: "flex", borderBottom: i < 2 ? "1px solid #f0ecf8" : "none" }}>
                          <div style={{ width: "40%", padding: "10px 12px", background: "#faf9fc", borderRight: "1px solid #f0ecf8" }}>
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
                        <span style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>Factory Finished</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        <style>{`
          .aura-collection-card:hover .aura-collection-card-img { transform: scale(1.06); }
          .aura-collection-card:hover .aura-collection-card-overlay { opacity: 1 !important; }
          div[style*="cursor: pointer"]:hover .aura-shade-hover-label { opacity: 1 !important; }
          @keyframes aura-pulse { from { opacity: 0.3; } to { opacity: 0.7; } }
          @keyframes aura-panelSlideIn { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "40px 0", background: "#141210" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, marginBottom: 8 }}>Get Started</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 900, color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: 6 }}>Find Your Perfect Aura Finish</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", maxWidth: 460, lineHeight: 1.7 }}>Download the shade card, request a physical sample, or speak to a Sharon veneer specialist.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/catalogue" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: ACCENT, color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Request a Sample
            </Link>
            <Link href="/contact/sales-team" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "12px 24px", background: "transparent", color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em", border: "1.5px solid rgba(255,255,255,0.2)", whiteSpace: "nowrap" }}>
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
