import React, { useState } from "react";
import BN1 from "../Components/BN1.css";
import appu from "../Images/TeamImages/Arpit.JPG";
import arjun from "../Images/TeamImages/arjun.JPG";
import Anup from "../Images/TeamImages/anup.png";

const Banner1 = () => {
  const [showBanner, setShowBanner] = useState("banner-one");

  function userone() {
    document.getElementsByClassName(userone).style.marginleft = "0%";
    document.getElementByclassname(usertwo).style.marginleft = "-100%";
    document.getElementByclassname(userthree).style.marginleft = "-100%";
  }

  function usertwo() {
    document.getElementByclassname(userone).style.marginleft = "-100%";
    document.getElementByclassname(usertwo).style.marginleft = " 0%";
    document.getElementByclassname(userthree).style.marginleft = "-100%";
  }

  function userthree() {
    document.getElementByclassname(userone).style.marginleft = "-100%";
    document.getElementByclassname(usertwo).style.marginleft = "-100%";
    document.getElementByClassName(userthree).style.marginleft = "0%";
  }
  return (
    <>
      <div className="Banner-parent">
        {showBanner == "banner-one" && (
          <div className="banner-one">
            <img src={appu} alt="Appy" className="one" />
            <h4>Appy Gourkar</h4>
            <p>
              Hi I am Arpit Gourkar and I am cinematographer <br />
              And I am the Member Of Vidharbha Wedding Sutra
            </p>
          </div>
        )}

        {showBanner == "banner-two" && (
          <div className="banner-two">
            <img src={arjun} alt="Appy" className="one" />
            <h4>Arjun Deshmukh</h4>
            <p>
              Hi I am Arjun Deshmukh and I am Traditional Photographer <br />
              And I am the Member Of Vidharbha Wedding Sutra
            </p>
          </div>
        )}

        {showBanner == "banner-three" && (
          <div className="banner-three">
            <img src={Anup} alt="Appy" className="one" />
            <h4>Anup Gathibandhe</h4>
            <p>
              Hi I am Anup Gathibandhe and I am Traditional Videographer
              <br />
              And I am the Member Of Vidharbha Wedding Sutra
            </p>
          </div>
        )}

        <div className="indicator">
          <span onClick={() => setShowBanner("banner-one")}></span>
          <span onClick={() => setShowBanner("banner-two")}></span>
          <span onClick={() => setShowBanner("banner-three")}></span>
        </div>
      </div>
    </>
  );
};

export default Banner1;
