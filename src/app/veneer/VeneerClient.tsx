"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { veneerCollections } from "@/data/veneerData";

// ── Hero Slides ──────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&q=90",
    headline: "Where Wood Becomes Art",
    sub: "From authentic natural grains to factory-finished surfaces, Sharon Veneers offer refined choices for premium interiors.",
    cta: "Explore Veneers",
    href: "/veneer/sharon-exoti-natura",
    overlay: "rgba(0,0,0,0.5)",
  },
  {
    img: "https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=1600&q=90",
    headline: "Crafting Spaces with Unmatched Precision",
    sub: "Sliced from single logs. Sourced from sustainable forests. Specified by India's leading architects.",
    cta: "View Natura",
    href: "/veneer/exotic-natura",
    overlay: "linear-gradient(to right, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.38) 55%, rgba(10,8,6,0.15) 100%)",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90",
    headline: "Factory-Finished. Site-Ready.",
    sub: "Factory-finished reconstituted veneers designed for consistent tone, refined surface finish, and ready-to-install performance.",
    cta: "View Aura",
    href: "/veneer/sharon-exoti-aura",
    overlay: "linear-gradient(to right, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.38) 55%, rgba(10,8,6,0.15) 100%)",
  },
];

// ── Certificates ─────────────────────────────────────────────────────────────
const NATURA_CERTS = [
  { name: "FSC", sub: "Forest Stewardship Council" },
  { name: "IS 1328", sub: "Bureau of Indian Standards" },
  { name: "IS 848:2006", sub: "Bureau of Indian Standards" },
  { name: "ISO 9001:2015", sub: "Quality Management" },
  { name: "ISO 14001:2015", sub: "Environmental Management" },
  { name: "ISO 45001:2018", sub: "Occupational Safety" },
  { name: "IGBC", sub: "Indian Green Building Council" },
];

const AURA_CERTS = [
  { name: "FSC", sub: "Forest Stewardship Council" },
  { name: "BIS / ISI", sub: "Bureau of Indian Standards" },
  { name: "IS 1328", sub: "Decorative Veneer Standard" },
  { name: "IS 848:2006", sub: "Adhesive Standard" },
  { name: "ISO 9001", sub: "Quality Management" },
  { name: "ISO 14001", sub: "Environmental Management" },
  { name: "IGBC", sub: "Green Building Certified" },
];

