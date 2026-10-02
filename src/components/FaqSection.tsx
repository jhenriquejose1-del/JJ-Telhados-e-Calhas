import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 backdrop-blur-[1px] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600">
            Transparência e segurança do primeiro contato até a entrega final da sua obra.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-heading">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-10 p-6 rounded-2xl bg-blue-50 border border-blue-200/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-base">
              Ainda ficou com alguma dúvida sobre o seu caso?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Nossa equipe técnica atende prontamente no WhatsApp para esclarecer detalhes.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre serviços de telhados e calhas.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('faq_whatsapp_duvida')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-md shadow-green-600/20 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com Técnico no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
