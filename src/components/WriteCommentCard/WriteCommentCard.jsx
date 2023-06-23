import React from "react";
import styles from "./WriteCommentCard.module.css";

const WriteCommentCard = () => {
  return (
    <div className={styles.inputCont}>
      <div className={styles.inputImage}></div>
      <input type="text" name="" id="" placeholder="Comment your reply" />
      <button>Post</button>
    </div>
  );
};

export default WriteCommentCard;
