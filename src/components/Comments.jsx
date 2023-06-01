import { useEffect, useState } from "react";
import fetchComments from "../controllers/fetchComments";
import CommentCard from "./CommentCard";
import { Comment } from "@mui/icons-material";
import { Paper, Stack, Typography, TextField, Button } from "@mui/material";
import { FormControl, InputLabel, FormHelperText } from "@mui/material";
import { Input } from "@mui/icons-material";
import postComment from "../controllers/postComment";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const username = e.target.username.value;
    const postedComment = await postComment(articleId, username, comment);
    setComments((currComments) => {
      return [postedComment, ...currComments];
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            name="username"
            placeholder="Enter a username"
            inputProps={{ maxLength: 1000 }}
          />
          <TextField
            name="comment"
            placeholder="Enter a comment"
            multiline
            minRows={4}
            maxRows={10}
            inputProps={{ maxLength: 1000 }}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </FormControl>
      </form>
      {isLoading ? <p>Loading...</p> : commentElements}
    </>
  );
}

export default Comments;
