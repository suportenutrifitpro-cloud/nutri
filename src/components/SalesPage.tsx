import { ArrowRight, ShieldCheck, Zap, Gift, Clock, Lock, CheckCircle2 } from 'lucide-react';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/bjMfmlC';

const itens = [
  {
    n: '01',
    titulo: 'Menu Saudável: 30 Dias de Reeducação Alimentar',
    desc: 'Roteiro diário completo de segunda a domingo (entre 1.200 e 1.400 kcal) com 3 refeições principais e lanches a cada 3h30 para acelerar o metabolismo sem perder massa muscular.',
    badge: 'Guia Principal',
    destaque: false,
  },
  {
    n: '02',
    titulo: '200 Receitas de Sobremesas na Airfryer',
    desc: 'Praticidade em dobro! Delícias rápidas prontas em até 5 minutos direto na sua fritadeira sem óleo, como Churros Fit, Petit Gateau Low Carb, Donuts Proteicos, Cheesecakes e Muffins quentinhos e crocantes.',
    badge: 'Livro Digital Exclusivo',
    destaque: true,
  },
  {
    n: '03',
    titulo: '300 Receitas de Sobremesas Fitness Tradicionais',
    desc: 'Opções variadas que não exigem Airfryer, perfeitas para preparar no dia a dia com ingredientes fáceis, gelados, cremosos e nutritivos para saciar aquela vontade de doce a qualquer hora.',
    badge: 'Acervo Completo',
    destaque: true,
  },
  {
    n: '04',
    titulo: 'Almoço & Jantar Fit',
    desc: '21 pratos principais deliciosos para variar o cardápio da família: Lasanha de Abobrinha Low Carb, Patinho à Parmegiana, Escondidinho de Batata-Doce e Fricassê Light.',
    badge: 'Receitas Salgadas',
    destaque: false,
  },
  {
    n: '05',
    titulo: 'Caderno de 20 Salgados Fit',
    desc: 'Perfeito para lanches rápidos ou para congelar: Coxinha Low Carb, Pão de Queijo de Frigideira, Pastel Assado, Empadinha Fit, Esfiha de Aveia e Salgado Maromba.',
    badge: 'Lanches Práticos',
    destaque: false,
  },
];

const precos = [
  { nome: '1. Menu Saudável: 30 Dias de Reeducação Alimentar (103 Receitas)', valor: 'R$ 67,00' },
  { nome: '2. Guia de 200 Sobremesas Fit na Airfryer Prontas em 5 min (213 Receitas)', valor: 'R$ 47,00' },
  { nome: '3. 300 Receitas de Sobremesas Fitness (341 receitas)', valor: 'R$ 47,00' },
  { nome: '4. Almoço & Jantar Fit (21 Receitas)', valor: 'R$ 37,00' },
  { nome: '5. Salgados Fit (20 Receitas)', valor: 'R$ 29,00' },
];

