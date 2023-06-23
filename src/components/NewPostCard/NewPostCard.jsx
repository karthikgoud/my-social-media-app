import { useState } from "react";
import styles from "./NewPostCard.module.css";

import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { useData } from "../../context/DataContext";
import { createPost } from "../../services/postsServices";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useAuth } from "../../context/AuthContext";

const NewPostCard = () => {
  const {
    data: { userData, allUsers },
    dataDispatch,
  } = useData();
  const [textAreaInput, setTextAreaInput] = useState("");

  const { currentUser } = useAuth();

  const currentAvatarUser = allUsers.find(
    (dbUser) => dbUser?.username === currentUser?.username
  );

  const encodedToken = localStorage.getItem("token");

  function postHandler(text) {
    createPost(text, encodedToken, dataDispatch);
    setTextAreaInput("");
  }
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <UserAvatar user={currentAvatarUser} />
        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="6"
            value={textAreaInput}
            onChange={(e) => setTextAreaInput(e.target.value)}
          ></textarea>
          <div className={styles.iconsCont}>
            <div className={styles.postIcons}>
              <AiOutlinePicture />
              <AiOutlineFileGif />
              <BsEmojiSmile />
            </div>
            <button onClick={() => postHandler(textAreaInput)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;
