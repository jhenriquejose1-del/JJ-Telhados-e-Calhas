import React from 'react';
import { MessageCircle, Phone, ShieldCheck, Award, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, trackPhoneClick, trackWhatsAppClick } from '../data/content';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    trackWhatsAppClick('hero_cta_principal');
  };

  const handlePhone = () => {
    trackPhoneClick('hero_ligacao');
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white py-16 sm:py-24 lg:py-28">
      {/* Background Watermark Pattern based on Logo */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-right-bottom sm:bg-center opacity-10 pointer-events-none transition-all"
        style={{
          backgroundImage: `url(${COMPANY_INFO.logoUrl})`,
          backgroundSize: 'min(700px, 90vw)',
          filter: 'grayscale(20%) brightness(1.2)'
        }}
        aria-hidden="true"
      />

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Líder em Calhas e Funilaria no RS desde 1985
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Especialistas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-white">Calhas, Telhados</span> e Funilaria
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Qualidade, durabilidade e confiança desde 1985. Protegemos sua residência, condomínio ou indústria contra goteiras e infiltrações com precisão industrial e garantia em contrato.
            </p>

            {/* Key trust bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium">+40 Anos de Tradição</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">Garantia em Contrato</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/60 border border-slate-700/60 p-2.5 rounded-xl">
                <Wrench className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Vistoria Tecnológica</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={getWhatsAppUrl("Olá! Vi o site e gostaria de solicitar um orçamento no WhatsApp para o meu imóvel.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-green-600 hover:bg-green-500 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-green-600/30"
              >
                <MessageCircle className="w-6 h-6 fill-white shrink-0 group-hover:scale-110 transition-transform" />
                <span>👉 Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                onClick={handlePhone}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Micro reassurance */}
            <p className="text-xs text-slate-400 pt-1 flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Atendimento em Porto Alegre, Canoas, Novo Hamburgo e toda Região Metropolitana
            </p>
          </div>

          {/* Hero Visual Card / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer frame glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000" />
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src="/servico 13.jpeg"
                    alt="Telhado de alto padrão reformado pela JJ Telhados e Calhas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Official Logo emblem floating on top right of the showcase card */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white/80 flex items-center gap-2 z-10">
                    <img
                      src="/LOGO CERTA.jpeg"
                      alt="Logo JJ Telhados e Calhas"
                      className="w-12 h-12 object-contain"
                    />
                    <div className="pr-1 text-left hidden sm:block">
                      <span className="block text-[11px] font-extrabold text-slate-900 leading-none">JJ Telhados</span>
                      <span className="text-[10px] text-blue-600 font-bold">Desde 1985</span>
                    </div>
                  </div>

                  {/* Badge on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-sky-400 uppercase tracking-wider">Obra Concluída no RS</p>
                        <p className="text-sm font-semibold text-white">Reforma de Cobertura e Calhas Contínuas</p>
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        100% Estanque
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick stats ribbon */}
                <div className="grid grid-cols-3 divide-x divide-slate-700/80 bg-slate-900/90 text-center py-3">
                  <div>
                    <span className="block text-xl font-extrabold text-sky-400">1985</span>
                    <span className="text-[11px] text-slate-400">Fundação</span>
                  </div>
                  <div>
                    <span className="block text-xl font-extrabold text-blue-400">+12.000</span>
                    <span className="text-[11px] text-slate-400">Projetos no RS</span>
                  </div>
                  <div>
                    <span className="block text-xl font-extrabold text-emerald-400">100%</span>
                    <span className="text-[11px] text-slate-400">Com Garantia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
