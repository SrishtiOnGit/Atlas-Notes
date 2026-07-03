import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Sidebar() {
  return (
    <>
      <aside className={`sidebar ${open ? "open" : "closed"}`}>
        <img src={logo} alt={logo} className="sidebar-logo" />

        <nav className="sidebar-links">
          <Link to="/dashboard">Today's Postcard</Link>
          <Link to="/map">Maps</Link>
          <Link to="/hidden">Hidden Places</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
