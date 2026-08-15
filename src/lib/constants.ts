export const SITE_NAME = "OptiFlow";
export const TAGLINE = "Automate. Optimize. Grow.";
export const CONTACT_EMAIL = "optiflowofficialteam@gmail.com";

export const SERVICES = [
  { id: "web-development", name: "Web Development", path: "/services/web-development" },
  { id: "app-development", name: "App Development", path: "/services/app-development" },
  { id: "ai-development", name: "AI Solutions", path: "/services/ai-development" },
  { id: "meta-ads-management", name: "Meta Ads Management", path: "/services/meta-ads-management" },
  { id: "data-scraping", name: "Data Scraping", path: "/services/data-scraping" },
];

export const STATS = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Years Combined Experience", value: "5+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const PROCESS_STEPS = [
  { id: 1, name: "Discover", color: "cyan", description: "Understand goals & challenges" },
  { id: 2, name: "Design", color: "purple", description: "Create custom solution" },
  { id: 3, name: "Develop", color: "pink", description: "Build with cutting-edge tech" },
  { id: 4, name: "Deploy", color: "green", description: "Launch & ongoing support" },
];

export const TECH_STACK = [
  "Next.js 14", "React 18", "TypeScript", "Tailwind CSS",
  "PostgreSQL", "Flutter", "Supabase",
  "n8n", "Python"
];

export const BUDGET_RANGES = [
  "Under $500", "$500-$1,500", "$1,500-$5,000", "Custom Quote"
];

export const TIMELINE_OPTIONS = [
  "ASAP (1-2 weeks)", "Flexible (1 month)", "Long-term (2+ months)"
];

