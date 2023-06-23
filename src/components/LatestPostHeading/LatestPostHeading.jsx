import { useEffect, useRef, useState } from "react";
import FilterModal from "../Modals/FilterModal/FilterModal";
import styles from "./LatestPostHeading.module.css";
import { SlEqualizer } from "react-icons/sl";

const LatestPostHeading = () => {
  const [showFilter, setShowFilter] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOut = (e) => {
      if (showFilter && ref.current && !ref.current.contains(e.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("click", checkIfClickedOut);
    return () => {
      document.removeEventListener("click", checkIfClickedOut);
    };
  }, [showFilter]);

  return (
    <div className={styles.container}>
      <h3>Latest Posts</h3>
      <div className={styles.equaliser} ref={ref}>
        <SlEqualizer onClick={() => setShowFilter((prev) => !prev)} />
        {showFilter && <FilterModal />}
      </div>
    </div>
  );
};

export default LatestPostHeading;
