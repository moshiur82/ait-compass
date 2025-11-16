import React, { useState, useEffect } from 'react';
import './App.css';
import Compass from './components/Compass';

function App() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeading(prev => (prev + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AIT Compass</h1>
        <Compass />
        <p>বর্তমান হেডিং: {heading.toFixed(1)}°</p>
        <div className="instructions">
          <p>📱 Mobile-এ ব্যবহারের জন্য:</p>
          <p>1. HTTPS enable করুন</p>
          <p>2. Device orientation allow করুন</p>
        </div>
        <div className="developer-credit">
          <p>Developed by <strong>MOSHIUR</strong></p>
          <p>Full Stack Developer</p>
          <p>ArtisticIT</p>
        </div>
      </header>
    </div>
  );
}

export default App;