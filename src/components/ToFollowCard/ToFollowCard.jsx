import React from "react";
import styles from "./ToFollowCard.module.css";
import AvatarLarge from "../Avatar/AvatarLarge/AvatarLarge";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const ToFollowCard = ({ user }) => {
  const { followUser } = useData();

  const navigate = useNavigate();

  function handleFollow(e, user) {
    e.stopPropagation();
    followUser(user);
  }

  function handleUserClick(user) {
    navigate(`/profile/${user.username}`);
  }

  return (
    <div className={styles.userCont} onClick={() => handleUserClick(user)}>
      <div className={styles.userImage}>
        <AvatarLarge imagePath={user.avatarUrl} width="40px" height="40px" />
      </div>
      <div>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>@{user.username}</p>
      </div>

      <div className={styles.red} onClick={(e) => handleFollow(e, user)}>
        Follow +
      </div>
    </div>
  );
};

export default ToFollowCard;
