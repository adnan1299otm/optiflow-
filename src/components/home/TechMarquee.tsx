'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/constants';

// Duplicate the array a few times to ensure seamless infinite scrolling
const marqueeItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

export const TechMarquee = () => {
  return (
    <section className="py-89 bg-[#0a0e27]/50 border-y border-white/5 overflow-hidden flex flex-col items-center">
      <div className="text-center mb-10">
        <h3 className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Technologies We Master</h3>
      </div>
      
      <div className="relative flex w-[200vw] sm:w-[150vw] md:w-[100vw] overflow-hidden -mx-[50vw]">
        {/* Left/Right Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1035] }} // Adjust based on estimated width to make it seamless
          transition={{ 
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="flex whitespace-nowrap min-w-full gap-16 px-16 items-center flex-nowrap"
        >
          {marqueeItems.map((tech, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-black font-heading text-white/40 hover:text-white/80 transition-colors cursor-default whitespace-nowrap shrink-0"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
