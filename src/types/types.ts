export interface GameCard {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MemoCardProps extends GameCard, Omit<GameCard, "id"> {
  onClick: () => void;
}
