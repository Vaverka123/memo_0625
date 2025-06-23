import type { GameCard } from "@/types/types";

export const SYMBOLS = ["🐶", "🐱", "🐰", "🦊", "🐸", "🐵", "🐼", "🦁"];

const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
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
