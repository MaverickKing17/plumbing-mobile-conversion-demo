import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { GTA_SERVICE_AREAS } from '../types/serviceRequest';

interface ContactSectionProps {
  onRequestClick: () => void;
}

export function ContactSection({ onRequestClick }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact paths */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
              Sample Inquiries & Coverage
            </span>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-4"
            >
              Contact Options & GTA Coverage
            </h2>
            <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-6">
              In this design concept, homeowners have direct access to clear request pathways without getting trapped in endless voicemail menus or automated telemarketing bots.
            </p>

            {/* Clearly Labelled Sample Contact Cards */}
            <div className="space-y-3.5 mb-8">
              <div className="p-4 rounded-xl border border-slate-200 bg-brand-offwhite flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal border border-teal-100 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-navy">Sample Phone Line</span>
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded">
                      Demo Placeholder
                    </span>
                  </div>
                  <p className="text-sm font-mono text-brand-navy font-medium mt-0.5">(555) 019-2834</p>
                  <p className="text-xs text-brand-slate-light mt-1">
                    Non-operational fictional demonstration number.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-brand-offwhite flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal border border-teal-100 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-navy">Sample Inquiries Inbox</span>
                    <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded">
                      Demo Placeholder
                    </span>
                  </div>
                  <p className="text-sm font-mono text-brand-navy font-medium mt-0.5">
                    requests@northstar-plumbing.demo
                  </p>
                  <p className="text-xs text-brand-slate-light mt-1">
                    Non-operational fictional demonstration mailbox.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-brand-offwhite flex items-start gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-teal border border-teal-100 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-navy">Standard Service Hours (Concept)</span>
                  <p className="text-sm text-brand-navy font-medium mt-0.5">Monday to Friday: 8:00 AM – 5:00 PM EST</p>
                  <p className="text-xs text-brand-slate-light mt-0.5">
                    Requests submitted outside hours are queued for next-business-day review.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onRequestClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-teal hover:bg-brand-teal-hover active:bg-brand-teal-active text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal min-h-[44px] cursor-pointer"
              >
                <span>Open Service Request Form</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: GTA Service Coverage Area */}
          <div className="bg-brand-offwhite rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2 text-brand-teal font-bold text-sm mb-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Service Area Context</span>
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-3">
              Greater Toronto Area (GTA) Prototype Focus
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-5">
              Small plumbing contractors thrive when customer location is gathered early to confirm travel radius before scheduling:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-slate">
              {GTA_SERVICE_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-brand-teal shrink-0 mt-1.5" aria-hidden="true" />
                  <span className="text-brand-navy font-medium">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-200 text-xs text-brand-slate-light leading-relaxed">
              <strong className="text-brand-navy">Demo note:</strong> In a production implementation, Google Maps Place Autocomplete or postal code geofencing can be integrated to automatically determine travel fees and dispatch boundaries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
