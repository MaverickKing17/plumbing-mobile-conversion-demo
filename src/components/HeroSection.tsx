import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Gauge, Clock, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onRequestService: () => void;
  onExploreServices: () => void;
}

export function HeroSection({ onRequestService, onExploreServices }: HeroSectionProps) {
  return (
    <section id="home" className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navy to-brand-darkblue border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-navy-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            {/* Subtle contextual descriptor */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium mb-4">
              <span className="inline-flex items-center gap-1.5 text-brand-teal-bright font-semibold">
                <MapPin className="w-4 h-4 text-brand-teal-bright" aria-hidden="true" />
                <span>Greater Toronto Area</span>
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-brand-muted">Residential &amp; Commercial Plumbing Concept</span>
            </div>

            {/* Main Headline in White */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Plumbing service requests, made simple.
            </h1>

            {/* Supporting Text in Muted Light-Gray (#CBD5E1) */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl">
              Tell us what plumbing help you need and review your request in a few straightforward steps. Designed for mobile speed, clear communication, and zero hassle.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onRequestService}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-teal hover:bg-brand-teal-hover active:bg-brand-teal-active text-white font-semibold text-base rounded-xl shadow-lg shadow-teal-950/60 hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy min-h-[48px] cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-darkblue hover:bg-brand-navy-light text-white font-semibold text-base rounded-xl border border-slate-700 shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy min-h-[48px] cursor-pointer"
              >
                Explore Services
              </button>
            </div>

            {/* Trust and Benefits Strip: Dark blue-gray panels (#1B3448) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 bg-brand-darkblue/90 border border-slate-700/80 rounded-xl p-3 text-brand-muted shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0" aria-hidden="true" />
                <span>4 clear steps, no hidden questions</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-darkblue/90 border border-slate-700/80 rounded-xl p-3 text-brand-muted shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-teal-bright shrink-0" aria-hidden="true" />
                <span>In-memory only demo data</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-darkblue/90 border border-slate-700/80 rounded-xl p-3 text-brand-muted shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-teal-bright shrink-0" aria-hidden="true" />
                <span>Accessible &amp; mobile-first</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Plumbing Showcase Panel */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="bg-brand-darkblue/95 rounded-3xl border border-slate-700 p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Header badge */}
              <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-teal-950/80 border border-teal-700/60 text-brand-teal-bright">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                      Structured Intake System
                    </h2>
                    <p className="text-[11px] text-brand-muted">Precision Request Architecture</p>
                  </div>
                </div>

                {/* Amber status accent */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-700/70 text-amber-300 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" aria-hidden="true" />
                  <span>Demo Mode</span>
                </div>
              </div>

              {/* Metric bar */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-brand-navy border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-1">
                    <Clock className="w-3.5 h-3.5 text-brand-teal-bright" />
                    <span>Average Intake</span>
                  </div>
                  <p className="text-lg font-bold text-white">&lt; 2 Minutes</p>
                </div>
                <div className="p-3 rounded-xl bg-brand-navy border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-1">
                    <Gauge className="w-3.5 h-3.5 text-brand-teal-bright" />
                    <span>Clarity Score</span>
                  </div>
                  <p className="text-lg font-bold text-white">100% WCAG AA</p>
                </div>
              </div>

              {/* Visual Workflow Steps */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-brand-navy/80 border border-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-200">1. Problem Diagnosis</span>
                  <span className="text-brand-teal-bright font-semibold">Pre-selected</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-navy/80 border border-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-200">2. GTA Municipality</span>
                  <span className="text-brand-teal-bright font-semibold">1-Tap Location</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-navy/80 border border-slate-800 flex items-center justify-between">
                  <span className="font-medium text-slate-200">3. Contact Preference</span>
                  <span className="text-brand-teal-bright font-semibold">Phone or Email</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-brand-muted">
                <span>Toronto &amp; Greater Area</span>
                <button
                  type="button"
                  onClick={onRequestService}
                  className="font-bold text-brand-teal-bright hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Test Flow</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
