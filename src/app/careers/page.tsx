"use client";

import Link from "next/link";
import { useState } from "react";

const HERO_IMG = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a/generated_images/professional-careers-hero-banner-for-an-indian-p-dc148144.jpg";

const G = "#00793A";

const VALUES = [
  { icon: "🌿", title: "Sustainability First", desc: "We've been building responsibly since 1987 — FSC-certified supply chains and eco-conscious manufacturing are at our core." },
  { icon: "👷", title: "Craftsmanship Culture", desc: "Every team member takes pride in the quality that goes into every sheet of plywood we manufacture." },
  { icon: "📈", title: "Growth Mindset", desc: "We invest in our people. Internal promotions, skill development, and leadership pathways are part of how we grow together." },
  { icon: "🤝", title: "Inclusive Workplace", desc: "A diverse team across manufacturing, sales, design, and technology — everyone's contribution matters." },
];

const DEPARTMENTS = [
  "Sales & Business Development",
  "Manufacturing & Production",
  "Quality Assurance",
  "Logistics & Supply Chain",
  "Design & Marketing",
  "Finance & Accounts",
  "Human Resources",
  "Information Technology",
];

const OPEN_ROLES = [
  {
    title: "Area Sales Manager",
    dept: "Sales & Business Development",
    location: "Chennai / Coimbatore / Madurai",
    type: "Full-time",
    exp: "3–7 years",
    desc: "Drive dealer network expansion, manage key accounts, and grow Sharon Ply's market share across your territory.",
  },
  {
    title: "Production Supervisor",
    dept: "Manufacturing & Production",
    location: "Factory – Villupuram, Tamil Nadu",
    type: "Full-time",
    exp: "4–8 years",
    desc: "Oversee plywood and door manufacturing lines, ensure quality standards, manage shift operations and team efficiency.",
  },
  {
    title: "Quality Control Inspector",
    dept: "Quality Assurance",
    location: "Factory – Villupuram, Tamil Nadu",
    type: "Full-time",
    exp: "2–5 years",
    desc: "Monitor incoming raw materials and finished products against IS:303 / IS:2202 standards. Document test results and coordinate corrective actions.",
  },
  {
    title: "Digital Marketing Executive",
    dept: "Design & Marketing",
    location: "Chennai (Head Office)",
    type: "Full-time",
    exp: "1–3 years",
    desc: "Manage social media channels, run performance campaigns, produce content for architects, designers, and homeowners.",
  },
  {
    title: "Accounts Executive",
    dept: "Finance & Accounts",
    location: "Chennai (Head Office)",
    type: "Full-time",
    exp: "2–4 years",
    desc: "Handle AR/AP, GST filings, vendor reconciliation, and monthly MIS reporting for the sales division.",
  },
  {
    title: "Logistics Coordinator",
    dept: "Logistics & Supply Chain",
    location: "Chennai / Villupuram",
    type: "Full-time",
    exp: "2–4 years",
    desc: "Coordinate outbound shipments, track delivery SLAs, liaise with transporters, and maintain ERP records.",
  },
];

const DEPT_COLORS: Record<string, string> = {
  "Sales & Business Development": "#00793A",
  "Manufacturing & Production": "#b45309",
  "Quality Assurance": "#0369a1",
  "Design & Marketing": "#7c3aed",
  "Finance & Accounts": "#0f766e",
  "Logistics & Supply Chain": "#b91c1c",
  "Human Resources": "#4f46e5",
  "Information Technology": "#0891b2",
};

