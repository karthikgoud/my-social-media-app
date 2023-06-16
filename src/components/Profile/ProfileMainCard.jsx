import { useData } from "../../context/DataContext";
import AvatarLarge from "../Avatar/AvatarLarge/AvatarLarge";
import styles from "./ProfileMainCard.module.css";

const ProfileMainCard = ({ children }) => {
  const {
    data: { userData },
  } = useData();

  return (
    <div className={styles.profileCont}>
      <AvatarLarge
        imagePath={userData.avatarUrl}
        width="100px"
        height="100px"
      />
      {/* <div className={styles.profileImage}></div> */}
      <h2>
        {userData.firstName} {userData?.lastName}
      </h2>
      <div className={styles.username}>@{userData?.username}</div>
      {children}
      <p>{userData.bio}</p>
      <p className={styles.website}>{userData?.website}</p>
      <div className={styles.userInfo}>
        <div className={styles.flex}>
          <div>{userData?.following?.length}</div>
          <div>Following</div>
        </div>
        <div className={styles.flex}>
          <div>2k</div>
          <div>Posts</div>
        </div>
        <div className={styles.flex}>
          <div>{userData?.followers?.length}</div>
          <div>Followers</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainCard;
