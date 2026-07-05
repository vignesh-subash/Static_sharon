"use client";

import { useState, useMemo } from "react";
import InnerPageLayout from "@/components/InnerPageLayout";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";

const HERO = `${SB}/Plywood-resized-1770810953635.jpg?width=1600&height=700&resize=cover`;


const testimonials = [
  {
    name: "Ar. Ponni M. Concessao",
    company: "M/s. Oscar & Ponni Architects",
    location: "Chennai",
    quote: "Completely satisfied with the quality of products and services provided by SharonPly. They consistently deliver on their promise — every single time.",
    years: "10+",
    initial: "P",
    color: "#00793A",
  },
  {
    name: "Ar. Vidya Chandar",
    company: "M/s. CS Designs Pvt. Ltd.",
    location: "Chennai",
    quote: "Quality is very consistent. Sharon Platinum is among the best in the market — the surface finish and structural strength set it apart from everything else I've specified.",
    years: "8+",
    initial: "V",
    color: "#1565c0",
  },
  {
    name: "Ar. T. Chandran",
    company: "M/s. CTC Designers",
    location: "Chennai",
    quote: "Fully satisfied with Sharon products. We have used them on prestigious projects including McKinsey, Ashok Leyland, and Brakes India — the quality speaks for itself.",
    years: "12+",
    initial: "T",
    color: "#7b1fa2",
    highlight: true,
  },
  {
    name: "Ar. Rashmi Yadav",
    company: "M/s. Yadav Architects",
    location: "Chennai",
    quote: "We have been growing together since our establishment. Sharon offers a wide variety of products with the best quality — a partnership built on trust and excellence.",
    years: "Founded together",
    initial: "R",
    color: "#e65100",
  },
  {
    name: "Ar. Ravimeenakshisundaram",
    company: "M/s. Aishus Design Connect",
    location: "Chennai",
    role: "Director",
    quote: "Sharon fulfills quality and customer service consistently. In our field, reliability is everything — SharonPly has never let us or our clients down.",
    years: "10+",
    initial: "R",
    color: "#006064",
  },
  {
    name: "Ar. Mahesh Jadav",
    company: "M/s. Jadav Associates",
    location: "Chennai",
    quote: "We have maintained a three-decade relationship built on the highest quality and timely delivery. Over 15 years of personal use — I recommend SharonPly without hesitation.",
    years: "30+",
    initial: "M",
    color: "#880e4f",
    highlight: true,
  },
  {
    name: "Ar. B. Arun",
    company: "M/s. Arun Associates",
    location: "Chennai",
    quote: "One of the best plywoods in Tamil Nadu state. Very satisfied with the product range and the support we receive from the Sharon team throughout every project.",
    years: "8+",
    initial: "B",
    color: "#1b5e20",
  },
  {
    name: "Ar. J. Manoharan",
    company: "IIID — Chennai Region Chapter",
    location: "Chennai",
    role: "Chairman",
    quote: "SharonPly is a valued corporate member and plays an important role in IIID events. Their commitment to the design community reflects the values they bring to their products.",
    years: "15+",
    initial: "J",
    color: "#bf360c",
  },
  {
    name: "Ar. Bhuvaneshwari",
    company: "Independent Architect",
    location: "Tirunelveli",
    quote: "I have been recommending SharonPly for 15 years and have received zero complaints from clients. That track record says everything about the consistency of their quality.",
    years: "15+",
    initial: "B",
    color: "#4a148c",
    highlight: true,
  },
  {
    name: "Ar. Bala",
    company: "M/s. Anutham Architecture Studio",
    location: "Chennai",
    quote: "I have been using SharonPly for 8–10 years and my clients are always happy with the results. I'm looking forward to maintaining this long-lasting relationship.",
    years: "8–10",
    initial: "B",
    color: "#01579b",
  },
  {
    name: "Ar. Sudheer",
    company: "M/s. Projects Studio",
    location: "Chennai",
    quote: "The quality and service SharonPly provides are among the best in the industry. Every interaction, every delivery, every panel reflects a commitment to excellence.",
    years: "7+",
    initial: "S",
    color: "#33691e",
  },
  {
    name: "Ar. R. Karthik Narayanan",
    company: "M/s. Ganesan Builders Limited",
    location: "Chennai",
    quote: "Very satisfied for the past 10 years. Excellent quality and service — SharonPly has been our go-to specification for all residential and commercial projects.",
    years: "10+",
    initial: "K",
    color: "#b71c1c",
    highlight: true,
  },
  {
    name: "Ar. Shripal",
    company: "M/s. SVA Shripal & Venkat Architects",
    location: "Chennai",
    quote: "Sharon provides peace of mind. When you specify SharonPly, you know the quality and consistency will be maintained — project after project, panel after panel.",
    years: "9+",
    initial: "S",
    color: "#004d40",
  },
  {
    name: "Ar. Varadharaj Periyasamy",
    company: "M/s. Eccentric Design Studio",
    location: "Chennai",
    quote: "Quality materials establish great design details. SharonPly consistently delivers on-time and provides the surface quality our designs demand.",
    years: "6+",
    initial: "V",
    color: "#1a237e",
  },
  {
    name: "Ar. Kunnakudi Srinivasan",
    company: "M/s. Bagyaan Associates",
    location: "Chennai",
    quote: "Three decades of partnership with SharonPly — built on the best quality initiatives and a genuinely affectionate relationship. They treat their clients like family.",
    years: "30+",
    initial: "K",
    color: "#3e2723",
    highlight: true,
  },
  {
    name: "Ar. Viapuri Thangavelu",
    company: "M/s. Viapuri Architects",
    location: "Salem",
    role: "Principal Architect",
    quote: "I have recommended SharonPly for 15 years and received zero complaints. A manufacturer you can truly rely on — consistent quality from the first sheet to the last.",
    years: "15+",
    initial: "V",
    color: "#00695c",
  },
  {
    name: "Ar. R. G. Andiyhappan",
    company: "M/s. Vindhaa Hi-Tech Builders",
    location: "Salem",
    quote: "Satisfied with the quality and services provided by SharonPly. They understand the demands of the construction industry and deliver accordingly.",
    years: "5+",
    initial: "A",
    color: "#5d4037",
  },
  {
    name: "Ar. Sheik Abdullah Sam",
    company: "M/s. SAHI Architects & Builders",
    location: "Chennai",
    role: "Co-founder & Principal Architect",
    quote: "Through SharonPly, we found what quality plywood truly means. The product sets the benchmark — everything else in the market is measured against it.",
    years: "8+",
    initial: "S",
    color: "#37474f",
  },
  {
    name: "Ar. Gowri Shankar R.R.",
    company: "M/s. Shankar Ramesh Architect",
    location: "Chennai",
    quote: "Service and products from SharonPly are extraordinary. The quality of your brand defines the quality of your work — and SharonPly makes us look exceptional.",
    years: "11+",
    initial: "G",
    color: "#0d47a1",
    highlight: true,
  },
];

