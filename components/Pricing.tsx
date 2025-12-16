import React from 'react';
import { Button } from './Button.tsx';
import { Lock, Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-zinc-950 to-black px-4 text-center">
      <div className="container mx-auto max-w-3xl">
        
        <div className="bg-dark-card border border-dark-border p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden mb-12">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon/5 blur-[100px] pointer-events-none"></div>

            {/* Logo in Pricing */}
            <img 
              src="https://i.ibb.co/hFjzFtcZ/verificado-perfil-mapa.png" 
              alt="Verificado Mapa do Low Ticket" 
              className="w-40 md:w-56 mx-auto mb-8 relative z-10 drop-shadow-lg"
            />

            <h3 className="text-3xl md:text-4xl font-black font-display text-white uppercase tracking-wider mb-2 relative z-10">
              MAPA DO <span className="text-neon">LOW TICKET</span>
            </h3>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-8 relative z-10">ACESSO AO TREINAMENTO</p>
            
            <div className="flex flex-col items-center justify-center relative z-10">
                <span className="text-gray-500 text-lg line-through mb-2">de R$ 497,00</span>
                <div className="flex items-start justify-center gap-1 text-neon">
                    <span className="text-3xl font-bold mt-2">R$</span>
                    <span className="text-8xl font-black font-display tracking-tighter">147</span>
                    <span className="text-3xl font-bold mt-auto mb-4">,00</span>
                </div>
                <p className="text-white font-medium text-lg mb-8 opacity-90">
                    ou 12x de <span className="font-bold text-neon">R$15,20</span>
                </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="max-w-md mx-auto mb-8 text-left space-y-3 relative z-10 bg-black/20 p-6 rounded-xl border border-white/5">
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-white font-medium">ACESSO AO CURSO POR 1 ANO</span>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-gray-300"><strong className="text-neon">BÔNUS 1:</strong> Checklist É SÓ FAZER <span className="text-neon">(Organização Suprema)</span></span>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-gray-300"><strong className="text-neon">BÔNUS 2:</strong> Template Milionário <span className="text-neon">(Copia e Cola)</span></span>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-gray-300"><strong className="text-neon">BÔNUS 3:</strong> Agente GPT Criador de Ofertas <span className="text-neon">(I.A)</span></span>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-gray-300"><strong className="text-neon">BÔNUS 4:</strong> Acesso ao meu grupo de Networking <span className="text-neon">(WhatsApp)</span></span>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-gray-300">Suporte e ajuda real</span>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-gray-300">Garantia de 7 dias</span>
                </div>
            </div>

            <Button 
                fullWidth 
                className="max-w-md mx-auto mb-6 text-xl py-5 animate-pulse relative z-10"
                onClick={() => window.open('https://checkout.payt.com.br/1d24d38e350c36798eb41934667d4f0d', '_blank')}
            >
                QUERO LUCRAR R$333/DIA AGORA
            </Button>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm relative z-10">
                <Lock size={14} />
                <span>Pagamento 100% Seguro</span>
            </div>
        </div>

        {/* Separated Warning Section */}
        <div className="text-left bg-neutral-900 border border-red-900/30 p-8 rounded-2xl relative max-w-2xl mx-auto shadow-lg">
            <h4 className="text-white font-bold mb-4 flex items-center gap-3 text-lg">
                <span className="text-2xl">⚠️</span> Recado Importante:
            </h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Não envie mensagem pedindo desconto, <strong className="text-white">essa porra tá barata demais</strong> pelo tanto de coisa que você vai aprender. 
                  Se eu alugasse uma Ferrari pra te impressionar e mentisse falando que você vai ganhar dinheiro fácil, você acharia o preço barato, né? 😂
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Mas eu nunca venderia uma ilusão. Se achou caro, simplesmente não compre e vá ser enganado pelos gurus da internet. 
                  Só quero pessoas comprometidas dentro do meu curso. <strong className="text-white">Tmj!</strong>
              </p>
            </div>
        </div>

      </div>
    </section>
  );
};