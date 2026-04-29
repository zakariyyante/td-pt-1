"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Casino } from "@/data/casinos";

const logos: Record<string, string> = {
  default:
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='80'><rect width='220' height='80' rx='14' fill='%23151501'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23fffec8' font-family='Arial' font-size='18'>JOGO CASINO PT</text></svg>",
};

type CasinoCardProps = {
  casino: Casino;
  mobileSuffix?: string;
  isOnline?: boolean;
};

export function CasinoCard({ casino, mobileSuffix = "", isOnline = true }: CasinoCardProps) {
  const href = `${casino.url}${mobileSuffix}`;
  const logoSrc = casino.logo.startsWith("/") ? casino.logo : logos[casino.logo] ?? logos.default;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="casino-card casino-glow group relative block overflow-hidden rounded-2xl p-5 transition-transform"
    >
      {isOnline && casino.badge ? (
        <span className="absolute top-3 left-3 rounded-full bg-[var(--primary-2)] px-3 py-1 text-xs font-bold text-[#021617]">
          {casino.badge}
        </span>
      ) : null}

      <div className="pointer-events-none absolute top-2 right-2 h-5 w-5 border-t-2 border-r-2 border-[var(--primary-2)] opacity-60" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-[var(--accent)] opacity-60" />

      <div className="mt-8 mb-5 flex h-16 items-center justify-center rounded-xl bg-[#0b0b04]">
        <Image src={logoSrc} alt={`${casino.name} logo`} width={180} height={56} className="h-auto w-auto max-h-11" />
      </div>

      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--accent)]/70">Votos</p>
          <p className="text-lg font-semibold">{casino.votes.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="gold-text gold-shimmer text-4xl leading-none font-extrabold">{casino.rating.toFixed(1)}</p>
          <div className="mt-1 flex justify-end gap-0.5 text-[var(--accent)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={`${casino.id}-star-${i}`} size={14} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-[var(--primary-2)]/40 bg-gradient-to-br from-[#131305] to-[#1a1a07] p-3">
        <p className="text-xs tracking-wide text-[var(--accent)]/70 uppercase">Bónus exclusivo</p>
        <p className="mt-1 text-sm font-bold">{casino.bonus}</p>
      </div>

      <span className="casino-btn block w-full rounded-xl px-4 py-3 text-center text-sm font-black tracking-wide uppercase">
        Jogar agora
      </span>
      <p className="mt-2 text-center text-[11px] text-[var(--accent)]/60">18+ | Termos aplicáveis</p>
    </a>
  );
}
