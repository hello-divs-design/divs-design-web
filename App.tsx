import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const HomePage: React.FC<{
  includeMobileUpgrade: boolean;
  setIncludeMobileUpgrade: (value: boolean) => void;
  includeSeoPackage: boolean;
  setIncludeSeoPackage: (value: boolean) => void;
  selectedPackage: string | null;
  setSelectedPackage: (value: string | null) => void;
}> = ({
  includeMobileUpgrade,
  setIncludeMobileUpgrade,
  includeSeoPackage,
  setIncludeSeoPackage,
  selectedPackage,
  setSelectedPackage,
}) => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the #
      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Offers 
          includeMobileUpgrade={includeMobileUpgrade}
          setIncludeMobileUpgrade={setIncludeMobileUpgrade}
          includeSeoPackage={includeSeoPackage}
          setIncludeSeoPackage={setIncludeSeoPackage}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
        />
        <About />
        <Contact 
          includeMobileUpgrade={includeMobileUpgrade}
          includeSeoPackage={includeSeoPackage}
          selectedPackage={selectedPackage}
        />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [includeMobileUpgrade, setIncludeMobileUpgrade] = React.useState(false);
  const [includeSeoPackage, setIncludeSeoPackage] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500 selection:text-white">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage
                includeMobileUpgrade={includeMobileUpgrade}
                setIncludeMobileUpgrade={setIncludeMobileUpgrade}
                includeSeoPackage={includeSeoPackage}
                setIncludeSeoPackage={setIncludeSeoPackage}
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
              />
            } 
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;