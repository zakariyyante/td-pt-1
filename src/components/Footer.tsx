import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-16 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center text-2xl font-black uppercase">
          <span className="gold-text">Jogo Casino PT</span>
        </div>

        <div className="grid gap-6 border-y border-[var(--primary-2)]/25 py-6 md:grid-cols-2">
          <div>
            <h4 className="mb-2 font-semibold">Links rápidos</h4>
            <ul className="space-y-1 text-sm text-[var(--accent)]/80">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/privacy">Política de Privacidade</Link></li>
              <li><Link href="/terms">Termos e Condições</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Aviso legal</h4>
            <p className="text-sm text-[var(--accent)]/80">
              Site informativo. Podemos receber comissões através de links de parceiros.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="mb-2 font-semibold">Aviso</h4>
            <p className="text-sm text-[var(--accent)]/80">
              O jogo pode ser viciante. Jogue de forma responsável e procure ajuda se deixar de ser divertido.
              Linha Nacional de Apoio ao Jogo: 0808 8020 133.
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
  );
}
