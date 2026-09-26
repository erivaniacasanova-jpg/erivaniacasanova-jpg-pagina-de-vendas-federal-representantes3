import { Wifi, ShieldCheck, Smartphone, Zap, MapPin, Headphones } from 'lucide-react';
import { Feature, FAQItem, Plan, Testimonial } from './types';

// Link para Cadastro (Atualizado com novo link)
export const REGISTRATION_LINK = "https://associarse.com.br";

// Link Unificado para WhatsApp (Atualizado com o link direto da API para exibir a foto e o nome)
const PHONE_NUMBER = "558481321396";
const WELCOME_MESSAGE = encodeURIComponent("Olá, estou vindo do site da Federal Associados. Você poderia me explicar como funciona essa internet?");
export const WHATSAPP_LINK_SALES = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${WELCOME_MESSAGE}`;
export const WHATSAPP_LINK_SUPPORT = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${WELCOME_MESSAGE}`;

export const FEATURES: Feature[] = [
  {
    icon: Wifi,
    title: "Internet de Qualidade",
    description: "Conexão estável e de alta velocidade 4G/5G."
  },
  {
    icon: Smartphone,
    title: "Apps Ilimitados",
    description: "Use aplicativos sem descontar da sua franquia de dados."
  },
  {
    icon: MapPin,
    title: "Maior Cobertura",
    description: "Sinal presente em todo o território nacional."
  },
  {
    icon: ShieldCheck,
    title: "Sem Fidelidade",
    description: "Cancele quando quiser, sem multas e sem letras miúdas."
  },
  {
    icon: Zap,
    title: "Ativação Rápida",
    description: "Processo 100% digital. Receba seu chip em casa ou ative o eSIM na hora."
  },
  {
    icon: Headphones,
    title: "Suporte Humanizado",
    description: "Atendimento rápido via WhatsApp com especialistas preparados para te atender."
  }
];

