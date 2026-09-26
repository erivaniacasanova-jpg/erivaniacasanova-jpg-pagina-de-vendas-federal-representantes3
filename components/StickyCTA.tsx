import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { REGISTRATION_LINK } from '../constants';

/**
 * StickyCTA Component
 * Version 3.47.81 - Updated price to R$ 69,90.
 */
export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <div className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-4 shadow-2xl shadow-black">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-0.5">Oferta Exclusiva</p>
            <p className="text-white font-bold text-sm">Planos a partir de R$ 69,90</p>
          </div>
          <Button href={REGISTRATION_LINK} variant="primary" className="!py-3 !px-4 text-sm whitespace-nowrap shadow-none">
            Quero o Meu
          </Button>
        </div>
      </div>
    </div>
  );
};
