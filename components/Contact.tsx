import React, { useMemo } from 'react';
import { Mail, MessageSquare, Send, Code2 } from 'lucide-react';

interface ContactProps {
  includeMobileUpgrade: boolean;
  includeSeoPackage: boolean;
  selectedPackage: string | null;
}

const Contact: React.FC<ContactProps> = ({ includeMobileUpgrade, includeSeoPackage, selectedPackage }) => {
  const selectedCreatorAppLabel = useMemo(
    () =>
      includeMobileUpgrade
        ? 'Creator Launch-Kit + Mobile App + Advanced AI ($25k)'
        : 'Creator Launch-Kit (Web-First) ($15k)',
    [includeMobileUpgrade]
  );

  const selectedWebsiteLabel = useMemo(
    () =>
      includeSeoPackage
        ? 'Business Website + Maintenance + Advanced SEO ($3k + $800/mo)'
        : 'Business Website + Maintenance ($3k + $300/mo)',
    [includeSeoPackage]
  );

  const calendlyUrl = useMemo(() => {
    const base = 'https://calendly.com/divs-design/strategy-call';

    let offer: string;

    // Determine the package based on selected package and upgrades
    if (selectedPackage === 'Creator Launch-Kit') {
      offer = selectedCreatorAppLabel;
    } else if (selectedPackage === 'Business Website') {
      offer = selectedWebsiteLabel;
    } else if (selectedPackage === 'Enterprise Custom') {
      offer = 'Enterprise Custom (Quote)';
    } else if (includeMobileUpgrade || includeSeoPackage) {
      // Fallback: if upgrades are toggled but no package selected, use the upgrade labels
      offer = includeMobileUpgrade ? selectedCreatorAppLabel : selectedWebsiteLabel;
    } else {
      offer = 'General Inquiry';
    }

    const encodedOffer = encodeURIComponent(offer);

    return `${base}?a1=${encodedOffer}`;
  }, [includeMobileUpgrade, includeSeoPackage, selectedCreatorAppLabel, selectedWebsiteLabel, selectedPackage]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradients - matching Offers section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Book a strategy call today to see if we&apos;re a good fit to work together. If I can help, I&apos;ll walk you through how. If not, you&apos;ll still leave with clarity on your next steps.
          </p>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto min-w-[280px] px-8 py-4 rounded-xl font-bold text-center transition-all bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <MessageSquare size={20} />
              Plan My Launch
            </span>
          </a>
          <p className="text-xs text-slate-500 text-center mt-3">
            Recommended if you&apos;re ready to start within 30–60 days.
          </p>
          <p className="text-sm text-slate-500 text-center mt-4 pt-2">
            Have a quick question before booking? Send it to{" "}
            <a
              href="mailto:hello@divs.design"
              className="text-slate-300 hover:text-white underline-offset-2 hover:underline"
            >
              hello@divs.design
            </a>.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">

          {/* Secondary email inquiry - Collapsed/subtle */}
          {/* <div className="relative rounded-2xl p-6 md:p-8 bg-slate-950/30 border border-slate-800/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-800/50 text-slate-500">
                <Mail size={16} />
              </div>
              <h4 className="text-sm font-medium text-slate-400">Prefer email? Send a quick inquiry instead.</h4>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="Name"
                />
                <input 
                  type="email" 
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="Email"
                />
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors">
                  <option>
                    Creator Launch-Kit {includeMobileUpgrade ? '($25k)' : '($15k)'}
                  </option>
                  <option>
                    Business Website {includeSeoPackage ? '($3k + $800/mo)' : '($3k + $300/mo)'}
                  </option>
                  <option>Enterprise Custom</option>
                </select>
              </div>
              <textarea 
                rows={2}
                className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                placeholder="Brief project description (optional)"
              ></textarea>
              <button 
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-medium transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Send
              </button>
            </form>
          </div> */}
        </div>
      </div>
      
      {/* Visual separator before footer */}
      {/* <div className="mt-24 relative">
        <div className="absolute inset-0 flex items-center px-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="p-2.5 bg-brand-600 rounded-xl text-white shadow-lg shadow-brand-500/20">
            <Code2 size={20} />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;