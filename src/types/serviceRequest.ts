export type ServiceType = 'drain-cleaning' | 'leak-repair' | 'water-heater' | 'other';

export type ContactMethod = 'phone' | 'email';

export interface ServiceOption {
  id: ServiceType;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  commonExamples: string[];
}

export interface ServiceRequestFormData {
  serviceType: ServiceType | '';
  location: string;
  issueDescription: string;
  contactMethod: ContactMethod;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
}

export interface FormErrors {
  serviceType?: string;
  location?: string;
  issueDescription?: string;
  contactMethod?: string;
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  general?: string;
}

export type StepNumber = 1 | 2 | 3 | 4;

export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDescription: 'Clearing slow, clogged, or backed-up household and basement drains.',
    detailedDescription: 'Snaking and blockage removal for sinks, tubs, showers, and basement floor drains throughout the GTA.',
    commonExamples: ['Kitchen sink backing up', 'Slow bathtub drainage', 'Basement floor drain gurgling'],
  },
  {
    id: 'leak-repair',
    title: 'Leak Repair',
    shortDescription: 'Locating and resolving pipe drips, running fixtures, and line leaks.',
    detailedDescription: 'Diagnostic inspection and pipe repair for dripping fixtures, supply line leaks, and ceiling dampness.',
    commonExamples: ['Under-sink pipe dripping', 'Constantly running toilet', 'Exposed pipe pinhole drip'],
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation',
    shortDescription: 'Replacement, upgrades, and maintenance for tank and tankless systems.',
    detailedDescription: 'Sizing consultation, scheduled replacement, and safe installation of electric or gas domestic hot water units.',
    commonExamples: ['Tank nearing end of lifespan', 'Inconsistent hot water', 'Upgrading to high-efficiency unit'],
  },
  {
    id: 'other',
    title: 'Other Plumbing Issue',
    shortDescription: 'General fixture replacement, shutoff valves, or outdoor hose bibs.',
    detailedDescription: 'Custom inspection and consultation for residential plumbing needs not covered above.',
    commonExamples: ['Main shutoff valve replacement', 'Faucet replacement', 'Outdoor frost-free sillcock'],
  },
];

export const GTA_SERVICE_AREAS = [
  'Toronto (Old Toronto, North York, Etobicoke, Scarborough)',
  'Mississauga & Brampton (Peel Region)',
  'Markham, Richmond Hill & Vaughan (York Region)',
  'Oakville & Burlington (Halton Region)',
  'Pickering & Ajax (Durham Region)',
];
