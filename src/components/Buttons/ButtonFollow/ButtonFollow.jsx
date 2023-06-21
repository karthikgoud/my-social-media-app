import { useData } from "../../../context/DataContext";
import styles from "./ButtonFollow.module.css";
const ButtonFollow = ({ currentUserProfile }) => {
  const {
    followUser,
    unFollowUser,
    data: { userData },
  } = useData();

  const isFollowing = userData.following.find(
    (user) => user.username === currentUserProfile.username
  );

  function handleFollow(currentUserProfile) {
    followUser(currentUserProfile);
  }

  function handleUnFollow(currentUserProfile) {
    console.log(currentUserProfile);
    unFollowUser(currentUserProfile);
  }

  return (
    <>
      {isFollowing ? (
        <button
          className={styles.followButton}
          onClick={() => handleUnFollow(currentUserProfile)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={styles.followButton}
          onClick={() => handleFollow(currentUserProfile)}
        >
          Follow
        </button>
      )}
    </>
  );
};

export default ButtonFollow;
