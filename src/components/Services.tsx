import React, { useState } from 'react';
import { 
  Wrench, 
  Home, 
  Layers, 
  Droplets, 
  ShieldAlert, 
  CheckCircle2, 
  MessageCircle, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { SERVICES, ServiceItem, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'calhas':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'telhados':
        return <Home className="w-5 h-5 text-blue-600" />;
      case 'funilaria':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'rufos-condutores':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'impermeabilizacao':
        return <ShieldAlert className="w-5 h-5 text-blue-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleServiceWhatsApp = (serviceTitle: string) => {
    trackWhatsAppClick(`servico_${serviceTitle.toLowerCase().replace(/\s+/g, '_')}`, serviceTitle);
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Excelência Construtiva
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serviços Prestados com Precisão Industrial
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conheça nossas soluções completas em funilaria, calhas e coberturas com materiais anticorrosão e garantia contratual.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                
                {/* Floating badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-2 shadow-xs">
                  {getServiceIcon(service.id)}
                  <span className="text-xs font-bold text-slate-800">{service.title}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Materials badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de um orçamento detalhado para o serviço de ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceWhatsApp(service.title)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-sm group-hover:shadow-md group-hover:shadow-green-600/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{service.ctaText}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Bonus 6th Card: Vistoria Técnica e Laudo de Estanqueidade */}
          <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white rounded-2xl overflow-hidden border border-blue-800 shadow-lg flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Atendimento Especial</span>
              <h3 className="font-heading text-2xl font-bold text-white">
                Vistorias Tecnológicas & Emergência de Chuvas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Identificamos a origem exata de infiltrações crônicas sem adivinhação. Equipe técnica experiente pronta para atender condomínios, residências e galpões comerciais.
              </p>
              
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Diagnóstico estrutural e caimento pluvial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Orçamento transparente sem custos ocultos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia formal com termo de responsabilidade</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppUrl("Olá! Preciso de uma vistoria técnica no meu telhado/calhas com urgência.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('vistoria_tecnica_urgencia', 'Vistoria Tecnológica')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-sky-50 active:scale-95 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-900 text-slate-900" />
                <span>Agendar Vistoria no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
