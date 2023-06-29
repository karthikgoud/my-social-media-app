import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ToastHandler } from "../../src/components/Toast/Toast";

import axios from "axios";

export const DataContext = createContext();

const initialState = {
  userData: {},
  postsData: [],
  sort: "Latest",
  bookMarkedPosts: [],
  bookmarkIdArray: [],
  allUsers: [],
  userPosts: [],
  pagedPosts: [],
  isLoading: false,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS_DATA":
      return { ...state, postsData: [...action.payload].reverse() };
    case "GET_USER_POST":
      return { ...state, userPosts: [...action.payload] };
    case "GET_PAGED_POST":
      return { ...state, pagedPosts: [...action.payload] };
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
    case "LOADER":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dataDispatch] = useReducer(dataReducer, initialState);

  // ---------- get all posts-----------------

  const getAllPost = async () => {
    dataDispatch({ type: "LOADER", payload: true });
    try {
      const res = await axios.get(`/api/posts`);
      setTimeout(() => {
        dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
        dataDispatch({ type: "LOADER", payload: false });
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  // ---------- get all User-----------------

  const getAllUsers = async () => {
    try {
      const res = await axios.get(`/api/users`);
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

  // ---------- Update user-----------------

  const updateUser = async (profileUpdate) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/users/edit`,
        {
          userData: {
            bio: profileUpdate.bio,
            website: profileUpdate.website,
            avatarUrl: profileUpdate.avatarUrl,
          },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      // console.log("update user", res);
      dataDispatch({ type: "SET_USER_DATA", payload: res.data.user });
    } catch (e) {
      console.log("cannot edit other user", e);
    }
  };

  // ------------get paged post from server------------

  const getPagedPosts = async (pageNum) => {
    try {
      const res = await axios.get(`/api/posts/page/${pageNum}`);
      dataDispatch({ type: "GET_PAGED_POST", payload: res.data.posts });
    } catch (e) {
      console.log(e);
    }
  };

  // ---------- user user only posts-----------------
  const getUserPosts = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      const res = await axios.get(`/api/posts/user/${user.username}`);
      // console.log("only", res);
      dataDispatch({ type: "GET_USER_POST", payload: res.data.posts });
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
      dataDispatch({ type: "GET_USER_POST", payload: res.data.posts });
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
    getUserPosts();
  }, []);

  useEffect(() => {
    getUserPosts();
  }, [data.postsData]);

  useEffect(() => {
    getAllUsers();
  }, [data.userData]);

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
  // ---------------Follow user------------------------

  const followUser = async (user) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/users/follow/${user._id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      // console.log(res.data.user);
      dataDispatch({ type: "SET_USER_DATA", payload: res.data.user });
    } catch (e) {
      console.log(e);
    }
  };
  // ---------------------------------------

  const unFollowUser = async (user) => {
    try {
      const encodedToken = localStorage.getItem("token");

      const res = await axios.post(
        `/api/users/unfollow/${user._id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      // console.log(res.data.user);
      dataDispatch({ type: "SET_USER_DATA", payload: res.data.user });
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

  const followingArray = data.userData.following;

  const postOfFollowerUser = data.postsData.filter((user) =>
    followingArray?.find((item) => item?.username === user?.username)
  );

  const postOfUser = data.postsData.filter(
    (user) => user?.username === data?.userData?.username
  );

  const timeLinePost = [...postOfFollowerUser, ...postOfUser];

  const sortedPostArray = getSortedPosts(timeLinePost, data.sort);

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
        updatePost,
        updateUser,
        followUser,
        unFollowUser,
        getAllPost,
        getPagedPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
