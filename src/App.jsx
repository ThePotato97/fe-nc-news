import "./App.css";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import ArticlePage from "./components/ArticlePage";
import { Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Stack alignItems={"center"}>
            <Nav />
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/article/:articleId" element={<ArticlePage />} />
            </Routes>
          </Stack>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
