import "./App.css";
import Landing from "./pages/Landing/Landing";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmark/Bookmark";
import PostDetail from "./pages/PostDetail/PostDetail";
import Login from "./pages/Login/Login";
import RequiresAuth from "./Auth/RequiresAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {/* <header>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/home">Home</NavLink>
      </header> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
