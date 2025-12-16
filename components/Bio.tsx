import React from 'react';
import { Button } from './Button';

export const Bio: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-zinc-950 border-t border-neutral-900 px-4">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 md:w-80 rounded-2xl overflow-hidden border-2 border-neon shadow-[0_0_40px_rgba(163,230,53,0.2)] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://i.ibb.co/q3Tfd1tq/Imagem-do-Whats-App-de-2025-12-10-s-15-54-52-f487cd85.jpg" 
                    alt="Quem sou eu" 
                    className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="text-neon font-bold font-display tracking-widest bg-black/80 px-3 py-1 rounded text-sm">AUTOR DO MÉTODO</span>
                </div>
            </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6 uppercase leading-none">
                Quem <span className="text-neon block mt-1">Sou Eu?</span>
            </h2>
            <div className="w-20 h-1 bg-neon mx-auto md:mx-0 mb-8 rounded-full"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Apenas um cara normal que simplificou esse negocio de facebook ads e faço dinheiro de forma ridiculamente simples com o low ticket.
                <br/><br/>
                <span className="text-white font-medium">Vem junto que vai destravar pra voce também!</span>
            </p>
            
            <Button onClick={scrollToPricing} className="w-full md:w-auto px-8">
                QUERO DESTRAVAR NO LOW TICKET
            </Button>
        </div>

      </div>
    </section>
  );
};