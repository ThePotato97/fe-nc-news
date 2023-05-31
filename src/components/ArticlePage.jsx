import { useEffect } from "react";
import { useState } from "react";
import fetchArticle from "../controllers/fetchArticle";
import { useParams } from "react-router-dom";
import ArticleListCard from "./ArticleListCard";

function ArticlePage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    const getArticle = async () => {
      const article = await fetchArticle(articleId);
      setArticle(article);
    };
    getArticle();
  }, [articleId]);
  console.log(article);
  const { author, title, topic, votes, article_img_url } = article;
  return (
    <>
      {title !== undefined ? (
        <>
          <div className="article-header">
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
            </div>
          </div>
          <img src={article_img_url} alt={article.title} />
          <p>{article.body}</p>{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ArticlePage;
