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
        <h1 className="hero-title">Explore Beyond the Guidebooks.</h1>
        <p className="hero-subtitle">
          Discover hidden gems, collect beautiful travel stories, and build your
          personal world atlas.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/dashboard")}
        >
          Let's Explore The World
        </button>
      </div>
    </div>
  );
};

export default Hero;
