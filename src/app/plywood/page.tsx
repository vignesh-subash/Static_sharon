"use client";

import Link from "next/link";
import BlogSection from "@/components/BlogSection";
import TechCarousel from "@/components/TechCarousel";

const plywoodProducts = [
  // ── Waterproof (BWP) ──
  {
    name: "Sharon Platinum Ply",
    href: "/plywood/sharon-platinum-ply",
    tag: "Premium BWP",
    description: "BIS-certified BWP and specialty plywood from SharonPly. Engineered for strength, durability, and performance across residential, commercial, and industrial applications with advanced protective technologies.",
    image: "/images/sharon-platinum-ply-card.jpg",
    features: ["BWP Grade (IS:710)", "VIRASAFE Technology", "FIRESAVE Graded", "E-Zero Emission"],
  },
  {
    name: "Sharon Gold",
    href: "/plywood/sharon-gold-marine-plywood",
    tag: "BWP Grade",
    description:
      "The gold standard in boiling water proof plywood. Sharon Gold offers excellent bonding strength, termite resistance, and long-lasting performance for all interiors.",
    image: "/images/sharon-gold-slide2.jpg",
    features: ["BWP Grade (IS:710)", "Termite Resistant", "Superior Bonding", "Calibrated Thickness"],
  },
  {
    name: "Sharon Prima Armor",
    href: "/plywood/sharon-prima-710",
    tag: "Commercial",
    description:
      "Versatile commercial-grade plywood ideal for furniture, partitions and everyday applications. Reliable performance at an accessible price point.",
    image: "/images/sharon-prima-armor-card.jpg",
    features: ["IS:710 Compliant", "High Durability", "Smooth Finish", "Versatile Usage"],
  },
  {
    name: "Sovereign 710",
    href: "/plywood/sovereign-710",
    tag: "Waterproof",
    description:
      "Waterproof plywood engineered for demanding environments. Sovereign 710 withstands moisture, heat, and heavy use with calibrated precision.",
    image: "/images/sovereign-710-slide2.jpg",
    features: ["Waterproof (IS:710)", "Calibrated", "High Strength", "Warp Resistant"],
  },
  {
    name: "Kumki OEM BWP Ply",
    href: "/plywood/kumki-oem-bwp-ply",
    tag: "OEM BWP",
    description:
      "Engineered specifically for OEM manufacturers seeking precision and consistency. Kumki offers advanced calibration technology, IS:303 BWP compliance, and Kyoto Pro-Tech treatment — the perfect substrate for modular furniture production.",
    image: "/images/kumki-oem-bwp-card.jpg",
    features: ["BWP IS:303", "Calibrated Thickness", "Termite Proof", "OEM Precision"],
  },
  // ── Water Resistant (MR) ──
  {
    name: "Sovereign MR",
    href: "/plywood/sovereign-mr",
    tag: "MR Grade",
    description:
      "Moisture-resistant plywood for interior applications. Ideal for furniture, cabinets, and interior paneling where moderate moisture protection is needed.",
    image: "/images/sovereign-mr-card.jpg",
    features: ["MR Grade (IS:303)", "Interior Use", "Smooth Surface", "Cost Effective"],
  },
];


const techBadges = ["VIRASAFE™ Antiviral", "FIRESAVE™ Fire Rating", "E-Zero Emission", "Kyoto Pro-Tech", "ISO 9001:2015"];

