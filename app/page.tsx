import Image from "next/image";

const editorialImage = "/images/lumiere-editorial-catalog.png";

const credibility = [
  "Dermocosmetologia avancada",
  "Protocolos personalizados",
  "Resultados naturais",
  "Experiencia boutique",
];

const treatments = [
  {
    title: "Glow Renewal Facial",
    description:
      "Limpeza profunda, infusao de ativos e acabamento luminoso para recuperar textura, vico e frescor.",
    detail: "75 min",
  },
  {
    title: "Sculpt & Lift Ritual",
    description:
      "Massagem facial tecnica, radiofrequencia suave e drenagem para contorno definido sem artificialidade.",
    detail: "90 min",
  },
  {
    title: "Barrier Repair Therapy",
    description:
      "Plano calmante para peles sensibilizadas, com foco em barreira cutanea, conforto e consistencia.",
    detail: "60 min",
  },
  {
    title: "Lumiere Signature",
    description:
      "Protocolo autoral com avaliacao completa, tecnologia nao invasiva e home care orientado.",
    detail: "120 min",
  },
];

const differentiators = [
  "Diagnostico estetico antes de qualquer protocolo",
  "Tecnologias nao invasivas combinadas com cosmetica premium",
  "Plano de pele progressivo, nao promessas instantaneas",
  "Ambiente silencioso, privado e cuidadosamente sensorial",
];

const process = [
  {
    step: "01",
    title: "Leitura de pele",
    text: "Mapeamos historico, rotina, sensibilidade, textura e objetivos para evitar tratamentos genericos.",
  },
  {
    step: "02",
    title: "Protocolo sob medida",
    text: "Combinamos tecnicas manuais, tecnologia e ativos com intensidade calibrada para sua pele real.",
  },
  {
    step: "03",
    title: "Acompanhamento",
    text: "A evolucao e registrada, ajustada e sustentada com orientacao clara para casa.",
  },
];

