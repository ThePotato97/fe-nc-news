import { useEffect } from "react";
import fetchArticles from "../controllers/fetchArticles";
import { useState } from "react";
import ArticleListCard from "./ArticleListCard";
import { Stack } from "@mui/material";

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
    <Stack spacing={1}>
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleListCard key={article.article_id} article={article} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Stack>
  );
}

export default ArticleList;
