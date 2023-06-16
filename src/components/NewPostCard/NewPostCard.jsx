import { useState } from "react";
import styles from "./NewPostCard.module.css";

import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { useData } from "../../context/DataContext";
import AvatarLarge from "../Avatar/AvatarLarge/AvatarLarge";

const NewPostCard = () => {
  const {
    data: { userData },
    createPost,
  } = useData();
  const [textAreaInput, setTextAreaInput] = useState("");
  // console.log(textAreaInput);

  function postHandler(text) {
    createPost(text, "2023-12-14");
    setTextAreaInput("");
  }
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <AvatarLarge
          imagePath={userData.avatarUrl}
          width="50px"
          height="50px"
        />
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
