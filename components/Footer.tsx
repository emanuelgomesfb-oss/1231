import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-neutral-900">
      <div className="container mx-auto text-center max-w-4xl">
        <img 
          src="https://i.ibb.co/FLX35X30/mapa-logo-png.png" 
          alt="Mapa do Low Ticket" 
          className="h-12 md:h-16 mx-auto mb-6 opacity-80"
        />
        
        <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
          AVISO LEGAL: este produto não garante obtenção de ganhos financeiros. Qualquer resultado é referente unicamente ao desempenho do aluno em relação a aplicação do conteúdo ensinado.
        </p>

        <p className="text-gray-600 text-sm font-medium">
          Copyright © 2025 Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};