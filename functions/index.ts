interface Env {
  ASSETS: {
    fetch: typeof fetch;
  };
}

interface EventContext {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
}

export const onRequestGet = async (
  context: EventContext
): Promise<Response> => {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // ============================================================
  // 1. PRESERVA O ATENDIMENTO MARKDOWN EXISTENTE
  // ============================================================

  if (url.pathname === "/") {
    const acceptHeader = request.headers.get("accept") || "";

    if (acceptHeader.includes("text/markdown")) {
      const assetUrl = new URL("/llms.txt", request.url);
      const assetResponse = await env.ASSETS.fetch(
        assetUrl.toString()
      );

      if (assetResponse.ok) {
        const text = await assetResponse.text();

        return new Response(text, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
            "Link":
              '</llms.txt>; rel="alternate"; type="text/markdown"
          }
        });
      }
    }
  }

  // ============================================================
  // 2. ENTREGA A RESPOSTA ORIGINAL DA CLOUDFLARE
  // ============================================================

  const response = await next();

  // Não altera outras rotas, incluindo IDs de representantes.
  if (url.pathname !== "/") {
    return response;
  }

  // Não altera respostas com erro ou que não sejam HTML.
  const contentType =
    response.headers.get("content-type") || "";

  if (
    !response.ok ||
    !contentType.toLowerCase().includes("text/html")
  ) {
    return response;
  }

  // ============================================================
  // 3. IDENTIFICA AUTOMATICAMENTE O DOMÍNIO ACESSADO
  // ============================================================

  const dominio = url.hostname.toLowerCase();

  const dominiosPermitidos = [
    "suanetturbinada.com.br",
    "netfederalassociados.com.br"
  ];

  // Mantém a resposta original para qualquer outro domínio.
  if (!dominiosPermitidos.includes(dominio)) {
    return response;
  }

  const canonicalCorreto = `https://${dominio}/`;

  // ============================================================
  // 4. ALTERA SOMENTE A TAG CANONICAL NO HTML
  // ============================================================

  const htmlOriginal = await response.text();

  const canonicalOriginal =
    '<link rel="canonical" href="https://suanetturbinada.com.br/" />';

  const canonicalNovo =
    `<link rel="canonical" href="${canonicalCorreto}" />`;

  // Evita substituir outros trechos acidentalmente.
  if (!htmlOriginal.includes(canonicalOriginal)) {
    return new Response(htmlOriginal, response);
  }

  const htmlAtualizado = htmlOriginal.replace(
    canonicalOriginal,
    canonicalNovo
  );

  // ============================================================
  // 5. RETORNA O HTML COM O CANONICAL CORRETO
  // ============================================================

  const headers = new Headers(response.headers);

  // O corpo foi modificado; cabeçalhos dependentes do corpo
  // original não devem ser reutilizados.
  headers.delete("content-length");
  headers.delete("etag");
  headers.delete("content-encoding");

  return new Response(htmlAtualizado, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};
