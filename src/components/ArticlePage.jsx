import { useEffect } from "react";
import { useState } from "react";
import fetchArticle from "../controllers/fetchArticle";
import { useParams } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import VotingButtons from "./VotingButtons";
import Comments from "./Comments";

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
                  <Typography variant={"h6"} fontWeight={"bold"}>
                    {title}
                  </Typography>
                  <Typography variant={"subtitle1"}>
                    t/{topic} Posted by {author}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
            <img src={article_img_url} className="article-image" alt={title} />
            <Typography variant={"body1"}>{body}</Typography>
            <Comments articleId={articleId} />
          </Stack>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ArticlePage;
