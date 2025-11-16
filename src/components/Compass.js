import React, { useState, useEffect } from 'react';
import './Compass.css';

const Compass = () => {
  const [heading, setHeading] = useState(0);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!window.DeviceOrientationEvent) {
      setIsSupported(false);
      return;
    }

    const handleDeviceOrientation = (event) => {
      if (event.alpha !== null) {
        const compassHeading = event.alpha; // 0 to 360 degrees
        setHeading(compassHeading);
      }
    };

    window.addEventListener('deviceorientation', handleDeviceOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  if (!isSupported) {
    return (
      <div className="compass-container">
        <div className="error-message">
          <p>⚠️ আপনার ডিভাইস কম্পাস সাপোর্ট করে না</p>
          <p>Demo: {heading.toFixed(1)}°</p>
        </div>
      </div>
    );
  }

  return (
    <div className="compass-container">
      <div className="compass">
        <div className="compass-ring">
          <div 
            className="compass-needle" 
            style={{ transform: `rotate(${heading}deg)` }}
          >
            <div className="needle"></div>
            <div className="needle-center"></div>
          </div>
        </div>
        <div className="compass-directions">
          <span className="direction-n">N</span>
          <span className="direction-e">E</span>
          <span className="direction-s">S</span>
          <span className="direction-w">W</span>
        </div>
      </div>
    </div>
  );
};

export default Compass;