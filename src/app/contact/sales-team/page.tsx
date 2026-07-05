"use client";

import { useState, useMemo, useEffect } from "react";
import InnerPageLayout from "@/components/InnerPageLayout";

const SB = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1d0b54c2-0fa2-4df4-8167-818730c7902a";
const HERO = `${SB}/modern-interior-with-wooden-console-table-green-plants-floor-lamp-resized-1770809315167.jpg?width=1600&height=700&resize=cover`;

/* ── Team data (Nelson and Nirmal Kumar removed) ── */
const team = [
  { name: "Mr. R. V. Rajasekar",   rawDesig: "Deputy General Manager - Sales", phone: "+91 8939881895", email: "rvr@sharonply.com",             cities: ["Chennai"] },
  { name: "Mr. Mohan Raj",         rawDesig: "Sr. Manager - Sales",          phone: "+91 9176663825", email: "mohan@sharonply.com",            cities: ["Chennai"] },
  { name: "Mr. R. Karunanidhi",    rawDesig: "Manager - Sales",              phone: "+91 9444954801", email: "rk@sharonply.com",               cities: ["Chennai"] },
  { name: "Mr. S. Rajesh",         rawDesig: "Manager - Sales",              phone: "+91 9962586664", email: "s.rajesh@sharonply.com",          cities: ["Chennai"] },
  { name: "Mr. Manickam",          rawDesig: "Manager - Sales",              phone: "+91 9330026657", email: "t.manickam@sharonply.com",        cities: ["Chennai"] },
  { name: "Mr. Uthaman",           rawDesig: "Manager - Sales",              phone: "+91 7823964060", email: "s.uthaman@sharonply.com",         cities: ["Chennai"] },
  { name: "Mr. Sankar Madavan S R",rawDesig: "Asst Manager - Projects",      phone: "+91 7823981564", email: "sankarmadavan@sharonply.com",     cities: ["Chennai"] },
  { name: "Mr. Vinoth Kumar",      rawDesig: "Asst Manager - Sales",         phone: "+91 94440 84808", email: "vinothkumar@sharonply.com",      cities: ["Chennai"] },
  { name: "Mr. Darunkumar",        rawDesig: "Asst. Manager - Sales",        phone: "+91 73053 72896", email: "darunkumar@sharonply.com",        cities: ["Chennai"] },
  { name: "Mr. Ramesh Vikram",     rawDesig: "Sr. Executive Sales",          phone: "+91 7200240844", email: "rameshvikram@sharonply.com",      cities: ["Chennai"] },
  { name: "Mr. Anand. J",          rawDesig: "Asst General Manager - Sales", phone: "+91 9444914801", email: "j.anand@sharonply.com",           cities: ["Trichy", "Madurai"] },
  { name: "Mr. Prabu V",           rawDesig: "Asst General Manager - Sales", phone: "+91 9444914802", email: "v.prabu@sharonply.com",           cities: ["Madurai", "Tirunelveli"] },
  { name: "Mr. Periasamy T",       rawDesig: "Sr.Manager - Sales",           phone: "+91 7823993482", email: "t.periasamy@sharonply.com",       cities: ["Coimbatore"] },
  { name: "Mr. J. Manikandan",     rawDesig: "Sr.Manager - Sales",           phone: "+91 9176663728", email: "j.manikandan@sharonply.com",      cities: ["Pondicherry", "Vellore"] },
  { name: "Mr. Jai Godman",        rawDesig: "Manager - Sales",              phone: "+91 9444909301", email: "t.jai@sharonply.com",             cities: ["Tirunelveli"] },
  { name: "Mr. Koteeswaran S",     rawDesig: "Manager - Sales",              phone: "+91 9444991392", email: "s.kotteeswaran@sharonply.com",    cities: ["Vellore"] },
  { name: "Mr. Iyandurai",         rawDesig: "Manager - Sales",              phone: "+91 7823998741", email: "m.iyandurai@sharonply.com",       cities: ["Salem"] },
  { name: "Mr. T. Ananthakumar",   rawDesig: "Manager - Sales",              phone: "+91 7823970671", email: "t.ananthakumar@sharonply.com",   cities: ["Madurai", "Tirunelveli"] },
  { name: "Mr. Balaji T",          rawDesig: "Sr.Manager - Project",         phone: "+91 94440 84807", email: "projects@sharonply.com",         cities: ["Trichy"] },
  { name: "Mr. Karthi",            rawDesig: "Asst. Manager - Sales",        phone: "+91 7823983474", email: "r.karthi@sharonply.com",          cities: ["Madurai"] },
  { name: "Mr. C. Manikandan",     rawDesig: "Sr. Executive Sales",          phone: "+91 9444914803", email: "c.manikandan@sharonply.com",     cities: ["Salem"] },
  { name: "Mr. S. Dhinesh",        rawDesig: "Asst. Manager - Sales",        phone: "+91 89258 33253", email: "s.dhinesh@sharonply.com",        cities: ["Trichy"] },
  { name: "Mr. Arun Kumar",        rawDesig: "Sales Executive",              phone: "+91 98844 55250", email: "b.arunkumar@sharonply.com",      cities: ["Coimbatore"] },
  { name: "Mr. Sundarprabhu A",    rawDesig: "Asst. Manager - Sales",        phone: "+91 93848 07292", email: "sundarprabhu@sharonply.com",     cities: ["Trichy"] },
  { name: "Mr. Prakash T",         rawDesig: "Sr. Executive Sales",          phone: "+91 62908 25170", email: "t.prakash@sharonply.com",        cities: ["Salem"] },
  { name: "Mr. Jeevanantham",      rawDesig: "Sr. Executive Sales",          phone: "+91 9444914800", email: "m.jeeva@sharonply.com",           cities: ["Coimbatore"] },
  { name: "Mr. Sebastian Daniel A",rawDesig: "Executive Sales",              phone: "+91 8925276622", email: "a.sebastian@sharonply.com",       cities: ["Madurai"] },
  { name: "Mr. Sakthivel",         rawDesig: "Asst. Manager - Sales",        phone: "+91 9962525789", email: "t.sakthivel@sharonply.com",       cities: ["Trichy"] },
  { name: "Mr. Seenivasan",        rawDesig: "Sr. Manager - Sales",          phone: "+91 9176664806", email: "seeni@sharonply.com",             cities: ["Erode", "Coimbatore"] },
  { name: "Mr. Sundararajan",      rawDesig: "Consultant",                   phone: "+91 8939873300", email: "sundar@sharonply.com",            cities: ["Madurai", "Tirunelveli", "Erode"] },
  { name: "Mr. Ramamoorthy",       rawDesig: "Sr. Executive",                phone: "+91 99525 85471", email: "cbt2prelam@sharonply.com",       cities: ["Coimbatore"] },
  { name: "Mr. Sabreeswaran",      rawDesig: "Asst. Manager - Sales",        phone: "+91 8754434637", email: "pb.erode@sharonply.com",          cities: ["Erode"] },
  { name: "Mr. Sasi Soma",         rawDesig: "Asst. Manager - Sales",        phone: "+91 6289654746", email: "pb.coimbatore@sharonply.com",     cities: ["Coimbatore"] },
];

