import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Privacy: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-slate-400 leading-relaxed">
                divs.design ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we
                collect, use, and safeguard information when you visit our website, book a strategy call, or work with us on
                custom development projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We may collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Fill out a contact form or send us an email</li>
                <li>Book a strategy call through Calendly or similar scheduling tools</li>
                <li>Share details about your business or project requirements</li>
                <li>Enter into a project agreement or request a proposal</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-4">
                The information you provide may include your name, email address, business details, project goals, and any other
                information you choose to share. We may also collect limited technical information when you visit our website, such
                as IP address, browser type, and general usage data, typically through cookies or similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Schedule and conduct strategy calls and consultations</li>
                <li>Prepare proposals, scopes of work, and project agreements</li>
                <li>Provide, maintain, and improve our services and deliverables</li>
                <li>Respond to inquiries and provide client support</li>
                <li>Send operational communications such as updates or important notices</li>
                <li>Monitor basic website usage to understand interest in our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We do not sell or rent your personal information. We only share information in the following situations:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>With your consent or at your direction</li>
                <li>With trusted service providers who help us operate our business (such as scheduling, email, or hosting tools)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, property, or safety, or that of our clients</li>
                <li>In connection with a business transfer, merger, or reorganization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-slate-400 leading-relaxed">
                We implement reasonable technical and organizational measures to help protect your personal information. However, no
                method of transmission over the Internet or method of electronic storage is completely secure. While we strive to
                protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-slate-400 leading-relaxed">
                We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this
                Privacy Policy, including providing services, maintaining records, resolving disputes, and meeting legal obligations.
                When information is no longer needed, we will delete it or anonymize it where feasible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Depending on where you live, you may have certain rights with respect to your personal information, such as:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4">
                <li>Accessing the personal information we hold about you</li>
                <li>Requesting correction of inaccurate or incomplete information</li>
                <li>Requesting deletion of your personal information, subject to legal obligations</li>
                <li>Objecting to or restricting certain types of processing</li>
                <li>Requesting a copy of your data in a portable format</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:hello@divs.design"
                  className="text-brand-400 hover:text-brand-300 underline-offset-2 hover:underline"
                >
                  hello@divs.design
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-slate-400 leading-relaxed">
                Our website may use cookies or similar technologies to understand how visitors interact with our content. You can
                usually adjust your browser settings to refuse cookies or to alert you when cookies are being sent. If you disable
                cookies, some parts of the site may not function optimally, but you should still be able to learn about our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
              <p className="text-slate-400 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices 
                of these third parties. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-slate-400 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you become aware that a child has provided us with personal information, please contact us, and 
                we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
              <p className="text-slate-400 leading-relaxed">
                divs.design is based in the United States. If you access our website or work with us from outside the U.S., your
                information may be transferred to, stored in, and processed in the U.S. or other countries. By using our services,
                you consent to this transfer in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-slate-400 leading-relaxed">
                We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at
                the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we
                handle your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="text-slate-400 leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us at{" "}
                <a
                  href="mailto:hello@divs.design"
                  className="text-brand-400 hover:text-brand-300 underline-offset-2 hover:underline"
                >
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

export default Privacy;
