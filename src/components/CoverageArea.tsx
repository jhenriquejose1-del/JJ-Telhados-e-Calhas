import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { CITIES_SERVED, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const CoverageArea: React.FC = () => {
  return (
    <section id="atendimento" className="py-14 sm:py-20 bg-white/75 backdrop-blur-[1px] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <Navigation className="w-3.5 h-3.5 text-blue-600" />
            Raio de Cobertura Regional
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Atendimento em Porto Alegre, Canoas, Novo Hamburgo e região metropolitana
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Equipes móveis equipadas para vistorias técnicas ágeis no local, com avaliação sem compromisso e orçamento detalhado na hora.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {CITIES_SERVED.map((city, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                    {city.badge}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {city.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {city.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Deslocamento para vistoria</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive reassurance banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-5 h-5 text-sky-400" />
              Precisa de vistoria na sua cidade hoje?
            </h4>
            <p className="text-sm text-slate-300">
              Nossos técnicos atendem emergências por tempestade e orçamentos programados em todo o RS.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de saber a disponibilidade de atendimento para o meu endereço.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('atendimento_regiao_cta')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/30 active:scale-95 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar Minha Região no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
