import styles from "./AvatarLarge.module.css";

const AvatarLarge = ({ imagePath, width, height }) => {
  return (
    <img
      className={styles.avatar}
      width={width}
      height={height}
      src={imagePath}
      alt="avatar"
    />
  );
};

export default AvatarLarge;
