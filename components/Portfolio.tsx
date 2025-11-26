import React from 'react';
import { ExternalLink, Smartphone, Globe, Apple, PlayCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Import images as modules so Vite processes them correctly
import waveExample1 from '../assets/wave-example-1.png';
import waveExample3 from '../assets/wave-example-3.png';
import waveExample4 from '../assets/wave-example-4.png';
import sacnpaExample from '../assets/sacnpa-example.png';
import northyardExample from '../assets/northyard-example.png';
import lisapetersbooks from '../assets/lisapetersbooks.png';

// Featured mobile app - hero case study
const featuredApp = {
  title: 'The Wave Nightlife',
  subtitle: 'Full-Stack Mobile App',
  description: 'A complete nightlife discovery platform built for iOS and Android. Real-time venue maps, reservations, social integration, and push notifications—all powered by a custom backend.',
  role: 'Lead Engineer & Architect',
  stack: ['React Native', 'Supabase', 'AWS', 'App Runner', 'Expo'],
  highlights: [
    'Cross-platform iOS & Android launch',
    'Real-time maps & geolocation',
    'Integrated booking system',
    'Social features & push notifications'
  ],
  // Staggered screenshots for collage effect
  screens: {
    main: waveExample1, // Explore/discover screen
    secondary: waveExample3, // Booking/reservation
    tertiary: waveExample4 // Profile/feed
  },
  link: 'https://www.thewavenightlife.com/',
  appStore: 'https://apps.apple.com/us/app/the-wave-nightlife/id6746767592',
  playStore: 'https://play.google.com/store/apps/details?id=com.thewavenightlife.wave'
};

// Website projects
const websites = [
  {
    title: 'SacNPA',
    type: 'Association',
    description: 'Services, team members, reviews, and blog for Sacramento NeuroPsych Associates.',
    stack: 'Webflow · CMS · SEO',
    imageUrl: sacnpaExample,
    link: 'https://www.sacnpa.com/'
  },
  {
    title: 'The North Yard LLC',
    type: 'Corporate',
    description: 'Clean, conversion-focused site for construction & logistics.',
    stack: 'Webflow · CMS · Analytics',
    imageUrl: northyardExample,
    link: 'https://www.thenorthyardllc.com/'
  },
  {
    title: 'Lisa Peters Books',
    type: 'Author Portfolio',
    description: 'Children\'s author hub with book collections and e-commerce.',
    stack: 'Webflow · E-commerce · CMS',
    imageUrl: lisapetersbooks,
    link: 'https://www.lisapetersbooks.com/'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Apps & Websites I've Built
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From full-stack mobile apps to conversion-focused websites—real products for real clients.
          </p>
        </div>

        {/* Featured App - Hero Case Study */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20">
              <Smartphone className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-400">Featured Project</h3>
              <p className="text-slate-500 text-xs">Custom Mobile Application</p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80">
            {/* Glow effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-r from-brand-500/20 via-transparent to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            
            <div className="relative flex flex-col lg:flex-row">
              {/* Image Side - Staggered Phone Mockup Collage */}
              <div className="lg:w-1/2 relative min-h-[480px] lg:min-h-[580px]">
                {/* Gradient overlay for blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-900 z-20 pointer-events-none" />
                
                {/* Staggered Screenshots Container */}
                <div className="absolute inset-0 flex items-center justify-center lg:justify-center p-6 lg:p-8">
                  <div className="relative w-full max-w-[400px] lg:max-w-[480px] h-[440px] lg:h-[520px]">
                    
                    {/* Tertiary Screen - Back left, smallest */}
                    <div className="absolute left-0 top-6 w-[140px] lg:w-[170px] h-[280px] lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-1 z-0">
                      <img
                        src={featuredApp.screens.tertiary}
                        alt="Profile screen"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-900/20" />
                    </div>

                    {/* Secondary Screen - Back right */}
                    <div className="absolute right-0 top-2 w-[150px] lg:w-[180px] h-[300px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 z-10">
                      <img
                        src={featuredApp.screens.secondary}
                        alt="Booking screen"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-900/10" />
                    </div>

                    {/* Main Screen - Front center, largest */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[180px] lg:w-[220px] h-[360px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/20 border-2 border-slate-600/50 transition-transform duration-500 group-hover:scale-105 z-20">
                      {/* Phone frame effect */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-7 bg-slate-900 rounded-b-xl z-10" />
                      <img
                        src={featuredApp.screens.main}
                        alt="Explore screen"
                        className="w-full h-full object-cover"
                      />
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                    </div>

                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-2">{featuredApp.role}</p>
                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{featuredApp.title}</h4>
                    <p className="text-brand-400 font-semibold text-sm">{featuredApp.subtitle}</p>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {featuredApp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid grid-cols-2 gap-3">
                    {featuredApp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-brand-400 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {featuredApp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800/60 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={featuredApp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25"
                    >
                      View Project <ArrowUpRight size={16} />
                    </a>
                    <div className="flex items-center gap-3">
                      <a
                        href={featuredApp.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        <Apple size={16} /> App Store
                      </a>
                      <span className="text-slate-700">|</span>
                      <a
                        href={featuredApp.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        <PlayCircle size={16} /> Play Store
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16 pt-12 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm mb-4">Want something like this?</p>
          <a
            href="#offers"
            className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors"
          >
            See Pricing & Packages <ArrowDownRight size={16} />
          </a>
        </div>

        {/* Websites Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700">
              <Globe className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Selected Websites</h3>
              <p className="text-slate-500 text-xs">Design & Development</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {websites.map((site) => (
              <a
                key={site.title}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-900/30">
                  <img
                    src={site.imageUrl}
                    alt={site.title}
                    className="w-full h-full object-contain object-left-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient only on the image */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative bg-slate-900/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{site.type}</span>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-brand-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                    {site.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{site.description}</p>
                  <p className="text-slate-600 text-xs font-medium">{site.stack}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;