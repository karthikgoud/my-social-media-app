import styles from "./PostCard.module.css";
import { BsHeartFill } from "react-icons/bs";
import { RiMessageFill } from "react-icons/ri";
import { BsShareFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import ThreeDotsModal from "../Modals/ThreeDotsModal";
import { useData } from "../../context/DataContext";

const PostCard = ({ post }) => {
  const [showModalDots, setShowModalDots] = useState(false);

  const { likePost, disLikePost } = useData();

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOut = (e) => {
      if (showModalDots && ref.current && !ref.current.contains(e.target)) {
        setShowModalDots(false);
      }
    };
    document.addEventListener("click", checkIfClickedOut);
    return () => {
      document.removeEventListener("click", checkIfClickedOut);
    };
  }, [showModalDots]);

  const { content, username, createdAt } = post;

  function didUserLiked(array) {
    return array.some((arr) => arr.username === "adarshbalika");
  }

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
            <div>{createdAt}</div>
          </div>
          <div className={styles.wrapper} ref={ref}>
            <div
              className={styles.threeDotsCont}
              onClick={() => setShowModalDots((prev) => !prev)}
            >
              <BsThreeDots />
            </div>
            {showModalDots && (
              <div className={styles.threeDotsModal}>
                <ThreeDotsModal
                  post={post}
                  setShowModalDots={setShowModalDots}
                />
              </div>
            )}
          </div>
        </div>
        <p>{content}</p>
        <div className={styles.cardIcons}>
          {didUserLiked(post.likes.likedBy) ? (
            <div
              className={styles.likeBtn}
              onClick={() => disLikePost(post._id)}
            >
              <BsHeartFill color="red" /> {post.likes.likeCount}
            </div>
          ) : (
            <div className={styles.likeBtn} onClick={() => likePost(post._id)}>
              <BsHeartFill /> {post.likes.likeCount}
            </div>
          )}

          <div>
            <RiMessageFill />
          </div>
          <div>
            <BsShareFill />
          </div>
          <div>
            <BsFillBookmarkFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
