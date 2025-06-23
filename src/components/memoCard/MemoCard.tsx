import { Box, Flex } from "@chakra-ui/react";
import type { FC } from "react";
import { motion } from "framer-motion";
import type { MemoCardProps } from "@/types/types";

const MotionBox = motion(Box);

const MemoCard: FC<MemoCardProps> = ({
  symbol,
  isFlipped,
  isMatched,
  onClick,
}) => {
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick();
    }
  };

  return (
    <Box
      w="200px"
      h="200px"
      onClick={handleClick}
      cursor={isMatched ? "default" : "pointer"}
      role="item"
      aria-label={
        isFlipped || isMatched
          ? `Card with symbol ${symbol}`
          : "Hidden card, click to reveal"
      }
    >
      <MotionBox
        w="full"
        h="full"
        position="relative"
        animate={{ rotateY: isFlipped || isMatched ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Flex
          position="absolute"
          inset="0"
          borderRadius="md"
          align="center"
          justify="center"
          fontSize="2xl"
          fontWeight="bold"
          bg="white"
          color="black"
          border="1px solid"
          borderColor="gray.300"
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
        >
          {symbol}
        </Flex>

        <Flex
          position="absolute"
          inset="0"
          borderRadius="md"
          align="center"
          justify="center"
          bg="blue.600"
          color="white"
          fontSize="xl"
          fontWeight="bold"
          border="1px solid"
          borderColor="gray.300"
          backfaceVisibility="hidden"
        >
          ?
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default MemoCard;
