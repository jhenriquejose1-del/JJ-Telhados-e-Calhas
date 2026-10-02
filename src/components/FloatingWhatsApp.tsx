import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackWhatsAppClick('botao_whatsapp_flutuante');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700 animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold">Orçamento rápido pelo WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={getWhatsAppUrl("Olá, gostaria de um orçamento")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 pulse-whatsapp cursor-pointer"
        aria-label="Falar conosco no WhatsApp"
      >
        <MessageCircle className="w-9 h-9 fill-white" />
        
        {/* Mobile notification dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold">
          1
        </span>
      </a>
    </div>
  );
};
