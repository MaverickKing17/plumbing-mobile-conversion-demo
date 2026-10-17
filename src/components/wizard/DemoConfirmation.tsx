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
      className="py-4 space-y-8 animate-fade-in"
    >
      {/* Prominent Demo Notice Banner */}
      <div className="bg-emerald-50 border-2 border-emerald-500/80 rounded-2xl p-6 sm:p-8 text-center">
        <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" aria-hidden="true" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Demo complete — no service request was sent.
        </h2>

        <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed mb-6">
          This concludes the mobile-first service intake demonstration. Your test data was validated client-side and held exclusively in memory.
        </p>

        {/* Technical Architecture Note */}
        <div className="max-w-xl mx-auto bg-white/90 border border-emerald-200 rounded-xl p-4 text-left flex items-start gap-3">
          <Server className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900 block mb-0.5">
              Production Deployment Blueprint:
            </span>
            In a live production deployment, this step would transmit a sanitized payload over HTTPS to a secure server-side API endpoint (e.g. Express, Next.js route, or serverless function) connected to an authenticated email dispatch, CRM, or contractor scheduling system.
          </div>
        </div>
      </div>

      {/* Captured Demonstration Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
          <span>Simulated Request Payload (Client In-Memory)</span>
        </h3>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <dt className="text-xs font-semibold text-slate-500 mb-1">Service Type</dt>
            <dd className="font-bold text-slate-900">{serviceObj?.title || 'Not specified'}</dd>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <dt className="text-xs font-semibold text-slate-500 mb-1">GTA Municipality</dt>
            <dd className="font-bold text-slate-900">{formData.location || 'Not specified'}</dd>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 sm:col-span-2">
            <dt className="text-xs font-semibold text-slate-500 mb-1">Issue Description</dt>
            <dd className="text-slate-800 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
              {formData.issueDescription}
            </dd>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <dt className="text-xs font-semibold text-slate-500 mb-1">Contact Name</dt>
            <dd className="font-medium text-slate-900">{formData.fullName}</dd>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <dt className="text-xs font-semibold text-slate-500 mb-1">
              Contact Detail ({formData.contactMethod})
            </dt>
            <dd className="font-mono text-slate-900">
              {formData.contactMethod === 'phone' ? formData.phoneNumber : formData.emailAddress}
            </dd>
          </div>
        </dl>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[48px] cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          <span>Start another demo request</span>
        </button>

        <button
          type="button"
          onClick={onExploreMore}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[48px] cursor-pointer"
        >
          <span>Return to homepage overview</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
