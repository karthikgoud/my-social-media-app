import styles from "./ThreeDotsModal.module.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useData } from "../../context/DataContext";

const ThreeDotsModal = ({ post, setShowModalDots, setShowEditModal }) => {
  const { deletePost } = useData();

  function deletePostHandler(id) {
    deletePost(id);
    setShowModalDots(false);
  }

  function editHandler(id) {
    setShowEditModal(true);
  }

  return (
    <div className={styles.modalCont}>
      <div className={styles.btn} onClick={() => editHandler(post._id)}>
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
