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
            <h4 className="mb-2 font-semibold">Quick Links</h4>
            <ul className="space-y-1 text-sm text-[var(--accent)]/80">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Legal</h4>
            <p className="text-sm text-[var(--accent)]/80">
              Informational website only. We may receive commissions from partner links.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="mb-2 font-semibold">Disclaimer</h4>
            <p className="text-sm text-[var(--accent)]/80">
              Gambling can be addictive. Please play responsibly and seek support if gambling stops being fun.
              National Gambling Helpline: 0808 8020 133.
            </p>
          </div>
        </div>

        <div className="badge-strip mt-6 rounded-2xl p-4">
          <p className="mb-3 text-center text-xs font-black tracking-[0.2em] uppercase">Play Responsibly</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Image src="/18plus.png" alt="18 plus badge" width={56} height={30} />
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
  );
}
