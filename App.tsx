import React, { useEffect, useState } from 'react';
import { EntrancePopup } from './components/EntrancePopup';
import { REPRESENTANTES, REPRESENTANTE_PADRAO, Representante } from './representantes';

/**
 * App Component
 * Version 5.8.0 - Added strict route validation for valid IDs vs Not Found.
 */
const App: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [representante, setRepresentante] = useState<Representante | null>(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);

  // Rebuild trigger for total cache invalidation
  const _forceRebuild = "v5.8.0_strict_routing_" + Date.now();

  useEffect(() => {
    // 1. Pega o valor digitado após a barra na URL (remove barras extras e espaços)
    const pathName = window.location.pathname.replace(/^\/+/g, '').toLowerCase().trim();

    if (!pathName) {
      // Se a URL estiver limpa (raiz), usa o representante padrão (Francisco)
      setRepresentante(REPRESENTANTE_PADRAO);
      setNaoEncontrado(false);
    } else if (REPRESENTANTES[pathName]) {
      // Se o ID digitado existir na lista, carrega os dados dele
      setRepresentante(REPRESENTANTES[pathName]);
      setNaoEncontrado(false);
    } else {
      // Se digitou algo na URL mas o ID NÃO existe, ativa a tela de erro
      setRepresentante(null);
      setNaoEncontrado(true);
    }

    // 2. Trata navegação por Hash na página
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAcceptEntrance = (name: string) => {
    setUserName(name);
    window.scrollTo(0, 0);
  };

  // Se o representante não foi encontrado, exibe a tela de erro estilizada igual ao associarse.com.br
  if (naoEncontrado) {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-xl rounded-xl shadow-sm border border-slate-100 p-12 text-center">
          <p className="text-red-600 text-lg md:text-xl font-medium">
            Representante não encontrado.
          </p>
        </div>
      </div>
    );
  }

  // Se ainda estiver carregando o estado inicial, evita piscar a tela
  if (!representante) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#060713] text-slate-100 selection:bg-purple-600 selection:text-white overflow-x-hidden font-sans antialiased">
      <EntrancePopup 
        isVisible={true} 
        onAccept={handleAcceptEntrance} 
        representante={representante}
      />
      {/* Cache bust: {_forceRebuild.slice(0, 10)} */}
    </div>
  );
};

export default App;
