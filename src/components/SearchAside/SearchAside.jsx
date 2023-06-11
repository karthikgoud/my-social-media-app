import styles from "./SearchAside.module.css";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const SearchAside = () => {
  return (
    <div className={styles.searchCont}>
      <BsSearch className={styles.searchIcon} />
      <input type="text" placeholder="Search people post anything" />
      <RxCross2 />
    </div>
  );
};

export default SearchAside;
