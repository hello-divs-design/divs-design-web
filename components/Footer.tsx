import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Code2, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (hash: string, e: React.MouseEvent) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate(`/${hash}`);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-brand-900/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand column */}
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-4 hover:opacity-80 transition-opacity">
                <div className="p-2 bg-brand-600 rounded-lg text-white">
                  <Code2 size={20} />
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  divs.design
                </span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                Design & engineering for creators, startups, and brands who want to build something that matters.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                <a 
                  href="https://x.com/jaypetersdotdev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/50 transition-all"
                >
                  <Twitter size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/petersjt/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/50 transition-all"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="https://www.youtube.com/@jaypetersdotdev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/50 transition-all"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
            
            {/* Navigation columns */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Navigate</h4>
              <ul className="space-y-3">
                <li>
                  {isHomePage ? (
                    <a href="#portfolio" className="text-slate-500 hover:text-white text-sm transition-colors">Work</a>
                  ) : (
                    <a href="/#portfolio" onClick={(e) => handleNavClick('#portfolio', e)} className="text-slate-500 hover:text-white text-sm transition-colors">Work</a>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <a href="#offers" className="text-slate-500 hover:text-white text-sm transition-colors">Offers</a>
                  ) : (
                    <a href="/#offers" onClick={(e) => handleNavClick('#offers', e)} className="text-slate-500 hover:text-white text-sm transition-colors">Offers</a>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <a href="#about" className="text-slate-500 hover:text-white text-sm transition-colors">About</a>
                  ) : (
                    <a href="/#about" onClick={(e) => handleNavClick('#about', e)} className="text-slate-500 hover:text-white text-sm transition-colors">About</a>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <a href="#contact" className="text-slate-500 hover:text-white text-sm transition-colors">Contact</a>
                  ) : (
                    <a href="/#contact" onClick={(e) => handleNavClick('#contact', e)} className="text-slate-500 hover:text-white text-sm transition-colors">Contact</a>
                  )}
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  {isHomePage ? (
                    <a href="#offers" className="text-slate-500 hover:text-white text-sm transition-colors">Business Sites</a>
                  ) : (
                    <a href="/#offers" onClick={(e) => handleNavClick('#offers', e)} className="text-slate-500 hover:text-white text-sm transition-colors">Business Sites</a>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <a href="#offers" className="text-slate-500 hover:text-white text-sm transition-colors">Creator Apps</a>
                  ) : (
                    <a href="/#offers" onClick={(e) => handleNavClick('#offers', e)} className="text-slate-500 hover:text-white text-sm transition-colors">Creator Apps</a>
                  )}
                </li>
                <li>
                  {isHomePage ? (
                    <a href="#offers" className="text-slate-500 hover:text-white text-sm transition-colors">Enterprise</a>
                  ) : (
                    <a href="/#offers" onClick={(e) => handleNavClick('#offers', e)} className="text-slate-500 hover:text-white text-sm transition-colors">Enterprise</a>
                  )}
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Start a Project</h4>
              <p className="text-slate-500 text-sm mb-4">Ready to build something?</p>
              {isHomePage ? (
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors group"
                >
                  Book a strategy call
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <a 
                  href="/#contact"
                  onClick={(e) => handleNavClick('#contact', e)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors group"
                >
                  Book a strategy call
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} divs.design. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;