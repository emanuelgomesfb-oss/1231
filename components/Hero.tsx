import React, { useEffect } from 'react';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  
  useEffect(() => {
    // Load VTurb Script dynamically
    const scriptId = 'vturb-player-script';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/34e25474-bcec-4001-95d5-6f23d3c89cc2/players/69407b35bc119d9ec6d8607e/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if ID is not found (though it should be in Pricing component)
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-10 pb-20 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-800 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
        
        {/* Logo */}
        <img 
          src="https://i.ibb.co/FLX35X30/mapa-logo-png.png" 
          alt="Mapa do Low Ticket Logo" 
          className="w-40 md:w-44 mb-8 drop-shadow-[0_0_15px_rgba(163,230,53,0.3)] opacity-90"
        />

        {/* Badge */}
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 mb-6 animate-fade-in-down">
          <span className="text-neon font-bold tracking-widest text-sm md:text-base uppercase">Desafio R$10K/Mês</span>
        </div>

        {/* Head */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          MAPA DO <span className="text-neon neon-text-shadow">LOW TICKET</span>
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-gray-200 font-medium mb-4 max-w-2xl mx-auto">
          Faça <span className="text-neon font-bold bg-white/10 px-1 rounded">R$333 de LUCRO</span> todo santo dia com produtos low ticket
        </p>

        {/* Complemento */}
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          <span className="border-b-2 border-neon text-white pb-0.5">São apenas 22 vendas de R$29,90.</span> <br className="hidden md:block"/>
          <span className="italic text-gray-500 mt-2 block md:inline md:mt-0">(você acha que consegue fazer isso? Eu tenho certeza!)</span>
        </p>

        {/* Video VSL - VTurb */}
        <div className="w-full max-w-3xl mx-auto mb-10 shadow-[0_0_40px_rgba(163,230,53,0.15)] rounded-2xl overflow-hidden border border-dark-border bg-black relative z-20">
          {/* @ts-ignore */}
          <vturb-smartplayer 
            id="vid-69407b35bc119d9ec6d8607e" 
            style={{ display: 'block', margin: '0 auto', width: '100%' }}
          ></vturb-smartplayer>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Button onClick={scrollToPricing} className="w-full md:w-auto min-w-[300px] text-xl">
            QUERO ACESSAR O MAPA 🗺️
          </Button>
          <div className="flex items-center gap-2 text-sm text-gray-500 animate-bounce mt-4">
            <ArrowDown size={16} />
            <span>Veja o que está incluso</span>
            <ArrowDown size={16} />
          </div>
        </div>

      </div>
    </section>
  );
};