import React, { useState } from "react";
import kyoto from "../assets/kyoto.jpg";
import paris from "../assets/paris.jpg";

import "../Styles/random.css";

const destinations = [
  {
    city: "Kyoto, Japan",
    image: kyoto,
    fact: "Ancient temples and bamboo forests."
  },
  {
    city: "Paris, France",
    image: paris,
    fact: "The City of Light."
  }
];

const Random = () => {

  const [place, setPlace] = useState(destinations[0]);

  const handleRandom = () => {
    const random =
      destinations[
        Math.floor(Math.random() * destinations.length)
      ];

    setPlace(random);
  };

  return (
    <div className="random-page">

      <h1>🎲 Random Explore</h1>

      <div className="random-card">

        <img src={place.image} alt={place.city} />

        <h2>{place.city}</h2>

        <p>{place.fact}</p>

        <button onClick={handleRandom}>
          Discover Another
        </button>

      </div>

    </div>
  );
};

export default Random;