import React from "react";
import downArrow from './assets/down2.svg';
import profile from './assets/profile.jpg';

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
      <img src={profile} alt="image" className="mx-auto rounded-full object-cover border m-4"  />
      <button className=" text-white font-thin  my-[8%] mx-auto">
        {/* cursor icon that send to project section that uses id to navigate to that section */}
        <a href="#projects">
          <img
             src={downArrow} alt="down arrow" 
            className="text-white animate-bounce "
            width={50}
        
          />
        </a>
      </button>
    </div>
    
  );
};

export default Hero;
