import styles from "./Header.module.css";
import bird from "../../assets/images/bird.png";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

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
        <img src={bird} alt="logo" width={40} />
        <NavLink to="/home">twipple</NavLink>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
