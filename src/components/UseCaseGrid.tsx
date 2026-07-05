"use client";
import Link from "next/link";
interface UseCase {
  num: string;
  title: string;
  href: string;
  icon: string;
}
const USE_CASES: UseCase[] = [
  { num: "01", title: "Kitchen Cabinets", href: "/plywood", icon: "kitchen" },
  { num: "02", title: "Wardrobes", href: "/plywood", icon: "wardrobe" },
  { num: "03", title: "Bathroom Vanities", href: "/plywood", icon: "vanity" },
  { num: "04", title: "Office Furniture", href: "/plywood", icon: "office" },
  { num: "05", title: "Commercial Interiors", href: "/plywood", icon: "commercial" },
  { num: "06", title: "Hospitality", href: "/plywood", icon: "hospitality" },
  { num: "07", title: "Retail & Displays", href: "/plywood", icon: "retail" },
  { num: "08", title: "Furniture Design", href: "/plywood", icon: "furniture" },
];

const USE_CASE_ICONS: Record<string, React.ReactNode> = {
  kitchen: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="28" height="20" rx="1.5" />
      <rect x="8" y="13" width="6" height="9" rx="0.8" />
      <rect x="18" y="13" width="6" height="9" rx="0.8" />
      <rect x="5" y="4" width="22" height="4" rx="1" />
      <line x1="16" y1="4" x2="16" y2="8" />
    </svg>
  ),
  wardrobe: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="26" height="28" rx="1.5" />
      <line x1="16" y1="2" x2="16" y2="30" />
      <rect x="6" y="6" width="7" height="9" rx="0.8" />
      <rect x="19" y="6" width="7" height="9" rx="0.8" />
      <circle cx="9.5" cy="12" r="1.2" strokeWidth="1.8" />
      <circle cx="22.5" cy="12" r="1.2" strokeWidth="1.8" />
    </svg>
  ),
  vanity: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="14" width="28" height="14" rx="1.5" />
      <rect x="6" y="17" width="8" height="6" rx="0.8" />
      <rect x="18" y="17" width="8" height="6" rx="0.8" />
      <rect x="10" y="3" width="12" height="11" rx="1.5" />
      <line x1="16" y1="3" x2="16" y2="14" />
    </svg>
  ),
  office: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="14" width="26" height="14" rx="1.5" />
      <polygon points="3,14 16,4 29,14" />
      <rect x="11" y="18" width="10" height="6" rx="0.8" />
      <rect x="11" y="26" width="10" height="3" rx="0.5" />
    </svg>
  ),
  commercial: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="12" height="20" rx="1.5" />
      <rect x="18" y="3" width="12" height="25" rx="1.5" />
      <rect x="5" y="12" width="6" height="5" rx="0.6" />
      <rect x="21" y="7" width="6" height="5" rx="0.6" />
      <rect x="5" y="20" width="4" height="3" rx="0.3" />
      <rect x="21" y="16" width="4" height="3" rx="0.3" />
      <rect x="27" y="16" width="3" height="3" rx="0.3" />
      <line x1="14" y1="28" x2="18" y2="28" />
    </svg>
  ),
  hospitality: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10" width="28" height="18" rx="1.5" />
      <polygon points="2,10 16,2 30,10" />
      <rect x="12" y="15" width="8" height="13" rx="0.8" />
      <rect x="6" y="14" width="4" height="4" rx="0.5" />
      <rect x="22" y="14" width="4" height="4" rx="0.5" />
    </svg>
  ),
  retail: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="10" width="26" height="18" rx="1.5" />
      <rect x="6" y="14" width="8" height="6" rx="0.6" />
      <rect x="18" y="14" width="8" height="6" rx="0.6" />
      <rect x="6" y="22" width="8" height="4" rx="0.5" />
      <rect x="18" y="22" width="8" height="4" rx="0.5" />
      <path d="M3 14 L10 4 L22 4 L29 14" />
    </svg>
  ),
  furniture: (
    <svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="12" width="22" height="16" rx="1.5" />
      <rect x="2" y="20" width="28" height="4" rx="0.8" />
      <line x1="8" y1="28" x2="8" y2="30" />
      <line x1="24" y1="28" x2="24" y2="30" />
      <rect x="5" y="4" width="22" height="8" rx="1" />
      <line x1="16" y1="4" x2="16" y2="6" />
    </svg>
  ),
};

export default function UseCaseGrid() {

  return (
    <section className="snap-section" style={{
      display: "flex",
      flexDirection: "column",
      background: "#FFFFFF",
      padding: 0,
      overflow: "hidden",
      }}>
      {/* Header */}
      <div style={{ padding: "52px 52px 28px", flexShrink: 0 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', var(--font-playfair)",
            fontSize: "clamp(27px, 2.7vw, 44px)",
            fontWeight: 700,
            color: "#00793A",
            lineHeight: 1.1,
          }}
        >
          Right Plywood for<br />every{' '}
          purpose.
        </h2>
      </div>
{/* 4x2 grid */}
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "1fr 1fr",
        gap: 0,
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: 5,
      }}>
        {USE_CASES.map((uc, i) => {
          return (
            <Link
              key={uc.num}
              href={uc.href}
              style={{
                background: "#FFFFFF",
                padding: "8px 6px",
                cursor: "pointer",
                textDecoration: "none",
                borderRight: "1px solid rgba(0,0,0,0.06)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                transition: "background 0.35s cubic-bezier(0.22,1,0.36,1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#0F0F0E";
                const title = el.querySelector('[data-uc-title]') as HTMLElement;
                const link = el.querySelector('[data-uc-link]') as HTMLElement;
                if (title) title.style.color = "#FFFFFF";
                if (link) link.style.color = "#ffc107";
                const icon = el.querySelector('[data-uc-icon]') as HTMLElement;
                if (icon) icon.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#FFFFFF";
                const title = el.querySelector('[data-uc-title]') as HTMLElement;
                const link = el.querySelector('[data-uc-link]') as HTMLElement;
                if (title) title.style.color = "#0F0F0E";
                if (link) link.style.color = "#00793A";
                const icon = el.querySelector('[data-uc-icon]') as HTMLElement;
                if (icon) icon.style.color = "#000000";
              }}
            >
              <div style={{ marginBottom: 6, color: "#000", transition: "color 0.35s cubic-bezier(0.22,1,0.36,1)" }} data-uc-icon>
                {USE_CASE_ICONS[uc.icon]}
              </div>
              <div
                data-uc-title
                style={{
                  fontFamily: "'Playfair Display', var(--font-playfair)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0F0F0E",
                  marginBottom: 4,
                  transition: "color 0.3s",
                  lineHeight: 1.3,
                }}
              >
                {uc.title}
              </div>
              <div
                data-uc-link
                style={{
                  fontFamily: "'DM Sans', var(--font-sans)",
                  fontSize: 10,
                  color: "#00793A",
                  letterSpacing: 1.2,
                  fontWeight: 600,
                  transition: "color 0.35s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                View Products →
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
