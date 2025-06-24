import { useState, useEffect } from "react";
import { Grid, Text, Button, VStack, Flex } from "@chakra-ui/react";
import MemoCard from "../memoCard/MemoCard";
import type { GameCard } from "@/types/types";
import Timer from "../timer/Timer";
import { generateCards, SYMBOLS } from "@/helpers/generateCards";
import Leaderboard from "../leaderboard/Leaderboard";

const GameBoard = () => {
  const [cards, setCards] = useState<GameCard[]>(generateCards);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [disableInput, setDisableInput] = useState(true);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIdx, secondIdx] = flippedIndices;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      setDisableInput(true);

      setTimeout(() => {
        const newCards = [...cards];

        if (firstCard.symbol === secondCard.symbol) {
          newCards[firstIdx].isMatched = true;
          newCards[secondIdx].isMatched = true;
          setMatchedCount((prev) => prev + 1);
        } else {
          newCards[firstIdx].isFlipped = false;
          newCards[secondIdx].isFlipped = false;
        }

        setCards(newCards);
        setFlippedIndices([]);
        setDisableInput(false);
        setMoves((prev) => prev + 1);
      }, 800);
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (matchedCount === SYMBOLS.length) {
      setIsActive(false);
    }
  }, [matchedCount]);

  const handleCardClick = (index: number) => {
    if (
      disableInput ||
      flippedIndices.includes(index) ||
      cards[index].isFlipped ||
      cards[index].isMatched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedIndices((prev) => [...prev, index]);
  };

  const handleReset = () => {
    setCards(generateCards());
    setFlippedIndices([]);
    setMatchedCount(0);
    setMoves(0);
    setTimer(0);
    setIsActive(true);
    setDisableInput(false);
  };

  const allMatched = matchedCount === SYMBOLS.length;

  return (
    <VStack mt={8}>
      {allMatched ? (
        <>
          <Text fontSize="xl" fontWeight="bold" color="green.400">
            🎉 You won in {moves} moves and {timer} seconds!
          </Text>
          <Leaderboard moves={moves} time={timer} onRestart={handleReset} />
        </>
      ) : (
        <>
          <Flex w={"80%"} justify="space-between">
            <Timer timer={timer} />{" "}
            <Button color={"blue.500"} onClick={handleReset}>
              {isActive ? "Restart Game" : "Start Game"}
            </Button>
            <Text fontSize="lg" fontWeight="semibold">
              🎯 Moves: {moves}
            </Text>
          </Flex>

          <Grid templateColumns="repeat(4, 1fr)" gap={4} m={4}>
            {cards.map((card, index) => (
              <MemoCard
                key={card.id}
                id={card.id}
                symbol={card.symbol}
                isFlipped={card.isFlipped}
                isMatched={card.isMatched}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </Grid>
        </>
      )}
    </VStack>
  );
};

export default GameBoard;
