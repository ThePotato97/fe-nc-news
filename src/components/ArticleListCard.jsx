import { useNavigate } from "react-router-dom";
import VotingButtons from "./VotingButtons";
import { Link } from "react-router-dom";
import { Paper, Stack, Typography } from "@mui/material";
import { Comment } from "@mui/icons-material";
function ArticleListCard({ article, hideThumbnail = false }) {
  const navigate = useNavigate();
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
      <Stack spacing={1} direction="row">
        <VotingButtons votes={votes} />
        <img className="card-image" src={article_img_url} alt={title} />
        <Link to={`/article/${article_id}`} className="card-info">
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
