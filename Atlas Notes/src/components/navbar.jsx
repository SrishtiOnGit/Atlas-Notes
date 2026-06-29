import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
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
              <li>About Us</li>
              <li>Why Atlas Notes</li>
              <li>Featured Places</li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button className="getstarted">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
