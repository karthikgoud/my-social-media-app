import React from "react";
import styles from "./FilterModal.module.css";
import { useData } from "../../../context/DataContext";

const FilterModal = () => {
  const { dataDispatch, data } = useData();

  return (
    <div className={styles.modalCont}>
      <div>
        <label htmlFor="trending" className={styles.label}>
          <input
            type="radio"
            name="filter"
            id="trending"
            onChange={() => dataDispatch({ type: "TRENDING" })}
          />
          Trending
        </label>
      </div>

      <div>
        <label htmlFor="latest" className={styles.label}>
          <input
            type="radio"
            id="latest"
            name="filter"
            onChange={() => dataDispatch({ type: "LATEST" })}
          />
          Latest
        </label>
      </div>

      <div>
        <label htmlFor="oldest" className={styles.label}>
          <input
            type="radio"
            name="filter"
            id="oldest"
            onChange={() => dataDispatch({ type: "OLDEST" })}
          />
          Oldest
        </label>
      </div>
    </div>
  );
};

export default FilterModal;
