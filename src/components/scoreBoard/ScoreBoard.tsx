import { Flex, Text } from "@chakra-ui/react";
import { type FC } from "react";

const ScoreBoard: FC = () => {
  return (
    <Flex w={"100%"} align="center" justify="space-evenly" mb={4}>
      <Text textStyle="xl">Moves: 0</Text>{" "}
      <Text textStyle={"xl"}>Mistakes: 0</Text>{" "}
      <Text textStyle="xl">Time: 00:00</Text>
    </Flex>
  );
};
export default ScoreBoard;
