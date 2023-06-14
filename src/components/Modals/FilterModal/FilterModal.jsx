import React from "react";
import styles from "./FilterModal.module.css";
import { useData } from "../../../context/DataContext";

const FilterModal = () => {
  const { dataDispatch } = useData();

  return (
    <div className={styles.modalCont}>
      <div>
        <label>
          <input
            type="radio"
            name="filter"
            onChange={() => dataDispatch({ type: "TRENDING" })}
          />
          Trending
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="filter"
            onChange={() => dataDispatch({ type: "LATEST" })}
          />
          Latest
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="filter"
            onChange={() => dataDispatch({ type: "OLDEST" })}
          />
          Oldest
        </label>
      </div>
    </div>
  );
};

export default FilterModal;