export const ALL_PROJECTS = [
  {
    slug: 'ai-agent-system',
    title: 'Multi-Channel AI Agent System',
    category: 'AI Solutions',
    metric: '90% Query Resolution',
    imageFallbackTheme: 'purple',
    image: '/images/portfolio/ai-agent-system.png',
    clientName: 'Enterprise Client',
    isPrivate: true,
    liveUrl: null as string | null,
    websiteUrl: null as string | null,
    color: '#9d4edd',
    description:
      'Enterprise WhatsApp AI agent with multi-channel support, handling text, image, voice, and video messages. Features credit-based subscription, AI/human hybrid support, and RAG-powered semantic search.',
    techStack: ['n8n', 'ChatGPT API', 'WhatsApp Business API', 'Vector Database', 'Supabase', 'PostgreSQL'],
    features: [
      'Multi-input processing (text, image, voice, video)',
      'AI-powered intelligent responses with context',
      'Credit-based business model',
      'AI ON/OFF toggle for human support',
      'Vector database + RAG system',
      'Conversation memory across sessions',
      'Automated workflow with n8n',
    ],
    futureFeatures: [
      'Automated email delivery to end-users upon trigger events',
      'Calendar-based meeting scheduling and appointment booking',
      'Database record creation, updates, and structured data modification',
      'Instant push notifications to support staff and administrators',
    ],
    results: [
      { label: 'Query Resolution', value: '90%' },
      { label: 'Cost Reduction', value: '70%' },
      { label: 'Response Time', value: '< 2s' },
      { label: 'Support Channels', value: '3+' },
    ],
    problem:
      'The client needed a 24/7 AI support system that could handle multiple message types across WhatsApp, Messenger, and Instagram simultaneously without human intervention.',
    fullDescription:
      'We built a fully automated multi-channel AI agent using n8n as the workflow backbone, ChatGPT for intelligent responses, and a vector database for semantic memory. The agent handles text, images, voice notes, and videos — resolving 90% of queries automatically while maintaining a seamless handoff to human agents when needed.',
  },
  {
    slug: 'studypath-ai',
    title: 'StudyPath AI',
    category: 'AI Solutions',
    metric: '500+ Students',
    imageFallbackTheme: 'cyan',
    image: '/images/portfolio/studypath-ai.png',
    clientName: 'StudyPath',
    isPrivate: false,
    liveUrl: null as string | null,
    websiteUrl: 'https://socialflowfb.com/',
    color: '#00d4ff',
    description:
      'Gamified AI study planner built for Bangladeshi university students. Transforms any syllabus into a personalized day-by-day roadmap powered by Google Gemini 2.5 Flash.',
    techStack: ['Next.js 14', 'TypeScript', 'Google Gemini 2.5', 'Supabase', 'Vercel Edge Functions', 'PWA'],
    features: [
      'AI syllabus parsing from PDF/image/text',
      'Personalized day-by-day study roadmap',
      'Built-in AI tutor with chat support',
      'Gamification: XP, streaks, levels, achievements',
      'Friends-only leaderboard',
      'Timer with 6 premium themes',
      'PWA — installable on mobile',
      'Bangla + English UI',
    ],
    futureFeatures: [] as string[],
    results: [
      { label: 'Active Students', value: '500+' },
      { label: 'Day 7 Retention', value: '40%' },
      { label: 'Avg Study Session', value: '45 min' },
      { label: 'Free-to-Pro Rate', value: '8%' },
    ],
    problem:
      'Bangladeshi students lacked a structured, AI-powered study planning tool that understood their local curriculum and could adapt to individual learning styles.',
    fullDescription:
      'StudyPath AI transforms any syllabus into a personalized study roadmap using Google Gemini 2.5 Flash. Built as a PWA with offline support, gamification elements (XP, streaks, leaderboards), and bilingual Bangla/English UI — designed specifically for the Bangladeshi student market.',
  },
  {
    slug: 'clove-co-restaurant',
    title: 'Clove & Co Restaurant',
    category: 'Web Development',
    metric: '+200% Reservations',
    imageFallbackTheme: 'pink',
    image: '/images/portfolio/clove-co-restaurant.png',
    clientName: 'Clove & Co',
    isPrivate: false,
    liveUrl: 'https://cloveandco.vercel.app/' as string | null,
    websiteUrl: null as string | null,
    color: '#ff006e',
    description:
      'Premium restaurant website showcasing halal dining excellence. Features elegant design with gold accents, full menu integration, and seamless online reservation system.',
    techStack: ['Next.js', 'Responsive Design', 'Reservation System', 'Menu Integration', 'SEO'],
    features: [
      'Hero section with premium food photography',
      'Online table reservation system',
      'Interactive menu browsing',
      'Trust signals (Halal certified, 4.4★ rating)',
      '25+ customer reviews showcase',
      'Mobile-responsive design',
      'Dark elegant theme with gold accents',
    ],
    futureFeatures: [] as string[],
    results: [
      { label: 'Reservation Increase', value: '+200%' },
      { label: 'Call Volume Drop', value: '60%' },
      { label: 'Customer Rating', value: '4.4★' },
      { label: 'Mobile Traffic', value: '+85%' },
    ],
    problem:
      'Clove & Co had no online presence and was losing reservations to competitors with modern booking systems. They needed a premium website that matched their upscale brand identity.',
    fullDescription:
      'We designed and built a premium restaurant website with a dark, elegant aesthetic and gold accents that perfectly reflected the Clove & Co brand. The online reservation system reduced phone volume by 60% while the SEO-optimized pages drove a 200% increase in online bookings.',
  },
  {
    slug: 'facebook-auto-reply',
    title: 'Facebook Auto-Reply System',
    category: 'Business Automation',
    metric: '100% Response Rate',
    imageFallbackTheme: 'green',
    image: '/images/portfolio/facebook-auto-reply.png',
    clientName: 'Enterprise Client',
    isPrivate: true,
    liveUrl: null as string | null,
    websiteUrl: null as string | null,
    color: '#00ff88',
    description:
      'Automated Facebook page management system using n8n. Auto-replies to comments and removes negative comments to protect brand reputation and drive page engagement.',
    techStack: ['n8n', 'Facebook Graph API', 'AI Sentiment Analysis', 'Webhooks', 'Google Sheets'],
    features: [
      'Real-time auto-reply to Facebook comments',
      'AI-powered sentiment analysis',
      'Automatic negative comment deletion',
      'Webhook-based real-time processing',
      'Custom response templates',
      'Multi-condition logic flows',
      'Activity logging to Google Sheets',
      'AI Agent for context-aware replies',
    ],
    futureFeatures: [
      'Automated inbox message handling and intelligent reply routing',
      'Vector database integration with RAG-based semantic search',
    ],
    results: [
      { label: 'Response Rate', value: '100%' },
      { label: 'Negative Removal', value: '95%' },
      { label: 'Engagement Growth', value: '3x' },
      { label: 'Hours Saved/Week', value: '10+' },
    ],
    problem:
      'The client was losing engagement due to slow response times and brand damage from unmoderated negative comments on their Facebook page.',
    fullDescription:
      'Using n8n as the automation backbone and Facebook Graph API for real-time webhook processing, we built a system that instantly replies to all comments and removes negative sentiment content within 2 minutes — increasing engagement 3x while protecting brand reputation.',
  },
];

