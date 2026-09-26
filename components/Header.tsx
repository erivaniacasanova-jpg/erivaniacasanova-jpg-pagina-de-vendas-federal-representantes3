import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { REGISTRATION_LINK } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Link da Nova Logo
  const LOGO_URL = "https://res.cloudinary.com/dme3tjzmd/image/upload/v1767351733/logoaguiabranca_phuzcb.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Federal Associados Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
               <span className="font-bold text-white text-lg tracking-tight uppercase">FEDERAL</span>
               <span className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">Associados</span>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href={REGISTRATION_LINK} variant="primary" className="!py-2.5 !px-6 text-sm">
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-4 shadow-2xl">
          <div className="flex flex-col gap-4">
            <Button href={REGISTRATION_LINK} variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
              Quero Economizar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};