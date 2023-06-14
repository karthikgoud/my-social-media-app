import { createContext, useContext, useReducer, useState } from "react";
import { useData } from "./DataContext";

export const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  isSignUp: false,
  token: null,
  currentUser: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };

    case "SET_CURRENTUSER":
      return { ...state, currentUser: action.payload };

    case "SET_ISLOGGEDIN":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

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
      authDispatch({ type: "SET_TOKEN", payload: encodedToken });

      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      authDispatch({ type: "SET_CURRENTUSER", payload: foundUser });

      dataDispatch({ type: "SET_USER_DATA", payload: foundUser });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, authDispatch, getLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
