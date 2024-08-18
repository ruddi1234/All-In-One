import React from 'react';
import StarsCanvas from './Canvas/Stars';
import './Hero.css'; // Import the CSS file for animations

const Hero = () => {
  const text = "Welcome To My World!";
  
  return (
    <div className="relative flex  h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-saturn bg-cover bg-center animate-spin-saturn"></div>
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white left-[20%] top-[10%] ">
        {text.split("").map((char, index) => (
          char === " " ? 
            <div key={index}>&nbsp;</div> : // Handle spaces
            <span
              key={index}
              className={`letter animate-${index%4}`} // Add a class for animation
              style={{ animationDelay: `${index * 0.1}s` }} // Stagger animations
            >
              {char}
            </span>
        ))}
      </h1>
      <StarsCanvas />
    </div>
  );
};

export default Hero;
