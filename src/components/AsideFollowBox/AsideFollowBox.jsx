import { useFetcher } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import ToFollowCard from "../ToFollowCard/ToFollowCard";
import styles from "./AsideFollowBox.module.css";
import { useEffect, useState } from "react";

const AsideFollowBox = () => {
  const {
    data: { allUsers, userData },
  } = useData();

  const userPresent = allUsers?.find(
    (dbUser) => dbUser.username === userData.username
  );

  const filteredUsers = allUsers
    ?.filter((dbUser) => dbUser.username !== userPresent?.username)
    ?.filter(
      (eachUser) =>
        !userPresent?.following.find(
          (item) => item.username === eachUser.username
        )
    );

  return (
    <div className={styles.container}>
      <div className={styles.whoContainer}>
        <h4>Who to Follow?</h4>
        <div className={styles.red}>Show More</div>
      </div>
      <div>
        {filteredUsers?.map((user) => (
          <ToFollowCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AsideFollowBox;
