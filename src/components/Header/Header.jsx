import styles from "./Header.module.css";
import alpha from "../../assets/images/alpha.png";

const Header = () => {
  return (
    <div className={styles.headerCont}>
      <div>
        <img src={alpha} alt="logo" />
        {/* <span>Alpha </span> */}
      </div>
    </div>
  );
};

export default Header;
