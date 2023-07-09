import styles from "./UserAvatarFreeSize.module.css";

const UserAvatarFreeSize = ({ user, width, height }) => {
  const avatar = user?.avatarUrl;

  const userInitials = user?.firstName?.slice(0, 1).toUpperCase();

  return (
    <span className={styles.avatarSpan}>
      {avatar ? (
        <img
          src={user?.avatarUrl}
          alt={user?.username}
          className={styles.avatarImg}
          width={width}
          height={height}
        />
      ) : (
        <div
          className={styles.initials}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {userInitials}
        </div>
      )}
    </span>
  );
};

export default UserAvatarFreeSize;
