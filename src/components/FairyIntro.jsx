import React, { useState, useEffect } from 'react';

function FairyIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fairy appears on load
    const timer = setTimeout(() => {
      // Start fading out after 4 seconds
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      
      return () => clearTimeout(fadeTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fairy-overlay ${isVisible ? 'active' : ''}`}>
      <div className="fairy-content">
        <span className="fairy-emoji">🧚‍♀️</span>
        <div className="fairy-text">
          ✨ Welcome to my magical garden! ✨
          <br />
          <span style={{ fontSize: '18px', opacity: 0.7 }}>
            (◕‿◕) *wink*
          </span>
        </div>
      </div>
    </div>
  );
}

export default FairyIntro;