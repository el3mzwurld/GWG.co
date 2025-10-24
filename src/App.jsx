import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/home.jsx";
import "./assets/styles/global.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
