import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BRAIN } from '@/lib/spline-urls';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | OptiFlow',
  description: 'The minds behind OptiFlow. Learn about our mission and meet the team.',
};

const FOUNDERS_PREVIEW = [
  {
    id: 'arafath',
    name: 'Arafath Al Adnan',
    role: 'Co-Founder & Lead Developer',
    initials: 'AA',
    gradient: 'from-[#00d4ff] to-[#0066ff]',
  },
  {
    id: 'imran',
    name: 'Imran Rony',
    role: 'Co-Founder & Growth Strategist',
    initials: 'IR',
    gradient: 'from-[#9d4edd] to-[#ff006e]',
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 overflow-visible border-b border-white/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <SplineScene url={SPLINE_BRAIN} mobileOptimized={true} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none z-0"></div>

        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight drop-shadow-2xl">
            The Minds Behind <span className="text-gradient-holographic">OptiFlow</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            We are a collective of engineers, designers, and growth hackers obsessed with crushing inefficiency through modern software.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-black/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-21 max-w-5xl mx-auto">
          <GlassCard className="p-10 flex flex-col gap-4 text-center md:text-left transition-transform hover:-translate-y-2">
            <h2 className="text-3xl font-black font-heading text-[#00d4ff]">Our Mission</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To empower businesses with intelligent automation and cutting-edge technology that drives real, measurable growth.
            </p>
          </GlassCard>
          
          <GlassCard className="p-10 flex flex-col gap-4 text-center md:text-left transition-transform hover:-translate-y-2">
            <h2 className="text-3xl font-black font-heading text-[#00ff88]">Our Vision</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              A world where every business, regardless of size, can leverage AI and automation to compete and thrive.
            </p>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="bg-black relative pt-89">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-12 text-center">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-21">
            <div className="p-34 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00d4ff]/50 transition-colors">
              <h3 className="text-2xl font-bold font-heading mb-3 text-[#00d4ff]">Innovation</h3>
              <p className="text-white/60 text-sm leading-relaxed">We constantly explore new technologies like AI and no-code tools to find better, faster ways to solve problems.</p>
            </div>
            
            <div className="p-34 rounded-3xl bg-white/5 border border-white/10 hover:border-[#9d4edd]/50 transition-colors">
              <h3 className="text-2xl font-bold font-heading mb-3 text-[#9d4edd]">Quality</h3>
              <p className="text-white/60 text-sm leading-relaxed">We refuse to ship medicore work. Every line of code, every design, every campaign is executed with precision.</p>
            </div>

            <div className="p-34 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ff006e]/50 transition-colors">
              <h3 className="text-2xl font-bold font-heading mb-3 text-[#ff006e]">Results</h3>
              <p className="text-white/60 text-sm leading-relaxed">Code is just a tool. We measure our success entirely by how much revenue or time we save your organization.</p>
            </div>

            <div className="p-34 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00ff88]/50 transition-colors">
              <h3 className="text-2xl font-bold font-heading mb-3 text-[#00ff88]">Transparency</h3>
              <p className="text-white/60 text-sm leading-relaxed">No black boxes. You work directly with executors and always know exactly what we are building and why.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Meet the founders */}
      <SectionWrapper className="bg-[#050814] relative border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">Meet the Founders</h2>
          <p className="text-xl text-white/60">Expertise that drives OptiFlow forward.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-21 max-w-3xl mx-auto mb-12">
          {FOUNDERS_PREVIEW.map((member) => (
            <GlassCard key={member.id} className="p-34 flex flex-col items-center text-center group transition-all duration-300 hover:border-white/30 hover:bg-white/10">
              <div className={`w-24 h-24 rounded-full mb-6 bg-gradient-to-br ${member.gradient} p-1 shadow-xl transition-transform duration-500 group-hover:scale-110`}>
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-2xl font-black font-heading overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
                    {member.initials}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-heading mb-2">{member.name}</h3>
              <p className="text-white/50 font-medium text-sm uppercase tracking-widest">
                {member.role}
              </p>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/team" variant="ghost" size="lg">Read our full bios →</Button>
        </div>
      </SectionWrapper>

      {/* Reused Final CTA but with custom text */}
      <section className="relative w-full py-24 overflow-hidden border-t border-white/10 bg-black text-center px-6">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--gradient-holographic)] opacity-[0.03] blur-[100px]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-21 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            Ready to grow?
          </h2>
          <p className="text-xl text-white/60 mb-4 font-medium leading-relaxed max-w-xl mx-auto">
            Let&apos;s build something incredible together.
          </p>
          <Button href="/get-started" variant="primary" size="lg" className="w-full sm:w-auto text-lg">
            Let&apos;s work together
          </Button>
        </div>
      </section>
    </>
  );
}
