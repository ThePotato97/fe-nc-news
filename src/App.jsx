import "./App.css";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
