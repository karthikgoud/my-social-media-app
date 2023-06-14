import styles from "./ThreeDotsModal.module.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useData } from "../../context/DataContext";

const ThreeDotsModal = ({ post, setShowModalDots }) => {
  const { deletePost } = useData();

  function deletePostHandler(id) {
    deletePost(id);
    setShowModalDots(false);
  }

  return (
    <div className={styles.modalCont}>
      <div className={styles.btn}>
        <MdEdit />
        Edit
      </div>
      <div className={styles.btn} onClick={() => deletePostHandler(post._id)}>
        <MdDelete />
        Delete
      </div>
    </div>
  );
};

export default ThreeDotsModal;
