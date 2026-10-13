import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />

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
                <Link to="/whyus">Why Atlas Notes</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <p className="version">V2.0</p>
      </div>
    </div>
  );
};

export default Navbar;
