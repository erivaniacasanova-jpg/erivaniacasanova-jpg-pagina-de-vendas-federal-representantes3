
import React from 'react';
import { REGISTRATION_LINK } from '../constants';
import { Button } from './Button';

export const PlanSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500/5 via-white to-white pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-8">
            Nossos Planos
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-xl">
            Escolha o plano ideal para você, sua família ou sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto items-start mb-16">
          <div className="flex flex-col items-center">
            <a 
              href={REGISTRATION_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 hover:border-brand-500/50 transition-all duration-300 shadow-2xl group"
            >
                <img 
                    src="https://res.cloudinary.com/dls9nwecf/image/upload/v1764015065/celular_uszop4.jpg" 
                    alt="Planos Chip Físico" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
            </a>
            <div className="mt-6 md:mt-8 w-full px-0 md:px-4">
               <Button href={REGISTRATION_LINK} variant="primary" fullWidth className="text-base md:text-lg py-4 md:py-5 shadow-xl shadow-brand-500/20">
                  Quero contratar agora
               </Button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <a 
              href={REGISTRATION_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 hover:border-brand-500/50 transition-all duration-300 shadow-2xl group"
            >
                <img 
                    src="https://res.cloudinary.com/dls9nwecf/image/upload/v1764015065/moldem_cl83gu.jpg" 
                    alt="Internet Rural" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
            </a>
            <div className="mt-6 md:mt-8 w-full px-0 md:px-4">
               <Button href={REGISTRATION_LINK} variant="primary" fullWidth className="text-base md:text-lg py-4 md:py-5 shadow-xl shadow-brand-500/20">
                  Quero contratar agora
               </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-slate-50 rounded-xl border border-slate-200">
             <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs md:text-sm text-slate-600 font-medium">Consultores online agora para te atender</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-100 pt-16 md:pt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Como funciona o cadastro?</h3>
            <p className="text-slate-600 text-lg">Siga estes passos simples para começar a economizar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
             {/* Passo 01 */}
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-500/30 transition-colors flex flex-col h-full">
                <span className="text-4xl font-black text-slate-200 mb-4 block">01</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Faça seu cadastro</h4>
                <p className="text-slate-600 text-sm">Escolha o plano ideal e faça seu cadastro em minutos.</p>
             </div>

             {/* Passo 02 */}
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-500/30 transition-colors flex flex-col h-full">
                <span className="text-4xl font-black text-slate-200 mb-4 block">02</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Pague a sua adesão</h4>
                <p className="text-slate-600 text-sm">Efetue o pagamento via PIX, boleto ou cartão.</p>
             </div>

             {/* Passo 03 */}
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-500/30 transition-colors flex flex-col h-full">
                <span className="text-4xl font-black text-slate-200 mb-4 block">03</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Receba seu chip</h4>
                <p className="text-slate-600 text-sm mb-4">Receba nosso chip exclusivo no conforto do seu endereço.</p>
                
                <div className="mt-auto bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                   <p className="text-slate-600 text-xs">
                     Ative via <span className="text-brand-600 font-bold">e-SIM</span> ou use chip pré-pago local.
                   </p>
                </div>
             </div>

             {/* Passo 04 */}
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-500/30 transition-colors flex flex-col h-full">
                <span className="text-4xl font-black text-slate-200 mb-4 block">04</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Comece a aproveitar</h4>
                <p className="text-slate-600 text-sm mb-6">Ative seu chip e comece a economizar imediatamente.</p>
                
                <div className="mt-auto">
                   <Button href={REGISTRATION_LINK} variant="primary" icon className="w-full py-2.5 text-sm shadow-lg shadow-brand-500/20">
                     QUERO O MEU
                   </Button>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
