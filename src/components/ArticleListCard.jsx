import VotingButtons from "./VotingButtons";
import { Paper, Stack, Typography, Link, Skeleton } from "@mui/material";
import { Comment } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
function ArticleListCard({ article, loading }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    author,
    title,
    article_id,
    topic,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = article;
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack spacing={1} direction="row" alignItems={"center"}>
        {loading || !imageLoaded ? (
          <Skeleton variant="rectangular">
            <VotingButtons votes={0} />
          </Skeleton>
        ) : (
          <VotingButtons votes={votes} />
        )}
        {loading ? (
          <Skeleton variant="rectangular">
            <img className="card-image" />
          </Skeleton>
        ) : (
          <img
            className="card-image"
            src={article_img_url}
            alt={title}
            onLoad={() => setImageLoaded(true)}
          />
        )}
        <Link
          sx={{ width: "100%" }}
          underline="none"
          to={`/article/${article_id}`}
          component={RouterLink}
        >
          <Typography variant={"subtitle1"} fontWeight={"bold"}>
            {loading ? <Skeleton /> : title}
          </Typography>
          <Typography variant={"body1"}>
            {loading ? <Skeleton /> : `t/${topic} Posted by ${author}`}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Comment />
            {loading ? (
              <Skeleton width={50} />
            ) : (
              <Typography variant={"body2"}>
                {comment_count} comments
              </Typography>
            )}
          </Stack>
        </Link>
      </Stack>
    </Paper>
  );
}

export default ArticleListCard;
