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
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center mb-5 text-brand-teal">
            <Droplets className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'leak-repair':
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-5 text-brand-navy">
            <Wrench className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'water-heater':
        return (
          /* Warm amber accent detail on selected heating icon */
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-5 text-brand-amber">
            <Flame className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
          </div>
        );
      case 'other':
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-brand-navy">
            <PlusCircle className="w-5 h-5 stroke-[2]" aria-hidden="true" />
          </div>
        );
    }
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-brand-offwhite border-b border-slate-200"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Expert Residential Work
          </span>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3"
          >
            Plumbing Services
          </h2>
          <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
            Select a service below to start your request with that category pre-selected, or choose one directly inside the 4-step intake.
          </p>
        </div>

        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {SERVICE_OPTIONS.slice(0, 3).map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-brand-teal/40 hover:shadow-sm transition-all focus-within:ring-2 focus-within:ring-brand-teal"
            >
              <div>
                {getIcon(service.id)}
                <h3 className="text-lg font-bold text-brand-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Common examples list */}
                <div className="mb-6 pt-3.5 border-t border-slate-100">
                  <p className="text-xs font-semibold text-brand-slate mb-2">Common examples:</p>
                  <ul className="text-xs text-brand-slate space-y-1.5 list-disc list-inside">
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
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-navy hover:bg-brand-navy-light active:bg-brand-navy-dark text-white font-medium text-sm rounded-xl transition-all hover:bg-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal-border group-hover:text-white" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4th Service Option: General / Other */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start sm:items-center gap-4">
            {getIcon('other')}
            <div>
              <h3 className="text-base font-bold text-brand-navy">Have a different plumbing requirement?</h3>
              <p className="text-xs sm:text-sm text-brand-slate">
                Fixtures, shutoff valves, supply lines, or general residential inspections across the GTA.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('other')}
            aria-label="Request custom or other plumbing service"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-offwhite hover:bg-teal-50 text-brand-navy hover:text-brand-teal font-semibold text-sm rounded-xl border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal min-h-[44px] shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <span>Request other service</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
