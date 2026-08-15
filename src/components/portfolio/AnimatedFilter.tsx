'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ALL_PROJECTS } from '@/lib/constants';
import Image from 'next/image';

const categories = ['All', 'AI Solutions', 'Web Development', 'Business Automation'];

const themeGradients: Record<string, string> = {
  purple: 'from-[#9d4edd]/40 to-[#ff006e]/40',
  cyan: 'from-[#00d4ff]/40 to-[#0066ff]/40',
  pink: 'from-[#ff006e]/40 to-[#e63946]/40',
  green: 'from-[#00ff88]/40 to-[#00d4ff]/40',
};

export const AnimatedFilter = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = ALL_PROJECTS.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <div className="w-full">

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              filter === cat
                ? 'text-white border-transparent shadow-[0_0_20px_rgba(0,212,255,0.35)]'
                : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
            style={
              filter === cat
                ? { backgroundImage: 'linear-gradient(135deg, #00d4ff, #9d4edd, #ff006e)' }
                : {}
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <GlassCard interactive className="group h-full flex flex-col p-6 overflow-hidden">

                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-xl mb-5 relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/5 group-hover:border-white/20 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-3/4 h-3/4 rounded-lg bg-gradient-to-br opacity-60 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 ${themeGradients[project.imageFallbackTheme] || themeGradients.cyan}`}
                    />
                  </div>
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
                <h3 className="text-xl font-bold font-heading mb-2 leading-tight">{project.title}</h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
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

                {/* CTA */}
                <div className="border-t border-white/10 pt-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-medium transition-all border border-white/10 hover:border-white/20"
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
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
