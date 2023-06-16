import { useState } from "react";
import { useData } from "../../../context/DataContext";
import styles from "./EditModal.module.css";

const EditModal = ({ setShowEditModal, post }) => {
  const { updatePost } = useData();
  // console.log("edit modal", post);

  const [newPost, setNewPost] = useState(post);
  // console.log("check", newPost);

  const user = localStorage.getItem("currentUser");

  function updataHandler(post) {
    // console.log(post);

    updatePost(post);
    setShowEditModal(false);
  }

  function changeHandler(e) {
    const text = e.target.value;
    setNewPost((prev) => ({ ...prev, content: text }));
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
            value={newPost?.content}
            onChange={changeHandler}
          ></textarea>
          <div className={styles.iconsCont}>
            <button onClick={() => updataHandler(newPost)}>Update</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
