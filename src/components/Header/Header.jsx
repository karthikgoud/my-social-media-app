import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";
import { assets } from "../../constants/assets";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/home");
  }

  return (
    <div className={styles.headerCont}>
      <div className={styles.logo}>
        <img src={assets.birdPng} alt="logo" width={40} />
        <NavLink to="/home">twipple</NavLink>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
