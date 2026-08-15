import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Team | OptiFlow',
  description: 'Meet the founders behind OptiFlow. Two founders with a passion for technology and business growth.',
};

const FOUNDERS = [
  {
    id: 'arafath',
    name: 'Arafath Al Adnan',
    role: 'Co-Founder & Lead Developer',
    initials: 'AA',
    gradient: 'from-[#00d4ff] to-[#0066ff]',
    color: 'text-[#00d4ff]',
    bio: 'Full-stack developer passionate about AI integration and automation. Specializes in building scalable, intelligent applications that solve real business problems. With expertise in React, Next.js, Python, and n8n, bridges the gap between complex technology and practical solutions. Mission: make cutting-edge AI and automation accessible to growing businesses.',
    skills: ['Full-Stack Development', 'AI Integration', 'n8n Automation', 'React/Next.js', 'Python', 'Cloud Architecture', 'API Development', 'Mobile Development'],
    social: {
      linkedin: '#',
      instagram: '#',
      facebook: '#',
      github: '#',
    }
  },
  {
    id: 'imran',
    name: 'Imran Rony',
    role: 'Co-Founder & Growth Strategist',
    initials: 'IR',
    gradient: 'from-[#9d4edd] to-[#ff006e]',
    color: 'text-[#9d4edd]',
    bio: 'Data-driven marketing expert with deep expertise in Meta advertising and business analytics. Helps businesses unlock sustainable growth through strategic campaigns and actionable insights. Every decision is backed by data, every campaign optimized for ROI. Focus: turning numbers into narratives and clicks into customers.',
    skills: ['Meta Ads Management', 'Data Analytics', 'Growth Marketing', 'Campaign Strategy', 'A/B Testing', 'Conversion Optimization', 'CRM Strategy', 'Google Analytics'],
    social: {
      linkedin: '#',
      instagram: '#',
      facebook: '#',
    }
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 border-b border-white/10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
          Meet the Team Behind <span className="text-gradient-holographic">OptiFlow</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Two founders with a passion for technology and business growth.
        </p>
      </section>

      <SectionWrapper className="bg-black/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {FOUNDERS.map((founder) => (
            <GlassCard key={founder.id} className="p-34 md:p-10 flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,212,255,0.15)] hover:border-white/30">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-21 mb-8 text-center md:text-left">
                {/* Avatar */}
                <div className={`w-36 h-36 shrink-0 rounded-full bg-gradient-to-br ${founder.gradient} p-1 shadow-2xl`}>
                  <div className="w-full h-full rounded-full bg-[#050814] flex items-center justify-center text-4xl font-black font-heading">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">
                      {founder.initials}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-3xl font-black font-heading mb-2">{founder.name}</h2>
                  <p className={`${founder.color} font-semibold uppercase tracking-widest text-sm mb-4`}>{founder.role}</p>
                  
                  {/* Socials */}
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    {founder.social.linkedin && (
                      <Link href={founder.social.linkedin} className="text-white/40 hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                      </Link>
                    )}
                    {founder.social.github && (
                      <Link href={founder.social.github} className="text-white/40 hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.7 5.7 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.7 5.7 0 0 0-.1 3.8 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.6-5-2.5-8-3"/></svg>
                      </Link>
                    )}
                    {founder.social.instagram && (
                      <Link href={founder.social.instagram} className="text-white/40 hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </Link>
                    )}
                    {founder.social.facebook && (
                      <Link href={founder.social.facebook} className="text-white/40 hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1 mb-8">
                <p className="text-white/70 leading-relaxed mb-8">{founder.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span key={skill} className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-89 border-t border-white/10">
                <Button href="/contact" variant="ghost" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
