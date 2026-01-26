import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import signup from "../pages/signup";
import Home from "../pages/Home";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
