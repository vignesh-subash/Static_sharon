"use client";

import { useState, useMemo } from "react";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";

interface CatalogueItem {
  name: string;
  category: string;
  desc: string;
  file: string;
  cover?: string;
  productLink?: string;
  productLabel?: string;
}

const catalogues: CatalogueItem[] = [
  { name: "SharonPly Product Catalogue", category: "Master Catalogue", desc: "Complete overview of SharonPly plywood, veneer, doors, and product solutions.", file: "PDF", cover: "", productLabel: "Explore All Products", productLink: "/plywood" },
  { name: "Plywood Brochure", category: "Plywood", desc: "Product brochures for plywood including BWP, MR, and specialty grades.", file: "PDF", cover: "", productLabel: "View Plywood", productLink: "/plywood" },
  { name: "Sharon Exoti Veneer Catalogue", category: "Veneer", desc: "Sharon Exoti Natura and Aura catalogue with species and finish options.", file: "PDF", cover: "", productLabel: "Explore Veneers", productLink: "/veneer" },
  { name: "Door Catalogue", category: "Doors", desc: "SharonPly door catalogue covering Sharon GOLD and Sovereign door solutions.", file: "PDF", cover: "", productLabel: "View Doors", productLink: "/door" },
  { name: "Technology Brochure", category: "Technologies", desc: "VIRASAFE, FIRESAVE, E-Zero, and Kyoto Pro-Tech technology overview.", file: "PDF", cover: "", productLabel: "Explore Technologies", productLink: "/technology" },
];

const FILTERS = ["All", "Master Catalogue", "Plywood", "Veneer", "Doors", "Technologies"];

export default function CatalogueClient() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [preview, setPreview] = useState<CatalogueItem | null>(null);

  const filtered = useMemo(() => {
    return catalogues.filter((c) => {
      const matchFilter = activeFilter === "All" || c.category === activeFilter;
      const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <>
      {/* Latest Catalogue */}
      <section className="py-12 bg-[#f9fafb]" id="latest-catalogue">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-2">Latest</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">Latest Catalogue</h2>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-[#e8ece9] p-6 text-center shadow-sm">
            <div className="w-24 h-32 mx-auto mb-4 rounded-lg bg-[#f0faf4] flex items-center justify-center text-4xl border border-[#d0e0d4]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3 className="font-bold text-base text-[#1a1a1a] mb-1">SharonPly Product Catalogue</h3>
            <p className="text-xs text-[#5a5a5a] mb-4">Complete overview of SharonPly plywood, veneer, doors, and product solutions.</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => setPreview(catalogues[0])} className="text-xs font-semibold px-4 py-2 rounded-lg border border-[#e0e4e0] text-[#00793A] hover:bg-[#f0faf4] transition-all">View</button>
              <button className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#00793A] text-white hover:bg-[#005c2c] transition-all">Download</button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b border-[#e8ece9]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search catalogues, brochures, plywood, veneer, doors..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e0e4e0] bg-[#fafafa] text-sm text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#00793A]/20 focus:border-[#00793A] transition-all"
              />
            </div>
          </div>
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  activeFilter === f
                    ? "bg-[#00793A] text-white border-[#00793A] shadow-sm"
                    : "bg-white text-[#5a5a5a] border-[#e0e4e0] hover:border-[#00793A] hover:text-[#00793A]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Catalogues Grid */}
      <section className="py-14 bg-white" id="catalogues">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#00793A] mb-2">Resources</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#020202]">Product Catalogues & Brochures</h2>
            <p className="text-[#5a5a5a] text-sm mt-2 max-w-xl mx-auto">Browse and download catalogues by product category</p>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#9ca3af] text-sm">No catalogues found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#e8ece9] bg-white hover:shadow-md transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-16 rounded-lg bg-[#f0faf4] flex items-center justify-center text-2xl border border-[#d0e0d4] flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-[#1a1a1a]">{cat.name}</h3>
                      <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f0faf4] text-[#00793A] inline-block mt-1">{cat.category}</span>
                      <p className="text-xs text-[#5a5a5a] mt-2">{cat.desc}</p>
                      <p className="text-[9px] text-[#5a5a5a] mt-1">File: {cat.file}</p>
                      <div className="flex gap-2 mt-3">
                        <button onClick={() => setPreview(cat)} className="text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-[#e0e4e0] text-[#00793A] hover:bg-[#f0faf4] transition-all">View</button>
                        <button className="text-[10px] font-semibold px-3 py-1.5 rounded-lg bg-[#00793A] text-white hover:bg-[#005c2c] transition-all">Download</button>
                      </div>
                      {cat.productLink && (
                        <a href={cat.productLink} className="text-[9px] font-semibold text-[#00793A] hover:underline mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                          {cat.productLabel} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Preview Modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setPreview(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-base text-[#1a1a1a]">{preview.name}</h3>
              <button onClick={() => setPreview(null)} className="w-8 h-8 rounded-full bg-[#f3f4f3] flex items-center justify-center hover:bg-[#e5e7e5] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a5a5a" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div className="rounded-xl bg-[#f9fafb] p-8 flex items-center justify-center border border-[#e8ece9] mb-4">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="1.2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <p className="text-xs text-[#5a5a5a] mb-4">{preview.desc}</p>
            <div className="flex gap-3">
              <button className="flex-1 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#00793A] text-white hover:bg-[#005c2c] transition-all">Download PDF</button>
              <button onClick={() => setPreview(null)} className="text-xs font-semibold px-4 py-2.5 rounded-xl border border-[#e0e4e0] text-[#5a5a5a] hover:bg-[#f3f4f3] transition-all">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
