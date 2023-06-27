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
import EditModal from "../../components/Modals/EditModal/EditModal";

import ModalWrapper from "../Modals/ModalWrapper/ModalWrapper";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useAuth } from "../../context/AuthContext";

const PostCard = ({ post }) => {
  const [showModalDots, setShowModalDots] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const {
    data: { bookmarkIdArray, userData, allUsers },
    dataDispatch,
    likePost,
    disLikePost,
    addBookmark,
    removeBookmark,
  } = useData();

  const { currentUser } = useAuth();

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

  const { content, username, createdAt, postImage, postVideo } = post;

  function didUserLiked(array) {
    return array.some((arr) => arr.username === currentUser.username);
  }

  function didUserBookmarked(arr, id) {
    return arr?.some((arr) => arr === id);
  }

  //  bookmark handler

  function addBookMarkHandler(id) {
    addBookmark(id);
    dataDispatch({ type: "BOOKMARK", payload: id });
  }

  function removeBookMarkHandler(id) {
    removeBookmark(id);
    dataDispatch({ type: "BOOKMARK", payload: id });
  }

  const getPostUser = allUsers?.find(
    (user) => user?.username === post?.username
  );

  return (
    <div className={styles.container}>
      <div className={styles.imgCont}>
        <UserAvatar user={getPostUser} />
      </div>
      <div className={styles.postRightDiv}>
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
                  setShowEditModal={setShowEditModal}
                />
              </div>
            )}
            {showEditModal && (
              <ModalWrapper onClose={() => setShowEditModal(false)}>
                <EditModal post={post} setShowEditModal={setShowEditModal} />
              </ModalWrapper>
            )}
          </div>
        </div>
        <p>{content}</p>
        {postImage && (
          <div className={styles.postImageCont}>
            <img src={postImage} alt={username} />
          </div>
        )}
        {postVideo && (
          <div className={styles.postVideoCont}>
            <video controls width="400">
              <source src={postVideo} type="video/mp4" />
            </video>
          </div>
        )}
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
          {didUserBookmarked(bookmarkIdArray, post._id) ? (
            <div
              className={styles.bookmarkBtn}
              onClick={() => removeBookMarkHandler(post._id)}
            >
              <BsFillBookmarkFill color="red" />
            </div>
          ) : (
            <div
              className={styles.bookmarkBtn}
              onClick={() => addBookMarkHandler(post._id)}
            >
              <BsFillBookmarkFill />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
