import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { CONTACT_EMAIL } from '@/lib/constants';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { GetStartedForm } from '@/components/forms/GetStartedForm';

export const metadata = {
  title: 'Contact | OptiFlow',
  description: 'Get in touch with the OptiFlow team. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 border-b border-white/10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
          Get In <span className="text-gradient-holographic">Touch</span>
        </h1>
        <p className="text-xl text-white/60 max-w-xl mx-auto">
          Ready to talk? Drop us a message below or reach out directly — we respond fast.
        </p>
      </section>

      <SectionWrapper className="bg-black/50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-21">
            <GlassCard className="p-34 flex flex-col gap-4">
              <Mail className="w-8 h-8 text-[#00d4ff]" />
              <h3 className="text-xl font-bold font-heading">Email Us</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm leading-relaxed break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </GlassCard>

            <GlassCard className="p-34 flex flex-col gap-4">
              <Clock className="w-8 h-8 text-[#00ff88]" />
              <h3 className="text-xl font-bold font-heading">Response Time</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We typically respond within <span className="text-white font-semibold">24 hours</span>. For urgent enquiries, please mention &ldquo;URGENT&rdquo; in your subject line.
              </p>
            </GlassCard>

            <GlassCard className="p-34 flex flex-col gap-4">
              <MessageSquare className="w-8 h-8 text-[#9d4edd]" />
              <h3 className="text-xl font-bold font-heading">What Happens Next</h3>
              <ol className="text-white/60 text-sm leading-relaxed list-decimal list-inside flex flex-col gap-2">
                <li>We review your request</li>
                <li>Schedule a free discovery call</li>
                <li>Send a custom proposal</li>
                <li>Kickstart your project</li>
              </ol>
            </GlassCard>
          </div>

          {/* Form (reuse GetStartedForm) */}
          <div className="lg:col-span-2">
            <GetStartedForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
