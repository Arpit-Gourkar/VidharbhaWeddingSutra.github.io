import React from "react";
import heroimg from "../Images/Hero.jpeg";
import hro from "../Components/hro.css";
import Hero2 from "./Hero2";

const Hero = () => {
  return (
    <>
      
        <div className="Herodiv">
          <img src={heroimg} alt="Heroimage" className="HeroIamge" />
        <Hero2 />
      </div>
    </>
  );
};

export default Hero;
