import { useState } from 'react';
import { 
  Bot, 
  MessageSquare, 
  Zap, 
  MapPin, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Send,
  Smartphone
} from 'lucide-react';
import { openBotpressChat } from '../utils/botpressManager';

const GTA_AREAS = [
  'Old Toronto & Downtown',
  'North York',
  'Etobicoke',
  'Scarborough',
  'Mississauga',
  'Vaughan & Richmond Hill',
  'Markham',
];

const SAMPLE_INQUIRIES = [
  {
    title: 'Emergency Burst Pipe',
    location: 'North York (M2N)',
    type: 'emergency',
    query: 'Urgent: Water is dripping through our basement ceiling from the floor above in North York.',
    responsePreview: 'Identifies active water damage, provides emergency shutoff advice, requests phone number for immediate dispatcher on-call.',
    urgencyBadge: 'Immediate (15-45m)',
    urgencyColor: 'bg-rose-950/70 text-rose-300 border-rose-600/40',
  },
  {
    title: 'Main Sewer / Drain Backup',
    location: 'Etobicoke (M9B)',
    type: 'high',
    query: 'Our basement floor drain is bubbling up and draining very slowly during laundry in Etobicoke.',
    responsePreview: 'Confirms drain symptoms, suggests camera scope inspection, and schedules priority morning technician slot.',
    urgencyBadge: 'Priority (Same-Day)',
    urgencyColor: 'bg-amber-950/70 text-amber-300 border-amber-600/40',
  },
  {
    title: 'Tankless Water Heater Estimate',
    location: 'Scarborough (M1B)',
    type: 'routine',
    query: 'Looking for an upfront estimate to switch from a rental tank to a high-efficiency tankless heater.',
    responsePreview: 'Collects home size, fuel type (natural gas), and books an upfront consultation with transparent pricing.',
    urgencyBadge: 'Scheduled Quote',
    urgencyColor: 'bg-teal-950/70 text-teal-300 border-teal-600/40',
  },
];

