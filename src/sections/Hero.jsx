import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import down from "../assets/down2.svg";

import InteractiveButton from "../components/InteractiveButton";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center text-white bg-black bg-animated-gradient pt-16 md:pt-0">
      {/* Smoke effect OVER text + bg */}
      {/* <div className="absolute inset-0 z-50">
        <MouseSmokeEffect />
      </div> */}

      {/* Animated gradient blobs */}
      <div
        className="pointer-events-none animate-float-slow animate-blob absolute -left-32 -top-40 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{
          background:
            "color-mix(in srgb, var(--accent-purple, #8b5cf6) 28%, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none animate-float-slow animate-blob absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{
          background:
            "color-mix(in srgb, var(--accent-green, #22c55e) 22%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Optional moving spotlight overlay */}
      <div className="spotlight-overlay" aria-hidden="true" />

      {/* Profile image (optional) */}
      {/* <img
        src={profile}
        alt="Profile"
        className="z-10 mb-6 h-40 w-40 rounded-full object-cover border border-white/20 shadow-glow"
      /> */}

      {/* Heading */}
      <motion.h1 
        className="z-10 mb-4 text-5xl font-bold md:text-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to my Portfolio
      </motion.h1>

      {/* Subheading */}
      <motion.p 
        className="z-10 mx-auto max-w-2xl text-xl text-white/80 md:text-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        This is a portfolio website that showcases my skills and experience as a web developer.
      </motion.p>

      {/* CTAs */}
      <motion.div 
        className="z-10 mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <InteractiveButton href="#projects" variant="primary" size="lg">
          View Projects
        </InteractiveButton>
        <InteractiveButton href="#about" variant="secondary" size="lg">
          Learn More
        </InteractiveButton>
      </motion.div>

      {/* Scroll-down icon */}
      <motion.a 
        href="#projects" 
        className="z-10 mt-10 block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img
          src={down}
          alt="Scroll down"
          className="mx-auto opacity-80 hover:opacity-100 transition"
          width={50}
          height={50}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
