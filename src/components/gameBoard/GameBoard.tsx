import { Grid } from "@chakra-ui/react";
import { type FC } from "react";
import MemoCard from "../memoCard/MemoCard";

const GameBoard: FC = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} m={9}>
      {Array.from({ length: 9 }).map((_, index) => (
        <MemoCard key={index} />
      ))}
    </Grid>
  );
};

export default GameBoard;
