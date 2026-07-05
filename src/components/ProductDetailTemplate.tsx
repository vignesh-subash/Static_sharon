"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PlywoodSheetViewer, { SheetHotspot } from "./PlywoodSheetViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─── Types ───────────────────────────────────────────────── */
export interface ProductSpec    { label: string; value: string; }
export interface ProductFeature { title: string; description: string; icon: keyof typeof ICONS; }
export interface ProductFAQ     { q: string; a: string; }
export interface RelatedProduct { name: string; href: string; image: string; tag?: string; }
export interface FiresafeTest   { test: string; required: string; result: string; }
export interface ProductUSP     { icon: string; label: string; desc: string; }
export interface TechTableMultiRow { label: string; values: string[]; isHeader?: boolean; }
export interface TechTableRow   { label: string; value?: string; isGroup?: boolean; isSubHeader?: boolean; indent?: boolean; }

export interface ProductDetailProps {
  name: string;
  tagline: string;
  description: string;
  grade: string;
  gradeColor?: string;
  images: string[];
  badges?: string[];
  usps: ProductUSP[];
  technology?: string[];
  features: ProductFeature[];
  specifications: ProductSpec[];
  technicalTable?: TechTableRow[];
  technicalTableMulti?: TechTableMultiRow[];
  firesafeTests?: FiresafeTest[];
  blockboardNote?: string;
  applications: { name: string }[];
  sizes?: string[];
  thickness?: string[];
  faqs?: ProductFAQ[];
  relatedProducts?: RelatedProduct[];
  firesafe?: boolean;
  downloadLinks?: { label: string; href: string }[];
  sheetHotspots?: SheetHotspot[];
}

/* ─── Icons ───────────────────────────────────────────────── */
const ICONS = {
  droplet:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  shield:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  flame:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  leaf:      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  layers:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  check:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  award:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  zap:       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  bug:       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2l1.5 1.5M14.5 3.5L16 2M9 9h6M9 12h6M12 3a5 5 0 00-5 5v3a5 5 0 0010 0V8a5 5 0 00-5-5z"/><path d="M4.5 8.5l-2-2M19.5 6.5l2-2M4 12H2M22 12h-2M4.5 16l-1.5 2M19.5 16l1.5 2"/></svg>,
  surface:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="22" height="22" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>,
  tool:      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
};

/* USP icon map */
const USP_ICONS: Record<string, JSX.Element> = {
  virasafe:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  termite:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 2l1.5 1.5M14.5 3.5L16 2M9 9h6M9 12h6M12 3a5 5 0 00-5 5v3a5 5 0 0010 0V8a5 5 0 00-5-5z"/></svg>,
  calibrated: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="22" height="22" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>,
  firesafe:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
  emission:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z"/></svg>,
  fortified:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  authentic:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  certified:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  carb:       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  centec:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  warranty:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  antifungal: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
};

const USP_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  virasafe:   { bg: "#e8f5ee", text: "#00793A", border: "#00793A" },
  termite:    { bg: "#fef3c7", text: "#92400e", border: "#d97706" },
  calibrated: { bg: "#eff6ff", text: "#1d4ed8", border: "#3b82f6" },
  firesafe:   { bg: "#fff1f2", text: "#be123c", border: "#f43f5e" },
  emission:   { bg: "#f0fdf4", text: "#166534", border: "#22c55e" },
  fortified:  { bg: "#faf5ff", text: "#7e22ce", border: "#a855f7" },
  authentic:  { bg: "#e0f2fe", text: "#0369a1", border: "#0ea5e9" },
  certified:  { bg: "#fef9c3", text: "#713f12", border: "#eab308" },
  carb:       { bg: "#ecfdf5", text: "#065f46", border: "#10b981" },
  centec:     { bg: "#f0fdf4", text: "#166534", border: "#16a34a" },
  warranty:   { bg: "#fff7ed", text: "#9a3412", border: "#f97316" },
  antifungal: { bg: "#fdf4ff", text: "#6b21a8", border: "#c026d3" },
  droplet:    { bg: "#e0f2fe", text: "#0369a1", border: "#0ea5e9" },
  layers:     { bg: "#f3e8ff", text: "#6b21a8", border: "#a855f7" },
};


