import React from "react";
import "../Styles/phrases.css";

const LocalPhrases = () => {

  const phrases = [
    {
      country: "Japan",
      phrase: "Konnichiwa",
      meaning: "Hello"
    },
    {
      country: "France",
      phrase: "Bonjour",
      meaning: "Good Day"
    },
    {
      country: "Spain",
      phrase: "Hola",
      meaning: "Hello"
    }
  ];

  return (
    <div className="phrases-page">

      <h1>🗣 Local Phrases</h1>

      <div className="phrase-grid">

        {phrases.map((item, index) => (

          <div key={index} className="phrase-card">

            <h3>{item.country}</h3>

            <h2>{item.phrase}</h2>

            <p>{item.meaning}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default LocalPhrases;