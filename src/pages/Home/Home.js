import LatestPostHeading from "../../components/LatestPostHeading/LatestPostHeading";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import NewPostCard from "../../components/NewPostCard/NewPostCard";
import PostCard from "../../components/PostCard/PostCard";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <HomeLayout>
      <NewPostCard />
      <LatestPostHeading />
      <PostCard />
      <PostCard />
    </HomeLayout>
  );
};

export default Home;
