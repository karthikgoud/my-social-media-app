import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

import styles from "./Landing.module.css";
import landing from "../../assets/images/world-6.png";
import bird from "../../assets/images/bird.png";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    <div className={styles.container}>
      <div className={styles.introCont}>
        <div className={styles.title}>
          <img className={styles.bird} src={bird} alt="logo" width={100} />
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
        <img src={landing} alt="landing-img" />
      </div>
    </div>
  ) : (
    <div className={styles.loader}>
      <TailSpin
        height="100"
        width="100"
        color="#ff0060"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Landing;
