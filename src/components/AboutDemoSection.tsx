import { Zap, Accessibility, ShieldCheck, Check } from 'lucide-react';

export function AboutDemoSection() {
  return (
    <section
      id="about-demo"
      className="py-12 sm:py-16 md:py-20 bg-brand-offwhite border-b border-slate-200"
      aria-labelledby="about-demo-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Engineering & UX Focus
          </span>
          <h2
            id="about-demo-heading"
            className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3"
          >
            Two Measurable Improvements for Small Plumbing Businesses
          </h2>
          <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
            This portfolio project demonstrates two high-impact upgrades designed to help independent trade businesses modernize their web presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Improvement 1 Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">
              Improvement 1: Faster, Clearer Mobile Experience
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-4">
              Homeowners dealing with a plumbing problem are often on a smartphone under stress. Heavy images, intrusive popups, and vague copy cause high bounce rates.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-slate">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>Zero bloated dependencies or slow font downloads — system font stack renders instantly.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>Immediate visual hierarchy: headline, core offerings, and action visible without endless scrolling.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>Honest, credible messaging without fabricated 24/7 or emergency claims.</span>
              </li>
            </ul>
          </div>

          {/* Improvement 2 Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-brand-navy flex items-center justify-center mb-4">
              <Accessibility className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">
              Improvement 2: Accessible 4-Step Service Request Flow
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-4">
              Replaces cluttered generic contact forms with an intuitive, guided intake that structures incoming homeowner requests before a phone call is even placed.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-slate">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>WCAG 2.2 AA compliant: explicit form labels, ARIA live step announcements, and keyboard navigability.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>Contextual inputs: requests location and problem summary without invasive personal data collection.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>Editable review step so customers verify their details before committing.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy & Performance Guarantee */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-teal shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-brand-navy">Privacy & Performance Integrity</p>
              <p className="text-xs text-brand-slate">
                Zero third-party tracking scripts, cookies, or persistent storage. Form data is strictly ephemeral and kept in browser memory.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-brand-navy bg-brand-offwhite border border-slate-200 px-3 py-1.5 rounded-lg whitespace-nowrap">
            Vercel Ready · Vite + React + TS
          </span>
        </div>
      </div>
    </section>
  );
}
