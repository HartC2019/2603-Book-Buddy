import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (credentials) => {
    const result = await loginUser(credentials);
    localStorage.setItem("token", result.token);
    setToken(result.token);
  };

  const register = async (credentials) => {
    const result = await registerUser(credentials);

    localStorage.setItem("token", result.token);
    setToken(result.token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const value = {
    token,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
