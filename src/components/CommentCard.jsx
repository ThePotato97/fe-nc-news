import { Paper, Stack, Typography } from "@mui/material";
import VotingButtons from "./VotingButtons";
import { getRelativeTime } from "../utility";

function CommentCard({ comment }) {
  const { author, body, votes, created_at } = comment;

  return (
    <Paper sx={{ p: 1 }} elevation={2}>
      <Stack spacing={2} alignItems={"flex-start"}>
        <Typography variant={"subtitle1"}>
          {author} {getRelativeTime(created_at)}
        </Typography>
        <Typography variant={"body1"}>{body}</Typography>
        <VotingButtons votes={votes} direction="row" />
      </Stack>
    </Paper>
  );
}

export default CommentCard;