/* ─── Component ───────────────────────────────────────────── */
export default function ProductDetailTemplate({
  name, tagline, description, grade, gradeColor = "#00793A",
  images, badges = [], usps, technology = [], features,
  specifications, technicalTable, technicalTableMulti, blockboardNote, firesafeTests = [], applications, sizes = [], thickness = [],
  faqs = [], relatedProducts = [], firesafe = false,
  downloadLinks = [], sheetHotspots = [],
}: ProductDetailProps) {
  const [activeImg, setActiveImg]       = useState(0);
  const [showSticky, setShowSticky]     = useState(false);
  const [overFooter, setOverFooter]     = useState(false);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const leftColRef  = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const renderGroupedTechTable = (rows: TechTableRow[], prefix: string) => {
    const els: React.ReactNode[] = [];
    let i = 0;
    while (i < rows.length) {
      const row = rows[i];
      if (row.isGroup) {
        els.push(
          <tr key={`${prefix}-g-${i}`} className="border-b border-gray-100">
            <td colSpan={2} className="px-4 py-2 text-[11.5px] font-bold text-gray-700">{row.label}</td>
          </tr>
        );
        i++;
      } else if (row.isSubHeader) {
        const leftItems: { label: string; isMain: boolean }[] = [{ label: row.label, isMain: true }];
        const rightItems: string[] = [];
        i++;
        while (i < rows.length && rows[i].indent && !rows[i].isSubHeader && !rows[i].isGroup) {
          leftItems.push({ label: rows[i].label, isMain: false });
          rightItems.push(rows[i].value ?? "—");
          i++;
        }
        els.push(
          <tr key={`${prefix}-m-${i}`} className="border-b border-gray-50">
            <td className="px-4 py-2 align-top" style={{ width: "60%" }}>
              {leftItems.map((item, j) => (
                <div key={j} className={item.isMain ? "text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5" : "text-[12px] text-gray-600 pl-5 py-0.5"}>
                  {item.label}
                </div>
              ))}
            </td>
            <td className="px-4 py-2 align-top text-right">
              <div className="h-[14px]"></div>
              {rightItems.map((val, j) => (
                <div key={j} className="text-[12px] font-semibold text-gray-800 py-0.5">{val}</div>
              ))}
            </td>
          </tr>
        );
      } else {
        const r = rows[i];
        els.push(
          <tr key={`${prefix}-v-${i}`} className="border-b border-gray-50">
            <td className={`px-4 py-2 text-[12px] text-gray-600 ${r.indent ? "pl-9" : ""}`}>{r.label}</td>
            <td className="px-4 py-2 text-[12px] font-semibold text-gray-800 text-right">{r.value ?? "—"}</td>
          </tr>
        );
        i++;
      }
    }
    return els;
  };

  useGSAP(() => {
    const left  = leftColRef.current;
    const right = rightColRef.current;
    if (!left || !right) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: left,
        start: "top 96px",
        endTrigger: left,
        end: "bottom bottom",
        pin: right,
        pinSpacing: false,
      });
    });
  }, {});

  /* auto-play carousel */
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setActiveImg((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setShowSticky(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(([e]) => setOverFooter(e.isIntersecting), { threshold: 0 });
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen" style={{ paddingBottom: showSticky ? 64 : 0, transition: "padding-bottom 0.3s" }}>
      <style>{`
        @media (min-width: 1024px) {
          .product-carousel { aspect-ratio: 4/3 !important; }
        }
      `}</style>

      {/* BREADCRUMB */}
      <div className="border-b border-gray-100 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-[12px] text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#00793A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/plywood" className="hover:text-[#00793A] transition-colors">Plywood</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{name}</span>
        </div>
      </div>

      {/* ── HERO: CAROUSEL + OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 lg:gap-12">

          {/* Image Carousel */}
          <div>
            <div
              className="product-carousel relative rounded-2xl overflow-hidden bg-gray-50 group"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={images[activeImg]}
                alt={name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                loading="eager"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white shadow" style={{ background: gradeColor }}>{grade}</div>
              {images.length > 1 && (<>
                <button onClick={(e) => { e.stopPropagation(); setActiveImg((p) => (p - 1 + images.length) % images.length); }}
                  className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm items-center justify-center shadow hover:bg-white transition-all opacity-0 group-hover:opacity-100">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button onClick={(e) => { e.stopPropagation(); setActiveImg((p) => (p + 1) % images.length); }}
                  className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur-sm items-center justify-center shadow hover:bg-white transition-all opacity-0 group-hover:opacity-100">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </>)}
              </div>
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-[80px] h-[60px] rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? "border-[#00793A] shadow-md" : "border-transparent opacity-50 hover:opacity-100"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product overview */}
          <div className="flex flex-col" ref={ctaRef}>
                        <h1 className="text-2xl lg:text-[28px] font-extrabold text-[#020202] leading-tight mb-1">{name}</h1>
            <p className="text-[#00793A] font-semibold text-[13px] mb-3">{tagline}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

            {technology.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {technology.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-semibold border border-[#00793A]/20 bg-[#00793A]/5 text-[#00793A]">{t}</span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex gap-3 mb-4">
              <Link href="/contact"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-green-200 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,#00793A,#00994D)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6z"/></svg>
                Get Quote
              </Link>
              <Link href="/dealers"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border-2 border-[#00793A] text-[#00793A] hover:bg-[#00793A]/5 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Find Dealer
              </Link>
            </div>
            <div className="flex items-center gap-4 text-[12px] text-gray-400">
              <Link href="/catalogue" className="flex items-center gap-1.5 hover:text-[#00793A] transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Brochure
              </Link>
                          </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS PRODUCT ── */}
      <section className="py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">

            {/* Left — dark brand panel */}
            <div className="lg:col-span-2 relative flex flex-col justify-center px-6 py-8 lg:px-8 lg:py-20 h-full" style={{ background: "linear-gradient(145deg, #001a0d 0%, #00391d 55%, #004d26 100%)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #ffc107 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #00793A 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ffc107] mb-4">Engineering Advantage</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)" }}>
                Why Choose<br />{name}?
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs">
                Every panel is engineered with multiple layers of protection — built to outlast, outperform, and outlive the competition.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 opacity-20" style={{ background: "#ffc107" }} />
                <span className="text-[10px] text-white/30 font-semibold uppercase tracking-widest">{usps.length} Advantages</span>
                <div className="h-px flex-1 opacity-20" style={{ background: "#ffc107" }} />
              </div>
            </div>

            {/* Right — USP 2x2 grid */}
            <div className="lg:col-span-3 bg-white p-4 lg:p-8">
              <div className="grid grid-cols-2 gap-4">
                {(usps as ProductUSP[]).map((u, i) => {
                  const c = USP_COLORS[u.icon] ?? { bg: "#f3f4f6", text: "#374151", border: "#9ca3af" };
                  return (
                    <div key={u.label}
                      className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 transition-all duration-200 hover:shadow-sm hover:border-gray-200 cursor-default bg-white">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: c.bg, color: c.text }}>
                        {USP_ICONS[u.icon] ?? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-bold text-[#020202] leading-snug">{u.label}</p>
                        <p className="text-[12px] text-gray-400 leading-relaxed mt-0.5">{u.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FIRESAFE ── */}
      {firesafe && (
        <section className="py-12 bg-[#f9fafb]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg,#1a0800 0%,#3d1100 40%,#7a2900 100%)" }}>
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-stretch">
                  {/* Left — content + logo + test results */}
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff6b35"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
                      <span className="text-[11px] font-bold tracking-widest uppercase text-orange-300">FIRESAVE Technology</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Class A Fire Rating</h2>
                    <p className="text-white/65 text-sm leading-relaxed mb-6">
                      Sharon Ply&apos;s exclusive FIRESAVE technology provides superior fire resistance conforming to ASTM E84 Standards. Tested per IS 5509:2000 — ideal for commercial spaces, hotels, hospitals, schools, and high-rise buildings.
                    </p>
                    <p className="text-white/40 text-[11px] mb-6">
                      Recommended for: Hotels, Hospitals, Schools, Commercial Offices, High-Rise Apartments
                    </p>

                    {/* Test results table */}
                    <p className="text-orange-300 text-[11px] font-bold uppercase tracking-widest mb-3">Test Results — IS 5509:2000</p>
                    <div className="rounded-2xl overflow-hidden border border-white/10 w-full">
                      <div className="grid grid-cols-3 bg-white/10 px-4 py-2.5 text-[10.5px] font-bold uppercase tracking-wide text-orange-300">
                        <span>Test</span>
                        <span>Required Standard</span>
                        <span className="text-right">Result</span>
                      </div>
                      {firesafeTests.map((row, i) => (
                        <div key={i} className={`grid grid-cols-3 px-4 py-3 text-[12px] items-center ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}>
                          <span className="text-white/80 font-medium pr-2">{row.test}</span>
                          <span className="text-white/50 pr-2">{row.required}</span>
                          <span className="text-right">
                            <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                              {row.result}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — YouTube video fills full column height */}
                  <div className="flex flex-col">
                    <p className="text-orange-300 text-[11px] font-bold uppercase tracking-widest mb-4">Watch It In Action</p>
                    <div className="rounded-2xl overflow-hidden border border-white/10 flex-1 min-h-[300px]">
                      <iframe
                        src="https://www.youtube.com/embed/MMbD9bynFe4?rel=0&modestbranding=1"
                        title="FIRESAVE Technology — SharonPly"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SPECIFICATIONS + APPLICATIONS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-start">

            {/* Specs — scrollable left column */}
            <div ref={leftColRef}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Complete Details</p>
              <h2 className="text-2xl font-bold text-[#020202] mb-6">Technical Specifications</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* ── LEFT TABLE: Individual Specs ── */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider" style={{ width: "60%" }}>Specification</th>
                        <th className="px-4 py-2.5 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specifications.map((spec, i) => (
                        <tr key={`ls-${i}`} className="border-b border-gray-50">
                          <td className="px-4 py-2 text-[12px] text-gray-600">{spec.label}</td>
                          <td className="px-4 py-2 text-[12px] font-semibold text-gray-800 text-right">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ── RIGHT TABLE: Static Bending Strength Hierarchy ── */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider" style={{ width: "60%" }}>Parameter</th>
                        <th className="px-4 py-2.5 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderGroupedTechTable(technicalTable || [], 'r')}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Available Thickness */}
              {thickness && thickness.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-[#020202] mb-3" style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}>
                    Available Thickness
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {thickness.map((t) => (
                      <span key={t}
                        className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-semibold border"
                        style={{
                          background: "#f0faf4",
                          borderColor: "rgba(0,121,58,0.2)",
                          color: "#00793A",
                          fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Sizes */}
              {sizes && sizes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-[#020202] mb-3" style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}>
                    Available Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <span key={s}
                        className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-semibold border"
                        style={{
                          background: "#f0faf4",
                          borderColor: "rgba(0,121,58,0.2)",
                          color: "#00793A",
                          fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}


              
              {/* BlockBoard availability note */}
              {blockboardNote && (
                <div className="rounded-xl border border-[#e5ac00]/30 bg-[#fff8e1] px-5 py-3 mt-4 flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5ac00" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                  </svg>
                  <span className="text-[13px] font-semibold text-[#713f12]">{blockboardNote}</span>
                </div>
              )}
            </div>
            </div>
          </div>
        </section>


      {/* ── CTA BANNER ── */}
      <section className="py-6" style={{ background: "linear-gradient(135deg,#00793A 0%,#005a2b 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">Interested in {name}?</h2>
            <p className="text-white/70 text-sm">Connect with our experts for samples, pricing, and project consultation.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all whitespace-nowrap">Get a Free Quote</Link>
            <Link href="/dealers" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap">Find a Dealer</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-bold text-[#020202] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.slice(0, 4).map((rp) => (
                <Link key={rp.name} href={rp.href} className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-[#00793A]/20 hover:shadow-md transition-all duration-200">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    {rp.tag && <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-[#ffc107] text-[#020202]">{rp.tag}</span>}
                  </div>
                  <div className="p-3.5">
                    <p className="text-[13px] font-bold text-[#020202] group-hover:text-[#00793A] transition-colors leading-tight mb-1">{rp.name}</p>
                    <span className="text-[11px] text-[#00793A] font-semibold flex items-center gap-1">View Details <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      
      {/* ── STICKY CTA ── */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${showSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}
        style={{
          background: overFooter ? "rgba(0,121,58,0.97)" : "rgba(255,255,255,0.97)",
          borderTop: overFooter ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e5e7eb",
          backdropFilter: "blur(12px)",
          transition: "background 0.3s, border-color 0.3s",
        }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[13px] font-bold truncate" style={{ color: overFooter ? "#fff" : "#020202" }}>{name}</p>
            <p className="text-[11px]" style={{ color: overFooter ? "rgba(255,255,255,0.6)" : "#9ca3af" }}>{grade}</p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <Link href="/contact" className="px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all"
              style={{ background: overFooter ? "#ffc107" : "linear-gradient(135deg,#00793A,#00994D)", color: overFooter ? "#020202" : "#fff" }}>
              Get Quote
            </Link>
            <Link href="/dealers" className="px-5 py-2.5 rounded-lg text-[13px] font-semibold border-2 transition-all hidden sm:flex"
              style={{ borderColor: overFooter ? "rgba(255,255,255,0.4)" : "#00793A", color: overFooter ? "#fff" : "#00793A", background: "transparent" }}>
              Find Dealer
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
