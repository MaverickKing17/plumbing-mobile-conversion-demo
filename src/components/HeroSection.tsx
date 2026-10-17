import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onRequestService: () => void;
  onExploreServices: () => void;
}

export function HeroSection({ onRequestService, onExploreServices }: HeroSectionProps) {
  return (
    <section id="home" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-brand-offwhite border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            {/* Subtle contextual descriptor */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-slate mb-3.5 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 text-brand-teal font-semibold">
                <MapPin className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                <span>Greater Toronto Area</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-brand-slate">Residential & Commercial</span>
            </div>

            {/* Main Headline in Deep Navy */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] sm:leading-[1.15] mb-4 sm:mb-5">
              Plumbing service requests, made simple.
            </h1>

            {/* Supporting Text in Slate Gray */}
            <p className="text-base sm:text-lg text-brand-slate leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Tell us what plumbing help you need and review your request in a few straightforward steps. Designed for mobile speed, clear communication, and zero hassle.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={onRequestService}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-teal hover:bg-brand-teal-hover active:bg-brand-teal-active text-white font-semibold text-base rounded-xl shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 min-h-[48px] cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-brand-offwhite text-brand-navy font-semibold text-base rounded-xl border border-slate-300 shadow-2xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 min-h-[48px] cursor-pointer"
              >
                Explore Services
              </button>
            </div>

            {/* Value Proof Strip in Slate and Teal */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-brand-slate">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" aria-hidden="true" />
                <span>4 clear steps, no hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" aria-hidden="true" />
                <span>In-memory only demo data</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" aria-hidden="true" />
                <span>Accessible & mobile-first</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Highlight Box (Clean, high-converting visual element) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-teal/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-lg bg-teal-50 text-brand-teal">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                  Quick Service Intake Concept
                </span>
                {/* Warm amber accent detail */}
                <span className="ml-auto w-2 h-2 rounded-full bg-brand-amber" title="Live demo prototype" aria-hidden="true" />
              </div>

              <h2 className="text-base font-bold text-brand-navy mb-2">
                Average request time: Under 2 minutes
              </h2>
              <p className="text-xs text-brand-slate mb-5 leading-relaxed">
                Homeowners submit structured details upfront so plumbers arrive prepared with the right equipment and parts.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-brand-offwhite border border-slate-200/80 flex items-center justify-between">
                  <span className="font-medium text-brand-navy">1. Select Problem Category</span>
                  <span className="text-brand-teal font-semibold">Immediate</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-offwhite border border-slate-200/80 flex items-center justify-between">
                  <span className="font-medium text-brand-navy">2. Provide Municipality</span>
                  <span className="text-brand-teal font-semibold">1-Tap Fill</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-offwhite border border-slate-200/80 flex items-center justify-between">
                  <span className="font-medium text-brand-navy">3. Preferred Contact Mode</span>
                  <span className="text-brand-teal font-semibold">Phone or Email</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-slate">
                <span>Greater Toronto Area coverage</span>
                <button
                  type="button"
                  onClick={onRequestService}
                  className="font-bold text-brand-teal hover:underline cursor-pointer"
                >
                  Start Demo &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
