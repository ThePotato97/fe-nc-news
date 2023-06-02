import { useEffect } from "react";
import { useState } from "react";
import { Link } from "@mui/material";
import fetchTopics from "../controllers/fetchTopics";
import { Link as RouterLink } from "react-router-dom";
import { Paper, Typography, Tooltip } from "@mui/material";

function Topics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      const newTopics = await fetchTopics();
      setTopics(newTopics);
    };
    getTopics();
  }, []);
  return (
    <>
      {topics.map(({ slug, description }) => {
        return (
          <Link to={`/t/${slug}`} key={slug} component={RouterLink}>
            <Tooltip title={description}>
              <Paper
                sx={{
                  minHeight: "40px",
                  minWidth: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant={"body1"}>{slug}</Typography>
              </Paper>
            </Tooltip>
          </Link>
        );
      })}
    </>
  );
}

export default Topics;
