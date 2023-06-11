import styles from "./NewPostCard.module.css";

import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

const NewPostCard = () => {
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <div className={styles.img}></div>
        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="6"
          ></textarea>
          <div className={styles.iconsCont}>
            <div className={styles.postIcons}>
              <AiOutlinePicture />
              <AiOutlineFileGif />
              <BsEmojiSmile />
            </div>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;
