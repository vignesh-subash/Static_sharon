"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";
const HERO = `${SB}/Plywood-resized-1770810953635.jpg?width=1600&height=700&resize=cover`;

// ── Per-year data: cover image + all slide pages ──────────────────────────
const CALENDAR_DATA: Record<number, { cover: string; slides: { label: string; src: string }[]; pdfFile?: string }> = {
  2026: {
    cover: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 1.jpg",
    slides: [
      { label: "Cover",     src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 1.jpg" },
      { label: "Page 2",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 2.jpg" },
      { label: "Page 3",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 3.jpg" },
      { label: "Page 4",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 4.jpg" },
      { label: "Page 5",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 5.jpg" },
      { label: "Page 6",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 6.jpg" },
      { label: "Page 7",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 7.jpg" },
      { label: "Page 8",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 8.jpg" },
      { label: "Page 9",    src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 9.jpg" },
      { label: "Page 10",   src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 10.jpg" },
      { label: "Page 11",   src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 11.jpg" },
      { label: "Page 12",   src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 12.jpg" },
      { label: "Page 13",   src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 13.jpg" },
      { label: "Page 14",   src: "/images/Calendar/2026/Calendar sharonPly TTC 2026 - page - 14.jpg" },
    ],
  },
  2025: {
    cover: "/images/Calendar/2025/Front Cover Page 1.png",
    slides: [
      { label: "Cover 1",   src: "/images/Calendar/2025/Front Cover Page 1.png" },
      { label: "Cover 2",   src: "/images/Calendar/2025/Front Cover Page 2.png" },
      { label: "Page 1",    src: "/images/Calendar/2025/SharonPly TTC - 1.png" },
      { label: "Page 2",    src: "/images/Calendar/2025/SharonPly TTC - 2.png" },
      { label: "Page 3",    src: "/images/Calendar/2025/SharonPly TTC - 3.png" },
      { label: "Page 4",    src: "/images/Calendar/2025/SharonPly TTC - 4.png" },
      { label: "Page 5",    src: "/images/Calendar/2025/SharonPly TTC - 5.png" },
      { label: "Page 6",    src: "/images/Calendar/2025/SharonPly TTC - 6.png" },
      { label: "Page 7",    src: "/images/Calendar/2025/SharonPly TTC - 7.png" },
      { label: "Page 8",    src: "/images/Calendar/2025/SharonPly TTC - 8.png" },
      { label: "Page 9",    src: "/images/Calendar/2025/SharonPly TTC - 9.png" },
      { label: "Page 10",   src: "/images/Calendar/2025/SharonPly TTC - 10.png" },
      { label: "Page 11",   src: "/images/Calendar/2025/SharonPly TTC - 11.png" },
      { label: "Page 12",   src: "/images/Calendar/2025/SharonPly TTC - 12.png" },
    ],
  },
  2024: {
    cover: "/images/Calendar/2024/SharonPly TTC - 1.png",
    slides: Array.from({ length: 14 }, (_, i) => ({
      label: i === 0 ? "Cover" : `Page ${i}`,
      src: `/images/Calendar/2024/SharonPly TTC - ${i + 1}.png`,
    })),
  },
  2023: {
    cover: "/images/Calendar/2023/SharonPly TT calendar 2023 FINAL_pg-1.png",
    slides: Array.from({ length: 14 }, (_, i) => ({
      label: i === 0 ? "Cover" : `Page ${i}`,
      src: `/images/Calendar/2023/SharonPly TT calendar 2023 FINAL_pg-${i + 1}.png`,
    })),
  },
  2022: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2022/SharonPly_2022 calendar.pdf",
  },
  2021: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2021/SharonPly Calendar Series - 2021.pdf",
  },
  2020: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2020/Sharon Calendar 2020 pdf (web).pdf",
  },
  2019: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2019/#iamstrongest_2019_Sharon_Calender_14 pages.pdf",
  },
  2018: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2018/Calendar-2018_Web.pdf",
  },
  2017: {
    cover: "/images/Calendar/2017/Sharon_Calendar_2017_Front Page_1.jpg",
    slides: [
      { label: "Cover 1",   src: "/images/Calendar/2017/Sharon_Calendar_2017_Front Page_1.jpg" },
      { label: "Cover 2",   src: "/images/Calendar/2017/Sharon_Calendar_2017_Front Page_2.jpg" },
      { label: "January",   src: "/images/Calendar/2017/Sharon_Calendar_1.January.jpg" },
      { label: "February",  src: "/images/Calendar/2017/Sharon_Calendar_2.February.jpg" },
      { label: "March",     src: "/images/Calendar/2017/Sharon_Calendar_3.March.jpg" },
      { label: "April",     src: "/images/Calendar/2017/Sharon_Calendar_4.April.jpg" },
      { label: "May",       src: "/images/Calendar/2017/Sharon_Calendar_5.May.jpg" },
      { label: "June",      src: "/images/Calendar/2017/Sharon_Calendar_6.June.jpg" },
      { label: "July",      src: "/images/Calendar/2017/Sharon_Calendar_7.July.jpg" },
      { label: "August",    src: "/images/Calendar/2017/Sharon_Calendar_8.August.jpg" },
      { label: "September", src: "/images/Calendar/2017/Sharon_Calendar_9.September.jpg" },
      { label: "October",   src: "/images/Calendar/2017/Sharon_Calendar_10.October.jpg" },
      { label: "November",  src: "/images/Calendar/2017/Sharon_Calendar_11.November.jpg" },
      { label: "December",  src: "/images/Calendar/2017/Sharon_Calendar_12.December.jpg" },
    ],
  },
  2016: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2016/Calendar 2016 Final.pdf",
  },
  2015: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2015/Calendar 2015 Final.pdf",
  },
  2014: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2014/Calendar 2014 Final.pdf",
  },
  2013: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2013/Calendar-2013.pdf",
  },
  2012: {
    cover: "/images/Calendar/2012/1. January.jpg",
    slides: [
      { label: "January",   src: "/images/Calendar/2012/1. January.jpg" },
      { label: "February",  src: "/images/Calendar/2012/2. Febuary.jpg" },
      { label: "March",     src: "/images/Calendar/2012/3. March.jpg" },
      { label: "April",     src: "/images/Calendar/2012/4. April.jpg" },
      { label: "May",       src: "/images/Calendar/2012/5. May.jpg" },
      { label: "June",      src: "/images/Calendar/2012/6. June.jpg" },
      { label: "July",      src: "/images/Calendar/2012/7. July.jpg" },
      { label: "August",    src: "/images/Calendar/2012/8. August.jpg" },
      { label: "September", src: "/images/Calendar/2012/9. September.jpg" },
      { label: "October",   src: "/images/Calendar/2012/10. October.jpg" },
      { label: "November",  src: "/images/Calendar/2012/11. November.jpg" },
      { label: "December",  src: "/images/Calendar/2012/12. December.jpg" },
    ],
  },
  2011: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2011/Calendar 2011 Final.pdf",
  },
  2010: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2010/Calendar 2010.pdf",
  },
  2009: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2009/Calendar 2009.pdf",
  },
  2008: {
    cover: "/images/calendar-themed-cover.jpg",
    slides: [{ label: "PDF", src: "/images/calendar-themed-cover.jpg" }],
    pdfFile: "/images/Calendar/2008/Calendar 2008.pdf",
  },
};

const ACCENT_COLORS = [
  "#00793A", "#1565c0", "#6a1b9a", "#e65100", "#00695c",
  "#880e4f", "#1b5e20", "#bf360c", "#4a148c", "#01579b",
  "#33691e", "#b71c1c", "#004d40", "#1a237e", "#3e2723",
  "#006064", "#37474f", "#558b2f", "#c62828", "#283593", "#2e7d32",
];

const YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008];