export const PLANS: Plan[] = [
  {
    id: 'plan-basic',
    name: 'Plano Controle',
    dataAmount: '40GB',
    price: '39,90',
    period: '/mês',
    features: [
      'WhatsApp Ilimitado',
      'Waze Ilimitado',
      'Ligações Ilimitadas',
      'Sem Fidelidade',
      'Cobertura Nacional'
    ],
    isBestValue: false,
    url: REGISTRATION_LINK
  },
  {
    id: 'plan-pro',
    name: 'Plano Executivo',
    dataAmount: '100GB',
    price: '59,90',
    period: '/mês',
    features: [
      'WhatsApp Ilimitado',
      'Waze Ilimitado',
      'Ligações Ilimitadas',
      'Sem Fidelidade',
      'Prioridade na Rede',
      'Roaming Nacional Grátis'
    ],
    isBestValue: true,
    url: REGISTRATION_LINK
  },
  {
    id: 'plan-ultra',
    name: 'Plano Black',
    dataAmount: '300GB',
    price: '89,90',
    period: '/mês',
    features: [
      'WhatsApp Ilimitado',
      'Waze Ilimitado',
      'Ligações Ilimitadas',
      'Sem Fidelidade',
      'Máxima Velocidade 5G',
      'Ideal para Roteador'
    ],
    isBestValue: false,
    url: REGISTRATION_LINK
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Eu posso ativar o plano no meu número atual?",
    answer: "Não, você recebe um chip novo com o plano da Federal Associados. O seu número atual permanecerá inalterado."
  },
  {
    question: "Preciso cancelar minha linha atual?",
    answer: "Não, você pode usar dois chips no mesmo aparelho (se ele tiver suporte a Dual SIM) ou simplesmente manter seu número atual em outro dispositivo."
  },
  {
    question: "Qual a diferença do chip Federal Associados para operadoras?",
    answer: "É um plano corporativo exclusivo, ilimitado, sem pegadinhas, sem surpresas. Oferecemos liberdade total sem fidelidade, sem consulta ao SPC/SERASA, e com diversos benefícios exclusivos que as operadoras tradicionais não oferecem."
  },
  {
    question: "Como funciona a entrega do chip?",
    answer: "Após a confirmação da sua associação, enviaremos o chip para o endereço informado, com frete grátis para todo o Brasil. O prazo médio de entrega é de 5 a 10 dias úteis, dependendo da sua localização."
  },
  {
    question: "Existe alguma fidelidade nos planos?",
    answer: "Não! Uma das nossas maiores vantagens é a liberdade total. Você pode cancelar seu plano a qualquer momento, sem multas ou taxas adicionais."
  },
  {
    question: "Como faço para me tornar um associado?",
    answer: "Basta escolher um dos nossos planos disponíveis, preencher seus dados e efetuar o pagamento da primeira mensalidade. Após a confirmação, seu chip será enviado para o endereço informado."
  },
  {
    question: "Quais documentos são necessários para adesão?",
    answer: "Apenas seus documentos pessoais básicos (RG e CPF). Não realizamos consulta ao SPC/SERASA, tornando nossos planos acessíveis para todos, independentemente do histórico financeiro."
  },
  {
    question: "Como funciona o suporte 24h?",
    answer: "Temos uma central de atendimento via WhatsApp disponível 24 horas por dia, 7 dias por semana. Nossos atendentes estão sempre prontos para resolver qualquer dúvida ou problema com seu plano."
  },
  {
    question: "E se não funcionar na minha região?",
    answer: "Trabalhamos com as 3 maiores operadoras do Brasil (Vivo, Tim e Claro). Nossa cobertura alcança 99,8% do território nacional. Se por algum motivo não funcionar na sua região, você tem 7 dias de garantia total para cancelar e receber 100% do seu dinheiro de volta."
  },
  {
    question: "Como sei que não é golpe?",
    answer: "Somos uma empresa com mais de 14 anos no mercado, CNPJ ativo, sede física própria, mais de 5 escritórios pelo Brasil e 100.000+ associados satisfeitos. Você pode verificar nossa empresa no site da Receita Federal e temos garantia de 7 dias para devolução total do valor."
  },
  {
    question: "Posso usar em qualquer aparelho?",
    answer: "Sim! Nosso chip funciona em qualquer celular desbloqueado, tablets, modems móveis e roteadores 4G/5G. Compatível com Android, iPhone e todos os dispositivos que aceitem chip de operadora."
  },
  {
    question: "Quanto tempo demora para ativar?",
    answer: "Para planos Vivo: ativação imediata (você compra um chip lacrado e solicitamos a ativação na hora). Para Tim e Claro: enviamos seu chip em até 24h e você recebe em 5-10 dias úteis com código de rastreio."
  },
  {
    question: "Posso cancelar quando quiser mesmo?",
    answer: "Absolutamente! Não temos fidelidade nem multas. Você pode cancelar a qualquer momento sem pagar nada extra. Somos transparentes: sua liberdade é garantida por contrato."
  },
  {
    question: "E se eu não souber usar ou configurar?",
    answer: "Nosso suporte 24h te ajuda em tudo! Desde a configuração inicial até qualquer dúvida que surgir. Temos tutoriais em vídeo e atendimento personalizado via WhatsApp para garantir que você use seu plano sem problemas."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria Santos",
    role: "São Paulo - SP",
    content: "Melhor decisão que tomei! Saí da Vivo que cobrava R$ 89,90 por 20GB e agora tenho internet ilimitada por R$ 69,90. O atendimento é excelente e nunca fica sem sinal.",
    avatar: "MS"
  },
  {
    name: "João Silva",
    role: "Rio de Janeiro - RJ",
    content: "Estava desconfiado no início, mas depois de 6 meses posso dizer: é real! Internet rápida, ligações ilimitadas e ainda economizo R$ 40 por mês. Recomendo demais!",
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    role: "Belo Horizonte - MG",
    content: "O que mais me impressionou foi a transparência. Sem pegadinhas, sem taxas escondidas. Pago exatamente o que foi prometido e o serviço é impecável.",
    avatar: "AC"
  },
  {
    name: "Carlos Oliveira",
    role: "Salvador - BA",
    content: "Trabalho viajando pelo Brasil e a cobertura é excelente em todos os lugares que vou. Nunca mais vou voltar para as operadoras tradicionais!",
    avatar: "CO"
  },
  {
    name: "Fernanda Lima",
    role: "Brasília - DF",
    content: "Estava com o nome sujo e não conseguia contratar plano em lugar nenhum. Aqui foi super fácil, sem consulta ao SPC. Mudou minha vida!",
    avatar: "FL"
  },
  {
    name: "Roberto Alves",
    role: "Fortaleza - CE",
    content: "O suporte 24h é real! Tive um problema às 2h da manhã e fui atendido na hora. Resolveram tudo rapidinho. Isso é atendimento de verdade!",
    avatar: "RA"
  }
];

export const VIDEO_TESTIMONIALS = [
  "https://dylbaqmoglbzfuctwlci.supabase.co/storage/v1/object/public/depoimentos/1.mp4",
  "https://dylbaqmoglbzfuctwlci.supabase.co/storage/v1/object/public/depoimentos/2.mp4",
  "https://dylbaqmoglbzfuctwlci.supabase.co/storage/v1/object/public/depoimentos/3.mp4",
  "https://dylbaqmoglbzfuctwlci.supabase.co/storage/v1/object/public/depoimentos/4.mp4"
];
