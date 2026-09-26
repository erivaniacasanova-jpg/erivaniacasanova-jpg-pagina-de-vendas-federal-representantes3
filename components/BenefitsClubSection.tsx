
import React from 'react';
import { ShoppingBag, Tag, CreditCard, Smile, Wifi, Phone, MapPin, Film, Coins, Users, DollarSign, Repeat } from 'lucide-react';
import { Button } from './Button';
import { REGISTRATION_LINK } from '../constants';

// Versão 3.47.24 - Partners Image Update
export const BenefitsClubSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Se torne um associado",
      description: "Faça parte do nosso Clube e tenha acesso aos nossos benefícios.",
      icon: ShoppingBag
    },
    {
      number: "02",
      title: "Escolha",
      description: "São centenas de benefícios que você pode escolher e usar quantas vezes quiser.",
      icon: Tag
    },
    {
      number: "03",
      title: "Apresente-se",
      description: "Depois de escolher o benefício que você quer, é só se apresentar no estabelecimento desejado e informar que você é um associado.",
      icon: CreditCard
    },
    {
      number: "04",
      title: "Economize",
      description: "Pronto! Você já está economizando. Use quantas vezes quiser e aproveite todos os seus benefícios.",
      icon: Smile
    }
  ];

  const partnersImage = "https://qkbeuebapuqnlpjgcvxb.supabase.co/storage/v1/object/public/imagem/parceiros.jpeg";

  const extraBenefits = [
    {
      title: "Mais internet para usar com sua operadora favorita",
      description: "Está cansado de fazer recargas toda semana, ou pagar caro em pouca internet? Quem é nosso associado possui mais giga na operadora favorita e tendo um custo bem menor!",
      icon: Wifi
    },
    {
      title: "Ligações ilimitadas para todo Brasil",
      description: "Gostaria de realizar e efetuar chamadas para qualquer pessoa e em qualquer lugar do Brasil? Sendo associado(a) você pode!",
      icon: Phone
    },
    {
      title: "Descontos em vários estabelecimentos",
      description: "Já pensou em ter descontos em vários locais tais como: Postos de combustíveis, Oficinas, Farmácias, Academias, Clínicas odontológicas, e muito mais?",
      icon: MapPin
    },
    {
      title: "Ingresso gratuito em cinemas",
      description: "Tem vontade de ir ao cinema, mas não vai porque é caro o ingresso? Não seja por isso, aqui na Federal todo mês você terá um ingresso para curtir filmes gratuitamente!",
      icon: Film
    },
    {
      title: "Indique amigos e ganhe 87% de comissão em cada adesão",
      description: "Precisando de um extra no mês? Aqui cada novo indicado cadastrado através do seu link exclusivo de associado, você ganha 87% da adesão e mais 10% a 20% em cada fatura mensal!",
      icon: Coins
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Além de internet e ligações ilimitadas, você também conta com um Clube de Benefícios com +30.000 Empresas Parceiras
          </h2>
          <h3 className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Simplesmente por fazer parte da Federal Associados, você tem acesso a descontos exclusivos em milhares de estabelecimentos em todo o Brasil! 🤩
          </h3>
        </div>

        {/* Computer Image */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://res.cloudinary.com/dls9nwecf/image/upload/v1764019125/conputador_j8h7x6.jpg" 
              alt="Clube de Benefícios Federal Associados no Computador" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900">Como funciona o nosso Clube de Benefícios</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <step.icon className="w-24 h-24 text-brand-600 transform rotate-12" />
                </div>
                <div className="relative z-10">
                  <span className="text-4xl font-black text-brand-500/20 mb-4 block">{step.number}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="max-w-7xl mx-auto mb-20 md:mb-32">
          <div className="text-center mb-10">
             <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
               Veja grandes marcas parceiras da Federal Associados com descontos exclusivos para você que é associado em qualquer lugar do Brasil!
             </p>
          </div>

          <div className="flex justify-center">
            <img 
              src={partnersImage} 
              alt="Marcas Parceiras" 
              className="w-full max-w-5xl h-auto rounded-2xl shadow-lg border border-slate-200"
              loading="lazy"
            />
          </div>
        </div>

        {/* Extra Benefits - "Imagine tudo isso em um único plano" */}
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                 Imagine tudo isso em um único plano
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                 Além de economizar na sua conta de celular, você ganha diversos benefícios exclusivos
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center mb-16">
              {extraBenefits.map((benefit, idx) => (
                 <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-6">
                       <benefit.icon className="w-7 h-7 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                       {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                       {benefit.description}
                    </p>
                 </div>
              ))}
           </div>

           {/* NOVA SEÇÃO: PROGRAMA DE INDICAÇÃO */}
           <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

              <div className="relative z-10 text-white">
                 <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-400 font-bold text-sm tracking-wider uppercase mb-4 border border-green-500/30">
                       PROGRAMA DE BENEFÍCIO POR INDICAÇÃO
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black mb-6">
                       Ganhe Dinheiro Indicando Amigos
                    </h3>
                    <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                       Indique amigos e ganhe <span className="text-green-400 font-bold">87% de comissão na adesão</span> e mais <span className="text-green-400 font-bold">10% a 20% mensalmente de recorrência</span> de cada fatura paga pelo seu indicado
                    </p>
                 </div>

                 <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
                       <span className="w-8 h-1 bg-brand-500 rounded-full"></span>
                       Como Funciona
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {/* Step 1 */}
                       <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors group">
                          <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center font-bold text-white text-xl mb-6 shadow-lg shadow-brand-600/20 group-hover:scale-110 transition-transform">
                             <Users className="w-6 h-6" />
                          </div>
                          <h5 className="font-bold text-xl mb-3 text-white">1. Indique Amigos</h5>
                          <p className="text-slate-400 leading-relaxed">
                             Compartilhe seu link exclusivo de indicação com amigos, familiares e conhecidos que desejam economizar.
                          </p>
                       </div>

                       {/* Step 2 */}
                       <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors group">
                          <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center font-bold text-white text-xl mb-6 shadow-lg shadow-green-600/20 group-hover:scale-110 transition-transform">
                             <DollarSign className="w-6 h-6" />
                          </div>
                          <h5 className="font-bold text-xl mb-3 text-white">2. Ganhe 87% na Adesão</h5>
                          <p className="text-slate-400 leading-relaxed">
                             Quando seu indicado pagar a adesão, você recebe imediatamente 87% do valor pago. Ex: num plano de R$69,90, você ganha <span className="text-green-400 font-bold">R$60,81 na hora!</span>
                          </p>
                       </div>

                       {/* Step 3 */}
                       <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors group">
                          <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center font-bold text-white text-xl mb-6 shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform">
                             <Repeat className="w-6 h-6" />
                          </div>
                          <h5 className="font-bold text-xl mb-3 text-white">3. Ganhe Mensalmente</h5>
                          <p className="text-slate-400 leading-relaxed">
                             Todo mês, quando seu indicado pagar a fatura, você recebe de 10% a 20% do valor como comissão recorrente de cada um dos seus indicados.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-12 md:mt-16 text-center">
              <Button href={REGISTRATION_LINK} variant="primary" icon className="w-full sm:w-auto text-base md:text-lg px-8 py-4">
                 QUERO SER UM ASSOCIADO
              </Button>
           </div>
        </div>

      </div>
    </section>
  );
};
