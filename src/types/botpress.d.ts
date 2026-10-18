/**
 * TypeScript declarations for Botpress Webchat v5
 */
export interface BotpressWebchatConfig {
  botId: string;
  clientId?: string;
  configuration?: {
    botName?: string;
    botDescription?: string;
    website?: Record<string, unknown>;
    email?: Record<string, unknown>;
    phone?: Record<string, unknown>;
    termsOfService?: Record<string, unknown>;
    privacyPolicy?: Record<string, unknown>;
    feedbackEnabled?: boolean;
    allowFileUpload?: boolean;
    soundEnabled?: boolean;
    conversationHistory?: boolean;
    homePageEnabled?: boolean;
    welcomeHeading?: string;
    welcomeSubtitle?: string;
    conversationStartersEnabled?: boolean;
    conversationStarters?: unknown[];
    conversationStartersDisplayStyle?: string;
    citationsEnabled?: boolean;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface BotpressApi {
  init: (config: BotpressWebchatConfig) => void;
  config?: (configOptions: Record<string, unknown>) => void;
  open?: () => void;
  close?: () => void;
  toggle?: () => void;
  isLoaded?: boolean;
  on?: (event: string, callback: (...args: unknown[]) => void) => void;
  sendEvent?: (event: unknown) => void;
  sendMessage?: (message: string) => void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    botpress?: BotpressApi;
  }
}
