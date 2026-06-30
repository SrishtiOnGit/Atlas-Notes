import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />

      <h1 className="title">
        Atlas <span className="title-02">Notes</span>
      </h1>

      <div className="links">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="dropdown">
            <a href="#">Explore ▼</a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/atlasnotes">Why Atlas Notes</Link>
              </li>
              <li>
                <Link to="/featuredplaces">Featured Places</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button className="getstarted" onClick={() => navigate("/dashboard")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
