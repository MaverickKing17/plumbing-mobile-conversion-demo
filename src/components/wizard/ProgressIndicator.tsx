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

export function ProgressIndicator({
  currentStep,
  onStepClick,
  maxAccessibleStep,
}: ProgressIndicatorProps) {
  const steps: StepNumber[] = [1, 2, 3, 4];

  return (
    <div className="w-full mb-8">
      {/* Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current step {currentStep} of 4: {STEP_LABELS[currentStep]}
      </div>

      {/* Mobile Step Counter Header */}
      <div className="flex items-center justify-between sm:hidden mb-3">
        <span className="text-xs font-semibold text-blue-700">
          Step {currentStep} of 4
        </span>
        <span className="text-xs font-medium text-slate-700">
          {STEP_LABELS[currentStep]}
        </span>
      </div>

      {/* Progress Bar Track on Mobile */}
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden sm:hidden mb-6">
        <div
          className="bg-blue-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / 4) * 100}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Desktop & Tablet Stepper List */}
      <nav aria-label="Service request progress" className="hidden sm:block">
        <ol className="grid grid-cols-4 gap-2">
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
                  className={`w-full text-left py-2 px-2.5 rounded-xl transition-all flex items-center gap-2.5 ${
                    isCurrent
                      ? 'bg-blue-50/80 border border-blue-200 text-blue-900 shadow-2xs'
                      : isCompleted
                      ? 'text-slate-700 hover:bg-slate-100 cursor-pointer'
                      : 'text-slate-600 opacity-70 cursor-not-allowed'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isCompleted
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                    aria-hidden="true"
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : step}
                  </span>
                  <div className="truncate">
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-600">
                      Step {step}
                    </p>
                    <p className={`text-xs font-medium truncate ${isCurrent ? 'font-bold text-blue-900' : 'text-slate-700'}`}>
                      {STEP_LABELS[step]}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
