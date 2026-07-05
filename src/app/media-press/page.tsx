"use client";

import { useState, useMemo } from "react";
import InnerPageLayout from "@/components/InnerPageLayout";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";
const HERO = `${SB}/Plywood-resized-1770810953635.jpg?width=1600&height=700&resize=cover`;

/* ─── Data ─────────────────────────────────────────────────────── */

const CATEGORIES = ["All", "#IAmStrongest", "CSR & Initiatives", "Product News", "Corporate"] as const;
type Category = typeof CATEGORIES[number];

const PUBLICATIONS: Record<string, { color: string; abbr: string }> = {
  "The Hindu":             { color: "#c0392b", abbr: "TH" },
  "Times of India":        { color: "#e67e22", abbr: "TOI" },
  "Indian Express":        { color: "#2980b9", abbr: "IE" },
  "ANI News":              { color: "#8e44ad", abbr: "ANI" },
  "Dhinamalar":            { color: "#16a085", abbr: "DM" },
  "Dinamani":              { color: "#d35400", abbr: "DN" },
  "Tamil Sudar":           { color: "#27ae60", abbr: "TS" },
  "DT Next":               { color: "#2c3e50", abbr: "DTN" },
  "The Better India":      { color: "#00793A", abbr: "TBI" },
  "Andhra Jothi":          { color: "#8e44ad", abbr: "AJ" },
  "Sakshi":                { color: "#e74c3c", abbr: "SK" },
  "News Today":            { color: "#2980b9", abbr: "NT" },
  "PTI":                   { color: "#c0392b", abbr: "PTI" },
  "Ahmedabad Mirror":      { color: "#e67e22", abbr: "AM" },
};

interface Article {
  id: number;
  title: string;
  excerpt: string;
  publication: string;
  date: string;
  category: Category;
  campaign?: string;
  featured?: boolean;
  image?: string;
  href?: string;
}

