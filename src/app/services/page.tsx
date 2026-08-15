import { SERVICES } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BACKGROUND } from '@/lib/spline-urls';
import { ShieldCheck, Code, Globe, Bot, BarChart4, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | OptiFlow',
  description: 'Explore the full range of digital services provided by OptiFlow.',
};

// Map icons to the service IDs
const serviceIcons: Record<string, React.ReactNode> = {
  'web-development': <Globe className="w-8 h-8 text-[#00d4ff]" />,
  'app-development': <Code className="w-8 h-8 text-[#00ff88]" />,
  'ai-development': <Bot className="w-8 h-8 text-[#9d4edd]" />,
  'meta-ads-management': <BarChart4 className="w-8 h-8 text-[#e63946]" />,
  'data-scraping': <ShieldCheck className="w-8 h-8 text-[#00d4ff]" />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative w-full pt-89 pb-89 overflow-visible border-b border-white/10 text-center">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <SplineScene url={SPLINE_BACKGROUND} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none z-0"></div>

        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
            Our <span className="text-gradient-holographic">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium mb-8">
            Comprehensive digital solutions designed to modernize your brand and accelerate your growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="bg-black/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-21">
          {SERVICES.map((targetService) => (
            <Link key={targetService.id} href={targetService.path}>
              <GlassCard interactive className="group h-full p-34 flex flex-col items-start gap-21 border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white">
                  {serviceIcons[targetService.id] || <Code className="w-8 h-8" />}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-[#00d4ff] transition-all duration-300">
                    {targetService.name}
                  </h3>
                  <p className="text-white/60 mb-6 group-hover:text-white/80 transition-colors duration-300">
                    Learn how our specialized {targetService.name.toLowerCase()} approach can radically transform your operations and sales entirely.
                  </p>
                </div>
                
                <div className="flex items-center text-[#00d4ff] font-semibold text-sm tracking-widest uppercase mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                  View Details <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
