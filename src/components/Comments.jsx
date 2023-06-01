import { useEffect, useState } from "react";
import fetchComments from "../controllers/fetchComments";
import CommentCard from "./CommentCard";
import { Comment } from "@mui/icons-material";
import { Paper, Stack, Typography, TextField, Button } from "@mui/material";
import { FormControl, InputLabel, FormHelperText } from "@mui/material";
import { Input } from "@mui/icons-material";
import postComment from "../controllers/postComment";
import { useSnackbar } from "notistack";

const USERNAME = "grumpy19";

function Comments({ articleId }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      const comments = await fetchComments(articleId);
      setComments(comments);
      setIsLoading(false);
    };
    getComments();
  }, [articleId]);

  const commentElements =
    comments.length > 0 ? (
      comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })
    ) : (
      <Paper elevation={2} sx={{ p: 1 }}>
        <Stack alignItems="center">
          <Comment />
          <Typography align="center" variant="h4">
            No Comments Yet!
          </Typography>
        </Stack>
      </Paper>
    );

  const queueSnackbar = (message, variant) => {
    enqueueSnackbar(message, {
      variant: variant,
      anchorOrigin: { vertical: "top", horizontal: "center" },
      action: (key) => (
        <Button onClick={() => closeSnackbar(key)}>Dismiss</Button>
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    setSubmitDisabled(true);
    try {
      const postedComment = await postComment(articleId, USERNAME, comment);
      setComments((currComments) => {
        return [postedComment, ...currComments];
      });
      queueSnackbar("Comment posted!", "success");
      e.target.comment.value = "";
    } catch (err) {
      queueSnackbar("Failed to post comment!", "error");
    }
    setSubmitDisabled(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography variant="subtitle1">Commenting as {USERNAME}</Typography>
          <TextField
            required
            name="comment"
            placeholder="Enter a comment"
            multiline
            minRows={4}
            maxRows={10}
            inputProps={{ maxLength: 1000 }}
          />
          <Button type="submit" variant="contained" disabled={submitDisabled}>
            Submit
          </Button>
        </FormControl>
      </form>
      {isLoading ? <p>Loading...</p> : commentElements}
    </>
  );
}

export default Comments;
