import { useState } from "react";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import EditProfileModal from "../../components/Modals/EditProfileModal/EditProfileModal";
import PostCard from "../../components/PostCard/PostCard";
import ProfileMainCard from "../../components/Profile/ProfileMainCard";
import YourPostHeading from "../../components/YourPostHeading/YourPostHeading";
import { useData } from "../../context/DataContext";
import styles from "./Profile.module.css";

const Profile = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const {
    data: { userPosts },
  } = useData();

  return (
    <HomeLayout>
      <ProfileMainCard>
        <ButtonEdit setShowProfileModal={setShowProfileModal} />
      </ProfileMainCard>
      <YourPostHeading />
      {userPosts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
      {showProfileModal && (
        <div className={styles.editProfileModal}>
          <EditProfileModal setShowProfileModal={setShowProfileModal} />
        </div>
      )}
    </HomeLayout>
  );
};

export default Profile;
