import { useState } from "react";
import { useParams } from "react-router-dom";

import ButtonEdit from "../../components/Buttons/ButtonEdit/ButtonEdit";
import HomeLayout from "../../components/Layout/HomeLayout/HomeLayout";
import PostCard from "../../components/PostCard/PostCard";
import ProfileMainCard from "../../components/Profile/ProfileMainCard";
import EditProfileModal from "../../components/Modals/EditProfileModal/EditProfileModal";
import YourPostHeading from "../../components/YourPostHeading/YourPostHeading";
import { useData } from "../../context/DataContext";
import ModalWrapper from "../../components/Modals/ModalWrapper/ModalWrapper";
import styles from "./Profile.module.css";
import ButtonFollow from "../../components/Buttons/ButtonFollow/ButtonFollow";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { username } = useParams();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const {
    data: { allUsers, postsData, userData },
  } = useData();

  const {
    authState: { currentUser: authUser },
  } = useAuth();

  const handleClick = () => {
    setShowProfileModal(false);
  };

  const currentUserProfile = allUsers.find(
    (user) => user.username === username
  );

  const currentUserPosts = postsData.filter(
    (post) => post.username === username
  );

  return (
    <HomeLayout>
      <ProfileMainCard
        currentUserProfile={currentUserProfile}
        currentUserPosts={currentUserPosts}
      >
        {currentUserProfile.username === authUser.username ? (
          <ButtonEdit setShowProfileModal={setShowProfileModal} />
        ) : (
          <ButtonFollow currentUserProfile={currentUserProfile} />
        )}
      </ProfileMainCard>
      <YourPostHeading />
      {currentUserPosts?.map((post) => (
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
