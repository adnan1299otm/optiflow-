'use client';

import { motion } from 'framer-motion';
import { SplineScene } from '@/components/3d/SplineScene';

// Updated Spline URL — user re-exported the scene
const FLOATING_SCREENS_URL = 'https://prod.spline.design/7vFrLz6pwOsmUmVj/scene.splinecode';

const BUILD_TYPES = [
  {
    name: 'E-commerce Stores',
    color: '#00d4ff',
    borderColor: 'hover:border-[#00d4ff]/60',
    glowColor: 'hover:shadow-[0_4px_24px_rgba(0,212,255,0.15)]',
    desc: 'Online stores that convert visitors into customers with seamless checkout and inventory management.',
    icon: '🛍️',
  },
  {
    name: 'SaaS Applications',
    color: '#9d4edd',
    borderColor: 'hover:border-[#9d4edd]/60',
    glowColor: 'hover:shadow-[0_4px_24px_rgba(157,78,221,0.15)]',
    desc: 'Scalable web apps for modern businesses — dashboards, portals, and cloud platforms.',
    icon: '⚡',
  },
  {
    name: 'Portfolio Websites',
    color: '#ff006e',
    borderColor: 'hover:border-[#ff006e]/60',
    glowColor: 'hover:shadow-[0_4px_24px_rgba(255,0,110,0.15)]',
    desc: 'Stunning showcases for creatives and professionals that win clients on the first impression.',
    icon: '🎨',
  },
  {
    name: 'Landing Pages',
    color: '#00ff88',
    borderColor: 'hover:border-[#00ff88]/60',
    glowColor: 'hover:shadow-[0_4px_24px_rgba(0,255,136,0.15)]',
    desc: 'High-converting pages that maximize ROI for campaigns, product launches, and lead generation.',
    icon: '🚀',
  },
  {
    name: 'AI-Powered Websites',
    color: '#00d4ff',
    borderColor: 'hover:border-[#00d4ff]/60',
    glowColor: 'hover:shadow-[0_4px_24px_rgba(0,212,255,0.15)]',
    desc: 'Websites with built-in AI assistants, chatbots, and automation that work 24/7 for your business.',
    icon: '🤖',
    badge: 'Powered by n8n',
  },
];

export const WhatWeBuild = () => {
  return (
    <section
      className="relative border-t border-white/10"
      style={{
        background: '#000000',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        overflow: 'hidden',
        isolation: 'isolate',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold tracking-[0.3em] text-[#00d4ff] uppercase mb-4">
            Web Development Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight">
            <span className="text-white">What We </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #00d4ff, #9d4edd, #ff006e)' }}
            >
              Build
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-xl">
            From startups to enterprises — every project is crafted for results.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT: Cards 40% LEFT, 3D 60% RIGHT */}
        {/* MOBILE LAYOUT: Cards only, no 3D (stacked) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Cards (2 of 5 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {BUILD_TYPES.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`
                  group flex items-start gap-4 p-5 rounded-xl
                  bg-white/[0.03] border border-white/[0.08]
                  ${type.borderColor} ${type.glowColor}
                  transition-all duration-300 hover:bg-white/[0.06]
                  cursor-default relative overflow-hidden
                `}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: type.color }}
                />

                {/* Icon */}
                <div className="text-xl flex-shrink-0 mt-0.5">{type.icon}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3
                      className="text-base font-black font-heading tracking-tight"
                      style={{ color: type.color }}
                    >
                      {type.name}
                    </h3>
                    {type.badge && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                        {type.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{type.desc}</p>
                </div>

                {/* Arrow */}
                <span
                  className="font-black text-base flex-shrink-0 group-hover:translate-x-1 transition-all duration-300"
                  style={{ color: type.color, opacity: 0.3 }}
                >
                  →
                </span>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <a
                href="/get-started"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black text-base text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #e63946, #ff006e)',
                  boxShadow: '0 0 32px rgba(230, 57, 70, 0.25)',
                }}
              >
                Start Your Web Project
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — 3D Floating Screens (3 of 5 columns) */}
          <motion.div
            className="lg:col-span-3 relative hidden lg:block"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ height: '720px', position: 'relative' }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(157,78,221,0.1) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />

            {/* 3D Scene — overflow visible so all screens show */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '-5%',   /* slight left shift so screens fill the column */
                right: '-5%',  /* extra width on both sides */
                bottom: 0,
                overflow: 'visible',
                isolation: 'isolate',
              }}
            >
              <SplineScene
                url={FLOATING_SCREENS_URL}
                followCursor={true}
                followStrength={0.4}
                interactive={true}
                mobileOptimized={false}
                className="w-full h-full"
              />
            </div>

            {/* Watermark blocker — bottom-right corner where Spline logo appears */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '240px',
                height: '64px',
                background: 'linear-gradient(135deg, transparent 0%, transparent 30%, rgba(0,0,0,0.97) 60%, #000000 100%)',
                pointerEvents: 'none',
                zIndex: 20,
              }}
            />

            {/* Bottom fade — blends 3D into section bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80px',
                background: 'linear-gradient(to bottom, transparent, #000000)',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            />
          </motion.div>

        </div>

        {/* MOBILE LAYOUT — Cards only, full width, no 3D */}
        <div className="lg:hidden flex flex-col gap-4">
          {BUILD_TYPES.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`
                group flex items-start gap-4 p-5 rounded-xl
                bg-white/[0.03] border border-white/[0.08]
                ${type.borderColor} ${type.glowColor}
                transition-all duration-300
                cursor-default relative overflow-hidden
              `}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: type.color }}
              />
              <div className="text-2xl flex-shrink-0 mt-0.5">{type.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <h3
                    className="text-lg font-black font-heading tracking-tight"
                    style={{ color: type.color }}
                  >
                    {type.name}
                  </h3>
                  {type.badge && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                      {type.badge}
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{type.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4"
          >
            <a
              href="/get-started"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black text-base text-white transition-all duration-300 hover:scale-105 w-full justify-center"
              style={{
                background: 'linear-gradient(90deg, #e63946, #ff006e)',
                boxShadow: '0 0 32px rgba(230, 57, 70, 0.25)',
              }}
            >
              Start Your Web Project
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
