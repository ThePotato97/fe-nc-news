import { useEffect, useState } from "react";
import fetchArticles from "../controllers/fetchArticles";
import ArticleListCard from "./ArticleListCard";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";

function ArticleList() {
  const { topicName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      const newArticles = await fetchArticles(topicName);
      setArticles(newArticles);
      setIsLoading(false);
    };
    getArticles();
  }, [topicName]);
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
