import AsideFollowBox from "../../AsideFollowBox/AsideFollowBox";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import SearchAside from "../../SearchAside/SearchAside";
import styles from "./HomeLayout.module.css";

const HomeLayout = ({ children }) => {
  return (
    <div className={styles.homeContainer}>
      <nav className={styles.header}>
        <Header />
      </nav>
      <div className={styles.mainDiv}>
        <aside className={styles.asideL}>
          <Navigation />
        </aside>
        <main className={styles.main}>{children}</main>
        <aside className={styles.asideR}>
          <SearchAside />
          <AsideFollowBox />
        </aside>
      </div>
    </div>
  );
};

export default HomeLayout;
