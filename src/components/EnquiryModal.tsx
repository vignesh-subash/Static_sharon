"use client";

import { useEffect, useRef, useState } from "react";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productName: string;
}

export default function EnquiryModal({ open, onClose, productName }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", city: "", message: "" });
  const firstInputRef = useRef<HTMLInputElement>(null);

  /* reset state whenever modal opens */
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setForm({ name: "", mobile: "", city: "", message: "" });
      setTimeout(() => firstInputRef.current?.focus(), 80);
    }
  }, [open]);

  /* close on ESC */
  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-[13.5px] text-[#020202] placeholder-gray-400 focus:outline-none focus:border-[#00793A] focus:ring-2 focus:ring-[#00793A]/15 transition-all";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ maxWidth: 500 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-[#00793A] mb-0.5">Get a Free Quote</p>
            <h2 className="text-[18px] font-extrabold text-[#020202] leading-tight">Enquire About This Product</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0 mt-0.5"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#e8f5ee] flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#020202] mb-2">Thank You!</h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed max-w-xs">
                Our team will contact you shortly regarding your enquiry for <strong className="text-[#020202]">{productName}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#00793A,#00994D)" }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11.5px] font-semibold text-gray-600 mb-1">Full Name <span className="text-red-400">*</span></label>
                <input
                  ref={firstInputRef}
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-[11.5px] font-semibold text-gray-600 mb-1">Mobile Number <span className="text-red-400">*</span></label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-[11.5px] font-semibold text-gray-600 mb-1">City <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Your city"
                  value={form.city}
                  onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-[11.5px] font-semibold text-gray-600 mb-1">Product Interest</label>
                <input
                  type="text"
                  readOnly
                  value={productName}
                  className={`${inputCls} bg-gray-50 text-gray-500 cursor-default`}
                />
              </div>

              <div>
                <label className="block text-[11.5px] font-semibold text-gray-600 mb-1">Message <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements or questions..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold text-[14px] transition-all hover:opacity-90 hover:shadow-lg hover:shadow-green-200 mt-1"
                style={{ background: "linear-gradient(135deg,#00793A,#00994D)" }}
              >
                Submit Enquiry
              </button>

              <p className="text-[11px] text-gray-400 text-center pt-1">
                By submitting, you agree to be contacted by the SharonPly team.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
