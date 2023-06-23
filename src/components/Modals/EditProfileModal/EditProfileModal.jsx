import { useState } from "react";

import { useData } from "../../../context/DataContext";
import styles from "./EditProfileModal.module.css";
import { MdOutlinePhotoCamera } from "react-icons/md";
import UserAvatar from "../../UserAvatar/UserAvatar";
import { useAuth } from "../../../context/AuthContext";

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

  function handleUpdate(e, profileUpdate) {
    e.preventDefault();
    updateUser(profileUpdate);
    setShowProfileModal(false);
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
        <div className={styles.avatarCont}>
          <div>Avatar:</div>
          <div>
            <UserAvatar user={currentAvatarUser} />

            <label htmlFor="file">
              <MdOutlinePhotoCamera
                size={20}
                className={styles.avatarEditIcon}
              />
            </label>
            <input
              id="file"
              type="file"
              onChange={(e) => uploadImage(e.target.files[0])}
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
