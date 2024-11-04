import React from 'react';
import './Explore.css';
import BG from '../../assets/BG.mp4';

const Explore = () => {
    return (
        <div>
            <video autoPlay loop muted className="background-video">
                <source src={BG} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <h1>Explore Our Programs</h1>
                <p>Discover the various opportunities we offer to enhance your learning experience.</p>
                
                {/* New text elements */}
                <div className="popup-texts">
                    <div className="popup-text">RESEARCH</div>
                    <div className="popup-text">STARTUP</div>
                    <div className="popup-text">EVENTS</div>
                    <div className="popup-text">ACADEMICS</div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
