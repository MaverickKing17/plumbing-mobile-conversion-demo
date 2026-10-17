import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onRequestService: () => void;
  onExploreServices: () => void;
}

export function HeroSection({ onRequestService, onExploreServices }: HeroSectionProps) {
  return (
    <section id="home" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Subtle contextual descriptor */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1 text-blue-700">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Greater Toronto Area</span>
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span>Mobile-First Plumbing Concept</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight md:leading-tight mb-4 sm:mb-5">
            Plumbing service requests, made simple.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Tell us what plumbing help you need and review your request in a few straightforward steps. Designed for mobile speed, clear communication, and zero hassle.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button
              type="button"
              onClick={onRequestService}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold text-base rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[48px] cursor-pointer"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base rounded-xl border border-slate-300 shadow-2xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[48px] cursor-pointer"
            >
              Explore Services
            </button>
          </div>

          {/* Value Proof Strip (Unboxed metadata, WCAG AA compliant) */}
          <div className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>4 clear steps, no hidden questions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>In-memory only demo data</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>Accessible & screen reader ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
