import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BACKGROUND } from '@/lib/spline-urls';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GetStartedForm } from '@/components/forms/GetStartedForm';
import { STATS } from '@/lib/constants';

export const metadata = {
  title: 'Get Started | OptiFlow',
  description: 'Start your project with OptiFlow. Tell us about your goals.',
};

export default function GetStartedPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 overflow-visible border-b border-white/10 text-center">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <SplineScene url={SPLINE_BACKGROUND} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none z-0"></div>

        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
            Start Your <span className="text-gradient-holographic">Project</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium mb-8">
            Fill out the form below and our team will respond within 24 hours to discuss how we can transform your business.
          </p>

          <div className="flex flex-wrap justify-center gap-21 mb-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black font-heading text-white">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-black/50">
        <GetStartedForm />
      </SectionWrapper>
    </>
  );
}
