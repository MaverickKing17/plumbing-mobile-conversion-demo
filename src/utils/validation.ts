import { FormErrors, ServiceRequestFormData, StepNumber } from '../types/serviceRequest';

/**
 * Validates email with standard compliant regex
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/**
 * Validates North American phone number (at least 10 digits)
 */
export function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Formats a raw phone string into (XXX) XXX-XXXX presentation
 */
export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * Validates a single step of the wizard
 */
export function validateStep(
  step: StepNumber,
  data: ServiceRequestFormData
): { isValid: boolean; errors: FormErrors; summaryErrors: string[] } {
  const errors: FormErrors = {};
  const summaryErrors: string[] = [];

  if (step === 1) {
    if (!data.serviceType) {
      errors.serviceType = 'Please select a plumbing service to continue.';
      summaryErrors.push('Please select a plumbing service.');
    }
  } else if (step === 2) {
    if (!data.location.trim()) {
      errors.location = 'Please enter your city or general GTA municipality.';
      summaryErrors.push('City or municipality is required.');
    } else if (data.location.trim().length < 2) {
      errors.location = 'Please enter a valid city or municipality name.';
      summaryErrors.push('City or municipality name is too short.');
    }

    if (!data.issueDescription.trim()) {
      errors.issueDescription = 'Please describe the plumbing problem.';
      summaryErrors.push('Issue description is required.');
    } else if (data.issueDescription.trim().length < 10) {
      errors.issueDescription = 'Please provide at least 10 characters to help understand the issue.';
      summaryErrors.push('Please provide a little more detail in your issue description (at least 10 characters).');
    }
  } else if (step === 3) {
    if (!data.fullName.trim()) {
      errors.fullName = 'Please enter your name.';
      summaryErrors.push('Name is required.');
    } else if (data.fullName.trim().length < 2) {
      errors.fullName = 'Please enter at least 2 characters for your name.';
      summaryErrors.push('Name must be at least 2 characters.');
    }

    if (data.contactMethod === 'phone') {
      if (!data.phoneNumber.trim()) {
        errors.phoneNumber = 'Please enter a 10-digit sample phone number.';
        summaryErrors.push('Sample phone number is required when phone is chosen.');
      } else if (!isValidPhone(data.phoneNumber)) {
        errors.phoneNumber = 'Please enter a valid 10-digit phone number (e.g. 416-555-0143).';
        summaryErrors.push('Valid 10-digit phone number is required.');
      }
    } else {
      if (!data.emailAddress.trim()) {
        errors.emailAddress = 'Please enter a sample email address.';
        summaryErrors.push('Sample email address is required when email is chosen.');
      } else if (!isValidEmail(data.emailAddress)) {
        errors.emailAddress = 'Please enter a valid email format (e.g. sample@example.com).';
        summaryErrors.push('Valid email format is required.');
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    summaryErrors,
  };
}

/**
 * Validates the entire form before final submission
 */
export function validateFullForm(data: ServiceRequestFormData): {
  isValid: boolean;
  errors: FormErrors;
  summaryErrors: string[];
} {
  const allErrors: FormErrors = {};
  const allSummaries: string[] = [];

  for (let s = 1 as StepNumber; s <= 3; s = (s + 1) as StepNumber) {
    const res = validateStep(s, data);
    Object.assign(allErrors, res.errors);
    allSummaries.push(...res.summaryErrors);
  }

  return {
    isValid: Object.keys(allErrors).length === 0,
    errors: allErrors,
    summaryErrors: allSummaries,
  };
}
