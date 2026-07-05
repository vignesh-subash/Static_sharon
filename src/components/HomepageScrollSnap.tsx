"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const SECTION_LABELS = [
  "SharonPly",
  "Solutions",
  "Applications",
  "Built For",
  "Testimonials",
  "Technology",
  "Videos",
  "Footer",
];

export default function HomepageScrollSnap({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const wheeling = useRef(false);
  const touchY = useRef(0);
  const childrenCount = useRef(0);

  // Find all snap targets: .snap-section + footer
  const getSectionElements = (): HTMLElement[] => {
    const snapSections = Array.from(document.querySelectorAll<HTMLElement>(".snap-section"));
    const footer = document.querySelector<HTMLElement>("footer");
    return footer ? [...snapSections, footer] : snapSections;
  };

  const scrollToSection = (index: number) => {
    const sections = getSectionElements();
    if (index < 0 || index >= sections.length) return;
    sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveIndex(index);
  };


  /* ── Class management (separate from scroll-jacking for reliable cleanup) ── */
  useEffect(() => {
    document.documentElement.classList.add("homepage-snap-active");
    return () => {
      document.documentElement.classList.remove("homepage-snap-active");
    };
  }, []);

  useEffect(() => {
    // ── Activate document-level scroll-snapping ──
    document.documentElement.classList.add("homepage-snap-active");

    const sections = getSectionElements();
    childrenCount.current = sections.length;

    // ── Intersection Observer to track active section ──
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActiveIndex(idx);
          }
        }
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));

    // ── Progress bar ──
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = Math.max(1, scrollHeight - clientHeight);
      setScrollProgress(Math.min(1, Math.max(0, scrollTop / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Scroll Jacking: Wheel ──
    const onWheel = (e: WheelEvent) => {
      const sections = getSectionElements();
      const lastIdx = sections.length - 1;
      // Allow native scroll on last section (footer) so bottom bar is reachable
      if (activeIndex >= lastIdx && e.deltaY > 0) return;
      if (activeIndex <= 0 && e.deltaY < 0) return;
      if (wheeling.current) {
        e.preventDefault();
        return;
      }
      wheeling.current = true;
      e.preventDefault();
      const next = activeIndex + (e.deltaY > 0 ? 1 : -1);
      scrollToSection(next);
      setTimeout(() => { wheeling.current = false; }, 900);
    };

    // ── Scroll Jacking: Touch ──
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (wheeling.current) return;
      const dy = touchY.current - e.changedTouches[0].clientY;
      const sections = getSectionElements();
      const lastIdx = sections.length - 1;
      // Allow native scroll on last section (footer) so bottom bar is reachable
      if (activeIndex >= lastIdx && dy > 0) return;
      if (activeIndex <= 0 && dy < 0) return;
      if (Math.abs(dy) < 40) return;
      wheeling.current = true;
      e.preventDefault();
      scrollToSection(activeIndex + (dy > 0 ? 1 : -1));
      setTimeout(() => { wheeling.current = false; }, 900);
    };

    // ── Scroll Jacking: Keyboard ──
    const onKey = (e: KeyboardEvent) => {
      if (wheeling.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(activeIndex + 1);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.classList.remove("homepage-snap-active");
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);

  const totalSections = SECTION_LABELS.length;

  return (
    <div className="homepage-scroll-snap" style={{ position: "static" }}>
      {/* ── Progress bar (top) ── */}
      <div
        className="hp-snap-progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, #00793A, #ffc107)",
          zIndex: 2147483647,
          transition: "width 0.2s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* ── Side navigation dots ── */}
      <nav
        className="hp-snap-nav"
        style={{
          position: "fixed",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          zIndex: 2147483647,
        }}
      >
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            aria-label={`Go to ${SECTION_LABELS[i] || `section ${i + 1}`}`}
            title={SECTION_LABELS[i]}
            style={{
              width: activeIndex === i ? 8 : 5,
              height: activeIndex === i ? 28 : 5,
              borderRadius: activeIndex === i ? 3 : "50%",
              background: activeIndex === i ? "#00793A" : "rgba(0,0,0,0.35)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              padding: 0,
              boxShadow: activeIndex === i ? "0 0 6px rgba(0,121,58,0.5)" : "none",
            }}
          />
        ))}
        {/* Active section label */}
        <span
          style={{
            marginTop: 8,
            fontSize: 10,
            fontWeight: 600,
            color: "#00793A",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            writingMode: "vertical-rl",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-sans)",
          }}
        >
          {SECTION_LABELS[activeIndex] || ""}
        </span>
      </nav>

      {/* Children render normally — scroll-snapping is on <html> */}
      {children}
    </div>
  );
}
