import { useState } from "react";
import ModalWrapper from "../Modals/ModalWrapper/ModalWrapper";
import styles from "./ProfileMainCard.module.css";
import { useNavigate } from "react-router";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserAvatarFreeSize from "../UserAvatarFreeSize/UserAvatarFreeSize";

const ProfileMainCard = ({
  children,
  currentUserProfile,
  currentUserPosts,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [openFollowersModal, setFollowersOpenModal] = useState(false);

  const navigate = useNavigate();
  const {
    bio,
    website,
    username,
    firstName,
    lastName,
    avatarUrl,
    following,
    followers,
    bannerImage,
  } = currentUserProfile;

  function handleOpen() {
    setOpenModal(true);
  }

  function handleFollowersModalOpen() {
    setFollowersOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }

  function handleFollowersModalClose() {
    setFollowersOpenModal(false);
  }

  function handleClick(user) {
    navigate(`/profile/${user.username}`);
    setOpenModal(false);
    setFollowersOpenModal(false);
  }

  return (
    <div className={styles.profileBox}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      ></div>
      <div className={styles.profileCont}>
        <UserAvatarFreeSize
          user={currentUserProfile}
          width={120}
          height={120}
        />
        <h2>
          {firstName} {lastName}
        </h2>
        <div className={styles.username}>@{username}</div>

        {children}
        <p>{bio}</p>
        <a href={website} className={styles.website} target="_blank">
          {website}
        </a>
        <div className={styles.userInfo}>
          <div className={styles.followDetails} onClick={handleOpen}>
            <div>{following?.length}</div>
            <div>Following</div>
          </div>
          <div className={styles.followDetails}>
            <div>{currentUserPosts.length}</div>
            <div>Posts</div>
          </div>
          <div
            className={styles.followDetails}
            onClick={handleFollowersModalOpen}
          >
            <div>{followers?.length}</div>
            <div>Followers</div>
          </div>
        </div>
      </div>

      {openModal && (
        <ModalWrapper onClose={handleClose}>
          <div className={styles.followingModal}>
            <div className={styles.modalHeader}>
              <div>Following</div>
              <div className={styles.closeBtn} onClick={handleClose}>
                X
              </div>
            </div>
            <div className={styles.userDetails}>
              {following?.map((user) => (
                <div onClick={() => handleClick(user)} className={styles.user}>
                  <UserAvatar user={user} />
                  <div className={styles.userText}>
                    <div>
                      {user.firstName} {user.lastName}
                    </div>
                    <div className={styles.usernameText}>@{user.username}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalWrapper>
      )}

      {openFollowersModal && (
        <ModalWrapper onClose={handleFollowersModalClose}>
          <div className={styles.followingModal}>
            <div className={styles.modalHeader}>
              <div>Followers</div>
              <div
                className={styles.closeBtn}
                onClick={handleFollowersModalClose}
              >
                X
              </div>
            </div>
            <div className={styles.userDetails}>
              {followers?.map((user) => (
                <div onClick={() => handleClick(user)} className={styles.user}>
                  <UserAvatar user={user} />
                  <div className={styles.userText}>
                    <div>
                      {user.firstName} {user.lastName}
                    </div>
                    <div className={styles.usernameText}>@{user.username}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default ProfileMainCard;
