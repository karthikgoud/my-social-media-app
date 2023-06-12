import {
  BsDot,
  BsFillBookmarkFill,
  BsShare,
  BsThreeDots,
} from "react-icons/bs";
import styles from "./CommentCard.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";

const CommentCard = () => {
  return (
    <div className={styles.commentCont}>
      <div>
        <div className={styles.inputImage}></div>
      </div>
      <div className={styles.commentInfoCont}>
        <div className={styles.commentInfo}>
          <div>
            <div className={styles.commentUserInfo}>
              <div>Ashwin Khode</div>
              <div> @ashwin4real</div>
              <BsDot /> <div>1m</div>
            </div>
            <div>Replying to @tanaypratap</div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
        <p className={styles.commentText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, nobis.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          at itaque? Incidunt, ratione. Corporis hic ullam quas similique!
          Quidem, deleniti?
        </p>
        <div className={styles.icons}>
          <AiOutlineHeart /> <FiMessageSquare /> <BsShare />
          <BsFillBookmarkFill />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
