import { useNavigate } from "react-router-dom";
import VotingButtons from "./VotingButtons";
import { Link } from "react-router-dom";

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
    <div>
      <div className="card-container">
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
      </div>
    </div>
  );
}

export default ArticleListCard;
