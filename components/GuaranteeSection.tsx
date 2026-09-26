import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="shrink-0">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center border border-brand-500/30 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
              <ShieldCheck className="w-12 h-12 md:w-20 md:h-20 text-brand-400" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Garantia Total de Satisfação</h3>
            <p className="text-slate-300 leading-relaxed text-base md:text-xl">
              Estamos tão confiantes na qualidade da nossa conexão que oferecemos garantia total. 
              Se você não estiver satisfeito com a cobertura ou velocidade nos primeiros 7 dias, 
              nós devolvemos o seu dinheiro. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};