import { useState } from "react";
import { emojiData } from "../../../constants/emojiData";
import styles from "./EmojiModal.module.css";

const EmojiModal = ({ setNewPostData, onClose }) => {
  function handleEmojiSelect(emoji) {
    setNewPostData((prev) => ({ ...prev, content: prev.content + emoji }));
  }

  return (
    <div className={styles.emojiModal}>
      <div className={styles.emojiCont}>
        {emojiData.map((emoji, i) => (
          <span
            key={i}
            onClick={() => handleEmojiSelect(emoji.emojiImg)}
            className={styles.emoji}
          >
            {emoji.emojiImg}
          </span>
        ))}
      </div>
      <div onClick={() => onClose(false)}>X</div>
    </div>
  );
};

export default EmojiModal;
