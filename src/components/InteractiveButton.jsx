import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveButton = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: 'gradient-border rounded-full bg-[linear-gradient(90deg,var(--accent-purple,#8b5cf6),var(--accent-orange,#f59e0b),var(--accent-yellow,#facc15),var(--accent-green,#22c55e))] text-black font-semibold shadow-glow',
    secondary: 'rounded-full border border-white/20 text-white/90 font-medium',
    ghost: 'rounded-full text-white/80 font-medium hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const glowVariants = {
    initial: { boxShadow: '0 0 24px rgba(255,255,255,0.45)' },
    hover: { 
      boxShadow: '0 0 40px rgba(255,255,255,0.8)',
      transition: { duration: 0.3 }
    }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} ${className} 
        transition-all duration-300 ease-out cursor-pointer 
        relative overflow-hidden group inline-block`}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTapEnd={() => setIsPressed(false)}
      {...props}
    >
      {/* Ripple effect background */}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isPressed ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Hover glow effect */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-full"
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Animated border for secondary buttons */}
      {variant === 'secondary' && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          animate={isHovered ? 
            { borderColor: 'rgba(255,255,255,0.5)' } : 
            { borderColor: 'rgba(255,255,255,0.2)' }
          }
          transition={{ duration: 0.3 }}
        />
      )}
    </Component>
  );
};

export default InteractiveButton;
