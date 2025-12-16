import React from 'react';
import { MessageSquare, LayoutTemplate, Bot } from 'lucide-react';

interface BonusItemProps {
  icon?: any;
  imageSrc?: string;
  title: string;
  subtitle: string;
  description: string;
  bonusNumber: number;
  highlight?: boolean;
}

const BonusItem = ({ icon: Icon, imageSrc, title, subtitle, description, bonusNumber, highlight }: BonusItemProps) => (
  <div className={`
    relative flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start p-6 md:p-10 rounded-2xl transition-all duration-300 group mt-16
    ${highlight 
      ? 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border-2 border-neon shadow-[0_0_30px_rgba(163,230,53,0.15)] z-10' 
      : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
    }
  `}>
    
    <div className="shrink-0 flex flex-col items-center justify-center relative z-20 w-full md:w-auto">
      {imageSrc ? (
        <div className="w-[280px] md:w-[350px] lg:w-[420px] -mt-20 md:-mt-24 filter drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1">
           <img 
             src={imageSrc} 
             alt={title} 
             className="w-full h-auto object-contain" 
           />
        </div>
      ) : (
        <div className={`rounded-full p-6 -mt-12 shadow-2xl ${highlight ? 'bg-neon shadow-neon/30 text-black' : 'bg-neutral-800 text-neon group-hover:bg-neon group-hover:text-black transition-colors'}`}>
          <Icon className="w-12 h-12" />
        </div>
      )}

      {/* Bonus Tag Under Image */}
      <div className="mt-6 mb-2 transform md:-rotate-1">
          <span className="bg-neon text-black font-black font-display text-lg md:text-xl px-8 py-2 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(163,230,53,0.5)] border-4 border-black/20">
            BÔNUS {bonusNumber}
          </span>
       </div>
    </div>
    
    <div className="flex-1 text-center md:text-left relative z-10 md:pt-8 md:pl-4">
        {highlight && (
          <div className="flex justify-center md:justify-start mb-4">
            <span className="text-neon text-xs font-bold tracking-[0.2em] animate-pulse border border-neon/50 px-3 py-1 rounded bg-neon/10">
              ⭐ DESTAQUE EXCLUSIVO
            </span>
          </div>
        )}
      
      <h3 className={`text-2xl md:text-3xl font-black text-white mb-2 font-display leading-tight`}>{title}</h3>
      <p className="text-neon font-bold text-sm md:text-base uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block md:block">{subtitle}</p>
      <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">{description}</p>
    </div>
  </div>
);

export const Bonuses: React.FC = () => {
  return (
    <section className="py-32 bg-black border-t border-neutral-900 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-0 uppercase leading-none">
              BÔNUS QUE REALMENTE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-500 filter drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                SERVEM PRA VOCÊ!
              </span>
            </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-20">
          
          <BonusItem 
            imageSrc="https://i.ibb.co/7dndjv9w/unnamed-6-removebg-preview.png" 
            title="Checklist: É SÓ FAZER"
            subtitle="Organização Suprema"
            description="Você receberá um checklist prático com todas as tarefas organizadas na ordem exata de execução do seu Low Ticket. É o mapa direto que elimina dúvidas sobre criação, tráfego e escala. Enquanto a maioria trava, você terá o roteiro simples e comprovado para agir."
            bonusNumber={1}
            highlight={true}
          />

          <BonusItem 
            imageSrc="https://i.ibb.co/279fF7VP/unnamed-2-removebg-preview.png"
            title="Template Milionário"
            subtitle="Copia e Cola"
            description="Acesso ao modelo de página de vendas que já faturou mais de meio milhão de reais, adaptado para Low Ticket. Não é teoria, é a estrutura validada. Economize meses de testes e erros."
            bonusNumber={2}
          />

          <BonusItem 
            imageSrc="https://i.ibb.co/0yChxPLs/unnamed-7-removebg-preview-1.png"
            title="Agente GPT Criador de Ofertas"
            subtitle="Inteligência Artificial"
            description="Uma IA treinada especificamente para criar ofertas low ticket irresistíveis para você em minutos. Ela pensa como um copywriter profissional."
            bonusNumber={3}
          />

          <BonusItem 
            imageSrc="https://i.ibb.co/MyLBZRQ0/unnamed-5.jpg"
            title="Grupo de Networking"
            subtitle="Comunidade no WhatsApp"
            description="Não ande sozinho. Esteja em um ambiente com outras pessoas que também estão buscando os R$ 10k/mês. Troque experiências e cresça junto."
            bonusNumber={4}
          />

        </div>
      </div>
    </section>
  );
};