const BIZCON_PLAYLIST = "PL84ygvbFjucLDBqYBJ23y3dgcre2vNRRR";


const AUDIENCE_TYPES = ["All", "Architects", "Interior Designers", "Builders", "Homeowners"];

const audienceCards = [
  { label: "Architects", desc: "For specification confidence", icon: "🏛️", color: "#1a3a6c" },
  { label: "Interior Designers", desc: "For finish and material reliability", icon: "🎨", color: "#7c4f1e" },
  { label: "Builders", desc: "For project consistency", icon: "🏗️", color: "#00793A" },
  { label: "Homeowners", desc: "For safe and durable interiors", icon: "🏠", color: "#5c3a1e" },
];


const bizconVideos = [
  { id: "N4jwxJpP68U", title: "SharonBIZCON — Dealer Voices #1", dealer: "SharonPly Dealers", location: "South India" },
  { id: "PFnh8KnFUFA", title: "SharonBIZCON — Dealer Voices #2", dealer: "SharonPly Dealers", location: "South India" },
  { id: "iTGLsL3ATuk", title: "SharonBIZCON — Dealer Voices #3", dealer: "SharonPly Dealers", location: "South India" },
  { id: "FmZQ9kYXbDE", title: "SharonBIZCON — Dealer Voices #4", dealer: "SharonPly Dealers", location: "South India" },
];

const thumb = (id: string) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

function BizConVideoCard({ v, onPlay }: { v: typeof bizconVideos[0]; onPlay: (id: string, title: string) => void }) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onPlay(v.id, v.title)}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", aspectRatio: "16/9", background: "#0f0f0f" }}>
        <img src={thumb(v.id)} alt={v.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.35s ease" }} className="group-hover:scale-105" loading="lazy" />
        <div style={{ position: "absolute", inset: 0 }} className="group-hover:bg-black/20 transition-colors duration-200" />
        {/* Play */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.3)", transition: "transform 0.2s" }} className="group-hover:scale-110">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000" style={{ marginLeft: 2 }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
        <div style={{ position: "absolute", top: 6, left: 6, padding: "2px 7px", borderRadius: 4, background: "rgba(3,105,161,0.88)", color: "#fff", fontSize: 9, fontWeight: 700, letterSpacing: "0.08em" }}>BIZCON</div>
      </div>
      <div>
        <p style={{ fontSize: 12.5, fontWeight: 700, color: "#0f0f0f", lineHeight: 1.35, marginBottom: 3, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{v.title}</p>
        <p style={{ fontSize: 11, color: "#606060" }}>{v.dealer} · {v.location}</p>
      </div>
    </div>
  );
}

function BizConModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={onClose}>
      <div style={{ width: "min(94vw,860px)", background: "#0f0f0f", borderRadius: 14, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px" }}>
          <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "rgba(3,105,161,0.9)", color: "#fff", fontWeight: 700 }}>SharonBIZCON</span>
          <button onClick={onClose} style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div style={{ aspectRatio: "16/9" }}>
          <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
        </div>
        <div style={{ padding: "12px 16px 16px", background: "#161616" }}>
          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: "0 0 8px" }}>{title}</h3>
          <a href={`https://www.youtube.com/playlist?list=${BIZCON_PLAYLIST}`} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 6, background: "#0369a1", color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>
            View Full BizCon Playlist →
          </a>
        </div>
      </div>
    </div>
  );
}

