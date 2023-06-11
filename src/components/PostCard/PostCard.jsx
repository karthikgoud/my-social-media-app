import styles from "./PostCard.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgCont}>
        <div className={styles.image}></div>
      </div>
      <div>
        <div className={styles.cardHeading}>
          <div className={styles.cardUser}>
            <h3>Tanay Pratap</h3>
            <div>@tanaypratap</div>
            <BsDot />
            <div>1 min</div>
          </div>
          <BsThreeDots />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          minus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          vitae, soluta consequuntur aliquid repellendus fugiat labore nihil
          quas sed accusantium?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          doloribus.
        </p>
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
