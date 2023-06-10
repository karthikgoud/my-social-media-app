import "./App.css";
import Landing from "./pages/Landing/Landing";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/">Landing</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
