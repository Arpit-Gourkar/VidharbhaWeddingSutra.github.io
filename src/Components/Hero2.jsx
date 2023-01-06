import React from "react";
import hro from "../Components/hro.css";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";

const Hero2 = () => {
  return (
    <>
      <div className="hero2">
        <div className="content">
          <ImQuotesLeft className="leftquotes" />
          <p className="p1">
               We deliver
            <strong className="highlight"> INSPIRATIONAL IDEAS </strong>, real
            world advice and visually gorgeous fashion
          </p>
          <ImQuotesRight className="rightquotes" />
        </div>
      </div>
    </>
  );
};

export default Hero2;
