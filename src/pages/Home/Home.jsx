import LatestPostHeading from "../../components/LatestPostHeading/LatestPostHeading";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import NewPostCard from "../../components/NewPostCard/NewPostCard";
import PostCard from "../../components/PostCard/PostCard";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import styles from "./Home.module.css";

const Home = () => {
  const {
    sortedPostArray,
    data: { userData, allPosts },
  } = useData();

  return (
    <HomeLayout>
      <NewPostCard />
      <LatestPostHeading />
      {sortedPostArray?.length === 0 && (
        <p className={styles.message}>
          No Posts - Follow some Users or create New post
        </p>
      )}

      {sortedPostArray?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </HomeLayout>
  );
};

export default Home;
