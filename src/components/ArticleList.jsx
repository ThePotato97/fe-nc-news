import { useEffect, useState } from "react";
import fetchArticles from "../controllers/fetchArticles";
import ArticleListCard from "./ArticleListCard";
import { Stack } from "@mui/material";


function ArticleList() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      const newArticles = await fetchArticles();
      setArticles(newArticles);
      setIsLoading(false);
    };
    getArticles();
  }, []);
  return (
    <Stack spacing={1}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article) => (
          <ArticleListCard key={article.article_id} article={article} />
        ))
      )}
    </Stack>
  );
}

export default ArticleList;
