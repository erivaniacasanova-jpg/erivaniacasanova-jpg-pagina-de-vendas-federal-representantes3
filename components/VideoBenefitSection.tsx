
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { REGISTRATION_LINK } from '../constants';

export const VideoBenefitSection: React.FC = () => {
  const benefits = [
    "MAIS GIGAS PARA USAR À VONTADE",
    "LIGAÇÕES ILIMITADAS PARA TODO O BRASIL",
    "SEM FIDELIZAÇÃO, SEM MULTAS, SEM DOR DE CABEÇA",
    "ENVIO DO CHIP GRÁTIS PARA TODO O BRASIL",
    "SEM BUROCRACIA, ACESSÍVEL PARA QUALQUER HISTÓRICO FINANCEIRO"
  ];

  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Nossos Associados <span className="text-brand-600">Recebem:</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
              <ul className="space-y-6 md:space-y-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 md:gap-6 group">
                    <div className="mt-1 shrink-0 bg-brand-100 p-1 rounded-full group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-brand-600 group-hover:text-white" />
                    </div>
                    <p className="text-slate-800 font-bold text-lg md:text-2xl leading-snug">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 md:mt-12 flex justify-center">
              <Button href={REGISTRATION_LINK} variant="primary" icon className="w-full sm:w-auto text-lg md:text-2xl px-10 md:px-16 py-5 md:py-6 hover:scale-105 transition-transform duration-300 shadow-2xl shadow-brand-500/30">
                QUERO ESSES BENEFÍCIOS AGORA
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
