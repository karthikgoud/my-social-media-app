import React from "react";
import styles from "./ToFollowCard.module.css";

const ToFollowCard = () => {
  return (
    <div className={styles.userCont}>
      <div className={styles.userImage}></div>
      <div>
        <h3>Tanay Pratap</h3>
        <p>@tanaypratap</p>
      </div>
      <div className={styles.red}>Follow +</div>
    </div>
  );
};

export default ToFollowCard;
