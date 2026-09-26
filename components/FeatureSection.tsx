
import React from 'react';
import { FEATURES } from '../constants';

export const FeatureSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-32 bg-slate-50 relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-24">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Por que escolher a <span className="text-brand-600">Federal Associados</span>?
          </h2>
          <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto">
            Não vendemos apenas chips. Entregamos liberdade, economia e a garantia de estar sempre conectado com quem importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-16">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 md:p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 border border-slate-100 group-hover:border-brand-500/30">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
            Como conseguimos preços tão baixos?
          </h3>
          <p className="text-slate-700 text-base md:text-xl leading-relaxed">
            Utilizamos o poder de compra corporativo (CNPJ) para negociar condições especiais com as operadoras. 
            Adquirimos milhares de linhas mensalmente, o que reduz drasticamente o custo por giga.
            <br className="hidden md:block" />
            <span className="text-brand-600 font-bold block mt-4">Você não precisa ter CNPJ para aproveitar - basta apenas se associar!</span>
          </p>
        </div>
      </div>
    </section>
  );
};
