import { useState } from "react";
import AsideFollowBox from "../../AsideFollowBox/AsideFollowBox";
import Header from "../../Header/Header";
import CreatePostModal from "../../Modals/CreatePostModal/CreatePostModal";
import Navigation from "../../Navigation/Navigation";
import SearchAside from "../../SearchAside/SearchAside";
import styles from "./HomeLayout.module.css";
import ModalWrapper from "../../Modals/ModalWrapper/ModalWrapper";

const HomeLayout = ({ children }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleClick = () => {
    setShowCreateModal(false);
  };

  return (
    <div className={styles.homeContainer}>
      <nav className={styles.header}>
        <Header />
      </nav>
      <div className={styles.mainDiv}>
        <aside className={styles.asideL}>
          <Navigation setShowCreateModal={setShowCreateModal} />
        </aside>
        <main className={styles.main}>{children}</main>
        <aside className={styles.asideR}>
          <SearchAside />
          <AsideFollowBox />
        </aside>
      </div>

      {showCreateModal && (
        <ModalWrapper onClose={handleClick}>
          <CreatePostModal setShowCreateModal={setShowCreateModal} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default HomeLayout;
