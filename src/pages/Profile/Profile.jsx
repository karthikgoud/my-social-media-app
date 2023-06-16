import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import ProfileMainCard from "../../components/Profile/ProfileMainCard";
import YourPostHeading from "../../components/YourPostHeading/YourPostHeading";
import { useData } from "../../context/DataContext";
import styles from "./Profile.module.css";

const Profile = () => {
  const {
    data: { postsData },
  } = useData();

  return (
    <HomeLayout>
      <ProfileMainCard>
        <ButtonEdit />
      </ProfileMainCard>
      <YourPostHeading />
      {postsData?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </HomeLayout>
  );
};

export default Profile;
