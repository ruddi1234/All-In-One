import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const GetStartedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800); 

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <Button
        variant="outlined" 
        color="error" 
        sx={{ 
          color: 'white', 
          borderColor: 'white',
          fontSize: '1.2rem',
          padding: '12px 24px',
          animation: 'pulse 2s infinite',
          cursor: 'pointer',  // Apply the cursor pointer here
          zIndex: 12,          // Ensure it's on top of other elements
        }}
        onClick={handleClick}
      >
        Get Started!
      </Button>
    </div>
  );
};

export default GetStartedButton;
