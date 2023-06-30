import React, { useEffect, useRef } from "react";

import styles from "./ClickOutsideCheck.module.css";

const ClickOutsideCheck = ({ children, show, setShow }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOut = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", checkIfClickedOut);
    return () => {
      document.removeEventListener("click", checkIfClickedOut);
    };
  }, [show]);

  return (
    <div className={styles.container} ref={ref}>
      {children}
    </div>
  );
};

export default ClickOutsideCheck;
