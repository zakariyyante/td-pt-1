type CasinoInput = {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
};

export type Casino = CasinoInput & {
  id: string;
  rating: number;
  badge?: "Melhor Bónus" | "Escolha Principal" | "Em Alta";
};

const badges: Array<Casino["badge"]> = ["Melhor Bónus", "Escolha Principal", "Em Alta"];

const casinoInput: CasinoInput[] = [
  {
    name: "bwin",
    logo: "/bwin_logo.png",
    bonus: "OFERTA DE BOAS-VINDAS — VER NO SITE",
    url: "https://www.bwin.pt/pt/sports",
    votes: 5634,
  },
  {
    name: "Placard",
    logo: "/placard_logo.png",
    bonus: "PROMOÇÃO EXCLUSIVA — POR TEMPO LIMITADO",
    url: "https://online.placard.pt/promoRedirect?key=ej0xMzc1ODQzOSZsPTEzNzQ2MDA2JnA9MTkzNjI%3D",
    votes: 5211,
  },
  {
    name: "BacanaPlay",
    logo: "/bacanaplay.png",
    bonus: "BÓNUS 100% + RODADAS GRÁTIS — TERMOS APLICÁVEIS",
    url: "https://www.bacanaplay.com/",
    votes: 4987,
  },
  {
    name: "Nossa Aposta",
    logo: "/nossaaposta.png",
    bonus: "OFERTAS PARA TELEMÓVEL — CONSULTE OS TERMOS",
    url: "https://example-affiliate.com/nossaaposta?ref=jogo",
    votes: 4512,
    isMobile: true,
  },
  {
    name: "888 Casino",
    logo: "/888casino_logo.png",
    bonus: "EXCLUSIVO PARA TELEMÓVEL — VER OFERTA",
    url: "https://example-affiliate.com/888casino?ref=jogo",
    votes: 4026,
    isMobile: true,
  },
];

const toHashId = (seed: string): string => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
};

export const casinos: Casino[] = casinoInput.map((casino, index) => ({
  ...casino,
  id: toHashId(`${casino.name}-${index}`),
  rating: Number((10 - index * 0.2).toFixed(1)),
  badge: index < 3 ? badges[index] : undefined,
}));

export const regularCasinos = casinos.filter((casino) => casino.isMobile !== true);
export const mobileCasinos = casinos.filter((casino) => casino.isMobile === true);
