import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="gold-text text-4xl font-black">Termos e Condições</h1>
        <p className="mt-4 text-[var(--accent)]/80">
          Estes termos regulam a utilização do website jogocasinopt.com e todo o conteúdo publicado pela Jogo Casino PT.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--accent)]/85">
          <section>
            <h2 className="text-xl font-bold">Finalidade informativa</h2>
            <p>
              A Jogo Casino PT é um website informativo e não é um operador de jogo. Analisamos e comparamos ofertas de terceiros e podemos receber compensação de afiliados.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Elegibilidade</h2>
            <p>
              Este website destina-se a utilizadores com 18+ e a públicos em regiões permitidas. É da sua responsabilidade verificar a legislação local antes de jogar online.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Aviso de jogo responsável</h2>
            <p>
              Jogue com responsabilidade. Linha Nacional de Apoio ao Jogo: 0808 8020 133. Disponibilizamos links de apoio para SRIJ e ICAD.
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
            <h2 className="text-xl font-bold">Atualizações aos termos</h2>
            <p>
              A Jogo Casino PT pode atualizar estes termos ocasionalmente. A utilização contínua de jogocasinopt.com indica aceitação dos termos revistos.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
