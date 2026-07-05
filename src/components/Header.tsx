"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useHydrated } from "@/hooks/useHydrated";
import Link from "next/link";
import SearchBar from "./SearchBar";

/* ── Shared SVG helpers (avoids inline duplication) ── */
const ChevronDown = ({ className }: { className?: string }) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const ChevronDownSm = ({ className }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const ArrowRight = ({ className }: { className?: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
  </svg>
);

/* ── Shared image error handlers (avoids new fn per render) ── */
const onImgErrorFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.currentTarget as HTMLImageElement).src = "/images/sharon-corporate-logo.webp";
};
const onImgErrorHide = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.currentTarget as HTMLImageElement).style.display = "none";
};

/* ══════════════════════════════════════════════
   NAVIGATION DATA
══════════════════════════════════════════════ */


const contactDropdown = [
  {
    label: "Find Us", href: "/contact",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    desc: "Locate our office",
  },
  {
    label: "Sales Team", href: "/contact/sales-team",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    desc: "Connect with our experts",
  },
  {
    label: "Dealers", href: "/dealers",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    desc: "Become a dealer partner",
  },
];

const moreDropdown = [
  {
    label: "Calendar", href: "/calendar",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    desc: "Annual calendar collection",
  },
  {
    label: "Testimonials", href: "/testimonials",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    desc: "What our clients say",
  },
  {
    label: "Media", href: "/media-press",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>,
    desc: "Press and media highlights",
  },
  {
    label: "Videos", href: "/videos",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
    desc: "Brand films & showcases",
  },
  {
    label: "Awards", href: "/awards-certifications",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    desc: "Recognition & credentials",
  },
  {
    label: "Catalogue", href: "/catalogue",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    desc: "Download brochures & assets",
  },
  {
    label: "Careers", href: "/careers",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
    desc: "Join our growing team",
  },
];

const plywoodWaterproof = [
  { name: "Sharon Platinum Ply", href: "/plywood/sharon-platinum-ply", tag: "Premium" },
  { name: "Sharon Gold", href: "/plywood/sharon-gold-marine-plywood", tag: "BWP" },
  { name: "Sharon Prima Armor", href: "/plywood/sharon-prima-710", tag: "" },
  { name: "Sovereign 710", href: "/plywood/sovereign-710", tag: "" },
  { name: "Kumki OEM BWP Ply", href: "/plywood/kumki-oem-bwp-ply", tag: "OEM" },
];

const plywoodWaterResistant = [
  { name: "Sovereign MR", href: "/plywood/sovereign-mr", tag: "MR" },

];

const veneerProducts = [
  { name: "Sharon Exoti Natura", href: "/veneer/exotic-natura", tag: "Natural", desc: "Natural Decorative Veneer" },
  { name: "Sharon Exoti Aura", href: "/veneer/sharon-exoti-aura", tag: "Reconstituted", desc: "Reconstituted Decorative Veneer" },
];

const doorProducts = [
  { name: "Sharon Gold Door", href: "/door/sharon-gold-door", tag: "Premium BWP" },
  { name: "Sovereign Door", href: "/door/sovereign-door", tag: "" },
];

const megaCategories = [
  {
    label: "VENEER",
    href: "/veneer",
    products: veneerProducts,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 4c4 4 8 12 16 16" />
      </svg>
    ),
  },
  {
    label: "DOORS",
    href: "/door",
    products: doorProducts,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2h12v20H6z" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const navItems = [
  { label: "ABOUT US", href: "/our-history" },
  { label: "OUR PRODUCTS", href: "/plywood", megaMenu: true },
  { label: "CSR", href: "/corporate-social-responsibility" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", dropdown: contactDropdown },
  { label: "MORE", dropdown: moreDropdown },
];

/* ══════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════ */
export default function Header() {
  const rawPath = usePathname();
  const hydrated = useHydrated();
  const activePath = hydrated ? rawPath : "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileProductExpanded, setMobileProductExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [enquirySent, setEnquirySent] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquiryOpen(false);
      setEnquirySent(false);
      setEnquiryForm({ name: "", email: "", phone: "", message: "" });
    }, 2200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  // Clean up pending close-timeout on unmount
  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const open = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const close = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  return (
    <header className={`sticky top-0 z-50 relative transition-shadow duration-300 ${scrolled ? "shadow-xl shadow-black/10" : ""}`}
      style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}>

      {/* ══ DESKTOP HEADER ══ */}
      <div className="bg-white border-b border-gray-200 hidden lg:block">

        {/* ── Full header (default state) ── */}
        <div className="max-w-screen-xl mx-auto px-4 xl:px-10 flex items-stretch">

          {/* LEFT — Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 pr-4"
          >
            <img
              src="/images/sharon-corporate-logo.webp"
              alt="SharonPly"
              width={308}
              height={85}
              className="w-auto object-contain"
              style={{ height: 85 }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }}
            />
          </Link>

          {/* CENTER — Two rows stacked */}
          <div className="flex flex-col flex-1">

            {/* ROW 1 — Search + Contact */}
            <div className="flex items-center justify-between gap-4 h-[58px] border-b border-gray-100">
              <div className="flex-1">
                <SearchBar />
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Phone pill */}
                <div className="flex items-center rounded-full overflow-hidden"
                  style={{ border: "1.5px solid rgba(0,121,58,0.18)", boxShadow: "0 2px 10px rgba(0,121,58,0.06)" }}>
