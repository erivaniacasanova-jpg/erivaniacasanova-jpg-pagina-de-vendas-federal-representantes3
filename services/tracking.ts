
/**
 * Serviço de Rastreamento Federal Associados - Cloudflare Native
 * O rastreamento agora ignora consultas via JS para evitar CORS e utiliza
 * os cabeçalhos injetados pelo Cloudflare (Cf-Connecting-Ip, Cf-Ipcountry, etc)
 * diretamente no coletor do Webhook para maior precisão e velocidade.
 */

const WEBHOOK_URL = 'https://webhook.fiqon.app/webhook/019c22b9-2665-720e-a1c9-f8ce622744ad/3e252bd1-b4b0-4669-ac8c-f07291e188ae';

/**
 * Dispara um evento para o webhook.
 * Os campos de IP, Localização e Operadora são "espelhados" no corpo do JSON
 * para que o coletor do Webhook possa preenchê-los usando os valores dos Headers.
 */
export const trackEvent = (actionName: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Captura tipo de conexão local (disponível no navegador)
  const conn = (navigator as any).connection || {};
  const connectionType = conn.effectiveType || 'wifi';

  // Payload simplificado: Os valores reais serão injetados pelo Webhook
  // a partir dos cabeçalhos Cf-Connecting-Ip, Cf-Ipcountry, Cf-Ipcity, etc.
  const payload = {
    timestamp: new Date().toISOString(),
    acao: actionName,
    // Espelhamento de campos para preenchimento via Header no Webhook
    ip: "detect_via_header",
    operadora: "detect_via_header",
    localizacao: "detect_via_header",
    tipo_conexao: connectionType,
    // Contexto de Navegação
    origem: {
      utm_source: urlParams.get('utm_source') || 'direto',
      utm_medium: urlParams.get('utm_medium') || 'nenhum',
      utm_campaign: urlParams.get('utm_campaign') || 'nenhuma'
    },
    url_pagina: window.location.href,
    user_agent: navigator.userAgent
  };

  // Disparo imediato e sem espera (Fire and Forget)
  // O uso de 'keepalive' garante o envio mesmo que o usuário mude de página.
  fetch(WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors', // Evita bloqueios de CORS ao disparar para domínios diferentes
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(() => {
    // Falha silenciosa para não interromper a navegação do usuário
  });
};
