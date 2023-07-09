import React from "react";
import styles from "./ToFollowCard.module.css";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../UserAvatar/UserAvatar";

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
      <div className={styles.info}>
        <UserAvatar user={user} />
        <div className={styles.nameCont}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>@{user.username}</p>
        </div>
      </div>
      <div className={styles.red} onClick={(e) => handleFollow(e, user)}>
        Follow +
      </div>
    </div>
  );
};

export default ToFollowCard;
