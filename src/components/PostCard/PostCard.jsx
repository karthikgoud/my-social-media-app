import styles from "./PostCard.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

const PostCard = ({ post }) => {
  const { content, username } = post;
  return (
    <div className={styles.container}>
      <div className={styles.imgCont}>
        <div className={styles.image}></div>
      </div>
      <div>
        <div className={styles.cardHeading}>
          <div className={styles.cardUser}>
            <h3>{username}</h3>
            <div>@{username}</div>
            <BsDot />
            <div>1 min</div>
          </div>
          <BsThreeDots />
        </div>
        <p>{content}</p>
        <div className={styles.cardIcons}>
          <AiOutlineHeart />
          <FiMessageSquare />
          <BsShare />
          <BsFillBookmarkFill />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
