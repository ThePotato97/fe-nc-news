import { useEffect, useState } from "react";
import fetchComments from "../controllers/fetchComments";
import CommentCard from "./CommentCard";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const comments = await fetchComments(articleId);
      setComments(comments);
    };
    getComments();
  }, []);
  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });
  return (
    <>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}

export default Comments;
