import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  const login = async (username, password, route) => {};

  const logout = () => {};

  const register = async (userName, password) => {};

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
