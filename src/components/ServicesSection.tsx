import { Droplets, Wrench, Flame, PlusCircle, ArrowRight } from 'lucide-react';
import { ServiceType, SERVICE_OPTIONS } from '../types/serviceRequest';

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
      className="py-14 sm:py-20 bg-brand-darkblue border-b border-slate-800 relative"
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
              className="group bg-gradient-to-b from-slate-900/95 via-[#13283c]/95 to-slate-900/95 rounded-3xl border-2 border-slate-700/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-teal-400/60 hover:shadow-teal-950/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden focus-within:ring-2 focus-within:ring-brand-teal-bright"
            >
              {/* Subtle top ambient glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {getIcon(service.id)}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Polished contrast panel for common examples */}
                <div className="mb-6 bg-slate-950/60 rounded-2xl p-4 border border-slate-800 shadow-inner">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright mb-2.5">
                    Common Examples:
                  </p>
                  <ul className="text-xs text-slate-200 space-y-2 list-none p-0">
                    {service.commonExamples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  aria-label={`Request ${service.title.toLowerCase()} service`}
                  className="group/btn w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:via-teal-500 hover:to-teal-400 active:from-teal-700 active:to-teal-600 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-teal-950/70 hover:shadow-teal-500/30 hover:shadow-xl border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[48px] cursor-pointer"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-4 h-4 text-teal-200 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4th Service Option: General / Other */}
        <div className="mt-8 bg-gradient-to-r from-slate-900/95 via-[#13283c] to-slate-900/95 rounded-3xl border-2 border-slate-700/90 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-start sm:items-center gap-4">
            {getIcon('other')}
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Have a different plumbing requirement?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fixtures, main shutoff valves, supply lines, or general residential inspections across the GTA.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('other')}
            aria-label="Request custom or other plumbing service"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border-2 border-teal-400/50 hover:border-teal-400 shadow-md hover:shadow-teal-900/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright min-h-[46px] shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <span>Request other service</span>
            <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
