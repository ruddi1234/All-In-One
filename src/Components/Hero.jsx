import React from 'react';
import StarsCanvas from './Canvas/Stars';
import './Hero.css'; // Import the CSS file for animations
import GetStartedButton from './GetStartedButton';

const Hero = () => {
  const text = "Welcome To";
  const text1 = "My World!";
  
  return (
    <div className="relative flex  h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-saturn bg-cover bg-center animate-spin-saturn"></div>
      <div className='absolute top-[50%] left-[28%] z-15'>
      <GetStartedButton/>
      </div>
      <h1 className="relative z-10 text-4xl md:text-7xl font-bold text-white left-[20%] top-[15%] leading-tight ">
      <div>
          {"Welcome To".split("").map((char, index) => (
            char === " " ? 
              <span key={index}>&nbsp;</span> : // Handle spaces
              <span
                key={index}
                className={`letter animate-${index % 4}`} // Add a class for animation
                style={{ animationDelay: `${index * 0.08}s` }} // Stagger animations
              >
                {char}
              </span>
          ))}
        </div>
        <div>
          {"My World".split("").map((char, index) => (
            char === " " ? 
              <span key={index}>&nbsp;</span> : // Handle spaces
              <span
                key={index}
                className={`letter animate-${index % 4}`} // Add a class for animation
                style={{ animationDelay: `${(index + 9) * 0.08}s` }} // Adjusted animation delay for second line
              >
                {char}
              </span>
          ))}
        </div>
      </h1>
      <StarsCanvas />
    </div>
  );
};

export default Hero;
