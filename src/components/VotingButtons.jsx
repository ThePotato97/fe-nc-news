import { Stack } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
function VotingButtons({ votes }) {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <ArrowUpward />
      <div>{votes}</div>
      <ArrowDownward />
    </Stack>
  );
}

export default VotingButtons;
