import { Stack } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
function VotingButtons({ votes, direction = "column" }) {
  return (
    <Stack
      justifyContent={"center"}
      direction={direction}
      alignItems={"center"}
    >
      <ArrowUpward />
      <div>{votes}</div>
      <ArrowDownward />
    </Stack>
  );
}

export default VotingButtons;
