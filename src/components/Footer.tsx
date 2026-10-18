import { Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestClick: () => void;
}

export function Footer({ onNavigate, onRequestClick }: FooterProps) {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-14 pb-24 sm:pb-20 border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <span className="w-8 h-8 rounded-lg bg-[#122B40] border border-[#3A566D] text-brand-teal-bright flex items-center justify-center shrink-0 shadow-sm">
                <Wrench className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>Northstar Plumbing Co. Demo</span>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted max-w-sm leading-relaxed">
              A high-performance, mobile-first concept website and accessible service-request demo designed for trade services in the Greater Toronto Area (GTA), Ontario.
            </p>
            {/* Mandatory Demo Notice in footer */}
            <p className="text-xs text-brand-teal-bright font-medium">
              Fictional demonstration website. Not an operating plumbing company.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Site Navigation
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-brand-muted hover:text-white transition-colors cursor-pointer text-left"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="text-brand-muted hover:text-white transition-colors cursor-pointer text-left"
                >
                  Plumbing Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="text-brand-muted hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onRequestClick}
                  className="text-brand-teal-bright hover:underline transition-colors cursor-pointer text-left font-semibold"
                >
                  Request Service Flow
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Technical Disclosure */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Data Privacy &amp; Scope
            </p>
            <p className="text-xs text-brand-muted leading-relaxed mb-3">
              Any contact details entered into this demo are processed purely in local browser memory and discarded immediately upon page refresh or reset. No data is stored or transmitted.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Built with React, TypeScript, Vite &amp; Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Mandatory notice & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>
            <span>&copy; {new Date().getFullYear()} Northstar Plumbing Co. Demo. Demonstration &amp; portfolio prototype.</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Fictional demonstration website. Not an operating plumbing company.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