function SalesPage({ nomeLead }: { nomeLead: string }) {
  const primeiroNome = nomeLead.trim().split(' ')[0] || 'você';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 antialiased selection:bg-emerald-500 selection:text-white">
      {/* BARRA DE AVISO DE DESCONTO ATIVADO */}
      <div className="bg-orange-500 text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center sticky top-0 z-50 shadow-sm">
        Parabéns, {primeiroNome}! Seu Desconto VIP de 80% foi ativado com sucesso!
      </div>

      {/* HERO SECTION */}
      <header className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Tenha em mãos o{' '}
            <span className="text-emerald-400">Cardápio Completo</span> de Reeducação Alimentar + Acervo Gigante com Mais de 580 Receitas Práticas (doces de Air Fryer, Fitness e Salgados).
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#checkout"
              className="pulse-btn w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white font-bold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              QUERO GARANTIR MEU COMBO COM 80% OFF
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-emerald-200 mt-4 inline-flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" /> Compra 100% Segura • Acesso Imediato no seu E-mail
          </p>
        </div>
      </header>

      {/* SEÇÃO: O QUE INCLUI NO COMBO */}
      <section className="py-16 sm:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">
            O que você vai receber hoje no <span className="text-emerald-600">Combo</span>:
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Material completo desenvolvido com foco em praticidade, sabor e resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itens.map((item) => (
            <div
              key={item.n}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between ${
                item.destaque
                  ? 'border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg ring-1 ring-orange-100/50'
                  : 'border border-emerald-100/60'
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg mb-6 ${
                    item.destaque ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {item.n}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{item.titulo}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <span
                className={`text-[11px] font-semibold py-1.5 px-3 rounded-lg w-max ${
                  item.destaque ? 'text-orange-700 bg-orange-50' : 'text-emerald-700 bg-emerald-50'
                }`}
              >
                {item.badge}
              </span>
            </div>
          ))}

          {/* Item 6 (Bônus) */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-sm border-2 border-emerald-300 hover:shadow-lg transition flex flex-col justify-between relative overflow-hidden ring-2 ring-emerald-200/50">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-3.5 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              Bônus Grátis
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Guia de Sucos Detox & Chás</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                6 receitas de sucos desintoxicantes ricos em fibras + 6 chás diuréticos e termogênicos para eliminar a retenção de líquidos logo na primeira semana.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-200/50 py-1.5 px-3 rounded-lg w-max">
              Incluso Hoje
            </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE OFERTA E CHECKOUT */}
      <section id="checkout" className="py-20 bg-white text-slate-900 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> Oferta Exclusiva por Tempo Limitado
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-6 text-slate-900">
            Garanta seu Acesso Imediato
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-10 max-w-xl mx-auto">
            Acesso Imediato + Todos os 7 Livros Digitais em PDF
          </p>

          <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-orange-500 max-w-lg mx-auto text-left relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2 rounded-full shadow-md">
              Economia de 80%
            </div>

            {/* Lista de itens com preços individuais */}
            <div className="space-y-3 mb-6 pt-4">
              {precos.map((p) => (
                <div
                  key={p.nome}
                  className="flex items-center justify-between gap-3 text-sm border-b border-slate-100 pb-2.5"
                >
                  <span className="text-slate-700">{p.nome}</span>
                  <span className="font-semibold text-slate-500 whitespace-nowrap">{p.valor}</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-3 text-sm border-b border-orange-100 pb-2.5">
                <span className="text-emerald-700 font-medium inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" /> BÔNUS #1: Guia de Sucos Detox Desinchantes
                </span>
                <span className="font-bold text-emerald-600 whitespace-nowrap">GRÁTIS</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-emerald-700 font-medium inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" /> BÔNUS #2: Chás Termogênicos & Diuréticos
                </span>
                <span className="font-bold text-emerald-600 whitespace-nowrap">GRÁTIS</span>
              </div>
            </div>

            {/* Valor total original */}
            <div className="text-center bg-slate-50 rounded-xl py-3 px-4 mb-5 border border-slate-200">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Valor Total dos 7 Guias Separados</p>
              <p className="text-lg font-bold text-slate-400 line-through">R$ 266,80</p>
            </div>

            {/* Preço final */}
            <div className="text-center mb-6">
              <p className="text-sm text-slate-600 font-medium">Seu Preço com Cupom VIP de 80% OFF:</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Por Apenas</p>
              <div className="text-4xl sm:text-5xl font-black text-orange-500 mt-1">R$ 47,00</div>
              <p className="text-xs font-normal text-slate-500 mt-1">
                à vista no Pix ou em até 3x de R$ 16,77 no cartão de crédito
              </p>
            </div>

            {/* BOTÃO DE CHECKOUT FINAL */}
            <a
              href={CHECKOUT_URL}
              className="pulse-btn block text-center bg-orange-500 hover:bg-orange-400 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg transition inline-flex items-center justify-center gap-2"
            >
              QUERO GARANTIR MEU COMBO COMPLETO AGORA!
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="flex flex-col items-center gap-1.5 mt-4">
              <span className="text-[11px] text-slate-500 inline-flex items-center gap-1.5">
                <Zap className="h-3 w-3" /> Acesso Imediato no Gmail
              </span>
              <span className="text-[11px] text-slate-500 inline-flex items-center gap-1.5">
                <Lock className="h-3 w-3" /> Pagamento 100% Seguro
              </span>
              <span className="text-[11px] text-slate-500 inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3" /> 7 Dias de Garantia
              </span>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-10 max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-7 w-7 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  Garantia Incondicional de 7 Dias — Risco Zero!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Se não ficar 100% satisfeita, devolvemos todo o seu dinheiro sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 text-slate-500 text-center py-8 px-4 text-xs">
        <div className="max-w-4xl mx-auto space-y-3">
          <p>Aviso Legal: Os resultados podem variar de acordo com o metabolismo e dedicação de cada pessoa.</p>
          <p>&copy; 2026 Nutrifit.Receitas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default SalesPage;
