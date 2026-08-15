import { notFound } from 'next/navigation';
import { SERVICES, SERVICE_DETAILS } from '@/lib/constants';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { SplineScene } from '@/components/3d/SplineScene';
import { AIRobotSpline } from '@/components/3d/AIRobotSpline';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { FinalCTA } from '@/components/home/FinalCTA';
import { WhatWeBuild } from '@/components/home/WhatWeBuild';
import { CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const serviceData = SERVICE_DETAILS[params.slug];

  if (!serviceData) {
    notFound();
  }

  const isAiPage = params.slug === 'ai-development';

  return (
    <>
      {/* Service Hero */}
      <section className="relative w-full pt-89 pb-89 overflow-hidden border-b border-white/10 min-h-[80vh] flex items-center">
        
        {/* 3D Scene — full background, behind content */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
          {isAiPage ? (
            <AIRobotSpline />
          ) : (
            <SplineScene
              url={serviceData.splineUrl}
              className="w-full h-full"
            />
          )}
        </div>

        {/* Gradient overlay — left side darker so text is readable, right side transparent so 3D shows */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Top and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-[1]" />

        {/* Text content — left side only, z-10 so it's above everything */}
        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight drop-shadow-2xl">
              {serviceData.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-10">
              {serviceData.description}
            </p>
            <Button href="/get-started" variant="primary" size="lg">
              Start Project
            </Button>
          </div>
        </div>

        {/* Spline watermark blocker — bottom right corner */}
        <div
          className="absolute bottom-0 right-0 z-20 pointer-events-none"
          style={{
            width: '220px',
            height: '60px',
            background: 'linear-gradient(135deg, transparent 0%, transparent 30%, rgba(0,0,0,0.97) 60%, #000000 100%)',
          }}
        />
      </section>

      {/* What You Get / Benefits */}
      <SectionWrapper className="bg-black relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">What You Get</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We don&apos;t just deliver deliverables. We deliver measurable business outcomes tailored exclusively to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-21 max-w-5xl mx-auto">
          {serviceData.benefits.map((benefit, idx) => (
            <GlassCard key={idx} className="p-34 border-l-4 border-l-[#00d4ff] flex flex-col gap-4 group">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-[#00ff88]" />
                <h3 className="text-2xl font-bold font-heading">{benefit.title}</h3>
              </div>
              <p className="text-white/60 text-lg leading-relaxed pl-12">
                {benefit.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* ========== N8N WORKFLOW SHOWCASE (AI Solutions ONLY) ========== */}
      {params.slug === 'ai-development' && (
        <section className="relative py-24 bg-gradient-to-b from-black via-[#0a0e27] to-black border-t border-white/10">
          <div className="max-w-[1600px] mx-auto px-21">
            
            {/* Section Header - HONEST MESSAGING */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-[#9d4edd]/30 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#9d4edd] animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  AI Development & Automation
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#9d4edd] to-[#ff006e]">
                Full-Stack AI Solutions
              </h2>
              
              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                We build intelligent AI assistants using <span className="text-[#00ff88] font-bold">custom production code</span> (Python, TypeScript, Node.js) and leverage <span className="text-[#9d4edd] font-bold">n8n workflows</span> when appropriate. Best tool for the job, always.
              </p>
            </div>

            {/* n8n Workflow Diagram */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-4 md:p-8 backdrop-blur-xl shadow-2xl hover:border-[#9d4edd]/50 transition-all duration-500 hover:scale-[1.01]">
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/10 via-transparent to-[#ff006e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image - RESPONSIVE */}
                <div className="relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/n8n-workflow-diagram.png" 
                    alt="n8n AI workflow diagram"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Mobile: Zoom hint */}
                <div className="md:hidden absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm text-white/80 text-xs flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Tap to zoom
                </div>
              </div>

              <p className="text-center text-white/60 mt-6 text-sm md:text-lg">
                Example workflow: Multi-agent AI system for IT Ops, Security, DevOps, and Sales automation
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-55 flex flex-wrap justify-center gap-13 mt-6">
              {[
                { name: 'Custom Code', color: '#00ff88' },
                { name: 'n8n Workflows', color: '#9d4edd' },
                { name: 'OpenAI API', color: '#00d4ff' },
                { name: 'Anthropic Claude', color: '#ff006e' },
                { name: 'Python', color: '#00d4ff' },
                { name: 'TypeScript', color: '#9d4edd' },
                { name: 'Node.js', color: '#00ff88' },
                { name: 'RESTful APIs', color: '#e63946' }
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
                >
                  <span className="text-white/80 font-medium" style={{ color: tech.color }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-55 mt-10">
              <a
                href="/get-started"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#9d4edd] to-[#ff006e] text-white text-lg font-black rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9d4edd]/50"
              >
                Build Your AI Assistant
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </section>
      )}

      {/* What We Build (Only for Web Development) */}
      {params.slug === 'web-development' && <WhatWeBuild />}

      {/* Reused Process Timeline */}
      <ProcessTimeline />

      {/* Global CTA */}
      <FinalCTA />
    </>
  );
}
