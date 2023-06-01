import { Stack, IconButton } from "@mui/material";
import {
  ArrowCircleDownTwoTone,
  ArrowCircleUpTwoTone,
} from "@mui/icons-material";

import { useState } from "react";
function VotingButtons({ handleVote, votes, direction = "column" }) {
  const [voteType, setVoteType] = useState("none");

  const handleUpVote = async () => {
    if (voteType === "up") {
      setVoteType("none");
      return await handleVote(-1);
    }
    setVoteType("up");
    await handleVote(1);
  };

  const handleDownVote = async () => {
    if (voteType === "down") {
      setVoteType("none");
      return await handleVote(1);
    }
    setVoteType("down");
    await handleVote(-1);
  };

  return (
    <Stack
      justifyContent={"center"}
      direction={direction}
      alignItems={"center"}
    >
      <IconButton
        onClick={handleUpVote}
        color={voteType === "up" ? "success" : undefined}
      >
        <ArrowCircleUpTwoTone />
      </IconButton>
      <div>{votes}</div>
      <IconButton
        onClick={handleDownVote}
        color={voteType === "down" ? "error" : undefined}
      >
        <ArrowCircleDownTwoTone />
      </IconButton>
    </Stack>
  );
}

export default VotingButtons;
