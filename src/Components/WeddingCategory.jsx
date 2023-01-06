import React from "react";
import WELOGO from "../Images/H.png";
import PT from "../Images/PT.jpg";
import planner from "../Images/planner.jpeg";
import decoration from "../Images/decoration.jpg";
import catering from "../Images/catering.jpg";
import WC from "../Components/WC.css";
import { NavLink } from "react-router-dom";
const WeddingCategory = () => {
  return (
    <>
      <div className="WE_Container">
        <div className="WE_Heading">
          <img src={WELOGO} alt="logo1" id="WE_logo1" />

          <h3 id="WE_heading"> -----Our Services-----</h3>

          <img src={WELOGO} alt="logo2" id="WE_logo1" />
        </div>

        <div className="Category_images">
          <div className="ser_1">
            <img src={decoration} alt="decoration" className="decoration" />
            <div className="ser_heading">
              <h6>Decoration</h6>
            </div>
          </div>
          <div className="ser_2">
            <img src={planner} alt="planner" className="planner" />
            <div className="ser_heading">
              <h6>Planner</h6>
            </div>
          </div>
          <div className="ser_3">
            <img src={PT} alt="PT" className="PT" />
            <div className="ser_heading">
              <h6>Photographer Team</h6>
            </div>
          </div>
          <div className="ser_4">
            <img src={catering} alt="catering" className="catering" />
            <div className="ser_heading">
              <NavLink className="exploreMore" to="/Services">
                EXPLORE MORE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingCategory;
