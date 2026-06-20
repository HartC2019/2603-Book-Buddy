import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const login = async (credentials) => {
    const result = await loginUser(credentials);
    setToken(result.token);
  };

  const register = async (credentials) => {
    const result = await registerUser(credentials);

    setToken(result.token);
  };

  const logout = () => {
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
