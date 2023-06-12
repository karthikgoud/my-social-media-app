import "./App.css";
import Landing from "./pages/Landing/Landing";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <header>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/home">Home</NavLink>
      </header> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
