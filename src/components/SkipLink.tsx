export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 bg-brand-navy text-white font-medium text-sm rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
