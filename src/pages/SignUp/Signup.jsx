import { useState } from "react";
import styles from "./Signup.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { ToastHandler } from "../../components/Toast/Toast";

const Signup = () => {
  const [login, setLogin] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showEye, setShowEye] = useState(false);

  const { getSignUp, setIsLoggedIn, setIsSignUp } = useAuth();

  const navigate = useNavigate();

  function handleSignup(e, login) {
    e.preventDefault();

    const { firstName, lastName, username, password, email, confirmPassword } =
      login;
    if (
      firstName &&
      lastName &&
      email &&
      username &&
      password &&
      confirmPassword
    ) {
      if (password === confirmPassword) {
        const { firstName, lastName, username, password } = login;
        getSignUp(username, password, firstName, lastName);
        setIsSignUp(true);
        setIsLoggedIn(true);
        navigate("/home");
        ToastHandler("success", "Successfully Signed Up !!!");
      } else {
        ToastHandler("error", "password not matched");
      }
    } else {
      ToastHandler("error", "Enter all fields");
    }
  }

  function handleEye() {
    setShowEye((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <form className={styles.mySignup}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="customer_name">First name: </label>
          <input
            type="text"
            placeholder="Enter first name"
            value={login.firstName}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="customer_name">Last name: </label>
          <input
            type="text"
            placeholder="Enter last name"
            value={login.lastName}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="customer_name">Username: </label>
          <input
            type="text"
            placeholder="Enter username"
            value={login.username}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="customer_name">Email: </label>
          <input
            type="text"
            placeholder="Enter email address"
            value={login.email}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className={styles.flexDiv}>
          <label htmlFor="customer_name">Password: </label>
          <input
            type={showEye ? "text" : "password"}
            placeholder="Enter password"
            value={login.password}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {showEye && (
            <FaEye size={18} className={styles.eye} onClick={handleEye} />
          )}
          {!showEye && (
            <FaEyeSlash size={18} className={styles.eye} onClick={handleEye} />
          )}
        </div>

        <div>
          <label htmlFor="customer_name">Confirm password: </label>
          <input
            type={showEye ? "text" : "password"}
            placeholder="Re enter password"
            value={login.confirmPassword}
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
          />
          {showEye && (
            <FaEye size={18} className={styles.eye} onClick={handleEye} />
          )}
          {!showEye && (
            <FaEyeSlash size={18} className={styles.eye} onClick={handleEye} />
          )}
        </div>
        <button type="submit" onClick={(e) => handleSignup(e, login)}>
          Signup
        </button>

        <a className={styles.createNewAcc} href="/login">
          Already member? Go To Login.
        </a>
      </form>
    </div>
  );
};

export default Signup;
