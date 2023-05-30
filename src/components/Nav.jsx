import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
    </nav>
  );
}

export default Nav;
