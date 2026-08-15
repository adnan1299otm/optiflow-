import { SectionWrapper } from '@/components/ui/SectionWrapper';


export const metadata = {
  title: 'Terms of Service | OptiFlow',
  description: 'OptiFlow Terms of Service and legal agreements.',
};

export default function TermsPage() {
  return (
    <>
      <section className="relative w-full pt-89 pb-89 border-b border-white/10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black font-heading mb-4 tracking-tight">
          Terms of <span className="text-[#00d4ff]">Service</span>
        </h1>
        <p className="text-white/50 text-sm tracking-widest uppercase">Last Updated: April 2026</p>
      </section>

      <SectionWrapper className="bg-[#050814]">
        <div className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading prose-headings:font-bold prose-p:text-white/70 prose-a:text-[#00d4ff] prose-a:no-underline hover:prose-a:underline">
          <p>
            Welcome to OptiFlow. By accessing our website (optiflow.io) and utilizing our services, you agree to be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">1. Acceptance of Terms</h2>
          <p>
            By engaging with OptiFlow (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) for any web development, mobile app development, data scraping, AI solutions, or Meta Ads management services, you (&quot;the Client&quot;) acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">2. Scope of Services</h2>
          <p>
            OptiFlow provides digital agency services as explicitly detailed in individual Master Service Agreements (MSAs) or Statements of Work (SOWs). Any additional features, scope creep, or revisions outside the initial SOW will be billed at our standard hourly rates or as a separate fixed-cost milestone.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">3. Payment Terms</h2>
          <p>
            Standard payment structures require a 50% non-refundable deposit to commence work, with the remaining 50% due upon project completion and prior to final asset handover or deployment. Retainer services are billed upfront on the 1st of every month. Late payments exceeding 15 days will incur a 5% penalty fee per month.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">4. Intellectual Property Rights</h2>
          <p>
            Upon receipt of full and final payment, the Client assumes full ownership and intellectual property rights to the final deliverables, including source code, design assets, and production builds. OptiFlow retains the right to utilize anonymized code snippets, general frameworks, and non-confidential visuals within our portfolio and marketing materials unless a strict NDA is signed.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">5. Client Responsibilities</h2>
          <p>
            The Client agrees to provide timely feedback, necessary credentials, and specific API keys or assets required for project progression. Delays in Client communication extending past 7 business days may result in paused development and a rescheduling fee.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">6. Warranties and Bugs</h2>
          <p>
            OptiFlow guarantees that all deliverables will function exactly as described in the SOW upon deployment. We provide a complimentary 30-day bug-fix period post-launch for intrinsic software defects. We do not warranty against bugs caused by third-party API deprecations, malicious activities, or self-inflicted code alterations post-handover.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">7. Limitation of Liability</h2>
          <p>
            In no event shall OptiFlow be liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of revenue, profits, data, or business interruption, arising out of the use or inability to use our services or products.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">8. Termination</h2>
          <p>
            Either party may terminate the agreement with 14 days written notice. In the event of early Client termination, OptiFlow retains the right to command payment for all hours worked and milestones achieved up to the termination date. The initial deposit remains non-refundable.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">9. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the 
            People&apos;s Republic of Bangladesh. OptiFlow is operated and headquartered in 
            Sylhet, Bangladesh. Any disputes arising under or in connection with these Terms 
            shall be subject to the exclusive jurisdiction of the competent courts located in 
            Sylhet, Bangladesh, unless both parties mutually agree in writing to an alternative 
            dispute resolution mechanism.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">10. Modifications</h2>
          <p>
            OptiFlow reserves the right to modify or replace these Terms at any time. Significant changes will be explicitly communicated to active clients. Continued use of our services constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-white">11. Company Information</h2>
          <p>
            OptiFlow is a digital agency providing web development, mobile app development, 
            AI automation, data scraping, and Meta Ads management services. We are based in 
            Sylhet, Bangladesh and serve clients globally.
          </p>
          <ul>
            <li><strong>Business Name:</strong> OptiFlow</li>
            <li><strong>Location:</strong> Sylhet, Bangladesh</li>
            <li><strong>Contact Email:</strong> optiflowofficialteam@gmail.com</li>
            <li><strong>Founders:</strong> Arafath Al Adnan (Lead Developer) &amp; Imran Rony (Growth Strategist)</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-white">12. Contact Information</h2>
          <p>
            For any questions, concerns, or legal notices regarding these Terms of Service, 
            please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> optiflowofficialteam@gmail.com</li>
            <li><strong>Location:</strong> Sylhet, Bangladesh</li>
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
