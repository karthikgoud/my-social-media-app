import "./App.css";
import LatestPostHeading from "./components/LatestPostHeading/LatestPostHeading";
import HomeLayout from "./components/Layout/HomeLayout/HomeLayout";
import NewPostCard from "./components/NewPostCard/NewPostCard";
import PostCard from "./components/PostCard/PostCard";
import ProfileMainCard from "./components/Profile/ProfileMainCard";
import YourPostHeading from "./components/YourPostHeading/YourPostHeading";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/home">Home</NavLink>
      </header> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/profile"
          element={
            <HomeLayout>
              <ProfileMainCard />
              <YourPostHeading />
              <PostCard />
            </HomeLayout>
          }
        />
        <Route
          path="/home"
          element={
            <HomeLayout>
              <NewPostCard />
              <LatestPostHeading />
              <PostCard />
              <PostCard />
            </HomeLayout>
          }
        />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
