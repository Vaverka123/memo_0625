import { Grid } from "@chakra-ui/react";
import { type FC } from "react";
import MemoCard from "../memoCard/MemoCard";

const GameBoard: FC = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} m={9}>
      <MemoCard />
      <MemoCard />
      <MemoCard />
      <MemoCard />
      <MemoCard />
      <MemoCard />
      <MemoCard />
      <MemoCard />
      <MemoCard />
    </Grid>
  );
};

export default GameBoard;
