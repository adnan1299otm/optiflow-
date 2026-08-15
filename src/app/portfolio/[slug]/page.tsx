import { notFound } from 'next/navigation';
import { ALL_PROJECTS } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BRAIN } from '@/lib/spline-urls';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

// Define static params for static generation (SSG)
export function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = ALL_PROJECTS.find(p => p.slug === params.slug) as typeof ALL_PROJECTS[0] | undefined;

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative w-full pt-89 pb-89 overflow-visible border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <SplineScene url={SPLINE_BRAIN} mobileOptimized={true} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none z-0"></div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col items-center flex-wrap text-center">
          <div className="flex gap-3 mb-6 flex-wrap justify-center">
            <Badge color="default">{project.category}</Badge>
            <Badge color="cyan">Client: {project.clientName}</Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-8 tracking-tight max-w-4xl leading-tight">
            {project.title}
          </h1>

          <div className="p-1 px-4 mb-8 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 text-[#00ff88] font-bold tracking-wide">
            {project.metric}
          </div>

          <div className="mt-4 mb-4">
          </div>
        </div>
      </section>

      <SectionWrapper>
        {/* Hero image with fallback */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 bg-gradient-to-br from-white/5 to-white/10 mt-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br opacity-40 z-[-1] ${
            project.imageFallbackTheme === 'purple' ? 'from-[#9d4edd] to-[#ff006e]' :
            project.imageFallbackTheme === 'cyan' ? 'from-[#00d4ff] to-[#0066ff]' :
            project.imageFallbackTheme === 'pink' ? 'from-[#ff006e] to-[#e63946]' :
            'from-[#00ff88] to-[#00d4ff]'
          }`} />
        </div>

        {/* ── Challenge + Solution ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col gap-21">
            <h2 className="text-3xl font-bold font-heading text-white">The Challenge</h2>
            <div className="p-34 rounded-2xl bg-[#e63946]/5 border border-[#e63946]/20">
              <p className="text-lg text-white/70 leading-relaxed">{project.problem}</p>
            </div>
          </div>
          <div className="flex flex-col gap-21">
            <h2 className="text-3xl font-bold font-heading text-white">The Solution</h2>
            <div className="p-34 rounded-2xl bg-[#00d4ff]/5 border border-[#00d4ff]/20">
              <p className="text-lg text-white/70 leading-relaxed">{project.fullDescription}</p>
            </div>
          </div>
        </div>

        {/* ── Key Features ────────────────────────────────── */}
        {'features' in project &&
          Array.isArray((project as {features?: string[]}).features) &&
          ((project as {features: string[]}).features).length > 0 && (
          <div className="mb-24">
            <h2 className="text-3xl font-bold font-heading text-white text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {((project as {features: string[]}).features).map((feature: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <svg
                    className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Planned Enhancements ────────────────────────── */}
        {'futureFeatures' in project &&
          Array.isArray((project as {futureFeatures?: string[]}).futureFeatures) &&
          ((project as {futureFeatures: string[]}).futureFeatures).length > 0 && (
          <div className="mb-24">
            <div className="flex items-center justify-center gap-3 mb-12">
              <h2 className="text-3xl font-bold font-heading text-white">
                Planned Enhancements
              </h2>
              <span className="text-xs px-3 py-1 rounded-full bg-[#9d4edd]/15 border border-[#9d4edd]/30 text-[#9d4edd] font-bold uppercase tracking-wider">
                Roadmap
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {((project as {futureFeatures: string[]}).futureFeatures).map(
                (feature: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#9d4edd]/[0.04] border border-[#9d4edd]/20"
                  >
                    <svg
                      className="w-5 h-5 text-[#9d4edd] flex-shrink-0 mt-0.5 opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-white/60 text-sm leading-relaxed">{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* ── Measurable Results ──────────────────────────── */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold font-heading text-white text-center mb-12">
            Measurable Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-21">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="p-34 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"
              >
                <div className="text-5xl font-black font-heading mb-4 text-gradient-holographic">
                  {typeof result === 'object' ? result.value : result}
                </div>
                <div className="text-white/60 font-medium uppercase tracking-widest text-sm">
                  {typeof result === 'object' ? result.label : 'Result'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tech Stack ───────────────────────────────────── */}
        <div className="mb-24 flex flex-col items-center">
          <h2 className="text-2xl font-bold font-heading text-white/80 mb-8">
            Tech Stack Used
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-1.5 rounded-lg bg-[#0a0e27] border border-white/10 font-mono text-sm text-[#00d4ff]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Project Links ────────────────────────────────── */}
        {'liveUrl' in project || 'websiteUrl' in project || 'isPrivate' in project ? (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {'liveUrl' in project && (project as {liveUrl: string | null}).liveUrl && (
              <a
                href={(project as {liveUrl: string}).liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #e63946, #ff006e)',
                  boxShadow: '0 4px 24px rgba(230,57,70,0.3)',
                }}
              >
                Visit Live Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {'websiteUrl' in project && (project as {websiteUrl: string | null}).websiteUrl && (
              <a
                href={(project as {websiteUrl: string}).websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all hover:scale-105"
              >
                Try the Application
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {'isPrivate' in project &&
              (project as {isPrivate?: boolean}).isPrivate &&
              !('liveUrl' in project && (project as {liveUrl: string | null}).liveUrl) &&
              !('websiteUrl' in project && (project as {websiteUrl: string | null}).websiteUrl) && (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white/40 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Enterprise Client — Confidential Project
              </div>
            )}
          </div>
        ) : null}
      </SectionWrapper>

      <section className="py-89 bg-[var(--gradient-holographic)]/10 border-t border-white/10 text-center px-6">
        <h2 className="text-4xl font-black font-heading mb-6">Want results like these?</h2>
        <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your goals and see how OptiFlow can help scale your business.
        </p>
        <Button href="/contact" size="lg" variant="primary">
          Let&apos;s Talk →
        </Button>
      </section>
    </>
  );
}
