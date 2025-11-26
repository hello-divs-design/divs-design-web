import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Header />
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Gradients - matching other sections */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                By accessing or using any divs.design service—including consultations, proposals, development work, or this website—you agree to be bound by these Terms of Service. If you do not agree, you may not use or access the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                divs.design offers design and engineering services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Custom mobile application development</li>
                <li>SaaS and web application development</li>
                <li>Business website design and development</li>
                <li>UI/UX implementation</li>
                <li>Technical consulting and product advisory</li>
                <li>Code architecture and integration support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Payment schedules, deposits, and milestones are defined in each project agreement. Generally:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>A non-refundable deposit is required before work begins</li>
                <li>Payments more than 7 days late may result in a work pause</li>
                <li>Third-party expenses (hosting, API usage, developer accounts, etc.) are the client’s responsibility</li>
                <li>Completed phases are non-refundable once delivered</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Upon full payment, clients receive ownership of the unique deliverables created specifically for their project. divs.design retains ownership of all pre‑existing libraries, reusable components, internal tools, and methodologies used during development.
              </p>
              <p className="text-slate-400 leading-relaxed">
                divs.design may display completed work in portfolios and case studies unless the client requests otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Project Scope and Changes</h2>
              <p className="text-slate-400 leading-relaxed">
                Project scope is defined in writing. Any requested change may impact pricing and timeline and must be approved before implementation. divs.design is not required to begin out‑of‑scope work without a revised agreement. Delays in client feedback may extend timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Warranties and Disclaimers</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                All services are provided “as is.” divs.design does not guarantee specific business outcomes, uninterrupted service, or compatibility with all third‑party systems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Bug fixes are limited to issues caused directly by divs.design. Problems arising from third‑party services or client modifications may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-400 leading-relaxed">
                To the fullest extent permitted by law, divs.design is not liable for indirect, incidental, special, consequential, or punitive damages. Liability is limited to the total amount paid by the client for the services rendered. divs.design is not responsible for delays caused by third‑party systems or client‑side issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
              <p className="text-slate-400 leading-relaxed">
                Either party may terminate a project in writing. Clients are responsible for payment of all work completed up to the termination date. Completed work is non‑refundable. divs.design may suspend or terminate services for non‑payment or breach of these terms. Deliverables are transferred only after all outstanding balances are paid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Confidentiality</h2>
              <p className="text-slate-400 leading-relaxed">
                Both parties agree to keep proprietary information confidential, including technical details, business plans, credentials, and sensitive materials. This obligation survives completion of the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                divs.design may update these Terms at any time. Clients with active projects will be notified of material changes before they take effect. Continued use of services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
              <p className="text-slate-400 leading-relaxed">
                For questions regarding these Terms of Service, contact{" "}
                <a href="mailto:hello@divs.design" className="text-brand-400 hover:text-brand-300 underline-offset-2 hover:underline">
                  hello@divs.design
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
