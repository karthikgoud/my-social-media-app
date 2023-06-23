import styles from "./UserAvatar.module.css";

const UserAvatar = ({ user }) => {
  const avatar = user?.avatarUrl;

  const userInitials = user?.firstName?.slice(0, 1).toUpperCase();

  return (
    <span className={styles.avatarSpan}>
      {avatar ? (
        <img
          src={user?.avatarUrl}
          alt={user?.username}
          className={styles.avatarImg}
        />
      ) : (
        <div className={styles.initials}>{userInitials}</div>
      )}
    </span>
  );
};

export default UserAvatar;
