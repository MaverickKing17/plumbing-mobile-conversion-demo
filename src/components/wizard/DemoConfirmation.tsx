import { CheckCircle2, RotateCcw, Server, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceRequestFormData, SERVICE_OPTIONS } from '../../types/serviceRequest';

interface DemoConfirmationProps {
  formData: ServiceRequestFormData;
  onReset: () => void;
  onExploreMore: () => void;
}

export function DemoConfirmation({ formData, onReset, onExploreMore }: DemoConfirmationProps) {
  const serviceObj = SERVICE_OPTIONS.find((s) => s.id === formData.serviceType);

  return (
    <div
      role="region"
      aria-label="Demo submission result"
      className="py-4 space-y-8"
    >
      {/* Prominent Demo Notice Banner */}
      <div className="bg-teal-50/70 border-2 border-brand-teal/80 rounded-2xl p-6 sm:p-8 text-center shadow-2xs">
        <div className="w-14 h-14 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" aria-hidden="true" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
          Demo complete — no service request was sent.
        </h2>

        <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto leading-relaxed mb-6">
          This concludes the mobile-first service intake demonstration. Your test data was validated client-side and held exclusively in memory.
        </p>

        {/* Technical Architecture Note */}
        <div className="max-w-xl mx-auto bg-white border border-brand-teal/30 rounded-xl p-4 text-left flex items-start gap-3 shadow-2xs">
          <Server className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm text-brand-slate leading-relaxed">
            <span className="font-bold text-brand-navy block mb-0.5">
              Production Deployment Blueprint:
            </span>
            In a live production deployment, this step would transmit a sanitized payload over HTTPS to a secure server-side API endpoint (e.g. Express, Next.js route, or serverless function) connected to an authenticated email dispatch, CRM, or contractor scheduling system.
          </div>
        </div>
      </div>

      {/* Captured Demonstration Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-brand-slate-light mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-teal" aria-hidden="true" />
          <span className="text-brand-navy">Simulated Request Payload (Client In-Memory)</span>
        </h3>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-brand-offwhite p-3.5 rounded-xl border border-slate-200/80">
            <dt className="text-xs font-semibold text-brand-slate-light mb-1">Service Type</dt>
            <dd className="font-bold text-brand-navy">{serviceObj?.title || 'Not specified'}</dd>
          </div>

          <div className="bg-brand-offwhite p-3.5 rounded-xl border border-slate-200/80">
            <dt className="text-xs font-semibold text-brand-slate-light mb-1">GTA Municipality</dt>
            <dd className="font-bold text-brand-navy">{formData.location || 'Not specified'}</dd>
          </div>

          <div className="bg-brand-offwhite p-3.5 rounded-xl border border-slate-200/80 sm:col-span-2">
            <dt className="text-xs font-semibold text-brand-slate-light mb-1">Issue Description</dt>
            <dd className="text-brand-slate text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
              {formData.issueDescription}
            </dd>
          </div>

          <div className="bg-brand-offwhite p-3.5 rounded-xl border border-slate-200/80">
            <dt className="text-xs font-semibold text-brand-slate-light mb-1">Contact Name</dt>
            <dd className="font-medium text-brand-navy">{formData.fullName}</dd>
          </div>

          <div className="bg-brand-offwhite p-3.5 rounded-xl border border-slate-200/80">
            <dt className="text-xs font-semibold text-brand-slate-light mb-1">
              Contact Detail ({formData.contactMethod})
            </dt>
            <dd className="font-mono text-brand-navy">
              {formData.contactMethod === 'phone' ? formData.phoneNumber : formData.emailAddress}
            </dd>
          </div>
        </dl>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:via-teal-500 hover:to-teal-400 active:from-teal-700 active:to-teal-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-900/30 hover:shadow-xl hover:shadow-teal-500/30 border border-teal-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          <span>Start another demo request</span>
        </button>

        <button
          type="button"
          onClick={onExploreMore}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          <span>Return to homepage overview</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
