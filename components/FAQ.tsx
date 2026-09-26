
import React, { useState } from 'react';
import { FAQS, REGISTRATION_LINK } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Tire suas dúvidas sobre nossos planos e serviços.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl md:rounded-2xl transition-all duration-200 ${
                openIndex === index 
                  ? 'bg-slate-50 border-brand-500/50 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                className="w-full px-5 py-4 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-base md:text-xl pr-4 md:pr-8 ${openIndex === index ? 'text-brand-600' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-brand-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-4 md:pb-8' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-5 md:px-8">
                  <p className="text-slate-700 leading-relaxed text-sm md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center animate-fade-in-up">
          <Button 
            href={REGISTRATION_LINK} 
            variant="primary" 
            icon 
            className="w-full sm:w-auto text-base md:text-lg px-8 py-4 shadow-xl shadow-brand-500/30"
          >
            QUERO CONTRATAR AGORA
          </Button>
        </div>

      </div>
    </section>
  );
};
