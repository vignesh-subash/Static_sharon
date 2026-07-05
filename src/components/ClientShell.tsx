"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ClientChrome = dynamic(() => import("@/components/ClientChrome"), { ssr: false });
const SmoothScrollProvider = dynamic(() => import("@/components/SmoothScrollProvider"), { ssr: false });

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScrollProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </SmoothScrollProvider>
      {/* Outside smooth-wrapper so position:fixed works correctly */}
      <ClientChrome />
    </>
  );
}
