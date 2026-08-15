import { FAQ_CATEGORIES } from '@/lib/faq-data';
import { AccordionItem } from '@/components/faq/AccordionItem';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata = {
  title: 'FAQ | OptiFlow',
  description: 'Frequently asked questions about our process, pricing, technical stack, and AI solutions.',
};

export default function FAQPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 border-b border-white/10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
          Frequently Asked <span className="text-gradient-holographic">Questions</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Everything you need to know about our services, process, and technology.
        </p>
      </section>

      <SectionWrapper className="bg-[#050814]">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {FAQ_CATEGORIES.map((category, index) => (
            <div key={index} className="flex flex-col gap-21">
              <h2 className="text-3xl font-black font-heading mb-4 text-gradient-holographic inline-block">
                {category.title}
              </h2>
              <div className="flex flex-col gap-4">
                {category.faqs.map((faq, i) => (
                  <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
