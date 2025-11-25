import React from 'react';
import { Check, Zap, Server, Layout } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Business Website',
    price: '$3,000',
    subPrice: '+ $300/mo maintenance',
    description: 'Beautiful, fast, SEO-ready sites for small businesses, local brands, and professional services.',
    features: [
      'Custom Design & Development',
      'Mobile Responsive Optimization',
      'Basic SEO Setup',
      'Content Management System',
      'Hosting & Security Updates',
      'Optional: $500/mo Advanced SEO'
    ],
    cta: 'Get Started',
    highlightColor: 'slate'
  },
  {
    name: 'Creator Launch-Kit',
    price: '$15,000',
    subPrice: 'or $5,000/mo for 3 months',
    description: 'Launch your creator app fast with a web-first MVP built for monetization. Mobile App + Advanced AI available as a single optional upgrade.',
    features: [
      'Custom Web App (mobile-responsive)',
      'Architecture, Design & Development',
      'Subscriptions, Payments & Billing',
      'Basic Automation & Analytics',
      'Admin Dashboard & Launch Support',
      'Optional Upgrade: Mobile App + Advanced AI Integrations'
    ],
    cta: 'Start Launch-Kit',
    popular: true,
    highlightColor: 'brand'
  },
  {
    name: 'Enterprise Custom',
    price: '$50,000+',
    subPrice: 'or $12,000/mo retainer',
    description: 'Full web + mobile platforms and serious backend systems for teams and creator brands that need scale, microservices, and deep integrations. Most full builds start at $50k+.',
    features: [
      'Full Web + Mobile Platforms',
      'Custom Architecture & Technical Roadmap',
      'Salesforce / CRM & Third-Party Integrations',
      'Legacy System Modernization',
      'Microservices Strategy & Implementation',
      'Dedicated Engineering Lead & SLA Support'
    ],
    cta: 'Contact for Scope',
    highlightColor: 'indigo'
  }
];

interface OffersProps {
  includeMobileUpgrade: boolean;
  setIncludeMobileUpgrade: (value: boolean) => void;
  includeSeoPackage: boolean;
  setIncludeSeoPackage: (value: boolean) => void;
}

const Offers: React.FC<OffersProps> = ({
  includeMobileUpgrade,
  setIncludeMobileUpgrade,
  includeSeoPackage,
  setIncludeSeoPackage,
}) => {

  return (
    <section id="offers" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Design & Engineering Packages
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Clear pricing for apps, websites, and custom systems. Start simple or go full enterprise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-start">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 w-full lg:max-w-[380px] lg:flex-[0_0_calc(33.333%-1.33rem)] ${
                tier.popular 
                  ? 'bg-slate-900/80 border-2 border-brand-500 shadow-2xl shadow-brand-900/30 transform lg:-translate-y-4' 
                  : 'bg-slate-950/50 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                    tier.highlightColor === 'brand' ? 'bg-brand-500/20 text-brand-400' : 
                    tier.highlightColor === 'indigo' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-700/20 text-slate-400'
                }`}>
                    {tier.name.includes('Creator') ? <Zap /> : tier.name.includes('Enterprise') ? <Server /> : <Layout />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className={`text-slate-400 text-sm min-h-[40px] ${tier.name === 'Creator Launch-Kit' ? 'pb-4' : ''}`}>{tier.description}</p>

                {tier.name === 'Creator Launch-Kit' ? (
                  <div className="flex items-center justify-between mt-4 pb-2 h-[32px]">
                    <span className="text-xs text-slate-400">
                      Include Mobile App + Advanced AI Upgrade (+$10,000)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIncludeMobileUpgrade(!includeMobileUpgrade)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        includeMobileUpgrade ? 'bg-brand-500' : 'bg-slate-600'
                      }`}
                      aria-pressed={includeMobileUpgrade}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                          includeMobileUpgrade ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ) : null}

                {tier.name === 'Business Website' && (
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-slate-400">
                      Include Advanced SEO Package (+$500/mo)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIncludeSeoPackage(!includeSeoPackage)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        includeSeoPackage ? 'bg-brand-500' : 'bg-slate-600'
                      }`}
                      aria-pressed={includeSeoPackage}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                          includeSeoPackage ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">
                    {tier.name === 'Creator Launch-Kit' && includeMobileUpgrade ? '$25,000' : tier.price}
                  </span>
                  {tier.popular && <span className="text-sm font-semibold text-slate-500"></span>}
                </div>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  {tier.name === 'Business Website' && includeSeoPackage
                    ? '+ $300/mo maintenance + $500/mo Advanced SEO'
                    : tier.name === 'Creator Launch-Kit' && includeMobileUpgrade
                    ? 'or $8,000/mo for 3 months'
                    : tier.subPrice}
                </p>
                {tier.name === 'Creator Launch-Kit' ? (
                  <div className="min-h-[36px] mt-1">
                    {includeMobileUpgrade && (
                      <p className="text-xs text-slate-400">
                        Includes +$10,000 Mobile App + Advanced AI Upgrade (iOS & Android).
                      </p>
                    )}
                  </div>
                ) : null}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={16} className={`mt-0.5 shrink-0 ${
                        tier.highlightColor === 'brand' ? 'text-brand-400' : 'text-slate-500'
                    }`} />
                    {tier.name === 'Business Website' &&
                     includeSeoPackage &&
                     feature === 'Optional: $500/mo Advanced SEO'
                      ? 'Includes: $500/mo Advanced SEO Package'
                      : feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full py-4 rounded-lg font-bold text-center transition-all ${
                  tier.popular 
                    ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;