import { notFound } from 'next/navigation';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

const BLOG_POSTS = [
  {
    slug: 'n8n-automation-guide',
    title: 'How We Saved a Client 20 Hours/Week with n8n Automation',
    excerpt: 'How we built a zero-touch email automation pipeline — so every new order triggers a personalized email within 2 minutes, automatically.',
    category: 'Automation',
    date: 'April 2025',
    readTime: '8 min read',
    image: '/images/blog/saved_a_clint.png',
    content: `
<p>When a growing e-commerce brand approached us, their biggest operational problem wasn't traffic or product — it was what happened <em>after</em> a customer placed an order. Every sale triggered a manual process: open the spreadsheet, copy the customer details, write a personalized email, hit send. Four hours a day. Every single day.</p>

<p>We fixed it completely in three days. Here's exactly what we built.</p>

<h2>The Problem: Manual Emails After Every Order</h2>

<p>The client ran a mid-sized e-commerce operation processing 30–40 orders daily. Their post-purchase workflow had three failure points:</p>
<ul>
  <li>Order details were manually copied into a Google Sheet — introducing human error</li>
  <li>Confirmation and follow-up emails were written individually — time-consuming and inconsistent</li>
  <li>CRM records were updated by hand — often delayed by hours</li>
</ul>

<p>At their order volume, this consumed nearly half a working day and was actively slowing their ability to scale. They needed automation — but without the complexity of enterprise software.</p>

<h2>Layer 1 — Order Capture via Google Apps Script</h2>

<p>We deployed a Google Apps Script Web App that functions as a lightweight, serverless API endpoint. The client's e-commerce platform was configured to send a POST request to this endpoint every time a new order was confirmed.</p>

<p>The script receives the payload, parses the order data — customer name, email address, product purchased, order value, shipping address, and any order notes — and appends a clean, formatted row to a designated Google Sheet in real time.</p>

<p>No plugins. No paid middleware. Just a deployed Apps Script URL acting as a webhook receiver. The entire data capture layer costs nothing to run.</p>

<h2>Layer 2 — Personalized Email Trigger via n8n</h2>

<p>We configured an n8n workflow that monitors the Google Sheet for new row additions. The moment a row appears — within seconds of an order being placed — n8n executes a multi-step sequence:</p>

<ol>
  <li><strong>Data enrichment</strong> — n8n reads all fields from the new row: customer name, product purchased, order total, and purchase history (if the customer has ordered before, this is noted)</li>
  <li><strong>Dynamic email generation</strong> — An AI node powered by OpenAI generates a personalized email. Not a template with a name variable swapped in — a genuinely unique message based on what the customer bought, the order value, whether it's a repeat purchase, and any product-specific context</li>
  <li><strong>Email delivery</strong> — The email sends via Gmail within 60–90 seconds of order placement. Every message is different. No customer receives the same email twice.</li>
  <li><strong>CRM sync</strong> — The customer's record is created or updated in the CRM automatically, with the order linked and the email logged</li>
</ol>

<h2>The Results</h2>

<p>After deployment, the numbers were clear:</p>
<ul>
  <li><strong>20 hours saved per week</strong> — zero manual email effort from the team</li>
  <li><strong>Average email delivery time: 90 seconds</strong> after order confirmation</li>
  <li><strong>Every email is unique</strong> — AI-generated based on real order context</li>
  <li><strong>99.9% accuracy</strong> — no missed orders, no delayed follow-ups, no CRM gaps</li>
</ul>

<h2>Why This Combination Works</h2>

<p>Google Apps Script handles the data ingestion layer reliably, for free, without any third-party dependencies. n8n orchestrates the business logic, AI generation, and outbound communications. Together, they form an automation pipeline that would cost thousands monthly with off-the-shelf tools — and it runs indefinitely at near-zero cost.</p>

<p>This same architecture scales to any post-purchase trigger: shipping notifications, review requests, upsell sequences, abandoned cart recovery — all personalized, all automated, all running without human intervention.</p>

<div style="background: rgba(0,212,255,0.06); border: 1px solid rgba(0,212,255,0.2); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
  <p style="margin: 0; color: rgba(255,255,255,0.8);">Want this built for your business? We implement these automations end-to-end — from Apps Script deployment to n8n workflow configuration and AI email setup. <strong style="color: #00d4ff;">Get in touch and we'll have it running within days.</strong></p>
</div>
    `,
  },
  {
    slug: 'whatsapp-agent-n8n',
    title: 'How to Build a WhatsApp Business Agent with n8n in 2026',
    excerpt: 'A complete guide to building an automated WhatsApp agent using n8n that qualifies leads, books appointments, and handles FAQs — 24/7.',
    category: 'Automation',
    date: 'May 2025',
    readTime: '10 min read',
    image: '/images/blog/whatsapp_business.png',
    content: `
<p>WhatsApp has over 2 billion active users. Your customers are already there — messaging friends, businesses, and support teams at all hours. The question is whether your business is responding fast enough to win their attention.</p>

<p>A production-grade WhatsApp Business Agent built on n8n can handle lead qualification, FAQ responses, appointment booking, order tracking, and human escalation — automatically, around the clock. Here's what it takes to build one that actually works.</p>

<h2>Step 1: Host Your n8n Instance</h2>

<p>n8n is the workflow automation backbone of the entire system. You have two options:</p>

<ul>
  <li><strong>n8n Cloud</strong> — Hosted and managed. Fastest to get started. Ideal for testing and initial deployment. Starts at $20/month.</li>
  <li><strong>Self-hosted</strong> — Deploy on a VPS (Hetzner, DigitalOcean, or Railway). Full control, lower cost at scale, and no usage limits. Recommended for production once the agent is stable.</li>
</ul>

<p>Your n8n instance must have a public HTTPS URL. WhatsApp will send all incoming messages to this URL via webhook — so it needs to be reachable from the internet at all times.</p>

<h2>Step 2: Connect the WhatsApp Business API</h2>

<p>You need API-level access to WhatsApp — not the consumer app. There are two routes to get this:</p>

<ul>
  <li><strong>Meta Business Suite (Official)</strong> — The direct route through Meta. Required for high-volume, production deployments. Requires business verification, which takes 2–5 business days. Free to access once verified; you pay per message template sent.</li>
  <li><strong>Third-party API providers</strong> — Services like 360dialog, Twilio, or Gupshup provide WhatsApp API access with simpler onboarding. Good for faster go-live, though they add a layer of cost and dependency.</li>
</ul>

<p>Once you have API access, you register a webhook URL pointing to your n8n instance. Every message a user sends to your WhatsApp Business number will instantly POST to that URL as a JSON payload.</p>

<h2>Step 3: Build the n8n Workflow</h2>

<p>A production WhatsApp agent runs through a structured node sequence in n8n:</p>

<ol>
  <li><strong>Webhook node</strong> — Receives the incoming message payload from WhatsApp API in real time</li>
  <li><strong>Message parser</strong> — Extracts sender number, message type (text, image, audio, document, video), and content</li>
  <li><strong>Conversation memory</strong> — Retrieves previous messages from this number to maintain context across the conversation</li>
  <li><strong>Intent classifier</strong> — An AI node determines what the user wants: FAQ answer, lead inquiry, booking request, order status, or human escalation</li>
  <li><strong>Logic branches</strong> — The workflow routes to the correct response path based on intent</li>
  <li><strong>AI response generator</strong> — Generates a contextual, human-sounding reply using OpenAI or another LLM, informed by your business knowledge base</li>
  <li><strong>WhatsApp send node</strong> — Delivers the reply via the API within 2–5 seconds of the user's message</li>
</ol>

<h2>Step 4: Connect a Data Store</h2>

<p>For lead qualification and CRM purposes, connecting a data store transforms your agent from a responder into a sales tool:</p>

<ul>
  <li><strong>Google Sheets</strong> — Simple, free, immediately visible to your team. Every qualified lead gets a row with name, number, intent, and conversation summary.</li>
  <li><strong>Supabase or Airtable</strong> — More structured, better for querying and filtering at scale.</li>
  <li><strong>Your existing CRM</strong> — n8n has native integrations for HubSpot, Salesforce, Pipedrive, Notion, and most major CRMs.</li>
</ul>

<h2>What a Production Agent Handles</h2>

<ul>
  <li>Answer product and service FAQs without any human involvement</li>
  <li>Qualify leads by asking structured questions in a conversational flow</li>
  <li>Book appointments by integrating with Google Calendar or Calendly</li>
  <li>Send order tracking updates from your fulfillment system</li>
  <li>Process text messages, images, voice notes, and documents</li>
  <li>Escalate to a human agent when needed — with full conversation history attached</li>
  <li>Operate in multiple languages automatically</li>
</ul>

<h2>What Makes This Difficult to Build Well</h2>

<p>A WhatsApp agent that works in a demo is one thing. A production agent that handles edge cases, maintains conversation state across sessions, responds in under 5 seconds, never loops on an unclear message, and scales to hundreds of simultaneous conversations is a different challenge entirely. It requires deep experience with n8n workflow architecture, WhatsApp API quirks, prompt engineering, and error handling.</p>

<div style="background: rgba(157,78,221,0.06); border: 1px solid rgba(157,78,221,0.2); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
  <p style="margin: 0; color: rgba(255,255,255,0.8);">At OptiFlow, we've designed and deployed WhatsApp agents for businesses in e-commerce, hospitality, and professional services. If you want an agent running on your business number — without weeks of setup — <strong style="color: #9d4edd;">contact us and we'll have a working prototype in front of you within days.</strong></p>
</div>
    `,
  },
  {
    slug: 'meta-ads-roas-guide',
    title: 'The Framework We Use to Achieve 3x+ ROAS on Meta Ads',
    excerpt: "Creative strategy, audience layering, and pixel setup that we've proven across 15+ e-commerce brands in the last 12 months.",
    category: 'Meta Ads',
    date: 'March 2025',
    readTime: '12 min read',
    image: '/images/blog/Framework.webp',
    content: `
<p>Achieving a 3x return on ad spend on Meta isn't magic — it's a repeatable framework built on three pillars: creative, audience, and measurement. Miss any one of them and your budget evaporates.</p>

<h2>Pillar 1: Creative That Stops the Scroll</h2>
<p>The first 3 seconds of your video ad determines whether anyone watches the rest. We build "pattern interrupt" creatives — unexpected visual hooks that force attention before the viewer can swipe past. Counterintuitively, static images that look like organic posts consistently outperform polished brand content in cold audiences. Authenticity converts; production value alone doesn't.</p>

<h2>Pillar 2: Audience Layering</h2>
<p>We never run cold audiences without a warming sequence. Our layered approach starts with broad interest targeting to build a pool of engaged visitors, then constructs lookalike audiences from verified purchasers, and finally retargets warm traffic with social proof — reviews, results, case studies. Each layer has a different creative angle matched to where the buyer is in their decision process.</p>

<h2>Pillar 3: Clean Measurement</h2>
<p>Without accurate attribution, even well-performing ads optimize toward vanity metrics. We implement Meta's Conversion API alongside the browser pixel for server-side event matching — typically recovering 15–30% of conversion events lost to iOS tracking restrictions and browser blocking. Without CAPI, you're under-reporting results and the algorithm is learning from incomplete data.</p>

<h2>Budget Allocation</h2>
<p>We run a 70/20/10 split across all accounts: 70% on proven, stable ad sets; 20% on testing new creatives and angles; 10% on experimental audiences and formats. This structure keeps performance predictable while continuously feeding the algorithm fresh signals to optimize against.</p>

<div style="background: rgba(255,0,110,0.06); border: 1px solid rgba(255,0,110,0.2); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
  <p style="margin: 0; color: rgba(255,255,255,0.8);">We manage Meta campaigns end-to-end — strategy, creative, targeting, measurement, and scaling. <strong style="color: #ff006e;">Contact us to discuss what 3x ROAS could mean for your business.</strong></p>
</div>
    `,
  },
  {
    slug: 'nextjs-web-app-architecture',
    title: 'Why Every Business Should Build on Next.js in 2025',
    excerpt: 'Server components, edge rendering, and built-in SEO make Next.js the undisputed choice for conversion-first web apps.',
    category: 'Web Development',
    date: 'February 2025',
    readTime: '6 min read',
    image: '/images/blog/nextjs.png',
    content: `
<p>In 2025, choosing a web framework isn't just a technical decision — it's a business one. The framework determines how fast your site loads, how well it ranks on Google, and how quickly your team can ship new features. For most businesses building revenue-generating websites, Next.js 14 is the clear choice.</p>

<h2>Server Components: Faster by Default</h2>
<p>Next.js 14's React Server Components eliminate JavaScript from the client for any content that doesn't require interactivity. Pages load faster, Core Web Vitals improve, and search engines receive real content instead of a loading spinner. For e-commerce, a 100ms improvement in load time measurably improves conversion rates. For content sites, it directly affects organic ranking.</p>

<h2>SEO Without Configuration</h2>
<p>Metadata API, OpenGraph support, structured data, sitemap generation, and robots.txt are all built in — no plugins, no third-party packages, no configuration files. Every page is server-rendered by default, which means search crawlers see real content on every visit. This architecture is how we consistently achieve strong organic performance for client sites from day one.</p>

<h2>Global Edge Performance</h2>
<p>Deployed on Vercel's edge network, every API route and dynamic page runs in 30+ regions worldwide. A user in Dhaka gets the same sub-100ms response as a user in New York. For businesses operating across multiple markets, this is not a nice-to-have — it's a competitive requirement.</p>

<h2>The Business Case</h2>
<p>Every website we've rebuilt in Next.js has produced measurable outcomes: faster load times, higher search rankings, and improved conversion rates. The framework's architecture enforces good practices — semantic HTML, optimized images, structured data — that compound in value over time.</p>

<div style="background: rgba(157,78,221,0.06); border: 1px solid rgba(157,78,221,0.2); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
  <p style="margin: 0; color: rgba(255,255,255,0.8);">All OptiFlow websites are built on Next.js 14. If you're ready to move your business to a framework that performs, <strong style="color: #9d4edd;">let's talk about your project.</strong></p>
</div>
    `,
  },
  {
    slug: 'custom-llm-chatbot',
    title: 'Building a Custom GPT-4 Support Bot Trained on Your Docs',
    excerpt: 'Step-by-step guide to building a RAG-based AI chatbot using OpenAI embeddings and a vector database.',
    category: 'AI',
    date: 'January 2025',
    readTime: '15 min read',
    image: '/images/blog/personal-branding-thumbnail.jpg',
    content: `
<p>Generic AI chatbots give generic answers. They're trained on the internet — not on your product documentation, your pricing, your policies, or your edge cases. The result: a bot that confidently answers questions about competitors' products while getting yours wrong.</p>

<p>The solution is a Retrieval-Augmented Generation (RAG) system — an AI that retrieves answers specifically from your knowledge base before generating a response. Here's how it's built.</p>

<h2>Step 1: Document Preparation and Embedding</h2>
<p>We take your source materials — product documentation, FAQs, SOPs, pricing guides, support transcripts — and process them into a format the AI can retrieve from semantically. Each document is chunked into overlapping segments of 300–500 tokens. OpenAI's embedding model converts each chunk into a high-dimensional vector that represents its meaning mathematically.</p>

<p>These vectors are stored in a vector database — Pinecone, Supabase pgvector, or Weaviate — indexed for fast similarity search.</p>

<h2>Step 2: Semantic Retrieval at Query Time</h2>
<p>When a user asks a question, that question is also converted to an embedding vector. The system retrieves the top 3–5 document chunks whose vectors are most similar — by meaning, not keyword. This means "how do I cancel my subscription?" retrieves your cancellation policy even if that document uses the word "terminate" rather than "cancel."</p>

<p>The retrieved chunks become the context window for the AI's response.</p>

<h2>Step 3: Grounded Response Generation</h2>
<p>We inject the retrieved document chunks into a GPT-4 prompt with explicit instructions: answer only from the provided context, cite which section you're referencing, and escalate to a human if the answer isn't in the documents. The result is an AI that stays on-topic, never fabricates product features, and knows when it doesn't know.</p>

<h2>Production Architecture</h2>
<p>A complete production deployment includes conversation memory across sessions, escalation triggers that route complex queries to human agents with full chat history, analytics dashboards showing what users ask most, and a feedback loop for improving the knowledge base over time. This is what separates a demo from a system that actually deflects support tickets at scale.</p>

<div style="background: rgba(0,255,136,0.06); border: 1px solid rgba(0,255,136,0.2); border-radius: 12px; padding: 1.5rem; margin-top: 2rem;">
  <p style="margin: 0; color: rgba(255,255,255,0.8);">We build and deploy custom AI assistants trained on your specific business knowledge. If you want an AI that actually understands your product, <strong style="color: #00ff88;">contact us and we'll show you what's possible.</strong></p>
</div>
    `,
  },
];

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative w-full pt-89 pb-16 border-b border-white/10 text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="flex gap-3 justify-center mb-6">
            <Badge color="default">{post.category}</Badge>
            <span className="text-white/40 text-sm">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-heading mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-white/60 mb-10">{post.excerpt}</p>
          {/* Hero image */}
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-black/50">
        <article
          className="max-w-[800px] mx-auto prose prose-invert prose-lg prose-headings:font-heading prose-headings:font-black prose-p:text-white/70 prose-p:leading-relaxed prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-ul:text-white/70 prose-ol:text-white/70 prose-li:my-1 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="max-w-[800px] mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row gap-21 items-center justify-between">
          <div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-1">Ready to Apply This?</p>
            <h3 className="text-2xl font-black font-heading">Start Your Project with OptiFlow</h3>
          </div>
          <div className="flex gap-4">
            <Button href="/blog" variant="ghost">← More Articles</Button>
            <Button href="/get-started" variant="primary">Get Started →</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
