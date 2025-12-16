import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

const faqs: FAQCategory[] = [
  {
    title: "Experiência e Execução",
    icon: "👶",
    items: [
      {
        question: "Sou totalmente iniciante. Este curso serve para mim?",
        answer: "Sim, ele foi **construído do zero** para iniciantes. Não precisa de experiência, produto próprio ou audiência. Você será pego do Zero até a Escala."
      },
      {
        question: "Em quanto tempo eu consigo ver os primeiros R$333 de lucro?",
        answer: "O método é focado em **execução imediata**. O tempo depende da sua ação, mas o objetivo é que você comece a anunciar e gerar os primeiros PIX o mais rápido possível."
      }
    ]
  },
  {
    title: "Caixa e Risco",
    icon: "💸",
    items: [
      {
        question: "Quanto de dinheiro (caixa) é necessário para começar a rodar tráfego?",
        answer: "Você valida o produto com **R$50,00**, mas o ideal é ter **R$100,00**. Não é igual Dropshipping: é provável que você já venda e **não saia no prejuízo**. Seu único gasto será com Facebook Ads."
      },
      {
        question: "O método é 100% limpo? Eu tenho medo de rodar \"Black\" ou de bloqueios.",
        answer: "Sim, o método ensina a vender Low Ticket de forma **100% White Hat** (limpa). Você fará R$10K de lucro sem golpes ou táticas arriscadas. O curso inclui a contingência para evitar bloqueios."
      }
    ]
  },
  {
    title: "Segurança e Garantia",
    icon: "🔒",
    items: [
      {
        question: "Vou precisar criar um produto novo?",
        answer: "Você aprende a criar um que vende em **horas** usando IA. Além disso, você tem o **Raio-X de 3 Produtos Prontos** para modelar e o BÔNUS 3 (Agente GPT) para acelerar a oferta."
      },
      {
        question: "Existe garantia?",
        answer: "Sim, **7 dias de Garantia Incondicional**. Se não gostar, devolvemos 100% do seu investimento. Risco zero para você."
      }
    ]
  }
];

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-neutral-800 last:border-0`}>
      <button 
        className="w-full py-6 flex items-start justify-between text-left group hover:bg-neutral-900/50 transition-colors px-4 rounded-lg"
        onClick={onClick}
      >
        <span className={`font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-neon' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-neon' : 'text-gray-500'}`}>
          <ChevronDown />
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed px-4" dangerouslySetInnerHTML={{ 
            __html: answer.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
          }} />
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-neutral-900 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon/10 mb-4 text-neon">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-2 uppercase">
            FAQ <span className="text-neon">- Suas Dúvidas</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Perguntas Frequentes</p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden p-2 md:p-6 shadow-xl">
              <div className="flex items-center gap-3 px-4 py-2 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide font-display">{category.title}</h3>
              </div>
              <div className="bg-neutral-900/30 rounded-xl px-2">
                {category.items.map((item, itemIndex) => {
                  const uniqueId = `${catIndex}-${itemIndex}`;
                  return (
                    <AccordionItem 
                      key={uniqueId}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === uniqueId}
                      onClick={() => toggleFAQ(uniqueId)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};