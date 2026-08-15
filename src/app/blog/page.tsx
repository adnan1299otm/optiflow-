import { SplineScene } from '@/components/3d/SplineScene';
import { SPLINE_BRAIN } from '@/lib/spline-urls';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | OptiFlow',
  description: 'Insights on AI automation, web development, Meta Ads, and digital growth.',
};

const BLOG_POSTS = [
  {
    slug: 'n8n-automation-guide',
    title: 'How We Saved a Client 20 Hours/Week with n8n Automation',
    excerpt: 'How we built a zero-touch email automation pipeline — so every new order triggers a personalized email within 2 minutes, automatically.',
    category: 'Automation',
    date: 'April 2025',
    readTime: '8 min read',
    theme: 'cyan',
    image: '/images/blog/saved_a_clint.png',
  },
  {
    slug: 'whatsapp-agent-n8n',
    title: 'How to Build a WhatsApp Business Agent with n8n in 2026',
    category: 'Automation',
    date: 'May 2025',
    readTime: '10 min read',
    excerpt: 'A complete guide to building an automated WhatsApp agent using n8n that qualifies leads, books appointments, and handles FAQs — 24/7.',
    theme: 'cyan',
    image: '/images/blog/whatsapp_business.png',
  },
  {
    slug: 'meta-ads-roas-guide',
    title: 'The Framework We Use to Achieve 3x+ ROAS on Meta Ads',
    excerpt: "Creative strategy, audience layering, and pixel setup that we've proven across 15+ e-commerce brands in the last 12 months.",
    category: 'Meta Ads',
    date: 'March 2025',
    readTime: '12 min read',
    theme: 'pink',
    image: '/images/blog/Framework.webp',
  },
  {
    slug: 'nextjs-web-app-architecture',
    title: 'Why Every Business Should Build on Next.js in 2025',
    excerpt: 'Server components, edge rendering, and built-in SEO make Next.js the undisputed choice for conversion-first web apps.',
    category: 'Web Development',
    date: 'February 2025',
    readTime: '6 min read',
    theme: 'purple',
    image: '/images/blog/nextjs.png',
  },
  {
    slug: 'custom-llm-chatbot',
    title: 'Building a Custom GPT-4 Support Bot Trained on Your Docs',
    excerpt: 'Step-by-step guide to building a RAG-based AI chatbot using OpenAI embeddings and a vector database.',
    category: 'AI',
    date: 'January 2025',
    readTime: '15 min read',
    theme: 'green',
    image: '/images/blog/personal-branding-thumbnail.jpg',
  },
];

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <section className="relative w-full pt-89 pb-89 overflow-visible border-b border-white/10 text-center">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <SplineScene url={SPLINE_BRAIN} mobileOptimized={true} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none z-0"></div>
        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
            The OptiFlow <span className="text-gradient-holographic">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium">
            Battle-tested insights on automation, AI, web dev, and growth marketing.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-black/50">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`}>
          <GlassCard interactive className="group mb-12 p-34 md:p-12 flex flex-col md:flex-row gap-21 items-start border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="flex-1">
              <div className="flex gap-3 mb-4">
                <Badge color="default">{featured.category}</Badge>
                <span className="text-white/40 text-sm">{featured.date} · {featured.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-4 group-hover:text-[#00d4ff] transition-all duration-300">
                {featured.title}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="text-[#00d4ff] font-semibold text-sm tracking-wider uppercase group-hover:underline">
                Read Full Article →
              </span>
            </div>
            <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 relative">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </GlassCard>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-21">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlassCard interactive className="group h-full p-34 flex flex-col gap-4 hover:border-white/30 transition-all duration-300">
                <div className="w-full h-40 rounded-xl overflow-hidden border border-white/5 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <Badge color="default">{post.category}</Badge>
                  <span className="text-white/40 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-heading group-hover:text-[#00d4ff] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <span className="text-[#00d4ff] font-semibold text-xs tracking-wider uppercase mt-auto group-hover:underline">{post.date}</span>
              </GlassCard>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-24 p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-21">
          <div>
            <h3 className="text-2xl font-black font-heading mb-2">Get insights in your inbox</h3>
            <p className="text-white/60">Monthly dispatches on automation, ads, and AI development.</p>
          </div>
          <Button href="/get-started" variant="primary">Subscribe →</Button>
        </div>
      </SectionWrapper>
    </>
  );
}
