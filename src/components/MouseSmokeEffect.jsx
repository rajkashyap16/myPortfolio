import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";

/**
 * SmokeEffect - creates particles (smoke/glow) that follow the mouse
 * @param {string} color - particle color
 * @param {number} particlesPerEmit - how many particles to emit per mouse move
 */
function SmokeEffect({ color = "#ffffff", particlesPerEmit = 2 }) {
  const [particles, setParticles] = useState([]);

  // Function to create a new particle object
  const createParticle = useCallback((x, y, id) => {
    return {
      id,
      x,
      y,
      // random angle mostly upward (-30° to -150°)
      angle: (Math.random() * Math.PI) / 3 - Math.PI / 6 - Math.PI / 2,
      speed: Math.random() * 1 + 1, // random speed
      size: Math.random() * 12 + 8, // random size
      opacity: Math.random() * 0.3 + 0.1, // random opacity
    };
  }, []);

  // Emit a few particles at given mouse position
  const emitParticles = useCallback(
    (x, y) => {
      const newParticles = Array.from({ length: particlesPerEmit }, (_, i) =>
        createParticle(x, y, Date.now() + i)
      );

      // Add new particles to state
      setParticles((prev) => [...prev, ...newParticles]);

      // Remove particles after 1s (when animation ends)
      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((np) => np.id === p.id))
        );
      }, 1000);
    },
    [createParticle, particlesPerEmit]
  );

  // Handle mouse move inside container
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // relative X
    const y = e.clientY - rect.top; // relative Y
    emitParticles(x, y);
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-md"
            // Starting state
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: particle.opacity,
            }}
            // Animate outward + fade
            animate={{
              x: particle.x + Math.cos(particle.angle) * 200 * particle.speed,
              y: particle.y + Math.sin(particle.angle) * 200 * particle.speed,
              scale: 2,
              opacity: 0,
            }}
            // Exit when removed
            exit={{ opacity: 0, scale: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Wrapper component
export default function MouseSmokeEffect() {
  return (
    <div className="w-full h-full z-0 absolute inset-0">
      {/* White smoke trail effect */}
      <SmokeEffect color="#ffffff" particlesPerEmit={3} />
    </div>
  );
}
