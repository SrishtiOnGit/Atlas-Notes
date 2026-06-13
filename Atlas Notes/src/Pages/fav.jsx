import React from "react";
import kyoto from "../assets/kyoto.jpg";
import paris from "../assets/paris.jpg";

import "../Styles/fav.css";

const Favourites = () => {
  return (
    <div className="fav-page">

      <h1>❤️ Favourite Destinations</h1>

      <div className="fav-grid">

        <div className="fav-card">
          <img src={kyoto} alt="Kyoto" />
          <h3>Kyoto</h3>
        </div>

        <div className="fav-card">
          <img src={paris} alt="Paris" />
          <h3>Paris</h3>
        </div>

      </div>

    </div>
  );
};

export default Favourites;