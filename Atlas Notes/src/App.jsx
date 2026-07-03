import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import PostCard from "./components/postcard";
import Kyoto from "./assets/kyoto.png";
import Iceland from "./assets/iceland.png";
import Sentorini from "./assets/sentorini.png";
import TravelQuotes from "./components/travelquotes";
import GetStarted from "./components/getstarted";
import About from "./pages/about";
import WhyUs from "./pages/whyus";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Map from "./pages/map";
import Hidden from "./pages/hidden";
import Profile from "./pages/profile";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="post-title">Our Postcards</h1>
      <div className="postcard-app">
        <PostCard
          image={Kyoto}
          title="Kyoto"
          country="Japan"
          place="Kyoto"
          fact="Kyoto is the capital of Japan and is known for its historic sites, such as the Imperial Palace, the Shinto shrine, and the Imperial Gardens."
        />
        <PostCard
          image={Iceland}
          title="Iceland"
          country="Iceland"
          place="Skógafoss Waterfall"
          fact="Iceland has more than 10,000 waterfalls across the country."
        />
        <PostCard
          image={Sentorini}
          title="Santorini"
          country="Greece"
          place="Oia Village"
          fact="Santorini was formed by one of the largest volcanic eruptions in history."
        />
      </div>
      <TravelQuotes />
      <GetStarted />
      <footer className="footer">
        Copyright &copy; 2026 Atlas Notes. All rights reserved
        <a href="#"> Back to Top</a>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/whyus" element={<WhyUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/map" element={<Map />} />
      <Route path="/hidden" element={<Hidden />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
