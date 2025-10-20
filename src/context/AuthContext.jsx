import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useToastContext } from "./ToastContext";
import { API_URL } from "../utilities";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const navigate = useNavigate();
  const { toast, runToast } = useToastContext();

  const login = async (text, password, route) => {
    try {
      const response = await axios.post(`${API_URL}login`, {
        email: text,
        password: password,
      });
      //
      if (response?.data?.success === true) {
        // console.log({ response });
        runToast(toast.success, "User Logged In Successfully");
        const authToken = response?.data?.authtoken;
        // console.log({ authToken });
        setAuth(authToken);
        localStorage.setItem("token", JSON.stringify(authToken));
        navigate(route ? route : "/");
      } else {
        // console.log(response);
        runToast(toast.error, response?.data?.message);
      }
    } catch (err) {
      setAuth(null);
      runToast(toast.error, err?.response?.data?.message);
      // console.log({ error: err?.response?.data?.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
    runToast(toast.success, "User Logged Out Successfully!");
    navigate("/");
  };

  const register = async (text, email, password) => {
    try {
      const response = await axios.post(`${API_URL}register`, {
        name: text,
        email: email,
        password: password,
      });
      //
      if (response?.data?.success === true) {
        // console.log(response);
        runToast(toast.success, response?.data?.message);
        navigate("/login");
      } else {
        // console.log(response);
        runToast(toast.error, response?.data?.message);
      }
    } catch (err) {
      console.log({ error: err?.response?.data?.message });
      runToast(toast.error, err?.response?.data?.message);
    }
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
