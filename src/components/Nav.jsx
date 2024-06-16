import "../css/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <img src="./assets/logo.png" className="navbar-logo" />
      <div className="nav-buttons">
        <Link to="/" className="nav-buttons--text">
          Home
        </Link>
        <Link to="/timeline" className="nav-buttons--text">
          Timeline
        </Link>
        <Link to="/photos" className="nav-buttons--text">
          Photos
        </Link>
        <Link to="/diary" className="nav-buttons--text">
          Diary
        </Link>
        <Link to="/about" className="nav-buttons--text">
          About
        </Link>
      </div>
    </nav>
  );
}
