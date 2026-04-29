import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="gold-text text-4xl font-black">Privacy Policy</h1>
        <p className="mt-4 text-[var(--accent)]/80">
          This privacy policy explains how Jogo Casino PT collects and uses information when you visit jogocasinopt.com.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-7 text-[var(--accent)]/85">
          <section>
            <h2 className="text-xl font-bold">Information we collect</h2>
            <p>
              We may collect anonymized analytics data, referral information, and interactions with affiliate links to improve our content and user experience.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">How information is used</h2>
            <p>
              Jogo Casino PT uses data to analyze site performance, update rankings, and ensure content relevance. We do not knowingly collect personal data from users under 18.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Responsible gambling</h2>
            <p>
              If gambling is affecting your wellbeing, contact the National Gambling Helpline at 0808 8020 133.
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
            <h2 className="text-xl font-bold">Contact</h2>
            <p>For questions regarding this policy, please contact Jogo Casino PT via jogocasinopt.com.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
