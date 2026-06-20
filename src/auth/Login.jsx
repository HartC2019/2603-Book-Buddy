import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "./AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    setError(null);

    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      await login(credentials);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="auth-page">
      <h1>Login</h1>

      <form className="auth-form" action={tryLogin}>
        <label className="form-field">
          Email
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>

        <label className="form-field">
          Password
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>

        <button className="form-button">Login</button>

        {error && <p className="form-error">{error}</p>}
      </form>

      <Link className="auth-link" to="/register">
        Need an account? Register here.
      </Link>
    </section>
  );
}
