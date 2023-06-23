import { useState } from "react";
import { useData } from "../../../context/DataContext";
import styles from "./EditModal.module.css";
import UserAvatar from "../../UserAvatar/UserAvatar";

const EditModal = ({ setShowEditModal, post }) => {
  const {
    updatePost,
    data: { allUsers },
  } = useData();

  const [newPost, setNewPost] = useState(post);

  function updataHandler(post) {
    updatePost(post);
    setShowEditModal(false);
  }

  function changeHandler(e) {
    const text = e.target.value;
    setNewPost((prev) => ({ ...prev, content: text }));
  }

  const getPostAvatar = allUsers.find(
    (user) => user?.username === post?.username
  );

  console.log({ allUsers });

  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <UserAvatar user={getPostAvatar} />

        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="15"
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
