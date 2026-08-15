'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="text-[160px] md:text-[220px] font-black font-heading leading-none text-gradient-holographic select-none">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-black font-heading mb-4 -mt-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed">
          Looks like this page took a wrong turn. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/get-started" variant="ghost" size="lg">
            Start a Project
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
