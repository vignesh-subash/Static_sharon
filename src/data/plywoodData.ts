// Shared plywood product data — real Supabase images

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";
const SB2 = "https://txssvwmxlfqzpqwdwvxs.supabase.co/storage/v1/object/public/sharon-assets/products";

export const IMG = {
  // Hero product shots (vertical)
  platinum:    `${SB}/PlatinumPly-FACELIFT-6FT-WOOD_vertical-resized-1770854252148.jpeg?width=900&height=900&resize=contain`,
  gold:        `${SB}/Gold_FL_Vertical-resized-1770858517595.jpg?width=900&height=900&resize=contain`,
  prima710:    `${SB}/Prima-710_FF_Vertical-resized-1770858517588.jpeg?width=900&height=900&resize=contain`,
  sovereign710:`${SB}/Sovereign-710_FF_Vertical-resized-1770858517583.jpeg?width=900&height=900&resize=contain`,
  sovereignMR: `${SB2}/plywood/sovereign-mr.jpg`,
  goldMR:      `${SB2}/plywood/sharon-gold.jpg`,
  kumki:       `${SB2}/plywood/sovereign-710.jpg`,
  // Lifestyle / interior
  interior1:   `${SB}/modern-interior-with-wooden-console-table-green-plants-floor-lamp-resized-1770809315167.jpg?width=800&height=600&resize=contain`,
  interior2:   `${SB}/Plywood-resized-1770810953635.jpg?width=800&height=600&resize=contain`,
  kitchen:     `${SB}/modern-interior-with-wooden-console-table-green-plants-floor-lamp-resized-1770809315167.jpg?width=800&height=600&resize=contain`,
  construction:`${SB}/Plywood-resized-1770810953635.jpg?width=800&height=600&resize=contain`,
};

export const commonSizes = ["8' x 4'", "8' x 3'", "7' x 4'", "7' x 3'", "6' x 4'", "6' x 3'"];
export const commonThickness = ["4mm", "6mm", "9mm", "12mm", "16mm", "19mm", "25mm"];

export const commonDownloads = [
  { label: "Product Brochure (PDF)", href: "/catalogue" },
  { label: "Technical Data Sheet", href: "/catalogue" },
];

export const commonFaqs = [
  { q: "What is BWP plywood?", a: "BWP (Boiling Water Proof) plywood, also called IS:710 grade, is manufactured with phenol-formaldehyde resin that withstands boiling water exposure. It is the highest grade of waterproofing for plywood, suitable for kitchens, bathrooms, and high-humidity environments." },
  { q: "How is it different from MR plywood?", a: "MR (Moisture Resistant) plywood uses urea-formaldehyde resin and is suitable for dry/semi-dry interiors. BWP plywood uses phenol-formaldehyde and is fully waterproof — suitable even for direct water exposure." },
  { q: "What warranty does Sharon Ply offer?", a: "Warranty varies by product. Sharon Platinum Ply carries a Lifetime Warranty against delamination. Other products range from 8 to 30 years. All warranties cover manufacturing defects and delamination under normal use." },
  { q: "Is it safe for indoor use?", a: "Yes. Our premium products are E0/E-Zero emission certified, meaning formaldehyde emission is below 0.5 mg/L — far below safety thresholds. They are completely safe for residential interiors including children's rooms." },
  { q: "What sizes and thicknesses are available?", a: "Standard sizes: 8'×4', 7'×4', 6'×4' and smaller cuts. Thickness: 4mm to 25mm. Custom sizes available for bulk orders through dealers." },
  { q: "Where can I buy SharonPly products?", a: "SharonPly products are available across South India through our authorized dealer network. Use the 'Find Dealer' button to locate the nearest dealer in your area, or contact us directly for bulk/project orders." },
];

export const relatedPlywoodProducts = [
  { name: "Sharon Platinum Ply", href: "/plywood/sharon-platinum-ply", image: IMG.platinum, tag: "Premium" },
  { name: "Sharon Gold",         href: "/plywood/sharon-gold-marine-plywood",         image: IMG.gold,     tag: "BWP" },
  { name: "Sharon Gold MR",      href: "/plywood/sharon-gold-mr",      image: IMG.goldMR,   tag: "MR" },
  { name: "Sharon Prima Armor",    href: "/plywood/sharon-prima-710",    image: IMG.prima710 },
  { name: "Sovereign 710",       href: "/plywood/sovereign-710",       image: IMG.sovereign710 },
  { name: "Sovereign MR",        href: "/plywood/sovereign-mr",        image: IMG.sovereignMR },
  { name: "Kumki OEM BWP Ply",   href: "/plywood/kumki-oem-bwp-ply",  image: IMG.kumki,    tag: "OEM BWP" },
];
