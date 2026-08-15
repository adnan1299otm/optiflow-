export const ServicesGrid = () => {
  return (
    <section className="relative py-32 bg-black border-y border-white/10 overflow-hidden" id="services">
      
      {/* Background mesh gradient for depth */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#00d4ff]/10 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-[#9d4edd]/10 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
            What We Do
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            End-to-end digital solutions that transform businesses
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Web Development */}
          <div className="group relative">
            {/* Glass card with premium effects */}
            <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-[#00d4ff]/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00d4ff]/20">
              
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with accent color */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>

                {/* Title with simultaneous contrast */}
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#00d4ff] transition-colors">
                  Web Development
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-6">
                  Modern, responsive websites that drive results. From landing pages to complex web applications.
                </p>

                {/* CTA Link with arrow animation */}
                <a 
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Corner accent (subtle) */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 2: App Development */}
          <div className="group relative">
            <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-[#9d4edd]/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#9d4edd]/20">
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9d4edd]/0 to-[#9d4edd]/0 group-hover:from-[#9d4edd]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9d4edd]/20 to-[#9d4edd]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#9d4edd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#9d4edd] transition-colors">
                  App Development
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  iOS & Android applications built with cutting-edge technology for seamless user experiences.
                </p>

                <a 
                  href="/services/app-development"
                  className="inline-flex items-center gap-2 text-[#9d4edd] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#9d4edd]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 3: AI Solutions */}
          <div className="group relative">
            <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-[#ff006e]/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ff006e]/20">
              
              {/* Special badge for AI Solutions */}
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-[#ff006e] to-[#9d4edd] text-white text-xs font-bold shadow-lg z-20">
                Popular
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff006e]/0 to-[#ff006e]/0 group-hover:from-[#ff006e]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff006e]/20 to-[#ff006e]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#ff006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#ff006e] transition-colors">
                  AI Solutions
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  Intelligent automation powered by custom code and n8n. WhatsApp agents, chatbots, and workflows.
                </p>

                <a 
                  href="/services/ai-development"
                  className="inline-flex items-center gap-2 text-[#ff006e] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#ff006e]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 4: Meta Ads */}
          <div className="group relative">
            <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-[#e63946]/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#e63946]/20">
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e63946]/0 to-[#e63946]/0 group-hover:from-[#e63946]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e63946]/20 to-[#e63946]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#e63946] transition-colors">
                  Meta Ads Management
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  Data-driven Facebook & Instagram campaigns that maximize ROI and scale your business.
                </p>

                <a 
                  href="/services/meta-ads-management"
                  className="inline-flex items-center gap-2 text-[#e63946] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#e63946]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 5: Data Scraping */}
          <div className="group relative">
            <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-[#00ff88]/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00ff88]/20">
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00ff88]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#00ff88] transition-colors">
                  Data Scraping
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  Extract valuable business intelligence. Competitor analysis, market research, and lead generation.
                </p>

                <a 
                  href="/services/data-scraping"
                  className="inline-flex items-center gap-2 text-[#00ff88] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00ff88]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 6: Business Automation */}
          <div className="group relative">
            <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-[#00d4ff]/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00d4ff]/20">
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#00d4ff] transition-colors">
                  Business Automation
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  End-to-end workflow automation. Connect your tools, eliminate manual tasks, save hours every week.
                </p>

                <a 
                  href="/services/ai-development"
                  className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-3 transition-all group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
