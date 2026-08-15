'use client';

import { useEffect } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full text-center p-34 rounded-3xl bg-white/5 border border-white/10">
        <div className="w-20 h-20 bg-gradient-to-br from-[#e63946] to-[#ff006e] rounded-full mx-auto mb-6 flex items-center justify-center opacity-80 shadow-[0_0_50px_rgba(230,57,70,0.4)]">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-black font-heading mb-4 text-white">Something went wrong!</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          An unexpected error occurred in the application matrix. Our technical team has been notified.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium"
          >
            Try again
          </button>
          <Button href="/" variant="primary" className="w-full sm:w-auto">
            Return Home
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
