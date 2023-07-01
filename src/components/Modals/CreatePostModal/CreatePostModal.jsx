import React, { useState } from "react";
import styles from "./CreatePostModal.module.css";
import { useData } from "../../../context/DataContext";
import { createPost } from "../../../services/postsServices";
import UserAvatar from "../../UserAvatar/UserAvatar";
import { AiOutlineFileGif, AiOutlinePicture } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { uploadImage } from "../../../utils/uploadImage";
import ClickOutsideCheck from "../ClickOutsideCheck/ClickOutsideCheck";
import GifModal from "../GifModal/GifModal";
import EmojiModal from "../EmojiModal/EmojiModal";
import { useAuth } from "../../../context/AuthContext";

const CreatePostModal = ({ setShowCreateModal }) => {
  const {
    data: { userData, allUsers },
    dataDispatch,
  } = useData();

  const [newPostData, setNewPostData] = useState({
    content: "",
    postImage: null,
    postVideo: null,
  });
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [showGifModal, setShowGifModal] = useState(false);
  const { currentUser } = useAuth();

  const currentAvatarUser = allUsers.find(
    (dbUser) => dbUser?.username === currentUser?.username
  );
  const encodedToken = localStorage.getItem("token");

  const handleCloudUpload = (media) => {
    uploadImage(media, setNewPostData);
  };

  function postHandler(post) {
    // console.log(post);
    createPost(post, encodedToken, dataDispatch);

    setNewPostData((prev) => ({
      ...prev,
      content: "",
      postImage: null,
      postVideo: null,
    }));

    setShowCreateModal(false);
  }
  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <UserAvatar user={currentAvatarUser} />
        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="6"
            value={newPostData.content}
            onChange={(e) =>
              setNewPostData((prev) => ({ ...prev, content: e.target.value }))
            }
          ></textarea>
          <div className={styles.iconsDiv}>
            <div className={styles.postIcons}>
              <span className={styles.addImage}>
                <label htmlFor="file-1">
                  <AiOutlinePicture className={styles.icons} />
                </label>
                <input
                  id="file-1"
                  type="file"
                  onChange={(e) => handleCloudUpload(e.target.files[0])}
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
            <div className={styles.iconsCont}>
              <button onClick={() => postHandler(newPostData)}>Post</button>
              <button onClick={() => setShowCreateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
