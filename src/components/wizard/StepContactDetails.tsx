import { ContactMethod, FormErrors } from '../../types/serviceRequest';
import { User, Phone, Mail, ShieldAlert } from 'lucide-react';
import { formatPhoneNumber } from '../../utils/validation';

interface StepContactDetailsProps {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  contactMethod: ContactMethod;
  onChangeFullName: (value: string) => void;
  onChangePhoneNumber: (value: string) => void;
  onChangeEmailAddress: (value: string) => void;
  errors: FormErrors;
}

export function StepContactDetails({
  fullName,
  phoneNumber,
  emailAddress,
  contactMethod,
  onChangeFullName,
  onChangePhoneNumber,
  onChangeEmailAddress,
  errors,
}: StepContactDetailsProps) {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChangePhoneNumber(formatted);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>Step 3 · Contact Details</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight mb-1">
          Where should we send your estimate?
        </h2>
        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
          We only ask for the specific contact method you chose ({contactMethod === 'phone' ? 'Phone' : 'Email'}).
        </p>
      </div>

      {/* Demo Privacy Banner using Warm Amber Accent */}
      <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <p className="font-semibold text-amber-950 mb-0.5">Demo Mode · Sample Data Notice</p>
          <p className="text-amber-900/90">
            This demo runs in-memory. <strong>No real plumbing business will contact you</strong>. You are encouraged to enter fictional test details (e.g., <em>Alex Demo</em>, <em>(416) 555-0142</em>, or <em>test@example.com</em>).
          </p>
        </div>
      </div>

      {/* Field: Full Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-brand-navy mb-1.5"
        >
          Full Name <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-teal">
            <User className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => onChangeFullName(e.target.value)}
            placeholder="e.g. Jordan Smith (or test sample)"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'name-error' : undefined}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brand-navy transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal min-h-[44px] ${
              errors.fullName
                ? 'border-red-400 bg-red-50/30'
                : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
          />
        </div>
        {errors.fullName && (
          <p id="name-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Dynamic Field: Phone Number */}
      {contactMethod === 'phone' && (
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-brand-navy mb-1.5"
          >
            Sample Phone Number <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-teal">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="(416) 555-0192"
              aria-required="true"
              aria-invalid={!!errors.phoneNumber}
              aria-describedby={`phone-hint ${errors.phoneNumber ? 'phone-error' : ''}`}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brand-navy transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal min-h-[44px] ${
                errors.phoneNumber
                  ? 'border-red-400 bg-red-50/30'
                  : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
          </div>
          <p id="phone-hint" className="mt-1 text-xs text-brand-slate-light">
            Standard 10-digit Canadian / North American format.
          </p>
          {errors.phoneNumber && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
              {errors.phoneNumber}
            </p>
          )}
        </div>
      )}

      {/* Dynamic Field: Email Address */}
      {contactMethod === 'email' && (
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-brand-navy mb-1.5"
          >
            Sample Email Address <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-teal">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={emailAddress}
              onChange={(e) => onChangeEmailAddress(e.target.value)}
              placeholder="sample@example.com"
              aria-required="true"
              aria-invalid={!!errors.emailAddress}
              aria-describedby={`email-hint ${errors.emailAddress ? 'email-error' : ''}`}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brand-navy transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal min-h-[44px] ${
                errors.emailAddress
                  ? 'border-red-400 bg-red-50/30'
                : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
          </div>
          <p id="email-hint" className="mt-1 text-xs text-brand-slate-light">
            A valid test email address for demonstration purposes.
          </p>
          {errors.emailAddress && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
              {errors.emailAddress}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
