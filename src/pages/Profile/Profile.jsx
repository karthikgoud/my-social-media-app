import { useState } from "react";
import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import ProfileMainCard from "../../components/Profile/ProfileMainCard";
import EditProfileModal from "../../components/Modals/EditProfileModal/EditProfileModal";
import YourPostHeading from "../../components/YourPostHeading/YourPostHeading";
import { useData } from "../../context/DataContext";
import styles from "./Profile.module.css";
import ModalWrapper from "../../components/Modals/ModalWrapper/ModalWrapper";

const Profile = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const {
    data: { userPosts },
  } = useData();

  const handleClick = () => {
    setShowProfileModal(false);
  };

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
        <ModalWrapper onClose={handleClick}>
          <EditProfileModal setShowProfileModal={setShowProfileModal} />
        </ModalWrapper>
      )}
    </HomeLayout>
  );
};

export default Profile;
