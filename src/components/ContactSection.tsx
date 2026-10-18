import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { GTA_SERVICE_AREAS } from '../types/serviceRequest';

interface ContactSectionProps {
  onRequestClick: () => void;
}

export function ContactSection({ onRequestClick }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-[#1B3448] border-b border-slate-700/70 relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact paths */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-2">
              Sample Inquiries &amp; Coverage
            </span>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
            >
              Contact Options &amp; GTA Coverage
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              In this design concept, homeowners have direct access to clear request pathways without getting trapped in endless voicemail menus or automated telemarketing bots.
            </p>

            {/* Clearly Labelled Sample Contact Cards: Elevated panels with glowing icon badges */}
            <div className="space-y-4 mb-8">
              <div className="group p-5 rounded-2xl border-2 border-[#3A566D] bg-[#203B50] hover:bg-[#26455D] flex items-start gap-4 shadow-md hover:border-[#0D9488] transition-all duration-200 hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-[#122B40] text-brand-teal-bright border border-[#3A566D] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Sample Phone Line</span>
                    <span className="text-[10px] font-bold text-amber-300 bg-[#122B40] border border-amber-500/70 px-2 py-0.5 rounded-md shadow-xs">
                      Demo Placeholder
                    </span>
                  </div>
                  <p className="text-base font-mono text-white font-bold mt-1 tracking-wide">(555) 019-2834</p>
                  <p className="text-xs text-[#CBD5E1] mt-1">
                    Non-operational fictional demonstration number.
                  </p>
                </div>
              </div>

              <div className="group p-5 rounded-2xl border-2 border-[#3A566D] bg-[#203B50] hover:bg-[#26455D] flex items-start gap-4 shadow-md hover:border-[#0D9488] transition-all duration-200 hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-[#122B40] text-brand-teal-bright border border-[#3A566D] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Sample Inquiries Inbox</span>
                    <span className="text-[10px] font-bold text-amber-300 bg-[#122B40] border border-amber-500/70 px-2 py-0.5 rounded-md shadow-xs">
                      Demo Placeholder
                    </span>
                  </div>
                  <p className="text-sm font-mono text-white font-semibold mt-1">
                    requests@northstar-plumbing.demo
                  </p>
                  <p className="text-xs text-[#CBD5E1] mt-1">
                    Non-operational fictional demonstration mailbox.
                  </p>
                </div>
              </div>

              <div className="group p-5 rounded-2xl border-2 border-[#3A566D] bg-[#203B50] hover:bg-[#26455D] flex items-start gap-4 shadow-md hover:border-[#0D9488] transition-all duration-200 hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-[#122B40] text-brand-teal-bright border border-[#3A566D] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:border-teal-400/50 transition-all">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white">Standard Service Hours (Concept)</span>
                  <p className="text-sm text-white font-semibold mt-1">Monday to Friday: 8:00 AM – 5:00 PM EST</p>
                  <p className="text-xs text-[#CBD5E1] mt-0.5">
                    Requests submitted outside hours are queued for next-business-day review.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onRequestClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D9488] hover:bg-[#0F766E] active:bg-[#115E59] text-white font-bold text-base rounded-2xl shadow-lg shadow-teal-950/80 hover:shadow-teal-900/90 border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright min-h-[50px] cursor-pointer"
              >
                <span>Open Service Request Form</span>
                <ArrowRight className="w-5 h-5 text-teal-200 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: GTA Service Coverage Area */}
          <div className="bg-[#203B50] rounded-3xl border-2 border-[#3A566D] p-7 sm:p-9 shadow-xl relative overflow-hidden">
            {/* Top ambient highlight line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-70" />

            <div className="flex items-center gap-2 text-brand-teal-bright font-bold text-sm mb-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Service Area Context</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Greater Toronto Area (GTA) Prototype Focus
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
              Small plumbing contractors thrive when customer location is gathered early to confirm travel radius before scheduling:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm">
              {GTA_SERVICE_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[#122B40] p-3.5 rounded-xl border border-[#3A566D] shadow-xs hover:border-[#0D9488] transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-teal-bright shrink-0 mt-1.5 shadow-xs" aria-hidden="true" />
                  <span className="text-white font-semibold">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-[#3A566D] text-xs text-[#CBD5E1] leading-relaxed">
              <strong className="text-white">Demo note:</strong> In a production implementation, Google Maps Place Autocomplete or postal code geofencing can be integrated to automatically determine travel fees and dispatch boundaries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
