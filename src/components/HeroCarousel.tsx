"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Image assets ───────────────────────────────────────────────── */
const IMG_INTRO    = "/images/sharon-factory-aerial.jpg";
const IMG_PLYWOOD  = "/images/hero-slide1-interior.jpg";
const IMG_VENEER   = "/images/veneer-slide-2.jpg";
const IMG_DOOR     = "/images/hero-slide3-interior.jpg";

/* ─── Slide definitions ──────────────────────────────────────────── */
const TOTAL = 4;
const TRANSITION_MS = 900;
const SLIDE_DELAYS = [9000, 8000, 8000, 8000] as const;
const getDelay = (idx: number) => SLIDE_DELAYS[idx] ?? 8000;


/* ─── Static SSR placeholder ─────────────────────────────────────── */
function HeroPlaceholder() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 480, background: "#020202" }}
    >
      <img src="/images/sharon-factory-aerial.jpg" alt="SharonPly" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,rgba(2,8,4,0.65) 0%,rgba(2,8,4,0.1) 60%,transparent 80%)" }} />
    </div>
  );
}

/* ─── Inner carousel ─────────────────────────────────────────────── */
function HeroCarouselInner() {
  const [current, setCurrent]       = useState(0);
  const [transitioning, setTrans]   = useState(false);
  const [paused, setPaused]         = useState(false);
  const [progress, setProgress]     = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoRef     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    if (transitioning || next === current) return;
    setTrans(true);
    setProgress(0);
    setTimeout(() => { setCurrent(next); setTrans(false); }, TRANSITION_MS);
  }, [current, transitioning]);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    autoRef.current = setTimeout(() => goTo((current + 1) % TOTAL), getDelay(current));
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  }, [current, paused, goTo]);

  /* Progress bar */
  useEffect(() => {
    if (paused) { if (progressRef.current) clearInterval(progressRef.current); return; }
    setProgress(0);
    const step = 100 / (getDelay(current) / 50);
    progressRef.current = setInterval(() => {
      setProgress(p => { if (p >= 100) { if (progressRef.current) clearInterval(progressRef.current); return 100; } return p + step; });
    }, 50);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [current, paused]);

  /* Swipe */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - (touchStartY.current ?? 0);
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      goTo(dx < 0 ? (current + 1) % TOTAL : (current - 1 + TOTAL) % TOTAL);
    }
    touchStartX.current = null; touchStartY.current = null;
  };

  const ss = (idx: number): React.CSSProperties => ({
    position: "absolute", inset: 0,
    transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.25,0.1,0.15,1)`,
    opacity: current === idx ? 1 : 0,
    pointerEvents: current === idx ? "auto" : "none",
  });

  const headStyle = (accent?: string): React.CSSProperties => ({
    fontFamily: "var(--font-display)",
    fontSize: "clamp(2.1rem, 4vw, 4.4rem)",
    fontWeight: 900,
    lineHeight: 1.05,
    color: accent ?? "#fff",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: 0,
  });

  return (
    <section
      className="relative w-full overflow-hidden select-none"
      style={{ height: "100vh", minHeight: 480 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero carousel"
    >

      {/* ════════════════════════════════════
          SLIDE 1 — Brand / Legacy
         ════════════════════════════════════ */}
      <div style={ss(0)} aria-hidden={current !== 0}>
        <img src={IMG_INTRO} alt="SharonPly premium interior" className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: current === 0 ? "scale(1.04)" : "scale(1)", transition: "transform 14s cubic-bezier(0.25,0.1,0.15,1)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg,rgba(2,8,4,0.60) 0%,rgba(2,8,4,0.35) 30%,rgba(2,8,4,0.15) 50%,rgba(2,8,4,0.04) 70%,transparent 85%)" }} />
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "clamp(28px,6vw,90px)", paddingRight: 24 }}>
          <div style={{ maxWidth: "clamp(300px,38vw,560px)" }} className="hc-s1">
            <h1 style={headStyle()}>
              INDIA&apos;S LARGEST<br />
              <span style={{ color: "#ffc107" }}>PLYWOOD</span><br />
              MANUFACTURING FACILITY
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,121,58,0.2)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#00793A" stroke="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Gummidipoondi</span>
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          SLIDE 2 — Strength / Performance
         ════════════════════════════════════ */}
      <div style={ss(1)} aria-hidden={current !== 1}>
        <img src={IMG_PLYWOOD} alt="Premium home interior with plywood" className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: current === 1 ? "scale(1.04)" : "scale(1)", transition: "transform 14s cubic-bezier(0.25,0.1,0.15,1)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg,rgba(2,8,4,0.60) 0%,rgba(2,8,4,0.35) 30%,rgba(2,8,4,0.15) 50%,rgba(2,8,4,0.04) 70%,transparent 85%)" }} />
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "clamp(28px,6vw,90px)", paddingRight: 24 }}>
          <div style={{ maxWidth: "clamp(300px,38vw,560px)" }} className={`hc-s${current === 1 ? (current % 2 === 0 ? 1 : 2) : 0}`}>
            <h1 style={headStyle()}>
              SHARON<br />
              <span style={{ color: "#ffc107" }}>PLYWOOD</span>
            </h1>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          SLIDE 3 — Technology / Safety
         ════════════════════════════════════ */}
      <div style={ss(2)} aria-hidden={current !== 2}>
        <img src={IMG_VENEER} alt="Veneer texture and grain detail" className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: current === 2 ? "scale(1.04)" : "scale(1)", transition: "transform 14s cubic-bezier(0.25,0.1,0.15,1)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg,rgba(2,8,4,0.60) 0%,rgba(2,8,4,0.35) 30%,rgba(2,8,4,0.15) 50%,rgba(2,8,4,0.04) 70%,transparent 85%)" }} />
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "clamp(28px,6vw,90px)", paddingRight: 24 }}>
          <div style={{ maxWidth: "clamp(300px,38vw,560px)" }} className={`hc-s${current === 2 ? (current % 2 === 0 ? 1 : 2) : 0}`}>
            <h1 style={headStyle()}>
              SHARON<br />
              <span style={{ color: "#ffc107" }}>VENEER</span>
            </h1>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          SLIDE 4 — Professionals / Project Confidence
         ════════════════════════════════════ */}
      <div style={ss(3)} aria-hidden={current !== 3}>
        <img src={IMG_DOOR} alt="Architectural interior with doors" className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: current === 3 ? "scale(1.04)" : "scale(1)", transition: "transform 14s cubic-bezier(0.25,0.1,0.15,1)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg,rgba(20,10,2,0.82) 0%,rgba(20,10,2,0.52) 36%,rgba(20,10,2,0.12) 65%,transparent 80%)" }} />
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "clamp(28px,6vw,90px)", paddingRight: 24 }}>
          <div style={{ maxWidth: "clamp(300px,38vw,560px)" }} className={`hc-s${current === 3 ? (current % 2 === 0 ? 1 : 2) : 0}`}>
            <h1 style={headStyle()}>
              SHARON<br />
              <span style={{ color: "#ffc107" }}>DOOR</span>
            </h1>

          </div>
        </div>
      </div>

      {/* ── Arrow navigation — always visible, single click ── */}
      {(["prev","next"] as const).map(dir => (
        <button key={dir}
          onClick={() => goTo(dir === "prev" ? (current - 1 + TOTAL) % TOTAL : (current + 1) % TOTAL)}
          aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
          className="absolute top-1/2 -translate-y-1/2 z-30"
          style={{
            [dir === "prev" ? "left" : "right"]: "clamp(10px,2vw,24px)",
            width: 48, height: 48, borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.25s cubic-bezier(0.22,1,0.36,1)",
          }}
          onMouseEnter={e => { e.currentTarget.style.background="rgba(0,121,58,0.7)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.4)"; e.currentTarget.style.transform="translateY(-50%) scale(1.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.22)"; e.currentTarget.style.transform="translateY(-50%)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={dir === "prev" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      ))}





      {/* ── Keyframe animations ── */}
      <style>{`
        .hc-s1 { animation: hcSlideL 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .hc-s2 { animation: hcSlideR 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        @keyframes hcSlideL { from { opacity:0; transform:translateX(-26px); } to { opacity:1; transform:translateX(0); } }
        @keyframes hcSlideR { from { opacity:0; transform:translateX(26px); } to { opacity:1; transform:translateX(0); } }
      `}</style>
    </section>
  );
}

/* ─── Main export ────────────────────────────────────────────────── */
export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <HeroPlaceholder />;
  return <HeroCarouselInner />;
}
