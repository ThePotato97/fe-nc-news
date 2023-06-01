import { useEffect, useState } from "react";
import fetchComments from "../controllers/fetchComments";
import CommentCard from "./CommentCard";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Comment } from "@mui/icons-material";
import { Stack } from "@mui/material";

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
  }, []);

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

  return <>{isLoading ? <p>Loading...</p> : commentElements}</>;
}

export default Comments;
