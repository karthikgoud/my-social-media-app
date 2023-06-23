import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();

  const pathname = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: pathname }} />
  );
};

export default RequiresAuth;
