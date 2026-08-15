'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BRAIN } from '@/lib/spline-urls';
import { ALL_PROJECTS } from '@/lib/constants';
import Image from 'next/image';

export const FeaturedProjects = () => {
  // Show first 3 real projects
  const featured = ALL_PROJECTS.slice(0, 3);

  const themeGradients: Record<string, string> = {
    purple: 'from-[#9d4edd]/40 to-[#ff006e]/40',
    cyan: 'from-[#00d4ff]/40 to-[#0066ff]/40',
    pink: 'from-[#ff006e]/40 to-[#e63946]/40',
    green: 'from-[#00ff88]/40 to-[#00d4ff]/40',
  };

  return (
    <SectionWrapper id="work" className="relative">
      {/* Brain 3D — decorative background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none hidden md:block">
        <SplineScene
          url={SPLINE_BRAIN}
          mobileOptimized={true}
          interactive={false}
          followCursor={false}
          className="w-full h-full"
        />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
            Real Results
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">
            Our Work <span className="text-gradient-holographic">Speaks for Itself</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Recent projects that transformed businesses and delivered measurable results.
          </p>
        </motion.div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {featured.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
          >
            <GlassCard interactive className="group h-full flex flex-col p-6 overflow-hidden">

              {/* Project Image / Fallback */}
              <div className="w-full aspect-[4/3] rounded-xl mb-5 relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/5 group-hover:border-white/20 transition-colors">
                {/* Try real image first */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // If image fails, hide it — gradient fallback shows underneath
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Gradient fallback — always rendered behind */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-3/4 h-3/4 rounded-lg bg-gradient-to-br opacity-60 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 ${themeGradients[project.imageFallbackTheme] || themeGradients.cyan}`} />
                </div>
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge color="default">{project.category}</Badge>
                <Badge color="green" className="!bg-[#00ff88]/20 !border-[#00ff88]/40 !text-[#00ff88]">
                  {project.metric}
                </Badge>
                {project.isPrivate && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40">
                    🔒 Private
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-heading mb-3 leading-tight">{project.title}</h3>

              {/* Description — truncated */}
              <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech stack pills — show first 3 */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/30">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* Footer CTA */}
              <div className="border-t border-white/10 pt-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-medium transition-all duration-200 group-hover:border-white/20 border border-white/10"
                  >
                    Visit Live Site
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Button href={`/portfolio/${project.slug}`} variant="ghost" className="w-full group-hover:bg-white/10">
                    View Case Study
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Button>
                )}
              </div>

            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="mt-12 flex justify-center relative z-10">
        <Button href="/portfolio" variant="secondary">View All Projects →</Button>
      </div>
    </SectionWrapper>
  );
};
