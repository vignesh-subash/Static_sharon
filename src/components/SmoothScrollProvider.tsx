"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    // Skip GSAP ScrollSmoother on the homepage — CSS scroll-snapping is used instead
    if (isHomepage) return;
    if (!wrapperRef.current || !contentRef.current) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.4,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });

    (window as any).__gsapSmoother = smoother;

    return () => {
      smoother.kill();
      delete (window as any).__gsapSmoother;
    };
  }, [isHomepage]);

  // Homepage renders natively (no overflow:hidden wrapper) so CSS scroll-snapping works
  if (isHomepage) {
    return <>{children}</>;
  }

  return (
    <div id="smooth-wrapper" ref={wrapperRef} style={{ overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0 }}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
