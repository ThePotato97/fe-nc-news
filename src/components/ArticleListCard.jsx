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
    <div>
      <div className="card-container">
        <div>
          <div>⬆️</div>
          <div>{votes}</div>
          <div>⬇️</div>
        </div>
        <img className="card-image" src={article_img_url} alt={title} />
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-author"></p>
          <p className="card-topic">
            t/{topic} Posted by {author}
          </p>
          <p className="card-comments">🗨️: {comment_count}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleListCard;
