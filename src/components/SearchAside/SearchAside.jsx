import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./SearchAside.module.css";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { useData } from "../../context/DataContext";

const SearchAside = () => {
  const [searchText, setSearchText] = useState("");
  const [userModal, setUserModal] = useState(true);

  const {
    data: { allUsers },
  } = useData();

  const userFound = allUsers.filter((user) => {
    const fullName = user.firstName + user.lastName;
    if (fullName.toLowerCase().includes(searchText.toLowerCase())) {
      return user;
    }
  });

  return (
    <div className={styles.searchCont}>
      <ImSearch className={styles.searchIcon} style={{ color: "white" }} />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search User..."
      />
      <RxCross2
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => setSearchText("")}
      />

      {searchText.length > 0 && (
        <div className={styles.userModal}>
          {userFound &&
            userFound.map((user) => (
              <NavLink
                key={user.username}
                onClick={() => setSearchText("")}
                to={`/profile/${user.username}`}
                className={styles.userEach}
              >
                {user.firstName} {user.lastName}
              </NavLink>
            ))}
          {userFound.length === 0 && "no user found"}
        </div>
      )}
    </div>
  );
};

export default SearchAside;
