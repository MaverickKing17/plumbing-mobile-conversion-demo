import { ContactMethod, FormErrors } from '../../types/serviceRequest';
import { Phone, Mail, MapPin } from 'lucide-react';

interface StepIssueDetailsProps {
  location: string;
  issueDescription: string;
  contactMethod: ContactMethod;
  onChangeLocation: (value: string) => void;
  onChangeDescription: (value: string) => void;
  onChangeContactMethod: (method: ContactMethod) => void;
  errors: FormErrors;
}

const COMMON_GTA_MUNICIPALITIES = [
  'Toronto',
  'Mississauga',
  'Brampton',
  'Markham',
  'Vaughan',
  'Oakville',
  'Scarborough',
  'North York',
];

export function StepIssueDetails({
  location,
  issueDescription,
  contactMethod,
  onChangeLocation,
  onChangeDescription,
  onChangeContactMethod,
  errors,
}: StepIssueDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-brand-navy mb-1">
          2. Describe the issue and your location
        </h2>
        <p className="text-xs sm:text-sm text-brand-slate">
          Provide your general municipality and a brief summary of the problem. No full street address is required.
        </p>
      </div>

      {/* Field 1: City or Service Location */}
      <div>
        <label
          htmlFor="service-location"
          className="block text-sm font-semibold text-brand-navy mb-1.5"
        >
          City or GTA Municipality <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-teal">
            <MapPin className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id="service-location"
            type="text"
            value={location}
            onChange={(e) => onChangeLocation(e.target.value)}
            placeholder="e.g. Toronto, Mississauga, North York..."
            aria-required="true"
            aria-invalid={!!errors.location}
            aria-describedby={`location-hint ${errors.location ? 'location-error' : ''}`}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-brand-navy transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal min-h-[44px] ${
              errors.location
                ? 'border-red-400 bg-red-50/30'
                : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
          />
        </div>

        {/* Quick select buttons for mobile speed */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5" id="location-hint">
          <span className="text-xs text-brand-slate-light mr-1">Quick fill:</span>
          {COMMON_GTA_MUNICIPALITIES.slice(0, 5).map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => onChangeLocation(city)}
              className="text-xs bg-brand-offwhite hover:bg-teal-50 text-brand-slate hover:text-brand-teal border border-slate-200/90 font-medium px-2.5 py-1 rounded-md transition-colors cursor-pointer min-h-[30px]"
            >
              {city}
            </button>
          ))}
        </div>

        {errors.location && (
          <p id="location-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
            {errors.location}
          </p>
        )}
      </div>

      {/* Field 2: Issue Description */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="issue-description"
            className="block text-sm font-semibold text-brand-navy"
          >
            Plumbing Problem Description <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <span className="text-xs text-brand-slate-light">Min 10 characters</span>
        </div>
        <textarea
          id="issue-description"
          rows={3}
          value={issueDescription}
          onChange={(e) => onChangeDescription(e.target.value)}
          placeholder="Please describe what is happening (e.g. 'Basement floor drain has started backing up during laundry cycle', 'Kitchen faucet pipe drips when water is turned on')."
          aria-required="true"
          aria-invalid={!!errors.issueDescription}
          aria-describedby={`desc-hint ${errors.issueDescription ? 'desc-error' : ''}`}
          className={`w-full p-3.5 rounded-xl border text-sm text-brand-navy transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
            errors.issueDescription
              ? 'border-red-400 bg-red-50/30'
              : 'border-slate-300 bg-white hover:border-slate-400'
          }`}
        />
        <p id="desc-hint" className="mt-1 text-xs text-brand-slate-light">
          Briefly note the fixture involved, when the issue occurs, and any visible water drips.
        </p>
        {errors.issueDescription && (
          <p id="desc-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">
            {errors.issueDescription}
          </p>
        )}
      </div>

      {/* Field 3: Preferred Contact Method */}
      <fieldset className="border-0 p-0 m-0 pt-2">
        <legend className="text-sm font-semibold text-brand-navy mb-2">
          Preferred Contact Method <span className="text-red-600" aria-hidden="true">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Preferred contact method">
          <button
            type="button"
            role="radio"
            aria-checked={contactMethod === 'phone'}
            onClick={() => onChangeContactMethod('phone')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
              contactMethod === 'phone'
                ? 'border-brand-teal bg-teal-50/60 shadow-2xs ring-1 ring-brand-teal/40'
                : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                contactMethod === 'phone' ? 'bg-brand-teal text-white' : 'bg-slate-100 text-brand-slate'
              }`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-navy">Phone Call / SMS</p>
              <p className="text-xs text-brand-slate-light">Direct phone callback</p>
            </div>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={contactMethod === 'email'}
            onClick={() => onChangeContactMethod('email')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
              contactMethod === 'email'
                ? 'border-brand-teal bg-teal-50/60 shadow-2xs ring-1 ring-brand-teal/40'
                : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                contactMethod === 'email' ? 'bg-brand-teal text-white' : 'bg-slate-100 text-brand-slate'
              }`}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-navy">Email Reply</p>
              <p className="text-xs text-brand-slate-light">Written estimation notes</p>
            </div>
          </button>
        </div>
      </fieldset>
    </div>
  );
}
