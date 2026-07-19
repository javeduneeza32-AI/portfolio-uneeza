import React from "react";

function Hero({ name, title, bio }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-bio">{bio}</p>
      </div>
    </div>
  );
}

export default Hero;