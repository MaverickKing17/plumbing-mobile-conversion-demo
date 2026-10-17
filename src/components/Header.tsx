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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 text-slate-900 font-bold text-lg tracking-tight whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-1"
          aria-label="Northstar Plumbing Demo - Return to homepage"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-slate-800 transition-colors">
            <Wrench className="w-4 h-4" aria-hidden="true" />
          </span>
          <span className="font-semibold text-base sm:text-lg">Northstar Plumbing Demo</span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700"
          aria-label="Primary navigation"
        >
          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className="hover:text-blue-700 transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('how-it-works')}
            className="hover:text-blue-700 transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            How It Works
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hover:text-blue-700 transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('about-demo')}
            className="text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            About Demo
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleRequestClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
          >
            Request Service
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[44px] min-w-[44px] cursor-pointer"
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
          className="fixed inset-0 top-16 bg-slate-900/40 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`fixed top-16 left-0 right-0 bg-white border-b border-slate-200 px-6 py-6 shadow-xl transition-all duration-200 ease-out md:hidden z-40 ${
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
              className="text-left py-3 px-3 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('how-it-works')}
              className="text-left py-3 px-3 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left py-3 px-3 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              Contact Options
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about-demo')}
              className="text-left py-3 px-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              About This Demo
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleRequestClick}
              className="w-full flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm min-h-[48px]"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
