import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, trackPhoneClick, trackWhatsAppClick } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 relative overflow-hidden">
      {/* Subtle Logo Watermark in footer */}
      <div 
        className="absolute right-0 bottom-0 w-80 h-80 bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${COMPANY_INFO.logoUrl})`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 overflow-hidden shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Logo JJ Telhados e Calhas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white block">
                  JJ Telhados e Calhas
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  Desde 1985 • Mais de 40 anos de liderança
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Especialistas em funilaria industrial sob medida, fabricação e instalação de calhas, reforma de coberturas e impermeabilizações em Porto Alegre e Região Metropolitana.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Serviços com garantia formal em contrato</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-sky-400 transition-colors">Início</a></li>
              <li><a href="#atendimento" className="hover:text-sky-400 transition-colors">Cidades Atendidas</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Serviços Prestados</a></li>
              <li><a href="#sobre" className="hover:text-sky-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-sky-400 transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Serviços Principais</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Instalação de Calhas</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Reforma de Telhados</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Funilaria Sob Medida</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Rufos e Condutores</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Impermeabilização</a></li>
              <li><a href="#servicos" className="hover:text-sky-400 transition-colors">Vistorias Técnicas</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contato Imediato</h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={getWhatsAppUrl("Olá, gostaria de um orçamento")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer_whatsapp')}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                onClick={() => trackPhoneClick('footer_telefone')}
                className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Ligações: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Porto Alegre, Canoas, Novo Hamburgo e toda a Região Metropolitana - RS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} JJ Telhados e Calhas. Todos os direitos reservados. CNPJ e registro no RS.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
