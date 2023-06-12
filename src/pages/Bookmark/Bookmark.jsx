import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import styles from "./Bookmark.module.css";

const Bookmark = () => {
  return (
    <HomeLayout>
      <h2>Your Bookmarks</h2>
      <PostCard />
      <PostCard />
    </HomeLayout>
  );
};

export default Bookmark;
