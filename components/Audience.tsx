import React from 'react';

const AudienceCard = ({ emoji, title, description, className = '' }: { emoji: string; title: string; description: string; className?: string }) => (
  <div className={`bg-dark-card border border-dark-border p-8 rounded-xl hover:border-neon/30 transition-colors duration-300 flex flex-col items-start h-full ${className}`}>
    <div className="text-5xl mb-6 filter drop-shadow-lg">{emoji}</div>
    <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-black px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-4">
            PARA QUEM É O <span className="text-neon">MAPA DO LOW TICKET?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AudienceCard 
            emoji="😤"
            title="Está cansado do CLT"
            description="Quer construir uma renda que roda no automático 24 horas por dia e não depender mais do horário comercial."
          />
          
          <AudienceCard 
            emoji="🧭"
            title="Precisa de clareza de execução"
            description="Sem lero lero de teorias. Aqui é mão na massa! A prática direto ao ponto que vai trazer seus R$ 333,00 de lucro hoje, não amanhã."
          />

          <AudienceCard 
            emoji="🤝"
            title="Valoriza a transparência"
            description="Não aguenta mais papinho de guru e quer alguem que vive do disso! Skin the game e mostra resultado de verdade!"
          />
          
          <AudienceCard 
            emoji="🤡"
            title="Já tentou de tudo (PLR, Dropshipping...)"
            description="Acredite, eu também já tentei isso! 😂 Mas isso era tudo coisa ultrapassada que tavam tentando empurrar pra gente. Agora você está no momento certo, e tem a chance única o LOW TICKET!"
            className="border-red-900/30"
          />

          <AudienceCard 
            emoji="🚓"
            title="Sem ter que rodar Black ou Golpe"
            description="Faça dinheiro de forma honesta sem comprometer seus princípios e valores! Te mostro como é possível fazer seus R$10 MIL de lucro todos os meses sem precisar se vender!"
          />

          <AudienceCard 
            emoji="👶"
            title="Está começando do Absoluto Zero?"
            description="Tendo experiência ou não, o mapa do low ticket vai te pegar do Zero até a Escala! Então pode ficar tranquilo se você não sabe de nada do digital."
          />
        </div>
      </div>
    </section>
  );
};