import styles from "./ButtonEdit.module.css";
const ButtonEdit = ({ setShowProfileModal }) => {
  return (
    <button
      onClick={() => setShowProfileModal(true)}
      className={styles.editButton}
    >
      Edit Profile
    </button>
  );
};

export default ButtonEdit;
