
import React, { useState, useCallback } from 'react';
import { ChevronLeft, RotateCcw, CheckCircle2, XCircle, CheckCircle, MapPin, Star, ShieldCheck, ArrowRight, Menu, RefreshCw, Zap, Shield, Lock, Check, Target, Phone, Globe, Navigation, Search, Loader2, Send } from 'lucide-react';
import { STEPS, THEME } from './constants';
import { FormData } from './types';

const SUCCESS_GREEN = '#22C55E';
const SUCCESS_TEAL = '#2FBBA8';
const WHATSAPP_LINK = "https://wa.me/5521985899548?text=Ol%C3%A1!%20Acabei%20de%20completar%20meu%20Diagn%C3%B3stico%20de%20GMN%20e%20percebi%20que%20preciso%20melhorar%20o%20meu%20perfil%20e%20me%20posicionar%20melhor%20para%20atrair%20mais%20clientes";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw0bu5Ygr7RRqt8diSRVhEWORDBlcFG6aWrsoah9IKwMJIcLBaZXvg7SjfMCjNWHgNg/exec"; 

const GoogleBrandText = () => (
  <span className="inline-flex font-black">
    <span style={{ color: '#4285F4' }}>G</span>
    <span style={{ color: '#EA4335' }}>o</span>
    <span style={{ color: '#FBBC05' }}>o</span>
    <span style={{ color: '#4285F4' }}>g</span>
    <span style={{ color: '#34A853' }}>l</span>
    <span style={{ color: '#EA4335' }}>e</span>
  </span>
);

const renderText = (text: string | undefined) => {
  if (!text) return null;
  const parts = text.split(/(Google)/g);
  return (
    <>
      {parts.map((part, i) => 
        part === 'Google' ? <GoogleBrandText key={i} /> : part
      )}
    </>
  );
};

const TransformationHeadline = () => (
  <div className="w-full text-center mb-8 px-2">
    <h3 className="text-lg font-medium text-gray-800 leading-tight">
      Pule do status <span className="italic text-gray-400 underline decoration-gray-300 underline-offset-4">invisível no Google</span> <br/>
      <span className="text-gray-800 font-medium">para </span>
      <span className="text-blue-600 font-black">No topo das buscas</span>
    </h3>
  </div>
);

const CTAPrompt = () => (
  <div className="w-full max-w-sm mb-4 px-2 animate-bounce-subtle">
    <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-[1.5rem] p-4 text-center shadow-sm">
      <p className="text-[13px] font-black text-blue-700 leading-snug flex items-center justify-center gap-2">
        <Target size={16} className="shrink-0" />
        Clique abaixo para avançar para a conversa de avaliação.
      </p>
    </div>
  </div>
);

