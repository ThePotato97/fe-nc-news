import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fetchTopics from "../controllers/fetchTopics";

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
      {topics.map((topic) => {
        return (
          <Link to={`/t/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </>
  );
}

export default Topics;
