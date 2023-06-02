import { useEffect, useState } from "react";
import { fetchArticles } from "../api/";
import ArticleListCard from "./ArticleListCard";
import {
  Stack,
  MenuItem,
  IconButton,
  Typography,
  Paper,
  TextField,
} from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

function ArticleList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAscending, setIsAscending] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");

  const { topicName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {}, [sortBy, isAscending]);
  useEffect(() => {
    const getArticles = async () => {
      setIsLoading(true);
      setSearchParams((currParams) => {
        const newParams = new URLSearchParams(currParams);
        newParams.set("sort_by", sortBy);
        newParams.set("order", isAscending ? "asc" : "desc");
        return newParams;
      });
      const params = new URLSearchParams(searchParams);
      if (topicName) params.set("topic", topicName);
      const newArticles = await fetchArticles(params);
      setArticles(newArticles);
      setIsLoading(false);
    };
    getArticles();
  }, [topicName, sortBy, isAscending, searchParams]);

  const handleToggleSort = () => {
    setIsAscending((currIsAscending) => !currIsAscending);
  };
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <Paper sx={{ p: 1, maxWidth: "800px", width: "100%" }}>
      <Stack
        sx={{ m: 1 }}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography variant="body1">Sort by: </Typography>
        <TextField select value={sortBy} onChange={handleSortByChange}>
          <MenuItem value="created_at">Posted Date</MenuItem>
          <MenuItem value="comment_count">Comment Count</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </TextField>
        <IconButton onClick={handleToggleSort}>
          {isAscending ? <ArrowUpward /> : <ArrowDownward />}
        </IconButton>
      </Stack>
      <Stack spacing={1}>
        {isLoading
          ? Array.from(new Array(6)).map((item, index) => (
              <ArticleListCard loading={true} key={index} article={{}} />
            ))
          : articles.map((article) => (
              <ArticleListCard key={article.article_id} article={article} />
            ))}
      </Stack>
    </Paper>
  );
}

export default ArticleList;
