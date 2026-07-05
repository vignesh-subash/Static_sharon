"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { IMG } from "@/data/plywoodData";

/* ── Videos from @sharonplyindia ── */
const videos = [
  // 2025
  { id: "7REqAKSzg_0", title: "#IAmStrongest Awards — 7th Edition 2025",          description: "SharonPly's latest upload — the 7th edition of #IAmStrongest Awards celebrating strength and service.",                                   category: "Brand Campaign",  year: 2025, featured: true  },
  { id: "BZpRN9q0Vr0", title: "#IAmStrongest Awards — 6th Edition 2025",         description: "SharonPly honours army veterans turned defence analysts at the 6th edition of #IAmStrongest Awards 2025.",                              category: "Brand Campaign",  year: 2025, featured: false },
  { id: "qjcSCGUaABI", title: "#IAmStrongest 2025 — Awardee Spotlight",           description: "A spotlight on the brave awardees recognised at SharonPly's #IAmStrongest Awards 2025.",                                                    category: "Brand Campaign",  year: 2025, featured: false },
  { id: "sx9jFKO245k", title: "#IAmStrongest 2025 — Awardee Stories",             description: "Stories of strength and service from the honourees of the 2025 #IAmStrongest Awards.",                                                      category: "Brand Campaign",  year: 2025, featured: false },
  // 2024
  { id: "kTa2c9TnBXQ", title: "#IAmStrongest Awards — 5th Edition 2024",          description: "SharonPly honours Olympic hockey legends who represented India with unmatched strength and resilience.",                                    category: "Brand Campaign",  year: 2024, featured: false },
  { id: "35P4yWV2NM0", title: "Vasudevan Baskaran — 5th Edition Awardee",         description: "Awardee spotlight from the 5th edition of #IAmStrongest Awards — SharonPly celebrates India's hockey greats.",                            category: "Brand Campaign",  year: 2024, featured: false },
  { id: "h26QbQywZbY", title: "Sharon Secure App — Product Authentication",       description: "Learn how to verify the authenticity of your SharonPly product using the Sharon Secure App.",                                              category: "Tutorial",        year: 2024, featured: false },
  // 2023
  { id: "Y7f03FtM7gk", title: "VIRASAFE Technology — 99.99% Virus Safe",          description: "SharonPly's exclusive VIRASAFE technology eliminates 99.99% of viruses and bacteria using activated nanoparticles.",                       category: "Technology",      year: 2023, featured: false },
  { id: "gQjMH3YJNBQ", title: "FIRESAVE Technology — Class A Fire Rating",        description: "Sharon Platinum Ply with FIRESAVE provides superior fire resistance conforming to ASTM E84 standards.",                                     category: "Technology",      year: 2023, featured: false },
  { id: "MMbD9bynFe4", title: "FIRESAVE — Watch It In Action",                    description: "SharonPly's FIRESAVE technology tested and demonstrated — see the Class A fire rating in action.",                                         category: "Technology",      year: 2023, featured: false },
  { id: "w8SqPKKwQmM", title: "VIRASAFE TVC — 60 Sec",                           description: "The official 60-second VIRASAFE technology TVC from SharonPly — English version.",                                                         category: "Product TVC",     year: 2023, featured: false },
  { id: "wkREBHQ6VQI", title: "#IAmStrongest — Celebrating Real Heroes",          description: "The #IAmStrongest Awards by SharonPly — recognising extraordinary people who embody true strength.",                                        category: "Brand Campaign",  year: 2023, featured: false },
  { id: "mBslTMxmZuY", title: "#IAmStrongest — Elephant Whisperers Edition",      description: "SharonPly honours the team behind the Oscar-winning documentary 'The Elephant Whisperers'.",                                               category: "Brand Campaign",  year: 2023, featured: false },
  { id: "h0lvuUcwA3A", title: "THE FIRE | FIREPROOF PLYWOOD",                     description: "SharonPly's fireproof plywood — THE FIRE campaign showcasing fire resistance technology.",                                                  category: "Product TVC",     year: 2023, featured: false },
  { id: "XB77aM5R070", title: "THE SMELL | E0 PLYWOOD",                           description: "SharonPly's E-Zero formaldehyde campaign — THE SMELL series.",                                                                              category: "Product TVC",     year: 2023, featured: false },
  // 2022
  { id: "rVnWFQq1ByM", title: "Sovereign 710 — Built for Every Home",             description: "Sovereign 710 BWP plywood — Kyoto Pro-Tech termite treatment, calibrated precision, boiling water proof bonding.",                         category: "Product TVC",     year: 2022, featured: false },
  { id: "6ZN1MJfRlFQ", title: "Sharon Gold — The Gold Standard",                  description: "Sharon Gold sets the gold standard in BWP plywood with superior bonding strength and termite resistance.",                                  category: "Product TVC",     year: 2022, featured: false },
  { id: "JxnfZB6PeFY", title: "Cricket Strength — TNPL TVC 60 Sec",              description: "Sharon Plywoods Cricket Strength — TNPL TVC (60 sec, English).",                                                                           category: "Product TVC",     year: 2022, featured: false },
  { id: "cCDfwnohotM", title: "#IAmStrongest — Past Olympic Medal Winners",       description: "SharonPly presents the #IAmStrongest Awards to past Olympic medal winners — celebrating the spirit of champions.",                         category: "Brand Campaign",  year: 2022, featured: false },
  { id: "GtL1hoin9Pk", title: "SharonPly Corporate Film — Our Legacy",            description: "From a humble beginning in Chennai to a trusted plywood brand — the SharonPly story.",                                    category: "Corporate",       year: 2022, featured: false },
  { id: "PFMiuC5tbhw", title: "SharonPlywoods — The Mahoot",                      description: "A compelling SharonPly brand film featuring 'The Mahoot'.",                                                                                 category: "Corporate",       year: 2022, featured: false },
  // 2021
  { id: "VU-vlZBngKI", title: "Sharon Prima Armor — Reliable Everyday Performance","description": "Sharon Prima Armor delivers consistent BWP-grade performance at an accessible price for everyday applications.",                         category: "Product TVC",     year: 2021, featured: false },
  { id: "uO_4BEVLsxk", title: "E-Zero Emission — Breathe Safe at Home",           description: "SharonPly's E-Zero emission technology ensures zero formaldehyde release for healthier indoor spaces.",                                    category: "Technology",      year: 2021, featured: false },
  // Corporate / About
  { id: "O0IJC8DC5SQ", title: "Making In India Since 1987",                       description: "SharonPlywoods — the story of Making In India Since 1987. Our journey, values, and manufacturing excellence.",                            category: "Corporate",       year: 2021, featured: false },
  { id: "XkyvoMZhnow", title: "A Glimpse of SharonPly",                           description: "A glimpse into SharonPly — a trusted plywood manufacturer since 1987.",                                                                     category: "Corporate",       year: 2020, featured: false },
];

