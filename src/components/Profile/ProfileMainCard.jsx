import styles from "./ProfileMainCard.module.css";

const ProfileMainCard = () => {
  return (
    <div className={styles.profileCont}>
      <div className={styles.profileImage}></div>
      <h2>Tanay Pratap</h2>
      <div className={styles.username}>@tanaypratap</div>
      <button>Edit Profile</button>
      <p>
        Senior Software Engineer @Microsoft | Creator of India’s biggest
        programming community | Tweets about JavaScript, ReactJS, Career and
        Startups
      </p>
      <p className={styles.website}>tanaypratap.com</p>
      <div className={styles.userInfo}>
        <div className={styles.flex}>
          <div>0</div>
          <div>Following</div>
        </div>
        <div className={styles.flex}>
          <div>2k</div>
          <div>Posts</div>
        </div>
        <div className={styles.flex}>
          <div>37.3K</div>
          <div>Followers</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainCard;
