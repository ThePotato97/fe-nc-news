import { useEffect, useState, useContext } from "react";
import { fetchComments, postComment, deleteComment } from "../api";
import CommentCard from "./CommentCard";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  Paper,
  Stack,
} from "@mui/material";
import { Comment } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { UserContext } from "../context/UserContext";

function Comments({ articleId }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [deleteDisabled, setDeleteDisabled] = useState(false);
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
      const postedComment = await postComment(articleId, user, comment);
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

  const handleCommentDelete = async (commentId) => {
    setDeleteDisabled(true);
    const status = await deleteComment(commentId);
    if (status === 204) {
      setComments((currComments) => {
        return currComments.filter(
          (comment) => comment.comment_id !== commentId
        );
      });
      queueSnackbar("Comment deleted!", "success");
    } else {
      queueSnackbar("Failed to delete comment!", "error");
    }
    setDeleteDisabled(false);
  };

  const commentElements =
    comments.length > 0 ? (
      comments.map((comment) => {
        return (
          <CommentCard
            deleteDisabled={deleteDisabled}
            handleDelete={handleCommentDelete}
            key={comment.comment_id}
            comment={comment}
          />
        );
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Typography variant="subtitle1">Commenting as {user}</Typography>
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
