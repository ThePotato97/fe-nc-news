import { useEffect } from "react";
import { useState } from "react";
import { fetchArticle, incArticleVotes } from "../api";
import { useParams } from "react-router-dom";
import { Alert, Paper, Typography, Stack, Snackbar } from "@mui/material";
import VotingButtons from "./VotingButtons";
import Comments from "./Comments";

function ArticlePage() {
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [article, setArticle] = useState({});
  const [open, setOpen] = useState(false);

  const handleError = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleVote = async (amount) => {
    setVotes((currVotes) => currVotes + amount);
    try {
      const article = await incArticleVotes(articleId, amount);
      setArticle(article);
      setVotes(article.votes);
    } catch (err) {
      handleError();
      setVotes((currVotes) => currVotes - amount);
    }
  };

  useEffect(() => {
    const getArticle = async () => {
      setIsLoading(true);
      const article = await fetchArticle(articleId);
      setArticle(article);
      setVotes(article.votes);
      setIsLoading(false);
    };
    getArticle();
  }, [articleId]);
  const { author, title, topic, article_img_url, body } = article;
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed to add vote!
        </Alert>
      </Snackbar>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Paper sx={{ p: 1, maxWidth: "800px" }}>
          <Stack justifyContent={"space-between"} spacing={2}>
            <Paper elevation={2} sx={{ p: 1 }}>
              <Stack
                id="article-page-card"
                justifyContent={"left"}
                direction={"row"}
                alignContent={"center"}
                spacing={2}
              >
                <VotingButtons handleVote={handleVote} votes={votes} />
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
      )}
    </>
  );
}

export default ArticlePage;
