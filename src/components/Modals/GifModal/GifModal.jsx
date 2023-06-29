import { gifsData } from "../../../constants/GifsData";
import { ToastHandler } from "../../Toast/Toast";
import styles from "./GifModal.module.css";

const GifModal = ({ setNewPostData, onClose }) => {
  function handleEmojiSelect(src) {
    setNewPostData((prev) => ({ ...prev, postImage: src }));
    onClose(false);
    ToastHandler("success", `gif ready to post !`);
  }

  return (
    <div className={styles.gifModal}>
      <div className={styles.gifCont}>
        {gifsData.map((src) => (
          <img
            onClick={() => handleEmojiSelect(src)}
            className={styles.gify}
            src={src}
            width={100}
          />
        ))}
      </div>
      <div onClick={() => onClose(false)}>X</div>
    </div>
  );
};

export default GifModal;
