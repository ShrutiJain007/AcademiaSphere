import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx';
import Explore from './Components/Explore/Explore.jsx';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router> {/* Wrap your entire app in Router */}
      <div>
        <Navbar />

        <Routes> {/* Define your routes inside Router */}
          <Route path="/" element={
            <>
              <Hero />
              <div className="container">
                <Title subTitle='OUR PROGRAM' title='What We Offer' />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle='Gallery' title='Campus Photos' />
                <Campus />
                <Title subTitle='TESTIMONIALS' title='What Student Says' />
                <Testimonial />
                <Title subTitle='Contact Us' title='Get In Touch' />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          } /> {/* Renders the main page when at root */}
          <Route path="/Explore" element={<Explore />} /> {/* This renders Explore component for /Explore */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
