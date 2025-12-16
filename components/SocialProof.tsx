import React from 'react';

const proofs = [
  "https://i.ibb.co/zWwLTs5Q/IMG-20251210-WA0038.jpg",
  "https://i.ibb.co/Q7PLJjs0/IMG-20251210-WA0040.jpg",
  "https://i.ibb.co/CsJgV56M/IMG-20251210-WA0036.jpg",
  "https://i.ibb.co/8pwmHtW/Imagem-do-Whats-App-de-2025-12-10-s-15-44-14-2fa7f11f.jpg",
  "https://i.ibb.co/yF4Rsy7m/Imagem-do-Whats-App-de-2025-12-15-s-16-11-50-11bf4eb9.jpg",
  "https://i.ibb.co/wFX0Dh1L/IMG-20251215-WA0037.jpg",
  "https://i.ibb.co/DHNfx8TS/IMG-20251215-WA0035.jpg",
  "https://i.ibb.co/4RLp3kQ7/image.png"
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 px-4 border-t border-neutral-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4 uppercase leading-tight">
             🦅 Quem entra <span className="text-neon">pega a visão</span> <br/>
             e sai na frente:
           </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {proofs.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl hover:border-neon/30 hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] transition-all duration-300 bg-neutral-900">
              <img 
                src={src} 
                alt={`Resultado Aluno ${index + 1}`} 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-pulse">
          <p className="text-gray-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            Quem anda junto <span className="text-white">VOA junto!</span>
          </p>
        </div>
      </div>
    </section>
  );
};