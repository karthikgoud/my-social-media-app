import styles from "./ExploreNavigation.module.css";

const ExploreNavigation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Explore</h2>
      <div className={styles.btnCont}>
        <button className={`${styles.btn} ${styles.active}`}>For You</button>
        <button className={`${styles.btn}`}>Trending</button>
        <button className={`${styles.btn}`}>Technology</button>
        <button className={`${styles.btn}`}>Sports</button>
        <button className={`${styles.btn}`}>News</button>
      </div>
    </div>
  );
};

export default ExploreNavigation;
