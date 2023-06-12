import ExploreNavigation from "../../components/ExploreNavigation/ExploreNavigation";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import styles from "./Explore.module.css";
const Explore = () => {
  return (
    <HomeLayout>
      <ExploreNavigation />
      <PostCard />
      <PostCard />
    </HomeLayout>
  );
};

export default Explore;
