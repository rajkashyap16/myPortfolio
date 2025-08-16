import React, { useState, useEffect } from 'react';

const ParallaxBackground = ({ children, speed = 0.5 }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${offsetY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};
// to use the parellex effect 
// create the parellaxBackground and wrap everything into it anc you can change the speed of the background by changing the speed prop in the parellaxBackground component
export default ParallaxBackground;
