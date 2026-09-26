
import React, { useState } from 'react';
import { Button } from './Button';
import { Gift, Ticket, Wifi, UserX, ShieldCheck, Plus, Users, DollarSign, MessageCircle } from 'lucide-react';
import { REGISTRATION_LINK } from '../constants';

interface HeroProps {
  userName?: string;
}

// Versão 3.47.41 - Removed frustration image as requested.
export const Hero: React.FC<HeroProps> = ({ userName }) => {
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  
  const HERO_PHOTOS = [
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.48_70220e49_fgpeel.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.48_37c5f838_aagilm.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.48_a4efd1dd_uwmikh.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.46_611df844_tua7cc.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.47_5faec697_nizkm3.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.47_d5e6fb5f_rsvrfj.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.47_7120015c_nps3oy.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321619/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.47_00664a2e_zuvilq.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321620/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.47_b3394148_yvxkjn.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321620/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.48_bdfc30a0_obbmqw.jpg",
    "https://res.cloudinary.com/dkn2uhqwy/image/upload/v1764321620/Imagem_do_WhatsApp_de_2025-11-28_%C3%A0_s_06.06.49_eb20c866_ybugp8.jpg"
  ];

  const carouselPhotos = [...HERO_PHOTOS, ...HERO_PHOTOS];

  return (
    <section className="relative pt-6 pb-4 md:pt-12 md:pb-8 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-8 leading-[1.2] whitespace-normal">
            Então, {userName && (
              <span className="text-brand-600 inline-block animate-[fadeIn_1s_ease-out_forwards]">
                {userName},
              </span>
            )} clique no botão abaixo e realize seu cadastro agora mesmo
          </h1>

          <div 
            className="w-full overflow-hidden mb-8 -mx-4 md:mx-0 cursor-pointer"
            onClick={() => setIsCarouselPaused(!isCarouselPaused)}
          >
             <div 
               className="flex w-max animate-infinite-scroll"
               style={{ animationPlayState: isCarouselPaused ? 'paused' : 'running' }}
             >
                {carouselPhotos.map((src, idx) => (
                   <div key={idx} className="mx-3 md:mx-4 w-60 h-80 md:w-72 md:h-96 shrink-0 rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-xl">
                      <img src={src} alt={`Benefício ${idx}`} className="w-full h-full object-contain" />
                   </div>
                ))}
             </div>
          </div>

          <p className="text-xl md:text-3xl font-black text-slate-900 mb-10 max-w-4xl mx-auto leading-tight">
            E vem navegar o mês inteiro sem preocupações com a internet turbinada e ilimitada da Federal Associados!
          </p>

          <div className="flex justify-center mb-16 w-full">
            <Button 
              href={REGISTRATION_LINK} 
              variant="primary" 
              icon 
              trackingName="clicou_cta_topo_hero"
              className="w-full sm:w-auto text-base md:text-lg py-4 md:py-5 px-6 md:px-10 hover:scale-105 shadow-xl shadow-brand-500/20"
            >
              REALIZAR CADASTRO
            </Button>
          </div>

          <p className="text-base md:text-xl text-slate-600 mb-10 max-w-full mx-auto leading-relaxed">
            Aqui na Federal Associados você tem um plano de internet com benefícios exclusivos. Veja alguns deles
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-10 text-left shadow-xl max-w-4xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-slate-700">
                <div className="flex items-start gap-3">
                   <Wifi className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">INTERNET ILIMITADA:</strong> Conexão 4G/5G estável.</span>
                </div>
                <div className="flex items-start gap-3">
                   <UserX className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">SEM CONSULTA SPC/SERASA:</strong> Aprovação imediata.</span>
                </div>
                <div className="flex items-start gap-3">
                   <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">SEM FIDELIDADE:</strong> Cancele quando quiser.</span>
                </div>
                <div className="flex items-start gap-3">
                   <Gift className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">PRESENTE MENSAL:</strong> Perfume grátis todo mês.</span>
                </div>
                <div className="flex items-start gap-3">
                   <Ticket className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">CINEMA GRÁTIS:</strong> 1 ingresso por mês.</span>
                </div>
                <div className="flex items-start gap-3">
                   <Users className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">CLUBE DE DESCONTOS:</strong> +30.000 parceiros.</span>
                </div>
                <div className="flex items-start gap-3">
                   <DollarSign className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">PROGRAMA PBI:</strong> Ganhe indicando amigos.</span>
                </div>
                <div className="flex items-start gap-3">
                   <MessageCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                   <span className="text-sm md:text-base"><strong className="text-brand-600">SUPORTE VIP:</strong> Atendimento humano via WhatsApp.</span>
                </div>
                <div className="flex items-start gap-3 md:col-span-2 justify-center pt-2">
                   <Plus className="w-5 h-5 text-brand-600 mt-0.5" />
                   <span className="text-brand-600 font-bold italic">E muito mais.</span>
                </div>
             </div>
          </div>

          <div className="flex justify-center mb-16 w-full">
            <Button 
              href="#planos" 
              variant="primary" 
              icon 
              trackingName="clicou_ver_planos_hero"
              className="w-full sm:w-auto text-base md:text-lg py-4 md:py-5 px-6 md:px-10 shadow-xl shadow-brand-500/20"
            >
              Ver Planos Disponíveis
            </Button>
          </div>

          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-2xl text-slate-900 font-semibold max-w-4xl mx-auto leading-snug">
              Internet móvel ou Rural você encontra aqui.
            </p>
            <div className="flex flex-col items-center gap-2">
               <div className="text-sm md:text-base font-black text-slate-900 bg-slate-50 border border-slate-200 px-6 py-2 rounded-xl inline-block shadow-md">
                 <span className="text-brand-600">Chip Físico</span> <span className="text-slate-400 text-xs mx-2 font-normal">ou</span> <span className="text-brand-600">Chip Virtual</span>
               </div>
               <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Chega de sofrer com internet ruim</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