const articles: Article[] = [
  // ── 2024 ──────────────────────────────────────────────────────
  {
    id: 1,
    title: "'Olympics is Special' — Former Hockey Stars Recall Sporting Tales",
    excerpt: "SharonPly's 5th #IAmStrongest Awards celebrates hockey legends Vasudevan Baskaran, Muneer Sait, and Charles Cornelius who represented India at the Olympics, reflecting on their journeys and the meaning of true strength.",
    publication: "The Hindu",
    date: "19 Jul 2024",
    category: "#IAmStrongest",
    campaign: "#IAmStrongest 5th Edition",
    featured: true,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    id: 2,
    title: "SharonPly Hosts 5th Edition of #IAmStrongest Awards Honouring Sports Legends",
    excerpt: "The fifth edition of the #IAmStrongest Awards was held at the Music Academy, Chennai on July 26, 2024, recognising Olympic hockey veterans including Vasudevan Baskaran (1980 Gold), Charles Cornelius, Victor John Philips, and Krishnamurthy Perumal.",
    publication: "ANI News",
    date: "31 Jul 2024",
    category: "#IAmStrongest",
    campaign: "#IAmStrongest 5th Edition",
    featured: true,
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80",
  },
  // ── 2023 ──────────────────────────────────────────────────────
  {
    id: 3,
    title: "You Have Seen The Elephant Whisperers — Now Meet Chennai's Unsung Animal Activists",
    excerpt: "SharonPly's 4th #IAmStrongest Awards at Hotel Savera, Chennai, honoured Bomman and Bellie from the Oscar-winning documentary, alongside Chennai's unsung animal welfare champions Joseph Sekar, Anjali Sharma, and Shravan Krishnan.",
    publication: "The Hindu",
    date: "17 May 2023",
    category: "#IAmStrongest",
    campaign: "#IAmStrongest 4th Edition",
    featured: true,
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80",
  },
  {
    id: 4,
    title: "SharonPly #Yaanaichess Campaign Goes National",
    excerpt: "Building on the 44th International Chess Olympiad hosted in Chennai, SharonPly launched the #Yaanaichess (Rook) contest celebrating Tamil Nadu's chess heritage and sponsoring the State Chess Tournament.",
    publication: "Times of India",
    date: "23 May 2023",
    category: "CSR & Initiatives",
    campaign: "#Yaanaichess",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&q=80",
  },
  // ── 2022 ──────────────────────────────────────────────────────
  {
    id: 5,
    title: "Award Recognises COVID-19 Warriors — 3rd #IAmStrongest Edition",
    excerpt: "SharonPly honoured frontline COVID warriors including Kalyanasundaram (Chennai), Chandrasekhar & Pushparani (Trichy), Muthupandi (Thoothukudi), and Arun Kumar of No Food Waste at the 3rd edition of the #IAmStrongest Awards.",
    publication: "The Hindu",
    date: "16 Mar 2022",
    category: "#IAmStrongest",
    campaign: "#IAmStrongest 3rd Edition",
    featured: true,
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80",
  },
  {
    id: 6,
    title: "SharonPly Joins Chess Celebrations with 'Yaanai Chess'!",
    excerpt: "As Chennai hosted the 44th International Chess Olympiad, SharonPly launched a unique campaign celebrating the Rook piece — 'Yaanai' in Tamil — with interactive contests and community engagement across the city.",
    publication: "Times of India",
    date: "04 Aug 2022",
    category: "CSR & Initiatives",
    campaign: "#Yaanaichess",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&q=80",
  },
  {
    id: 7,
    title: "Umbrella with Solar Powered Lights for Street Vendors",
    excerpt: "SharonPly's innovative CSR initiative provided solar-powered umbrellas to street vendors across Tamil Nadu, enabling them to operate safely after dark while reducing electricity dependence — a story of thoughtful corporate responsibility.",
    publication: "The Hindu",
    date: "02 Nov 2022",
    category: "CSR & Initiatives",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80",
  },
  {
    id: 8,
    title: "SharonPly Solar Umbrella Initiative Reaches Street Vendors",
    excerpt: "Following The Hindu's coverage, The Indian Express reported on SharonPly's solar umbrella programme, highlighting its impact on livelihoods across Tamil Nadu and the brand's commitment to community empowerment.",
    publication: "Indian Express",
    date: "31 Oct 2022",
    category: "CSR & Initiatives",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80",
  },
  {
    id: 9,
    title: "#IAmStrongest Awards Coverage — Leading Newspapers",
    excerpt: "The 3rd edition of SharonPly's #IAmStrongest awards received widespread coverage from leading Tamil and Telugu publications including Andhra Jothi, Tamil Sudar, Sakshi, News Today, and DT Next, reinforcing the campaign's pan-South India reach.",
    publication: "Tamil Sudar",
    date: "18 Aug 2022",
    category: "#IAmStrongest",
    campaign: "#IAmStrongest 3rd Edition",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    id: 10,
    title: "Celebrating Heroes of Humanity Who Rose Above Odds",
    excerpt: "The Better India profiled SharonPly's #IAmStrongest movement — a platform that goes beyond product marketing to genuinely recognise extraordinary Indians who embody resilience, compassion, and leadership.",
    publication: "The Better India",
    date: "18 Aug 2022",
    category: "#IAmStrongest",
    campaign: "#IAmStrongest 3rd Edition",
    href: "https://www.thebetterindia.com",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
  },
  // ── Earlier ────────────────────────────────────────────────────
  {
    id: 11,
    title: "Sharon Ply: Excellence in Plywood Manufacturing",
    excerpt: "The Hindu MetroPlus featured SharonPly's manufacturing excellence and innovation in plywood technology, highlighting the Gummidipoondi facility as one of India's most advanced plywood plants.",
    publication: "The Hindu",
    date: "29 Jun 2018",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 12,
    title: "SharonPly — Building Trust with Quality",
    excerpt: "Dhinamalar's special feature on SharonPly's journey from a Chennai-based manufacturer to South India's most trusted plywood brand, spotlighting Kyoto Pro-Tech technology and the legacy of three decades.",
    publication: "Dhinamalar",
    date: "26 Feb 2019",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
  },
  {
    id: 13,
    title: "#QuenchTheThirst — Water Bowls for Stray Animals",
    excerpt: "SharonPly's summer initiative to distribute thousands of cement water bowls for stray animals across Chennai and Coimbatore was covered by PTI, bringing national attention to this thoughtful act of compassion.",
    publication: "PTI",
    date: "12 Apr 2023",
    category: "CSR & Initiatives",
    campaign: "#QuenchTheThirst",
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=800&q=80",
  },
];

