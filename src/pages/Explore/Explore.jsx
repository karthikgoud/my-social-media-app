import ExploreNavigation from "../../components/ExploreNavigation/ExploreNavigation";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import { useData } from "../../context/DataContext";
import styles from "./Explore.module.css";
const Explore = () => {
  const {
    data: { postsData },
  } = useData();

  return (
    <HomeLayout>
      <ExploreNavigation />
      {postsData?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </HomeLayout>
  );
};

export default Explore;
