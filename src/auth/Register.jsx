import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "./AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    setError(null);

    const credentials = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      await register(credentials);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <section className="auth-page">
      <h1>Register</h1>

      <form className="auth-form" action={tryRegister}>
        <label className="form-field">
          First Name
          <input
            className="form-input"
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
        </label>

        <label className="form-field">
          Last Name
          <input
            className="form-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
          />
        </label>

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

        <button className="form-button">Register</button>

        {error && <p className="form-error">{error}</p>}
      </form>

      <Link className="auth-link" to="/login">
        Already have an account? Login here.
      </Link>
    </section>
  );
}
