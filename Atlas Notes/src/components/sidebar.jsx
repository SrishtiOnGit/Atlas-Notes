import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/sidebar.css';

const SideBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <span className="brand-icon">🌍</span>
        <h1 className="brand-logo">Atlas Notes</h1>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li className={isActive('/dashboard') ? 'active' : ''}>
            <Link to="/dashboard">
              <span className="menu-icon">📊</span> Dashboard
            </Link>
          </li>
          <li className={isActive('/dashboard/postcard') ? 'active' : ''}>
            <Link to="/dashboard/postcard">
              <span className="menu-icon">📮</span> Daily Postcard
            </Link>
          </li>
          <li className={isActive('/dashboard/random') ? 'active' : ''}>
            <Link to="/dashboard/random">
              <span className="menu-icon">🎲</span> Random Explore
            </Link>
          </li>
          <li className={isActive('/dashboard/map') ? 'active' : ''}>
            <Link to="/dashboard/map">
              <span className="menu-icon">🗺️</span> Maps
            </Link>
          </li>
          <li className={isActive('/dashboard/favourites') ? 'active' : ''}>
            <Link to="/dashboard/favourites">
              <span className="menu-icon">⭐</span> Favourites
            </Link>
          </li>
          <li className={isActive('/dashboard/phrases') ? 'active' : ''}>
            <Link to="/dashboard/phrases">
              <span className="menu-icon">🗣️</span> Local Phrases
            </Link>
          </li>
        </ul>
      </nav>

      <hr className="sidebar-divider" />

      <div className="sidebar-footer">
        <ul>
          <li className={isActive('/dashboard/profile') ? 'active' : ''}>
            <Link to="/dashboard/profile">
              <span className="menu-icon">👤</span> Profile
            </Link>
          </li>
          <li className={isActive('/dashboard/settings') ? 'active' : ''}>
            <Link to="/dashboard/settings">
              <span className="menu-icon">⚙️</span> Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;