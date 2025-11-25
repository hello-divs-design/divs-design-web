import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [includeMobileUpgrade, setIncludeMobileUpgrade] = React.useState(false);
  const [includeSeoPackage, setIncludeSeoPackage] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Offers 
          includeMobileUpgrade={includeMobileUpgrade}
          setIncludeMobileUpgrade={setIncludeMobileUpgrade}
          includeSeoPackage={includeSeoPackage}
          setIncludeSeoPackage={setIncludeSeoPackage}
        />
        <About />
        <Contact 
          includeMobileUpgrade={includeMobileUpgrade}
          includeSeoPackage={includeSeoPackage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;