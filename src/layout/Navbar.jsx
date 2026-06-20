import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();

  console.log("token:", token);

  return (
    <header className="app-header">
      <Link to="/" className="logo-link">
        Book Buddy
      </Link>

      <nav className="navbar">
        <Link to="/">Books</Link>

        {token ? (
          <>
            <Link to="/account">Account</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
