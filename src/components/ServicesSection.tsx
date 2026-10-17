import { Droplets, Wrench, Flame, PlusCircle, ArrowRight } from 'lucide-react';
import { ServiceType, SERVICE_OPTIONS } from '../types/serviceRequest';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceType) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (id: ServiceType) => {
    switch (id) {
      case 'drain-cleaning':
        return <Droplets className="w-6 h-6 text-sky-600" aria-hidden="true" />;
      case 'leak-repair':
        return <Wrench className="w-6 h-6 text-blue-700" aria-hidden="true" />;
      case 'water-heater':
        return <Flame className="w-6 h-6 text-amber-600" aria-hidden="true" />;
      case 'other':
      default:
        return <PlusCircle className="w-6 h-6 text-slate-700" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3"
          >
            Plumbing Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select a service below to start your request with that service pre-selected, or choose one directly in the request flow.
          </p>
        </div>

        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {SERVICE_OPTIONS.slice(0, 3).map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all focus-within:ring-2 focus-within:ring-blue-600"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5">
                  {getIcon(service.id)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Common examples list for real-world clarity */}
                <div className="mb-6 pt-3 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Common examples:</p>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
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
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-medium text-sm rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 4th Service Option: General / Other */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <PlusCircle className="w-5 h-5 text-slate-700" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Have a different plumbing requirement?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fixtures, shutoff valves, supply lines, or general residential inspections across the GTA.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('other')}
            aria-label="Request custom or other plumbing service"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[44px] shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <span>Request other service</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
