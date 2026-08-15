import { SectionWrapper } from '@/components/ui/SectionWrapper';


export const metadata = {
  title: 'Privacy Policy | OptiFlow',
  description: 'OptiFlow Privacy Policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 border-b border-white/10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black font-heading mb-4 tracking-tight">
          Privacy <span className="text-[#00ff88]">Policy</span>
        </h1>
        <p className="text-white/50 text-sm tracking-widest uppercase">Last Updated: April 2026</p>
      </section>

      <SectionWrapper className="bg-[#050814]">
        <div className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading prose-headings:font-bold prose-p:text-white/70 prose-a:text-[#00d4ff] prose-a:no-underline hover:prose-a:underline">
          <p>
            At OptiFlow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to protecting your privacy and ensuring your personal information is handled with absolute transparency and care. This Privacy Policy details how we collect, use, and safeguard personal data across our website and digital services.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">1. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li><strong>Information you provide directly:</strong> Name, email address, company name, phone numbers, and project specifics submitted via our contact or lead generation forms.</li>
            <li><strong>Information collected automatically:</strong> We utilize Google Analytics 4 (GA4) and native server logs to track non-personally identifiable information such as IP addresses, browser types, session durations, and referral URLs.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-white">2. Use of Your Information</h2>
          <p>The information we collect is explicitly used to:</p>
          <ul>
            <li>Provide, operate, and maintain our digital services.</li>
            <li>Communicate with you regarding project updates, proposals, and support.</li>
            <li>Analyze website usage trends to optimize user experience and layout logic.</li>
            <li>Prevent fraud, enforce our Terms of Service, and comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-white">3. Third-Party Services and API Security</h2>
          <p>
            OptiFlow integrates with enterprise-grade third-party services to deliver automation, 
            analytics, and campaign management. These include — but are not limited to — Google 
            Workspace, Google Analytics, Meta Business Suite (Facebook Ads API), WhatsApp Business 
            API, and OpenAI. We share only the minimum necessary data to facilitate each integration 
            and never sell, rent, or trade client information with data brokers under any circumstance.
          </p>

          <h3 className="text-xl mt-8 mb-3 text-white/90">How We Protect Your API Credentials</h3>
          <p>
            When clients provide sensitive API credentials — such as Facebook Graph API tokens, 
            WhatsApp Business API keys, Google service account files, or platform-specific access 
            tokens — OptiFlow handles them according to the following strict security protocol:
          </p>
          <ul>
            <li>
              <strong>Encrypted storage only:</strong> All credentials are stored exclusively in 
              encrypted environment variable vaults (e.g., Vercel environment variables, or 
              self-hosted secret managers). They are never written to source code, committed to 
              version control, or stored in plain-text configuration files.
            </li>
            <li>
              <strong>Principle of least privilege:</strong> We request only the minimum API 
              permissions required to deliver the agreed service. For example, a Facebook 
              automation integration will request only page-level permissions — never account-level 
              access unless explicitly necessary and consented to in writing.
            </li>
            <li>
              <strong>No third-party exposure:</strong> Client credentials are never shared with 
              sub-contractors, freelancers, or third-party tools beyond those explicitly authorized 
              in the project scope. Each integration is scoped, documented, and auditable.
            </li>
            <li>
              <strong>Credential rotation:</strong> Upon project completion or termination, clients 
              are advised to rotate all shared API keys and revoke OptiFlow&apos;s access tokens 
              as a security best practice. We provide a handover checklist for this process.
            </li>
            <li>
              <strong>TLS/SSL in transit:</strong> All API calls made by OptiFlow-built automations 
              use HTTPS with TLS 1.2 or higher. No credentials or sensitive payloads are transmitted 
              over unencrypted channels.
            </li>
          </ul>
          <p>
            This approach applies to all client API integrations including but not limited to: 
            WhatsApp Business API, Facebook Graph API, Instagram Graph API, Google Sheets API, 
            Stripe API, OpenAI API, and any CRM or database APIs integrated within n8n workflows.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">4. AI Data Processing</h2>
          <p>
            When utilizing our Custom AI Solutions or n8n Automations, client data may be processed via large language model APIs (e.g., OpenAI). We strictly enforce zero-retention policies via API parameters, ensuring public AI models are never trained on your private, proprietary company data.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">5. Cookies and Tracking Technologies</h2>
          <p>
            We use strictly necessary cookies to ensure the website functions correctly, and performance cookies (like Google Analytics) to understand traffic patterns. You can opt-out of analytical cookies by adjusting your browser settings, though this may disable certain interactive features.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">6. Data Security</h2>
          <p>
            Security is paramount. We employ cryptographic hash functions, TLS/SSL encryption for data in transit, and secure Vercel deployments. While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet is 100% immune to breaches.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">7. User Rights (GDPR & CCPA Compliant)</h2>
          <p>
            Depending on your jurisdiction, you retain the right to:
          </p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request instantaneous erasure of your personal data (&quot;Right to be Forgotten&quot;).</li>
            <li>Withdraw consent to our ongoing data processing.</li>
            <li>Opt-out of direct marketing communications.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-white">8. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in legal mandates or service adjustments. We will notify active clients of substantial changes. 
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">9. Contact & Data Controller</h2>
          <p>
            OptiFlow acts as the data controller for personal information collected through this 
            website and our services. If you have any questions about this Privacy Policy, wish to 
            exercise your data rights, or need to report a security concern, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> optiflowofficialteam@gmail.com</li>
            <li><strong>Location:</strong> Sylhet, Bangladesh</li>
            <li><strong>Response Time:</strong> We respond to all privacy inquiries within 5 business days.</li>
          </ul>
          <p>
            We are committed to resolving any complaints or concerns promptly and transparently. 
            If you are located in the European Union, you retain the right to lodge a complaint 
            with your local data protection authority (DPA) if you believe your rights under 
            GDPR have been infringed.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
