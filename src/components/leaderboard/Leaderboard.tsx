import { useEffect, useState, type FC } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Heading,
  Table,
  Flex,
} from "@chakra-ui/react";

const LEADERBOARD_KEY = "memoryGameLeaderboard";

interface ScoreEntry {
  name: string;
  moves: number;
  time: number;
}

interface LeaderboardProps {
  moves: number;
  time: number;
  onRestart: () => void;
}

const medal = (index: number) => {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return "";
};

const Leaderboard: FC<LeaderboardProps> = ({ moves, time, onRestart }) => {
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [showEntryForm, setShowEntryForm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LEADERBOARD_KEY);
    const data: ScoreEntry[] = saved ? JSON.parse(saved) : [];

    const qualifies =
      data.length < 5 ||
      data.some(
        (entry) =>
          entry.time > time || (entry.time === time && entry.moves > moves)
      );

    setLeaderboard(data);
    if (qualifies) {
      setShowEntryForm(true);
    }
  }, [moves, time]);

  const saveScore = () => {
    const newEntry: ScoreEntry = { name: playerName || "Player", moves, time };

    const updated = [...leaderboard, newEntry]
      .sort((a, b) => (a.time !== b.time ? a.time - b.time : a.moves - b.moves))
      .slice(0, 5);

    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updated));
    setLeaderboard(updated);
    setShowEntryForm(false);
    setPlayerName("");
  };

  const cancelEntry = () => {
    setShowEntryForm(false);
  };

  return (
    <Box mt={10} textAlign="center" position="relative">
      <Heading size="lg" mb={4}>
        Leaderboard
      </Heading>

      {showEntryForm && (
        <Box
          bg="white"
          color={"black"}
          boxShadow="lg"
          rounded="md"
          p={6}
          w="400px"
          mx="auto"
          mb={6}
          zIndex={10}
          position="relative"
        >
          <Text fontWeight="semibold" mb={3}>
            🏆 New High Score!
          </Text>
          <Text mb={2}>Enter your name to add to the leaderboard:</Text>
          <Input
            name="playerName"
            placeholder="Your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            mb={4}
          />
          <Flex justify="center" gap={4}>
            <Button color="blue.500" onClick={saveScore}>
              Save
            </Button>
            <Button color={"red.500"} onClick={cancelEntry}>
              Cancel
            </Button>
          </Flex>
        </Box>
      )}

      {leaderboard.length === 0 ? (
        <Text>No scores yet. Play to get on the board!</Text>
      ) : (
        <Table.Root
          size={"lg"}
          w="800px"
          mx="auto"
          variant={"outline"}
          rounded={"lg"}
        >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>🏅</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Time (s)</Table.ColumnHeader>
              <Table.ColumnHeader>Moves</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {leaderboard.map((entry, idx) => (
              <Table.Row key={idx}>
                <Table.Cell>{medal(idx)}</Table.Cell>
                <Table.Cell>{entry.name}</Table.Cell>
                <Table.Cell>{entry.time}</Table.Cell>
                <Table.Cell>{entry.moves}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}

      <Button onClick={onRestart} m={6} p={8} color="blue.500">
        🔁 Play Again
      </Button>
    </Box>
  );
};

export default Leaderboard;