<a href="https://wa.me/914439403950" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
                    className="flex items-center justify-center transition-colors hover:bg-[#25D366]/10 self-stretch px-3 py-1.5">
                    <span className="flex items-center justify-center rounded-full"
                      style={{ width: 26, height: 26, background: "rgba(37,211,102,0.15)", color: "#25D366" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                    </span>
                  </a>
                </div>
                {/* Enquiry button */}
                <button onClick={() => setEnquiryOpen(true)} aria-label="Send Enquiry"
                  className="flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-80 active:scale-95"
                  style={{ width: 34, height: 34, background: "#00793A", color: "#fff" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  
                </button>
              </div>
            </div>

            {/* ROW 2 — Nav bar (white, dark text, green active underline) */}
            <nav className="static" style={{ height: 46 }} aria-label="Main navigation">
              <ul className="flex items-center justify-center h-full" role="menubar" style={{ gap: 3 }}>
                {navItems.map((item, itemIdx) => {
                  const isActive = item.href
                    ? activePath === item.href
                    : activePath.startsWith(`/${item.label.toLowerCase().replace(/ /g, "-")}`);
                  const isOpen = activeDropdown === item.label;
                  const cols = item.dropdown ? (item.dropdown.length > 4 ? 2 : 1) : 1;
                  // Anchor right-side dropdowns to right edge so they don't overflow viewport
                  const dropAlign = itemIdx >= navItems.length - 2 ? "right-0" : "left-0";

                  return (
                    <li key={item.label} className="relative flex items-stretch" role="none"
                      onMouseEnter={() => open(item.label)} onMouseLeave={close}>
                      {item.href ? (
                        <Link href={item.href} role="menuitem"
                          aria-haspopup={item.dropdown || item.megaMenu ? "true" : undefined}
                          aria-expanded={item.dropdown || item.megaMenu ? isOpen : undefined}
                          className="nav-item-link group relative flex items-center justify-center gap-1.5 text-[15px] font-bold transition-colors duration-200 px-2.5"
                          style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)', letterSpacing: "1.2px", textTransform: "uppercase", color: isActive || isOpen ? "#00793A" : "#1a1a1a" }}>
                          {item.label}
                          {(item.dropdown || item.megaMenu) && (
                            <ChevronDown className={`transition-transform duration-200 mt-0.5 ${isOpen ? "rotate-180" : ""}`} />
                          )}
                          <span className="nav-underline absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300 origin-left"
                            style={{ background: "#00793A", transform: isActive || isOpen ? "scaleX(1)" : "scaleX(0)" }} />
                        </Link>
                      ) : (
                        <button role="menuitem" aria-haspopup="true" aria-expanded={isOpen}
                          className="nav-item-btn group relative flex items-center justify-center gap-1.5 text-[15px] font-bold transition-colors duration-200 px-2.5"
                          style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)', letterSpacing: "1.2px", textTransform: "uppercase", color: isActive || isOpen ? "#00793A" : "#1a1a1a" }}>
                          {item.label}
                          <ChevronDown className={`transition-transform duration-200 mt-0.5 ${isOpen ? "rotate-180" : ""}`} />
                          <span className="nav-underline absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300 origin-left"
                            style={{ background: "#00793A", transform: isActive || isOpen ? "scaleX(1)" : "scaleX(0)" }} />
                        </button>
                      )}

                      {/* ── Simple dropdown — sits directly below this li ── */}
                      {item.dropdown && isOpen && (
                        <div className={`absolute top-full ${dropAlign} z-50 pt-1`}
                          style={{ animation: "dropFadeIn 0.18s cubic-bezier(0.16,1,0.3,1) forwards", minWidth: cols === 2 ? 480 : 240 }}>
                          <div className="bg-white rounded-2xl overflow-hidden"
                            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.16)", border: "1px solid rgba(0,0,0,0.06)" }}>
                            <div className="h-[3px] bg-gradient-to-r from-[#00793A] via-[#ffc107] to-[#00793A]" />
                            <div className="py-2 px-2" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 2 }}>
                              {item.dropdown.map((sub) => (
                                <Link key={sub.label} href={sub.href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#00793A]/5 transition-all duration-150 group"
                                  onClick={() => setActiveDropdown(null)}>
                                  <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ background: "rgba(0,121,58,0.08)", color: "#00793A" }}>
                                    {sub.icon}
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-[13px] font-semibold text-gray-800 group-hover:text-[#00793A] transition-colors leading-tight whitespace-nowrap">{sub.label}</span>
                                    {sub.desc && <span className="block text-[11px] text-gray-400 leading-tight mt-0.5">{sub.desc}</span>}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── Mega menu — sits directly below this li ── */}
                      {item.megaMenu && isOpen && (
                        <div className={`absolute top-full ${dropAlign} z-50 pt-1`}
                          style={{ animation: "dropFadeIn 0.2s cubic-bezier(0.16,1,0.3,1) forwards" }}>
                          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.18)", border: "1px solid rgba(0,0,0,0.06)" }}>
                            <div className="h-[3px] bg-gradient-to-r from-[#00793A] via-[#ffc107] to-[#00793A]" />
                            <div className="px-5 py-5" style={{ display: "grid", gridTemplateColumns: "300px 240px 240px", gap: 0 }}>
                              {/* ── COL 1: PLYWOOD ── */}
                              <div className="pr-5 border-r border-gray-100">
                                <Link href="/plywood" className="flex items-center gap-2 mb-4 group">
                                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-extrabold text-white tracking-[1px] uppercase"
                                    style={{ background: "#00793A", fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" />
                                    </svg>
                                    Sharon Plywood
                                  </span>
                                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00793A]" />
                                </Link>
                                {/* Waterproof group */}
                                <div className="mb-3">
                                  <div className="flex items-center gap-1.5 mb-1.5 px-2">
                                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full flex-shrink-0" style={{ background: "#e0f2fe", color: "#0ea5e9" }}>
                                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                                      </svg>
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#0ea5e9]">Waterproof</span>
                                  </div>
                                  <div className="flex flex-col gap-0.5">
                                    {plywoodWaterproof.map((p) => (
                                      <Link key={p.name} href={p.href}
                                        className="group flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-[#00793A]/5 transition-all duration-150">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00793A]/20 group-hover:bg-[#ffc107] transition-colors flex-shrink-0" />
                                        <span className="text-[13px] font-medium text-gray-700 group-hover:text-[#00793A] transition-colors whitespace-nowrap">{p.name}</span>
                                        {p.tag && <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-[#ffc107]/20 text-[#8B6914] font-semibold flex-shrink-0">{p.tag}</span>}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                                {/* Water Resistant group */}
                                <div>
                                  <div className="flex items-center gap-1.5 mb-1.5 px-2">
                                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full flex-shrink-0" style={{ background: "#ede9fe", color: "#6366f1" }}>
                                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                      </svg>
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6366f1]">Water Resistant</span>
                                  </div>
                                  <div className="flex flex-col gap-0.5">
                                    {plywoodWaterResistant.map((p) => (
                                      <Link key={p.name} href={p.href}
                                        className="group flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-[#00793A]/5 transition-all duration-150">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00793A]/20 group-hover:bg-[#ffc107] transition-colors flex-shrink-0" />
                                        <span className="text-[13px] font-medium text-gray-700 group-hover:text-[#00793A] transition-colors whitespace-nowrap">{p.name}</span>
                                        {p.tag && <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-[#ffc107]/20 text-[#8B6914] font-semibold flex-shrink-0">{p.tag}</span>}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              {/* ── COL 2: VENEER ── */}
                              <MegaCol cat={megaCategories[0]} />
                              {/* ── COL 3: DOORS ── */}
                              <MegaCol cat={megaCategories[1]} isLast />
                            </div>
                          </div>
                        </div>
                      )}

                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>{/* end right col */}
          {/* RIGHT — Follow Us + Social Icons */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 ml-2"
            style={{ borderLeft: "1px solid #efefef" }}>
            <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-gray-500 mb-2"
              style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}>
              Follow us on
            </span>
            <div className="flex flex-row items-center gap-2">
              {/* Instagram */}
              <a href="https://www.instagram.com/sharonplyindia/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-80"
                aria-label="Instagram"
                style={{ width: 28, height: 28, background: "rgba(0,121,58,0.08)", color: "#00793A" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/sharonply/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-80"
                aria-label="YouTube"
                style={{ width: 28, height: 28, background: "rgba(0,121,58,0.08)", color: "#00793A" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/>
                </svg>
              </a>
              {/* WhatsApp Channel */}
              <a href="https://wa.me/914439403950" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-80"
                aria-label="WhatsApp Channel"
                style={{ width: 28, height: 28, background: "rgba(0,121,58,0.08)", color: "#00793A" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE TOP BAR ══ */}
      <div className="lg:hidden flex items-center justify-between px-4 bg-white border-b border-gray-200" style={{ height: 64 }}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/sharon-corporate-logo.webp"
            alt="SharonPly"
            width={224}
            height={56}
            className="h-[56px] w-auto object-contain"
          />
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a href="https://wa.me/914439403950" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="flex items-center justify-center rounded-full"
            style={{ width: 36, height: 36, background: "rgba(37,211,102,0.15)", color: "#25D366" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>
          <button onClick={() => setEnquiryOpen(true)} aria-label="Enquiry"
            className="flex items-center justify-center rounded-full text-white"
            style={{ width: 36, height: 36, background: "#00793A" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
            className="flex items-center justify-center rounded-lg transition-colors"
            style={{ width: 36, height: 36, color: "#1a1a1a" }}>
            {mobileOpen
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            }
          </button>
        </div>
      </div>

      {/* ══ MOBILE MENU ══ */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ top: 64 }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute left-0 top-0 bottom-0 w-[85vw] max-w-sm bg-white overflow-y-auto transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{ boxShadow: "4px 0 30px rgba(0,0,0,0.15)" }}
        >
          {/* Green strip */}
          <div className="bg-[#00793A] px-5 py-4">
            <img src="/images/sharon-corporate-logo.webp" alt="SharonPly" width={202} height={62} className="h-[62px] w-auto object-contain rounded" />
          </div>

          {/* Search */}
          <div className="px-4 pt-4 pb-2">
            <SearchBar />
          </div>

          {/* Nav items */}
          <div className="py-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                {item.href && !item.dropdown && !item.megaMenu ? (
                  <Link
                    href={item.href}
                    className="flex items-center px-5 py-4 text-[13px] font-semibold text-gray-800 hover:text-[#00793A] hover:bg-[#00793A]/5 transition-colors"
                    style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)', letterSpacing: "0.4px" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="flex items-stretch">
                      {item.href && (
                        <Link
                          href={item.href}
                          className="flex items-center flex-1 px-5 py-4 text-[15px] font-bold text-gray-800 hover:text-[#00793A] hover:bg-[#00793A]/5 transition-colors uppercase"
                          style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)', letterSpacing: "1.2px" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className={`flex items-center justify-center px-4 py-4 text-gray-800 hover:text-[#00793A] hover:bg-[#00793A]/5 transition-colors ${!item.href ? "flex-1 justify-between px-5" : "border-l border-gray-100"}`}
                        style={{ fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)', letterSpacing: "1.2px" }}
                      >
                        {!item.href && <span className="text-[15px] font-bold uppercase">{item.label}</span>}
                        <ChevronDownSm className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Simple dropdown */}
                    {item.dropdown && mobileExpanded === item.label && (
                      <div className="bg-[#f9fafb] px-3 pb-3 pt-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-[#00793A]/5 transition-colors group"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{ background: "rgba(0,121,58,0.08)", color: "#00793A" }}>
                              {sub.icon}
                            </span>
                            <span>
                              <span className="block text-[13px] font-semibold text-gray-700 group-hover:text-[#00793A] leading-tight">{sub.label}</span>
                              {sub.desc && <span className="block text-[11px] text-gray-400 leading-tight">{sub.desc}</span>}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mega menu mobile — accordion per category */}
                    {item.megaMenu && mobileExpanded === item.label && (
                      <div className="bg-[#f9fafb] px-4 pb-4">

                        {/* Sharon Plywood accordion */}
                        <div className="mt-2 border border-gray-100 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setMobileProductExpanded(mobileProductExpanded === "PLYWOOD" ? null : "PLYWOOD")}
                            className="flex items-center justify-between w-full px-4 py-3 bg-white hover:bg-[#00793A]/5 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-md bg-[#00793A]/10 flex items-center justify-center text-[#00793A]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>
                              </div>
                              <span className="text-[12px] font-bold text-[#00793A] tracking-[0.8px] uppercase">Sharon Plywood</span>
                            </div>
                            <ChevronDownSm className={`transition-transform duration-200 text-gray-400 ${mobileProductExpanded === "PLYWOOD" ? "rotate-180" : ""}`} />
                          </button>
                          {mobileProductExpanded === "PLYWOOD" && (
                            <div className="px-4 pb-3 bg-white border-t border-gray-50">
                              {/* Waterproof group */}
                              <div className="flex items-center gap-1.5 mt-3 mb-1.5">
                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full flex-shrink-0" style={{ background: "#e0f2fe", color: "#0ea5e9" }}>
                                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#0ea5e9]">Waterproof</span>
                              </div>
                              {plywoodWaterproof.map((p) => (
                                <Link key={p.name} href={p.href}
                                  className="flex items-center gap-2.5 py-2 text-sm text-gray-600 hover:text-[#00793A] transition-colors border-b border-gray-50 last:border-0"
                                  onClick={() => setMobileOpen(false)}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                                  <span className="flex-1">{p.name}</span>
                                  {p.tag && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#ffc107]/20 text-[#8B6914] font-semibold">{p.tag}</span>}
                                </Link>
                              ))}
                              {/* Water Resistant group */}
                              <div className="flex items-center gap-1.5 mt-3 mb-1.5">
                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full flex-shrink-0" style={{ background: "#ede9fe", color: "#6366f1" }}>
                                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6366f1]">Water Resistant</span>
                              </div>
                              {plywoodWaterResistant.map((p) => (
                                <Link key={p.name} href={p.href}
                                  className="flex items-center gap-2.5 py-2 text-sm text-gray-600 hover:text-[#00793A] transition-colors border-b border-gray-50 last:border-0"
                                  onClick={() => setMobileOpen(false)}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                                  <span className="flex-1">{p.name}</span>
                                  {p.tag && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#ffc107]/20 text-[#8B6914] font-semibold">{p.tag}</span>}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Veneer & Doors accordions */}
                        {megaCategories.map((cat) => (
                          <div key={cat.label} className="mt-2 border border-gray-100 rounded-xl overflow-hidden">
                            <button
                              onClick={() => setMobileProductExpanded(mobileProductExpanded === cat.label ? null : cat.label)}
                              className="flex items-center justify-between w-full px-4 py-3 bg-white hover:bg-[#00793A]/5 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-[#00793A]/10 flex items-center justify-center text-[#00793A]">
                                  {cat.icon}
                                </div>
                                <span className="text-[12px] font-bold text-[#00793A] tracking-[0.8px] uppercase">Sharon {cat.label}</span>
                              </div>
                              <ChevronDownSm className={`transition-transform duration-200 text-gray-400 ${mobileProductExpanded === cat.label ? "rotate-180" : ""}`} />
                            </button>
                            {mobileProductExpanded === cat.label && (
                              <div className="px-4 pb-3 bg-white border-t border-gray-50">
                                {cat.products.map((p) => (
                                  <Link key={p.name} href={p.href}
                                    className="flex items-start gap-2.5 py-2.5 text-sm text-gray-600 hover:text-[#00793A] transition-colors border-b border-gray-50 last:border-0"
                                    onClick={() => setMobileOpen(false)}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0 mt-1" />
                                    <span className="flex-1">
                                      <span className="block">{p.name}</span>
                                      {"desc" in p && p.desc && <span className="block text-[11px] text-gray-400">{p.desc}</span>}
                                    </span>
                                    {p.tag && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#ffc107]/20 text-[#8B6914] font-semibold mt-0.5">{p.tag}</span>}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile contact footer */}
          <div className="px-5 py-5 bg-[#f9fafb] border-t border-gray-100 mt-2">
            <a href="tel:+914439403950" className="flex items-center gap-3 py-2 text-sm text-gray-700">
              <span className="w-8 h-8 rounded-full bg-[#00793A]/10 flex items-center justify-center text-[#00793A] flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span>
                <span className="block text-[9px] text-gray-400 uppercase tracking-wide">Call Us</span>
                <span className="block font-bold text-[#020202] text-sm">+91 44 3940 3950</span>
              </span>
            </a>
            <a href="mailto:admin@sharonply.com" className="flex items-center gap-3 py-2 text-sm text-gray-700">
              <span className="w-8 h-8 rounded-full bg-[#00793A]/10 flex items-center justify-center text-[#00793A] flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span className="font-medium">admin@sharonply.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* ══ ENQUIRY MODAL ══ */}
      {enquiryOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(2,8,4,0.55)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setEnquiryOpen(false); }}
        >
          <div
            className="relative w-full bg-white rounded-2xl overflow-hidden"
            style={{
              maxWidth: 480,
              boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
              animation: "modalSlideUp 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards",
            }}
          >
            {/* Top accent */}
            <div style={{ height: 4, background: "linear-gradient(90deg, #00793A 0%, #ffc107 50%, #00793A 100%)" }} />

            <div className="p-7">
              {/* Header row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3
                    className="text-xl font-bold text-[#020202] mb-1"
                    style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}
                  >
                    Quick Enquiry
                  </h3>
                  <p className="text-[12px] text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setEnquiryOpen(false)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {enquirySent ? (
                <div className="flex flex-col items-center py-8 gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,121,58,0.1)" }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-base font-bold text-[#020202]">Enquiry Sent!</p>
                  <p className="text-[13px] text-gray-500 text-center">Thank you. Our team will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl text-[13px] text-gray-800 placeholder-gray-400 outline-none transition-all"
                        style={{
                          border: "1.5px solid #e5e7eb",
                          fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#00793A")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl text-[13px] text-gray-800 placeholder-gray-400 outline-none transition-all"
                        style={{ border: "1.5px solid #e5e7eb", fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#00793A")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl text-[13px] text-gray-800 placeholder-gray-400 outline-none transition-all"
                      style={{ border: "1.5px solid #e5e7eb", fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00793A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about your requirement..."
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl text-[13px] text-gray-800 placeholder-gray-400 outline-none transition-all resize-none"
                      style={{ border: "1.5px solid #e5e7eb", fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#00793A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-white text-[13px] font-bold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)",
                      boxShadow: "0 4px 14px rgba(0,121,58,0.3)",
                      fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)',
                    }}
                  >
                    Send Enquiry →
                  </button>
                  <p className="text-center text-[10px] text-gray-400">
                    Or call us at{" "}
                    <a href="tel:+914439403950" className="font-semibold text-[#00793A]">+91 44 3940 3950</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-item-link:hover .nav-underline,
        .nav-item-btn:hover .nav-underline { transform: scaleX(1) !important; }
        header, header *, header button, header a, header span, header input, header textarea, header label {
          font-family: "Swiss 721 Condensed", var(--font-barlow-condensed) !important;
        }
        header h1, header h2, header h3 {
          font-family: var(--font-display) !important;
        }
      `}</style>
    </header>
  );
}

/* ══ HELPER: Shared column for Veneer / Doors / Teak ══ */
function MegaCol({
  cat,
  isLast,
}: {
  cat: typeof megaCategories[number];
  isLast?: boolean;
}) {
  return (
    <div className={`px-5 ${isLast ? "" : "border-r border-gray-100"}`}>
      <Link href={cat.href} className="flex items-center gap-2 mb-4 group">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-extrabold text-white tracking-[1px] uppercase whitespace-nowrap"
          style={{ background: "#00793A", fontFamily: '"Swiss 721 Condensed", var(--font-barlow-condensed)' }}>
          {cat.icon}
          Sharon {cat.label}
        </span>
        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00793A]" />
      </Link>

      {/* Products list */}
      <div className="space-y-0.5">
        {cat.products.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="flex items-center gap-2 px-2 py-2 rounded-lg text-[13px] text-gray-600 hover:text-[#00793A] hover:bg-[#00793A]/5 transition-all duration-150 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00793A]/20 group-hover:bg-[#ffc107] transition-colors flex-shrink-0" />
            <span className="whitespace-nowrap font-medium">{p.name}</span>
            {p.tag && (
              <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-[#ffc107]/20 text-[#8B6914] font-semibold flex-shrink-0">{p.tag}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
