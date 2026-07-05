import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";
const HERO = `${SB}/Plywood-resized-1770810953635.jpg?width=1600&height=700&resize=cover`;

const certifications = [
  { name: "BIS / ISI Certification", authority: "Bureau of Indian Standards", category: "Product Standards", desc: "Confirms product compliance with Indian standards for quality, safety, and performance." },
  { name: "ISO 9001:2015", authority: "ISO", category: "Quality Systems", desc: "Quality Management System certification ensuring consistent production standards." },
  { name: "ISO 14001:2015", authority: "ISO", category: "Quality Systems", desc: "Environmental Management System certification for sustainable manufacturing." },
  { name: "ISO 45001:2018", authority: "ISO", category: "Quality Systems", desc: "Occupational Health & Safety certification ensuring safe working practices." },
  { name: "FSC Chain of Custody", authority: "Forest Stewardship Council", category: "Sustainability", desc: "Supports responsible sourcing and chain of custody for sustainable timber." },
  { name: "CARB E0 / E-Zero", authority: "California Air Resources Board", category: "Sustainability", desc: "Supports low-emission indoor material standards for healthier interiors." },
  { name: "IS:710", authority: "Bureau of Indian Standards", category: "Product Standards", desc: "Standard for BWP marine-grade plywood ensuring boiling waterproof performance." },
  { name: "IS:303", authority: "Bureau of Indian Standards", category: "Product Standards", desc: "Standard for plywood grades including BWP and MR for structural applications." },
  { name: "IS:2202", authority: "Bureau of Indian Standards", category: "Product Standards", desc: "Standard for flush doors ensuring dimensional stability and performance." },
  { name: "IS:5509", authority: "Bureau of Indian Standards", category: "Safety", desc: "Relates to fire-retardant plywood requirements for enhanced safety." },
];

const awards = [
  { name: "#IAmStrongest Awards", organizer: "SharonPly", year: "2019 – Present", category: "Brand Purpose", desc: "An initiative instituted to honour individuals who demonstrate extraordinary strength, courage, resilience, and determination." },
  { name: "Export Recognition", organizer: "Government of India", year: "2022", category: "Trade", desc: "Recognition for export excellence in plywood manufacturing and international trade." },
];

const filterTabs = ["All", "Product Standards", "Quality Systems", "Sustainability", "Safety", "Awards"];

export default function AwardsCertificationsPage() {
  return (
    <InnerPageLayout
      breadcrumbs={[{ label: "About Us", href: "/our-history" }, { label: "Awards & Certifications" }]}
      title="Awards & Certifications"
      subtitle="Recognised standards. Verified quality. Trusted performance."
      heroImage={HERO}
    >
      {/* Hero description and CTAs */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-4 mb-8 text-center">
        <p className="text-[#5a5a5a] text-sm max-w-2xl mx-auto mb-6">
          Explore SharonPly&apos;s certifications, quality standards, recognitions, and compliance credentials that support our commitment to strength, safety, sustainability, and manufacturing excellence.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#certifications" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#00793A] hover:bg-[#005c2c] transition-all shadow-lg shadow-[#00793A]/20">
            View Certifications
          </a>
          <a href="#awards" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#00793A] border-2 border-[#00793A]/30 hover:bg-[#f0faf4] transition-all">
            View Awards
          </a>
        </div>
      </div>

      {/* What These Certifications Mean */}
      <section className="py-12 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-2">Standards</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">What These Certifications Mean</h2>
            <p className="text-[#5a5a5a] text-sm mt-2 max-w-xl mx-auto">Simple explanations of the standards that back every SharonPly product</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "BIS / ISI", desc: "Confirms product compliance with Indian standards" },
              { label: "FSC", desc: "Supports responsible sourcing and chain of custody" },
              { label: "CARB E0 / E-Zero", desc: "Supports low-emission indoor material standards" },
              { label: "IS:5509", desc: "Relates to fire-retardant plywood requirements" },
              { label: "IS:2202", desc: "Relates to flush door standards" },
              { label: "ISO", desc: "Relates to quality management systems" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-[#e8ece9] hover:border-[#00793A]/20 transition-all">
                <h3 className="font-bold text-sm text-[#1a1a1a] mb-1">{item.label}</h3>
                <p className="text-xs text-[#5a5a5a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-14 bg-white" id="certifications">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-2">Credentials</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">Certifications & Quality Standards</h2>
            <p className="text-[#5a5a5a] text-sm mt-2 max-w-xl mx-auto">Verified credentials that support our commitment to quality and performance</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[#e8ece9] bg-white hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-sm text-[#1a1a1a]">{cert.name}</h3>
                  <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-[#f0faf4] text-[#00793A] whitespace-nowrap">{cert.category}</span>
                </div>
                <p className="text-xs text-[#5a5a5a] mb-1">Issuing Authority: <span className="font-medium text-[#2d2d2d]">{cert.authority}</span></p>
                <p className="text-xs text-[#5a5a5a] leading-relaxed">{cert.desc}</p>
                <div className="flex gap-2 mt-4">
                  <button className="text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-[#e0e4e0] text-[#00793A] hover:bg-[#f0faf4] transition-all">View Certificate</button>
                  <button className="text-[10px] font-semibold px-3 py-1.5 rounded-lg bg-[#00793A] text-white hover:bg-[#005c2c] transition-all">Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-14 bg-[#f9fafb]" id="awards">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-2">Recognition</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">Awards</h2>
            <p className="text-[#5a5a5a] text-sm mt-2 max-w-xl mx-auto">Recognitions that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#e8ece9] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-[#f0faf4] flex-shrink-0">🏆</div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1a1a1a]">{award.name}</h3>
                    <p className="text-[10px] text-[#00793A] font-semibold uppercase tracking-wider mt-0.5">{award.category}</p>
                    <p className="text-xs text-[#5a5a5a] mt-2">{award.desc}</p>
                    <div className="flex gap-3 mt-2">
                      <span className="text-[10px] text-[#5a5a5a]">Organiser: {award.organizer}</span>
                      <span className="text-[10px] text-[#5a5a5a]">Year: {award.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Need Certification Support for Your Project?</h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Connect with our team for product documents, technical certificates, datasheets, or compliance support required for project approvals and specifications.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all shadow-lg">Contact Our Team</a>
            <a href="/plywood" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all">View Products</a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
