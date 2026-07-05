import type { Metadata } from "next";
import { Afacad, Inria_Sans, Cinzel, Urbanist, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import ClientShell from "@/components/ClientShell";
import ScrollProgress from "@/components/ScrollProgress";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-afacad",
  display: "swap",
});

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});


export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/images/elephant-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/elephant-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/images/elephant-icon-192.png", sizes: "192x192", type: "image/png" },
    shortcut: "/images/elephant-icon-192.png",
  },
  title: {
    default: "SharonPly - Premium BWP & Marine Plywood Manufacturer Since 1987",
    template: "%s | SharonPly",
  },
  description:
    "Premium BWP & Marine Plywood with VIRASAFE antiviral & FIRESAFE technology. ISO certified. Products: Plywood, Doors, Teak, Veneer.",
  keywords:
    "plywood, BWP plywood, marine plywood, SharonPly, waterproof plywood, VIRASAFE, FIRESAFE, plywood manufacturer India, flush doors, teak plywood, veneer, sharon ply, plywood company Chennai",
  authors: [{ name: "SharonPly", url: "https://sharonply.com" }],
  creator: "SharonPly",
  publisher: "SharonPly",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sharonply.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sharon2025.sharonply.com",
    siteName: "SharonPly",
    title: "SharonPly - Premium BWP & Marine Plywood",
    description: "Premium BWP & Marine Plywood with VIRASAFE & FIRESAFE technology. Trusted by architects since 1987.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SharonPly - Premium BWP & Marine Plywood Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SharonPly - Premium BWP Plywood Manufacturer",
    description: "Premium BWP & Marine Plywood with VIRASAFE & FIRESAFE technology. Trusted by architects since 1987.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Replace with actual GSC HTML-tag verification code from
    // Google Search Console → Settings → Ownership verification → HTML tag
    // e.g. google: "abc123xyz_your_actual_code_here",
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link href="https://fonts.cdnfonts.com/css/chic-avenue" rel="stylesheet" />
        </head>
      <body
          suppressHydrationWarning
          className={`${afacad.variable} ${inriaSans.variable} ${cinzel.variable} ${urbanist.variable} ${barlowCondensed.variable} antialiased`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="1d0b54c2-0fa2-4df4-8167-818730c7902a"
        />
        <ErrorReporter />

        {/* ── Google Analytics 4 ─────────────────────────────────────────
            Replace G-XXXXXXXXXX with your GA4 Measurement ID.
            Set NEXT_PUBLIC_GA4_ID in .env.local (dev) and in your hosting
            environment variables (production).
        ────────────────────────────────────────────────────────────────── */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              id="ga4-load"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                `,
              }}
            />
          </>
        )}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
          <Script
            id="structured-data-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "SharonPly",
                url: "https://sharonply.com",
                logo: "https://sharon2025.sharonply.com/logo.png",
                foundingDate: "1987",
                description: "Premium BWP & Marine Plywood manufacturer since 1987 with VIRASAFE & FIRESAFE technology.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "#60, Sriman Srinivasan Road, Alwarpet",
                  addressLocality: "Chennai",
                  addressRegion: "Tamil Nadu",
                  postalCode: "600018",
                  addressCountry: "IN",
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+91-1800-200-3949",
                    contactType: "customer service",
                    areaServed: "IN",
                    availableLanguage: ["English", "Tamil", "Hindi"],
                  },
                  {
                    "@type": "ContactPoint",
                    telephone: "+91-4439403950",
                    contactType: "sales",
                    areaServed: "IN",
                    availableLanguage: ["English", "Tamil"],
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/sharonply",
                  "https://www.instagram.com/sharonply",
                  "https://www.youtube.com/sharonply",
                  "https://www.linkedin.com/company/sharonply",
                ],
              }),
            }}
          />
        <ScrollProgress />
        <ClientShell>{children}</ClientShell>

        </body>
    </html>
  );
}