const ActionButton = ({ className = "", text = "Falar com o Especialista agora!" }: { className?: string, text?: string }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-full max-w-sm py-6 rounded-[2rem] text-white font-black text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 animate-pulse-cta ${className}`}
    style={{ background: SUCCESS_GREEN, textDecoration: 'none' }}
  >
    <Send size={20} />
    {text}
  </a>
);

const FooterCopyright = () => (
  <div className="mt-8 mb-4 opacity-30 text-center">
    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
      © 2025 - Skipp Digital - Todos os direitos reservados
    </p>
  </div>
);

const renderDescriptionWithoutCTA = (text: string | undefined) => {
  if (!text) return null;
  const ctaPhrase = "Clique abaixo para avançar para a conversa de avaliação.";
  const content = text.replace(ctaPhrase, "").trim();
  return content;
};

const SkippLogo = () => (
  <div className="flex flex-col items-center justify-center mb-8 w-full max-w-[320px] mx-auto animate-fade-in">
    <div className="flex flex-col items-center gap-0">
      <div className="flex items-center leading-none">
        <span className="text-3xl font-black italic tracking-tighter" style={{ 
          background: THEME.brandGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Skipp
        </span>
        <span className="text-3xl font-bold text-[#0B0B0B] tracking-tight">
          Digital
        </span>
      </div>
      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.3em] mt-1.5">
        Estratégias Digitais
      </span>
    </div>
  </div>
);

const BenefitsList = () => (
  <div className="w-full max-w-sm space-y-4 mb-10 mt-8 px-2">
    <div className="flex items-center justify-between gap-4 font-black italic text-[11px] tracking-tight">
      <span className="text-gray-400 uppercase">Escondido nas buscas</span>
      <ArrowRight size={14} className="text-gray-300" />
      <span className="text-gray-900 uppercase">No topo das buscas</span>
    </div>
    {[
      { from: 'Perfil incompleto', to: 'Perfil otimizado' },
      { from: 'Sem avaliações', to: 'Avaliações 5 estrelas' },
      { from: 'clientes indo para a concorrência', to: 'Novos clientes diários' }
    ].map((item, idx) => (
      <div key={idx} className="flex items-center justify-between gap-3 text-xs">
        <span className="flex-1 text-gray-500 font-medium text-right lowercase first-letter:uppercase">{item.from}</span>
        <ArrowRight size={12} className="text-[#3B82F6] opacity-50" />
        <span className="flex-1 text-gray-900 font-black text-left">{item.to}</span>
      </div>
    ))}
  </div>
);

const TrustBadges = () => (
  <div className="flex justify-center gap-6 mb-12 opacity-60">
    <div className="flex items-center gap-1">
      <Shield size={16} style={{ color: SUCCESS_GREEN }} />
      <span className="text-[9px] font-black text-gray-500 leading-tight uppercase">Compra<br/>100% segura</span>
    </div>
    <div className="flex items-center gap-1">
      <Lock size={16} style={{ color: SUCCESS_GREEN }} />
      <span className="text-[9px] font-black text-gray-500 leading-tight uppercase">Privacidade<br/>protegida</span>
    </div>
    <div className="flex items-center gap-1">
      <Check size={16} style={{ color: SUCCESS_GREEN }} />
      <span className="text-[9px] font-black text-gray-500 leading-tight uppercase">{renderText('Google')}<br/>verificado</span>
    </div>
  </div>
);

const DetailedBrowserMockup = () => (
  <div className="w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden text-left mt-8 animate-slide-up">
    <div className="bg-[#F1F3F4] px-3 py-2 flex items-center gap-3 border-b border-gray-200">
      <span className="text-[10px] font-bold text-gray-400">OK</span>
      <div className="flex-1 bg-white rounded-full py-1 px-4 flex items-center justify-center gap-2 border border-gray-200">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <span className="text-[10px] text-gray-500 font-medium">business.google.com</span>
      </div>
      <div className="flex items-center gap-2">
        <Menu size={14} className="text-gray-400" />
        <RefreshCw size={12} className="text-gray-400" />
      </div>
    </div>
    <div className="p-5 font-sans">
      <div className="flex items-center gap-1 mb-4">
        <span className="text-xs font-black text-gray-800">Think with {renderText('Google')}</span>
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-gray-400 mt-0.5" />
      </div>
      <p className="text-[11px] leading-relaxed text-gray-600 font-medium">
        No Brasil, o uso do digital tem crescido significativamente.{' '}
        <span className="font-bold" style={{ color: THEME.primary }}>91% das buscas</span> relacionadas a serviços e produtos{' '}
        <span className="font-bold underline decoration-2" style={{ color: THEME.primary }}>acontecem antes mesmo de as people irem à empresa.</span>{' '}
        Isso significa que o futuro do setor tende a ser mais online. A pergunta que fica é: a sua empresa está pronta para navegar neste contexto?
      </p>
    </div>
  </div>
);

const MiniMap = ({ faded = false }) => (
  <div className={`relative w-full h-full ${faded ? 'bg-gray-100' : 'bg-[#E0F2FE]'} overflow-hidden`}>
    <div className="absolute inset-0">
      <div className={`absolute top-1/4 left-0 w-full h-[3px] bg-white rotate-12 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-1/2 left-0 w-full h-[5px] bg-white -rotate-6 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-0 left-1/3 w-[4px] h-full bg-white rotate-3 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-4 left-6 w-8 h-8 ${faded ? 'bg-gray-200' : 'bg-blue-100/40'} rounded-full blur-xl`} />
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <MapPin size={20} className={`${faded ? 'text-gray-300' : 'text-blue-600 fill-blue-600'} drop-shadow-lg ${!faded && 'animate-bounce'}`} />
    </div>
    <div className="absolute bottom-1 left-2 opacity-30 text-[7px] font-black italic text-gray-500">Maps</div>
  </div>
);

const HighFidelityComparison = () => (
  <div className="w-full flex flex-col items-center animate-fade-in px-1 pt-4">
    <TransformationHeadline />
    <div className="flex justify-between items-stretch gap-3 w-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-red-100 bg-red-50 flex items-center justify-center mb-3 shadow-sm shrink-0">
          <XCircle size={24} className="text-red-400" />
        </div>
        <span className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest text-center">Invisível / Baixa Confiança</span>
        <div className="relative w-full aspect-[9/18] bg-gray-100 rounded-[2.5rem] border-[4px] border-gray-200 shadow-xl overflow-hidden p-1.5 opacity-50 grayscale transition-all duration-700">
          <div className="w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col">
            <div className="h-16 w-full bg-gray-200 p-3 space-y-2">
              <div className="h-2 w-20 bg-gray-300 rounded" />
              <div className="flex gap-1">
                <span className="text-[8px] font-bold text-gray-400">2.1</span>
                <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} size={6} fill={i <= 2 ? "#D1D5DB" : "none"} color="#D1D5DB" />)}</div>
                <span className="text-[7px] text-gray-400">(3 avaliações)</span>
              </div>
            </div>
            <div className="p-3 space-y-3">
               <div className="h-14 w-full bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"><MiniMap faded /></div>
               <div className="space-y-1.5 opacity-40"><div className="h-1 w-full bg-gray-200 rounded" /><div className="h-1 w-2/3 bg-gray-200 rounded" /></div>
               <div className="pt-2"><div className="h-5 w-full border border-red-100 rounded flex items-center px-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2" /><span className="text-[6px] font-bold text-red-400 uppercase">Perfil não verificado</span></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-20">
        <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100 z-10">
          <ArrowRight size={24} className="text-blue-500 animate-pulse" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-green-100 bg-green-50 flex items-center justify-center mb-3 shadow-sm shrink-0">
          <CheckCircle size={24} className="text-green-500" />
        </div>
        <span className="text-[10px] font-black mb-4 uppercase tracking-widest text-center" style={{ color: SUCCESS_TEAL }}>Máxima Autoridade</span>
        <div className="relative w-full aspect-[9/18] bg-white rounded-[2.5rem] border-[6px] shadow-2xl overflow-hidden p-1.5 ring-4 ring-green-50/50" style={{ borderColor: SUCCESS_TEAL }}>
          <div className="w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col">
            <div className="h-20 w-full bg-blue-600 p-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1"><ShieldCheck size={14} className="text-white fill-blue-400" /></div>
              <div className="relative z-10 mt-2 space-y-1">
                <div className="h-3 w-28 bg-white/90 rounded-sm" />
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-black text-white">5.0</span>
                  <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} size={8} fill="#EAB308" color="#EAB308" />)}</div>
                  <span className="text-[7px] text-white/90 font-bold">(247+)</span>
                </div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /><span className="text-[7px] font-bold text-white uppercase">Aberto agora</span></div>
              </div>
            </div>
            <div className="flex justify-around py-2 border-b border-gray-50 bg-gray-50/50">
               <div className="flex flex-col items-center gap-0.5"><div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"><Phone size={8} className="text-blue-600" /></div><span className="text-[5px] font-black text-blue-600 uppercase">Ligar</span></div>
               <div className="flex flex-col items-center gap-0.5"><div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"><Navigation size={8} className="text-blue-600" /></div><span className="text-[5px] font-black text-blue-600 uppercase">Rotas</span></div>
               <div className="flex flex-col items-center gap-0.5"><div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"><Globe size={8} className="text-blue-600" /></div><span className="text-[5px] font-black text-blue-600 uppercase">Site</span></div>
            </div>
            <div className="p-3 space-y-3">
               <div className="h-16 w-full bg-blue-50 rounded-xl border-2 border-white shadow-inner overflow-hidden"><MiniMap /></div>
               <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2"><Search size={8} className="text-gray-300" /><div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full w-full bg-gradient-to-r from-blue-400 to-blue-600" /></div></div>
                  <div className="grid grid-cols-2 gap-2">
                     <div className="h-5 bg-green-50 rounded-md border border-green-100 flex items-center justify-center"><span className="text-[6px] font-black text-green-600 uppercase">#1 no Bairro</span></div>
                     <div className="h-5 bg-blue-50 rounded-md border border-blue-100 flex items-center justify-center"><span className="text-[6px] font-black text-blue-600 uppercase">Google Verificado</span></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SalesPage = ({ onReset }: { onReset: () => void }) => (
  <div className="flex-1 bg-white overflow-y-auto no-scrollbar animate-fade-in flex flex-col items-center px-6 pb-20 pt-8">
    <SkippLogo />
    <CTAPrompt />
    <ActionButton className="mb-6" />
    <HighFidelityComparison />
    <BenefitsList />
    <TrustBadges />
    <ActionButton className="mb-12" text="Garantir meu lugar no Topo" />
    <button onClick={onReset} className="text-gray-400 text-xs font-bold flex items-center gap-1 opacity-50 mb-4"><RotateCcw size={12} /> Reiniciar diagnóstico</button>
    <FooterCopyright />
  </div>
);

const SubmissionLoading = () => (
  <div className="h-screen bg-white flex flex-col items-center justify-center px-10 text-center animate-fade-in">
    <SkippLogo />
    <div className="relative mb-8">
      <div className="w-24 h-24 rounded-full border-4 border-gray-50 flex items-center justify-center"><Loader2 size={48} className="text-blue-500 animate-spin" /></div>
      <div className="absolute inset-0 flex items-center justify-center animate-pulse"><Target size={24} className="text-blue-300" /></div>
    </div>
    <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">Salvando seu diagnóstico...</h2>
    <p className="text-sm font-bold text-gray-400 leading-relaxed uppercase tracking-widest">Estamos preparando sua oferta personalizada em instantes.</p>
  </div>
);

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentStep = STEPS[currentStepIndex] || STEPS[0];

  const submitLead = async (data: FormData) => {
    setIsSubmitting(true);
    const answers: Record<string, string> = {};
    const stepIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    stepIds.forEach((id) => {
      const step = STEPS.find(s => s.id === id);
      const val = data[id];
      let label = 'Não informado';
      
      if (val && step) {
        if (Array.isArray(val)) {
          label = val.map(v => step.options?.find(o => o.id === v)?.label || v).join(', ');
        } else if (step.options) {
          label = step.options.find(o => o.id === val)?.label || val;
        } else {
          label = String(val);
        }
      }
      const key = id.toString().padStart(2, '0');
      answers[key] = label;
    });

    const payload = {
      timestamp: new Date().toLocaleString('pt-BR'),
      device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
      metadata: {
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direto'
      },
      answers: answers
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (e) {
      console.error("Erro no envio técnico:", e);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleNext = useCallback(() => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      submitLead(formData);
    }
  }, [currentStepIndex, formData]);

  const handleSelect = (optionId: string) => {
    if (currentStep.type === 'checkbox') {
      const currentValues = (formData[currentStep.id] as string[]) || [];
      const newValues = currentValues.includes(optionId) ? currentValues.filter(v => v !== optionId) : [...currentValues, optionId];
      setFormData(prev => ({ ...prev, [currentStep.id]: newValues }));
    } else {
      setFormData(prev => ({ ...prev, [currentStep.id]: optionId }));
      setTimeout(() => handleNext(), 400);
    }
  };

  const isStepValid = () => {
    if (!currentStep) return false;
    if (currentStep.type === 'info' || currentStep.type === 'intro') return true;
    const value = formData[currentStep.id];
    if (!value) return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  };

  const handleBack = () => { if (currentStepIndex > 0) setCurrentStepIndex(prev => prev - 1); };
  const handleReset = () => { setCurrentStepIndex(0); setFormData({}); setIsSubmitted(false); setIsSubmitting(false); };

  if (isSubmitting) return <SubmissionLoading />;
  if (isSubmitted) return <SalesPage onReset={handleReset} />;

  return (
    <div className="h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 h-1.5 max-w-md mx-auto">
        <div className="h-full transition-all duration-700 ease-in-out" style={{ background: THEME.brandGradient, width: `${currentStep?.progress ?? 0}%` }} />
      </div>
      <main className="flex-1 pt-12 pb-40 px-6 flex flex-col overflow-y-auto no-scrollbar">
        <SkippLogo />
        <div key={currentStepIndex} className="w-full flex-1 animate-fade-in flex flex-col">
          {currentStep.type === 'intro' ? (
            <div className="text-center flex flex-col items-center">
              <p className="text-sm font-bold text-gray-500 mb-6 leading-relaxed">{currentStep.description}</p>
              <h1 className="text-3xl font-black text-gray-900 leading-tight mb-4 text-center">{renderText(currentStep.title)}</h1>
              <p className="text-xs font-medium text-gray-400 mb-8 italic">{currentStep.subtitle}</p>
              <button onClick={handleNext} className="w-full py-5 rounded-[2rem] text-white text-lg font-black shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2 mb-2" style={{ background: THEME.brandGradient }}>Continuar</button>
              <DetailedBrowserMockup />
            </div>
          ) : (
            <div className="flex flex-col flex-1">
              <h1 className="text-2xl font-black text-center leading-tight mb-4 text-gray-900">{renderText(currentStep.title)}</h1>
              {currentStep.description && <p className="text-center text-gray-400 mb-6 font-medium text-sm leading-relaxed px-2 whitespace-pre-line">{renderDescriptionWithoutCTA(currentStep.description)}</p>}
              {currentStep.subtitle && <p className="text-center text-gray-500 mb-8 font-bold text-sm leading-relaxed">{currentStep.subtitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>}
              {currentStep.type === 'info' ? (
                <div className="space-y-6 flex-1 flex flex-col items-center pb-12"><CTAPrompt /><ActionButton className="mb-2" /><HighFidelityComparison /><BenefitsList /><TrustBadges /><ActionButton className="mb-4" text="Finalizar Avaliação" /><FooterCopyright /></div>
              ) : (
                <div className="flex flex-col gap-4 pb-10">
                  <div className={`grid gap-4 ${currentStep.gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {currentStep.options?.map((option) => {
                      const isSelected = currentStep.type === 'checkbox' ? ((formData[currentStep.id] as string[]) || []).includes(option.id) : formData[currentStep.id] === option.id;
                      return (
                        <button key={option.id} onClick={() => handleSelect(option.id)} className={`relative p-6 rounded-[2.5rem] text-left transition-all duration-300 border-2 shadow-sm ${isSelected ? 'bg-[#EFF6FF] scale-[1.02] shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`} style={{ borderColor: isSelected ? THEME.primary : '#F3F4F6' }}>
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${isSelected ? '' : 'border-gray-200 bg-white'}`} style={{ background: isSelected ? THEME.brandGradient : 'white', borderColor: isSelected ? THEME.primary : '#E5E7EB' }}>{isSelected && <CheckCircle2 size={18} color="white" strokeWidth={3} />}</div>
                            <span className={`text-base font-black leading-snug transition-colors ${isSelected ? 'text-[#0B0B0B]' : 'text-gray-600'}`}>{option.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md z-50 border-t border-gray-50 pb-safe">
        {(currentStep.type === 'checkbox') && (
          <div className="p-4 pt-2">
             <button onClick={handleNext} disabled={!isStepValid()} className="w-full py-5 rounded-[2rem] text-white text-lg font-black shadow-2xl transition-all active:scale-95 disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-2" style={{ background: THEME.brandGradient }}>Continuar</button>
          </div>
        )}
        <footer className="p-5 flex justify-between items-center px-10">
          <button onClick={handleBack} disabled={currentStepIndex === 0} className="w-10 h-10 flex items-center justify-center text-gray-900 disabled:opacity-20 active:scale-90 transition-all"><ChevronLeft size={28} /></button>
          <div className="flex gap-2 items-center">{STEPS.map((s, idx) => <div key={idx} className={`rounded-full transition-all duration-300 ${idx === currentStepIndex ? 'w-6 h-1.5' : 'w-1.5 h-1.5 bg-gray-200'}`} style={{ backgroundColor: idx === currentStepIndex ? THEME.primary : undefined }} />)}</div>
          <button onClick={() => { if(window.confirm('Reiniciar?')) handleReset(); }} className="w-10 h-10 flex items-center justify-center active:scale-90 transition-all"><RotateCcw size={22} className="text-gray-300" /></button>
        </footer>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes pulse-cta { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); } 70% { transform: scale(1.03); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); } }
        .animate-fade-in { animation: fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-pulse-cta { animation: pulse-cta 2s infinite cubic-bezier(0.4, 0, 0.6, 1); }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </div>
  );
};

export default App;
