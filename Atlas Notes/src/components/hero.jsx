import HeroVD from "../assets/hero.mp4";
import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <video
        src={HeroVD}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      />
      <div className="hero-content">
        <h1 className="hero-title">
          The World Is Waiting Beyond The Next Stop.
        </h1>
        <p className="hero-subtitle">
          Collect memories, discover cultures, and travel through stories shared
          from every corner of Earth.
        </p>
        <button className="hero-btn" onClick={() => navigate("/dashboard")}>
          Let's Explore The World
        </button>
      </div>
    </div>
  );
};

export default Hero;
