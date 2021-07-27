import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();
const usersDB = {
  data: [
    {
      userName: "Minhaj",
      password: "Hussain",
    },
    {
      userName: "Syed",
      password: "Minhaj",
    },
    {
      userName: "Neog",
      password: "Camp",
    },
    {
      userName: "Test",
      password: "Success",
    },
  ],
};
const user1 = {
  userName: "Test",
  password: "Success",
};
const findUserByUserName = (userName) =>
  usersDB?.data?.find((user) => user.userName === userName);
const fakeFetch = (userName, password) => {
  return new Promise((resolve, reject) => {
    const user = findUserByUserName(userName);
    setTimeout(() => {
      if (user && user.password === password) {
        resolve({ success: true, msg: "Auth Success" });
      }
      reject({ success: false, msg: "wrong username / password" });
    }, 3000);
  });
};

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const login = async (username, password, route) => {
    try {
      const { success } = await fakeFetch(username, password);
      if (success === true) {
        setIsUserLoggedIn((prev) => !prev);
        navigate(route);
      }
      return { success };
    } catch (err) {
      return { err };
    }
  };
  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
