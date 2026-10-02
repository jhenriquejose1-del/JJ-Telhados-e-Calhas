import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoverageArea } from './components/CoverageArea';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative selection:bg-blue-600 selection:text-white">
      {/* 
        LOGO DE FUNDO DA PÁGINA (MARCA D'ÁGUA GIGANTE)
        Fixa no fundo de todas as seções e ampliada para pegar a página inteira 
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <img
          src="/LOGO.jpeg"
          alt=""
          className="w-[110vw] max-w-[1400px] h-auto object-contain opacity-[0.055] filter contrast-125"
        />
      </div>

      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections (z-10 to stay interactive above background watermark) */}
      <main className="flex-1 relative z-10">
        {/* 1. Início */}
        <Hero />

        {/* 2. Local de Atendimento */}
        <CoverageArea />

        {/* 3. Serviços Prestados */}
        <Services />

        {/* 4. Sobre Nós */}
        <AboutUs />

        {/* FAQ - Perguntas Frequentes */}
        <FaqSection />

        {/* 5. Contato & Vistoria */}
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp com animação Pulse e rastreamento GA4 */}
      <FloatingWhatsApp />
    </div>
  );
}
