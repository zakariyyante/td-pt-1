"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#melhores-casinos", label: "Melhores casinos" },
  { href: "#how-we-rank", label: "Como classificamos" },
  { href: "/privacy", label: "Privacidade" },
  { href: "/terms", label: "Termos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-wide uppercase">
          <span className="text-[var(--primary-2)]">♠</span>
          <span className="gold-text">Jogo Casino PT</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav-link text-sm font-semibold">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="#melhores-casinos"
          className="casino-btn hidden rounded-xl px-4 py-2 text-sm font-black tracking-wide uppercase md:inline-block"
        >
          Ver ofertas
        </a>

        <button
          type="button"
          aria-label="Alternar navegação"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-[var(--primary-2)]/60 p-2 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--primary-2)]/30 bg-[#0e0e05] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={`mobile-${link.href}`} href={link.href} onClick={() => setOpen(false)} className="font-semibold">
                {link.label}
              </Link>
            ))}
            <a href="#melhores-casinos" className="casino-btn rounded-xl px-4 py-2 text-center text-sm font-black uppercase">
              Ver ofertas
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
