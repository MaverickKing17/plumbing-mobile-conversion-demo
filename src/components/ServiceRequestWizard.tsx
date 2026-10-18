import { useState, useRef, useEffect } from 'react';
import {
  ServiceType,
  ServiceRequestFormData,
  FormErrors,
  StepNumber,
  ContactMethod,
} from '../types/serviceRequest';
import { validateStep, validateFullForm } from '../utils/validation';
import { ProgressIndicator } from './wizard/ProgressIndicator';
import { StepServiceSelection } from './wizard/StepServiceSelection';
import { StepIssueDetails } from './wizard/StepIssueDetails';
import { StepContactDetails } from './wizard/StepContactDetails';
import { StepReview } from './wizard/StepReview';
import { DemoConfirmation } from './wizard/DemoConfirmation';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceRequestWizardProps {
  initialService?: ServiceType | '';
  onReturnHome?: () => void;
}

const INITIAL_FORM_DATA: ServiceRequestFormData = {
  serviceType: '',
  location: '',
  issueDescription: '',
  contactMethod: 'phone',
  fullName: '',
  phoneNumber: '',
  emailAddress: '',
};

export function ServiceRequestWizard({ initialService, onReturnHome }: ServiceRequestWizardProps) {
  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [formData, setFormData] = useState<ServiceRequestFormData>(() => ({
    ...INITIAL_FORM_DATA,
    serviceType: initialService || '',
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [summaryErrors, setSummaryErrors] = useState<string[]>([]);
  const [maxAccessibleStep, setMaxAccessibleStep] = useState<StepNumber>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const headingRef = useRef<HTMLHeadingElement>(null);

  // Sync initialService prop if changed from external cards
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next.serviceType;
        return next;
      });
    }
  }, [initialService]);

  // Focus header on step change for accessibility
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [currentStep, isSubmitted]);

  const handleNext = () => {
    const validation = validateStep(currentStep, formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSummaryErrors(validation.summaryErrors);
      return;
    }

    // Clear errors for current step
    setErrors({});
    setSummaryErrors([]);

    const nextStep = (currentStep + 1) as StepNumber;
    setCurrentStep(nextStep);
    setMaxAccessibleStep((prev) => (Math.max(prev, nextStep) as StepNumber));
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setErrors({});
      setSummaryErrors([]);
      setCurrentStep((prev) => (prev - 1) as StepNumber);
    }
  };

  const handleJumpToStep = (step: StepNumber) => {
    setErrors({});
    setSummaryErrors([]);
    setCurrentStep(step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullValidation = validateFullForm(formData);

    if (!fullValidation.isValid) {
      setErrors(fullValidation.errors);
      setSummaryErrors(fullValidation.summaryErrors);
      return;
    }

    // Submit demo request (in-memory demo completion)
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setSummaryErrors([]);
    setCurrentStep(1);
    setMaxAccessibleStep(1);
    setIsSubmitted(false);
  };

  return (
    <section
      id="request-service"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#0b1c2d] via-[#102A43] to-[#0e2133] border-b border-slate-800 relative overflow-hidden"
      aria-labelledby="wizard-main-heading"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading on Dark Background */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-950/80 border border-teal-500/40 text-brand-teal-bright shadow-inner mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-teal-bright animate-pulse" />
            <span>INSTANT SERVICE INTAKE DEMO</span>
          </div>
          <h2
            id="wizard-main-heading"
            ref={headingRef}
            tabIndex={-1}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight focus:outline-none"
          >
            {isSubmitted ? 'Demo Request Completed' : 'Request Plumbing Help'}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed">
            {isSubmitted
              ? 'Thank you for testing the Northstar Plumbing Co. service-request workflow.'
              : 'Complete this quick 4-step intake. You can review and edit all details before confirming.'}
          </p>

          {!isSubmitted && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                No upfront payment
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                Fast GTA response
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Safe in-memory demo
              </span>
            </div>
          )}
        </div>

        {/* Visually Distinct Elevated Panel with Softened Blue-Gray Transition Rim */}
        <div className="bg-[#152B40]/80 p-2 sm:p-3 rounded-[2rem] border border-slate-700/80 shadow-2xl shadow-slate-950/60">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm text-[#102A43] overflow-hidden relative">
            {/* Top Decorative Brand Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-teal-600 via-teal-400 to-amber-400" />

          <div className="p-5 sm:p-8 md:p-10">
            {isSubmitted ? (
              <DemoConfirmation
                formData={formData}
                onReset={handleReset}
                onExploreMore={onReturnHome || (() => {})}
              />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Stepper indicator */}
                <ProgressIndicator
                  currentStep={currentStep}
                  onStepClick={handleJumpToStep}
                  maxAccessibleStep={maxAccessibleStep}
                />

                {/* Step Content */}
                <div className="py-2">
                  {currentStep === 1 && (
                    <StepServiceSelection
                      selectedService={formData.serviceType}
                      onSelect={(service: ServiceType) => {
                        setFormData((prev) => ({ ...prev, serviceType: service }));
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.serviceType;
                          return copy;
                        });
                      }}
                      error={errors.serviceType}
                    />
                  )}

                  {currentStep === 2 && (
                    <StepIssueDetails
                      location={formData.location}
                      issueDescription={formData.issueDescription}
                      contactMethod={formData.contactMethod}
                      onChangeLocation={(loc) => {
                        setFormData((prev) => ({ ...prev, location: loc }));
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.location;
                          return copy;
                        });
                      }}
                      onChangeDescription={(desc) => {
                        setFormData((prev) => ({ ...prev, issueDescription: desc }));
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.issueDescription;
                          return copy;
                        });
                      }}
                      onChangeContactMethod={(method: ContactMethod) =>
                        setFormData((prev) => ({ ...prev, contactMethod: method }))
                      }
                      errors={errors}
                    />
                  )}

                  {currentStep === 3 && (
                    <StepContactDetails
                      fullName={formData.fullName}
                      phoneNumber={formData.phoneNumber}
                      emailAddress={formData.emailAddress}
                      contactMethod={formData.contactMethod}
                      onChangeFullName={(name) => {
                        setFormData((prev) => ({ ...prev, fullName: name }));
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.fullName;
                          return copy;
                        });
                      }}
                      onChangePhoneNumber={(phone) => {
                        setFormData((prev) => ({ ...prev, phoneNumber: phone }));
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.phoneNumber;
                          return copy;
                        });
                      }}
                      onChangeEmailAddress={(email) => {
                        setFormData((prev) => ({ ...prev, emailAddress: email }));
                        setErrors((prev) => {
                          const copy = { ...prev };
                          delete copy.emailAddress;
                          return copy;
                        });
                      }}
                      errors={errors}
                    />
                  )}

                  {currentStep === 4 && (
                    <StepReview
                      formData={formData}
                      onEditStep={handleJumpToStep}
                      summaryErrors={summaryErrors}
                    />
                  )}
                </div>

                {/* Navigation Controls */}
                <div className="mt-8 pt-6 border-t border-slate-200/90 flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div aria-hidden="true" />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:via-teal-500 hover:to-teal-400 active:from-teal-700 active:to-teal-600 text-white font-extrabold text-base rounded-xl shadow-xl shadow-teal-900/30 hover:shadow-2xl hover:shadow-teal-500/30 border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[50px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ml-auto"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4 text-teal-200 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:via-teal-500 hover:to-teal-400 active:from-teal-700 active:to-teal-600 text-white font-extrabold text-base rounded-xl shadow-xl shadow-teal-900/40 hover:shadow-2xl hover:shadow-teal-500/30 border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[52px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ml-auto"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-200" aria-hidden="true" />
                      <span>Confirm Demo Submission</span>
                    </button>
                  )}
                </div>

                {/* Trust & Demo Reassurance Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="text-amber-500">🔒</span>
                    Demo intake mode · No real contractor dispatched
                  </span>
                  <span className="text-slate-400 font-medium">
                    Takes ~60 seconds to complete
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
