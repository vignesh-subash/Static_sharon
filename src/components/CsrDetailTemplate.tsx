"use client";

import Link from "next/link";
import { useHydrated } from "@/hooks/useHydrated";

export interface CsrDetailProps {
  title: string;
  tagline: string;
  heroDesc: string;
  color: string;
  emoji: string;
  bgClass?: string;
  background: string;
  whatWeDid: string[];
  impact: { label: string; value: string }[];
  gallery: { emoji: string; label: string }[];
  relatedLinks: { label: string; href: string }[];
}

export default function CsrDetailTemplate({
  title, tagline, heroDesc, color, emoji, bgClass,
  background, whatWeDid, impact, gallery, relatedLinks,
}: CsrDetailProps) {
  const hydrated = useHydrated();

  return (
    <div className="min-h-screen bg-white" style={{ opacity: hydrated ? 1 : 0, transition: "opacity 0.4s" }}>
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden" style={{ background: bgClass || "#0a1f10", minHeight: 380 }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-white/50">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/25">›</li>
              <li><Link href="/corporate-social-responsibility" className="hover:text-white transition-colors">CSR</Link></li>
              <li className="text-white/25">›</li>
              <li className="text-white/80 font-medium">{title}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span style={{ fontSize: "3rem", display: "block", marginBottom: 12 }}>{emoji}</span>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 8, letterSpacing: "-0.02em" }}>{title}</h1>
            <p style={{ fontSize: 15, fontWeight: 600, color, marginBottom: 12 }}>{tagline}</p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 600 }}>{heroDesc}</p>
          </div>
        </div>
      </section>

      {/* ── 2. BACKGROUND ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-3">Background</span>
            <h2 className="text-xl font-bold text-[#111] mb-4" style={{ fontFamily: "var(--font-display)" }}>Why This Initiative?</h2>
            <p className="text-[#4b5563] text-sm leading-relaxed">{background}</p>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT WE DID ── */}
      <section className="py-14 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-3">Activities</span>
            <h2 className="text-xl font-bold text-[#111] mb-4" style={{ fontFamily: "var(--font-display)" }}>What We Did</h2>
            <ul className="space-y-3">
              {whatWeDid.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4b5563] leading-relaxed">
                  <span style={{ color, fontWeight: 700, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. IMPACT ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-3">Impact</span>
            <h2 className="text-xl font-bold text-[#111]" style={{ fontFamily: "var(--font-display)" }}>Making a Difference</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {impact.map((item, i) => (
              <div key={i} className="text-center p-5 rounded-xl" style={{ background: `${color}08`, border: `1px solid ${color}15` }}>
                <p style={{ fontSize: "1.5rem", fontWeight: 900, color, marginBottom: 4 }}>{item.value}</p>
                <p className="text-[11px] text-[#5a5a5a] font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GALLERY ── */}
      <section className="py-14 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-3">Gallery</span>
            <h2 className="text-xl font-bold text-[#111]" style={{ fontFamily: "var(--font-display)" }}>Moments from the Field</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {gallery.map((item, i) => (
              <div key={i} className="p-4 rounded-xl text-center bg-white border border-[#e8ece9] hover:shadow-sm transition-all">
                <span style={{ fontSize: "2rem", display: "block", marginBottom: 6 }}>{item.emoji}</span>
                <p className="text-[11px] font-semibold text-[#4b5563]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. RELATED ── */}
      {relatedLinks.length > 0 && (
        <section className="py-12 bg-white border-t border-[#e8ece9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-2">Explore More</span>
              <h2 className="text-lg font-bold text-[#111]" style={{ fontFamily: "var(--font-display)" }}>Related Initiatives</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLinks.map((link, i) => (
                <Link key={i} href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-[#e0e4e0] text-[#00793A] hover:bg-[#f0faf4] transition-all">
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. CTA ── */}
      <section className="py-10" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-lg font-bold text-white mb-2">Together, We Can Make a Difference</h2>
          <p className="text-white/70 text-sm mb-6">Every initiative reflects our belief that true strength is measured by the lives we touch.</p>
          <Link href="/corporate-social-responsibility"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all">
            View All CSR Initiatives
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
