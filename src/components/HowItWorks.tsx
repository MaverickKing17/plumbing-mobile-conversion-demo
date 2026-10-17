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

        {/* Steps Grid: Enhanced Value Proposition Cards with tactile elevation and luminous badges */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none p-0 mb-10">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group relative bg-gradient-to-b from-slate-900/95 via-[#13283c]/95 to-slate-900/95 rounded-3xl border-2 border-slate-700/90 p-7 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-teal-400/60 hover:shadow-teal-950/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top ambient highlight line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-slate-950 font-black text-lg flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700 text-brand-teal-bright flex items-center justify-center shadow-inner group-hover:border-teal-400/50 transition-colors">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-brand-teal-bright">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-bright" />
                <span>Step {step.number} of 3</span>
              </div>
            </li>
          ))}
        </ol>

        {/* Demonstration Disclaimer Callout */}
        <div className="bg-slate-900/90 border-2 border-teal-500/40 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-teal-950/90 border border-teal-400/40 text-brand-teal-bright flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Info className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-bold text-white text-sm sm:text-base mb-1">Demonstration Environment Notice</p>
            <p className="text-slate-300">
              This is an interactive design and engineering demonstration. Service requests completed in this workflow are kept in client memory for testing purposes and are <strong>not sent to an actual plumbing company</strong> unless a production backend is deliberately configured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
