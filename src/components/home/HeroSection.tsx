'use client';

import { SplineScene } from '@/components/3d/SplineScene';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#0a0e27] to-black">
      
      {/* 3D placeholder - original external scene connection removed */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <SplineScene
              followCursor={true}
              followStrength={0.5}
              interactive={false}
              className="w-full h-full scale-110"
            />
          </div>
        </div>
      </div>
    
      {/* Mobile Alternative - Animated Gradient (MUCH FASTER) */}
      <div className="md:hidden absolute inset-0 z-0">
        <div className="w-full h-full relative overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#00d4ff]/30 via-[#00d4ff]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-[#9d4edd]/30 via-[#9d4edd]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-radial from-[#00ff88]/30 via-[#00ff88]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88] animate-pulse"></div>
          <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
            Automate. Optimize. Grow.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading mb-8 leading-tight drop-shadow-2xl">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 drop-shadow-2xl">
            We&apos;re Building
          </span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#9d4edd] to-[#ff006e]">
            The Future
          </span>
        </h1>

        {/* Subheadline with color accents */}
        <div className="text-2xl md:text-3xl lg:text-4xl text-white/80 mb-12 font-medium tracking-tight">
          <span className="text-[#00d4ff]" style={{ filter: 'drop-shadow(0 2px 8px currentColor)' }}>AI</span> × 
          <span className="text-[#9d4edd]" style={{ filter: 'drop-shadow(0 2px 8px currentColor)' }}> WEB</span> × 
          <span className="text-[#ff006e]" style={{ filter: 'drop-shadow(0 2px 8px currentColor)' }}> UX</span> × 
          <span className="text-[#00ff88]" style={{ filter: 'drop-shadow(0 2px 8px currentColor)' }}> 3D</span> × 
          <span className="text-white" style={{ filter: 'drop-shadow(0 2px 8px currentColor)' }}> MOTION</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-21 justify-center items-center">
          <a
            href="/get-started"
            className="group relative px-10 py-5 bg-gradient-to-r from-[#e63946] to-[#ff006e] text-white text-lg font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#e63946]/50 hover:brightness-110"
          >
            <span className="relative z-10">Get Started →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff006e] to-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="/portfolio"
            className="px-10 py-5 bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] text-lg font-black rounded-2xl hover:bg-[#00d4ff] hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#00d4ff]/50"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
