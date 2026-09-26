import React, { useState, useEffect } from 'react';
import { ArrowRight, Wifi, ShieldAlert, DollarSign, MapPin, Zap, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface QuizModeProps {
  onComplete: (results: any) => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'usage',
      title: "Como você avalia sua internet atual?",
      description: "Seja sincero(a), como é sua experiência hoje?",
      options: [
        { label: "Acaba rápido demais (não dura o mês)", value: "low_data", icon: ShieldAlert },
        { label: "É lenta em horários de pico", value: "slow", icon: Zap },
        { label: "O sinal some quando saio de casa", value: "no_signal", icon: MapPin },
        { label: "Pago muito caro pelo que recebo", value: "expensive", icon: DollarSign }
      ]
    },
    {
      id: 'location',
      title: "Onde você mais precisa de conexão?",
      description: "A Federal tem tecnologia para todos os ambientes.",
      options: [
        { label: "Na cidade (uso no celular o dia todo)", value: "urban", icon: Zap },
        { label: "Na área rural (preciso de sinal forte)", value: "rural", icon: MapPin },
        { label: "Em viagens (estou sempre em movimento)", value: "travel", icon: Wifi },
        { label: "Em casa (substituir o Wi-Fi fixo)", value: "home", icon: CheckCircle2 }
      ]
    },
    {
      id: 'restriction',
      title: "Você possui alguma restrição no CPF?",
      description: "Não se preocupe, não fazemos consulta ao SPC/Serasa.",
      options: [
        { label: "Sim, possuo restrições", value: "yes", icon: ShieldAlert },
        { label: "Não possuo restrições", value: "no", icon: CheckCircle2 },
        { label: "Prefiro não informar", value: "skip", icon: Sparkles }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      startCalculation();
    }
  };

  const startCalculation = () => {
    setIsCalculating(true);
    // Simula processamento de IA/Análise
    setTimeout(() => {
      onComplete(answers);
    }, 3000);
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-8">
           <div className="absolute inset-0 bg-brand-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
           <Loader2 className="w-16 h-16 text-brand-500 animate-spin relative z-10" />
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4 animate-pulse">
          ANALISANDO SEU PERFIL...
        </h2>
        <div className="space-y-2 max-w-sm w-full">
           <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 animate-[shimmer_2s_infinite_linear]" style={{ width: '100%' }}></div>
           </div>
           <div className="flex flex-col gap-1">
              <p className="text-slate-400 text-sm animate-bounce">Verificando cobertura regional...</p>
              <p className="text-slate-500 text-xs">Liberando bônus de associado VIP...</p>
           </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-8">
      {/* Decoração de Fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Header do Quiz */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-4">
             <Sparkles className="w-4 h-4 text-brand-400" />
             <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">Diagnóstico Federal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
            Descubra seu Plano <span className="text-brand-400">Ideal</span>
          </h1>
          <p className="text-slate-400">Responda 3 perguntas rápidas para liberar sua oferta.</p>
        </div>

        {/* Barra de Progresso */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
             <span className="text-xs font-bold text-brand-500 uppercase">Progresso</span>
             <span className="text-xs font-bold text-slate-500">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
             <div 
               className="h-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 ease-out"
               style={{ width: `${progress}%` }}
             ></div>
          </div>
        </div>

        {/* Card da Pergunta */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-6 md:p-10 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{currentQuestion.title}</h2>
            <p className="text-slate-400 text-sm md:text-base">{currentQuestion.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-brand-500/50 hover:bg-slate-900 transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500/10 transition-all">
                  <option.icon className="w-6 h-6 text-brand-400" />
                </div>
                <div className="flex-1">
                  <span className="block font-bold text-white text-sm md:text-base">{option.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-700 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer Security */}
        <div className="mt-8 flex items-center justify-center gap-6 opacity-50 grayscale">
           <img src="https://logodownload.org/wp-content/uploads/2014/10/amazon-logo-2.png" alt="Trusted" className="h-4 object-contain" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-3 object-contain" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="Mastercard" className="h-5 object-contain" />
        </div>
      </div>
    </div>
  );
};