// ── Blogs ─────────────────────────────────────────────────────────────────────
const VENEER_BLOGS = [
  {
    slug: "why-is-veneer-a-good-option-for-your-home-interiors",
    title: "Why is Veneer a Good Option for Your Home Interiors?",
    image: "https://sharonply.com/wp-content/uploads/2023/09/1-12-1.jpg",
    date: "Sep 2023",
    tag: "Veneer",
  },
  {
    slug: "diy-decorative-projects-using-decorative-veneer-plywood",
    title: "DIY Decorative Projects Using Decorative Veneer Plywood",
    image: "https://sharonply.com/wp-content/uploads/2024/11/Decorative-veneer-plywood.jpeg",
    date: "Nov 2024",
    tag: "Veneer",
  },
  {
    slug: "understanding-veneer-sheets_-a-comprehensive-guide-for-woodworking-enthusiasts",
    title: "Understanding Veneer Sheets: A Comprehensive Guide",
    image: "https://sharonply.com/wp-content/uploads/2024/06/understanding.jpeg",
    date: "Jun 2024",
    tag: "Veneer",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function VeneerPage() {
  // suppress unused-variable warning — veneerCollections used for future expansion
  void veneerCollections;

  // Hero carousel
  const [slide, setSlide] = useState(0);
  const slideTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Active tab shared by USPs + Certs combined section
  const [activeTab, setActiveTab] = useState<"natura" | "aura">("natura");

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => { if (slideTimer.current) clearInterval(slideTimer.current); };
  }, []);

  return (
    <div style={{ background: "#faf9f7", minHeight: "100vh", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>

      {/* ── HERO CAROUSEL ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "92vh", minHeight: 560, overflow: "hidden" }}>
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute", inset: 0,
              opacity: slide === i ? 1 : 0,
              transition: "opacity 1.2s ease",
              pointerEvents: slide === i ? "auto" : "none",
            }}
          >
            <img
              src={s.img}
              alt={s.headline}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: s.overlay }} />
          </div>
        ))}

        {/* Breadcrumb */}
        <div style={{ position: "absolute", top: 32, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 1280, padding: "0 32px", zIndex: 10 }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
            <span>/</span><span>Products</span><span>/</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Veneer</span>
          </nav>
        </div>

        {/* Slide content */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", zIndex: 5 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", width: "100%" }}>
            {HERO_SLIDES.map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  opacity: slide === i ? 1 : 0,
                  transform: slide === i ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
                  maxWidth: 580,
                }}
              >
                
                <h1 style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.06, fontFamily: "var(--font-display)", letterSpacing: "0.03em", textTransform: "uppercase", marginBottom: 20 }}>{s.headline}</h1>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>{s.sub}</p>
                <Link href={s.href} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 32px", background: "#c4922a", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 2, textDecoration: "none", letterSpacing: "0.08em" }}>
                  {s.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10 }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setSlide(i); if (slideTimer.current) { clearInterval(slideTimer.current); slideTimer.current = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5000); }}}
              style={{ width: slide === i ? 28 : 8, height: 8, borderRadius: 4, background: slide === i ? "#c4922a" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", padding: 0, transition: "width 0.3s, background 0.3s" }}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div style={{ position: "absolute", bottom: 36, right: 48, zIndex: 10 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{String(slide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}</span>
        </div>
      </section>

      {/* ── COLLECTIONS ───────────────────────────────────────────────────── */}
      {/* Merged: Products Intro + 80/20 Split → single section with intro text + 2 equal side-by-side cards */}
      <section id="collections" style={{ padding: "60px 0", background: "#fff", borderBottom: "1px solid #ede9e0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Intro row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4922a", marginBottom: 12 }}>Choose Your Veneer Style</p>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, color: "#141210", lineHeight: 1.12, fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 0 }}>
                Natural Beauty.<br />Refined Surfaces.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 15, color: "#5a5550", lineHeight: 1.8 }}>
                Sharon Exoti is India&apos;s premier source for decorative wood veneer — natural sliced and factory-finished veneers for architects, interior designers, and luxury projects.
              </p>
            </div>
          </div>

          {/* Two equal product cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }} className="grid-cols-1 lg:grid-cols-2">

            {/* NATURA card */}
            <div style={{ position: "relative", height: 420, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=85"
                alt="Sharon Exoti Natura"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,4,0.85) 0%, rgba(10,8,4,0.15) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 16, height: 1.5, background: "#c4922a" }} />
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c4922a" }}>Exoti Natura</p>
                </div>
                <h3 style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 900, color: "#fff", fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10, lineHeight: 1.2 }}>
                  Sharon Exoti Natura
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 18, maxWidth: 380 }}>
                  Authentic sliced wood veneers sourced from sustainable forests. Natural grain, genuine texture — no two sheets identical.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                  {["Walnut", "Oak", "Teak", "Maple", "Cherry", "Ash", "Mahogany"].map((t) => (
                    <span key={t} style={{ fontSize: 9, fontWeight: 700, padding: "3px 8px", background: "rgba(196,146,42,0.2)", color: "#c4922a", border: "1px solid rgba(196,146,42,0.35)", letterSpacing: "0.08em" }}>{t}</span>
                  ))}
                </div>
                <Link href="/veneer/exotic-natura" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", background: "#c4922a", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none", letterSpacing: "0.08em", borderRadius: 2 }}>
                  Explore Natura
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* AURA card */}
            <div style={{ position: "relative", height: 420, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85"
                alt="Sharon Exoti Aura"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,18,0.85) 0%, rgba(12,10,18,0.15) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 16, height: 1.5, background: "#7c6aba" }} />
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9d8fd4" }}>Factory-Finished</p>
                </div>
                <h3 style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 900, color: "#fff", fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10, lineHeight: 1.2 }}>
                  Sharon Exoti Aura
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 18, maxWidth: 380 }}>
                  Reconstituted veneers with UV-cured factory finish — Matte, Satin, and High-Gloss. Zero site polishing required.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                  {["Matte", "Satin", "High-Gloss", "Textured"].map((t) => (
                    <span key={t} style={{ fontSize: 9, fontWeight: 700, padding: "3px 8px", background: "rgba(124,106,186,0.2)", color: "#9d8fd4", border: "1px solid rgba(124,106,186,0.35)", letterSpacing: "0.08em" }}>{t}</span>
                  ))}
                </div>
                <Link href="/veneer/sharon-exoti-aura" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", background: "#7c6aba", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none", letterSpacing: "0.08em", borderRadius: 2 }}>
                  Explore Aura
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY SHARON VENEER ─────────────────────────────────────────────── */}
      <section style={{ padding: "60px 0", background: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4922a", marginBottom: 8 }}>Why Sharon</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#141210", fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Real Wood. Smarter Economics.</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }} className="grid-cols-1 lg:grid-cols-2">
            {/* Dark anchor card */}
            <div style={{ background: "#141210", padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4922a", marginBottom: 16 }}>The Case for Veneer</p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 14 }}>
                A single cubic metre of timber yields a fraction of solid wood panels — but yields many times more as veneer. This extraordinary efficiency means every Sharon Exoti sheet conserves the world&apos;s finest timbers for future generations.
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85 }}>
                Yet the visual result is indistinguishable from solid wood — grain, texture, warmth, and natural variation are entirely genuine. Only the thickness has changed.
              </p>
            </div>

            {/* Reason cards — 2×2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {[
                { n: "01", h: "Genuine Real Wood", b: "Sliced directly from real timber logs. Grain patterns, colour variation, and surface feel are 100% authentic." },
                { n: "02", h: "Architect Specified", b: "The veneer of choice for leading residential architects and five-star hospitality projects across India." },
                { n: "03", h: "CARB E0 Compliant", b: "Zero formaldehyde emissions. Mandatory for IGBC and LEED-certified projects." },
                { n: "04", h: "Project Support", b: "Physical samples, technical data sheets, and trade pricing available on request." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fff", padding: "24px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <p style={{ fontSize: 10, fontWeight: 900, color: "#c4922a", letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>{item.n}</p>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 800, color: "#141210", marginBottom: 6, lineHeight: 1.3 }}>{item.h}</h3>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USPs + CERTIFICATIONS (combined) ──────────────────────────────── */}
      <section style={{ padding: "60px 0", background: "#fff", borderTop: "1px solid #ede9e0", borderBottom: "1px solid #ede9e0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Shared tab switcher */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, gap: 16, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4922a", marginBottom: 10 }}>Features & Certifications</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", fontWeight: 900, color: "#141210", fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Built to Specification</h2>
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              {(["natura", "aura"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "9px 22px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", border: "1.5px solid", cursor: "pointer", background: activeTab === tab ? "#141210" : "transparent", color: activeTab === tab ? "#fff" : "#888", borderColor: activeTab === tab ? "#141210" : "#d4cfc5", borderRadius: 2, transition: "all 0.2s" }}>
                  Exoti {tab === "natura" ? "Natura" : "Aura"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, alignItems: "start" }} className="grid-cols-1 lg:grid-cols-2">

            {/* Left: Key Features (icon + title only, 4 items) */}
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Key Features</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: activeTab === "natura" ? "#e8e3d8" : "#dddae8" }}>
                {(activeTab === "natura" ? [
                  { icon: "🌿", h: "Borer & Termite Resistant" },
                  { icon: "💧", h: "Boiling Water Resistant" },
                  { icon: "🌳", h: "Gurjan Hardwood Core" },
                  { icon: "⚙️", h: "German Sanding Technology" },
                ] : [
                  { icon: "✨", h: "Factory UV Finish" },
                  { icon: "🎨", h: "Wide Shade Range" },
                  { icon: "🏭", h: "Automated Manufacturing" },
                  { icon: "🔍", h: "Full Visual Inspection" },
                ]).map((u, i) => (
                  <div key={i} style={{ background: "#fff", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
                    <div style={{ fontSize: 28 }}>{u.icon}</div>
                    <h3 style={{ fontSize: 13, fontWeight: 800, color: "#141210", lineHeight: 1.3 }}>{u.h}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Certifications */}
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", marginBottom: 10 }}>Certifications</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: activeTab === "natura" ? "#e8e3d8" : "#dddae8" }}>
                {(activeTab === "natura" ? NATURA_CERTS : AURA_CERTS).map((c, i) => (
                  <div key={i} style={{ background: "#fff", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: activeTab === "natura" ? "#fdf5e8" : "#f4f2fa", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10, border: `2px solid ${activeTab === "natura" ? "#c4922a30" : "#7c6aba30"}` }}>
                      <p style={{ fontSize: 9, fontWeight: 900, color: activeTab === "natura" ? "#c4922a" : "#7c6aba", lineHeight: 1.1, letterSpacing: "-0.01em", textAlign: "center" }}>{c.name.split(" ").slice(0, 2).join("\n")}</p>
                    </div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#141210", marginBottom: 3 }}>{c.name}</p>
                    <p style={{ fontSize: 10, color: "#888", lineHeight: 1.3 }}>{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BLOGS ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "60px 0", background: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, gap: 20, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4922a", marginBottom: 10 }}>Knowledge Hub</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", fontWeight: 900, color: "#141210", fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase" }}>Veneer Design Insights</h2>
            </div>
            <Link href="/blog" style={{ fontSize: 12, fontWeight: 700, color: "#141210", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1.5px solid #141210", paddingBottom: 2 }}>View All →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#e8e3d8" }} className="grid-cols-1 sm:grid-cols-3">
            {VENEER_BLOGS.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`} style={{ textDecoration: "none", display: "block", background: "#fff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#fdf8f0"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}
              >
                <div style={{ height: 160, overflow: "hidden" }}>
                  <img src={b.image} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, padding: "3px 8px", background: "#f5f0e8", color: "#c4922a", letterSpacing: "0.1em", textTransform: "uppercase" }}>{b.tag}</span>
                    <span style={{ fontSize: 10, color: "#aaa" }}>{b.date}</span>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#141210", lineHeight: 1.45 }}>{b.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "40px 0", background: "#141210" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }} className="grid-cols-1 lg:grid-cols-[1fr_auto]">
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4922a", marginBottom: 10 }}>Get Started</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 900, color: "#fff", fontFamily: "var(--font-display)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>Find Your Perfect Veneer</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", maxWidth: 460, lineHeight: 1.7 }}>Download the shade card, request a physical sample, or speak to a Sharon veneer specialist.</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <Link href="/catalogue" style={{ display: "block", textAlign: "center", padding: "12px 24px", background: "#c4922a", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none", borderRadius: 2, whiteSpace: "nowrap" }}>Download Shade Card</Link>
              <Link href="/contact" style={{ display: "block", textAlign: "center", padding: "12px 24px", background: "transparent", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 2, whiteSpace: "nowrap" }}>Request a Sample</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
