import styles from "./Header.module.css";
import alpha from "../../assets/images/alpha.png";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  const {
    authState: { isLoggedIn },
    authDispatch,
  } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    authDispatch({ type: "SET_ISLOGGEDIN" });
    navigate("/home");
  }

  return (
    <div className={styles.headerCont}>
      <div>
        {/* <img src={alpha} alt="logo" /> */}
        <NavLink to="/home">twig</NavLink>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
