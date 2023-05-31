import { useNavigate } from "react-router-dom";
import VotingButtons from "./VotingButtons";
import { Link } from "react-router-dom";
import { Paper, Stack } from "@mui/material";

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
          <h3 className="card-title">{title}</h3>
          <p className="card-author"></p>
          <p className="card-topic">
            t/{topic} Posted by {author}
          </p>
          <p className="card-comments">🗨️: {comment_count}</p>
        </Link>
      </Stack>
    </Paper>
  );
}

export default ArticleListCard;
