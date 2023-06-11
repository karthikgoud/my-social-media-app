import AsideFollowBox from "../../components/AsideFollowBox/AsideFollowBox";
import Header from "../../components/Header/Header";
import LatestPostHeading from "../../components/LatestPostHeading/LatestPostHeading";
import Navigation from "../../components/Navigation/Navigation";
import NewPostCard from "../../components/NewPostCard/NewPostCard";
import PostCard from "../../components/PostCard/PostCard";
import SearchAside from "../../components/SearchAside/SearchAside";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <nav className={styles.header}>
        <Header />
      </nav>
      <div className={styles.mainDiv}>
        <aside className={styles.asideL}>
          <Navigation />
        </aside>
        <main className={styles.main}>
          <NewPostCard />
          <LatestPostHeading />
          <PostCard />
          <PostCard />
        </main>
        <aside className={styles.asideR}>
          <SearchAside />
          <AsideFollowBox />
        </aside>
      </div>
    </div>
  );
};

export default Home;
