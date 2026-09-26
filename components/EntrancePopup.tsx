import React, { useState, useRef } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { VideoTestimonialsCarousel } from './VideoTestimonialsCarousel';
import { Representante, REPRESENTANTE_PADRAO } from '../representantes';

interface EntrancePopupProps {
  isVisible: boolean;
  onAccept?: (name: string) => void;
  representante?: Representante;
}

interface DraggablePhotoRowProps {
  id: string;
  items: { src: string; alt: string }[];
  borderColorClass: string;
  objectFitClass?: string;
}

const DraggablePhotoRow: React.FC<DraggablePhotoRowProps> = ({
  id,
  items,
  borderColorClass,
  objectFitClass = 'object-contain',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || !containerRef.current) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStartRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const diff = x - startXRef.current;
    if (Math.abs(diff) > 4) {
      containerRef.current.scrollLeft = scrollLeftStartRef.current - diff;
    }
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
  };

  return (
    <div
      id={id}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      className="w-full overflow-x-auto no-scrollbar py-2 px-4 sm:px-6 cursor-grab active:cursor-grabbing flex gap-3 sm:gap-4 select-none"
      style={{
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-x pan-y',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`w-[44vw] min-w-[155px] max-w-[210px] h-56 sm:w-48 sm:h-64 shrink-0 rounded-2xl overflow-hidden border-2 ${borderColorClass} bg-slate-900 shadow-sm select-none transition-colors`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full h-full ${objectFitClass} pointer-events-none`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  );
};

/**
 * EntrancePopup Component
 * Version 5.6.0 - Added todobrasil.jpeg and "Após se cadastrar" caption with dynamic representatives support.
 */
export const EntrancePopup: React.FC<EntrancePopupProps> = ({ 
  isVisible, 
  representante = REPRESENTANTE_PADRAO 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  // Pega o link de cadastro do representante atual preservando parâmetros da URL
  const getCadastroLink = () => {
    let url = representante.linkCadastro || REPRESENTANTE_PADRAO.linkCadastro;

    if (typeof window !== 'undefined' && window.location.search) {
      const search = window.location.search;
      url += url.includes('?') ? `&${search.slice(1)}` : search;
    }

    return url;
  };

  const TESTIMONIAL_PHOTOS = [
    "https://res.cloudinary.com/dls9nwecf/image/upload/v1764148119/ft3_izcncc.jpg",
    "https://res.cloudinary.com/dls9nwecf/image/upload/v1764148119/ft1_qtchdi.jpg",
    "https://res.cloudinary.com/dls9nwecf/image/upload/v1764148119/ft4_ocxv2r.jpg",
    "https://res.cloudinary.com/dls9nwecf/image/upload/v1764148119/ft5_ex2c86.jpg",
    "https://res.cloudinary.com/dls9nwecf/image/upload/v1764148119/ft2_kirdkw.jpg"
  ];

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

  const chatItems = HERO_PHOTOS.map((src, idx) => ({ src, alt: `Chat ${idx + 1}` }));
  const photoItems = [...TESTIMONIAL_PHOTOS, ...TESTIMONIAL_PHOTOS].map((src, idx) => ({
    src,
    alt: `Associado ${idx + 1}`,
  }));

  const toggleVideoPopup = () => {
    setIsVideoPopupOpen(!isVideoPopupOpen);
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={scrollRef} 
      className="w-full bg-[#060713] text-slate-100 min-h-screen relative"
    >
      
      {/* BARRA DE ANÚNCIO FIXA NO TOPO - 100% ESTÁTICA E LEVE */}
      <div 
        id="announcement-bar"
        className="sticky top-0 z-40 w-full bg-[#b91c1c] text-white py-2.5 px-4 text-center font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-md"
      >
        <span>🔥 Oferta Relâmpago</span>
      </div>

      <div className="w-full">

        {/* SEÇÃO PRINCIPAL - Imagem do Título R2 */}
        <div className="w-full pb-0">
          <div className="w-full pt-8 md:pt-12 pb-2 px-6">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* IMAGEM DO TÍTULO PRINCIPAL (Cloudflare R2) - Prioridade Máxima */}
              <div className="mb-6">
                <img 
                  src="https://videos.suanetturbinada.com.br/federal.jpeg" 
                  alt="Tenha 100GB de Internet e ligações ilimitadas" 
                  style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                  loading="eager"
                  fetchPriority="high"
                  {...({ fetchpriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl border border-purple-500/20"
                />
              </div>

              {/* CARDS DE BENEFÍCIOS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 pb-6 max-w-3xl mx-auto">
                {[
                  "Cadastro sem consulta ao SPC/SERASA",
                  "Sem fidelidade",
                  "Sem comprovação de renda"
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-[#0d0f22] border border-purple-500/25 rounded-2xl shadow-sm"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-950/80 border border-purple-500/40 text-purple-300 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-purple-300" />
                    </div>
                    <p className="text-left text-slate-100 font-bold text-sm md:text-base leading-tight">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* E O MELHOR + IMAGEM FEDERALAPPS.JPG */}
              <div className="max-w-3xl mx-auto text-center space-y-4 pt-2 pb-6">
                <p className="text-xl md:text-2xl text-white font-black leading-snug tracking-wide uppercase">
                  E o melhor
                </p>
                <div className="flex justify-center">
                  <img 
                    src="https://videos.suanetturbinada.com.br/federalapps.jpg" 
                    alt="Aplicativos e Redes Sociais Ilimitados" 
                    style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="rounded-2xl border border-purple-500/20"
                  />
                </div>
              </div>

              {/* BLOCO: TEXTO E BOTÃO COM A IMAGEM FEDERALCELULAR.JPEG */}
              <div className="pt-2 pb-1 max-w-2xl mx-auto text-center space-y-6">
                <p className="text-lg md:text-2xl text-white font-black leading-snug tracking-tight">
                  Mais economia, mais internet, mais liberdade para você.
                </p>

                {/* IMAGEM FEDERALCELULAR.JPEG */}
                <div className="flex justify-center pt-2 pb-2">
                  <img 
                    src="https://videos.suanetturbinada.com.br/federalcelular.jpeg" 
                    alt="Federal Celular" 
                    style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="rounded-2xl border border-purple-500/20"
                  />
                </div>
                
                <div className="pt-2 pb-0">
                  <a 
                    href={getCadastroLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-hero-cta-blue"
                    className="w-full max-w-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-xl md:text-2xl py-6 px-8 rounded-2xl shadow-lg border border-purple-400/30 flex items-center justify-center gap-3 tracking-wider mx-auto uppercase hover:opacity-95 transition-all cursor-pointer block text-center"
                  >
                    QUERO MEU PLANO
                  </a>
                </div>

                {/* IMAGEM ABAIXO DE QUERO MEU PLANO: FEDERAL111.JPG */}
                <div className="flex justify-center pt-4 pb-2">
                  <img 
                    src="https://videos.suanetturbinada.com.br/federal111.jpg" 
                    alt="Federal Associados" 
                    style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="rounded-2xl border border-purple-500/20"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SEÇÃO CONHEÇA A FEDERAL ASSOCIADOS */}
        <div className="w-full pb-10">
          <div className="w-full pt-4 pb-8 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8">
                <div className="text-lg md:text-xl text-slate-200 font-semibold space-y-4 max-w-3xl mx-auto">
                  <p>Aqui, sua internet dura o mês inteiro.</p>
                  <p>Planos com benefícios exclusivos para você.</p>
                  <p>Internet móvel tanto para área urbana como rural.</p>
                  
                  <p className="text-white font-black text-xl md:text-2xl pt-2">
                    Por que confiar na Federal Associados?
                  </p>

                  {/* CARDS DE CREDIBILIDADE */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 pb-2 max-w-2xl mx-auto text-slate-100 font-bold">
                    <div className="bg-[#0d0f22] border border-purple-500/25 rounded-2xl p-4 shadow-sm flex items-center justify-center text-center">
                      +14 anos de atuação
                    </div>
                    <div className="bg-[#0d0f22] border border-indigo-500/25 rounded-2xl p-4 shadow-sm flex items-center justify-center text-center">
                      +100 mil brasileiros conectados
                    </div>
                    <div className="bg-[#0d0f22] border border-purple-500/25 rounded-2xl p-4 shadow-sm flex items-center justify-center text-center">
                      5 troféus de reconhecimento
                    </div>
                  </div>

                  <p className="pt-2 text-slate-300 font-medium">
                    A Federal Associados possui parceria com as grandes operadoras de internet do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEÇÃO CHIPS / OPERADORAS */}
          <div className="w-full max-w-4xl mx-auto mb-4 space-y-6 pt-6">
             <div className="text-center px-4 space-y-6">
                
                <div className="flex justify-center py-2">
                  <img 
                    src="https://videos.suanetturbinada.com.br/federal3.jpg" 
                    alt="Cobertura Operadoras" 
                    className="w-full max-w-2xl h-auto object-contain rounded-2xl border border-blue-500/20"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 text-center max-w-3xl mx-auto">
                  <p className="text-base md:text-xl text-slate-200 font-semibold leading-relaxed">
                    Ao se tornar um de nossos associados, você terá acesso à mesma cobertura das operadoras, porém terá acesso a um plano com condições muito mais vantajosas, pois o plano que você irá escolher será vinculado diretamente em nosso CNPJ.
                  </p>
                  <p className="text-lg md:text-2xl text-white font-bold leading-relaxed">
                    Escolha seu plano hoje mesmo e conecte-se a uma internet turbinada de verdade.
                  </p>
                  
                  {/* IMAGEM TODOBRASIL.JPEG */}
                  <div className="flex justify-center pt-4">
                    <img 
                      src="https://videos.suanetturbinada.com.br/todobrasil.jpeg" 
                      alt="Todo o Brasil" 
                      style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="rounded-2xl border border-indigo-500/30"
                    />
                  </div>

                  {/* LEGENDA: Após se cadastrar */}
                  <p className="text-lg md:text-2xl text-white font-bold leading-relaxed pt-2">
                    Após se cadastrar
                  </p>

                  {/* IMAGEM FEDERALCHIPS.JPG */}
                  <div className="flex justify-center pt-2">
                    <img 
                      src="https://videos.suanetturbinada.com.br/federalchips.jpg" 
                      alt="Ativação através de Chip físico ou eSIM" 
                      style={{ width: '100%', maxWidth: '700px', height: 'auto', display: 'block', margin: '0 auto' }} 
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="rounded-2xl border border-indigo-500/30"
                    />
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* ÁREA DOS CARROSSÉIS */}
        <div className="w-full bg-[#050611] border-y border-purple-900/30 py-10 px-0 relative">
           <div className="w-full space-y-8">
              
               <div className="w-full">
                  <div className="max-w-4xl mx-auto px-4 mb-3">
                    <p className="text-sm md:text-base font-bold text-purple-300">
                      Resultados e conversas reais no WhatsApp:
                    </p>
                  </div>
                  <DraggablePhotoRow
                    id="chats-carousel"
                    items={chatItems}
                    borderColorClass="border-purple-500/40 hover:border-purple-400"
                    objectFitClass="object-contain"
                  />
               </div>

               <div className="w-full">
                  <div className="max-w-4xl mx-auto px-4 mb-3">
                    <p className="text-sm md:text-base font-bold text-indigo-300">
                      Nossos associados por todo o Brasil:
                    </p>
                  </div>
                  <DraggablePhotoRow
                    id="photos-carousel"
                    items={photoItems}
                    borderColorClass="border-indigo-500/40 hover:border-indigo-400"
                    objectFitClass="object-cover"
                  />
               </div>

               <VideoTestimonialsCarousel />
           </div>
        </div>

        {/* BOTÃO FINAL DE CTA */}
        <div className="w-full bg-[#060713] py-14 px-6 text-center border-t border-purple-900/30 relative">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 space-y-3">
              <p className="text-2xl md:text-3xl text-white font-black leading-tight tracking-tight">
                Pronto para economizar e navegar muito mais?
              </p>
              <p className="text-base md:text-lg text-slate-300 font-semibold leading-relaxed">
                Clique no botão abaixo para escolher o plano ideal para você.
              </p>
            </div>
            
            <a 
              href={getCadastroLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-xl md:text-2xl py-6 rounded-2xl shadow-lg border border-purple-400/30 flex items-center justify-center gap-4 tracking-wider mx-auto uppercase hover:opacity-95 transition-all cursor-pointer block text-center"
            >
              Quero internet turbinada
            </a>
          </div>
        </div>
      </div>

      <WhatsAppButton representante={representante} />

      {/* Popup de Depoimentos em Vídeo (Full Screen) */}
      {isVideoPopupOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="absolute top-4 right-4 z-50">
            <button 
              onClick={toggleVideoPopup}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-1 w-full h-full">
            <iframe 
              src="https://depoimentos.erivaniacasanova.workers.dev" 
              className="w-full h-full border-none"
              title="Depoimentos em Vídeo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
