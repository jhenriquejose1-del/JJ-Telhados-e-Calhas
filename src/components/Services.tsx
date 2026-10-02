import React from 'react';
import { 
  Wrench, 
  Home, 
  Layers, 
  Droplets, 
  ShieldAlert, 
  Sun,
  MessageCircle, 
  Sparkles
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const Services: React.FC = () => {
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
      case 'toldos':
        return <Sun className="w-5 h-5 text-blue-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleServiceWhatsApp = (serviceTitle: string) => {
    trackWhatsAppClick(`servico_${serviceTitle.toLowerCase().replace(/\s+/g, '_')}`, serviceTitle);
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-slate-50/70 backdrop-blur-[1px] relative">
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
            Conheça nossas soluções completas em funilaria, calhas, coberturas e reformas com garantia contratual.
          </p>
        </div>

        {/* Services Cards Grid - Cada card contém apenas Imagem, Aba de Topo, Título e Botão Pedir Orçamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame com Aba de Topo */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70" />
                
                {/* Aba de Topo */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-2 shadow-xs">
                  {getServiceIcon(service.id)}
                  <span className="text-xs font-bold text-slate-800">{service.title}</span>
                </div>
              </div>

              {/* Card Body: Título e Botão Pedir Orçamento */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Botão de Pedir Orçamento */}
                <div className="pt-4 border-t border-slate-100 mt-4">
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de pedir um orçamento para o serviço de ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceWhatsApp(service.title)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-sm group-hover:shadow-md group-hover:shadow-green-600/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pedir Orçamento</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
