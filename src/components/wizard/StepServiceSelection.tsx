import { Droplets, Wrench, Flame, PlusCircle, Check } from 'lucide-react';
import { ServiceType, SERVICE_OPTIONS } from '../../types/serviceRequest';

interface StepServiceSelectionProps {
  selectedService: ServiceType | '';
  onSelect: (service: ServiceType) => void;
  error?: string;
}

export function StepServiceSelection({
  selectedService,
  onSelect,
  error,
}: StepServiceSelectionProps) {
  const getServiceVisuals = (id: ServiceType, isSelected: boolean) => {
    switch (id) {
      case 'drain-cleaning':
        return {
          icon: <Droplets className="w-5 h-5 text-teal-600" aria-hidden="true" />,
          badgeText: 'Most Requested',
          badgeClass: 'bg-teal-100/80 text-teal-800 border-teal-200',
          iconBg: isSelected
            ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25 ring-2 ring-teal-200'
            : 'bg-teal-50 text-teal-700 border border-teal-200/80',
        };
      case 'leak-repair':
        return {
          icon: <Wrench className="w-5 h-5 text-brand-navy" aria-hidden="true" />,
          badgeText: 'Priority Diagnostics',
          badgeClass: 'bg-blue-100/80 text-blue-900 border-blue-200',
          iconBg: isSelected
            ? 'bg-brand-navy text-white shadow-md shadow-slate-900/25 ring-2 ring-blue-200'
            : 'bg-blue-50 text-brand-navy border border-blue-200/80',
        };
      case 'water-heater':
        return {
          icon: <Flame className="w-5 h-5 text-amber-600" aria-hidden="true" />,
          badgeText: 'Tank & Tankless',
          badgeClass: 'bg-amber-100/80 text-amber-900 border-amber-200',
          iconBg: isSelected
            ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25 ring-2 ring-amber-200'
            : 'bg-amber-50 text-amber-700 border border-amber-200/80',
        };
      case 'other':
      default:
        return {
          icon: <PlusCircle className="w-5 h-5 text-slate-700" aria-hidden="true" />,
          badgeText: 'Custom Scope',
          badgeClass: 'bg-slate-100 text-slate-800 border-slate-200',
          iconBg: isSelected
            ? 'bg-slate-700 text-white shadow-md shadow-slate-700/25 ring-2 ring-slate-200'
            : 'bg-slate-100 text-slate-700 border border-slate-200',
        };
    }
  };

  return (
    <fieldset className="border-0 p-0 m-0">
      {/* Category Header Badge & Title */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>Step 1 · Plumbing Service Category</span>
        </div>
        <legend className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight block">
          What plumbing service do you need?
        </legend>
        <p className="text-xs sm:text-sm text-brand-slate mt-1.5 leading-relaxed">
          Select the category that best matches your situation. You can describe specific symptoms and urgency in the next step.
        </p>
      </div>

      {error && (
        <div
          id="service-error"
          role="alert"
          className="mb-5 p-4 bg-red-50 border-2 border-red-300 text-red-900 text-xs sm:text-sm rounded-2xl flex items-center gap-3 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
          <span className="font-bold text-red-900">Selection required:</span>
          <span>{error}</span>
        </div>
      )}

      <div
        role="radiogroup"
        aria-labelledby="services-legend"
        aria-describedby={error ? 'service-error' : undefined}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {SERVICE_OPTIONS.map((option) => {
          const isSelected = selectedService === option.id;
          const visuals = getServiceVisuals(option.id, isSelected);

          return (
            <div
              key={option.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelect(option.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelect(option.id);
                }
              }}
              className={`group p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left relative flex flex-col justify-between min-h-[140px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
                isSelected
                  ? 'border-brand-teal bg-gradient-to-br from-teal-50/90 via-white to-teal-50/30 shadow-lg shadow-teal-900/10 ring-2 ring-brand-teal/20 -translate-y-0.5'
                  : 'border-slate-200/90 bg-white hover:border-teal-300 hover:bg-slate-50/80 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              <div>
                {/* Header row: Icon, Category Title, Badge & Radio Indicator */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${visuals.iconBg}`}
                    >
                      {visuals.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="font-bold text-base text-brand-navy tracking-tight group-hover:text-brand-teal transition-colors">
                          {option.title}
                        </span>
                      </div>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${visuals.badgeClass}`}>
                        {visuals.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Radio Visual Indicator */}
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isSelected
                        ? 'border-brand-teal bg-brand-teal text-white shadow-sm ring-2 ring-teal-200'
                        : 'border-slate-300 bg-white group-hover:border-teal-400'
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-slate-200 transition-colors" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-brand-slate leading-relaxed pl-1">
                  {option.shortDescription}
                </p>
              </div>

              {/* Scannable Example Tags */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Examples:
                </span>
                {option.commonExamples.slice(0, 2).map((example, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium transition-colors ${
                      isSelected
                        ? 'bg-teal-100/70 text-teal-900 border border-teal-200/80 font-semibold'
                        : 'bg-slate-100/80 text-slate-600 border border-slate-200/60'
                    }`}
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
