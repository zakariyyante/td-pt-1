import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CasinoCard } from "@/components/CasinoCard";
import { mobileCasinos } from "@/data/casinos";

type MobileCasinoModalProps = {
  gclid: string;
};

export function MobileCasinoModal({ gclid }: MobileCasinoModalProps) {
  const encoded = encodeURIComponent(gclid);
  const suffix = `&s=4&utm_medium=${encoded}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070703]">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="inline-flex rounded-full border border-[var(--primary-2)]/50 bg-[#101005] px-4 py-2 text-xs font-bold tracking-wider uppercase">
            Ofertas móveis desbloqueadas
          </p>
          <h2 className="gold-text mt-4 text-3xl font-black sm:text-4xl">Melhores casinos para telemóvel</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {mobileCasinos.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} mobileSuffix={suffix} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
