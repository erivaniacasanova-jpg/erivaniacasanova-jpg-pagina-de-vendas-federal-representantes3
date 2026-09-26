
import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export const InternetClarificationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
              ESSA INTERNET E REALMENTE ILIMITADA MESMO?
            </h2>
            <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 mb-12">
            {[
              "Sim, nossos planos de internet ( com ligação ) é ilimitada sim! Funciona assim: quando você contrata, por exemplo, um plano de 80GB, ele te entrega essa franquia cheia, e se você chegar a bater esse teto o que é bem difícil, porque é muita internet você continua navegando normalmente, sem bloqueio e sem corte.",
              "A Federal Associados trabalha com planos em que, mesmo depois que você usa toda a sua franquia de internet, você não fica sem conexão. A federal apenas reduz a velocidade, deixando a navegação entre 10kbps e 128kbps.",
              "Essa redução existe para manter o controle justo de dados, evitando o uso incorreto do plano. Por exemplo: se uma pessoa contrata um plano de 80 GB feito para uso em celular, mas coloca o chip em um roteador Wi-Fi, o sistema identifica que o consumo está fora da finalidade original.",
              "Mesmo quando você usa toda a sua franquia, o chip não corta o acesso. Ele reduz a velocidade, mas continua funcionando.",
              "Isso é uma vantagem, porque você nunca fica desconectado, diferente de planos comuns que cortam a internet totalmente."
            ].map((text, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 font-bold text-lg md:text-xl">
                  {idx + 1}
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertTriangle className="w-24 h-24 text-yellow-600" />
            </div>
            
            <div className="relative z-10">
              <h3 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-yellow-700 mb-4 uppercase">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />
                BENEFÍCIOS SEM LIGAÇÃO
              </h3>
              
              <div className="bg-white rounded-xl p-4 md:p-6 mb-4 border border-yellow-200">
                <p className="text-yellow-900 font-medium leading-relaxed">
                  (SÃO LIMITADOS: A Internet é interrompida após o consumo total até a data de sua renovação)
                </p>
              </div>

              <div className="flex items-start gap-3 text-slate-600 text-sm md:text-base bg-slate-100/50 p-4 rounded-lg border border-slate-200">
                <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <p>
                  <span className="font-bold text-slate-900">OBS:</span> Os benefícios SEM LIGAÇÃO não permitem a utilização em aparelhos da marca Apple.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
