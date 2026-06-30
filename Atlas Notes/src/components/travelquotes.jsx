import "../styles/travelquotes.css";
import { useState } from "react";

const TravelQuotes = () => {
  const quotes = [
    "Every window tells a different story.",
    "Collect stories, not souvenirs.",
    "The best memories are found between stops.",
    "Explore beyond the map.",
  ];

  const [currentQuote, setCurrentQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="travel-quotes">
      <h1 className="quotes-title">Travel Quotes</h1>
      <div className="quote-box">
        <p className="quote">{currentQuote}</p>
        <button className="get-quote" onClick={getRandomQuote}>
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default TravelQuotes;
