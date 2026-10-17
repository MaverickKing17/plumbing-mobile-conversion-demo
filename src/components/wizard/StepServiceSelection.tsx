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
  const getIcon = (id: ServiceType) => {
    switch (id) {
      case 'drain-cleaning':
        return <Droplets className="w-5 h-5 text-brand-teal" aria-hidden="true" />;
      case 'leak-repair':
        return <Wrench className="w-5 h-5 text-brand-navy" aria-hidden="true" />;
      case 'water-heater':
        return <Flame className="w-5 h-5 text-brand-amber" aria-hidden="true" />;
      case 'other':
      default:
        return <PlusCircle className="w-5 h-5 text-brand-slate" aria-hidden="true" />;
    }
  };

  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="text-lg sm:text-xl font-bold text-brand-navy mb-1">
        1. Select a plumbing service
      </legend>
      <p className="text-xs sm:text-sm text-brand-slate mb-6">
        Choose the category that best matches your situation. You can describe the specific problem in the next step.
      </p>

      {error && (
        <div
          id="service-error"
          role="alert"
          className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm rounded-xl flex items-center gap-2"
        >
          <span className="font-semibold text-red-900">Required:</span>
          <span>{error}</span>
        </div>
      )}

      <div
        role="radiogroup"
        aria-labelledby="services-legend"
        aria-describedby={error ? 'service-error' : undefined}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
      >
        {SERVICE_OPTIONS.map((option) => {
          const isSelected = selectedService === option.id;

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
              className={`p-4.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left relative flex flex-col justify-between min-h-[115px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal hover:-translate-y-0.5 ${
                isSelected
                  ? 'border-teal-500 bg-teal-50/80 shadow-md ring-2 ring-teal-500/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-teal-100 text-teal-800' : 'bg-slate-100/90'
                    }`}>
                      {getIcon(option.id)}
                    </div>
                    <span className="font-bold text-sm sm:text-base text-brand-navy">
                      {option.title}
                    </span>
                  </div>

                  {/* Radio Visual Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-teal-500 bg-teal-500 text-white shadow-xs'
                        : 'border-slate-300 bg-white'
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                <p className="text-xs text-brand-slate leading-relaxed pl-10">
                  {option.shortDescription}
                </p>
              </div>

              {/* Common tags */}
              <div className="mt-3 pt-2 border-t border-slate-100/80 pl-10 text-[11px] text-brand-slate-light">
                <span>Eg: {option.commonExamples[0]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
