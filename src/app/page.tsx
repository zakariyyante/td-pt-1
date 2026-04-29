import Image from "next/image";
import { Header } from "@/components/Header";
import { CasinoCard } from "@/components/CasinoCard";
import { MobileCasinoModal } from "@/components/MobileCasinoModal";
import { regularCasinos } from "@/data/casinos";

type HomeProps = {
  searchParams: Promise<{ gclid?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const gclid = params.gclid;
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative overflow-hidden px-4 pt-20 pb-16">
          <div className="pointer-events-none absolute inset-0 text-[120px] leading-none font-black text-[var(--primary-2)]/7 sm:text-[180px]">
            <div className="mx-auto flex max-w-5xl justify-between px-6 pt-4">
              <span>♠</span><span>♥</span><span>♦</span><span>♣</span>
            </div>
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-[var(--primary-2)]/50 bg-[#111106] px-4 py-2 text-xs font-bold tracking-wider uppercase">
              Jogo Casino PT • Atualizado em {year}
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-black sm:text-6xl">
              Melhores ofertas do Reino Unido na <span className="gold-text gold-shimmer">Jogo Casino PT</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--accent)]/80 sm:text-lg">
              Compare casinos de confiança com bónus atrativos e termos justos. Seleções atualizadas semanalmente pela nossa equipa editorial.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase">
              <span className="rounded-full border border-[var(--primary-2)]/50 bg-[var(--muted)] px-3 py-2">Licença UKGC</span>
              <span className="rounded-full border border-[var(--primary-2)]/50 bg-[var(--muted)] px-3 py-2">Escolhas do editor</span>
              <span className="rounded-full border border-[var(--primary-2)]/50 bg-[var(--muted)] px-3 py-2">Pagamentos rápidos</span>
            </div>
          </div>
        </section>

        <section id="melhores-casinos" className="mx-auto max-w-6xl px-4 py-10">
          <h3 className="gold-text text-3xl font-black sm:text-4xl">Melhores casinos desta semana</h3>
          <p className="mt-2 text-[var(--accent)]/75">As classificações são atualizadas semanalmente com base em valor, confiança e fiabilidade de pagamentos.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {regularCasinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[var(--primary-2)]/35 bg-[#111106] p-4 text-sm text-[var(--accent)]/70">
            Aviso: as ofertas e os termos podem mudar a qualquer momento. Consulte sempre os termos completos do operador antes de jogar.
          </div>
        </section>

        <section id="how-we-rank" className="my-8 border-y border-[var(--primary-2)]/30 bg-[#0b0b04] px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[var(--primary-2)]/35 bg-[#111106] p-6">
              <h4 className="mb-4 text-xl font-black">O que torna as nossas análises diferentes?</h4>
              <ul className="space-y-2 text-sm text-[var(--accent)]/85">
                <li>♠ Verificamos licenças e sinais de segurança antes de listar qualquer marca.</li>
                <li>♦ Avaliamos a qualidade dos termos, não apenas o valor do bónus.</li>
                <li>♣ Mantemos as classificações atualizadas com revisões editoriais regulares.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[var(--primary-2)]/35 bg-[#111106] p-6">
              <h4 className="mb-4 text-xl font-black">Jogo responsável</h4>
              <p className="mb-3 text-sm text-[var(--accent)]/80">
                Defina limites, faça pausas e procure apoio se necessário. Linha Nacional de Apoio ao Jogo: 0808 8020 133.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="site-nav-link">JogoResponsavel.pt</a>
                <a href="https://www.srij.turismodeportugal.pt/pt" target="_blank" rel="noopener noreferrer" className="site-nav-link">SRIJ</a>
                <a href="https://www.icad.pt" target="_blank" rel="noopener noreferrer" className="site-nav-link">ICAD</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full border border-[var(--primary-2)]/35 bg-[#111106] px-3 py-1 text-[11px] font-black tracking-[0.18em] uppercase text-[var(--accent)]/80">
            Metodologia
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Como avaliamos os <span className="gold-text">casinos</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <article className="casino-card rounded-2xl p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-xs font-black text-[var(--accent)]/80">🛡️</span>
              <h3 className="font-black">Licença SRIJ</h3>
            </div>
            <p className="text-sm text-[var(--accent)]/75">
              Confirmamos a licença de cada operador no portal oficial do SRIJ. Sem licença válida, não entra na lista.
            </p>
          </article>

          <article className="casino-card rounded-2xl p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-xs font-black text-[var(--accent)]/80">💰</span>
              <h3 className="font-black">Bónus verificados</h3>
            </div>
            <p className="text-sm text-[var(--accent)]/75">
              Analisamos bónus e requisitos (apostas/wagering), limites e prazos para perceber o valor real da oferta.
            </p>
          </article>

          <article className="casino-card rounded-2xl p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-xs font-black text-[var(--accent)]/80">⚡</span>
              <h3 className="font-black">Levantamentos</h3>
            </div>
            <p className="text-sm text-[var(--accent)]/75">
              Comparamos tempos médios de levantamento por métodos comuns (MB WAY, Multibanco e transferência).
            </p>
          </article>

          <article className="casino-card rounded-2xl p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-xs font-black text-[var(--accent)]/80">🎮</span>
              <h3 className="font-black">Qualidade dos jogos</h3>
            </div>
            <p className="text-sm text-[var(--accent)]/75">
              Avaliamos seleção de slots, casino ao vivo, fornecedores e fluidez da experiência em telemóvel.
            </p>
          </article>

          <article className="casino-card rounded-2xl p-5 md:col-span-2">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-xs font-black text-[var(--accent)]/80">💬</span>
              <h3 className="font-black">Suporte ao cliente</h3>
            </div>
            <p className="text-sm text-[var(--accent)]/75">
              Testamos atendimento em português (chat, email e telefone) e medimos a rapidez e clareza das respostas.
            </p>
          </article>

          <article className="casino-card rounded-2xl p-5 md:col-span-2">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-xs font-black text-[var(--accent)]/80">🔒</span>
              <h3 className="font-black">Segurança e RGPD</h3>
            </div>
            <p className="text-sm text-[var(--accent)]/75">
              Verificamos SSL, políticas de privacidade e práticas alinhadas com o RGPD para proteção de dados.
            </p>
          </article>
        </div>
      </section>

      <footer className="site-footer mt-16 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center text-2xl font-black uppercase">
            <span className="gold-text">Jogo Casino PT</span>
          </div>
          <div className="grid gap-6 border-y border-[var(--primary-2)]/25 py-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">Links rápidos</h4>
              <ul className="space-y-1 text-sm text-[var(--accent)]/80">
                <li><a href="#melhores-casinos">Melhores casinos</a></li>
                <li><a href="/privacy">Política de Privacidade</a></li>
                <li><a href="/terms">Termos e Condições</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Aviso legal</h4>
              <p className="text-sm text-[var(--accent)]/80">A Jogo Casino PT é um site informativo independente de comparação.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="mb-2 font-semibold">Aviso</h4>
              <p className="text-sm text-[var(--accent)]/80">
                Podemos receber comissões através de links de parceiros. Jogue com responsabilidade.
              </p>
            </div>
          </div>
          <div className="badge-strip mt-6 rounded-2xl p-4">
            <p className="mb-4 text-center text-xs font-black tracking-[0.14em] uppercase text-[var(--accent)]/80">
              Proibido a menores de 18. Jogue com responsabilidade. Moderação sempre.
            </p>

            <div className="grid items-center justify-center gap-6 sm:grid-cols-3">
              <a
                href="https://www.srij.turismodeportugal.pt/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex max-w-[240px] flex-col items-center gap-2 text-center"
              >
                <Image src="/srj.png" alt="SRJ logo" width={120} height={42} />
                <span className="text-[11px] text-[var(--accent)]/70">Licenciado</span>
              </a>

              <div className="mx-auto flex max-w-[240px] flex-col items-center gap-2 text-center">
                <Image src="/18-plus-br.png" alt="18+ Jogue com responsabilidade" width={170} height={52} />
                <span className="text-[11px] text-[var(--accent)]/70">Idade mínima</span>
              </div>

              <a
                href="https://www.icad.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex max-w-[240px] flex-col items-center gap-2 text-center"
              >
                <Image src="/icad.png" alt="ICAD logo" width={120} height={42} />
                <span className="text-[11px] text-[var(--accent)]/70">Comportamento aditivo</span>
              </a>
            </div>
          </div>

          <div className="mt-3 rounded-xl bg-[#070703] px-4 py-3 text-center text-xs text-[var(--accent)]/70">
            <span className="font-semibold">18+</span>
            {" | "}
            <span>Jogo responsável</span>
            {" | "}
            <a
              href="https://www.srij.turismodeportugal.pt/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav-link"
            >
              Licenciado pelo SRIJ
            </a>
            {" | "}
            <span>SOS Vício: 1414</span>
            {" | "}
            <a href="https://www.jogoresponsavel.pt" target="_blank" rel="noopener noreferrer" className="site-nav-link">
              JogoResponsavel.pt
            </a>
            {" | "}
            <span>Autoexclusão</span>
          </div>
          <p className="mt-6 text-center text-xs text-[var(--accent)]/70">
            © {year} jogocasinopt.com. Apenas para fins informativos.
          </p>
        </div>
      </footer>

      {gclid ? <MobileCasinoModal gclid={gclid} /> : null}
    </div>
  );
}
