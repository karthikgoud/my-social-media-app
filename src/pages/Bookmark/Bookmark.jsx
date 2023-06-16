import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import { useData } from "../../context/DataContext";
import styles from "./Bookmark.module.css";

const Bookmark = () => {
  const {
    data: { bookMarkedPosts },
  } = useData();

  return (
    <HomeLayout>
      <h2 className={styles.bookmarkHeading}>Your Bookmarks</h2>
      {bookMarkedPosts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </HomeLayout>
  );
};

export default Bookmark;
