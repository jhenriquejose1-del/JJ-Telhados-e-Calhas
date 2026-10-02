import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Depoimentos Verificados
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quem Contrata a JJ Telhados, Recomenda
          </h2>
          <p className="text-base text-slate-600">
            Veja a opinião de clientes residenciais, síndicos de condomínios e empresários atendidos em Porto Alegre e Região.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-slate-200 mt-6 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-slate-900 text-sm">
                    {t.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                    {t.service}
                  </span>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <span>{t.role}</span> • <span className="font-medium text-slate-600">{t.city}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> +40 Anos de Reputação Impecável
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-blue-600" /> Todas as Obras com Contrato e Recibo
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Avaliação Média 4.9/5 em Atendimento
          </span>
        </div>

      </div>
    </section>
  );
};
