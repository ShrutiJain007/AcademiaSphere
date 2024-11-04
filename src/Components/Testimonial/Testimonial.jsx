import React, { useRef } from 'react';
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonial = () => {
  const slider = useRef(null); // Initialize slider ref
  const tx = useRef(0); // Track translateX percentage

  // Function to slide forward
  const slideForward = () => {
    if (tx.current > -50) { // Don't move beyond the last slide
      tx.current -= 25; // Decrease by 25% for each slide
      slider.current.style.transform = `translateX(${tx.current}%)`; // Apply the translation
    }
  };

  // Function to slide backward
  const slideBackward = () => {
    if (tx.current < 0) { // Don't move beyond the first slide
      tx.current += 25; // Increase by 25% for each slide
      slider.current.style.transform = `translateX(${tx.current}%)`; // Apply the translation
    }
  };

  return (
    <div className="testimonial">
      {/* Next and Back buttons */}
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />

      {/* Slider */}
      <div className="slider">
        <ul ref={slider} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
