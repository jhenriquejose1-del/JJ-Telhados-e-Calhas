import React, { useState } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, trackWhatsAppClick } from '../data/content';

export const BudgetSimulator: React.FC = () => {
  const [service, setService] = useState('Calhas e Rufos');
  const [propertyType, setPropertyType] = useState('Casa Residencial');
  const [city, setCity] = useState('Porto Alegre');
  const [urgency, setUrgency] = useState('Preciso de orçamento urgente (infiltração)');
  const [notes, setNotes] = useState('');

  const servicesList = [
    'Calhas e Rufos',
    'Reforma Completa de Telhado',
    'Troca de Telhas Quebradas',
    'Funilaria Sob Medida',
    'Impermeabilização e Goteiras',
    'Condutores e Descidas Pluviais'
  ];

  const propertyTypes = [
    'Casa Térrea / Sobrado',
    'Condomínio Residencial',
    'Galpão Industrial / Comercial',
    'Prédio / Edifício'
  ];

  const citiesList = [
    'Porto Alegre',
    'Canoas',
    'Novo Hamburgo',
    'São Leopoldo',
    'Esteio / Sapucaia',
    'Gravataí / Cachoeirinha',
    'Alvorada / Viamão',
    'Outra Cidade da Região Metropolitana'
  ];

  const urgencyOptions = [
    'Preciso de orçamento urgente (infiltração)',
    'Para esta semana',
    'Apenas planejamento de custos'
  ];

  const handleSendSimulator = (e: React.FormEvent) => {
    e.preventDefault();
    trackWhatsAppClick('simulador_orcamento_enviado', service);
    
    let message = `Olá JJ Telhados e Calhas! Preenchi o simulador no site:\n\n`;
    message += `📌 Serviço: ${service}\n`;
    message += `🏠 Tipo de Imóvel: ${propertyType}\n`;
    message += `📍 Cidade: ${city}\n`;
    message += `⚡ Urgência: ${urgency}\n`;
    if (notes.trim()) {
      message += `📝 Detalhes: ${notes.trim()}\n`;
    }
    message += `\nGostaria de receber a estimativa e agendar uma vistoria gratuita!`;

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            Simulador Rápido de Orçamento
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Monte seu Orçamento em 30 Segundos
          </h2>
          <p className="text-base text-slate-600">
            Selecione as características do seu imóvel e receba uma proposta personalizada diretamente no WhatsApp com nossos engenheiros práticos.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          <form onSubmit={handleSendSimulator} className="space-y-8">
            
            {/* 1. Escolha o serviço */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-900">
                1. Qual serviço você precisa?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {servicesList.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setService(item)}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all cursor-pointer border ${
                      service === item
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Tipo de Imóvel */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-900">
                2. Qual o tipo de imóvel?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {propertyTypes.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setPropertyType(item)}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer border ${
                      propertyType === item
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Cidade e Urgência */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  3. Cidade do Atendimento:
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                >
                  {citiesList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-900">
                  4. Urgência do Serviço:
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                >
                  {urgencyOptions.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Observações opcionais */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-900">
                Observações adicionais (opcional):
              </label>
              <input
                type="text"
                placeholder="Ex: Altura aproximada do telhado, metragem de calha ou descrição do vazamento..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base sm:text-lg font-bold text-white bg-green-600 hover:bg-green-500 active:scale-[0.99] transition-all shadow-xl shadow-green-600/25 cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Gerar Proposta e Enviar no WhatsApp Agora</span>
              </button>
              <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Orçamento gratuito e sem taxa de deslocamento para vistoria inicial.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
