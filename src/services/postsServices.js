import axios from "axios";

export async function createPost(newPost, encodedToken, dataDispatch) {
  try {
    const res = await axios.post(
      `/api/posts`,
      {
        postData: {
          content: newPost.content,
          postImage: newPost.postImage,
          postVideo: newPost.postVideo,
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
  } catch (e) {
    console.log(e);
  }
}
