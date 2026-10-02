import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, trackPhoneClick, trackWhatsAppClick } from '../data/content';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Atendimento', href: '#atendimento' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleWhatsApp = (label: string) => {
    trackWhatsAppClick(label);
  };

  const handlePhone = () => {
    trackPhoneClick('navbar_header');
  };

  return (
    <>
      {/* Top micro-bar for quick trust credentials */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sky-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Tradição e Confiança desde 1985
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" /> Porto Alegre, Canoas, Novo Hamburgo e Região
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto text-xs">
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> Seg-Sáb: 07:30 às 18:30
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              onClick={handlePhone}
              className="text-white hover:text-sky-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Title */}
            <a href="#inicio" className="flex items-center gap-3.5 group focus:outline-none">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-xs border border-slate-200 group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-0.5">
                <img
                  src="/LOGO CERTA.jpeg"
                  alt="JJ Telhados e Calhas Logo Oficial"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-none">
                  JJ Telhados <span className="text-blue-600">& Calhas</span>
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wide mt-1">
                  Funilaria & Telhados • Desde 1985
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons & Right Corner Logo Badge */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Canto superior direito logo badge */}
              <div className="hidden 2xl:flex items-center gap-2 pl-2 border-l border-slate-200">
                <img
                  src="/LOGO CERTA.jpeg"
                  alt="JJ Telhados"
                  className="w-8 h-8 object-contain rounded-md border border-slate-200 bg-white"
                />
                <span className="text-[11px] font-bold text-slate-700 leading-tight">
                  Oficial<br/><span className="text-blue-600">Desde 1985</span>
                </span>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                onClick={handlePhone}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                Ligar Agora
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para o meu telhado/calhas.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("navbar_cta")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-md shadow-green-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
                <span className="text-[10px] bg-green-800/40 text-green-100 px-1.5 py-0.5 rounded-full font-bold">
                  Orçamento Rápido
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("navbar_mobile_btn")}
                className="inline-flex sm:hidden p-2 rounded-lg bg-green-600 text-white"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 px-4 pt-3 pb-6 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/70"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de um orçamento no WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsApp("mobile_drawer_whatsapp");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-500 shadow-md shadow-green-600/20"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                onClick={() => {
                  handlePhone();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
