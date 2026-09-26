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

export const onRequestGet = async (context: EventContext): Promise<Response> => {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Apenas a rota raiz "/" com header Accept contendo text/markdown
  if (url.pathname === "/") {
    const acceptHeader = request.headers.get("accept") || "";

    if (acceptHeader.includes("text/markdown")) {
      // Busca o asset estático /llms.txt internamente via binding oficial do Pages
      const assetUrl = new URL("/llms.txt", request.url);
      const assetResponse = await env.ASSETS.fetch(assetUrl.toString());

      if (assetResponse.ok) {
        const text = await assetResponse.text();
        return new Response(text, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
            "Link": '</llms.txt>; rel="alternate"; type="text/markdown"'
          }
        });
      }
    }
  }

  // Qualquer outra requisição ou requisição HTML normal prossegue para a aplicação estática
  return next();
};
