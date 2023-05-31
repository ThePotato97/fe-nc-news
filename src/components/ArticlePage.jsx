import { useEffect } from "react";
import { useState } from "react";
import fetchArticle from "../controllers/fetchArticle";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";
import VotingButtons from "./VotingButtons";

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
  const { author, title, topic, votes, article_img_url, body } = article;
  return (
    <>
      {title !== undefined ? (
        <Paper sx={{ p: 1, maxWidth: "500px" }}>
          <Stack justifyContent={"space-between"} spacing={2}>
            <Paper elevation={2} sx={{ p: 1 }}>
              <Stack
                id="article-page-card"
                justifyContent={"left"}
                direction={"row"}
                alignContent={"center"}
                spacing={2}
              >
                <VotingButtons votes={votes} />
                <Stack
                  flexDirection={"column"}
                  alignItems={"start"}
                  justifyContent={"center"}
                >
                  <h3 className="card-title">{title}</h3>
                  <p className="card-author"></p>
                  <p className="card-topic">
                    t/{topic} Posted by {author}
                  </p>
                </Stack>
              </Stack>
            </Paper>
            <img src={article_img_url} className="article-image" alt={title} />
            <p>{body}</p>
          </Stack>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ArticlePage;
