'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PROCESS_STEPS } from '@/lib/constants';

export const ProcessTimeline = () => {
  return (
    <SectionWrapper id="process">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">Our Simple 4-Step Process</h2>
        <p className="text-lg text-white/60 max-w-2xl">
          We follow a streamlined, transparent approach to ensure your project is delivered on time, within budget, and to the highest standards.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-[var(--gradient-holographic)] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Connecting Line (Mobile) */}
        <div className="md:hidden absolute top-[40px] bottom-[40px] left-[39px] w-[2px] bg-white/10 z-0 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-[var(--gradient-holographic)] origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-21 md:gap-4 relative z-10">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex md:flex-col items-start md:items-center text-left md:text-center relative group gap-21 md:gap-0"
            >
              {/* Number Circle */}
              <div className="relative mb-0 md:mb-8 shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#0a0e27] border-2 border-white/20 flex items-center justify-center text-3xl font-black font-heading transition-colors duration-500 group-hover:border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] relative z-10">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-2 md:pt-89">
                <h3 className="text-2xl font-bold font-heading mb-2">{step.name}</h3>
                <p className="text-white/60 font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