export function AiReceptionistShowcase() {
  const [selectedInquiryIndex, setSelectedInquiryIndex] = useState(0);
  const [isTriggering, setIsTriggering] = useState(false);

  const activeInquiry = SAMPLE_INQUIRIES[selectedInquiryIndex];

  const handleTestInquiry = (queryText: string) => {
    setIsTriggering(true);
    openBotpressChat(queryText).finally(() => {
      setTimeout(() => setIsTriggering(false), 500);
    });
  };

  return (
    <section 
      id="ai-receptionist" 
      className="py-16 sm:py-24 bg-[#1B3448] text-white border-t border-b border-[#3A566D] relative overflow-hidden"
      aria-labelledby="ai-showcase-heading"
    >
      {/* Background ambient decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#122B40] border border-[#3A566D] text-brand-teal-bright shadow-sm mb-4">
            <Bot className="w-3.5 h-3.5 text-brand-teal-bright" />
            <span>Commercial AI Receptionist Feature</span>
          </div>

          <h2
            id="ai-showcase-heading"
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4"
          >
            Never Miss a GTA Plumbing Job: 24/7 AI Receptionist
          </h2>

          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Plumbing emergencies happen at 11 PM and on Sunday mornings. Northstar's conversational receptionist engages after-hours homeowners, triages active leaks, checks GTA service territory, and routes qualified leads directly to the on-call plumber.
          </p>
        </div>

        {/* 4-Pillar Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="bg-[#203B50] rounded-2xl border-2 border-[#3A566D] p-5 shadow-lg flex flex-col justify-between hover:border-brand-teal transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-center text-brand-teal-bright mb-4 shadow-inner">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-1">
                Pillar 1
              </span>
              <h3 className="text-base font-bold text-white mb-2">Instant 24/7 Triage</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Separates active water bursts from routine estimates within 10 seconds. Provides emergency shut-off guidance immediately.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A566D] flex items-center gap-1.5 text-[11px] text-teal-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Zero hold time</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#203B50] rounded-2xl border-2 border-[#3A566D] p-5 shadow-lg flex flex-col justify-between hover:border-brand-teal transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-center text-brand-teal-bright mb-4 shadow-inner">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-1">
                Pillar 2
              </span>
              <h3 className="text-base font-bold text-white mb-2">GTA Territory Check</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Verifies caller postal codes across Toronto, North York, Scarborough, Etobicoke, and Mississauga before booking.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A566D] flex items-center gap-1.5 text-[11px] text-teal-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Full GTA Coverage</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#203B50] rounded-2xl border-2 border-[#3A566D] p-5 shadow-lg flex flex-col justify-between hover:border-brand-teal transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-center text-brand-teal-bright mb-4 shadow-inner">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-1">
                Pillar 3
              </span>
              <h3 className="text-base font-bold text-white mb-2">Scope Qualification</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Captures fixture type, property classification (residential vs commercial), and specific symptoms to equip technicians.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A566D] flex items-center gap-1.5 text-[11px] text-teal-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Pre-diagnosed job</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#203B50] rounded-2xl border-2 border-[#3A566D] p-5 shadow-lg flex flex-col justify-between hover:border-brand-teal transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#122B40] border border-[#3A566D] flex items-center justify-center text-brand-teal-bright mb-4 shadow-inner">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-bright block mb-1">
                Pillar 4
              </span>
              <h3 className="text-base font-bold text-white mb-2">Contractor Alert</h3>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Transfers pre-qualified contact details, address, and callback preference into SMS or CRM dispatch pipeline.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#3A566D] flex items-center gap-1.5 text-[11px] text-teal-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Ready-to-bill lead</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Testing Demonstration Panel */}
        <div className="bg-[#203B50] rounded-3xl border-2 border-[#3A566D] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Interactive Scenario Selector */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="flex items-center gap-2 text-brand-teal-bright text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Test Live Scenarios with Botpress</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Select a GTA Inquiry to Test the Receptionist
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Click any scenario below to see how the conversational receptionist classifies urgency and qualifies the customer. You can send it directly to the live Botpress chat widget:
              </p>

              {/* Inquiry Options */}
              <div className="space-y-3 pt-2">
                {SAMPLE_INQUIRIES.map((item, idx) => {
                  const isSelected = selectedInquiryIndex === idx;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setSelectedInquiryIndex(idx)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#122B40] border-brand-teal shadow-md'
                          : 'bg-[#122B40]/60 border-[#3A566D] hover:bg-[#122B40] hover:border-slate-400'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">{item.title}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.urgencyColor}`}>
                            {item.urgencyBadge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300">{item.query}</p>
                        <p className="text-[11px] text-brand-teal-bright flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </p>
                      </div>
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                        isSelected ? 'border-brand-teal bg-brand-teal text-white' : 'border-slate-500'
                      }`}>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Send to Botpress Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleTestInquiry(activeInquiry.query)}
                  disabled={isTriggering}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-950/70 border border-teal-300/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Send "{activeInquiry.title}" into Live Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Dispatch SMS Simulation Preview */}
            <div className="w-full lg:w-1/2">
              <div className="bg-[#122B40] rounded-2xl border-2 border-[#3A566D] p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#3A566D]">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-brand-teal-bright" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Contractor SMS Dispatch Preview
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-600/50">
                    Live Lead Captured
                  </span>
                </div>

                {/* Simulated SMS Bubble */}
                <div className="bg-[#203B50] rounded-xl border border-[#3A566D] p-4 text-xs font-mono space-y-2 mb-4 text-slate-200">
                  <div className="text-brand-teal-bright font-bold flex items-center justify-between">
                    <span>NORTHSTAR ON-CALL DISPATCH</span>
                    <span className="text-[10px] text-slate-400">JUST NOW</span>
                  </div>
                  <div className="border-t border-slate-700/60 pt-2 space-y-1">
                    <p><strong className="text-white">URGENCY:</strong> <span className="text-amber-300 font-bold">{activeInquiry.urgencyBadge}</span></p>
                    <p><strong className="text-white">CUSTOMER:</strong> Michael T. (Verified Consent)</p>
                    <p><strong className="text-white">PHONE:</strong> 416-555-0182 (Click to call)</p>
                    <p><strong className="text-white">AREA:</strong> {activeInquiry.location}</p>
                    <p><strong className="text-white">PROBLEM:</strong> {activeInquiry.query}</p>
                    <p><strong className="text-white">SHUTOFF STATUS:</strong> Homeowner advised on main water shutoff valve location.</p>
                  </div>
                </div>

                {/* Contractor Value Explanation */}
                <div className="bg-[#203B50]/60 rounded-xl p-3 border border-[#3A566D]/70 text-xs text-[#CBD5E1] space-y-2">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-teal-bright shrink-0" />
                    <span>Why plumbing businesses love this:</span>
                  </p>
                  <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-300">
                    <li>Homeowners don't leave after-hours voicemails—they call the next contractor on Google.</li>
                    <li>The AI receptionist engages in seconds and locks in the callback.</li>
                    <li>Your on-call plumber gets verified details before dialing.</li>
                  </ul>
                </div>

                {/* Quick Chat Open Link */}
                <div className="mt-4 pt-3 border-t border-[#3A566D] text-center">
                  <button
                    type="button"
                    onClick={() => openBotpressChat()}
                    className="text-xs font-bold text-brand-teal-bright hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open full Botpress conversation window</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GTA Service Coverage List */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <span className="font-semibold text-slate-300 mr-2">Supported GTA Municipalities:</span>
          {GTA_AREAS.map((area, i) => (
            <span key={area} className="inline-flex items-center">
              <span className="text-slate-300">{area}</span>
              {i < GTA_AREAS.length - 1 && <span className="mx-2 text-slate-600">•</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
