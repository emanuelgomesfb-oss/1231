import React from 'react';
import { Lightbulb, Banknote, Rocket, ShieldCheck, Terminal, AlertTriangle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, highlight, warning }: { icon: any, title: string, description: string, highlight?: boolean, warning?: boolean }) => (
  <div className={`
    relative bg-dark-card border p-8 rounded-2xl flex flex-col h-full
    group hover:bg-neutral-900 transition-all duration-300
    ${highlight ? 'border-neon/50 shadow-[0_0_20px_rgba(163,230,53,0.1)]' : 'border-dark-border'}
    ${warning ? 'border-amber-500/30 bg-amber-950/10' : ''}
  `}>
    <div className={`
      mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg transition-colors
      ${warning ? 'bg-amber-500/10 text-amber-500' : 'bg-neon/10 group-hover:bg-neon/20 text-neon'}
    `}>
      <Icon className="w-8 h-8" />
    </div>
    
    <h3 className={`font-bold text-xl mb-4 font-display uppercase tracking-wide ${warning ? 'text-amber-500' : 'text-neon'}`}>
      {title}
    </h3>
    
    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-neon font-bold tracking-widest uppercase text-sm">O Que Você Vai Aprender</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white mt-2 mb-8">
            PURO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-600">CONTEÚDO DE EXECUÇÃO</span>
          </h2>
          
          <img 
            src="https://i.ibb.co/GvBfcJHK/unnamed-10-removebg-preview.png" 
            alt="Conteúdo do Curso Preview" 
            className="w-full max-w-4xl mx-auto drop-shadow-[0_0_30px_rgba(163,230,53,0.15)] opacity-100 mt-8"
          />
        </div>

        {/* The Grid - Part 1: Fundamentals */}
        <div className="flex flex-col gap-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Lightbulb}
              title="Criação Rápida com IA"
              description="Crie um produto que vende em horas. Raio-X de 3 Produtos Prontos. MÓDULO OURO 🔥: Mostro um produto ATIVO que faz R$1.000 DE LUCRO por dia."
            />
            <FeatureCard
              icon={Banknote}
              title="Vendas & PIX Imediato"
              description="Páginas de vendas que forçam a conversão (com templates). Receba o dinheiro direto no seu PIX (zero dependência de gateways chatos)."
            />
            <FeatureCard
              icon={Rocket}
              title="Tráfego Pago Low Cost"
              description="Anuncie no Facebook Ads de forma simples e barata. Foco total no ROI e no seu lucro diário de R$ 333,00."
            />
          </div>

          {/* Separator */}
          <div className="relative py-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dashed border-gray-800"></div>
            </div>
            <div className="relative bg-zinc-950 px-4">
              <span className="text-sm text-gray-500 font-bold tracking-widest uppercase">Blindagem & Escala</span>
            </div>
          </div>

          {/* Part 2: Advanced & Security - Separated as requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-4xl lg:mx-auto lg:w-full">
            <FeatureCard
              icon={AlertTriangle}
              title="CONTIGENCIA DESCOMPLICADA"
              description="Inicialmente você não irá precisar, mas quando necessitar eu te apresento a contigência de forma simples, pra que você consiga escalar sem quebrar cabeça com esse troço!"
              warning={true}
            />
            <FeatureCard
              icon={Terminal}
              title="Hacks Secretos (Multiplique)"
              description="Os Hacks (OURO) para diminuir seu CPA e aumentar o lucro das campanhas. Estratégias de quem joga o jogo grande."
              highlight={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
};