import styles from "./SearchAside.module.css";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const SearchAside = () => {
  return (
    <div className={styles.searchCont}>
      <ImSearch className={styles.searchIcon} style={{ color: "white" }} />
      <input type="text" placeholder="Search people post anything" />
      <RxCross2 style={{ color: "white" }} />
    </div>
  );
};

export default SearchAside;
