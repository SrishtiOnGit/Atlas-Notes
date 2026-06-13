import React from 'react'
import './App.css'
import DashboardLayout from "/src/DashboardLayout";
import Navbar from './components/navbar'
import Postcard from './components/postcard'
import kyoto from './assets/kyoto.jpg'
import paris from './assets/paris.jpg'
import FeaturesCard from './featurescard'
import HowItWorks from './components/HowItWorks'
import About from '/src/Pages/About'
import FAQ from '/src/Pages/faq'
import SignIn from '/src/Pages/SignIn'
import SignUp from '/src/Pages/SignUp'
import Dashboard from '/src/Pages/dashboard'
import Favourites from '/src/Pages/fav'
import Random from '/src/Pages/random'
import Map from '/src/Pages/map'
import DailyPostcard from '/src/Pages/postcard'
import LocalPhrases from '/src/Pages/phrases'
import Profile from '/src/Pages/profile'
import Settings from '/src/Pages/settings';

import {  Route, Routes, useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <>
      <header className='header'>
        <Navbar />
      </header>

      <section className='hero'>
        <div className='overlay'>
          <div className='hero-content'>

            <h1>Explore the world, One postcard at a time.</h1>

            <p>
              Discover beautiful destinations, local stories,
              weather insights, and cultural treasures from every
              corner of Earth.
            </p>

            <div className='hero-buttons'>
              <button
                className='secondary-btn'
                onClick={() => navigate("/dashboard")}
              >
                Let's Explore the World Together
              </button>
            </div>

          </div>
        </div>
      </section>

      <main>
        <Postcard
          location="Kyoto, Japan"
          image={kyoto}
          temperature="24°C"
          country="JAPAN"
          fact="Kyoto was Japan's capital for over 1,000 years."
        />

        <Postcard
          location="Paris, France"
          image={paris}
          temperature="19°C"
          country="FRANCE"
          fact="Paris is known as the City of Light."
        />
      </main>

      <section className='features'>
        <FeaturesCard />
      </section>

      <section className='HowItWorks'>
        <HowItWorks />
      </section>

      <footer className='footer'>
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/SrishtiOnGit">
            Srishti
          </a>
        </p>
      </footer>
    </>
  );
}

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
   <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="random" element={<Random />} />
          <Route path="map" element={<Map />} />
          <Route path="postcard" element={<DailyPostcard />} />
          <Route path="phrases" element={<LocalPhrases />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      </>
  );
}

export default App