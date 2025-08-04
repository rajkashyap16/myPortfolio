import React from "react";
<<<<<<< HEAD
import profile from "../assets/profile.jpg";
import down from "../assets/down2.svg";
=======

>>>>>>> 0f789d2045182d0e53901bcc3b16fc0d18784c32

const Hero = () => {
  return (
    <div className="w-full h-[90vh] text-center bg-black text-white  ">
      <h1 className="text-5xl font-bold py-16 cursor-default hover:text-gray-300 ">
        Welcome to my Portfolio
      </h1>
      <p className="text-1xl font-italic  cursor-default">
        This is a portfolio website that showcases my skills and experience as a
        web developer.
      </p>
<<<<<<< HEAD
      <img
        src={profile}
        alt="image"
        className="w-48 mx-auto rounded-full object-cover border m-4"
      />
      <button className=" text-white font-thin  my-[8%] mx-auto">
        {/* cursor icon that send to project section that uses id to navigate to that section */}
        <a href="#projects">
          <img src={down} className="text-white animate-bounce " width={50} />
=======
      <img src="../assets/profile.jpg"  alt="image" className="w-48 mx-auto rounded-full object-cover border m-4"  />
      <button className=" text-white font-thin  my-[8%] mx-auto">
        {/* cursor icon that send to project section that uses id to navigate to that section */}
        <a href="#projects">
          <img
            src='../assets/down2.svg'
            className="text-white animate-bounce "
            width={50}
        
          />
>>>>>>> 0f789d2045182d0e53901bcc3b16fc0d18784c32
        </a>
      </button>
    </div>
  );
};

export default Hero;