export const SERVICE_DETAILS: Record<string, {
  title: string;
  description: string;
  splineUrl: string;
  benefits: { title: string; description: string }[];
}> = {
  'web-development': {
    title: 'Web Development',
    description: 'We build fast, secure, and beautiful websites tailored to your unique brand identity and conversion goals.',
    splineUrl: '',
    benefits: [
      { title: 'Lightning Fast', description: 'Next.js architecture guarantees sub-second page loads.' },
      { title: 'SEO Optimized', description: 'Built-in schema markup and semantic HTML for high rankings.' },
      { title: 'Fully Responsive', description: 'Flawless experiences across mobile, tablet, and desktop.' },
      { title: 'High Conversion', description: 'UI/UX designed explicitly to turn visitors into leads.' }
    ]
  },
  'app-development': {
    title: 'App Development',
    description: 'Native-feel iOS and Android applications built for engagement and scalable growth.',
    splineUrl: '',
    benefits: [
      { title: 'Cross-Platform', description: 'Write once, deploy seamlessly to App Store and Google Play.' },
      { title: 'Offline Support', description: 'Apps that work dependably even without an internet connection.' },
      { title: 'Push Notifications', description: 'Keep users engaged with intelligent, triggered alerts.' },
      { title: 'Scalable Backend', description: 'Real-time database sync capable of handling millions of users.' }
    ]
  },
  'ai-development': {
    title: 'AI Solutions & Automation',
    description: 'Intelligent automation powered by n8n and LLMs to eliminate repetitive work.',
    splineUrl: '',
    benefits: [
      { title: 'WhatsApp Bots', description: 'Automate sales and support directly in your customers pockets.' },
      { title: 'n8n Workflows', description: 'Connect all your software silently to pass data contextually.' },
      { title: 'Custom LLMs', description: 'AI trained exclusively on your internal company docs & SOPs.' },
      { title: 'Hours Saved', description: 'Cut out 90% of manual data entry and routine busywork.' }
    ]
  },
  'meta-ads-management': {
    title: 'Meta Ads Management',
    description: 'Data-driven Facebook & Instagram campaigns that maximize ROI and scale your business.',
    splineUrl: '',
    benefits: [
      { title: 'Thumb-Stopping Creatives', description: 'Video and image ads designed to capture attention instantly.' },
      { title: 'Advanced Targeting', description: 'Reaching the exact demographic most likely to buy your product.' },
      { title: 'A/B Testing', description: 'Continuous multivariate testing to find the cheapest conversion.' },
      { title: 'Pixel Tracking', description: 'Flawless server-side API integration for zero data loss.' }
    ]
  },
  'data-scraping': {
    title: 'Data Scraping',
    description: 'Extract valuable business intelligence out of any platform, website, or directory cleanly and legally.',
    splineUrl: '',
    benefits: [
      { title: 'B2B Lead Generation', description: 'Pulling verified emails, names, and numbers automatically.' },
      { title: 'Competitor Analysis', description: 'Track competitors pricing and inventory changes in real-time.' },
      { title: 'Market Sentiment', description: 'Scrape reviews and social platforms for brand monitoring.' },
      { title: 'Clean Export', description: 'Delivered in pristine CSV, JSON, or piped directly to your CRM.' }
    ]
  }
};
