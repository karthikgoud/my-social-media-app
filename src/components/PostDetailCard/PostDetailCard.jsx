import styles from "./PostDetailCard.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PostDetailCard = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.postHead}>
          <AiOutlineArrowLeft />
          <div>Post</div>
        </div>
        <div className={styles.userCont}>
          <div className={styles.userImageCont}>
            <div className={styles.userimage}></div>
            <div>
              <div className={styles.userName}>Tanay Pratap</div>
              <p>@tanaypratap</p>
            </div>
          </div>
          <BsThreeDots />
        </div>
        <p className={styles.postPara}>
          Lorem ipsum dolor sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          inventore qui, labore ipsa non est.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          neque expedita cupiditate doloremque, commodi dolor illum magnam ipsam
          aperiam velit pariatur culpa, quo dolore error laborum! Ex velit hic
          tempora!
        </p>
        <div className={styles.timeCont}>
          <div> 12.11</div>
          <BsDot /> <div> Oct 11, 2021</div>
        </div>
        <hr />
        <div className={styles.likes}>4 Likes</div>
        <hr />
        <div className={styles.icons}>
          <AiOutlineHeart /> <FiMessageSquare /> <BsShare />
          <BsFillBookmarkFill />
        </div>
      </div>
    </div>
  );
};

export default PostDetailCard;
