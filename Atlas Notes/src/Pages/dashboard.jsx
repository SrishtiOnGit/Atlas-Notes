import React from "react";
import kyoto from "../assets/kyoto.jpg";
import paris from "../assets/paris.jpg";
import "/src/Styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="top-bar">
        <h2>Welcome back, Explorer 🌍</h2>
        <p>Discover the world one postcard at a time</p>
      </div>

      <div className="featured-card">
        <img src={kyoto} alt="featured" />

        <div className="featured-content">
          <h3>Featured Destination</h3>
          <h1>Kyoto, Japan</h1>
          <p>
            A city where ancient temples meet peaceful bamboo forests.
          </p>
          <button>Explore Now</button>
        </div>
      </div>

      <h3 className="section-title">Explore Postcards</h3>

      <div className="card-grid">
        <div className="card">
          <img src={paris} alt="paris" />
          <h4>Paris, France</h4>
          <p>City of Light & love</p>
        </div>

        <div className="card">
          <img src={kyoto} alt="kyoto" />
          <h4>Kyoto, Japan</h4>
          <p>Tradition meets nature</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>12</h2>
          <p>Saved Postcards</p>
        </div>

        <div className="stat-box">
          <h2>8</h2>
          <p>Countries Explored</p>
        </div>

        <div className="stat-box">
          <h2>3</h2>
          <p>Daily Streak</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;