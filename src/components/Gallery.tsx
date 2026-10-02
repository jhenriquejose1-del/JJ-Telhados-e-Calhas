import React, { useState } from 'react';
import { Maximize2, X, MessageCircle, MapPin, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas as Obras' },
    { id: 'calhas', label: 'Calhas e Rufos' },
    { id: 'telhados', label: 'Telhados' },
    { id: 'funilaria', label: 'Funilaria Especial' },
    { id: 'impermeabilizacao', label: 'Impermeabilização' },
  ];

  const filteredItems = activeCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedPhoto(item);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Portfólio de Obras Reais
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Galeria de Serviços Executados
            </h2>
            <p className="text-base text-slate-600">
              Confira a qualidade do acabamento, a precisão das dobras e a vedação impecável nos serviços entregues na Grande Porto Alegre.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image with zoom on hover */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-xs">
                  {item.categoryLabel}
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Card Meta */}
                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Bar on hover */}
              <div className="bg-slate-900 p-2.5 text-center text-xs font-semibold text-sky-400 border-t border-slate-800 flex items-center justify-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>Clique para ampliar detalhes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={handleCloseModal}
          >
            <div
              className="relative bg-slate-900 text-white rounded-3xl max-w-3xl w-full overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Frame */}
              <div className="relative aspect-16/10 bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-blue-600/30 text-blue-300 border border-blue-500/40">
                      {selectedPhoto.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Obra Concluída & Garantida
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedPhoto.description}
                </p>

                {/* CTA inside modal */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Gostou deste acabamento? Solicite um projeto similar para o seu imóvel.
                  </p>
                  <a
                    href={getWhatsAppUrl(`Olá! Vi a obra "${selectedPhoto.title}" no site da JJ Telhados e gostaria de um orçamento parecido.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`modal_obra_${selectedPhoto.id}`, selectedPhoto.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-lg shadow-green-600/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Quero Orçamento Deste Serviço</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
