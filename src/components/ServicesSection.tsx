import { Droplets, Wrench, Flame, PlusCircle, ArrowRight, Bot } from 'lucide-react';
import { ServiceType, SERVICE_OPTIONS } from '../types/serviceRequest';
import { openBotpressChat } from '../utils/botpressManager';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceType) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (id: ServiceType) => {
    switch (id) {
      case 'drain-cleaning':
        return (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-950 to-teal-900/80 border-2 border-teal-400/50 flex items-center justify-center mb-6 text-brand-teal-bright shadow-lg shadow-teal-950/60 group-hover:scale-105 transition-transform">
            <Droplets className="w-7 h-7 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'leak-repair':
        return (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-teal-400/40 flex items-center justify-center mb-6 text-brand-teal-bright shadow-lg shadow-slate-950/60 group-hover:scale-105 transition-transform">
            <Wrench className="w-7 h-7 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'water-heater':
        return (
          /* Warm amber accent detail on heating icon */
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-950 to-amber-900/80 border-2 border-amber-400/50 flex items-center justify-center mb-6 text-amber-400 shadow-lg shadow-amber-950/60 group-hover:scale-105 transition-transform">
            <Flame className="w-7 h-7 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'other':
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-brand-teal-bright shadow-md">
            <PlusCircle className="w-6 h-6 stroke-[2]" aria-hidden="true" />
          </div>
        );
    }
  };

  return (
    <section
      id="services"
      className="py-14 sm:py-20 bg-[#1B3448] border-b border-slate-700/70 relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-2">
            Professional GTA Services
          </span>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
          >
            Plumbing Services
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Select a service category below to start your request with that option pre-selected, or choose one directly inside the service-request flow.
          </p>
        </div>

        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_OPTIONS.slice(0, 3).map((service) => (
            <article
              key={service.id}
              className="group bg-[#203B50] hover:bg-[#26455D] rounded-3xl border-2 border-[#3A566D] hover:border-[#0D9488] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-teal-950/50 transition-all duration-200 hover:-translate-y-1.5 relative overflow-hidden focus-within:ring-2 focus-within:ring-brand-teal-bright"
            >
              {/* Subtle top ambient glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {getIcon(service.id)}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Secondary nested panel surface: #122B40 with #3A566D border */}
                <div className="mb-6 bg-[#122B40] rounded-2xl p-4 border border-[#3A566D] shadow-inner">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright mb-2.5">
                    Common Examples:
                  </p>
                  <ul className="text-xs text-slate-200 space-y-2 list-none p-0">
                    {service.commonExamples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  aria-label={`Request ${service.title.toLowerCase()} service`}
                  className="group/btn w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] active:bg-[#115E59] text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-teal-950/60 hover:shadow-teal-900/80 border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[48px] cursor-pointer"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-4 h-4 text-teal-200 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => openBotpressChat(`I need fast assistance or a quote regarding ${service.title} in the GTA.`)}
                  aria-label={`Ask AI Receptionist about ${service.title.toLowerCase()}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-brand-teal-bright hover:text-white bg-[#122B40] hover:bg-[#183149] rounded-xl border border-[#3A566D] hover:border-brand-teal transition-all cursor-pointer min-h-[38px]"
                >
                  <Bot className="w-3.5 h-3.5 text-brand-teal-bright" />
                  <span>Ask 24/7 AI Receptionist</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4th Service Option: General / Other */}
        <div className="mt-8 bg-[#203B50] rounded-3xl border-2 border-[#3A566D] hover:border-[#0D9488] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden transition-all duration-200">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-[#122B40] rounded-2xl border border-[#3A566D] shrink-0">
              {getIcon('other')}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Have a different plumbing requirement?</h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Fixtures, main shutoff valves, supply lines, or general residential inspections across the GTA.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('other')}
            aria-label="Request custom or other plumbing service"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#122B40] hover:bg-[#16334B] text-white font-bold text-sm rounded-xl border border-[#3A566D] hover:border-teal-400 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright min-h-[46px] shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <span>Request other service</span>
            <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
