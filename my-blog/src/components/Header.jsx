import { Link } from "react-router-dom";
import "../styles/Header.css";

export function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          My Blog
        </Link>
        <Link to="/create" className="create-button">
          Create Post
        </Link>
      </nav>
    </header>
  );
}
