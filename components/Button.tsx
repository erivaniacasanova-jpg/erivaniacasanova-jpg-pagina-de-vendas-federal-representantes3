import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Representante, REPRESENTANTE_PADRAO } from '../representantes';

interface WhatsAppButtonProps {
  representante?: Representante;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  representante = REPRESENTANTE_PADRAO 
}) => {
  // Pega o WhatsApp do representante ou usa o padrão
  const whatsappNumber = representante.whatsapp || REPRESENTANTE_PADRAO.whatsapp;

  // Mensagem padronizada fixa para qualquer página
  const message = "Olá, estou vindo do site da Federal Associados. Você poderia me explicar como funciona essa internet?";

  // Correção aplicada aqui: usando wa.me em vez de api.whatsapp.com/send
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm ml-0 group-hover:ml-2">
        Fale Conosco
      </span>
    </a>
  );
};
