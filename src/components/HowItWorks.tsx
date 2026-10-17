import { CheckSquare, FileText, ClipboardCheck, Info } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose the service you need',
      description: 'Select from drain cleaning, leak repair, water heater replacement, or describe another plumbing issue.',
      icon: <CheckSquare className="w-5 h-5 text-blue-700" aria-hidden="true" />,
    },
    {
      number: '2',
      title: 'Describe the issue and your location',
      description: 'Provide your GTA city or municipality, a brief description of the problem, and how you prefer to be reached.',
      icon: <FileText className="w-5 h-5 text-blue-700" aria-hidden="true" />,
    },
    {
      number: '3',
      title: 'Review and submit your request',
      description: 'Check your information on the summary screen and submit. You can go back and edit any step at any point.',
      icon: <ClipboardCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3"
          >
            How It Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A simple 3-step intake process designed to eliminate confusion and help customers request service in under two minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none p-0 mb-8 sm:mb-10">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-blue-100 text-blue-800 font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Demonstration Disclaimer Callout */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-sky-950">
          <Info className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold text-sky-900 mb-0.5">Demonstration Environment Notice</p>
            <p className="text-sky-800">
              This is an interactive design and engineering demonstration. Service requests completed in this workflow are kept in client memory for testing purposes and are <strong>not sent to an actual plumbing company</strong> unless a production backend is deliberately configured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
