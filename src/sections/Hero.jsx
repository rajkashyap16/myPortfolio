import React from "react";
import profile from "../assets/profile.jpg";
import down from "../assets/down2.svg";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] text-center bg-black text-white">
      <h1 className="text-5xl font-bold py-16 cursor-default hover:text-gray-300">
        Welcome to my Portfolio
      </h1>
      <p className="text-xl italic cursor-default max-w-xl mx-auto px-4">
        This is a portfolio website that showcases my skills and experience as a
        web developer.
      </p>
      <img
        src={profile}
        alt="Profile"
        className="w-48 mx-auto rounded-full object-cover border m-4"
      />
      <button className="my-8">
        <a href="#projects">
          <img
            src={down}
            alt="Scroll down"
            className="animate-bounce mx-auto"
            width={50}
          />
        </a>
      </button>
    </div>
  );
};

export default Hero;
