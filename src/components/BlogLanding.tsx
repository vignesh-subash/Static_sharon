"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getAllPosts,
  getPostUrl,
  getExcerpt,
  getMonthName,
  getReadTime,
  BlogPost,
} from "@/data/blogPosts";

const ALL_POSTS = getAllPosts();
const POSTS_PER_PAGE = 9;

// ─── PDF-requested category mapping ────────────────────────────────────────────
const PDF_CATEGORIES = [
  "All Posts",
  "Plywood Guide",
  "Veneer Inspiration",
  "Doors",
  "Interior Tips",
  "Product Knowledge",
  "CSR Stories",
  "Brand Updates",
  "Maintenance Tips",
];

const PDF_CAT_COLORS: Record<string, string> = {
  "All Posts":        "#374151",
  "Plywood Guide":    "#2563eb",
  "Veneer Inspiration": "#7c3aed",
  "Doors":            "#d97706",
  "Interior Tips":    "#db2777",
  "Product Knowledge": "#0891b2",
  "CSR Stories":      "#16a34a",
  "Brand Updates":    "#ea580c",
  "Maintenance Tips": "#0d9488",
};

function mapToPdfCategory(post: BlogPost): string {
  const raw = post.category.trim();
  const tag = (post.tags || "").toLowerCase();
  const title = post.title.toLowerCase();

  if (/veneer/.test(title) || /veneer/.test(tag)) return "Veneer Inspiration";
  if (/door/.test(title) || /flush/.test(title) || /door/i.test(tag)) return "Doors";
  if (/maintenance|care|protect|safe/.test(title)) return "Maintenance Tips";
  if (/csr|cares|sharon cares|social|community/.test(raw.toLowerCase())) return "CSR Stories";

  const lower = raw.toLowerCase();
  if (lower === "know about plywood" || lower === "plywood" || lower === "buying guide") return "Plywood Guide";
  if (lower === "contemporary living" || lower === "interior design") return "Interior Tips";
  if (lower === "firesave technology" || lower === "virasafe" || lower === "product guides") return "Product Knowledge";
  if (lower === "company" || lower === "featured" || lower === "company news" || lower === "customer stories") return "Brand Updates";
  if (lower === "sharon cares" || lower === "sustainability" || lower === "case studies") return "CSR Stories";

  if (/waterproof|bwp|marine/.test(tag)) return "Product Knowledge";
  if (/interior|design|furniture|decor/.test(tag)) return "Interior Tips";

  return "Interior Tips";
}

const CATEGORY_COUNTS: Record<string, number> = {};
for (const post of ALL_POSTS) {
  const mapped = mapToPdfCategory(post);
  CATEGORY_COUNTS[mapped] = (CATEGORY_COUNTS[mapped] || 0) + 1;
}

function BlogImage({ src, alt, fill = true, className = "" }: { src: string; alt: string; fill?: boolean; className?: string }) {
  const [err, setErr] = useState(false);
  if (err || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ background: "#1B4332" }}>
        <span style={{ fontSize: "2.5rem", opacity: 0.3 }}>{String.fromCharCode(0x1FAB5)}</span>
      </div>
    );
  }
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
        className={className}
        style={{ objectFit: "cover" }}
        onError={() => setErr(true)}
        loading="lazy"
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className={className}
      style={{ objectFit: "cover" }}
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
}

