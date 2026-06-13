import React from "react";
import kyoto from "../assets/kyoto.jpg";

import "../Styles/daily.css";

const DailyPostcard = () => {
  return (
    <div className="daily-page">

      <div className="daily-header">
        <h1>🌅 Daily Postcard</h1>
        <p>
          Your featured destination for today.
        </p>
      </div>

      <div className="daily-card">

        <img
          src={kyoto}
          alt="Kyoto"
          className="daily-image"
        />

        <div className="daily-content">

          <span className="daily-tag">
            ✨ Featured Today
          </span>

          <h2>Kyoto, Japan</h2>

          <p className="daily-description">
            A peaceful city where ancient temples meet bamboo forests.
            Kyoto served as Japan's capital for over 1,000 years and
            remains one of the country's most culturally rich destinations.
          </p>

          <div className="info-grid">

            <div className="info-box">
              <h4>🌡 Temperature</h4>
              <p>24°C</p>
            </div>

            <div className="info-box">
              <h4>☁ Weather</h4>
              <p>Sunny</p>
            </div>

            <div className="info-box">
              <h4>🗣 Greeting</h4>
              <p>Konnichiwa</p>
            </div>

            <div className="info-box">
              <h4>📍 Country</h4>
              <p>Japan</p>
            </div>

          </div>

          <button className="explore-btn">
            Explore More
          </button>

        </div>

      </div>

    </div>
  );
};

export default DailyPostcard;