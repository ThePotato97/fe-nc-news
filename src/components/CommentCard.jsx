import { IconButton, Paper, Stack, Typography } from "@mui/material";
import VotingButtons from "./VotingButtons";
import { getRelativeTime } from "../utility";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DeleteForever } from "@mui/icons-material";

function CommentCard({ comment, handleDelete, deleteDisabled }) {
  const { user } = useContext(UserContext);
  const { author, body, votes, created_at, comment_id } = comment;

  return (
    <Paper sx={{ p: 1 }} elevation={2}>
      <Stack spacing={2} alignItems={"flex-start"}>
        <Typography variant={"subtitle1"}>
          {author} {getRelativeTime(created_at)}
        </Typography>
        <Typography variant={"body1"}>{body}</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <VotingButtons votes={votes} direction="row" />
          {user === author && (
            <IconButton
              disabled={deleteDisabled}
              color="error"
              onClick={() => handleDelete(comment_id)}
            >
              <DeleteForever />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default CommentCard;
