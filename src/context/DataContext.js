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
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(dataReducer, initialState);

  // get user

  // get user post

  const getUserPost = async () => {
    try {
      const res = await fetch("/api/posts");
      const { posts } = await res.json();
      dataDispatch({ type: "SET_POSTS_DATA", payload: posts });
    } catch (e) {
      console.log(e);
    }
  };

  //   const checkAPi = async () => {
  //     try {
  //       const res = await fetch(`/api/posts/user/${"shubhamsoni"}`);
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  useEffect(() => {
    getUserPost();
    // checkAPi();
  }, []);

  return (
    <DataContext.Provider value={{ data, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
