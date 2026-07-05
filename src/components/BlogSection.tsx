"use client";

import { useRef, useEffect, useState } from "react";

const csrItems = [
  { icon: "🌱", title: "#GrowTheGreen", desc: "10-year reforestation drive planting thousands of trees across Tamil Nadu to restore green cover and combat climate change.", color: "#22c55e" },
  { icon: "☀️", title: "Solar Powered", desc: "1056 KV solar power plant at our facility saves approximately 1.5 million units of electricity per year, reducing carbon footprint.", color: "#f59e0b" },
  { icon: "🧪", title: "E-Zero Emission", desc: "CARB Phase 2 & EPA certified with formaldehyde emission ≤0.5 mg/L — ensuring healthier indoor air quality in every home.", color: "#06b6d4" },
  { icon: "💧", title: "#QuenchTheThirst", desc: "Over 1,000 water bowls distributed every summer for birds and stray animals across Chennai to help them survive the heat.", color: "#ec4899" },
  { icon: "🛡️", title: "Road Safety", desc: "Partnered with Big FM to distribute free helmets and promote road safety awareness among two-wheeler riders.", color: "#8b5cf6" },
  { icon: "♻️", title: "#iSayNoToPlastic", desc: "Annual paper bag distribution drives at Vandalur Zoo since 2009, encouraging visitors to go plastic-free for a cleaner environment.", color: "#00793A" },
];

const blogs = [
  {
    category: "Industry News",
    date: "Feb 10, 2026",
    title: "Why BWP Grade Plywood is Essential for Coastal Construction",
    excerpt:
      "Discover how Boiling Water Proof plywood protects structures in high-humidity coastal regions and why architects prefer it.",
    readTime: "5 min read",
    image:
      "/images/sharon-platinum-ply-card.jpg",
  },
  {
    category: "Product Guide",
    date: "Feb 5, 2026",
    title: "VIRASAFE Technology: The Future of Anti-Microbial Plywood",
    excerpt:
      "Learn about SharonPly's revolutionary VIRASAFE technology that provides 99.99% protection against viruses and bacteria.",
    readTime: "4 min read",
    image:
      "/images/hero-slide1-interior.jpg",
  },
  {
    category: "Tips & Tricks",
    date: "Jan 28, 2026",
    title: "How to Choose the Right Plywood for Your Interior Project",
    excerpt:
      "A comprehensive guide to selecting plywood grades, finishes, and thicknesses for residential and commercial interiors.",
    readTime: "6 min read",
    image:
      "/images/hero-slide3-interior.jpg",
  },
  {
    category: "Design Trends",
    date: "Jan 20, 2026",
    title: "Top 5 Wood Veneer Trends Transforming Modern Interiors in 2026",
    excerpt:
      "From natural oak to exotic teak veneers, explore the design trends shaping luxury interiors this year.",
    readTime: "4 min read",
    image:
      "/images/veneer-slide-1.jpg",
  },
  {
    category: "Sustainability",
    date: "Jan 12, 2026",
    title: "Sustainable Plywood: How SharonPly is Leading the Green Revolution",
    excerpt:
      "Our commitment to responsibly sourced timber and eco-friendly manufacturing processes for a greener tomorrow.",
    readTime: "5 min read",
    image:
      "/images/sharon-brand-story.jpg",
  },
];



export default function BlogSection({ showCsr = true, limit }: { showCsr?: boolean; limit?: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pauseMarquee, setPauseMarquee] = useState(false);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Duplicate items for seamless loop
  const marqueeItems = [...csrItems, ...csrItems];

  return (
    <section className="py-16 bg-white">
      {/* CSR Marquee Banner */}
      {showCsr && <div className="mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#00793A] tracking-widest uppercase">
              #iamstrongest
            </span>
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Our CSR Initiatives
            </span>
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setPauseMarquee(true)}
          onMouseLeave={() => setPauseMarquee(false)}
        >
          <div
            className="flex gap-6 w-max"
            style={{
                animation: "csrMarquee 60s linear infinite",
              animationPlayState: pauseMarquee ? "paused" : "running",
            }}
          >
              {marqueeItems.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[220px] h-[220px] p-5 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-default flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                        style={{ backgroundColor: item.color + "18" }}
                      >
                        {item.icon}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">{item.desc}</p>
                  </div>
                  <div
                    className="w-full h-1 rounded-full mt-3"
                    style={{ backgroundColor: item.color + "30" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color, width: "60%" }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>}

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-xs font-semibold text-[#00793A] tracking-widest uppercase">
              Knowledge Hub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              Latest from Our Blog
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00793A] hover:text-white hover:border-[#00793A] transition-all"
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00793A] hover:text-white hover:border-[#00793A] transition-all"
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {(limit ? blogs.slice(0, limit) : blogs).map((blog, i) => (
            <a
              key={i}
              href="/blog"
              className="group flex-shrink-0 w-[320px] md:w-[340px] bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#1B4332]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Fallback label — always rendered, visible only when image hidden */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-white/40">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#00793A] text-white text-[10px] font-semibold rounded-full uppercase tracking-wide">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-3">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-2 line-clamp-2 group-hover:text-[#00793A] transition-colors">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#00793A] group-hover:gap-2 transition-all duration-200">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      </section>
  );
}
