import React from 'react';
import { Award, Briefcase, Code } from 'lucide-react';
import profileImage from '../assets/profile-square.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950 border-y border-slate-900">
      {/* Background Gradients - matching other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Engineering for Creators & Founders
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                I’m Jay, a YouTuber and full‑stack engineer helping creators and founders launch real products. 
                After 13 years building enterprise systems at Salesforce and leading engineering teams, I now focus on 
                bringing creator‑economy speed to high‑quality software development.
              </p>
              <p>
                Whether you're building a SaaS, website, or custom mobile app, I bring real engineering discipline, 
                transparent communication, and fast iteration. <strong className="text-brand-400">divs.design</strong> is where I build 
                the tools, platforms, and systems creators and founders need to launch and scale their businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <Code className="text-brand-400 mb-2" size={24} />
                <div className="font-bold text-white text-lg">Full Stack</div>
                <div className="text-xs text-slate-500">SaaS, Automations, APIs</div>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <Briefcase className="text-brand-400 mb-2" size={24} />
                <div className="font-bold text-white text-lg">Enterprise</div>
                <div className="text-xs text-slate-500">Systems, Architecture, Scaling</div>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <Award className="text-brand-400 mb-2" size={24} />
                <div className="font-bold text-white text-lg">Native</div>
                <div className="text-xs text-slate-500">Mobile Apps, Creators</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-slate-800 relative z-10 bg-slate-900">
                 <img 
                    src={profileImage} 
                    alt="Jay - Founder" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                 />
                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
                    <p className="text-white font-bold">Jay</p>
                    <p className="text-brand-400 text-sm">Founder & Lead Engineer</p>
                 </div>
            </div>
            {/* Decorative background box */}
            <div className="absolute top-8 left-8 w-full h-full border-2 border-brand-500/20 rounded-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;