import styles from "./Navigation.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsRocket } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";

const Navigation = () => {
  const {
    data: { userData },
  } = useData();
  return (
    <div className={styles.navCont}>
      <div className={styles.topCont}>
        <div className={styles.iconCont}>
          <NavLink
            to="/home"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
              };
            }}
          >
            <IoHomeOutline /> <span>Home</span>
          </NavLink>
        </div>
        <div className={styles.iconCont}>
          <NavLink
            to="/explore"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
              };
            }}
          >
            <BsRocket /> <span>Explore</span>
          </NavLink>
        </div>
        <div className={styles.iconCont}>
          <NavLink
            to="/bookmark"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
              };
            }}
          >
            <BsBookmark /> <span>Bookmark</span>
          </NavLink>
        </div>
        <div className={styles.iconCont}>
          <NavLink
            to="/profile"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white",
              };
            }}
          >
            <BiUser /> <span>Profile</span>
          </NavLink>
        </div>
        <button className={styles.navBtn}>Create New Post</button>
      </div>

      <div className={styles.bottomCont}>
        <div className={styles.userCont}>
          <div className={styles.cirImg}></div>
          <div className={styles.userDetails}>
            <div>{`${userData.firstName} ${userData.lastName}`}</div>
            <div>@{userData.username}</div>
          </div>
        </div>
        <div className={styles.dots}>...</div>
      </div>
    </div>
  );
};

export default Navigation;
