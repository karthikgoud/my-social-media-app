import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

const initialState = {
  userData: {},
  postsData: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS_DATA":
      return { ...state, postsData: [...action.payload] };
    case "SET_USER_DATA":
      return { ...state, userData: { ...action.payload } };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(dataReducer, initialState);

  // get user post

  const getUserPost = async (user) => {
    try {
      const res = await fetch(`/api/posts/user/${user?.username}`);
      const { posts } = await res.json();
      dataDispatch({ type: "SET_POSTS_DATA", payload: posts });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserPost();
    // checkAPi();
  }, []);

  return (
    <DataContext.Provider value={{ data, dataDispatch, getUserPost }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
