import { Link } from "react-router-dom";
import Topics from "./Topics";
import { Paper, Stack, Typography } from "@mui/material";

function Nav() {
  return (
    <nav className="nav">
      <Stack direction="row" spacing={1} sx={{ m: 1 }}>
        <Link className="nav-link" to="/">
          <Paper sx={{ p: 1 }}>
            <Typography variant={"body1"}>Home</Typography>
          </Paper>
        </Link>

        <Topics />
      </Stack>
    </nav>
  );
}

export default Nav;
