import React from 'react'
import Navbar from '../components/navbar'
import '/src/Styles/about.css'


const About = () => {
  return (
    <>
    <header className='header'>
        <Navbar />
    </header>
    <section className='hero-about'>
    
        <div className='about-overlay'>
            <h1>About Atlas Notes</h1>

            <p> 
      Discover the world one postcard at a time.
      Explore destinations, cultures, weather,
      and stories from every corner of the planet.
    </p>
        </div>
    
    </section>

    <section className='mission'>
    
      
            <h1>Our Mission</h1>

            <p> 
      Postcards From Earth was created to make travel discovery accessible to everyone. Whether you're a student,
       traveler, or simply curious about the world, our platform helps you experience new places through interactive digital postcards. We believe every destination has a story worth sharing.
    </p>
        
    </section>

    <section className='story'>
        <div className='story-card'>
            <h2>Why we built this?</h2>

            <p>In a world filled with endless information, it's easy to overlook the beauty and diversity of our planet.
                 Postcards From Earth was built to inspire curiosity, encourage learning, and help people explore different cultures without leaving home.</p>
        </div>
    </section>

    <section className='vision'>
        <h2>Future Vision</h2>

        <p>We aim to create a global digital postcard collection where users can discover new places, track their exploration journey, learn about cultures, and connect with the beauty of our world every day.</p>
    </section>
    </>
  )
}

export default About