type FormData = { name: string; email: string; phone: string; experience: string; message: string };
const EMPTY: FormData = { name: "", email: "", phone: "", experience: "", message: "" };

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<null | typeof OPEN_ROLES[0]>(null);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeFilter === "All"
    ? OPEN_ROLES
    : OPEN_ROLES.filter(r => r.dept === activeFilter);

  const depts = ["All", ...Array.from(new Set(OPEN_ROLES.map(r => r.dept)))];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSelected(null); setSubmitted(false); setForm(EMPTY); }, 3500);
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 440 }}>
        <img src={HERO_IMG} alt="Careers at SharonPly at SharonPly" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(3,31,14,0.88) 0%, rgba(0,121,58,0.65) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Careers at SharonPly</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#ffc107]/15 border border-[#ffc107]/30 text-yellow-300 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6">
            Join Our Team
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight max-w-2xl">
            Build Your Career<br />at Sharon Ply
          </h1>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl">
            India&apos;s largest integrated plywood manufacturer since 1987. We&apos;re always looking for passionate, driven people to grow with us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#open-roles" className="flex items-center gap-2 bg-white text-[#00793A] font-bold px-6 py-3 rounded-full text-sm shadow-lg hover:bg-green-50 transition-all">
              View Open Roles
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="mailto:hr@sharonply.com" className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/20 transition-all">
              Send Your Resume
            </a>
          </div>
        </div>
      </div>

      {/* ── WHY JOIN US ── */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#00793A]" />
              <p className="text-xs font-bold tracking-widest uppercase text-[#00793A]">Why Sharon Ply</p>
              <div className="w-8 h-0.5 bg-[#00793A]" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-3">More Than a Job</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              When you join Sharon Ply, you join a legacy of craftsmanship, a culture of excellence, and a team that cares about what they build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-0.5 bg-[#00793A]" />
                <p className="text-xs font-bold tracking-widest uppercase text-[#00793A]">Open Positions</p>
              </div>
              <h2 className="text-3xl font-black text-gray-900">Current Openings</h2>
            </div>
            <p className="text-sm text-gray-500">{OPEN_ROLES.length} positions available</p>
          </div>

          {/* Department filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {depts.map(d => (
              <button
                key={d}
                onClick={() => setActiveFilter(d)}
                className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  background: activeFilter === d ? G : "transparent",
                  color: activeFilter === d ? "#fff" : "#555",
                  border: activeFilter === d ? `1.5px solid ${G}` : "1.5px solid #e5e7eb",
                }}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Role cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filtered.map((role, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                onClick={() => setSelected(role)}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-black text-gray-900 mb-1.5">{role.title}</h3>
                    <span className="inline-flex text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${DEPT_COLORS[role.dept] ?? G}18`, color: DEPT_COLORS[role.dept] ?? G }}>
                      {role.dept}
                    </span>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" className="w-5 h-5 flex-shrink-0 mt-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{role.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {role.exp}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    {role.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* General application CTA */}
          <div className="mt-10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: "linear-gradient(135deg, #00793A, #005a2b)" }}>
            <div>
              <p className="text-white font-bold text-lg mb-1">Don&apos;t see the right role?</p>
              <p className="text-white/70 text-sm">Send us your resume — we&apos;re always open to exceptional talent.</p>
            </div>
            <a href="mailto:hr@sharonply.com" className="flex-shrink-0 bg-white text-[#00793A] font-bold px-6 py-3 rounded-full text-sm hover:bg-green-50 transition-colors">
              Send Resume →
            </a>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="py-16 bg-[#f8fdf9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Departments We Hire In</h2>
            <p className="text-gray-500 text-sm">From the factory floor to the boardroom — we hire across every function.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {DEPARTMENTS.map(d => (
              <div key={d} className="bg-white rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 border border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: DEPT_COLORS[d] ?? G }} />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY MODAL ── */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setSelected(null)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-7 border-b border-gray-100 flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex text-xs font-bold px-2.5 py-1 rounded-full mb-2" style={{ background: `${DEPT_COLORS[selected.dept] ?? G}18`, color: DEPT_COLORS[selected.dept] ?? G }}>
                  {selected.dept}
                </span>
                <h2 className="text-xl font-black text-gray-900">{selected.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{selected.location} · {selected.exp}</p>
              </div>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-7">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✅</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-500 text-sm">Thank you! Our HR team will reach out within 5 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} type="text" placeholder="Your name" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Phone *</label>
                      <input required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Email Address *</label>
                    <input required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} type="email" placeholder="you@example.com" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Years of Experience</label>
                    <input value={form.experience} onChange={e => setForm(p => ({ ...p, experience: e.target.value }))} type="text" placeholder="e.g. 5 years" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Why Sharon Ply? *</label>
                    <textarea required value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={3} placeholder="Tell us about yourself and why you'd like to join..." className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A] resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-2xl text-white font-bold text-sm hover:opacity-90 transition-opacity" style={{ background: G }}>
                    Submit Application →
                  </button>
                  <p className="text-xs text-gray-400 text-center">Our HR team responds within 5 working days.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
