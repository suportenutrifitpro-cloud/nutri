import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import SalesPage from '@/components/SalesPage';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [redirecionando, setRedirecionando] = useState(false);
  const [mostrarVendas, setMostrarVendas] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);

    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim();

    if (!nomeLimpo) {
      setErro('Por favor, digite seu nome.');
      return;
    }
    if (!emailLimpo) {
      setErro('Por favor, digite seu e-mail.');
      return;
    }
    if (!isValidEmail(emailLimpo)) {
      setErro('Digite um e-mail válido.');
      return;
    }

    setEnviando(true);

    let salvarOk = true;
    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ nome: nomeLimpo, email: emailLimpo }]);
      if (error) {
        console.error('Erro ao salvar lead:', error.message);
        salvarOk = false;
      }
    } catch (err) {
      console.error('Falha ao salvar lead:', err);
      salvarOk = false;
    }

    setEnviando(false);

    if (!salvarOk) {
      setErro(
        'Não foi possível confirmar seu cadastro agora. Tente novamente em instantes.'
      );
      return;
    }

    setRedirecionando(true);

    window.setTimeout(() => {
      setRedirecionando(false);
      setMostrarVendas(true);
      window.scrollTo(0, 0);
    }, 3500);
  }

  if (mostrarVendas) {
    return <SalesPage nomeLead={nome} />;
  }

  return (
    <>
      {/* Overlay de Confirmação Visual */}
      {redirecionando && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 overlay-fade">
          <div className="flex flex-col items-center gap-6 max-w-md text-center">
            <div className="overlay-check-wrap">
              <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center shadow-lg overlay-pop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="overlay-slide text-2xl sm:text-3xl font-extrabold text-slate-900">
              Cadastro confirmado, {nome.trim()}!
            </h2>

            <p className="overlay-slide-2 text-base sm:text-lg text-slate-600">
              Liberando a sua oferta VIP...
            </p>

            <div className="w-full max-w-xs h-2.5 bg-emerald-100 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full overlay-bar" />
            </div>

            <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium overlay-slide-3">
              <span className="inline-block h-4 w-4 border-2 border-emerald-300 border-t-emerald-600 rounded-full animate-spin" />
              Abrindo a sua página de vendas...
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-slate-800">
        {/* Barra de Urgência no Topo */}
        <div className="bg-emerald-600 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center shadow-sm">
          🔥 <span className="font-bold underline">ATENÇÃO:</span> Restam apenas{' '}
          <span className="bg-emerald-700 px-1.5 py-0.5 rounded font-bold">14 acessos</span>{' '}
          com 80% de desconto e bônus liberados hoje!
        </div>

        {/* Conteúdo Principal */}
        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 flex-grow flex flex-col items-center justify-center w-full">
          {/* Badge de Destaque */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-6 border border-emerald-200">
            ✨ Condição Especial Liberada por E-mail
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center tracking-tight leading-tight max-w-3xl mb-6 text-slate-900">
            Digite seu nome e melhor e-mail abaixo para destravar o seu{' '}
            <span className="text-emerald-600">desconto de 80%</span> no Combo
          </h1>

          {/* Caixa do Formulário */}
          <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-100 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-full shadow-sm">
              Acesso Imediato
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor="nome"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Seu Primeiro Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  disabled={enviando}
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-slate-50 transition disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={enviando}
                  placeholder="seu.email@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-slate-50 transition disabled:opacity-60"
                />
              </div>

              {erro && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {erro}
                </p>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="pulse-btn w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-emerald-200 transition text-sm sm:text-base flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {enviando ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ENVIANDO...
                  </>
                ) : (
                  <>🔓 DESTRAVAR MEU DESCONTO AGORA ➔</>
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
              <span>🔒 Seus dados estão 100% seguros</span>
              <span>•</span>
              <span>Livre de spam</span>
            </div>
          </div>

          {/* O que você vai receber */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full text-center">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-emerald-50 shadow-sm">
              <div className="text-emerald-600 font-bold text-lg mb-1">📅 MENU SAUDÁVEL 30 Dias</div>
              <p className="text-xs text-slate-600">
                Cardápio completo estruturado por nutricionista para secar.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-emerald-50 shadow-sm">
              <div className="text-emerald-600 font-bold text-lg mb-1">📚 +580 Receitas</div>
              <p className="text-xs text-slate-600">
                Almoço e jantar, salgados, doces de airfryer e Fitness.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-emerald-50 shadow-sm">
              <div className="text-emerald-600 font-bold text-lg mb-1">🎁 2 Bônus VIP</div>
              <p className="text-xs text-slate-600">
                Guia de sucos detox e chás inclusos.
              </p>
            </div>
          </div>
        </main>

        {/* Rodapé */}
        <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-100">
          <p>&copy; 2026 Nutrifit.Receitas. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
