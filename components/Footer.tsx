
import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 md:pt-24 pb-28 md:pb-12 text-slate-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          
          <div className="flex flex-col gap-4">
             <h3 className="text-slate-900 font-bold text-2xl mb-2">Federal Associados</h3>
             <p className="text-slate-600 text-base leading-relaxed max-w-sm">
               Democratizando o acesso à internet de qualidade, com planos acessíveis, liberdade total e benefícios exclusivos.
             </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="mt-1 p-1.5 bg-white rounded-lg border border-slate-200 shrink-0">
                   <Phone className="w-4 h-4 text-brand-600" />
                </div>
                <span className="flex-1">Central de Atendimento 24h</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="mt-1 p-1.5 bg-white rounded-lg border border-slate-200 shrink-0">
                   <Mail className="w-4 h-4 text-brand-600" />
                </div>
                <span className="flex-1">contato@federalassociados.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="mt-1 p-1.5 bg-white rounded-lg border border-slate-200 shrink-0">
                   <MapPin className="w-4 h-4 text-brand-600" />
                </div>
                <span className="flex-1">Avenida Contorno, 3790, Goianésia-GO</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-slate-900 font-bold text-lg mb-6 relative inline-block">
               Horário de Atendimento
               <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-600 rounded-full"></span>
             </h4>
             <div className="flex items-start gap-3 text-slate-600 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <Clock className="w-6 h-6 text-brand-600 shrink-0" />
                <p className="leading-relaxed">
                  Nossa central de suporte está disponível 24 horas por dia, 7 dias por semana.
                </p>
             </div>
          </div>

        </div>
        
        <div className="text-center border-t border-slate-200 pt-8 md:pt-10">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Federal Associados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
