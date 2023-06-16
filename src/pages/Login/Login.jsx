import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastHandler } from "../../components/Toast/Toast";

const Login = () => {
  const { authDispatch, getLogin } = useAuth();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginForm.username === "" || loginForm.password === "") {
      ToastHandler("error", "Enter User Details");
      return;
    }
    getLogin(loginForm.username, loginForm.password);
    authDispatch({ type: "SET_ISLOGGEDIN" });
    navigate("/home");
  };

  const handleGuestLogin = () => {
    setLoginForm((prev) => ({
      ...prev,
      username: "adarshbalika",
      password: "adarshBalika123",
    }));
  };

  return (
    <div>
      <div className={styles.loginCont}>
        <div className={styles.loginCard}>
          <h2>Login</h2>
          <div className={styles.inputEmail}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name=""
              id="username"
              placeholder="username"
              value={loginForm.username}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>
          <div className={styles.inputPassword}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="*********"
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className={styles.forgotCont}>
            <div>
              <label htmlFor="">
                <input type="checkbox" name="" /> Remember me
              </label>
            </div>
            <div className={styles.forgotPassword}>Forgot your password?</div>
          </div>
          <button className={styles.loginBtn} onClick={handleLogin}>
            Login
          </button>
          <button className={styles.loginBtn} onClick={handleGuestLogin}>
            Set guest details
          </button>
          <a className={styles.createNewAcc} href="/signup">
            New member? Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;