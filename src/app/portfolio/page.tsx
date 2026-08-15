import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BRAIN } from '@/lib/spline-urls';
import { AnimatedFilter } from '@/components/portfolio/AnimatedFilter';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export const metadata = {
  title: 'Portfolio | OptiFlow',
  description: 'Real projects. Real results. Explore our AI, web, and automation work.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 overflow-visible min-h-[500px] flex items-center border-b border-white/10">
        {/* Brain 3D background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <SplineScene
            url={SPLINE_BRAIN}
            mobileOptimized={true}
            interactive={false}
            followCursor={false}
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none z-0" />

        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight leading-tight overflow-visible">
            Our Work{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #00d4ff, #9d4edd, #ff006e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline',
              }}
            >
              Speaks for Itself
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium">
            Real outcomes for real businesses. From AI agents to premium websites — see how we deliver results.
          </p>
        </div>
      </section>

      {/* Filterable Projects Grid */}
      <SectionWrapper className="bg-black/50">
        <AnimatedFilter />
      </SectionWrapper>
    </>
  );
}
