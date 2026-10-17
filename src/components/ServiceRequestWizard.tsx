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
      className="py-12 sm:py-16 md:py-20 bg-slate-100/70 border-b border-slate-200"
      aria-labelledby="wizard-main-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
            Service Request Flow Demo
          </span>
          <h2
            id="wizard-main-heading"
            ref={headingRef}
            tabIndex={-1}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight focus:outline-none"
          >
            {isSubmitted ? 'Demo Request Completed' : 'Request Plumbing Help'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isSubmitted
              ? 'Thank you for testing the Northstar Plumbing Demo service-request workflow.'
              : 'Complete this quick 4-step intake. You can review and edit all details before confirming.'}
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-8 md:p-10 shadow-xs">
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
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
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
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ml-auto"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base rounded-xl shadow-sm transition-all min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ml-auto"
                  >
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    <span>Confirm Demo Submission</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
