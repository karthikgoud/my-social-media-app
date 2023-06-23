import styles from "./Landing.module.css";

import landing from "../../assets/images/landing-img1.png";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introCont}>
        <div className={styles.title}>
          <span className={styles.textMy}>My</span> Website
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
        <img src={landing} alt="landing-img" />
      </div>
    </div>
  );
};

export default Landing;
