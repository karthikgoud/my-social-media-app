import styles from "./Navigation.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsRocket } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import UserAvatar from "../UserAvatar/UserAvatar";

const Navigation = ({ setShowCreateModal }) => {
  const {
    data: { allUsers, userData },
  } = useData();

  const { currentUser } = useAuth();

  const currentAvatarUser = allUsers.find(
    (dbUser) => dbUser?.username === currentUser?.username
  );

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
            to={`/profile/${userData.username}`}
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
        <button
          className={styles.navBtn}
          onClick={() => setShowCreateModal(true)}
        >
          Create New Post
        </button>
      </div>

      <NavLink
        to={`/profile/${userData.username}`}
        className={styles.bottomCont}
      >
        <div className={styles.userCont}>
          <UserAvatar user={currentAvatarUser} />
          <div className={styles.userDetails}>
            <div>{`${userData.firstName} ${userData.lastName}`}</div>
            <div>@{userData.username}</div>
          </div>
        </div>
        <div className={styles.dots}>...</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
