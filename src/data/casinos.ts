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
    name: "Lemon Casino",
    logo: "/lemon-casino.svg",
    bonus: "100% UP TO PS200 + 50 FREE SPINS",
    url: "https://example-affiliate.com/lemon?ref=jogo",
    votes: 5874,
  },
  {
    name: "Nomini",
    logo: "/nomini.svg",
    bonus: "100% UP TO PS150 + 100 FREE SPINS",
    url: "https://example-affiliate.com/nomini?ref=jogo",
    votes: 5412,
  },
  {
    name: "Tiki Casino",
    logo: "/tiki-casino.svg",
    bonus: "200% UP TO PS300 + 25 FREE SPINS",
    url: "https://example-affiliate.com/tiki?ref=jogo",
    votes: 5098,
  },
  {
    name: "Bet Panda",
    logo: "/betpanda.svg",
    bonus: "100% UP TO PS100 + 200 FREE SPINS",
    url: "https://example-affiliate.com/betpanda?ref=jogo",
    votes: 4922,
    isMobile: true,
  },
  {
    name: "Robocat",
    logo: "/robocat.svg",
    bonus: "125% UP TO PS250 + 40 FREE SPINS",
    url: "https://example-affiliate.com/robocat?ref=jogo",
    votes: 4336,
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
