import { MessageCircle } from "lucide-react";
import { useState } from "react";

function ProductTabs() {
  const products = [
    {
      title: 'Utilidades Domésticas',
      text: 'Nossa linha de utilidades domésticas reúne produtos práticos e essenciais para o dia a dia do lar. Trabalhamos com utensílios de cozinha, organizadores, recipientes e diversos acessórios domésticos.',
      image: '/images/produto-utilidades-domesticas.webp',
    },
    {
      title: 'Produtos para Banheiro',
      text: 'A linha de produtos para banheiro inclui itens essenciais para organização e higiene, como saboneteiras, porta-escovas, escovas sanitárias e organizadores. São produtos de alta demanda no varejo, ideais para lojas de utilidades e variedades.',
      image: '/images/produto-banheiro.webp',
    },
    {
      title: 'Mochilas',
      text: 'Nossa linha de mochilas inclui modelos escolares, infantis e casuais, desenvolvidos com materiais resistentes e design moderno. São produtos com alta demanda e excelente oportunidade de revenda para lojistas.',
      image: '/images/produto-mochilas.webp',
    },
    {
      title: 'Garrafas',
      text: 'Trabalhamos com garrafas e recipientes para bebidas, ideais para uso doméstico, escolar e esportivo. Os produtos combinam praticidade, durabilidade e design funcional.',
      image: '/images/produto-garrafas.webp',
    },
    {
      title: 'Brinquedos',
      text: 'A linha de brinquedos reúne produtos educativos e recreativos que estimulam a diversão e a criatividade das crianças. São itens com grande apelo comercial e boa rotatividade no varejo.',
      image: '/images/produto-brinquedos.webp',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-3">
        {products.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'border-cyan-300/50 bg-cyan-400/15 text-cyan-200 shadow-lg shadow-cyan-950/20'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div>
          <div className="inline-flex rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200">
            {activeProduct.title}
          </div>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            {activeProduct.text}
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
          <div
            className="min-h-[280px] md:min-h-[320px]"
            style={{
              backgroundImage: `linear-gradient(rgba(15,23,42,0.18), rgba(15,23,42,0.38)), url(${activeProduct.image}), url('/images/caixas-e-estoques-1.avif')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const transportImage =
    '/images/transporte-internacional.webp';
  const heroImage =
    '/images/logistica-nordeste-holograma.webp';
  const aboutImage = '/images/caixas-e-estoques-1.avif';
  const distributionImage = '/images/caminhao-boia-flow-entregador.webp';
  const marketImage =
    '/images/logistica-nordeste-sustentavel.webp';
  const globalizationImage =
    '/images/globalizacao-brasil-comercio.webp';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <a
        href="https://wa.me/5582991093883"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-black/30 transition hover:scale-105 hover:bg-green-400"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/boia-flow-logo.webp"
              alt="Boia Flow"
              className="h-12 w-16 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Boia Flow</h1>
              <p className="text-sm text-slate-300">Importadora e distribuidora de mercadorias</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#sobre" className="transition hover:text-cyan-300">A empresa</a>
            <a href="#operacao" className="transition hover:text-cyan-300">A Operação</a>
            <a href="#atendimento" className="transition hover:text-cyan-300">Atendimento</a>
            <a href="#contato" className="transition hover:text-cyan-300">Contato</a>
          </nav>
        </div>
      </header>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.70), rgba(3,7,18,0.82)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 shadow-lg shadow-cyan-950/40">
              Importação global • distribuição regional • abastecimento atacadista
            </span>
            <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
Distribuição estratégica de mercadorias para comerciantes no Nordeste.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A Boia Flow conecta fornecedores globais, rotas logísticas e distribuição para abastecer lojistas, revendedores e comerciantes em Alagoas, Pernambuco, Paraíba, Sergipe, Bahia, Rio Grande do Norte e Ceará.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:scale-[1.02]"
              >
                Nossos contatos
              </a>
              <a
                href="#produtos"
                className="rounded-2xl border border-white/25 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Ver linhas de produtos
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-2xl">
              <p className="text-sm text-cyan-200">Na origem</p>
              <h3 className="mt-2 text-xl font-semibold">Conexão global</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Seleção de fornecedores e integração com o fluxo internacional de mercadorias.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-2xl">
              <p className="text-sm text-cyan-200">No destino</p>
              <h3 className="mt-2 text-xl font-semibold">Nordeste como foco comercial</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Estratégia de fornecimento voltada aos mercados regionais com alto potencial de retorno.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-2xl md:col-span-2">
              <p className="text-sm text-cyan-200">Valor</p>
              <h3 className="mt-2 text-xl font-semibold">Importação global, distribuição regional e atendimento de qualidade B2B</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Operação desenhada para entregar preço baixo, com competitividade, regularidade no abastecimento e expansão comercial aos comerciantes locais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-slate-950 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Sobre a empresa</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
  Importação global com distribuição estratégica no Nordeste
</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
A Boia Flow atua na importação e distribuição de mercadorias, conectando fornecedores internacionais a comerciantes nos estados do Nordeste brasileiro com eficiência logística, previsibilidade operacional e foco em abastecimento regional.            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              A Boia Flow nasce com o propósito de conectar origens e destinos, aproximar mercados e transformar distâncias em oportunidades comerciais. A empresa estrutura suas operações com foco em compra internacional, armazenagem, distribuição e atendimento ágil ao mercado atacadista.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <div
              className="min-h-[360px]"
              style={{
                backgroundImage: `linear-gradient(rgba(15,23,42,0.25), rgba(15,23,42,0.58)), url(${aboutImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      <section id="operacao" className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Operação</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Do mundo para o comerciante local</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Transporte internacional',
                text: 'A operação começa com integração ao comércio global, movimentação marítima e fluxo internacional de mercadorias.',
                image: transportImage,
              },
              {
                title: 'Distribuição terrestre',
                text: 'Nossa frota reforça a entrega regional e a capilaridade necessária para abastecer comerciantes com eficiência e rapidez.',
                image: distributionImage,
              },
              {
                title: 'Globalização e rotas',
                text: 'Rompemos as barreiras das distâncias para trazer os principais mercados mundiais aos comerciantes locais no Nordeste do Brasil.',
                image: globalizationImage,
              },
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-xl">
                <div
                  className="h-56"
                  style={{
                    backgroundImage: `linear-gradient(rgba(2,6,23,0.18), rgba(2,6,23,0.48)), url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="atendimento" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Área de atendimento</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Fornecimento voltado ao Nordeste brasileiro</h2>
              <p className="mt-6 leading-8 text-slate-300">
                A Boia Flow direciona sua atuação comercial ao fornecimento de mercadorias para comerciantes em cidades estratégicas da região Nordeste, com ênfase em mercados de forte circulação e potencial de parcerias de longo prazo.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  'Alagoas',
                  'Pernambuco',
                  'Paraíba',
                  'Sergipe',
                  'Bahia',
                  'Rio Grande do Norte',
                  'Ceará',
                ].map((state) => (
                  <div key={state} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200">
                    {state}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <div
                className="min-h-[420px]"
                style={{
                  backgroundImage: `linear-gradient(rgba(15,23,42,0.28), rgba(15,23,42,0.58)), url(${marketImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Linhas de atuação</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Produtos e abastecimento para lojistas</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Nossa linha de produtos está organizada em abas para facilitar a navegação entre categorias e dar mais destaque ao conteúdo de cada linha de produtos.
          </p>

          <ProductTabs />
        </div>
      </section>

      <section id="servicos" className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Como a Boia Flow pode apoiar comerciantes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Importação de mercadorias',
                text: 'Aquisição internacional planejada para compor portfólios competitivos de revenda.',
              },
              {
                title: 'Distribuição regional',
                text: 'Estrutura orientada ao fornecimento constante para comerciantes do Nordeste.',
              },
              {
                title: 'Parcerias comerciais',
                text: 'Relacionamento com clientes e canais de revenda para crescimento sustentável e expansão de mercado.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contato</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Vamos construir oportunidades comerciais para o seu negócio.</h2>
              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                <p className="mt-6 max-w-xl leading-8 text-slate-300">
  Entre em contato com a Boia Flow por nossos canais de atendimento. Nossa equipe está preparada para apresentar linhas de produtos, condições comerciais e possibilidades de parceria para abastecimento no mercado regional.
</p>

<div className="mt-6 space-y-3 text-slate-300">
  <p><strong>E-mail institucional:</strong> contato@boiaflow.com.br</p>
  <p><strong>WhatsApp:</strong> atendimento comercial direto</p>
  <p><strong>Formulário:</strong> envie sua mensagem e retornaremos o mais breve possível</p>
</div>
              </p>
            </div>

<form
  className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-2xl"
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;

    const texto = `Olá, Boia Flow!%0A%0A` +
      `Nome: ${encodeURIComponent(nome)}%0A` +
      `E-mail: ${encodeURIComponent(email)}%0A` +
      `Empresa: ${encodeURIComponent(empresa)}%0A` +
      `Mensagem: ${encodeURIComponent(mensagem)}`;

    window.open(`https://wa.me/5582991093883?text=${texto}`, "_blank");
  }}
>
  <div className="grid gap-4">
    <input
      name="nome"
      className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-600"
      placeholder="Nome"
    />
    <input
      name="email"
      className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-600"
      placeholder="E-mail"
    />
    <input
      name="empresa"
      className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-600"
      placeholder="Empresa"
    />
    <textarea
      name="mensagem"
      className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-600"
      placeholder="Mensagem"
    />
    <button
      type="submit"
      className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:opacity-90"
    >
      Enviar mensagem
    </button>
  </div>
</form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Boia Flow. Todos os direitos reservados.</p>
          <p>Importação e distribuição de mercadorias para comerciantes no Nordeste.</p>
        </div>
      </footer>
    </div>
  );
}
