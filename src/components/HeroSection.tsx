import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Gauge, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { openBotpressChat } from '../utils/botpressManager';

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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onRequestService}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:via-teal-500 hover:to-teal-400 active:from-teal-700 active:to-teal-600 text-white font-bold text-base rounded-2xl shadow-xl shadow-teal-950/80 hover:shadow-teal-500/30 hover:shadow-2xl border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy min-h-[52px] cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-5 h-5 text-teal-200 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => openBotpressChat('Hello! I would like to speak with the AI Receptionist about a plumbing issue in Toronto.')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#122B40] hover:bg-[#183149] text-brand-teal-bright hover:text-white font-bold text-base rounded-2xl border-2 border-[#3A566D] hover:border-brand-teal shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[52px] cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <MessageSquare className="w-4 h-4 text-brand-teal-bright" />
                <span>Chat with AI (24/7)</span>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-4 bg-[#203B50] hover:bg-[#26455D] text-slate-200 hover:text-white font-bold text-base rounded-2xl border-2 border-[#3A566D] hover:border-[#2DD4BF] shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy min-h-[52px] cursor-pointer"
              >
                Services
              </button>
            </div>

            {/* Trust and Benefits Strip: Enhanced Value Proposition Cards with luminous accents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm">
              <div className="group flex items-center gap-3 bg-[#203B50] hover:bg-[#26455D] border border-[#3A566D] hover:border-[#0D9488] rounded-2xl p-3.5 text-slate-100 shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <span className="w-8 h-8 rounded-xl bg-[#122B40] border border-[#3A566D] text-brand-teal-bright flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-bright" aria-hidden="true" />
                </span>
                <span className="font-semibold text-white leading-snug">4 clear steps, no hidden questions</span>
              </div>
              <div className="group flex items-center gap-3 bg-[#203B50] hover:bg-[#26455D] border border-[#3A566D] hover:border-[#0D9488] rounded-2xl p-3.5 text-slate-100 shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <span className="w-8 h-8 rounded-xl bg-[#122B40] border border-[#3A566D] text-brand-teal-bright flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-bright" aria-hidden="true" />
                </span>
                <span className="font-semibold text-white leading-snug">In-memory only demo data</span>
              </div>
              <div className="group flex items-center gap-3 bg-[#203B50] hover:bg-[#26455D] border border-[#3A566D] hover:border-[#0D9488] rounded-2xl p-3.5 text-slate-100 shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <span className="w-8 h-8 rounded-xl bg-[#122B40] border border-[#3A566D] text-brand-teal-bright flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                  <ShieldCheck className="w-4 h-4 text-brand-teal-bright" aria-hidden="true" />
                </span>
                <span className="font-semibold text-white leading-snug">Accessible &amp; mobile-first</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Plumbing Showcase Panel */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="bg-[#203B50] rounded-3xl border border-[#3A566D] p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Decorative top ambient glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

              {/* Header badge */}
              <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-[#3A566D]">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-[#122B40] border border-[#3A566D] text-brand-teal-bright shadow-inner">
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
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#122B40] border border-amber-500/70 text-amber-300 text-[11px] font-bold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" aria-hidden="true" />
                  <span>Demo Mode</span>
                </div>
              </div>

              {/* Metric bar: Nested Panels using #122B40 with #3A566D border */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                <div className="p-4 rounded-2xl bg-[#122B40] border border-[#3A566D] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-brand-teal-bright font-medium mb-1">
                    <Clock className="w-3.5 h-3.5 text-brand-teal-bright" />
                    <span>Average Intake</span>
                  </div>
                  <p className="text-xl font-bold text-white">&lt; 2 Minutes</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#122B40] border border-[#3A566D] shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-brand-teal-bright font-medium mb-1">
                    <Gauge className="w-3.5 h-3.5 text-brand-teal-bright" />
                    <span>Clarity Score</span>
                  </div>
                  <p className="text-xl font-bold text-white">100% WCAG AA</p>
                </div>
              </div>

              {/* Visual Workflow Steps: Nested Panels using #122B40 */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-between">
                  <span className="font-semibold text-slate-100">1. Problem Diagnosis</span>
                  <span className="text-brand-teal-bright font-bold">Pre-selected</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-between">
                  <span className="font-semibold text-slate-100">2. GTA Municipality</span>
                  <span className="text-brand-teal-bright font-bold">1-Tap Location</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-between">
                  <span className="font-semibold text-slate-100">3. Contact Preference</span>
                  <span className="text-brand-teal-bright font-bold">Phone or Email</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3A566D] flex items-center justify-between text-xs text-brand-muted">
                <span className="text-slate-400">Toronto &amp; Greater Area</span>
                <button
                  type="button"
                  onClick={onRequestService}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] border border-teal-300/40 font-bold text-white transition-all cursor-pointer shadow-sm hover:shadow-teal-950/40"
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
