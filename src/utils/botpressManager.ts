/**
 * Botpress Webchat Integration Manager
 * Manages Botpress Webchat v5 initialization, custom Northstar branding config,
 * opening/closing the chat window, and sending pre-qualified inquiry prompts.
 */

// Visual design tokens
export const BOTPRESS_THEME = {
  primaryColor: '#0D9488', // Brand Teal
  brandNavy: '#102A43',
  brandBlueGray: '#203B50',
  brightTeal: '#2DD4BF',
  fontFamily: '"Segoe UI", "Segoe UI Variable", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
};

/**
 * Configure Botpress webchat after script initialization to match
 * Northstar Plumbing Co.'s visual identity and GTA lead-generation workflow.
 */
export function configureBotpress(): boolean {
  if (typeof window === 'undefined') return false;

  const bp = window.botpress;
  if (!bp) return false;

  try {
    // If config method exists, apply Northstar Plumbing branding
    if (typeof bp.config === 'function') {
      bp.config({
        botName: 'Northstar AI Receptionist',
        botDescription: '24/7 Greater Toronto Area Plumbing Triage & Estimates',
        composerPlaceholder: 'Describe your plumbing issue (e.g., basement leak in North York)...',
        theme: {
          primaryColor: BOTPRESS_THEME.primaryColor,
          fontFamily: BOTPRESS_THEME.fontFamily,
          themeMode: 'light',
        },
      });
    }
    return true;
  } catch (err) {
    console.warn('[Botpress] Error applying dynamic config:', err);
    return false;
  }
}

/**
 * Safely open the Botpress Webchat window and optionally send an initial message/query.
 * Handles async script loading with a timeout fallback.
 */
export function openBotpressChat(initialMessage?: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    const tryOpen = (attempt = 0) => {
      const bp = window.botpress;
      if (bp) {
        try {
          if (typeof bp.open === 'function') {
            bp.open();
          } else if (typeof bp.toggle === 'function') {
            bp.toggle();
          }

          // If an initial message is requested, send it after chat window opens
          if (initialMessage && typeof bp.sendMessage === 'function') {
            setTimeout(() => {
              try {
                bp.sendMessage?.(initialMessage);
              } catch (e) {
                console.warn('[Botpress] Could not send initial message:', e);
              }
            }, 350);
          }
          resolve(true);
          return;
        } catch (e) {
          console.warn('[Botpress] Error opening chat:', e);
        }
      }

      if (attempt < 15) {
        setTimeout(() => tryOpen(attempt + 1), 200);
      } else {
        // Fallback: If Botpress hasn't initialized yet, scroll to request-service
        const requestEl = document.getElementById('request-service');
        if (requestEl) {
          requestEl.scrollIntoView({ behavior: 'smooth' });
        }
        resolve(false);
      }
    };

    tryOpen();
  });
}

/**
 * Safely close the Botpress Webchat window.
 */
export function closeBotpressChat(): void {
  if (typeof window !== 'undefined' && window.botpress?.close) {
    try {
      window.botpress.close();
    } catch (e) {
      console.warn('[Botpress] Error closing chat:', e);
    }
  }
}

/**
 * Check if the Botpress Webchat API is loaded and available on the window object.
 */
export function isBotpressLoaded(): boolean {
  return typeof window !== 'undefined' && Boolean(window.botpress);
}
