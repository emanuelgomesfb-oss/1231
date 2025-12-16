import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero.tsx';
import { Audience } from './components/Audience.tsx';
import { Features } from './components/Features.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { Bonuses } from './components/Bonuses.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Bio } from './components/Bio.tsx';
import { Footer } from './components/Footer.tsx';
import { FAQ } from './components/FAQ.tsx';

function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than 40% of the page height
      const scrollThreshold = document.documentElement.scrollHeight * 0.4;
      if (window.scrollY > scrollThreshold) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-black min-h-screen text-white selection:bg-neon selection:text-black font-sans">
      <Hero />
      <Audience />
      <Features />
      <SocialProof />
      <Bonuses />
      <Pricing />
      <Bio />
      <FAQ />
      <Footer />
      
      {/* Sticky Mobile/Desktop CTA */}
      <div 
        className={`
          fixed bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-lg border-t border-white/10 z-50 transition-transform duration-500 ease-in-out
          ${showSticky ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="container mx-auto max-w-3xl">
          <button 
            onClick={scrollToPricing}
            className="w-full bg-neon hover:bg-neon-glow text-black font-black uppercase text-lg md:text-xl py-4 rounded-lg shadow-[0_0_20px_rgba(163,230,53,0.4)] animate-pulse"
          >
            QUERO LUCRAR R$333/DIA AGORA
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;