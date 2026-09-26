import React from 'react';
import { UserCheck, MessageCircle, Zap } from 'lucide-react';

export const SupportSection: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Suporte <span className="text-green-500">24h</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">
            Nosso atendimento humanizado está sempre disponível para resolver qualquer questão que você tiver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          
          <div className="bg-slate-950 p-6 md:p-12 rounded-3xl border border-slate-800 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6 md:mb-8">
              <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-brand-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Atendimento Humano</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Pessoas reais prontas para ajudar você a qualquer hora.
            </p>
          </div>

          <div className="bg-slate-950 p-6 md:p-12 rounded-3xl border border-slate-800 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6 md:mb-8">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Suporte via WhatsApp</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Canal direto e rápido para todas as suas necessidades. A resolução está a uma mensagem de distância.
            </p>
          </div>

          <div className="bg-slate-950 p-6 md:p-12 rounded-3xl border border-slate-800 text-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-6 md:mb-8">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Resolução Imediata</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Problemas resolvidos na primeira conversa, sem enrolação e sem transferências infinitas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};