const CATEGORIES = ["All", "Product TVC", "Brand Campaign", "Technology", "Tutorial", "Corporate"];

const CAT_STYLE: Record<string, { color: string; bg: string; border: string }> = {
  "All":            { color: "#00793A", bg: "#e8f5ee",  border: "#00793A" },
  "Product TVC":    { color: "#00793A", bg: "#e8f5ee",  border: "#00793A" },
  "Brand Campaign": { color: "#92400e", bg: "#fff8e1",  border: "#ffc107" },
  "Technology":     { color: "#1d4ed8", bg: "#eff6ff",  border: "#3b82f6" },
  "Tutorial":       { color: "#7e22ce", bg: "#fdf4ff",  border: "#a855f7" },
  "Corporate":      { color: "#be123c", bg: "#fff1f2",  border: "#f43f5e" },
};

const thumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const thumbFallback = (e: React.SyntheticEvent<HTMLImageElement>, id: string) => {
  (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/sddefault.jpg`;
};

/* ── Video Card ── */
function VideoCard({ v, onClick }: { v: typeof videos[0]; onClick: () => void }) {
  const cs = CAT_STYLE[v.category] ?? CAT_STYLE.All;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column", borderRadius: 12, overflow: "hidden", background: "#fff", border: "1px solid #f0f0f0", transition: "box-shadow 0.25s, transform 0.25s", boxShadow: hovered ? "0 12px 32px rgba(0,121,58,0.13)" : "0 2px 8px rgba(0,0,0,0.06)", transform: hovered ? "translateY(-3px)" : "translateY(0)" }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#111" }}>
        <img src={thumb(v.id)} alt={v.title} loading="lazy" onError={(e) => thumbFallback(e, v.id)}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)", opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s" }} />
        {/* Play button */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: hovered ? "#00793A" : "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.25)", transition: "background 0.25s, transform 0.25s", transform: hovered ? "scale(1.12)" : "scale(1)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={hovered ? "#fff" : "#00793A"} style={{ marginLeft: 2, transition: "fill 0.2s" }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
        {/* Year badge */}
        <div style={{ position: "absolute", bottom: 8, right: 8, padding: "2px 7px", borderRadius: 4, background: "rgba(0,0,0,0.72)", color: "#fff", fontSize: 10, fontWeight: 700 }}>{v.year}</div>
      </div>
      {/* Info */}
      <div style={{ padding: "12px 14px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", margin: 0 }}>{v.title}</p>
        <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: cs.bg, color: cs.color, fontWeight: 700, alignSelf: "flex-start" }}>{v.category}</span>
      </div>
    </div>
  );
}

/* ── Featured Card (large) ── */
function FeaturedCard({ v, onClick }: { v: typeof videos[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", boxShadow: hovered ? "0 20px 48px rgba(0,121,58,0.2)" : "0 6px 24px rgba(0,0,0,0.12)", transition: "box-shadow 0.3s, transform 0.3s", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}
    >
      <img src={thumb(v.id)} alt={v.title} onError={(e) => thumbFallback(e, v.id)} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,30,12,0.92) 0%, rgba(0,30,12,0.3) 55%, transparent 100%)" }} />
      {/* Category chip */}
      <div style={{ position: "absolute", top: 14, left: 14 }}>
        <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 20, background: "#ffc107", color: "#020202", fontWeight: 800, letterSpacing: "0.06em" }}>{v.category.toUpperCase()}</span>
      </div>
      {/* Play */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: hovered ? "#00793A" : "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 24px rgba(0,0,0,0.35)", transition: "background 0.25s, transform 0.25s", transform: hovered ? "scale(1.15)" : "scale(1)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill={hovered ? "#fff" : "#00793A"} style={{ marginLeft: 3, transition: "fill 0.2s" }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
      </div>
      {/* Bottom info */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 18px" }}>
        <p style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(14px,2vw,18px)", lineHeight: 1.3, margin: "0 0 6px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{v.title}</p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: 0, display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{v.description}</p>
      </div>
    </div>
  );
}

/* ── Modal ── */
function VideoModal({ v, onClose }: { v: typeof videos[0]; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);
  const cs = CAT_STYLE[v.category] ?? CAT_STYLE.All;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={onClose}>
      <div style={{ width: "min(94vw,900px)", background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }} onClick={e => e.stopPropagation()}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: cs.bg, color: cs.color, fontWeight: 700 }}>{v.category}</span>
            <span style={{ fontSize: 11, color: "#888" }}>{v.year}</span>
          </div>
          <button onClick={onClose} style={{ width: 30, height: 30, borderRadius: "50%", background: "#f3f4f6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        {/* Video */}
        <div style={{ aspectRatio: "16/9", background: "#000" }}>
          <iframe src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
        </div>
        {/* Info */}
        <div style={{ padding: "14px 18px 18px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontWeight: 800, fontSize: 15, color: "#111", margin: "0 0 5px", lineHeight: 1.3 }}>{v.title}</h3>
            <p style={{ color: "#666", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
          </div>
          <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
            style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8, background: "#00793A", color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playing, setPlaying] = useState<typeof videos[0] | null>(null);

  const featured = videos.filter(v => v.featured).slice(0, 3);
  const filtered = activeCategory === "All" ? videos : videos.filter(v => v.category === activeCategory);
  const nonFeatured = activeCategory === "All" ? videos.filter(v => !v.featured) : filtered;

  return (
    <>
    <InnerPageLayout
      breadcrumbs={[{ label: "Videos" }]}
      title="Videos"
      subtitle="Watch SharonPly in action — TVCs, technology demos, brand stories & more"
      heroImage={IMG.interior1}
    >

      {/* ── Category Filter ── */}
      <section className="bg-white border-b border-gray-100 sticky top-[60px] lg:top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1" style={{ scrollbarWidth: "none" }}>
            {CATEGORIES.map(cat => {
              const active = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="shrink-0 px-4 py-2.5 min-h-[44px] text-[12.5px] font-semibold rounded-full transition-all"
                  style={{ background: active ? "#00793A" : "transparent", color: active ? "#fff" : "#555", border: active ? "none" : "1px solid #e5e7eb" }}>
                  {cat}
                </button>
              );
            })}
            <a href="https://www.youtube.com/@sharonplyindia" target="_blank" rel="noopener noreferrer"
              className="shrink-0 ml-auto flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold text-white"
              style={{ background: "#ff0000" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Subscribe
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#f9fafb] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-14">

          {/* ── Featured (All view only) ── */}
          {activeCategory === "All" && featured.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-5 rounded-full bg-[#ffc107]" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffc107]">Featured</p>
              </div>
              <FeaturedCard v={featured[0]} onClick={() => setPlaying(featured[0])} />
            </div>
          )}

          {/* ── All Videos Grid ── */}
          <div>
            {activeCategory === "All" && (
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-5 rounded-full bg-[#00793A]" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#00793A]">All Videos</p>
                <span className="text-[11px] font-semibold text-gray-400">{videos.length} videos</span>
              </div>
            )}
            {activeCategory !== "All" && (
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-5 rounded-full" style={{ background: CAT_STYLE[activeCategory]?.color ?? "#00793A" }} />
                <p className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: CAT_STYLE[activeCategory]?.color ?? "#00793A" }}>{activeCategory}</p>
                <span className="text-[11px] font-semibold text-gray-400">{filtered.length} videos</span>
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {(activeCategory === "All" ? nonFeatured : filtered).map(v => (
                <VideoCard key={v.id} v={v} onClick={() => setPlaying(v)} />
              ))}
            </div>
          </div>

          {/* ── Channel CTA ── */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#00793A 0%,#005a2b 55%,#003d1e 100%)" }}>
            <div className="px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ffc107] mb-2">Official YouTube Channel</p>
                <h3 className="text-xl font-black text-white mb-1.5">@sharonplyindia</h3>
                <p className="text-white/60 text-sm">Latest TVCs, technology demos &amp; #IAmStrongest campaigns</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a href="https://www.youtube.com/@sharonplyindia" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white"
                  style={{ background: "#ff0000" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Visit Channel
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white border-2 border-white/25 hover:bg-white/10 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </InnerPageLayout>

    {playing && <VideoModal v={playing} onClose={() => setPlaying(null)} />}
    </>
  );
}
