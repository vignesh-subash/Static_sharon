import type { Metadata } from "next";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import CatalogueClient from "@/components/CatalogueClient";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";
const HERO = `${SB}/Plywood-resized-1770810953635.jpg?width=1600&height=700&resize=cover`;

export const metadata: Metadata = {
  title: "SharonPly Catalogues | View & Download Product Brochures",
  description: "View and download SharonPly catalogues and product brochures for plywood, veneers, doors, technologies, certifications, and technical product information.",
  alternates: { canonical: "https://sharonply.com/catalogue" },
};

export default function CataloguePage() {
  return (
    <InnerPageLayout
      breadcrumbs={[{ label: "Catalogue" }]}
      title="SharonPly Catalogues"
      subtitle="View and download product catalogues, brochures, and technical resources."
      heroImage={HERO}
    >
      {/* Hero description and CTAs */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-4 mb-8 text-center">
        <p className="text-[#5a5a5a] text-sm max-w-2xl mx-auto mb-6">
          Access SharonPly catalogues for plywood, veneers, doors, technologies, and product information to support your project, specification, or purchase decision.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#catalogues" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#00793A] hover:bg-[#005c2c] transition-all shadow-lg shadow-[#00793A]/20">View Catalogues</a>
          <a href="#latest-catalogue" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#00793A] border-2 border-[#00793A]/30 hover:bg-[#f0faf4] transition-all">Download Latest Catalogue</a>
        </div>
      </div>

      {/* Interactive Client Component (Search, Filters, Grid, Preview Modal) */}
      <CatalogueClient />

      {/* Final CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #00793A 0%, #005a2b 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Download the catalogue or connect with our team for product guidance, dealer support, or project-specific recommendations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#020202] bg-[#ffc107] hover:bg-[#ffdb58] transition-all shadow-lg">Talk to Our Team</Link>
            <Link href="/dealers" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all">Find a Dealer</Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
