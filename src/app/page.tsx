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
              Jogo Casino PT • Updated for {year}
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-black sm:text-6xl">
              Best UK Offers at <span className="gold-text gold-shimmer">Jogo Casino PT</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--accent)]/80 sm:text-lg">
              Compare trusted casinos with standout bonuses and fair terms. Fresh picks every week from our editorial team.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase">
              <span className="rounded-full border border-[var(--primary-2)]/50 bg-[var(--muted)] px-3 py-2">UKGC Licensed</span>
              <span className="rounded-full border border-[var(--primary-2)]/50 bg-[var(--muted)] px-3 py-2">Editor Picks</span>
              <span className="rounded-full border border-[var(--primary-2)]/50 bg-[var(--muted)] px-3 py-2">Fast Payouts</span>
            </div>
          </div>
        </section>

        <section id="top-casinos" className="mx-auto max-w-6xl px-4 py-10">
          <h3 className="gold-text text-3xl font-black sm:text-4xl">Top Rated Casino Sites This Week</h3>
          <p className="mt-2 text-[var(--accent)]/75">Our rankings are refreshed weekly based on value, trust, and payout reliability.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {regularCasinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[var(--primary-2)]/35 bg-[#111106] p-4 text-sm text-[var(--accent)]/70">
            Disclaimer: Offers and terms can change at any time. Always review full operator terms before playing.
          </div>
        </section>

        <section id="how-we-rank" className="my-8 border-y border-[var(--primary-2)]/30 bg-[#0b0b04] px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[var(--primary-2)]/35 bg-[#111106] p-6">
              <h4 className="mb-4 text-xl font-black">What makes our reviews different?</h4>
              <ul className="space-y-2 text-sm text-[var(--accent)]/85">
                <li>♠ We verify licensing and safety signals before listing any brand.</li>
                <li>♦ We score terms quality, not just headline bonus size.</li>
                <li>♣ We keep rankings current with routine editorial updates.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[var(--primary-2)]/35 bg-[#111106] p-6">
              <h4 className="mb-4 text-xl font-black">Responsible Gambling</h4>
              <p className="mb-3 text-sm text-[var(--accent)]/80">
                Set limits, take breaks, and seek support if needed. National Gambling Helpline: 0808 8020 133.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="site-nav-link">BeGambleAware</a>
                <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="site-nav-link">GamCare</a>
                <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="site-nav-link">Helpline &amp; GAMSTOP</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer mt-16 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center text-2xl font-black uppercase">
            <span className="gold-text">Jogo Casino PT</span>
          </div>
          <div className="grid gap-6 border-y border-[var(--primary-2)]/25 py-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">Quick Links</h4>
              <ul className="space-y-1 text-sm text-[var(--accent)]/80">
                <li><a href="#top-casinos">Top Casinos</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Legal</h4>
              <p className="text-sm text-[var(--accent)]/80">Jogo Casino PT is an independent informational comparison website.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="mb-2 font-semibold">Disclaimer</h4>
              <p className="text-sm text-[var(--accent)]/80">
                We may receive commission from partner links. Please gamble responsibly.
              </p>
            </div>
          </div>
          <div className="badge-strip mt-6 rounded-2xl p-4">
            <p className="mb-3 text-center text-xs font-black tracking-[0.2em] uppercase">Play Responsibly</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image src="/18-plus-br.png" alt="18 plus badge" width={56} height={30} />
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">
                <Image src="/gambleaware.png" alt="BeGambleAware logo" width={112} height={30} />
              </a>
              <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer">
                <Image src="/gamcare.png" alt="GamCare logo" width={92} height={30} />
              </a>
              <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer">
                <Image src="/gamestop.png" alt="GAMSTOP logo" width={92} height={30} />
              </a>
              <a href="https://www.srij.turismodeportugal.pt/pt" target="_blank" rel="noopener noreferrer">
                <Image src="/srj.png" alt="SRJ logo" width={86} height={30} />
              </a>
              <a href="https://www.icad.pt" target="_blank" rel="noopener noreferrer">
                <Image src="/icad.png" alt="ICAD logo" width={84} height={30} />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[var(--accent)]/70">
            © {year} jogocasinopt.com. For informational purposes only.
          </p>
        </div>
      </footer>

      {gclid ? <MobileCasinoModal gclid={gclid} /> : null}
    </div>
  );
}
