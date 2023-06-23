import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useData } from "./DataContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const { getUserPost, dataDispatch } = useData();

  // get Login from users.js ,if user present

  const getLogin = async (username, password) => {
    try {
      const cred = {
        username: username,
        password: password,
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const { foundUser, encodedToken } = await res.json();

      localStorage.setItem("token", encodedToken);
      setToken(encodedToken);

      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setCurrentUser(foundUser);

      dataDispatch({ type: "SET_USER_DATA", payload: foundUser });
    } catch (e) {
      console.log(e);
    }
  };

  const getSignUp = async (username, password, firstName, lastName) => {
    try {
      const cred = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(cred),
      });

      const { createdUser, encodedToken } = await res.json();

      localStorage.setItem("token", encodedToken);
      setToken(encodedToken);

      localStorage.setItem("currentUser", JSON.stringify(createdUser));
      setCurrentUser(createdUser);

      dataDispatch({ type: "SET_USER_DATA", payload: createdUser });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isSignUp,
        token,
        currentUser,
        setIsLoggedIn,
        setIsSignUp,
        getLogin,
        getSignUp,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
