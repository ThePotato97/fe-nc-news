import { Link as RouterLink } from "react-router-dom";
import Topics from "./Topics";
import { Paper, Stack, Link } from "@mui/material";
import { Home } from "@mui/icons-material";

function Nav() {
  return (
    <nav className="nav">
      <Stack direction="row" spacing={1} sx={{ m: 1 }}>
        <Link to="/" component={RouterLink}>
          <Paper
            sx={{
              minHeight: "40px",
              minWidth: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Home />
          </Paper>
        </Link>
        <Topics />
      </Stack>
    </nav>
  );
}

export default Nav;
