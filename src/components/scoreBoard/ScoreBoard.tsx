import { Flex, Text } from "@chakra-ui/react";
import { type FC } from "react";

interface ScoreBoardProps {
  moves: number;
  mistakes: number;
  time: string;
}

const ScoreBoard: FC<ScoreBoardProps> = ({ moves, mistakes, time }) => {
  return (
    <Flex w={"100%"} align="center" justify="space-evenly" mb={4}>
      <Text textStyle="xl">Moves: {moves}</Text>
      <Text textStyle={"xl"}>Mistakes: {mistakes}</Text>
      <Text textStyle="xl">Time: {time}</Text>
    </Flex>
  );
};
export default ScoreBoard;
