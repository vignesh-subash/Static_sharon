import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { IMG } from "@/data/plywoodData";

export const metadata = {
  title: "Doors | Premium BWP & Flush Doors IS:2202 Certified | SharonPly",
  description: "SharonPly doors — IS:2202 certified flush doors with BWP-grade construction, VIRASAFE technology, and E0 emission standards. Available in SharonGold (30-year warranty) and Sovereign range (7-year warranty).",
};

const doorProducts = [
  {
    name: "Sharon GOLD Door",
    href: "/door/sharon-gold-door",
    tag: "Premium BWP",
    tagColor: "#b8860b",
    tagBg: "linear-gradient(135deg, #ffc107, #e5ac00)",
    tagline: "Gold Standard Doors — VIRASAFE & E0 Certified",
    description:
      "Sharon GOLD Doors bring the prestige of the Sharon Gold brand to the doors segment. BWP-grade core with phenol-formaldehyde bonding, VIRASAFE antiviral coating, E0 formaldehyde emission, termite-proof treatment, and pre-fitted frame option. The complete premium door package.",
    image: IMG.interior1,
    features: ["BWP Grade (IS:2202)", "VIRASAFE Coating", "E0 Emission", "Pre-Fitted Frame Option"],
    specs: [
      { label: "Grade", value: "BWP (IS:2202 Part 1)" },
      { label: "Bonding", value: "Phenol Formaldehyde" },
      { label: "Warranty", value: "25 Years" },
    ],
  },
  {
    name: "Sovereign Door",
    href: "/door/sovereign-door",
    tag: "BWP Grade",
    tagColor: "#1565c0",
    tagBg: "linear-gradient(135deg, #1976d2, #1565c0)",
    tagline: "Reliable BWP Doors — Built for Every Application",
    description:
      "Sovereign Doors are the trusted choice for architects and builders who need dependable BWP performance at scale. Seasoned hardwood frame, solid BWP core, factory termite treatment, and a paint-ready sanded surface. Proven durability across residential and commercial projects.",
    image: IMG.interior2,
    features: ["BWP Grade (IS:2202)", "Seasoned Hardwood Frame", "Factory Termite Treatment", "Warp & Twist Free"],
    specs: [
      { label: "Grade", value: "BWP (IS:2202 Part 1)" },
      { label: "Core", value: "Solid Hardwood Core" },
      { label: "Warranty", value: "15 Years" },
    ],
  },
];

