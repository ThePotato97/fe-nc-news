import "./App.css";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import { SnackbarProvider } from "notistack";
import ArticlePage from "./components/ArticlePage";
import { useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { HashRouter } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState("grumpy19");
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
        <CssBaseline />
        <UserContext.Provider value={{ user, setUser }}>
          <SnackbarProvider autoHideDuration={6000}>
            <HashRouter>
              <Stack alignItems={"center"}>
                <Nav />
                <Routes>
                  <Route path="/" element={<ArticleList />} />
                  <Route path="/topic/:topic" element={<ArticleList />} />
                  <Route path="/article/:articleId" element={<ArticlePage />} />
                </Routes>
              </Stack>
            </HashRouter>
          </SnackbarProvider>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
