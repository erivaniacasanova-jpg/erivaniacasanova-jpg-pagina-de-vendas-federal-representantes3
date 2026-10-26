export interface Representante {
  id: string
  nome: string
  whatsapp: string
  linkCadastro: string
}

export const REPRESENTANTES: Record<string, Representante> = {
  "110956": {
    id: "110956",
    nome: "Francisco Eliedisom Dos Santos",
    whatsapp: "5584998410103",
    linkCadastro: "https://associarse.com.br"
  },
  "135302": {
    id: "135302",
    nome: "Antonia Erivania Delmiro Jacinto",
    whatsapp: "558498410187",
    linkCadastro: "https://associarse.com.br/135302"
  },
  "114874": {
    id: "114874",
    nome: "Renato De Fátima De Oliveira",
    whatsapp: "5524999827813",
    linkCadastro: "https://associarse.com.br/114874"
   },
    "88389": {
    id: "88389",
    nome: "Wagner Cruz Vieira",
    whatsapp: "5521996098857",
    linkCadastro: "https://wagner.associarse.com.br"
  },
  "96016": {
    id: "96016",
    nome: "Alex Lourenço",
    whatsapp: "5524981472604",
    linkCadastro: "https://associarse.com.br/96016"
  },
  "191651": {
    id: "191651",
    nome: "Gilmar Goncalves De Paula",
    whatsapp: "5522998914547",
    linkCadastro: "https://associarse.com.br/191651"
  }
};

// Define o representante padrão que aparece quando acessam a raiz do site (ex: /)
export const REPRESENTANTE_PADRAO: Representante = REPRESENTANTES["110956"];
