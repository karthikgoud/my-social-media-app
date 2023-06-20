import React, { useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useData } from "../../../context/DataContext";
import AvatarLarge from "../../Avatar/AvatarLarge/AvatarLarge";
import { createPost } from "../../../services/postsServices";

const CreatePostModal = ({ setShowCreateModal }) => {
  const {
    data: { userData },
    dataDispatch,
  } = useData();

  const [textAreaInput, setTextAreaInput] = useState("");
  const encodedToken = localStorage.getItem("token");

  function postHandler(text) {
    createPost(text, encodedToken, dataDispatch);
    setTextAreaInput("");
    setShowCreateModal(false);
  }
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <div className={styles.img}>
          <AvatarLarge
            imagePath={userData.avatarUrl}
            width="50px"
            height="50px"
          />
        </div>
        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="6"
            value={textAreaInput}
            onChange={(e) => setTextAreaInput(e.target.value)}
          ></textarea>
          <div className={styles.iconsCont}>
            <button onClick={() => postHandler(textAreaInput)}>Post</button>
            <button onClick={() => setShowCreateModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
