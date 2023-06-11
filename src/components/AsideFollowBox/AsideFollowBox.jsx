import ToFollowCard from "../ToFollowCard/ToFollowCard";
import styles from "./AsideFollowBox.module.css";

const AsideFollowBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whoContainer}>
        <h4>Who to Follow?</h4>
        <div className={styles.red}>Show More</div>
      </div>
      <div>
        <ToFollowCard />
        <ToFollowCard />
        <ToFollowCard />
        <ToFollowCard />
      </div>
    </div>
  );
};

export default AsideFollowBox;
