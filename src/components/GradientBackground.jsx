// Mouse Tracking effect 


import React, { useEffect, useRef, useState } from "react";

const GradientBackground = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Update position
  useEffect(() => {
    const move = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });

      // Check if hovering on an interactive element
      const target = e.target;
      const tag = target.tagName.toLowerCase();
      const isInteractive = ["a", "button", "input", "textarea", "select", "svg"].includes(tag) || target.closest("a, button");
      setIsHovering(isInteractive);
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  // Animate position
  useEffect(() => {
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [coords]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full 
          ${isHovering ? "w-16 h-16 bg-red-200/20 blur-2xl scale-110" : "w-8 h-8 bg-red-400 blur-sm"} 
          transition-all duration-200 ease-out mix-blend-difference`}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export default GradientBackground;
