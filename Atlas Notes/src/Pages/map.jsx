import React from "react";
import "../Styles/map.css";

const Map = () => {
  return (
    <div className="map-page">

      <h1>🗺 Explore on Map</h1>

      <iframe
        title="Kyoto Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=135.70%2C34.95%2C135.85%2C35.10&layer=mapnik"
      />

    </div>
  );
};

export default Map;