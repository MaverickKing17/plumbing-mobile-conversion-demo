import { useState, useEffect } from 'react';
import { MessageSquare, X, ChevronUp, Sparkles, AlertTriangle, Droplets, Flame } from 'lucide-react';
import { openBotpressChat, configureBotpress } from '../utils/botpressManager';

const STARTER_PROMPTS = [
  {
    id: 'emergency-leak',
    label: '🚨 Emergency Leak / Pipe Burst',
    text: 'I have an active plumbing leak emergency and need urgent assistance in Toronto.',
    icon: AlertTriangle,
    accent: 'border-amber-400/40 text-amber-300 hover:bg-amber-950/40',
  },
  {
    id: 'clogged-drain',
    label: '🚿 Clogged Drain / Backup',
    text: 'My basement drain is backing up and draining very slowly. Can you help with service availability?',
    icon: Droplets,
    accent: 'border-teal-400/40 text-teal-300 hover:bg-teal-950/40',
  },
  {
    id: 'water-heater',
    label: '♨️ Water Heater Quote',
    text: 'I need an estimate to repair or replace my residential hot water heater.',
    icon: Flame,
    accent: 'border-cyan-400/40 text-cyan-300 hover:bg-cyan-950/40',
  },
];

export function BotpressTeaser() {
  const [isOpen, setIsOpen] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt dynamic Botpress configuration on mount and when available
  useEffect(() => {
    configureBotpress();
    const timer = setInterval(() => {
      if (configureBotpress()) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePromptClick = (text: string) => {
    setHasInteracted(true);
    setIsOpen(false);
    openBotpressChat(text);
  };

  const handleOpenGeneralChat = () => {
    setHasInteracted(true);
    setIsOpen(false);
    openBotpressChat();
  };

  // If dismissed, show a compact, unobtrusive floating teaser badge
  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-5 sm:right-6 z-40 hidden sm:flex items-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2.5 px-3.5 py-2 bg-[#203B50]/95 hover:bg-[#26455D] text-white text-xs font-semibold rounded-full border-2 border-[#3A566D] shadow-xl hover:border-brand-teal transition-all duration-200 cursor-pointer backdrop-blur-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          aria-label="Open Northstar AI Receptionist suggestions"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-200 group-hover:text-white">AI Receptionist (24/7 GTA)</span>
          <ChevronUp className="w-3.5 h-3.5 text-brand-teal-bright group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm bg-[#203B50]/95 backdrop-blur-md rounded-2xl border-2 border-[#3A566D] p-4 shadow-2xl shadow-black/50 text-white animate-in fade-in slide-in-from-bottom-3 duration-300 transition-all"
      role="region"
      aria-label="AI Receptionist Assistant"
    >
      {/* Header bar */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#122B40] border border-[#3A566D] flex items-center justify-center text-brand-teal-bright shrink-0 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-bright" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-tight">Northstar AI Receptionist</span>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-600/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1 animate-pulse"></span>
                24/7 Live
              </span>
            </div>
            <p className="text-[11px] text-[#CBD5E1]">GTA Triage, Estimates & Dispatch</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="p-1 text-slate-400 hover:text-white hover:bg-[#122B40] rounded-md transition-colors cursor-pointer"
          aria-label="Minimize AI assistant suggestions"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-[#CBD5E1] mb-3 leading-relaxed">
        Need rapid answers or urgent service? Select an inquiry below or launch chat:
      </p>

      {/* Quick starter action buttons */}
      <div className="space-y-1.5 mb-3">
        {STARTER_PROMPTS.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            onClick={() => handlePromptClick(prompt.text)}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium border bg-[#122B40] hover:bg-[#183149] transition-all duration-150 flex items-center justify-between gap-2 text-slate-200 hover:text-white cursor-pointer group ${prompt.accent}`}
          >
            <span className="truncate">{prompt.label}</span>
            <span className="text-[10px] text-brand-teal-bright group-hover:translate-x-0.5 transition-transform shrink-0">
              Ask →
            </span>
          </button>
        ))}
      </div>

      {/* Main chat open CTA */}
      <button
        type="button"
        onClick={handleOpenGeneralChat}
        className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-xs tracking-wide shadow-md border border-teal-300/30 transition-all cursor-pointer hover:shadow-teal-500/20 active:translate-y-0.5"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Open AI Receptionist Chat</span>
      </button>
    </div>
  );
}
