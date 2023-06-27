import React, { useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useData } from "../../../context/DataContext";
import { createPost } from "../../../services/postsServices";
import { useAuth } from "../../../context/AuthContext";
import UserAvatar from "../../UserAvatar/UserAvatar";

const CreatePostModal = ({ setShowCreateModal }) => {
  const {
    data: { userData },
    dataDispatch,
  } = useData();
  const { currentUser } = useAuth();

  const [textAreaInput, setTextAreaInput] = useState("");
  const [newPostData, setNewPostData] = useState({
    text: "",
    postImage: null,
  });
  const encodedToken = localStorage.getItem("token");

  function postHandler(post) {
    createPost(post, encodedToken, dataDispatch);

    setNewPostData((prev) => ({ ...prev, text: "" }));

    setShowCreateModal(false);
  }
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <UserAvatar user={userData} />
        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="6"
            value={newPostData.text}
            onChange={(e) =>
              setNewPostData((prev) => ({ ...prev, text: e.target.value }))
            }
          ></textarea>
          <div className={styles.iconsCont}>
            <button onClick={() => postHandler(newPostData)}>Post</button>
            <button onClick={() => setShowCreateModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
