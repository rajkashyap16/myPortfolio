import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * A component that reveals its children with a configurable animation when it scrolls into view.
 * It uses framer-motion for the animations.
 *
 * @param {React.ReactNode} children - The content to be animated.
 * @param {string} [direction='up'] - The direction from which the content should animate.
 *   Possible values: 'up', 'down', 'left', 'right', 'scale'.
 * @param {number} [delay=0] - The delay in seconds before the animation starts.
 * @param {number} [duration=0.6] - The duration of the animation in seconds.
 * @param {string} [className=''] - Additional CSS classes to apply to the component.
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  // A ref to the DOM element to be observed.
  const ref = useRef(null);
  // useInView is a hook from framer-motion that returns true if the element is in the viewport.
  // `once: true` ensures the animation only runs once.
  // `margin: '-100px'` triggers the animation when the element is 100px into the viewport.
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Variants for the animation, defining the 'hidden' and 'visible' states.
  const variants = {
    hidden: {
      opacity: 0,
      // Set the initial position based on the direction prop.
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: direction === 'scale' ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75], // A custom ease function.
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      // Animate to the 'visible' state when the element is in view.
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
