import React from 'react';
import { ShieldCheck, Award, Wrench, FileCheck, CheckCircle2, MessageCircle, Clock, Building2 } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Watermark based on Logo */}
      <div 
        className="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${COMPANY_INFO.logoUrl})`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-md">
              {/* Decorative background blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl blur-xl opacity-30" />
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 p-8 text-center space-y-6">
                <div className="w-28 h-28 mx-auto rounded-2xl p-2 bg-white shadow-xl flex items-center justify-center">
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt="JJ Telhados e Calhas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    JJ Telhados e Calhas
                  </h3>
                  <p className="text-sky-400 font-semibold text-sm">
                    Desde 1985 • Mais de 40 anos de liderança
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-700/80 pt-4">
                  Referência técnica em funilaria industrial, calhas galvanizadas e coberturas residenciais e comerciais em todo o Rio Grande do Sul.
                </p>

                {/* 4 Pillars Mini-grid */}
                <div className="grid grid-cols-2 gap-3 text-left pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70">
                    <FileCheck className="w-4 h-4 text-emerald-400 mb-1" />
                    <p className="text-xs font-bold text-white">Garantia em Contrato</p>
                    <p className="text-[10px] text-slate-400">Formal e documentada</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70">
                    <Wrench className="w-4 h-4 text-sky-400 mb-1" />
                    <p className="text-xs font-bold text-white">Dobra Industrial</p>
                    <p className="text-[10px] text-slate-400">Maquinário de precisão</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70">
                    <ShieldCheck className="w-4 h-4 text-blue-400 mb-1" />
                    <p className="text-xs font-bold text-white">Equipe NR-35</p>
                    <p className="text-[10px] text-slate-400">Segurança em altura</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70">
                    <Building2 className="w-4 h-4 text-amber-400 mb-1" />
                    <p className="text-xs font-bold text-white">+12.000 Obras</p>
                    <p className="text-[10px] text-slate-400">Clientes satisfeitos</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Copy Column with exact user text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              <Award className="w-3.5 h-3.5" />
              Nossa História e Compromisso
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Desde 1985 oferecendo qualidade e confiança
            </h2>

            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/80 text-sky-200 text-lg font-semibold flex items-center gap-3">
              <Clock className="w-6 h-6 text-sky-400 shrink-0" />
              <span>Mais de 40 anos de liderança em funilaria e telhados</span>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                A <strong className="text-white font-bold">JJ Telhados e Calhas</strong> consolidou-se como referência no mercado gaúcho, unindo a precisão das dobras industriais ao cuidado artesanal na montagem mecânica.
              </p>
              
              <p>
                Atendemos <strong className="text-white font-bold">Porto Alegre, Canoas, Novo Hamburgo e toda a Região Metropolitana</strong>, oferecendo soluções com qualidade e compromisso.
              </p>

              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 text-sm sm:text-base flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-bold">Realizamos vistorias tecnológicas e todos os serviços contam com garantia em contrato.</strong>
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl("Olá! Li sobre a história da JJ Telhados e Calhas e gostaria de solicitar um orçamento com garantia.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('sobre_nos_whatsapp')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-xl shadow-green-600/30"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Falar com Nossos Especialistas</span>
              </a>

              <span className="text-xs text-slate-400 text-center sm:text-left">
                Vistoria técnica gratuita no local sem compromisso.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
