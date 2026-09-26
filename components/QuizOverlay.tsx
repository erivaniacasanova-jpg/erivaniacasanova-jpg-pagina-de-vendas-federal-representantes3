import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Frown, Smartphone, Signal, X } from 'lucide-react';

interface QuizOverlayProps {
  onComplete: () => void;
}

export const QuizOverlay: React.FC<QuizOverlayProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  const totalSteps = 3;
  // A barra começa vazia (0) no passo 1.
  // Passo 2: 33%
  // Passo 3: 66%
  // Ao finalizar: 100% (mas o modal fecha)
  const progress = ((step - 1) / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final step logic - SEM LOADING, transição imediata
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 300); // Tempo curto apenas para o fade-out visual
    }
  };

  if (isExiting) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-4 transition-opacity duration-300 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
           <div 
             className="h-full bg-blue-600 transition-all duration-500 ease-out shadow-[0_0_10px_#2563eb]"
             style={{ width: `${progress}%` }}
           ></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/50">
          
          <div className="min-h-[280px] flex flex-col justify-center items-center text-center">
            
            {/* STEP 1 */}
            {step === 1 && (
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 relative">
                  {/* Ícone de Dados Móveis (Signal) com X */}
                  <Signal className="w-7 h-7 text-slate-500" />
                  <div className="absolute -bottom-2 -right-2 bg-slate-900 rounded-full p-1 border border-slate-800">
                      <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight text-center">
                  Cansado de sair na rua e ficar sem internet quando mais precisa dela?
                </h2>
                <button 
                  onClick={handleNext}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                >
                  Sim, estou cansado disso
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
                  <Frown className="w-7 h-7 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight text-center">
                  Você se sente humilhado ou frustrado por tá sempre pedindo a senha do Wi-Fi dos outros ao sair na rua?
                </h2>
                <button 
                  onClick={handleNext}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                >
                  Sim, me sinto exatamente assim
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="w-full flex flex-col items-center justify-center">
                 <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
                  <Smartphone className="w-7 h-7 text-blue-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight text-center">
                  Você gostaria de ter um plano de internet 4G/5G realmente ilimitado em seu celular?
                </h2>
                <button 
                  onClick={handleNext}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                >
                  Sim, gostaria muito
                  <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};