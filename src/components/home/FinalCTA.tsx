'use client';

import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_PURPLE_SPHERE } from '@/lib/spline-urls';

export const FinalCTA = () => {
  return (
    <section 
      className="relative py-89 bg-gradient-to-b from-black via-[#0a0e27] to-black"
      style={{ overflow: 'hidden', isolation: 'isolate' }}
    >
      {/* Purple Sphere 3D Background - contained */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ overflow: 'hidden' }}
      >
        <div className="relative w-full h-full opacity-50">
          <SplineScene mobileOptimized={false}
            url={SPLINE_PURPLE_SPHERE}
            followCursor={false}
            interactive={false}
            className="w-full h-full scale-125"
          />
        </div>
      </div>

      {/* Hard bottom cutoff gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
      />

      {/* Purple glow overlay to match sphere */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(ellipse at center, rgba(157,78,221,0.12) 0%, transparent 70%)' }}
      />

      {/* Dark vignette for depth */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }}
      />

      {/* CTA Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-10 leading-tight overflow-visible">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 drop-shadow-2xl">
            Ready to Transform
          </span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9d4edd] via-[#ff006e] to-[#00d4ff]">
            Your Business?
          </span>
        </h2>

        <p className="text-xl md:text-3xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          Let&apos;s build something amazing together. Start your project today and join 100+ businesses we&apos;ve transformed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-21 justify-center items-center mb-16">
          <a
            href="/get-started"
            className="group relative px-10 py-5 bg-gradient-to-r from-[#e63946] to-[#ff006e] text-white text-xl font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#e63946]/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff006e] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="/portfolio"
            className="group px-10 py-5 bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] text-xl font-black rounded-2xl hover:bg-[#00d4ff] hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#00d4ff]/50"
          >
            <span className="flex items-center gap-3">
              View Our Work
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center items-center gap-21 text-white/60">
          {['Free Consultation', '24/7 Support', 'Money-Back Guarantee'].map((signal) => (
            <div key={signal} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00ff88] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{signal}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
