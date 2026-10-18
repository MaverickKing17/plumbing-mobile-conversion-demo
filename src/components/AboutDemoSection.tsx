import { Zap, Accessibility, ShieldCheck, Check } from 'lucide-react';

export function AboutDemoSection() {
  return (
    <section
      id="about-demo"
      className="py-14 sm:py-20 bg-brand-navy border-b border-slate-800 relative"
      aria-labelledby="about-demo-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-2">
            Engineering &amp; UX Focus
          </span>
          <h2
            id="about-demo-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
          >
            Two Measurable Improvements for Small Plumbing Businesses
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            This portfolio project demonstrates two high-impact upgrades designed to help independent trade businesses modernize their web presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Improvement 1 Card */}
          <div className="group bg-gradient-to-b from-slate-900/95 via-[#13283c]/95 to-slate-900/95 rounded-3xl border-2 border-slate-700/90 p-7 sm:p-9 shadow-2xl hover:border-teal-400/60 hover:shadow-teal-950/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient top light line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400/70 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-13 h-13 rounded-2xl bg-teal-950/90 border-2 border-teal-400/50 text-brand-teal-bright flex items-center justify-center shadow-lg shadow-teal-950/60 group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-950/80 border border-teal-400/40 text-brand-teal-bright shadow-sm">
                  Mobile Speed &amp; UX
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                Improvement 1: Faster, Clearer Mobile Experience
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Homeowners dealing with a plumbing problem are often on a smartphone under stress. Heavy images, intrusive popups, and vague copy cause high bounce rates.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span><strong>Zero bloated dependencies:</strong> Native system font stack renders instantly with zero layout shifts.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span><strong>Immediate visual hierarchy:</strong> Headline, core offerings, and action visible without endless scrolling.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span><strong>Honest, credible messaging:</strong> Transparent GTA service scope without fabricated emergency claims.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Improvement 2 Card */}
          <div className="group bg-gradient-to-b from-slate-900/95 via-[#13283c]/95 to-slate-900/95 rounded-3xl border-2 border-slate-700/90 p-7 sm:p-9 shadow-2xl hover:border-teal-400/60 hover:shadow-teal-950/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient top light line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400/70 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-13 h-13 rounded-2xl bg-teal-950/90 border-2 border-teal-400/50 text-brand-teal-bright flex items-center justify-center shadow-lg shadow-teal-950/60 group-hover:scale-105 transition-transform">
                  <Accessibility className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-950/80 border border-teal-400/40 text-brand-teal-bright shadow-sm">
                  Accessibility &amp; Flow
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                Improvement 2: Accessible 4-Step Intake Flow
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Replaces cluttered generic contact forms with an intuitive, guided intake that structures incoming homeowner requests before a phone call is even placed.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span><strong>WCAG 2.2 AA compliant:</strong> Explicit labels, ARIA live step announcements, and full keyboard navigation.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span><strong>Contextual intake:</strong> Captures location and problem summary cleanly without invasive personal data harvesting.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-5 h-5 rounded-full bg-teal-950 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span><strong>Editable review summary:</strong> Homeowners can verify their details and return to any step before confirming.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy & Performance Guarantee */}
        <div className="mt-8 bg-gradient-to-r from-slate-900/95 via-[#13283c] to-slate-900/95 rounded-3xl border-2 border-slate-700/90 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-950/90 border border-teal-400/50 text-brand-teal-bright flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 stroke-[2]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-bold text-white mb-0.5">Privacy &amp; Performance Integrity</p>
              <p className="text-xs sm:text-sm text-slate-300">
                Form data is strictly ephemeral in browser memory with zero server tracking. The embedded AI Receptionist operates as an interactive trade inquiry demo.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-brand-teal-bright bg-teal-950/80 border-2 border-teal-500/40 px-4 py-2 rounded-xl whitespace-nowrap shadow-sm">
            Vercel Ready · Vite + React + TS
          </span>
        </div>
      </div>
    </section>
  );
}
