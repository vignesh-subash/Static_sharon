"use client";

import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface InnerPageLayoutProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle?: string;
  heroImage?: string;
  children: React.ReactNode;
}

export default function InnerPageLayout({
  breadcrumbs,
  title,
  subtitle,
  heroImage,
  children,
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen">
        <style>{`
          .inner-hero { height: 38vw; min-height: 200px; max-height: 280px; }
          @media (min-width: 768px) { .inner-hero { height: 60vh; min-height: 340px; max-height: 560px; } }
        `}</style>
        {/* Hero Banner */}
        <section className="inner-hero relative overflow-hidden">
          {/* Background image / gradient */}
          <div className="absolute inset-0">
            {heroImage ? (
              <img src={heroImage} alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
            ) : (
              <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 60%, #003d1e 100%)" }} />
            )}
            {/* Multi-layer overlay for depth */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,50,20,0.72) 60%, rgba(0,40,16,0.90) 100%)" }} />
            {/* Subtle green tint layer */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,121,58,0.35) 0%, transparent 60%)" }} />
          </div>

          {/* Decorative geometric shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #ffc107 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #00793A 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

          {/* Glassmorphic content card */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-3 md:mb-5">
              <ol className="flex items-center flex-wrap justify-center gap-1 text-sm">
                <li>
                  <Link href="/" className="text-white/60 hover:text-white transition-colors text-xs tracking-wide">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {crumb.href ? (
                      <Link href={crumb.href} className="text-white/60 hover:text-white transition-colors text-xs tracking-wide">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white/80 font-medium text-xs tracking-wide">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Glassmorphic title block */}
            <div className="px-4 sm:px-10 py-4 sm:py-8 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 12px 48px rgba(0,0,0,0.35)" }}>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 24px rgba(0,0,0,0.45)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mt-1 md:mt-2 hidden sm:block">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Gold accent line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg, transparent 0%, #ffc107 30%, #ffc107 70%, transparent 100%)" }} />
        </section>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
