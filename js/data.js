/* ============================================================
   SHARONPLY — Data Arrays
   ============================================================ */
const SP_DATA = {
  applications: [
    { num: "01", title: "Kitchen Cabinets", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="28" height="20" rx="1.5"/><rect x="8" y="13" width="6" height="9" rx="0.8"/><rect x="18" y="13" width="6" height="9" rx="0.8"/><rect x="5" y="4" width="22" height="4" rx="1"/><line x1="16" y1="4" x2="16" y2="8"/></svg>' },
    { num: "02", title: "Wardrobes", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="2" width="26" height="28" rx="1.5"/><line x1="16" y1="2" x2="16" y2="30"/><rect x="6" y="6" width="7" height="9" rx="0.8"/><rect x="19" y="6" width="7" height="9" rx="0.8"/><circle cx="9.5" cy="12" r="1.2"/><circle cx="22.5" cy="12" r="1.2"/></svg>' },
    { num: "03", title: "Bathroom Vanities", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="14" width="28" height="14" rx="1.5"/><rect x="6" y="17" width="8" height="6" rx="0.8"/><rect x="18" y="17" width="8" height="6" rx="0.8"/><rect x="10" y="3" width="12" height="11" rx="1.5"/><line x1="16" y1="3" x2="16" y2="14"/></svg>' },
    { num: "04", title: "Office Furniture", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="14" width="26" height="14" rx="1.5"/><polygon points="3,14 16,4 29,14"/><rect x="11" y="18" width="10" height="6" rx="0.8"/><rect x="11" y="26" width="10" height="3" rx="0.5"/></svg>' },
    { num: "05", title: "Commercial Interiors", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="12" height="20" rx="1.5"/><rect x="18" y="3" width="12" height="25" rx="1.5"/><rect x="5" y="12" width="6" height="5" rx="0.6"/><rect x="21" y="7" width="6" height="5" rx="0.6"/><rect x="5" y="20" width="4" height="3" rx="0.3"/><rect x="21" y="16" width="4" height="3" rx="0.3"/><rect x="27" y="16" width="3" height="3" rx="0.3"/><line x1="14" y1="28" x2="18" y2="28"/></svg>' },
    { num: "06", title: "Hospitality", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="10" width="28" height="18" rx="1.5"/><polygon points="2,10 16,2 30,10"/><rect x="12" y="15" width="8" height="13" rx="0.8"/><rect x="6" y="14" width="4" height="4" rx="0.5"/><rect x="22" y="14" width="4" height="4" rx="0.5"/></svg>' },
    { num: "07", title: "Retail & Displays", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="10" width="26" height="18" rx="1.5"/><rect x="6" y="14" width="8" height="6" rx="0.6"/><rect x="18" y="14" width="8" height="6" rx="0.6"/><rect x="6" y="22" width="8" height="4" rx="0.5"/><rect x="18" y="22" width="8" height="4" rx="0.5"/><path d="M3 14 L10 4 L22 4 L29 14"/></svg>' },
    { num: "08", title: "Furniture Design", href: "/plywood",
      icon: '<svg width="76" height="76" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="12" width="22" height="16" rx="1.5"/><rect x="2" y="20" width="28" height="4" rx="0.8"/><line x1="8" y1="28" x2="8" y2="30"/><line x1="24" y1="28" x2="24" y2="30"/><rect x="5" y="4" width="22" height="8" rx="1"/><line x1="16" y1="4" x2="16" y2="6"/></svg>' },
  ],

  personas: [
    { label: "Architects & Interior Designers", icon: "architect",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      name: "Ar. Priya Sharma", role: "Principal Architect at Studio Ink",
      desc: "SharonPly's consistent quality and wide range of finishes give me the creative freedom to design without compromise.",
      recommendations: [
        { name: "Sharon Platinum Ply", benefit: "BWP Grade — Ideal for high-end interiors", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=200&fit=crop" },
        { name: "Exotic Natura Veneer", benefit: "Natural wood aesthetics for luxury spaces", image: "https://images.unsplash.com/photo-1591543620767-582b2e02b853?w=300&h=200&fit=crop" },
        { name: "Sovereign Doors", benefit: "Premium flush doors with elegant finishes", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=200&fit=crop" },
      ] },
    { label: "Carpentry & Contractors", icon: "carpenter",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
      name: "Mr. Senthil Kumar", role: "Master Carpenter",
      desc: "I've been using SharonPly for over 15 years. The consistency in thickness and quality makes my work easier.",
      recommendations: [
        { name: "Sharon Gold Marine", benefit: "Waterproof — perfect for bathrooms & kitchens", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" },
        { name: "Sovereign MR", benefit: "Moisture resistant for general woodwork", image: "https://images.unsplash.com/photo-1591543620767-582b2e02b853?w=300&h=200&fit=crop" },
        { name: "Sharon Prima 710", benefit: "IS:710 certified — reliable structural ply", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=200&fit=crop" },
      ] },
    { label: "Builders & Developers", icon: "builder",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      name: "Mr. R. V. Rajasekar", role: "Deputy GM — Sales",
      desc: "For large-scale projects, SharonPly delivers consistent quality across every batch. That's reliability you can build on.",
      recommendations: [
        { name: "Kumki OEM BWP Ply", benefit: "Bulk supply — consistent quality for large projects", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=200&fit=crop" },
        { name: "Sovereign Film Face", benefit: "Film-faced for concrete formwork", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop" },
        { name: "E-ZERO Plywood", benefit: "Eco-friendly — meets green building standards", image: "https://images.unsplash.com/photo-1591543620767-582b2e02b853?w=300&h=200&fit=crop" },
      ] },
    { label: "Home Owners", icon: "homeowner",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      name: "Mrs. Lakshmi Venkatesh", role: "Homeowner, Chennai",
      desc: "We chose SharonPly for our home renovation. The team guided us to the right products and the quality exceeded our expectations.",
      recommendations: [
        { name: "Sharon Platinum Ply", benefit: "Premium grade for wardrobes & kitchen cabinets", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=200&fit=crop" },
        { name: "Natural Wood Veneer", benefit: "Beautiful finishes for furniture & paneling", image: "https://images.unsplash.com/photo-1591543620767-582b2e02b853?w=300&h=200&fit=crop" },
        { name: "Flush Doors", benefit: "Solid, smooth, and durable interior doors", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=200&fit=crop" },
      ] },
  ],

  testimonials: [
    { quote: "SharonPly has been our preferred partner for over a decade. Their consistent quality and innovative products make every project better.", author: "Ar. Rajesh Kumar", role: "Principal Architect, Chennai" },
    { quote: "The best plywood I've worked with in 20 years. The thickness consistency and screw holding capacity are unmatched.", author: "Mr. Prakash Rao", role: "Senior Carpenter, Bangalore" },
    { quote: "We specified SharonPly for our entire project. The VIRASAFE technology was a key factor in our decision.", author: "Mr. Anil Mehta", role: "Project Manager, Mumbai" },
    { quote: "Outstanding quality and excellent after-sales support. SharonPly truly stands behind their products.", author: "Mrs. Sunita Patel", role: "Homeowner, Ahmedabad" },
  ],

  technologies: [
    { icon: "waterproof", title: "Waterproof Performance", desc: "Built for high-moisture environments — kitchens, bathrooms, and exterior applications.", color: "#00793A" },
    { icon: "virasafer", title: "VIRASAFE", desc: "Advanced antiviral protection for healthier indoor spaces. Tested and certified.", color: "#1565c0" },
    { icon: "firesave", title: "FIRESAVE", desc: "Certified fire-resistant technology that slows flame spread and increases safety.", color: "#e65100" },
    { icon: "ezero", title: "E-ZERO", desc: "Eco-friendly solutions with zero formaldehyde emissions. Safe for homes and offices.", color: "#7b1fa2" },
    { icon: "termite", title: "Termite Proof", desc: "Built-in termite resistance for long-lasting protection in all climates.", color: "#006064" },
    { icon: "warranty", title: "Lifetime Warranty", desc: "Industry-leading warranty on flagship grades. Confidence you can build on.", color: "#004d40" },
  ],

  videos: [
    { title: "Sharon Platinum Ply — Product Overview", thumb: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=225&fit=crop" },
    { title: "Manufacturing Excellence at Our Factory", thumb: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=225&fit=crop" },
    { title: "VIRASAFE Technology Explained", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=225&fit=crop" },
    { title: "Sharon Doors — Craftsmanship Showcase", thumb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=225&fit=crop" },
    { title: "Testimonials — Trusted by Professionals", thumb: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=225&fit=crop" },
    { title: "Exotic Natura Veneer Collection", thumb: "https://images.unsplash.com/photo-1591543620767-582b2e02b853?w=400&h=225&fit=crop" },
  ],

  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/SharonPlyIndia", path: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
    { label: "Instagram", href: "https://www.instagram.com/sharonplyindia/", path: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
    { label: "X (Twitter)", href: "https://x.com/SharonPlyIndia", path: '<path d="M4 4l16 16M20 4L4 20"/>' },
    { label: "YouTube", href: "https://youtube.com/sharonply/", path: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>' },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sharon-ply/", path: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
    { label: "WhatsApp", href: "https://wa.me/914439403950", path: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>' },
  ],
};
