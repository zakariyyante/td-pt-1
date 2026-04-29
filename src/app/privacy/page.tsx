import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="gold-text text-4xl font-black">Política de Privacidade</h1>
        <p className="mt-4 text-[var(--accent)]/80">
          Esta política de privacidade explica como a Jogo Casino PT recolhe e utiliza informações quando visita o site jogocasinopt.com.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--accent)]/85">
          <section>
            <h2 className="text-xl font-bold">Informações que recolhemos</h2>
            <p>
              Podemos recolher dados analíticos anonimizados, informação de referência e interações com links de afiliados para melhorar o conteúdo e a experiência do utilizador.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Como utilizamos a informação</h2>
            <p>
              A Jogo Casino PT utiliza dados para analisar o desempenho do site, atualizar classificações e garantir relevância do conteúdo. Não recolhemos intencionalmente dados pessoais de utilizadores menores de 18 anos.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Jogo responsável</h2>
            <p>
              Se o jogo estiver a afetar o seu bem-estar, contacte a Linha Nacional de Apoio ao Jogo: 0808 8020 133.
            </p>
            <div className="badge-strip mt-4 rounded-2xl p-4">
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
          </section>
          <section>
            <h2 className="text-xl font-bold">Contacto</h2>
            <p>Para questões sobre esta política, contacte a Jogo Casino PT através do site jogocasinopt.com.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
