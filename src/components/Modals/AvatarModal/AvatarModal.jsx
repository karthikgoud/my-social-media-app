import styles from "./AvatarModal.module.css";

import { avatarUrl } from "../../../constants/avatarUrl";

const AvatarModal = ({ setProfileUpdate, setShowAvatarModal }) => {
  function handleAvatarClick(imgUrl) {
    setProfileUpdate((prev) => ({ ...prev, avatarUrl: imgUrl }));
    setShowAvatarModal(false);
  }

  return (
    <div className={styles.modalCont}>
      <div className={styles.heading}>
        <h2>Choose Avatar</h2>
        <div onClick={() => setShowAvatarModal(false)}>X</div>
      </div>
      <div className={styles.avatarCont}>
        {avatarUrl.map((avatar) => {
          return (
            <div onClick={() => handleAvatarClick(avatar.path)}>
              <img src={avatar.path} alt={avatar.name} />
              <p>{avatar.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvatarModal;