/* ── Infer department from designation ── */
function inferDepartment(d: string): string {
  const s = d.toLowerCase();
  if (s.includes("project")) return "Projects";
  return "Sales";
}

/* ── Get primary city (first in array) ── */
function primaryCity(m: typeof team[0]): string {
  return m.cities[0] || "Chennai";
}

/* ── Derive a short department/region label for the card ── */
function getDepartmentLabel(d: string): string {
  const dept = inferDepartment(d);
  return dept;
}

const allCities = Array.from(new Set(team.flatMap(m => m.cities).filter(Boolean))).sort();

function getInitials(name: string) {
  return name.replace("Mr. ", "").replace("Mr.", "").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

function getAvatarColor(name: string) {
  const palette = ["#00793A","#1565c0","#7b1fa2","#e65100","#006064","#880e4f","#1b5e20","#bf360c","#4a148c","#01579b","#33691e","#b71c1c","#004d40","#1a237e","#3e2723","#00695c","#5d4037","#37474f","#0d47a1","#827717"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return palette[Math.abs(h) % palette.length];
}

/* ── City-based region mapping ── */
function getRegion(city: string): string {
  const regionMap: Record<string, string> = {
    "Chennai": "Chennai",
    "Coimbatore": "Coimbatore",
    "Madurai": "Madurai & South",
    "Tirunelveli": "Madurai & South",
    "Trichy": "Trichy & Central",
    "Salem": "Salem & West",
    "Erode": "Salem & West",
    "Vellore": "Vellore & North",
    "Pondicherry": "Vellore & North",
  };
  return regionMap[city] || "Other Regions";
}

/* ── Region display order ── */
const REGION_ORDER = ["Chennai", "Coimbatore", "Madurai & South", "Trichy & Central", "Salem & West", "Vellore & North", "Other Regions"];
const DEPT_ORDER = ["Sales", "Projects"];

export default function SalesTeamPage() {
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  const [locLoading, setLocLoading] = useState(true);

  /* ── Geolocation ── */
  useEffect(() => {
    if (!navigator.geolocation) { setLocLoading(false); return; }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&addressdetails=1`,
            { headers: { "User-Agent": "SharonPly/1.0" } }
          );
          const data = await res.json();
          const addr = data.address || {};
          const city = addr.city || addr.town || addr.county || addr.state_district || "";
          if (city && allCities.some(c => city.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(city.toLowerCase()))) {
            const match = allCities.find(c => city.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(city.toLowerCase())) || "Chennai";
            setDetectedCity(match);
            setCityFilter(match);
          } else {
            setDetectedCity(null);
          }
        } catch { /* ignore */ }
        setLocLoading(false);
      },
      () => { setDetectedCity(null); setLocLoading(false); },
      { timeout: 8000, maximumAge: 300000 }
    );
  }, []);

  const filtered = useMemo(() => {
    return team.filter(m => {
      const q = search.toLowerCase();
      const dept = inferDepartment(m.rawDesig);
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        dept.toLowerCase().includes(q) ||
        m.cities.some(c => c.toLowerCase().includes(q)) ||
        m.email.toLowerCase().includes(q);
      const matchCity = cityFilter === "All" || m.cities.includes(cityFilter);
      return matchSearch && matchCity;
    });
  }, [search, cityFilter]);

  /* ── Group by department → region ── */
  const groupedByDeptRegion = useMemo(() => {
    const groups: { dept: string; region: string; members: typeof team }[] = [];
    const deptOrder = DEPT_ORDER.filter(d => filtered.some(m => inferDepartment(m.rawDesig) === d));

    for (const dept of deptOrder) {
      const deptMembers = filtered.filter(m => inferDepartment(m.rawDesig) === dept);
      const regions = new Set(deptMembers.map(m => getRegion(primaryCity(m))));
      const sortedRegions = REGION_ORDER.filter(r => regions.has(r));

      for (const region of sortedRegions) {
        const regionMembers = deptMembers.filter(m => getRegion(primaryCity(m)) === region);
        if (regionMembers.length > 0) {
          groups.push({ dept, region, members: regionMembers });
        }
      }
    }
    return groups;
  }, [filtered]);

  return (
    <InnerPageLayout
      breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Sales Team" }]}
      title="Our Sales Team"
      subtitle="Dedicated professionals across Tamil Nadu ready to assist you"
      heroImage={HERO}
      >
      {/* ── Search & City filter ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search by name, city, role…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#00793A] focus:ring-2 focus:ring-[#00793A]/10 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {locLoading && (
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <svg className="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25"/><path d="M21 12a9 9 0 01-9-9"/></svg>
                  Detecting…
                </div>
              )}
              {detectedCity && !locLoading && cityFilter !== "All" && (
                <div className="flex items-center gap-1 text-[11px] text-[#00793A] font-medium">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {detectedCity}
                </div>
              )}
              <select
                value={cityFilter}
                onChange={e => setCityFilter(e.target.value)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-[#00793A] focus:ring-2 focus:ring-[#00793A]/10 transition-all bg-white min-w-[160px]"
              >
                <option value="All">All Cities</option>
                {allCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          {(search || cityFilter !== "All") && (
            <div className="flex items-center justify-between mt-2.5">
              <p className="text-xs text-gray-500">
                Showing <span className="font-semibold text-[#00793A]">{filtered.length}</span> of {team.length} members
                {cityFilter !== "All" && <span> in <span className="font-semibold">{cityFilter}</span></span>}
              </p>
              <button
                onClick={() => { setSearch(""); setCityFilter("All"); setDetectedCity(null); }}
                className="text-xs text-[#00793A] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Team — Department × Region groups ── */}
      <section className="py-14 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <svg className="mx-auto mb-4 text-gray-300" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <p className="text-gray-500 font-medium">No team members found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search or city filter</p>
            </div>
          ) : (
            <div className="space-y-12">
              {groupedByDeptRegion.map(({ dept, region, members }, idx) => {
                /* Show department heading only when it changes from previous group */
                const prevDept = idx > 0 ? groupedByDeptRegion[idx - 1].dept : null;
                const showDeptHeading = dept !== prevDept;
                return (
                  <div key={`${dept}-${region}`}>
                    {/* Department heading */}
                    {showDeptHeading && (
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-[0.18em] text-white"
                          style={{ background: dept === "Sales" ? "#00793A" : "#1565c0" }}>
                          {dept}
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>
                    )}
                    {/* Region sub-heading */}
                    <div className="flex items-center gap-2 mb-4 mt-2 ml-1">
                      <svg className="text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">{region}</h3>
                      <span className="text-xs text-gray-400">({members.length})</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {members.map(m => <MemberCard key={m.name + m.phone} member={m} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffc107] mb-2">Get In Touch</p>
          <h2 className="text-2xl font-bold text-[#020202] mb-3">Can&apos;t find the right contact?</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">Reach our central office and we&apos;ll connect you with the right person for your region and requirements.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90" style={{ background: "#00793A" }}>
              Contact Us
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="tel:+914428162099" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#00793A] border-2 border-[#00793A]/20 hover:bg-[#00793A]/5 transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Headquarters
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}

function MemberCard({ member: m }: { member: typeof team[0] }) {
  const avatarColor = getAvatarColor(m.name);
  const initials = getInitials(m.name);
  const dept = getDepartmentLabel(m.rawDesig);
  const region = getRegion(primaryCity(m));

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ border: "1px solid #e5e7eb", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
    >
      {/* Top accent bar */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${avatarColor}, #00793A)` }} />

      <div className="p-5">
        {/* Avatar + name */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${avatarColor}, ${avatarColor}cc)` }}
          >
            {initials}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-[14px] font-bold text-[#020202] leading-tight">{m.name}</h3>
            <span
              className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold leading-tight"
              style={{ background: dept === "Sales" ? "#e8f5ee" : "#e3f2fd", color: dept === "Sales" ? "#00793A" : "#1565c0" }}
            >
              {dept}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2.5">
          <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 group/link">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e8f5ee" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <span className="text-[12.5px] text-gray-700 group-hover/link:text-[#00793A] transition-colors font-medium">{m.phone}</span>
          </a>

          <a href={`mailto:${m.email}`} className="flex items-center gap-2.5 group/link">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#eff6ff" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="text-[12px] text-gray-600 group-hover/link:text-[#1d4ed8] transition-colors truncate">{m.email}</span>
          </a>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
          <a
            href={`tel:${m.phone.replace(/\s/g, "")}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11.5px] font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "#00793A" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call
          </a>
          <a
            href={`mailto:${m.email}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11.5px] font-semibold transition-all border"
            style={{ color: "#1d4ed8", borderColor: "#bfdbfe", background: "#eff6ff" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
