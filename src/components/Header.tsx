import { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

interface HeaderProps {
  onRequestServiceClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function Header({ onRequestServiceClick, onNavigateSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  const handleRequestClick = () => {
    setIsMobileMenuOpen(false);
    onRequestServiceClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-slate-800/90 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (White text, teal icon) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright rounded-md p-1"
          aria-label="Northstar Plumbing Co. Demo - Return to homepage"
        >
          <span className="w-8 h-8 rounded-lg bg-brand-darkblue border border-slate-700/80 text-brand-teal-bright flex items-center justify-center shrink-0 group-hover:bg-brand-navy-light transition-colors shadow-2xs">
            <Wrench className="w-4 h-4 text-brand-teal-bright" aria-hidden="true" />
          </span>
          <span className="font-bold text-base sm:text-lg text-white">
            Northstar Plumbing Co. <span className="text-xs font-semibold text-brand-teal-bright uppercase tracking-wider hidden sm:inline ml-1">Demo</span>
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links (White/Muted slate to bright teal) */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200"
          aria-label="Primary navigation"
        >
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className="hover:text-brand-teal-bright transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright rounded"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('how-it-works')}
            className="hover:text-brand-teal-bright transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright rounded"
          >
            How It Works
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hover:text-brand-teal-bright transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright rounded"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('about-demo')}
            className="text-slate-400 hover:text-brand-teal-bright transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright rounded"
          >
            About Demo
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleRequestClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-teal-hover active:bg-brand-teal-active rounded-lg shadow-md hover:shadow-teal-900/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy min-h-[44px] cursor-pointer"
          >
            Request Service
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-white hover:bg-brand-darkblue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-bright min-h-[44px] min-w-[44px] cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/70 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer (Deep navy background with white text) */}
      <div
        id="mobile-nav"
        className={`fixed top-16 left-0 right-0 bg-brand-navy border-b border-slate-800 px-6 py-6 shadow-2xl transition-all duration-200 ease-out md:hidden z-40 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col gap-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation links">
            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className="text-left py-3 px-3 text-base font-medium text-white hover:bg-brand-darkblue rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('how-it-works')}
              className="text-left py-3 px-3 text-base font-medium text-white hover:bg-brand-darkblue rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left py-3 px-3 text-base font-medium text-white hover:bg-brand-darkblue rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              Contact Options
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about-demo')}
              className="text-left py-3 px-3 text-base font-medium text-slate-300 hover:bg-brand-darkblue rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              About This Demo
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={handleRequestClick}
              className="w-full flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-brand-teal hover:bg-brand-teal-hover rounded-lg shadow-md min-h-[48px]"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
