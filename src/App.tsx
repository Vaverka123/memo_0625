import { Flex } from "@chakra-ui/react";
import "./App.css";
import GameBoard from "./components/gameBoard/GameBoard";
import Controls from "./components/controls/Controls";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";

function App() {
  return (
    <Flex direction={"column"} align="center" justify="center" height="100vh">
      <ScoreBoard moves={0} mistakes={0} time={"00:00"} />
      <GameBoard />
      <Controls />
    </Flex>
  );
}

export default App;
