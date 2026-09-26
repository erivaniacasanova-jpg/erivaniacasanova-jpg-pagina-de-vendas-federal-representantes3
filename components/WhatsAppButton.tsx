import React, { useEffect, useState } from 'react';
import { REPRESENTANTES, REPRESENTANTE_PADRAO, Representante } from '../representantes';

interface WhatsAppButtonProps {
  representante?: Representante;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ representante: propRepresentante }) => {
  const [representante, setRepresentante] = useState<Representante>(propRepresentante || REPRESENTANTE_PADRAO);

  useEffect(() => {
    if (propRepresentante) {
      setRepresentante(propRepresentante);
      return;
    }
    const pathId = window.location.pathname.replace('/', '').trim();
    if (pathId && REPRESENTANTES[pathId]) {
      setRepresentante(REPRESENTANTES[pathId]);
    }
  }, [propRepresentante]);

  const mensagemTexto = "Olá, estou vindo do site da Federal Associados. Você poderia me explicar como funciona essa internet?";
  const msg = encodeURIComponent(mensagemTexto);
  
  const numeroLimpo = representante.whatsapp.replace(/\D/g, '');
  const urlWa = `https://wa.me/${numeroLimpo}?text=${msg}`;

  return (
    <a
      href={urlWa}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 flex items-center justify-center drop-shadow-2xl"
      aria-label="Contato WhatsApp"
    >
      <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
        {/* Fundo Verde Oficial */}
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        
        {/* Ícone do WhatsApp Vazado em Branco */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.14 8.86C21.11 6.82 18.4 5.7 15.5 5.7c-5.79 0-10.5 4.71-10.5 10.5 0 1.85.48 3.65 1.4 5.24L5 27l5.72-1.49c1.54.84 3.28 1.29 5.06 1.29h.01c5.79 0 10.5-4.71 10.5-10.5 0-2.81-1.09-5.45-3.15-7.45zM15.79 24.9h-.01c-1.58 0-3.13-.43-4.48-1.24l-.32-.19-3.32.87.89-3.24-.21-.33c-.88-1.4-1.35-3.03-1.35-4.69 0-4.86 3.95-8.81 8.81-8.81 2.35 0 4.56.92 6.22 2.58 1.66 1.66 2.57 3.87 2.57 6.22 0 4.86-3.95 8.81-8.8 8.81zm4.83-6.61c-.26-.13-1.55-.77-1.79-.86-.24-.09-.42-.13-.59.13-.17.26-.68.86-.83 1.04-.15.18-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.3-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.47.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.06-.13-.59-1.42-.81-1.95-.21-.52-.43-.45-.59-.46l-.5-.01c-.17 0-.45.06-.69.32-.24.26-.92.9-0.92 2.19 0 1.29.94 2.54 1.07 2.71.13.17 1.85 2.82 4.48 3.95.63.27 1.12.43 1.5.55.63.2 1.21.17 1.66.10.51-.08 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.51-.31z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
