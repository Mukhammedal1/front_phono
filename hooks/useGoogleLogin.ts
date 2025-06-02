import { useEffect } from 'react'

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: any) => void; auto_select: boolean }) => void;
          prompt: () => void;
        };
      };
    };
  }
}

interface GoogleLoginProps {
  clientId: string;
  onSuccess: (response: any) => Promise<void>;
  onError?: (error: any) => void;
}

export function useGoogleLogin({ clientId, onSuccess, onError }: GoogleLoginProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.google) return

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response) => {
        try {
          await onSuccess(response)
        } catch (error) {
          if (onError) onError(error)
        }
      },
      auto_select: false,
    })

    window.google.accounts.id.prompt()
  }, [clientId, onSuccess, onError])
}
