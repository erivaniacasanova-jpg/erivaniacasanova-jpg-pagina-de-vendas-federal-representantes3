
import React from 'react';
import { Shield, Check, Lock, FileCheck, Award, ThumbsUp } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPoints = [
    "CNPJ: 29.383.343/0001-64 - Empresa regularizada",
    "Sede própria com endereço físico verificável",
    "Certificação SSL para proteção de dados",
    "Garantia de 7 dias para devolução total",
    "Atendimento 24h com suporte especializado",
    "Transparência total em contratos e valores"
  ];

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
          
          <div className="w-full md:w-5/12">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 aspect-square md:aspect-[4/5] flex flex-col items-center justify-center p-6 md:p-10 text-center group shadow-xl">
              <Shield className="w-24 h-24 md:w-40 md:h-40 text-brand-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500" />
              <Lock className="w-12 h-12 md:w-20 md:h-20 text-brand-600 relative z-20 mb-4 md:mb-8" />
              
              <div className="relative z-20">
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Empresa Segura</h3>
                <p className="text-slate-500 text-sm md:text-base">Seus dados e sua conexão protegidos com os mais altos padrões de segurança do mercado.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 md:mb-8">
               <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
               <span className="text-xs md:text-sm font-bold text-green-600 uppercase tracking-wider">Compra 100% Segura</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-10">
              Segurança <span className="text-brand-600">Garantida</span>
            </h2>

            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {securityPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 md:mt-1 bg-brand-100 p-1 md:p-1.5 rounded-full">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-600" />
                  </div>
                  <span className="text-slate-700 text-base md:text-lg font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  <span className="text-sm md:text-base font-bold text-slate-900">Empresa Ativa</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                  <span className="text-sm md:text-base font-bold text-slate-900">Certificada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
