import { Check } from 'lucide-react';
import { StepNumber } from '../../types/serviceRequest';

interface ProgressIndicatorProps {
  currentStep: StepNumber;
  onStepClick?: (step: StepNumber) => void;
  maxAccessibleStep: StepNumber;
}

const STEP_LABELS: Record<StepNumber, string> = {
  1: 'Select Service',
  2: 'Describe Issue',
  3: 'Contact Info',
  4: 'Review & Confirm',
};

const STEP_SUBTITLES: Record<StepNumber, string> = {
  1: 'Category',
  2: 'Location & urgency',
  3: 'Demo contact',
  4: 'Final check',
};

export function ProgressIndicator({
  currentStep,
  onStepClick,
  maxAccessibleStep,
}: ProgressIndicatorProps) {
  const steps: StepNumber[] = [1, 2, 3, 4];
  const progressPercent = Math.round(((currentStep - 1) / 3) * 100);

  return (
    <div className="w-full mb-8 sm:mb-10">
      {/* Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current step {currentStep} of 4: {STEP_LABELS[currentStep]}
      </div>

      {/* Mobile Step Counter & Modern Progress Track */}
      <div className="sm:hidden mb-6 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-teal text-white text-xs font-black shadow-xs">
              {currentStep}
            </span>
            <span className="text-xs font-bold text-brand-navy tracking-tight">
              {STEP_LABELS[currentStep]}
            </span>
          </div>
          <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
            Step {currentStep} of 4
          </span>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden relative">
          <div
            className="bg-gradient-to-r from-teal-500 via-teal-400 to-emerald-400 h-full rounded-full transition-all duration-300 ease-out shadow-xs"
            style={{ width: `${Math.max(12, (currentStep / 4) * 100)}%` }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Desktop & Tablet Segmented Stepper */}
      <nav aria-label="Service request progress" className="hidden sm:block">
        <div className="relative">
          {/* Subtle connecting track line behind steps */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-100 rounded-full -z-0" />
          <div
            className="absolute top-1/2 left-8 -translate-y-1/2 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-300 -z-0"
            style={{ width: `${(progressPercent / 100) * 85}%` }}
          />

          <ol className="grid grid-cols-4 gap-3 relative z-10 list-none p-0 m-0">
            {steps.map((step) => {
              const isCompleted = step < currentStep;
              const isCurrent = step === currentStep;
              const isClickable = onStepClick && step <= maxAccessibleStep;

              return (
                <li key={step} className="relative">
                  <button
                    type="button"
                    disabled={!isClickable}
                    onClick={() => isClickable && onStepClick(step)}
                    className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center gap-3 border-2 ${
                      isCurrent
                        ? 'bg-gradient-to-b from-teal-50/90 to-white border-teal-500 shadow-md ring-2 ring-teal-500/20 translate-y-[-1px]'
                        : isCompleted
                        ? 'bg-white border-teal-200/90 hover:border-teal-300 text-brand-navy shadow-xs cursor-pointer hover:bg-teal-50/40'
                        : 'bg-white/80 border-slate-200/80 text-slate-400 opacity-70 cursor-not-allowed'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal`}
                    aria-current={isCurrent ? 'step' : undefined}
                  >
                    {/* Badge Icon / Number */}
                    <span
                      className={`w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isCompleted
                          ? 'bg-brand-teal text-white shadow-xs'
                          : isCurrent
                          ? 'bg-gradient-to-br from-teal-500 to-brand-navy text-white shadow-sm ring-2 ring-teal-300/50'
                          : 'bg-slate-100 border border-slate-200 text-slate-500 font-bold'
                      }`}
                      aria-hidden="true"
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : isCurrent ? (
                        <span className="flex items-center justify-center gap-0.5">
                          {step}
                        </span>
                      ) : (
                        step
                      )}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] uppercase tracking-wider font-extrabold ${
                          isCurrent ? 'text-brand-teal' : isCompleted ? 'text-teal-700' : 'text-slate-400'
                        }`}>
                          Step {step}
                        </span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                        )}
                      </div>
                      <p className={`text-xs font-bold truncate tracking-tight ${
                        isCurrent ? 'text-brand-navy' : isCompleted ? 'text-slate-800' : 'text-slate-400'
                      }`}>
                        {STEP_LABELS[step]}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </div>
  );
}
