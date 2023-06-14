import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

const initialState = {
  userData: {},
  postsData: [],
  sort: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS_DATA":
      return { ...state, postsData: [...action.payload] };
    case "SET_USER_DATA":
      return { ...state, userData: { ...action.payload } };
    case "TRENDING":
      return { ...state, sort: "Trending" };
    case "LATEST":
      return { ...state, sort: "Latest" };
    case "OLDEST":
      return { ...state, sort: "Oldest" };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(dataReducer, initialState);

  // ---------- get all posts-----------------

  const getAllPost = async () => {
    try {
      const res = await axios.get(`/api/posts`);
      dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
    } catch (e) {
      console.log(e);
    }
  };

  // ----------------- delete post (id)-------------

  const deletePost = async (id) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.delete(`/api/posts/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });

      dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  // ----------------- Like post (id)-------------
  const likePost = async (id) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/posts/like/${id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      // console.log(res.data);

      dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
    } catch (e) {
      console.log(e);
    }
  };

  // ----------------- Like post (id)-------------
  const disLikePost = async (id) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/posts/dislike/${id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      // console.log(res.data);

      dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
    } catch (e) {
      console.log(e);
    }
  };
  // ---------------------------------------

  const getSortedPosts = (posts, sortValue) => {
    const sortedArray = posts.toSorted((a, b) =>
      sortValue === "Trending"
        ? b.likes.likeCount - a.likes.likeCount
        : sortValue === "Latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : sortValue === "Oldest"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : posts
    );
    return sortedArray;
  };

  const sortedPostArray = getSortedPosts(data.postsData, data.sort);

  return (
    <DataContext.Provider
      value={{
        data,
        dataDispatch,
        deletePost,
        likePost,
        disLikePost,
        sortedPostArray,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
