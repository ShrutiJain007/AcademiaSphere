import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cube } from 'react-preloaders';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/Explore');
    }, 2000);
  };

  return (
    <div className='hero container'>
      {loading && (
        <div>
          <Cube background="rgb(49, 49, 49, 0.7)" color= "white" />
        </div>
      )}
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students
          with the knowledge, skills, and experience needed to excel in
          the dynamic field of education.
        </p>
        <button onClick={handleButtonClick} className='btn'>
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