export default function PlywoodPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
          paddingBottom: 0,
          background: "#0a0a0a",
        }}
      >
        {/* Ken Burns background image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          animation: "kenBurns 8s ease-in-out infinite alternate",
        }}>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Premium plywood sheets"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center center",
              display: "block",
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1 }} />

        {/* Bottom-up gradient for extra depth */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)", zIndex: 1 }} />

        <style>{`
          @keyframes kenBurns {
            from { transform: scale(1.0); }
            to   { transform: scale(1.05); }
          }
        `}</style>

        <div className="px-4 sm:px-8 lg:px-16" style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>

          {/* Breadcrumb */}
          <nav style={{ marginBottom: 40 }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, listStyle: "none", padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none", fontWeight: 500 }}>Home</Link></li>
              <li style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>›</li>
              <li><Link href="/plywood" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, textDecoration: "none", fontWeight: 500 }}>Products</Link></li>
              <li style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>›</li>
              <li style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600 }}>Plywood</li>
            </ol>
          </nav>

          {/* Main hero layout */}
          <div style={{ paddingBottom: 56 }}>
            <div style={{ maxWidth: 620 }}>
              
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "0.04em", textTransform: "uppercase", color: "#fff", margin: "0 0 20px" }}>
                Premium Plywood,{" "}
                <span style={{ color: "#ffc107" }}>Built to Last.</span>
              </h1>
              
            </div>
          </div>


        </div>

        {/* Gold accent line */}
        <div style={{ height: 3, background: "linear-gradient(90deg, transparent 0%, #ffc107 30%, #ffc107 70%, transparent 100%)", position: "relative", zIndex: 2 }} />
      </section>


            {/* ─── Trust Strip ─── */}
      <section className="w-full bg-[#f4f8f5] border-y border-[#e0e8e2]">
        <div className="max-w-7xl mx-auto px-4 py-4 lg:py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { icon: "✅", label: "BIS Certified" },
              { icon: "🏭", label: "ISO 9001:2015 Facility" },
              { icon: "💧", label: "Boiling Waterproof" },
              { icon: "🌱", label: "E-Zero Options" },
              { icon: "🛡️", label: "VIRASAFE & FIRESAVE" },
              { icon: "📋", label: "Lifetime Warranty" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs font-semibold text-[#2d2d2d] whitespace-nowrap">{item.label}</span>
                {i < 5 && <span className="hidden lg:block w-px h-3 bg-[#d0d8d2] ml-2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section id="products" className="section-padding" style={{ background: "linear-gradient(180deg, #f7f5f0 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-block">SharonPly Plywood</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
              Our Plywood
            </h2>
            <p className="text-[#5a5a5a] mt-2 max-w-xl mx-auto">
              Engineered for every application and environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {plywoodProducts.map((product) => (
              <Link key={product.name} href={product.href} className="card-premium group" style={{ display: "flex", flexDirection: "column", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)", textDecoration: "none" }}>
                <div className="relative" style={{ flex: "0 0 70%", overflow: "hidden", background: "#f5f5f5", aspectRatio: "16/10" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />



                </div>
                <div style={{ flex: 1, padding: "14px 18px 16px", display: "flex", flexDirection: "column", background: "#FFFFFF" }}>
                  <h3 className="text-md font-bold text-[#1a1a1a]" style={{ fontFamily: "var(--font-display)", lineHeight: 1.2, marginBottom: 6 }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#5a5a5a]" style={{ fontSize: 12, lineHeight: 1.5, margin: 0, flex: 1 }}>
                    {product.description.length > 80 ? product.description.substring(0, 80) + '...' : product.description}
                  </p>
                  <span className="text-xs font-semibold text-[#00793A] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ marginTop: 10 }}>
                    Explore Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      

      
      {/* ── Key Product Advantages ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#020202]" style={{ fontFamily: "var(--font-display)" }}>
              Key Product <span style={{ color: "#00793A" }}>Advantages</span>
            </h2>
            <p className="text-[#5a5a5a] text-sm mt-2 max-w-xl mx-auto">
              Every SharonPly product is engineered with advanced technologies for superior performance and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: "BWP Waterproof", desc: "Boiling water proof grade for extreme moisture conditions." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"/></svg>, title: "Termite Resistant", desc: "Built-in protection against termite infestation and damage." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: "Borer Resistant", desc: "Treated to resist borer attacks for long-lasting performance." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>, title: "VIRASAFE Technology", desc: "Advanced antiviral protection for healthier interior spaces." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: "FIRESAVE Technology", desc: "Certified fire-retardant technology for enhanced safety." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-1.5 0-3 1-3 3 0 1.5 1 3 3 3s3-1.5 3-3c0-2-1.5-3-3-3z"/><path d="M8 15c0-2 1.5-3 4-3s4 1 4 3"/><path d="M2 22c0-4 3-7 10-7s10 3 10 7"/></svg>, title: "E-ZERO Emission", desc: "CARB E0 certified for healthier indoor air quality." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>, title: "Calibrated Precision", desc: "Engineered with precision calibration for consistent thickness." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Lifetime Durability", desc: "Built to last with lifetime warranty on premium grades." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-8l-2 4-2-8-2 4H2"/></svg>, title: "High Screw Holding", desc: "Superior screw retention for secure fittings and assembly." },
            ].map((item) => (
              <div key={item.title}
                className="group"
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  padding: "28px 24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 28px rgba(0,121,58,0.10), 0 2px 6px rgba(0,0,0,0.04)";
                  el.style.transform = "translateY(-2px)";
                  el.style.borderColor = "rgba(0,121,58,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.03)";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ marginBottom: 16, color: "#1a1a1a" }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                  marginBottom: 6,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', var(--font-sans)",
                  fontSize: 12,
                  color: "rgba(0,0,0,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<TechCarousel />

      <BlogSection showCsr={false} limit={2} />

      {/* ── CTA Banner ── */}
      <section className="py-6" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Expert Guidance</p>
            <h2 className="text-lg font-bold text-white">Need Help Choosing the Right Plywood?</h2>
            <p className="text-white/70 text-sm">Our experts can guide you to the perfect product for your application and budget.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all whitespace-nowrap">Talk to an Expert</Link>
            <Link href="/dealers" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap">Find a Dealer</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
