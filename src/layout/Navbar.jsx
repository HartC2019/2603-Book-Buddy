import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="app-header">
      <Link to="/" className="logo-link">
        Book Buddy
      </Link>
      <nav className="navbar">
        <Link to="/">Books</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
