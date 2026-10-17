import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { GTA_SERVICE_AREAS } from '../types/serviceRequest';

interface ContactSectionProps {
  onRequestClick: () => void;
}

export function ContactSection({ onRequestClick }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-brand-darkblue border-b border-slate-800 relative"
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

            {/* Clearly Labelled Sample Contact Cards: Deep navy panels (#102A43) */}
            <div className="space-y-4 mb-8">
              <div className="p-4.5 rounded-xl border border-slate-700 bg-brand-navy flex items-start gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 text-brand-teal-bright border border-teal-700/60 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Sample Phone Line</span>
                    <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/80 border border-amber-700/70 px-2 py-0.5 rounded">
                      Demo Placeholder
                    </span>
                  </div>
                  <p className="text-sm font-mono text-white font-medium mt-1">(555) 019-2834</p>
                  <p className="text-xs text-brand-muted mt-1">
                    Non-operational fictional demonstration number.
                  </p>
                </div>
              </div>

              <div className="p-4.5 rounded-xl border border-slate-700 bg-brand-navy flex items-start gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 text-brand-teal-bright border border-teal-700/60 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">Sample Inquiries Inbox</span>
                    <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/80 border border-amber-700/70 px-2 py-0.5 rounded">
                      Demo Placeholder
                    </span>
                  </div>
                  <p className="text-sm font-mono text-white font-medium mt-1">
                    requests@northstar-plumbing.demo
                  </p>
                  <p className="text-xs text-brand-muted mt-1">
                    Non-operational fictional demonstration mailbox.
                  </p>
                </div>
              </div>

              <div className="p-4.5 rounded-xl border border-slate-700 bg-brand-navy flex items-start gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-teal-950/80 text-brand-teal-bright border border-teal-700/60 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white">Standard Service Hours (Concept)</span>
                  <p className="text-sm text-white font-medium mt-1">Monday to Friday: 8:00 AM – 5:00 PM EST</p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Requests submitted outside hours are queued for next-business-day review.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onRequestClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-teal hover:bg-brand-teal-hover active:bg-brand-teal-active text-white font-semibold text-sm rounded-xl shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright min-h-[44px] cursor-pointer"
              >
                <span>Open Service Request Form</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: GTA Service Coverage Area */}
          <div className="bg-brand-navy rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2 text-brand-teal-bright font-bold text-sm mb-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Service Area Context</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Greater Toronto Area (GTA) Prototype Focus
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
              Small plumbing contractors thrive when customer location is gathered early to confirm travel radius before scheduling:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm">
              {GTA_SERVICE_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-brand-darkblue p-3.5 rounded-xl border border-slate-700/90 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-teal-bright shrink-0 mt-1.5" aria-hidden="true" />
                  <span className="text-slate-100 font-medium">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-brand-muted leading-relaxed">
              <strong className="text-white">Demo note:</strong> In a production implementation, Google Maps Place Autocomplete or postal code geofencing can be integrated to automatically determine travel fees and dispatch boundaries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
