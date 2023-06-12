import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import ProfileMainCard from "../../components/Profile/ProfileMainCard";
import YourPostHeading from "../../components/YourPostHeading/YourPostHeading";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <HomeLayout>
      <ProfileMainCard />
      <YourPostHeading />
      <PostCard />
    </HomeLayout>
  );
};

export default Profile;