const StarRating = () => (
  <div className="flex gap-0.5 mb-3">
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

const QuoteIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.15">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill={color}/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill={color}/>
  </svg>
);

export default function TestimonialsPage() {
  const [audienceFilter, setAudienceFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredTestimonials = useMemo(() => {
    if (audienceFilter === "All") return showAll ? testimonials : testimonials.slice(0, 6);
    // Basic filter mapping - all current testimonials are architects
    // As more audience types are added, this can be expanded
    return testimonials;
  }, [audienceFilter, showAll]);

  const featuredTestimonials = useMemo(() => {
    return testimonials.filter(t => t.highlight).slice(0, 3);
  }, []);

  const nonFeatured = useMemo(() => {
    return testimonials.filter(t => !t.highlight);
  }, []);

  const [playingBizCon, setPlayingBizCon] = useState<{ id: string; title: string } | null>(null);

  return (
    <>
    <InnerPageLayout
      breadcrumbs={[{ label: "Testimonials" }]}
      title="What Our Clients Say"
      subtitle="Trusted by leading architects and builders across South India for over three decades"
      heroImage={HERO}
    >

      {/* ── Featured testimonials ── */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Highlighted Reviews</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">Voices of Trust</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl p-7 flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "white", border: `1.5px solid ${t.color}22`, boxShadow: `0 4px 24px ${t.color}12` }}
              >
                {/* Decorative top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}88)` }} />
                {/* Large quote mark bg */}
                <div className="absolute top-4 right-5">
                  <QuoteIcon color={t.color} />
                </div>

                <StarRating />

                <p className="text-[14px] text-gray-700 leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-gray-100">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                  >
                    {t.initial}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-bold text-[#020202] leading-tight truncate">{t.name}</p>
                    {t.role && <p className="text-[11.5px] text-[#00793A] font-medium">{t.role}</p>}
                    <p className="text-[11.5px] text-gray-500 truncate">{t.company}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ background: `${t.color}15`, color: t.color }}>
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All testimonials ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">More Reviews</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">From Our Architect Community</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">Professionals across South India who trust SharonPly for their most demanding projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {nonFeatured.map((t) => (
              <div
                key={t.name}
                className="relative bg-[#f9fafb] rounded-2xl p-6 flex flex-col overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: t.color }} />

                <div className="absolute top-4 right-4">
                  <QuoteIcon color={t.color} />
                </div>

                <StarRating />

                <p className="text-[13px] text-gray-600 leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-bold text-[#020202] truncate leading-tight">{t.name}</p>
                      {t.role && <p className="text-[11px] font-semibold" style={{ color: t.color }}>{t.role}</p>}
                      <p className="text-[11px] text-gray-500 truncate">{t.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="text-[11px] text-gray-400">{t.location}</span>
                    <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${t.color}15`, color: t.color }}>
                      {t.years} yrs
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!showAll && testimonials.length > 6 && audienceFilter === "All" && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#00793A] border-2 border-[#00793A]/30 hover:bg-[#f0faf4] transition-all">
                View All Testimonials
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── BizCon Section ── */}
      <section className="py-16 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0369a1] mb-1">Dealer Voices</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">SharonBIZCON</h2>
              <p className="text-gray-500 mt-1 text-sm">Our dealer partners share their experience building a stronger business with SharonPly.</p>
            </div>
            <a
              href={`https://www.youtube.com/playlist?list=${BIZCON_PLAYLIST}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white"
              style={{ background: "#0369a1" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              View Full Playlist
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {bizconVideos.map(v => (
              <BizConVideoCard key={v.id} v={v} onPlay={(id, title) => setPlayingBizCon({ id, title })} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-3xl p-10 lg:p-14" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 60%, #003d1e 100%)" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-3">Join Our Community</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Experience SharonPly?</h2>
            <p className="text-white/75 text-sm lg:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands of architects, builders, and interior designers who trust SharonPly for their most important projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/plywood"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#020202] transition-all hover:scale-105"
                style={{ background: "#ffc107" }}
              >
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    {/* Final CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Choose SharonPly for Your Next Project?</h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Connect with our team to find the right plywood, veneer, or door solution for your home, commercial, or project requirement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all shadow-lg">
              Talk to Our Team
            </a>
            <a href="/dealers" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all">
              Find a Dealer
            </a>
          </div>
        </div>
      </section>

    </InnerPageLayout>
    {playingBizCon && (
      <BizConModal videoId={playingBizCon.id} title={playingBizCon.title} onClose={() => setPlayingBizCon(null)} />
    )}
    </>
  );
}