const testimonials = [
  {
    quote:
      "Pela primeira vez senti que minha pele foi tratada com criterio, nao com uma formula pronta.",
    name: "Marina A.",
  },
  {
    quote:
      "O resultado foi elegante: pele mais viçosa, expressao descansada e absolutamente natural.",
    name: "Renata L.",
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const legalLinks = [
  { label: "Politica de privacidade", href: "#" },
  { label: "Termos de uso", href: "#" },
  { label: "Politica de cookies", href: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f2eb] text-[#2b211d]">
      <header className="sticky top-0 z-30 border-b border-[#2b211d]/10 bg-[#f8f2eb]/88 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        >
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-[#2b211d] text-sm font-medium text-[#f8f2eb]">
              L
            </span>
            <span className="font-serif text-xl tracking-[0.08em]">
              Lumiere
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[#6f5c50] md:flex">
            <a href="#treatments" className="hover:text-[#2b211d]">
              Tratamentos
            </a>
            <a href="#method" className="hover:text-[#2b211d]">
              Metodo
            </a>
            <a href="#results" className="hover:text-[#2b211d]">
              Resultados
            </a>
          </div>
          <div className="md:hidden">
            <details className="group">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#2b211d]/20 bg-white/70 text-[#2b211d] focus:outline-none focus:ring-2 focus:ring-[#b58d72] focus:ring-offset-2 focus:ring-offset-[#f8f2eb] [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Abrir menu</span>
                <span className="relative block h-4 w-5">
                  <span className="absolute left-0 top-0 block h-[2px] w-5 bg-current transition group-open:top-[7px] group-open:rotate-45" />
                  <span className="absolute left-0 top-[7px] block h-[2px] w-5 bg-current transition group-open:opacity-0" />
                  <span className="absolute left-0 top-[14px] block h-[2px] w-5 bg-current transition group-open:top-[7px] group-open:-rotate-45" />
                </span>
              </summary>
              <div className="absolute right-5 top-full z-40 mt-2 grid min-w-[220px] gap-2 rounded-2xl border border-[#2b211d]/10 bg-[#fffaf4] p-3 text-sm text-[#2b211d] shadow-[0_18px_40px_rgba(43,33,29,0.14)]">
                <a
                  href="#treatments"
                  className="rounded-xl px-3 py-2 hover:bg-[#f3e8de]"
                >
                  Tratamentos
                </a>
                <a
                  href="#method"
                  className="rounded-xl px-3 py-2 hover:bg-[#f3e8de]"
                >
                  Metodo
                </a>
                <a
                  href="#results"
                  className="rounded-xl px-3 py-2 hover:bg-[#f3e8de]"
                >
                  Resultados
                </a>
                <a
                  href="#booking"
                  className="mt-1 rounded-full bg-[#2b211d] px-4 py-2 text-center font-medium text-white"
                >
                  Agendar avaliacao
                </a>
              </div>
            </details>
          </div>
          <a
            href="#booking"
            className="hidden rounded-full bg-[#2b211d] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_40px_rgba(43,33,29,0.18)] transition hover:-translate-y-0.5 hover:bg-[#46352e] focus:outline-none focus:ring-2 focus:ring-[#b58d72] focus:ring-offset-2 focus:ring-offset-[#f8f2eb] sm:inline-flex"
          >
            Agendar avaliacao
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pb-28 md:pt-20">
          <div className="flex flex-col justify-center">
            <p className="mb-7 w-fit rounded-full border border-[#c7aa94] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#8a634d]">
              Skincare premium em Sao Paulo
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.1rem,8.1vw,5.7rem)] leading-[0.88] text-[#2b211d] md:text-[clamp(2.35rem,5.9vw,5.7rem)]">
              Pele luminosa, resultado natural, cuidado preciso.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f5c50] md:text-xl">
              A Lumiere Skin Studio cria protocolos faciais personalizados para
              quem busca rejuvenescimento elegante, pele saudavel e uma
              experiencia estetica profundamente criteriosa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-[#2b211d] px-7 py-4 text-center text-sm font-semibold text-white shadow-[0_22px_55px_rgba(43,33,29,0.2)] transition hover:-translate-y-0.5 hover:bg-[#46352e] focus:outline-none focus:ring-2 focus:ring-[#b58d72] focus:ring-offset-2 focus:ring-offset-[#f8f2eb]"
              >
                Reservar consulta de pele
              </a>
              <a
                href="#treatments"
                className="rounded-full border border-[#2b211d]/20 px-7 py-4 text-center text-sm font-semibold text-[#2b211d] transition hover:-translate-y-0.5 hover:border-[#2b211d]/40 hover:bg-white/45 focus:outline-none focus:ring-2 focus:ring-[#b58d72] focus:ring-offset-2 focus:ring-offset-[#f8f2eb]"
              >
                Ver tratamentos
              </a>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#ead9ca] shadow-[0_34px_90px_rgba(89,59,42,0.18)]">
            <Image
              src={editorialImage}
              alt="Retrato editorial de pele luminosa em clinica estetica premium"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover object-left-top"
            />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 rounded-[1.35rem] bg-[#fffaf4]/88 p-5 shadow-[0_18px_50px_rgba(43,33,29,0.16)] backdrop-blur-md sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold">4.9</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a634d]">
                  satisfacao
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold">12k+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a634d]">
                  peles cuidadas
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold">8 anos</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a634d]">
                  expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2b211d]/10 bg-[#fffaf4]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#8a634d] md:grid-cols-4 md:px-8">
          {credibility.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.78fr_1.22fr] md:px-8 md:py-32">
        <div>
          <p className="section-kicker">Proposta</p>
          <h2 className="section-title">
            Estetica facial para quem nao quer parecer outra pessoa.
          </h2>
        </div>
        <div className="grid gap-8 text-[#6f5c50]">
          <p className="max-w-3xl text-2xl leading-10 text-[#3b2c26]">
            O foco nao e transformar o rosto. E devolver qualidade de pele,
            proporcao, frescor e confianca com tecnicas sutis, leitura clinica e
            acabamento refinado.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item}
                className="border-t border-[#2b211d]/15 pt-5 text-lg leading-7"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="treatments" className="bg-[#2b211d] text-[#fffaf4]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-kicker text-[#d7b69d]">Catalogo</p>
              <h2 className="max-w-3xl font-serif text-[1.95rem] leading-[0.98] md:text-[2.85rem]">
                Tratamentos desenhados para evoluir com a sua pele.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#d9c5b7]">
              Um menu enxuto, intencional e consultivo. Cada sessao parte de
              avaliacao, necessidade atual e objetivo de medio prazo.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="group rounded-[1.35rem] border border-white/12 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="mb-10 flex items-center justify-between text-sm text-[#d7b69d]">
                  <span>{treatment.detail}</span>
                  <span className="size-2 rounded-full bg-[#d7b69d]" />
                </div>
                <h3 className="font-serif text-[1.3rem] leading-none md:text-[1.6rem]">
                  {treatment.title}
                </h3>
                <p className="mt-6 leading-7 text-[#d9c5b7]">
                  {treatment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#ead9ca]">
          <Image
            src={editorialImage}
            alt="Tratamento facial premium com tecnologia nao invasiva"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-right-top"
          />
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#ead9ca]">
          <Image
            src={editorialImage}
            alt="Produtos de skincare premium organizados em bancada de marmore"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left-bottom"
          />
        </div>
      </section>

      <section id="method" className="bg-[#fffaf4]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="mb-14 max-w-3xl">
            <p className="section-kicker">Metodo Lumiere</p>
            <h2 className="section-title">
              Um atendimento calmo, tecnico e orientado por evolucao.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.5rem] border border-[#2b211d]/10 bg-[#f8f2eb] p-7"
              >
                <p className="mb-14 text-sm font-semibold text-[#b58d72]">
                  {item.step}
                </p>
                <h3 className="font-serif text-[1.7rem] md:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="mt-5 leading-7 text-[#6f5c50]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1fr_0.9fr] md:px-8 md:py-32"
      >
        <div>
          <p className="section-kicker">Resultados</p>
          <h2 className="section-title">
            Pele mais uniforme, luminosa e descansada sem perder identidade.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-[1.35rem] bg-white/65 p-7 shadow-[0_18px_60px_rgba(89,59,42,0.08)]"
              >
                <p className="text-lg leading-8 text-[#3b2c26]">
                  “{item.quote}”
                </p>
                <footer className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a634d]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] bg-[#ead9ca] shadow-[0_30px_80px_rgba(89,59,42,0.15)]">
          <Image
            src={editorialImage}
            alt="Comparativo estetico sutil de textura e luminosidade da pele"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-right-bottom"
          />
        </div>
      </section>

      <section className="bg-[#efe0d2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-32">
          <div>
            <p className="section-kicker">Studio</p>
            <h2 className="section-title">
              Uma clinica boutique para uma relacao mais inteligente com a pele.
            </h2>
          </div>
          <div className="grid content-center gap-7 text-lg leading-8 text-[#5d4a40]">
            <p>
              A Lumiere nasceu para atender pessoas que valorizam beleza com
              criterio: um lugar onde tecnologia, toque, cosmetica e escuta se
              encontram sem pressa e sem excesso.
            </p>
            <p>
              Cada detalhe da jornada foi pensado para transmitir seguranca:
              agenda reservada, sala privativa, avaliacao completa e orientacao
              transparente antes de qualquer decisao.
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#2b211d] px-6 py-16 text-center text-[#fffaf4] shadow-[0_35px_90px_rgba(43,33,29,0.22)] md:px-16 md:py-24">
          <p className="section-kicker text-[#d7b69d]">Agenda seletiva</p>
          <h2 className="mx-auto max-w-4xl font-serif text-[1.95rem] leading-[0.98] md:text-[2.85rem]">
            Comece com uma avaliacao de pele realmente individual.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#d9c5b7]">
            Em 45 minutos, entendemos sua pele, seu historico e seus objetivos
            para indicar o caminho mais elegante e efetivo.
          </p>
          <a
            href="mailto:hello@webluma.tech?subject=Agendamento%20de%20avaliacao"
            className="mt-10 inline-flex rounded-full bg-[#fffaf4] px-8 py-4 text-sm font-semibold text-[#2b211d] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#d7b69d] focus:ring-offset-2 focus:ring-offset-[#2b211d]"
          >
            Solicitar horario
          </a>
        </div>
      </section>

      <footer className="footer" id="legal">
        <div className="container footer-grid">
          <div className="footer-block footer-about">
            <p className="footer-brand">Lumiere Skin Studio</p>
            <p>
              Clinica boutique de skincare premium com protocolos faciais
              personalizados, acompanhamento proximo e foco em resultados
              naturais.
            </p>
          </div>

          <div className="footer-block">
            <p className="footer-title">Contato</p>
            <a className="footer-link focus-ring" href="mailto:hello@webluma.tech">
              hello@webluma.tech
            </a>
            <a className="footer-link focus-ring" href="tel:+554100000000">
              +55 41 00000-0000
            </a>
            <p>
              Atendimento com agenda reservada para Sao Paulo e consultorias
              online.
            </p>
          </div>

          <div className="footer-block">
            <p className="footer-title">Redes sociais</p>
            <div className="footer-link-list">
              {socialLinks.map((item) => (
                <a className="footer-link focus-ring" href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-block">
            <p className="footer-title">Legal</p>
            <div className="footer-link-list">
              {legalLinks.map((item) => (
                <a className="footer-link focus-ring" href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © 2026 Criado e desenvolvido por{" "}
            <strong>WebLuma Tecnologia LTDA</strong>. Todos os direitos
            reservados.
          </p>
          <p>Skincare premium com protocolos faciais personalizados.</p>
        </div>
      </footer>
    </main>
  );
}
