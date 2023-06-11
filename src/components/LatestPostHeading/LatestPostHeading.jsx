import styles from "./LatestPostHeading.module.css";
import { SlEqualizer } from "react-icons/sl";

const LatestPostHeading = () => {
  return (
    <div className={styles.container}>
      <h3>Latest Posts</h3>
      <SlEqualizer />
    </div>
  );
};

export default LatestPostHeading;
