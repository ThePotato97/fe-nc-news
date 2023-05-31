import { useEffect } from "react";
import fetchArticles from "../controllers/fetchArticles";
import { useState } from "react";
import ArticleListCard from "./ArticleListCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const newArticles = await fetchArticles();
      setArticles(newArticles);
    };
    getArticles();
  }, []);
  return (
    <div className="article-list">
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleListCard key={article.article_id} article={article} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ArticleList;
