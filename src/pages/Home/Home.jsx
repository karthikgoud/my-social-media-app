import LatestPostHeading from "../../components/LatestPostHeading/LatestPostHeading";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import NewPostCard from "../../components/NewPostCard/NewPostCard";
import PostCard from "../../components/PostCard/PostCard";
import { useData } from "../../context/DataContext";
import styles from "./Home.module.css";

const Home = () => {
  const { sortedPostArray } = useData();

  return (
    <HomeLayout>
      <NewPostCard />
      <LatestPostHeading />
      {sortedPostArray?.map((post) => (
        <PostCard post={post} />
      ))}
    </HomeLayout>
  );
};

export default Home;