const doorFeatures = [
  {
    icon: "droplet",
    title: "BWP Grade Core",
    description:
      "Phenol-formaldehyde resin bonding passes the boiling water test (IS:2202). Fully waterproof — suitable for kitchens, bathrooms, and humid environments.",
  },
  {
    icon: "shield",
    title: "Termite Proof",
    description:
      "Factory-applied preservative treatment on both faces and all edges provides complete, long-lasting protection against termite and borer attack.",
  },
  {
    icon: "layers",
    title: "Warp Resistant",
    description:
      "Balanced cross-banded veneer construction and seasoned hardwood perimeter frames ensure the door remains perfectly straight for decades.",
  },
  {
    icon: "surface",
    title: "Premium Finish",
    description:
      "Both-side sanded hardwood face veneer, ready for paint, laminate, PVC foil, or decorative veneer. Consistent surface quality across every door.",
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  if (icon === "droplet") return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>;
  if (icon === "shield") return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
  if (icon === "layers") return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>;
}

const CHECK = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function DoorsPage() {
  return (
    <InnerPageLayout
      breadcrumbs={[{ label: "Products" }, { label: "Doors" }]}
      title="DOORS"
      subtitle="Premium Doors for Timeless Elegance"
      heroImage={IMG.interior1}
    >
      {/* ─── Category Intro ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4 inline-block">Doors That Combine Strength, Safety & Style</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-5" style={{ fontFamily: "var(--font-display)" }}>
                Doors That Define Every Entrance
              </h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                A door is the first thing your guests see and the last thing you touch at night. SharonPly flush doors are
                built with the same uncompromising standards that define our entire range — seasoned hardwood frames, BWP-grade
                bonding, precision engineering, and finishes that hold their quality for decades.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed mb-6">
                The Sharon GOLD Door and Sovereign Door are both IS:2202 certified, warp-free, and ready for any finish you choose.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "IS:2202 Certified",
                  "BWP Grade Core",
                  "VIRASAFE Technology",
                  "E0 Formaldehyde",
                  "Termite Proof",
                  "Warp-Free Guarantee",
                  "Factory Sanded Surface",
                  "Custom Sizes Available",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,121,58,0.10)" }}>
                      {CHECK}
                    </div>
                    <span className="text-xs text-[#5a5a5a] font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image with stat overlays */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src={IMG.interior2} alt="SharonPly Premium Doors" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,50,20,0.75) 0%, transparent 55%)" }} />

            </div>
          </div>
        </div>
      </section>

      
      {/* ─── Trust Strip ──────────── */}
      <section className="w-full bg-[#f4f8f5] border-y border-[#e0e8e2]">
        <div className="max-w-7xl mx-auto px-4 py-4 lg:py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { icon: "✅", label: "IS:2202 Certified" },
              { icon: "🛡️", label: "BWP Grade Core" },
              { icon: "🐛", label: "Termite Resistant" },
              { icon: "📐", label: "Warp-Resistant" },
              { icon: "✨", label: "Smooth Finish" },
              { icon: "📋", label: "Warranty-Backed" },
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

      {/* ─── Product Cards ───────────────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #f7f5f0 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-block">Our Doors</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
              Our Doors
            </h2>
            <p className="text-[#5a5a5a] mt-2 max-w-xl mx-auto text-sm">
              Two precisely engineered door solutions for premium interiors and dependable everyday performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {doorProducts.map((product) => (
              <div key={product.name} className="card-premium group overflow-hidden flex flex-col">
                {/* Hero image */}
                <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,30,12,0.82) 0%, transparent 55%)" }} />
                  <span
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-white"
                    style={{ background: product.tagBg }}
                  >
                    {product.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-0.5" style={{ fontFamily: "var(--font-display)" }}>
                      {product.name}
                    </h3>
                    <p className="text-white/65 text-sm">{product.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-[#5a5a5a] leading-relaxed mb-5">{product.description}</p>

                  {/* 4 feature bullets */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(0,121,58,0.10)" }}>
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-xs text-[#5a5a5a] font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick specs table */}
                  <div className="border border-[#e8e4dc] rounded-xl overflow-hidden mb-5">
                    {product.specs.map((s, i) => (
                      <div
                        key={s.label}
                        className={`flex items-center justify-between px-4 py-2.5 text-xs ${i % 2 === 0 ? "bg-white" : "bg-[#f7f5f0]/60"} ${i < product.specs.length - 1 ? "border-b border-[#e8e4dc]/60" : ""}`}
                      >
                        <span className="text-[#5a5a5a]">{s.label}</span>
                        <span className="font-semibold text-[#2d2d2d]">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 font-semibold text-sm text-[#00793A] group-hover:gap-3 transition-all"
                    >
                      View Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* ─── Product Comparison Table ──────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7f5f0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label mb-3 inline-block">Compare Our Doors</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
              Which Door Is Right for You?
            </h2>
            <p className="text-[#5a5a5a] mt-2 max-w-xl mx-auto text-sm">
              Understand the difference between our two door solutions at a glance
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-[#e8e4dc]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#00793A] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Feature</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Sharon GOLD Door</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider">Sovereign Door</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Positioning", gold: "Premium Door Solution", sov: "Dependable Door Solution" },
                  { feature: "Grade", gold: "BWP Flush Door", sov: "BWP Flush Door" },
                  { feature: "Standard", gold: "IS:2202", sov: "IS:2202" },
                  { feature: "Warranty", gold: "30 Years", sov: "7 Years" },
                  { feature: "Best For", gold: "Premium homes, offices, hospitality", sov: "Homes, apartments, projects" },
                  { feature: "Surface", gold: "Smooth finish-ready surface", sov: "Smooth paint-ready surface" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f5f0]/60"}>
                    <td className="px-5 py-3 font-semibold text-[#2d2d2d] border-r border-[#e8e4dc]/60">{row.feature}</td>
                    <td className="px-5 py-3 text-[#5a5a5a] border-r border-[#e8e4dc]/60">{row.gold}</td>
                    <td className="px-5 py-3 text-[#5a5a5a]">{row.sov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-[#5a5a5a] mb-4">Need help deciding? Our team can guide you to the right door for your project.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#00793A] hover:bg-[#005c2c] transition-all">Talk to Our Team</a>
              <a href="/dealers" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#00793A] border border-[#00793A] hover:bg-[#f0faf4] transition-all">Find a Dealer</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Makes Our Doors Special ──────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-block">Engineering Excellence</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
              What Makes Our Doors Special
            </h2>
            <p className="text-[#5a5a5a] mt-2 max-w-xl mx-auto text-sm">
              Every SharonPly door is built to a standard that outlasts trends and delivers performance across decades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doorFeatures.map((feat) => (
              <div
                key={feat.title}
                className="card-premium p-6 text-center group hover:border-[#00793A]/20 transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-[#00793A] mx-auto transition-all duration-300 group-hover:bg-[#00793A] group-hover:text-white"
                  style={{ background: "rgba(0,121,58,0.08)" }}
                >
                  <FeatureIcon icon={feat.icon} />
                </div>
                <h3 className="text-sm font-bold text-[#2d2d2d] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {feat.title}
                </h3>
                <p className="text-xs text-[#5a5a5a] leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sizes + Applications ───────────────────── */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #f7f5f0 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sizes */}
            <div>
              <h2 className="text-xl font-bold text-[#2d2d2d] mb-5" style={{ fontFamily: "var(--font-display)" }}>
                Standard Door Sizes
              </h2>
              <div className="border border-[#e8e4dc] rounded-xl overflow-hidden">
                {[
                  { label: '6\'6" × 2\'6"', value: "Bathroom / Small Room" },
                  { label: '6\'6" × 2\'9"', value: "Standard Room Door" },
                  { label: '7\' × 3\'', value: "Main Entrance / Bedroom" },
                  { label: '7\' × 3\'3"', value: "Premium Entrance" },
                  { label: '8\' × 4\'', value: "Custom / Commercial" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-center justify-between px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#f7f5f0]/50"} ${i < 4 ? "border-b border-[#e8e4dc]/60" : ""}`}
                  >
                    <span className="font-bold text-[#2d2d2d]">{s.label}</span>
                    <span className="text-[#5a5a5a]">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5a5a5a] mt-3">* Custom sizes available. Minimum order quantity applies.</p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-xl font-bold text-[#2d2d2d] mb-5" style={{ fontFamily: "var(--font-display)" }}>
                Where They&#39;re Used
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Main Entrance Doors",
                  "Bedroom Doors",
                  "Bathroom & Toilet Doors",
                  "Kitchen Doors",
                  "Office & Commercial",
                  "Hotel & Hospitality",
                  "Schools & Institutions",
                  "Healthcare Facilities",
                ].map((app) => (
                  <div key={app} className="flex items-center gap-3 bg-white border border-[#e8e4dc] rounded-xl px-4 py-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,121,58,0.10)" }}>
                      {CHECK}
                    </div>
                    <span className="text-sm text-[#2d2d2d] font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────── */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Find the Perfect Door for Your Home
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm">
            Our team can help you select the right door solution for your project. Talk to an expert or find your nearest dealer.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/catalogue" className="btn-gold">Download Catalogue</Link>
            <Link
              href="/dealers"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-[15px] transition-all duration-300 border-2 border-white/30 text-white hover:bg-white/10"
            >
              Find a Dealer
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-[15px] transition-all duration-300 border-2 border-white/30 text-white hover:bg-white/10"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
