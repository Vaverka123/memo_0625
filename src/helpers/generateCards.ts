import type { GameCard } from "@/types/types";

export const SYMBOLS = ["🐶", "🐱", "🐰", "🦊", "🐸", "🐵", "🐼", "🦁"];

const shuffle = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const generateCards = (): GameCard[] => {
  const duplicated = [...SYMBOLS, ...SYMBOLS];
  return shuffle(duplicated).map((symbol, index) => ({
    id: index,
    symbol,
    isFlipped: false,
    isMatched: false,
  }));
};
