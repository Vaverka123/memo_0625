import type { FC } from "react";
import { Text } from "@chakra-ui/react";

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

interface TimerProps {
  timer: number;
}
const Timer: FC<TimerProps> = ({ timer }) => {
  return (
    <Text fontSize="lg" fontWeight="semibold">
      ⏱ Time: {formatTime(timer)}
    </Text>
  );
};

export default Timer;
