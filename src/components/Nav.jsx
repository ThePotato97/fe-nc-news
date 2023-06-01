import { Link } from "react-router-dom";
import Topics from "./Topics";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Topics />
    </nav>
  );
}

export default Nav;
