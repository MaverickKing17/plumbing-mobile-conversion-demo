import { CheckSquare, FileText, ClipboardCheck, Info } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose the service you need',
      description: 'Select from drain cleaning, leak repair, water heater replacement, or describe another plumbing issue.',
      icon: <CheckSquare className="w-5 h-5 text-brand-teal-bright" aria-hidden="true" />,
    },
    {
      number: '2',
      title: 'Describe the issue and your location',
      description: 'Provide your GTA city or municipality, a brief description of the problem, and how you prefer to be reached.',
      icon: <FileText className="w-5 h-5 text-brand-teal-bright" aria-hidden="true" />,
    },
    {
      number: '3',
      title: 'Review and submit your request',
      description: 'Check your information on the summary screen and submit. You can go back and edit any step at any point.',
      icon: <ClipboardCheck className="w-5 h-5 text-brand-teal-bright" aria-hidden="true" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-14 sm:py-20 bg-brand-navy border-b border-slate-800 relative"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-2">
            Intuitive Booking Flow
          </span>
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
          >
            How It Works
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            A simple 3-step intake process designed to eliminate confusion and help customers request service in under two minutes.
          </p>
        </div>

        {/* Steps Grid: Dark blue-gray panels (#1B3448) */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none p-0 mb-10">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative bg-brand-darkblue rounded-2xl border border-slate-700/90 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-slate-600 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-full bg-teal-950/90 border border-teal-700/70 text-brand-teal-bright font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-brand-navy border border-slate-700 flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Demonstration Disclaimer Callout */}
        <div className="bg-brand-darkblue/80 border border-teal-700/40 rounded-2xl p-5 flex items-start gap-3.5 shadow-md">
          <Info className="w-5 h-5 text-brand-teal-bright shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold text-white mb-0.5">Demonstration Environment Notice</p>
            <p className="text-brand-muted">
              This is an interactive design and engineering demonstration. Service requests completed in this workflow are kept in client memory for testing purposes and are <strong>not sent to an actual plumbing company</strong> unless a production backend is deliberately configured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
