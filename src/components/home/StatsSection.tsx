'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { STATS } from '@/lib/constants';

const Counter = ({ from = 0, to, suffix = "", duration = 2 }: { from?: number, to: number, suffix?: string, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, duration, inView]);

  return <span ref={nodeRef} className="tabular-nums">{from}{suffix}</span>;
};

export const StatsSection = () => {
  return (
    <section className="py-89 bg-[#0a0e27] border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-21">
          {STATS.map((stat, index) => {
            const num = parseInt(stat.value.replace(/\D/g, ''), 10);
            const suffix = stat.value.replace(/\d/g, '');
            
            return (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-gradient-holographic tracking-tight drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                  <Counter to={num} suffix={suffix} />
                </div>
                <div className="text-sm md:text-base font-semibold text-white/80 uppercase tracking-widest max-w-[150px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
