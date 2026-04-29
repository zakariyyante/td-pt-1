import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="gold-text text-4xl font-black">Terms &amp; Conditions</h1>
        <p className="mt-4 text-[var(--accent)]/80">
          These terms govern use of jogocasinopt.com and all content published by Jogo Casino PT.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--accent)]/85">
          <section>
            <h2 className="text-xl font-bold">Informational purpose</h2>
            <p>
              Jogo Casino PT is an informational website and not a gambling operator. We review and compare third-party offers and may earn affiliate compensation.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Eligibility</h2>
            <p>
              This website is intended for users aged 18+ and for audiences in permitted regions. You are responsible for checking local laws before gambling online.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Responsible gambling notice</h2>
            <p>
              Gamble responsibly. National Gambling Helpline: 0808 8020 133. Support links are provided for BeGambleAware, SRJ, and ICAD.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Image src="/18plus.png" alt="18 plus badge" width={48} height={26} />
              <a href="https://www.srij.turismodeportugal.pt/pt" target="_blank" rel="noopener noreferrer">
                <Image src="/srj.png" alt="SRJ logo" width={80} height={28} />
              </a>
              <a href="https://www.icad.pt" target="_blank" rel="noopener noreferrer">
                <Image src="/icad.png" alt="ICAD logo" width={80} height={28} />
              </a>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold">Updates to terms</h2>
            <p>
              Jogo Casino PT may update these terms from time to time. Continued use of jogocasinopt.com indicates acceptance of revised terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
