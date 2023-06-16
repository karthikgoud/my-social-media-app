import React, { useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useData } from "../../../context/DataContext";

const CreatePostModal = ({ setShowCreateModal }) => {
  const { createPost } = useData();

  const [textAreaInput, setTextAreaInput] = useState("");
  function postHandler(text) {
    createPost(text, "2023-12-14");
    setTextAreaInput("");
    setShowCreateModal(false);
  }
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <div className={styles.img}></div>
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
