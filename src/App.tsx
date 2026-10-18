/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SkipLink } from './components/SkipLink';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { ServiceRequestWizard } from './components/ServiceRequestWizard';
import { ContactSection } from './components/ContactSection';
import { AboutDemoSection } from './components/AboutDemoSection';
import { AiReceptionistShowcase } from './components/AiReceptionistShowcase';
import { BotpressTeaser } from './components/BotpressTeaser';
import { Footer } from './components/Footer';
import { ServiceType } from './types/serviceRequest';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceType | ''>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // If it's the wizard or has focusable target
      el.focus?.();
    }
  };

  const handleSelectServiceFromCard = (serviceId: ServiceType) => {
    setSelectedService(serviceId);
    scrollToSection('request-service');
  };

  const handleRequestServiceClick = () => {
    scrollToSection('request-service');
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-slate-100 font-sans selection:bg-brand-teal selection:text-white">
      {/* Accessible skip link for keyboard users */}
      <SkipLink />

      {/* Primary 3-Zone Navigation Bar */}
      <Header
        onRequestServiceClick={handleRequestServiceClick}
        onNavigateSection={scrollToSection}
      />

      {/* Main Landmark Container */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {/* Improvement 1: Faster, clearer mobile homepage hero */}
        <HeroSection
          onRequestService={handleRequestServiceClick}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* Core Services with direct link into the wizard */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* 24/7 AI Receptionist Lead-Generation Showcase & Live Testing Hub */}
        <AiReceptionistShowcase />

        {/* How It Works with clear demo scope */}
        <HowItWorks />

        {/* Improvement 2: Accessible 4-Step Service Request Flow */}
        <ServiceRequestWizard
          initialService={selectedService}
          onReturnHome={() => scrollToSection('home')}
        />

        {/* Contact Options with labelled sample placeholders */}
        <ContactSection onRequestClick={handleRequestServiceClick} />

        {/* Architectural analysis of the 2 improvements */}
        <AboutDemoSection />
      </main>

      {/* Footer with mandatory demo disclaimer and privacy notice */}
      <Footer
        onNavigate={scrollToSection}
        onRequestClick={handleRequestServiceClick}
      />

      {/* Floating AI Receptionist Quick-Action Teaser */}
      <BotpressTeaser />
    </div>
  );
}
