import React, { useEffect, useState } from 'react';

const WelcomeAnimation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white text-4xl ">
      <span className={`hidden ${visible ? 'from-top delay-0' : ''}`}>W</span>
      <span className={`hidden ${visible ? 'from-bottom delay-1' : ''}`}>E</span>
      <span className={`hidden ${visible ? 'from-left delay-2' : ''}`}>L</span>
      <span className={`hidden ${visible ? 'from-right delay-3' : ''}`}>C</span>
      <span className={`hidden ${visible ? 'from-top delay-1' : ''}`}>O</span>
      <span className={`hidden ${visible ? 'from-bottom delay-2' : ''}`}>M</span>
      <span className={`hidden ${visible ? 'from-left delay-3' : ''}`}>E</span>
    </div>
  );
};

export default WelcomeAnimation;
