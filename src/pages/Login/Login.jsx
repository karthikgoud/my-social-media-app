import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastHandler } from "../../components/Toast/Toast";

const Login = () => {
  const { getLogin, setIsLoggedIn } = useAuth();

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
    setIsLoggedIn(true);
    navigate("/home");
  };

  const handleGuestLogin = () => {
    setLoginForm((prev) => ({
      ...prev,
      username: "adarshsingh",
      password: "adarsh123",
    }));
  };

  return (
    <div className={styles.loginCont}>
      <div className={styles.loginCard}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} className={styles.formCont}>
          <div className={styles.inputEmail}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
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
              id="password"
              placeholder="*********"
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
        </form>

        <div className={styles.forgotCont}>
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
  );
};

export default Login;