const calendars = YEARS.map((year, i) => ({
  year,
  label: year >= 2023 ? `TTC ${year}` : `Edition ${year}`,
  color: ACCENT_COLORS[i % ACCENT_COLORS.length],
  data: CALENDAR_DATA[year],
  isNew: year === 2026,
}));

// ── PDF Viewer Modal ──────────────────────────────────────────────────────
function PdfViewerModal({ year, color, data, onClose }: {
  year: number;
  color: string;
  data: typeof CALENDAR_DATA[number];
  onClose: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const isPdfOnly = data.slides.length === 1 && data.pdfFile;

  const goTo = (next: number) => {
    if (next === slide) return;
    setFading(true);
    setTimeout(() => { setSlide(next); setFading(false); }, 160);
  };

  // Keyboard nav
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && slide < data.slides.length - 1) goTo(slide + 1);
      if (e.key === "ArrowLeft"  && slide > 0) goTo(slide - 1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [slide, data.slides.length]);

  const thumbRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = thumbRef.current?.children[slide] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [slide]);

  const downloadHref = data.pdfFile ?? data.slides[slide].src;

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(2,2,2,0.9)", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.2s ease" }}
      onClick={onClose}
    >
      <div
        style={{ position: "relative", width: "min(94vw, 580px)", background: "#111", borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.6)", display: "flex", flexDirection: "column", animation: "popUp 0.28s cubic-bezier(0.22,1,0.36,1)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: color, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>SharonPly {year} Calendar</span>
            {!isPdfOnly && (
              <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "rgba(255,255,255,0.2)", color: "#fff", fontWeight: 600 }}>
                {slide + 1} / {data.slides.length}
              </span>
            )}
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, width: 28, height: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Slide / PDF view */}
        {isPdfOnly ? (
          <div style={{ padding: 32, textAlign: "center", background: "#1a1a1a", flex: 1 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: `${color}20`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 6 }}>SharonPly {year} — PDF Calendar</p>
            <p style={{ color: "#888", fontSize: 12, marginBottom: 24 }}>This edition is available as a downloadable PDF.</p>
            <a href={data.pdfFile} target="_blank" rel="noopener noreferrer" download
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 10, background: color, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF
            </a>
          </div>
        ) : (
          <>
            {/* Main slide */}
            <div style={{ position: "relative", background: "#000", overflow: "hidden", maxHeight: "65vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                key={slide}
                src={data.slides[slide].src}
                alt={data.slides[slide].label}
                style={{ maxWidth: "100%", maxHeight: "65vh", objectFit: "contain", display: "block", opacity: fading ? 0 : 1, transition: "opacity 0.16s ease" }}
              />
              {/* Overlay label */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 16px 12px", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)", pointerEvents: "none" }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, margin: 0 }}>{data.slides[slide].label}</p>
              </div>
              {/* Nav arrows */}
              {slide > 0 && (
                <button onClick={() => goTo(slide - 1)} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
              )}
              {slide < data.slides.length - 1 && (
                <button onClick={() => goTo(slide + 1)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              )}
            </div>

            {/* Thumbnail strip */}
            <div ref={thumbRef} style={{ display: "flex", gap: 4, padding: "8px 12px", background: "#1a1a1a", overflowX: "auto", scrollbarWidth: "none", flexShrink: 0 }}>
              {data.slides.map((s, i) => (
                <button key={i} onClick={() => goTo(i)} style={{ flexShrink: 0, width: 40, height: 54, borderRadius: 5, overflow: "hidden", border: slide === i ? `2px solid ${color}` : "2px solid transparent", cursor: "pointer", padding: 0, opacity: slide === i ? 1 : 0.5, transition: "opacity 0.2s, border 0.2s", background: "#333" }}>
                  <img src={s.src} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Footer */}
        <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#161616", borderTop: "1px solid #2a2a2a", flexShrink: 0 }}>
          <span style={{ fontSize: 11, color: "#555" }}>{isPdfOnly ? "PDF available for download" : `${data.slides.length} pages · Use ← → keys`}</span>
          <a href={downloadHref} target="_blank" rel="noopener noreferrer" download
            style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, background: color, color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popUp  { from { opacity: 0; transform: scale(0.93) translateY(14px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      `}</style>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────
export default function CalendarPage() {
  const [viewerYear, setViewerYear] = useState<number | null>(null);
  const viewerCal = calendars.find(c => c.year === viewerYear);

  return (
    <InnerPageLayout
      breadcrumbs={[{ label: "About Us", href: "/our-history" }, { label: "Calendar" }]}
      title="SharonPly Calendar"
      subtitle="View and download the latest SharonPly calendar."
      heroImage={HERO}
    >
      {/* Stats strip */}
      <section className="bg-[#00793A] py-7">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: "19+", l: "Years of Calendars" },
              { v: "2008", l: "Since" },
              { v: "2026", l: "Latest Edition" },
              { v: "Free", l: "PDF Download" },
            ].map(s => (
              <div key={s.l}>
                <p className="text-3xl font-black text-white leading-none">{s.v}</p>
                <p className="text-white/70 text-xs mt-1 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar grid */}
      <section className="py-14 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffc107] mb-2">Browse</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]" id="view-calendar">View Calendar</h2>
            <p className="text-gray-400 text-sm mt-1">Browse month-wise or download the full PDF</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {calendars.map((cal) => (
              <div
                key={cal.year}
                className="group bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "box-shadow 0.25s, transform 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.13)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                {/* Cover */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={cal.data.cover}
                    alt={`SharonPly ${cal.year} Calendar`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${cal.color}e0 0%, ${cal.color}20 55%, transparent 100%)` }} />

                  {cal.isNew && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider text-[#020202]" style={{ background: "#ffc107" }}>New</span>
                    </div>
                  )}

                  {/* Page count badge */}
                  {cal.data.slides.length > 1 && (
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold text-white" style={{ background: "rgba(0,0,0,0.5)" }}>
                        {cal.data.slides.length} pages
                      </span>
                    </div>
                  )}

                  {/* Year */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-black text-2xl leading-none">{cal.year}</p>
                    <p className="text-white/70 text-[9px] mt-0.5 uppercase tracking-wider">SharonPly · {cal.label}</p>
                  </div>

                  {/* Quick View hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => setViewerYear(cal.year)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-[11px] hover:scale-105 active:scale-95 transition-transform"
                      style={{ background: "rgba(255,255,255,0.96)", color: cal.color, backdropFilter: "blur(8px)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)", border: `1.5px solid ${cal.color}40` }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Action row */}
                <div className="p-3 mt-auto flex gap-2">
                  <button
                    onClick={() => setViewerYear(cal.year)}
                    className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-xl text-[11px] font-bold transition-all hover:opacity-80 border"
                    style={{ borderColor: cal.color, color: cal.color, background: `${cal.color}08` }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                    Preview
                  </button>
                  <a
                    href={cal.data.pdfFile ?? cal.data.slides[0].src}
                    target="_blank" rel="noopener noreferrer" download
                    className="flex items-center justify-center gap-1.5 flex-1 py-2 rounded-xl text-[11px] font-bold transition-all hover:opacity-90 active:scale-95"
                    style={{ background: cal.color, color: "#fff" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-14 bg-white" id="download">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-3">Download</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#020202] mb-4">Download SharonPly Calendar</h2>
          <p className="text-[#5a5a5a] text-sm max-w-md mx-auto mb-8">
            Download the latest SharonPly calendar for easy reference and offline use.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#view-calendar"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#00793A] hover:bg-[#005c2c] transition-all shadow-lg shadow-[#00793A]/20"
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById("view-calendar")?.scrollIntoView({ behavior: "smooth", block: "start" });
               }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Calendar
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Explore More</p>
            <h2 className="text-lg font-bold text-white">Discover SharonPly</h2>
            <p className="text-white/70 text-sm">Explore our products, latest stories, and get in touch.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/plywood" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all whitespace-nowrap">Explore Products</Link>
            <Link href="/blog" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap">Visit Blog</Link>
            <Link href="/contact" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap">Contact SharonPly</Link>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewerYear && viewerCal && (
        <PdfViewerModal
          year={viewerYear}
          color={viewerCal.color}
          data={viewerCal.data}
          onClose={() => setViewerYear(null)}
        />
      )}
    </InnerPageLayout>
  );
}
