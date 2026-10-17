import { Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestClick: () => void;
}

export function Footer({ onNavigate, onRequestClick }: FooterProps) {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-12 pb-14 border-t border-brand-navy-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="w-7 h-7 rounded bg-brand-teal text-white flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>Northstar Plumbing Co. Demo</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300/80 max-w-sm leading-relaxed">
              A high-performance, mobile-first concept website and accessible service-request demo designed for trade services in the Greater Toronto Area (GTA), Ontario.
            </p>
            {/* Mandatory Demo Notice in footer */}
            <p className="text-xs text-brand-teal-border font-medium">
              Fictional demonstration website. Not an operating plumbing company.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Site Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Plumbing Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onRequestClick}
                  className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-brand-teal-border"
                >
                  Request Service Flow
                </button>
              </li>
            </ul>
          </div>

          {/* Privacy & Technical Disclosure */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Data Privacy & Scope
            </p>
            <p className="text-xs text-slate-300/80 leading-relaxed mb-3">
              Any contact details entered into this demo are processed purely in local browser memory and discarded immediately upon page refresh or reset. No data is stored or transmitted.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Built with React, TypeScript, Vite &amp; Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Mandatory notice & Copyright */}
        <div className="pt-8 border-t border-brand-navy-light/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>&copy; {new Date().getFullYear()} Northstar Plumbing Co. Demo. Demonstration & portfolio prototype.</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Fictional demonstration website. Not an operating plumbing company.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
