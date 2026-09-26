import React from 'react';
import { Trophy, Users, Building, Calendar, MapPin, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-24">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Conheça a <span className="text-brand-400">Federal Associados</span>
          </h2>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-10 md:mb-16 max-w-4xl mx-auto">
            Somos a Federal Associados, uma empresa sólida com mais de 14 anos de mercado, 
            sede própria, mais de 5 escritórios pelo Brasil, 5 troféus como a melhor associação, 
            e uma base de mais de 100.000 associados satisfeitos.
            <br className="hidden md:block" /><br className="hidden md:block" />
            <span className="mt-4 block md:inline">Nosso objetivo é democratizar o acesso à internet de qualidade, com planos acessíveis, 
            liberdade total e benefícios exclusivos.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
            <div className="p-5 md:p-8 bg-slate-950 rounded-2xl md:rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-500 mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">5</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">Troféus de Melhor Associação</div>
            </div>
            <div className="p-5 md:p-8 bg-slate-950 rounded-2xl md:rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-500 mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">100k+</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">Associados Satisfeitos</div>
            </div>
            <div className="p-5 md:p-8 bg-slate-950 rounded-2xl md:rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
              <Building className="w-8 h-8 md:w-10 md:h-10 text-green-500 mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">5+</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">Escritórios no Brasil</div>
            </div>
            <div className="p-5 md:p-8 bg-slate-950 rounded-2xl md:rounded-3xl border border-slate-800 hover:border-brand-500/30 transition-colors">
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-purple-500 mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">14+</div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">Anos de Mercado</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20 text-left bg-slate-950/50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-800/50">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">Matriz</h4>
                <p className="text-slate-400 text-sm md:text-base">
                  Avenida Contorno, 3790<br />
                  Bairro Santa Clara, Goianésia-GO
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">Atendimento</h4>
                <p className="text-slate-400 text-sm md:text-base mb-1">Presença nacional com milhares de consultores</p>
                <p className="text-brand-400 text-sm md:text-base font-semibold">Suporte WhatsApp 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};