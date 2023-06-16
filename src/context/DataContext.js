import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ToastHandler } from "../../src/components/Toast/Toast";

import axios from "axios";

export const DataContext = createContext();

const initialState = {
  userData: {},
  postsData: [],
  sort: "null",
  bookMarkedPosts: [],
  bookmarkIdArray: [],
  allUsers: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS_DATA":
      return { ...state, postsData: [...action.payload].reverse() };
    case "SET_USER_DATA":
      return { ...state, userData: { ...action.payload } };
    case "SET_ALL_USERS":
      return { ...state, allUsers: [...action.payload] };
    case "TRENDING":
      return { ...state, sort: "Trending" };
    case "LATEST":
      return { ...state, sort: "Latest" };
    case "OLDEST":
      return { ...state, sort: "Oldest" };
    case "BOOKMARK_ARRAY":
      return { ...state, bookmarkIdArray: action.payload };
    case "BOOKMARKED_POST":
      return { ...state, bookMarkedPosts: action.payload };

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

  // ---------- get all User-----------------

  const getAllUsers = async () => {
    try {
      const res = await axios.get(`/api/users`);
      // console.log(res);
      dataDispatch({ type: "SET_ALL_USERS", payload: res.data.users });
    } catch (e) {
      console.log(e);
    }
  };

  // ---------- get Current User-----------------

  const getCurrentUser = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      const res = await axios.get(`/api/users/${user._id}`);
      dataDispatch({ type: "SET_USER_DATA", payload: res.data.user });
    } catch (e) {
      console.log(e);
    }
  };

  // ---------- Create new posts-----------------

  const createPost = async (textContent) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/posts`,
        {
          postData: {
            content: textContent,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      // console.log("create post", res.data.posts);

      dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
    } catch (e) {
      console.log(e);
    }
  };
  // ----------------- update post (id)-------------
  const updatePost = async (post) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/posts/edit/${post._id}`,
        {
          postData: { content: post.content },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      // console.log("update post", res.data.posts);

      dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
    } catch (e) {
      console.log("cannot edit other user", e);
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

  // ----------------- get BookMarked Post-------------

  const getBookMarkPosts = (posts, bookIdArr) => {
    const onlyBookmarked = posts.filter((post) => bookIdArr.includes(post._id));
    // console.log("only", onlyBookmarked);
    dataDispatch({ type: "BOOKMARKED_POST", payload: onlyBookmarked });
  };

  // ----------------- get BookMarked Post-------------

  useEffect(() => {
    getBookMarkPosts(data.postsData, data.bookmarkIdArray);
  }, [data.bookmarkIdArray]);

  useEffect(() => {
    getAllPost();
    getCurrentUser();
    getAllUsers();
  }, []);

  // ----------------- add bookmark id-------------

  const addBookmark = async (id) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const res = await axios.post(
        `/api/users/bookmark/${id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      // console.log("bookadd", res.data.bookmarks);
      dataDispatch({ type: "BOOKMARK_ARRAY", payload: res.data.bookmarks });
      ToastHandler("success", "Added to Bookmarks");
    } catch (e) {
      console.log(e);
    }
  };

  // ----------------- remove bookmark id-------------
  const removeBookmark = async (id) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const res = await axios.post(
        `/api/users/remove-bookmark/${id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      // console.log("Bookremove", res);
      dataDispatch({ type: "BOOKMARK_ARRAY", payload: res.data.bookmarks });
      ToastHandler("warn", "Removed from Bookmarks");
    } catch (e) {
      console.log(e);
    }
  };
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

      // console.log("like", res.data);

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

      // console.log("dislike", res.data);

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
        addBookmark,
        removeBookmark,
        createPost,
        updatePost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
