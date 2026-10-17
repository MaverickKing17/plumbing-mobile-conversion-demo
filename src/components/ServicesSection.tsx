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
          <div className="w-12 h-12 rounded-xl bg-teal-950/70 border border-teal-700/60 flex items-center justify-center mb-5 text-brand-teal-bright shadow-sm">
            <Droplets className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'leak-repair':
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center mb-5 text-teal-300 shadow-sm">
            <Wrench className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'water-heater':
        return (
          /* Warm amber accent detail on heating icon */
          <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-700/70 flex items-center justify-center mb-5 text-brand-amber shadow-sm">
            <Flame className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'other':
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-teal-bright">
            <PlusCircle className="w-5 h-5 stroke-[2]" aria-hidden="true" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_OPTIONS.slice(0, 3).map((service) => (
            <article
              key={service.id}
              className="bg-brand-navy rounded-2xl border border-slate-700/90 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-brand-teal-bright/60 hover:shadow-2xl transition-all focus-within:ring-2 focus-within:ring-brand-teal-bright"
            >
              <div>
                {getIcon(service.id)}
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Light content surface for readable common examples */}
                <div className="mb-6 bg-brand-offwhite rounded-xl p-3.5 border border-slate-200/90 shadow-inner">
                  <p className="text-xs font-bold text-slate-900 mb-2">Common examples:</p>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    {service.commonExamples.map((example, idx) => (
                      <li key={idx} className="leading-normal">{example}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  aria-label={`Request ${service.title.toLowerCase()} service`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-teal hover:bg-brand-teal-hover active:bg-brand-teal-active text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-teal-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy min-h-[44px] cursor-pointer"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal-border" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4th Service Option: General / Other */}
        <div className="mt-8 bg-brand-navy rounded-2xl border border-slate-700/90 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xl">
          <div className="flex items-start sm:items-center gap-4">
            {getIcon('other')}
            <div>
              <h3 className="text-base font-bold text-white">Have a different plumbing requirement?</h3>
              <p className="text-xs sm:text-sm text-brand-muted">
                Fixtures, main shutoff valves, supply lines, or general residential inspections across the GTA.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('other')}
            aria-label="Request custom or other plumbing service"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-darkblue hover:bg-brand-navy-light text-brand-teal-bright hover:text-white font-semibold text-sm rounded-xl border border-slate-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright min-h-[44px] shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <span>Request other service</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
