import axios from "axios";

export async function createPost(textContent, encodedToken, dataDispatch) {
  try {
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

    dataDispatch({ type: "SET_POSTS_DATA", payload: res.data.posts });
  } catch (e) {
    console.log(e);
  }
}
