import { ServiceRequestFormData, SERVICE_OPTIONS, StepNumber } from '../../types/serviceRequest';
import { Pencil, CheckCircle2, AlertCircle } from 'lucide-react';

interface StepReviewProps {
  formData: ServiceRequestFormData;
  onEditStep: (step: StepNumber) => void;
  summaryErrors?: string[];
}

export function StepReview({ formData, onEditStep, summaryErrors }: StepReviewProps) {
  const selectedServiceObj = SERVICE_OPTIONS.find((s) => s.id === formData.serviceType);

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>Step 4 · Final Review & Confirmation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight mb-1">
          Review your service request
        </h2>
        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
          Please check that your selections and entries look correct before confirming this demo submission.
        </p>
      </div>

      {/* Global Error Summary Banner (if any) */}
      {summaryErrors && summaryErrors.length > 0 && (
        <div
          role="alert"
          aria-labelledby="summary-error-title"
          className="p-4 bg-red-50 border border-red-300 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2 text-red-900 font-bold text-sm">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true" />
            <span id="summary-error-title">Please correct the following before submitting:</span>
          </div>
          <ul className="list-disc list-inside text-xs sm:text-sm text-red-700 space-y-1">
            {summaryErrors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Review Card */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 shadow-2xs">
        {/* Section 1: Service */}
        <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate-light block mb-1">
              Service Selected
            </span>
            <p className="text-base font-bold text-brand-navy">
              {selectedServiceObj?.title || 'None Selected'}
            </p>
            <p className="text-xs text-brand-slate mt-0.5">
              {selectedServiceObj?.shortDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onEditStep(1)}
            aria-label="Edit selected service"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-teal-800 bg-teal-100 hover:bg-teal-200 border border-teal-300 rounded-lg shadow-2xs transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[36px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Edit</span>
          </button>
        </div>

        {/* Section 2: Location & Problem */}
        <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate-light block mb-1">
                GTA Municipality / Area
              </span>
              <p className="text-sm font-semibold text-brand-navy">
                {formData.location || <span className="text-brand-amber italic">Missing</span>}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate-light block mb-1">
                Issue Description
              </span>
              <p className="text-xs sm:text-sm text-brand-slate bg-brand-offwhite p-3 rounded-lg border border-slate-200/80 leading-relaxed whitespace-pre-wrap">
                {formData.issueDescription || <span className="text-brand-amber italic">No description provided</span>}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onEditStep(2)}
            aria-label="Edit location and issue description"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-teal-800 bg-teal-100 hover:bg-teal-200 border border-teal-300 rounded-lg shadow-2xs transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[36px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Edit</span>
          </button>
        </div>

        {/* Section 3: Contact Details */}
        <div className="p-4 sm:p-5 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate-light block mb-1">
                Contact Person
              </span>
              <p className="text-sm font-semibold text-brand-navy">
                {formData.fullName || <span className="text-brand-amber italic">Missing name</span>}
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-slate-light block mb-1">
                Preferred Method: {formData.contactMethod === 'phone' ? 'Phone' : 'Email'}
              </span>
              <p className="text-sm font-mono text-brand-navy">
                {formData.contactMethod === 'phone'
                  ? formData.phoneNumber || <span className="text-brand-amber italic font-sans">Missing phone</span>
                  : formData.emailAddress || <span className="text-brand-amber italic font-sans">Missing email</span>}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onEditStep(3)}
            aria-label="Edit contact details"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-teal-800 bg-teal-100 hover:bg-teal-200 border border-teal-300 rounded-lg shadow-2xs transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[36px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Edit</span>
          </button>
        </div>
      </div>

      {/* Demonstration confirmation advisory */}
      <div className="p-4 bg-teal-50/40 border border-brand-teal/20 rounded-xl text-xs text-brand-slate leading-relaxed flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" aria-hidden="true" />
        <span>
          Submitting this form completes the demonstration walkthrough. No contractor will be notified or dispatched.
        </span>
      </div>
    </div>
  );
}
