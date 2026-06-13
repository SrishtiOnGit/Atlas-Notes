import "/src/Styles/postcard.css";
import React from "react";

const Postcard = ({
  location,
  image,
  temperature,
  fact,
  country
}) => {
  return (
    <div className="postcard">

      <div className="stamp">
        {country}
      </div>

      <h3 className="postcard-title">
        📍 {location}
      </h3>

      <img
        src={image}
        alt={location}
        className="postcard-image"
      />

      <div className="weather">
        🌦 {temperature}
      </div>

      <p className="fact">
        "{fact}"
      </p>

      <div className="signature">
        Atlas Notes
      </div>

    </div>
  );
};

export default Postcard;