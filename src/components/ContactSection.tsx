import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, trackPhoneClick, trackWhatsAppClick } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackWhatsAppClick('formulario_contato_submit');
    
    let msg = `Olá! Meu nome é ${formName}.\n`;
    if (formPhone) msg += `Telefone: ${formPhone}\n`;
    if (formCity) msg += `Cidade/Bairro: ${formCity}\n`;
    if (formDesc) msg += `Descrição do serviço: ${formDesc}\n`;
    msg += `\nGostaria de solicitar um orçamento para o meu telhado/calhas!`;

    setSentSuccess(true);
    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Fale com a Nossa Equipe
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Canais de Atendimento e Orçamento
          </h2>
          <p className="text-base text-slate-600">
            Estamos prontos para atender você com agilidade e compromisso em Porto Alegre e toda a Região Metropolitana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Direct Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-50 to-white rounded-3xl p-6 sm:p-8 border-2 border-green-500/30 shadow-lg relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    Canal Principal
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                    WhatsApp Comercial
                  </h3>
                  <p className="text-sm text-slate-600">
                    Envie fotos do telhado ou calha para avaliação preliminar imediata.
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-green-600/30">
                  <MessageCircle className="w-8 h-8 fill-white" />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-green-200/60">
                <div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Número Oficial</span>
                  <span className="text-2xl font-extrabold text-slate-900 font-heading">
                    {COMPANY_INFO.whatsappDisplay}
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl("Olá, gostaria de um orçamento")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('botao_whatsapp')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-md shadow-green-600/25"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                    Atendimento Telefônico
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                    Ligações Diretas
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ligue diretamente para falar com nosso plantão de atendimento.
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <Phone className="w-7 h-7" />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Plantão de Ligações</span>
                  <span className="text-2xl font-extrabold text-slate-900 font-heading">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  onClick={() => trackPhoneClick('telefone')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 active:scale-95 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>

            {/* Hours and Regional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Horário de Atendimento</h4>
                  <p className="text-xs text-slate-600 mt-1">{COMPANY_INFO.hours}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Região Atendida</h4>
                  <p className="text-xs text-slate-600 mt-1">Porto Alegre, Canoas, Novo Hamburgo e Grande POA</p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            <div className="space-y-2 mb-6">
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Solicite uma Vistoria Técnica
              </h3>
              <p className="text-sm text-slate-600">
                Preencha os campos abaixo e envie seus dados diretamente para a nossa equipe técnica no WhatsApp:
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Seu Nome:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Telefone / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(51) 9XXXX-XXXX"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Cidade / Bairro:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Canoas - Centro"
                    value={formCity}
                    onChange={(e) => setFormCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  O que precisa ser feito?
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Troca de 20 metros de calhas, infiltração no telhado colonial, instalação de rufos na platibanda..."
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all shadow-lg shadow-green-600/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitação no WhatsApp</span>
              </button>

              {sentSuccess && (
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Mensagem preparada! Abrindo seu WhatsApp...</span>
                </div>
              )}

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Seus dados são 100% confidenciais e utilizados apenas para orçamento.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
