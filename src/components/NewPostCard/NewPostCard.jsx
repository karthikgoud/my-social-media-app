import { useEffect, useRef, useState } from "react";
import styles from "./NewPostCard.module.css";

import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { useData } from "../../context/DataContext";
import { createPost } from "../../services/postsServices";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useAuth } from "../../context/AuthContext";
import { ToastHandler } from "../Toast/Toast";
import EmojiModal from "../Modals/EmojiModal/EmojiModal";
import GifModal from "../Modals/GifModal/GifModal";
import ClickOutsideCheck from "../Modals/ClickOutsideCheck/ClickOutsideCheck";

const NewPostCard = () => {
  const {
    data: { userData, allUsers },
    dataDispatch,
  } = useData();
  const [newPostData, setNewPostData] = useState({
    text: "",
    postImage: null,
    postVideo: null,
  });
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [showGifModal, setShowGifModal] = useState(false);

  const refEmoji = useRef();

  const { currentUser } = useAuth();

  const currentAvatarUser = allUsers.find(
    (dbUser) => dbUser?.username === currentUser?.username
  );

  const encodedToken = localStorage.getItem("token");

  // cloudinary upload

  const uploadImage = async (media) => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "ovaqn7lw");
    // data.append("cloud_name", "dgesxov4w");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      `https://api.cloudinary.com/v1_1/dgesxov4w/${
        media.type === "image/jpeg" ? "image" : "video"
      }/upload`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        data.resource_type === "video"
          ? setNewPostData((prev) => ({ ...prev, postVideo: data.url }))
          : setNewPostData((prev) => ({ ...prev, postImage: data.url }));
        ToastHandler("success", `${data.resource_type} ready to post !`);
      })
      .catch((error) => {
        console.error(error);
        ToastHandler("error", "video upload failed");
      });
  };

  function postHandler(post) {
    console.log(post);
    createPost(post, encodedToken, dataDispatch);
    setNewPostData((prev) => ({
      ...prev,
      text: "",
      postImage: null,
      postVideo: null,
    }));
  }

  useEffect(() => {
    const checkIfClickedOut = (e) => {
      if (
        showEmojiModal &&
        refEmoji.current &&
        !refEmoji.current.contains(e.target)
      ) {
        setShowEmojiModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOut);
    return () => {
      document.removeEventListener("click", checkIfClickedOut);
    };
  }, [showEmojiModal]);

  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <UserAvatar user={currentAvatarUser} />
        <div className={styles.textCont}>
          <textarea
            placeholder="Whats happening...?"
            cols="50"
            rows="6"
            value={newPostData.text}
            onChange={(e) =>
              setNewPostData((prev) => ({ ...prev, text: e.target.value }))
            }
          ></textarea>
          <div className={styles.iconsCont}>
            <div className={styles.postIcons}>
              <span className={styles.addImage}>
                <label htmlFor="file">
                  <AiOutlinePicture className={styles.icons} />
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => uploadImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </span>
              <ClickOutsideCheck show={showGifModal} setShow={setShowGifModal}>
                <AiOutlineFileGif
                  className={styles.icons}
                  onClick={() => setShowGifModal((prev) => !prev)}
                />
                {showGifModal && (
                  <GifModal
                    setNewPostData={setNewPostData}
                    onClose={setShowGifModal}
                  />
                )}
              </ClickOutsideCheck>
              <ClickOutsideCheck
                show={showEmojiModal}
                setShow={setShowEmojiModal}
              >
                <BsEmojiSmile
                  onClick={() => setShowEmojiModal((prev) => !prev)}
                  className={styles.icons}
                />
                {showEmojiModal && (
                  <EmojiModal
                    setNewPostData={setNewPostData}
                    onClose={setShowEmojiModal}
                  />
                )}
              </ClickOutsideCheck>
            </div>
            <button onClick={() => postHandler(newPostData)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;
