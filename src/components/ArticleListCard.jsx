import VotingButtons from "./VotingButtons";
import { Paper, Stack, Typography, Link } from "@mui/material";
import { Comment } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
function ArticleListCard({ article }) {
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
    <Paper sx={{ p: 1 }}>
      <Stack spacing={1} direction="row" alignItems={"center"}>
        <VotingButtons votes={votes} />
        <img className="card-image" src={article_img_url} alt={title} />
        <Link
          underline="none"
          to={`/article/${article_id}`}
          component={RouterLink}
        >
          <Typography variant={"subtitle1"} fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant={"body1"}>
            t/{topic} Posted by {author}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Comment />
            <Typography variant={"body2"}>{comment_count} comments</Typography>
          </Stack>
        </Link>
      </Stack>
    </Paper>
  );
}

export default ArticleListCard;
