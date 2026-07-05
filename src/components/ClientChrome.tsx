"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const StickyFormBar        = dynamic(() => import("@/components/StickyFormBar"),              { ssr: false });
const PageLoader           = dynamic(() => import("@/components/PageLoader"),                 { ssr: false });
const ScrollToTop          = dynamic(() => import("@/components/ScrollToTop"),                { ssr: false });
const VisualEditsMessenger = dynamic(() => import("@/visual-edits/VisualEditsMessenger"),     { ssr: false });

export default function ClientChrome() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <>
      <PageLoader />
      {!isHomepage && <StickyFormBar />}
      
      <ScrollToTop />
      <VisualEditsMessenger />
    </>
  );
}
