import { Button } from "@chakra-ui/react";
import type { FC } from "react";
import { RiPlayFill } from "react-icons/ri";

const Controls: FC = () => {
  return (
    <Button color={"teal.500"}>
      <RiPlayFill />
      START
    </Button>
  );
};

export default Controls;
