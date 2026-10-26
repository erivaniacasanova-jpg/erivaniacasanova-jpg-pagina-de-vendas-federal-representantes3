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
    whatsapp: "5584981321396",
    linkCadastro: "https://associarse.com.br"
  },
  "135302": {
    id: "135302",
    nome: "Antonia Erivania Delmiro Jacinto",
    whatsapp: "558498410187",
    linkCadastro: "https://associarse.com.br/135302"
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
