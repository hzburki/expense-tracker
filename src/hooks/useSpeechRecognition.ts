import { useEffect, useRef, useState } from 'react';

// Web Speech API types
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionEvent extends Event {
  results: {
    item(index: number): SpeechRecognitionResult;
    length: number;
    [index: number]: SpeechRecognitionResult;
  };
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onend: ((this: SpeechRecognition) => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

declare global {
  interface Window {
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

export const useSpeechRecognition = (setInputMessage: (message: string) => void) => {
  const [isTranscribing, setIsTranscribing] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');

        if (event.results[0].isFinal) {
          setInputMessage(transcript);
        }
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setIsTranscribing(false);
      };

      recognitionRef.current.onend = () => {
        setIsTranscribing(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [setInputMessage]);

  const startTranscribing = () => {
    if (recognitionRef.current) {
      setIsTranscribing(true);
      recognitionRef.current.start();
    }
  };

  const stopTranscribing = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return {
    isTranscribing,
    startTranscribing,
    stopTranscribing,
  };
};
