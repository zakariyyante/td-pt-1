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
  badge?: "Best Bonus" | "Top Pick" | "Trending Now";
};

const badges: Array<Casino["badge"]> = ["Best Bonus", "Top Pick", "Trending Now"];

const casinoInput: CasinoInput[] = [
  {
    name: "bwin",
    logo: "/bwin_logo.png",
    bonus: "WELCOME OFFER AVAILABLE — SEE SITE",
    url: "https://www.bwin.pt/pt/sports",
    votes: 5634,
  },
  {
    name: "Placard",
    logo: "/placard_logo.png",
    bonus: "EXCLUSIVE PROMO — LIMITED TIME",
    url: "https://online.placard.pt/promoRedirect?key=ej0xMzc1ODQzOSZsPTEzNzQ2MDA2JnA9MTkzNjI%3D",
    votes: 5211,
  },
  {
    name: "BacanaPlay",
    logo: "/bacanaplay.png",
    bonus: "100% BONUS + FREE SPINS — TERMS APPLY",
    url: "https://www.bacanaplay.com/",
    votes: 4987,
  },
  {
    name: "Nossa Aposta",
    logo: "/nossaaposta.png",
    bonus: "MOBILE BONUS OFFERS — CHECK TERMS",
    url: "https://example-affiliate.com/nossaaposta?ref=jogo",
    votes: 4512,
    isMobile: true,
  },
  {
    name: "888 Casino",
    logo: "/888casino_logo.png",
    bonus: "MOBILE EXCLUSIVE — SEE OFFER",
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
