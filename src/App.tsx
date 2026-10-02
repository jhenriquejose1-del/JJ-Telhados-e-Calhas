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
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex flex-col relative selection:bg-blue-600 selection:text-white">
      {/* 
        PLANO DE FUNDO FIXO / MARCA D'ÁGUA COBRINDO A TELA INTEIRA EM BACKGROUND
        Estilo site de referência: /LOGO CERTA.jpeg fixo, cobrindo a tela toda com opacidade suave
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <img
          src="/LOGO CERTA.jpeg"
          alt=""
          className="w-full h-full object-cover object-center opacity-20 mix-blend-multiply filter contrast-125"
        />
      </div>

      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections (relativas com z-10 para manter interatividade e visibilidade sobre a marca d'água) */}
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

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
