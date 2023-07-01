import { useState } from "react";
import { useData } from "../../../context/DataContext";
import styles from "./EditModal.module.css";
import UserAvatar from "../../UserAvatar/UserAvatar";
import { AiOutlineFileGif, AiOutlinePicture } from "react-icons/ai";
import ClickOutsideCheck from "../ClickOutsideCheck/ClickOutsideCheck";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiModal from "../EmojiModal/EmojiModal";
import GifModal from "../GifModal/GifModal";
import { uploadImage } from "../../../utils/uploadImage";
import { createPost } from "../../../services/postsServices";

const EditModal = ({ setShowEditModal, post }) => {
  const {
    updatePost,
    data: { allUsers },
    dataDispatch,
  } = useData();

  const [newPost, setNewPost] = useState(post);

  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [showGifModal, setShowGifModal] = useState(false);
  const encodedToken = localStorage.getItem("token");

  function changeHandler(e) {
    const text = e.target.value;
    setNewPost((prev) => ({ ...prev, content: text }));
  }

  const handleCloudUpload = (media) => {
    uploadImage(media, setNewPost);
  };

  function updataHandler(post) {
    updatePost(post);
    setNewPost((prev) => ({
      ...prev,
      content: "",
      postImage: null,
      postVideo: null,
    }));
    setShowEditModal(false);
  }

  const getPostAvatar = allUsers.find(
    (user) => user?.username === post?.username
  );

  return (
    <div className={styles.newpost}>
      <div className={styles.postCont}>
        <UserAvatar user={getPostAvatar} />

        <div className={styles.textCont}>
          <textarea
            placeholder="write something interesting"
            cols="50"
            rows="15"
            value={newPost?.content}
            onChange={changeHandler}
          ></textarea>
          {newPost.postImage && (
            <div className={styles.deleteMedia}>
              image
              <button
                className={styles.buttonX}
                onClick={() =>
                  setNewPost((prev) => ({ ...prev, postImage: "" }))
                }
              >
                X
              </button>
            </div>
          )}
          {newPost.postVideo && (
            <div className={styles.deleteMedia}>
              Video
              <button
                className={styles.buttonX}
                onClick={() =>
                  setNewPost((prev) => ({ ...prev, postVideo: "" }))
                }
              >
                X
              </button>
            </div>
          )}
          <div className={styles.iconsCont}>
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
                <ClickOutsideCheck
                  show={showGifModal}
                  setShow={setShowGifModal}
                >
                  <AiOutlineFileGif
                    className={styles.icons}
                    onClick={() => setShowGifModal((prev) => !prev)}
                  />
                  {showGifModal && (
                    <GifModal
                      setNewPostData={setNewPost}
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
                      setNewPostData={setNewPost}
                      onClose={setShowEmojiModal}
                    />
                  )}
                </ClickOutsideCheck>
              </div>
            </div>
            <button onClick={() => updataHandler(newPost)}>Update</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
