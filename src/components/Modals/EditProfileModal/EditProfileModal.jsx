import { useState } from "react";

import { useData } from "../../../context/DataContext";
import styles from "./EditProfileModal.module.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import UserAvatar from "../../UserAvatar/UserAvatar";
import { useAuth } from "../../../context/AuthContext";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import AvatarModal from "../AvatarModal/AvatarModal";
import { avatarUrl } from "../../../constants/avatarUrl";
import { ToastHandler } from "../../Toast/Toast";

const EditProfileModal = ({ setShowProfileModal }) => {
  const {
    data: { userData, allUsers },
    updateUser,
  } = useData();

  const { currentUser } = useAuth();

  const [profileUpdate, setProfileUpdate] = useState({
    bio: userData.bio,
    avatarUrl: userData.avatarUrl,
    website: userData.website,
    bannerImage: userData.bannerImage,
  });

  const currentAvatarUser = allUsers.find(
    (dbUser) => dbUser?.username === currentUser?.username
  );

  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ovaqn7lw");
    // data.append("cloud_name", "dgesxov4w");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/dgesxov4w/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setProfileUpdate((prev) => ({ ...prev, avatarUrl: data.url }));
      })
      .catch((error) => {
        console.error(error);
        // toast.error("Image Uploading failed");
      });
  };

  const uploadBanner = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ovaqn7lw");
    // data.append("cloud_name", "dgesxov4w");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/dgesxov4w/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfileUpdate((prev) => ({ ...prev, bannerImage: data.url }));
        ToastHandler("success", "Banner uploaded");
      })
      .catch((error) => {
        console.error(error);
        // toast.error("Image Uploading failed");
      });
  };

  const userInitials = currentUser?.firstName?.slice(0, 1).toUpperCase();

  function handleUpdate(e, profileUpdate) {
    e.preventDefault();
    updateUser(profileUpdate);
    setShowProfileModal(false);
  }

  function handleAvatarClick(imgUrl) {
    setProfileUpdate((prev) => ({ ...prev, avatarUrl: imgUrl }));
  }

  return (
    <form onSubmit={handleUpdate}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Edit Profile</h2>
          <div
            className={styles.xBtn}
            onClick={() => setShowProfileModal(false)}
          >
            X
          </div>
        </div>
        <div className={styles.selectCont}>
          {avatarUrl.map((avatar) => {
            return (
              <div
                key={avatar.name}
                onClick={() => handleAvatarClick(avatar.path)}
              >
                <img src={avatar.path} alt={avatar.name} width={50} />
              </div>
            );
          })}
        </div>
        <div className={styles.avatarCont}>
          <div>Avatar:</div>
          <div className={styles.inputCont}>
            <span className={styles.avatarSpan}>
              {profileUpdate.avatarUrl ? (
                <img
                  src={profileUpdate.avatarUrl}
                  alt={profileUpdate.bio}
                  className={styles.avatarImg}
                />
              ) : (
                <div className={styles.initials}>{userInitials}</div>
              )}
            </span>

            <label htmlFor="file" className={styles.avatarEditIcon}>
              <MdOutlinePhotoCamera size={20} />
              Change Profile Image
            </label>

            <input
              id="file"
              type="file"
              onChange={(e) => uploadImage(e.target.files[0])}
            />
            {/* --------banner-------- */}
            <label htmlFor="banner" className={styles.avatarEditIcon}>
              <MdOutlinePhotoCamera size={20} />
              Change Banner
            </label>

            <input
              id="banner"
              type="file"
              onChange={(e) => uploadBanner(e.target.files[0])}
            />
          </div>
        </div>
        <div className={styles.editInfo}>
          <div className={styles.gridRows}>
            <div>Name:</div>
            <div>Username:</div>
            <div>Bio</div>
            <div>Website</div>
          </div>
          <div className={styles.gridRows}>
            <div>
              {userData.firstName} {userData.lastName}
            </div>
            <div>{userData.username}</div>
            <div>
              <input
                type="text"
                value={profileUpdate.bio}
                onChange={(e) =>
                  setProfileUpdate((prev) => ({ ...prev, bio: e.target.value }))
                }
              />
            </div>
            <div>
              <input
                type="text"
                value={profileUpdate.website}
                onChange={(e) =>
                  setProfileUpdate((prev) => ({
                    ...prev,
                    website: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <button
          className={styles.btn}
          onClick={(e) => handleUpdate(e, profileUpdate)}
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditProfileModal;
