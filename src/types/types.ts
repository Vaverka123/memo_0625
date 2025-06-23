export interface MemoCardProps {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export interface GameCard {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}