export default function BlogLanding() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All Posts");
  const [page, setPage] = useState(1);
  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollToArticles = useCallback(() => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const filtered = useMemo(() => {
    let posts = [...ALL_POSTS];
    if (activeCat !== "All Posts") {
      posts = posts.filter((p) => mapToPdfCategory(p) === activeCat);
    }
    if (search) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          mapToPdfCategory(p).toLowerCase().includes(q) ||
          (p.tags || "").toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCat, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pagedPosts = filtered.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE);

  const featured = filtered.length > 0 ? filtered[0] : null;
  const gridPosts = featured ? pagedPosts.filter((p) => p.slug !== featured.slug) : pagedPosts;

  useEffect(() => { setPage(1); }, [activeCat, search]);

  return (
    <div className="min-h-screen bg-white">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative overflow-hidden" style={{ minHeight: 420, background: "linear-gradient(135deg, #001f0f 0%, #003a1e 50%, #005a30 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,193,7,0.3) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image src="/images/our-history-hero.jpg" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: 420, paddingTop: 80, paddingBottom: 60 }}>
          <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#ffc107" }}>Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3" style={{ color: "#fff", lineHeight: 1.1 }}>
            SharonPly Knowledge Hub
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: "#ffc107" }}>
            Ideas, insights, and expert guidance for stronger interiors.
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mb-6" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Explore articles on plywood, veneers, doors, interior applications, product selection, maintenance, CSR stories, and brand updates from SharonPly.
          </p>
          <button
            onClick={scrollToArticles}
            className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full w-fit cursor-pointer border-0"
            style={{ background: "#ffc107", color: "#1a1a1a", fontSize: "0.95rem" }}
          >
            Explore Articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>
      </section>

      {/* ── 2. SEARCH BAR ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: -28, position: "relative", zIndex: 20 }}>
        <div className="flex items-center gap-3 rounded-xl shadow-lg bg-white border" style={{ padding: "0.5rem 1rem", borderColor: "#e5e7eb" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search articles, plywood tips, veneer ideas, CSR stories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none border-0 text-base"
            style={{ padding: "0.75rem 0", color: "#111827" }}
          />
          {search && (
            <button onClick={() => setSearch("")} className="flex-shrink-0 cursor-pointer border-0 bg-transparent" style={{ color: "#9ca3af" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── 3. CATEGORY FILTERS ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: 24 }}>
        <div className="flex flex-wrap items-center gap-2">
          {PDF_CATEGORIES.map((cat) => {
            const isActive = activeCat === cat;
            const count = cat === "All Posts" ? ALL_POSTS.length : (CATEGORY_COUNTS[cat] || 0);
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium cursor-pointer border-0"
                style={{
                  padding: "0.5rem 1rem",
                  background: isActive ? PDF_CAT_COLORS[cat] : "#f3f4f6",
                  color: isActive ? "#fff" : "#374151",
                }}
              >
                {cat}
                <span className="text-xs rounded-full px-1.5 py-0.5" style={{ background: isActive ? "rgba(255,255,255,0.2)" : "#e5e7eb", minWidth: 20, textAlign: "center" }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 4. FEATURED ARTICLE ── */}
      <div ref={featuredRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: 40 }}>
        {featured && (
          <>
            <h2 className="text-2xl font-extrabold mb-5" style={{ color: "#111827" }}>Featured Article</h2>
            <Link href={getPostUrl(featured)} className="block group" style={{ textDecoration: "none" }}>
              <div className="rounded-2xl overflow-hidden shadow-md" style={{ background: "#fff", border: "1.5px solid #e5e7eb" }}>
                <div className="relative" style={{ aspectRatio: "21/9", maxHeight: 400 }}>
                  <BlogImage src={featured.image} alt={featured.title} />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: PDF_CAT_COLORS[mapToPdfCategory(featured)], color: "#fff" }}>
                      {mapToPdfCategory(featured)}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:underline" style={{ color: "#111827" }}>
                    {featured.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "#6b7280", lineHeight: 1.6 }}>
                    {getExcerpt(featured.contentHTML, 200)}
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "#9ca3af" }}>
                    <span>{getMonthName(featured.month)} {featured.year}</span>
                    <span>&middot;</span>
                    <span>{getReadTime(featured.contentHTML)} read</span>
                  </div>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>

      {/* ── 5. LATEST ARTICLES GRID ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: 48 }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold" style={{ color: "#111827" }}>Latest Articles</h2>
          <span className="text-sm" style={{ color: "#6b7280" }}>{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {gridPosts.length === 0 ? (
          <div className="text-center py-16">
            <div style={{ fontSize: "3rem", marginBottom: 12 }}>{String.fromCharCode(0x1F4ED)}</div>
            <p className="text-lg font-semibold" style={{ color: "#374151" }}>No articles found</p>
            <p className="text-sm mt-1" style={{ color: "#9ca3af" }}>Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => {
              const cat = mapToPdfCategory(post);
              const catColor = PDF_CAT_COLORS[cat] || "#374151";
              return (
                <Link
                  key={post.slug}
                  href={getPostUrl(post)}
                  className="group flex flex-col rounded-xl overflow-hidden shadow-sm"
                  style={{ background: "#fff", border: "1.5px solid #e5e7eb", textDecoration: "none" }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <BlogImage src={post.image} alt={post.title} className="group-hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: catColor, color: "#fff" }}>
                        {cat}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1" style={{ padding: "1.25rem" }}>
                    <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:underline" style={{ color: "#111827" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm line-clamp-2 mb-3" style={{ color: "#6b7280", lineHeight: 1.6, flex: 1 }}>
                      {getExcerpt(post.contentHTML, 120)}
                    </p>
                    <div className="flex items-center justify-between text-xs mt-auto" style={{ color: "#9ca3af" }}>
                      <div className="flex items-center gap-2">
                        <span>{getMonthName(post.month)} {post.year}</span>
                        <span>&middot;</span>
                        <span>{getReadTime(post.contentHTML)} read</span>
                      </div>
                      <span className="font-semibold inline-flex items-center gap-1" style={{ color: catColor }}>
                        Read More
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10 pb-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage <= 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                background: safePage <= 1 ? "#f3f4f6" : "#00793A",
                color: safePage <= 1 ? "#9ca3af" : "#fff",
                border: "none",
                cursor: safePage <= 1 ? "not-allowed" : "pointer",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              Previous
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className="w-9 h-9 rounded-lg text-sm font-bold"
                  style={{
                    background: p === safePage ? "#00793A" : "#f3f4f6",
                    color: p === safePage ? "#fff" : "#374151",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium"
              style={{
                background: safePage >= totalPages ? "#f3f4f6" : "#00793A",
                color: safePage >= totalPages ? "#9ca3af" : "#fff",
                border: "none",
                cursor: safePage >= totalPages ? "not-allowed" : "pointer",
              }}
            >
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── 6. CONVERSION CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)", marginTop: 48, padding: "3.5rem 2rem" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{String.fromCharCode(0x1F3D7)}</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#052e16" }}>
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-6" style={{ color: "#374151", lineHeight: 1.7 }}>
            Explore SharonPly products or speak to our team for plywood, veneer, and door recommendations based on your project requirement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products/plywood"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full"
              style={{ background: "#00793A", color: "#fff", textDecoration: "none", fontSize: "0.95rem" }}
            >
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full"
              style={{ background: "transparent", color: "#00793A", border: "2px solid #00793A", textDecoration: "none", fontSize: "0.95rem" }}
            >
              Talk to an Expert
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