const CAMPAIGN_COLORS: Record<string, { bg: string; text: string; accent: string }> = {
  "#IAmStrongest 5th Edition": { bg: "#fffbeb", text: "#92400e", accent: "#f59e0b" },
  "#IAmStrongest 4th Edition": { bg: "#fef3c7", text: "#b45309", accent: "#fbbf24" },
  "#IAmStrongest 3rd Edition": { bg: "#fff7ed", text: "#c2410c", accent: "#fb923c" },
  "#Yaanaichess":              { bg: "#eff6ff", text: "#1d4ed8", accent: "#3b82f6" },
  "#QuenchTheThirst":          { bg: "#ecfdf5", text: "#065f46", accent: "#10b981" },
};

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  "#IAmStrongest":   { bg: "#fef3c7", text: "#92400e" },
  "CSR & Initiatives":{ bg: "#e8f5ee", text: "#00793A" },
  "Product News":    { bg: "#eff6ff", text: "#1d4ed8" },
  "Corporate":       { bg: "#f5f3ff", text: "#6d28d9" },
  "All":             { bg: "#f3f4f6", text: "#374151" },
};

function PublicationBadge({ name }: { name: string }) {
  const p = PUBLICATIONS[name] ?? { color: "#6b7280", abbr: name.slice(0,3).toUpperCase() };
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold" style={{ color: p.color }}>
      <span className="w-5 h-5 rounded flex items-center justify-center text-white text-[8px] font-black flex-shrink-0" style={{ background: p.color }}>
        {p.abbr.slice(0, 2)}
      </span>
      {name}
    </span>
  );
}

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const cc = CAT_COLORS[article.category] ?? CAT_COLORS.All;
  const campC = article.campaign ? CAMPAIGN_COLORS[article.campaign] : null;

  if (featured) {
    return (
      <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
        style={{ border: "1px solid #e5e7eb", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
          {article.image && (
            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
          {/* Category pill on image */}
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold" style={{ background: cc.bg, color: cc.text }}>
              {article.category}
            </span>
            {campC && (
              <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold" style={{ background: campC.bg, color: campC.text }}>
                {article.campaign}
              </span>
            )}
          </div>
          {/* Date on image */}
          <div className="absolute bottom-3 right-3">
            <span className="text-[10px] text-white/80 font-medium bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">{article.date}</span>
          </div>
        </div>
        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <PublicationBadge name={article.publication} />
          <h3 className="text-[15px] font-bold text-[#020202] leading-snug mt-2 mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-[12.5px] text-gray-500 leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
          {article.href && (
            <a href={article.href} target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#00793A] hover:underline">
              Read Article
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  }

  // Compact card
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex gap-0"
      style={{ border: "1px solid #e5e7eb" }}>
      {/* Left accent bar */}
      <div className="w-1 flex-shrink-0 rounded-l-xl" style={{ background: CAT_COLORS[article.category]?.text ?? "#00793A" }} />
      {/* Thumbnail */}
      {article.image && (
        <div className="w-24 sm:w-28 flex-shrink-0 overflow-hidden">
          <img src={article.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
        </div>
      )}
      {/* Text */}
      <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <PublicationBadge name={article.publication} />
            <span className="text-[10px] text-gray-400 flex-shrink-0">{article.date}</span>
          </div>
          <h3 className="text-[12.5px] font-bold text-[#020202] leading-snug line-clamp-2">{article.title}</h3>
          <p className="text-[11.5px] text-gray-500 mt-1 leading-relaxed line-clamp-2 hidden sm:block">{article.excerpt}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: cc.bg, color: cc.text }}>{article.category}</span>
          {article.href && (
            <a href={article.href} target="_blank" rel="noopener noreferrer"
              className="ml-auto text-[11px] font-semibold text-[#00793A] hover:underline flex items-center gap-0.5">
              Read <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Campaigns timeline ─────────────────────────────────────────── */
const campaigns = [
  {
    name: "#IAmStrongest",
    year: "2019 – Present",
    editions: 5,
    desc: "Annual awards recognising extraordinary Indians — COVID warriors, animal welfare champions, Olympic legends — who embody true strength.",
    color: "#f59e0b",
    icon: "🏆",
  },
  {
    name: "#Yaanaichess",
    year: "2022",
    editions: 1,
    desc: "Celebrating Chennai's hosting of the 44th International Chess Olympiad through community contests and the iconic 'Rook' chess piece in Tamil culture.",
    color: "#3b82f6",
    icon: "♟️",
  },
  {
    name: "#QuenchTheThirst",
    year: "2023",
    editions: 1,
    desc: "Distributing thousands of cement water bowls for stray animals across Chennai and Coimbatore during summer — compassion in action.",
    color: "#10b981",
    icon: "💧",
  },
  {
    name: "Solar Umbrella Initiative",
    year: "2022",
    editions: 1,
    desc: "Providing solar-powered umbrellas to street vendors across Tamil Nadu, enabling safe evening operations and reducing electricity dependence.",
    color: "#8b5cf6",
    icon: "☀️",
  },
];

/* ─── Page ─────────────────────────────────────────────────────── */
export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const featured = articles.filter(a => a.featured);
  const filtered = useMemo(() => {
    return articles.filter(a => {
      const matchCat = activeCategory === "All" || a.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || a.title.toLowerCase().includes(q) || a.publication.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const nonFeatured = filtered.filter(a => !a.featured);
  const visibleNonFeatured = showAll ? nonFeatured : nonFeatured.slice(0, 6);


  return (
    <InnerPageLayout
      breadcrumbs={[{ label: "About Us", href: "/our-history" }, { label: "Media & Press" }]}
      title="Media & Press"
      subtitle="SharonPly in the news — press coverage, campaigns, and community stories"
      heroImage={HERO}
    >

      {/* ── Campaigns strip ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Signature Initiatives</p>
            <h2 className="text-2xl font-bold text-[#020202]">Our Campaigns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {campaigns.map(c => (
              <div key={c.name} className="rounded-2xl p-5 border hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: `${c.color}30`, background: `${c.color}08` }}>
                <div className="text-2xl mb-3">{c.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[14px] font-black" style={{ color: c.color }}>{c.name}</h3>
                  <span className="ml-auto text-[10px] font-semibold text-gray-400">{c.year}</span>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed">{c.desc}</p>
                {c.editions > 1 && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[10.5px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${c.color}20`, color: c.color }}>
                    {c.editions} Editions
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured coverage ── */}
      <section className="py-14 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Top Stories</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">Featured Coverage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featured.map(a => <ArticleCard key={a.id} article={a} featured />)}
          </div>
        </div>
      </section>

      {/* ── All articles with filter ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header + controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Archive</p>
              <h2 className="text-2xl font-bold text-[#020202]">All Press Coverage</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="text"
                  placeholder="Search articles…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full sm:w-52 pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A] focus:ring-2 focus:ring-[#00793A]/10 transition-all"
                />
              </div>
              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className="px-3.5 py-2 rounded-xl text-[11.5px] font-semibold transition-all"
                    style={cat === activeCategory
                      ? { background: "#00793A", color: "white", boxShadow: "0 2px 8px rgba(0,121,58,0.3)" }
                      : { background: "#f3f4f6", color: "#374151" }
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Count */}
          <p className="text-xs text-gray-400 mb-5">
            Showing <span className="font-semibold text-gray-700">{filtered.length}</span> article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && <> in <span className="font-semibold text-[#00793A]">{activeCategory}</span></>}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 font-medium">No articles found</p>
              <button onClick={() => { setActiveCategory("All"); setSearch(""); }} className="mt-3 text-sm text-[#00793A] hover:underline">Clear filters</button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3">
                {visibleNonFeatured.map(a => <ArticleCard key={a.id} article={a} />)}
              </div>
              {nonFeatured.length > 6 && !showAll && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 border-[#00793A] text-[#00793A] hover:bg-[#00793A] hover:text-white transition-all"
                  >
                    Load More Articles
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Publications we've been featured in ── */}
      <section className="py-12 bg-[#f9fafb] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {Object.entries(PUBLICATIONS).map(([name, p]) => (
              <div key={name} className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="w-6 h-6 rounded text-white text-[9px] font-black flex items-center justify-center flex-shrink-0" style={{ background: p.color }}>
                  {p.abbr.slice(0, 2)}
                </span>
                <span className="text-[12px] font-semibold text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press enquiry CTA ── */}
      <section className="py-6" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-1">Press & Media</p>
            <h2 className="text-lg font-bold text-white">Media Enquiries</h2>
            <p className="text-white/70 text-sm">Press kits, images, interview requests — get in touch with our communications team.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="mailto:admin@sharonply.com" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all whitespace-nowrap">
              Email Media Team
            </a>
            <a href="/contact" className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all whitespace-nowrap">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
