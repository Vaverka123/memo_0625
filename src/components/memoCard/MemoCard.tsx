import { AbsoluteCenter, Card } from "@chakra-ui/react";
import { type FC } from "react";

const MemoCard: FC = () => {
  return (
    <Card.Root width={"200px"} height={"200px"}>
      <AbsoluteCenter>memoCard</AbsoluteCenter>
    </Card.Root>
  );
};

export default MemoCard;
