import { NavLink } from "react-router-dom";

import styles from "./Landing.module.css";
import { assets } from "../../constants/assets";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introCont}>
        <div className={styles.title}>
          <img
            className={styles.bird}
            src={assets.birdPng}
            alt="logo"
            width={100}
          />
          <span className={styles.textMy}>twipple</span>
        </div>
        <div className={styles.details}>
          <div className={styles.textSmall}>
            <span className={`${styles.textBig} ${styles.greyColor}`}>
              FOLLOW
            </span>{" "}
            PEOPLE AROUND THE GLOBE
          </div>
          <div className={styles.textSmall}>
            <span className={`${styles.textBig} ${styles.greyColor}`}>
              CONNECT
            </span>{" "}
            WITH YOUR FRIENDS
          </div>
          <div className={styles.textSmall}>
            <span className={`${styles.textBig} ${styles.greyColor}`}>
              SHARE
            </span>{" "}
            WHAT YOU THINK
          </div>
        </div>
        <div className={styles.joinCont}>
          <NavLink to="/login" className={styles.button}>
            Login
          </NavLink>
          <NavLink to="/signup" className={styles.loginLink}>
            New member? Create an account
          </NavLink>
        </div>
      </div>
      <div className={styles.imgCont}>
        <img src={assets.landingImage} alt="landing-img" />
      </div>
    </div>
  );
};

export default Landing;
