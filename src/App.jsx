import "./App.css";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import ArticlePage from "./components/ArticlePage";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <Stack alignItems={"center"}>
          <Nav />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </>
  );
}

export default App;
