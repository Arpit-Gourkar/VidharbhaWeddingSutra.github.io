import React from "react";
import BannerSlider from "../Components/BannerSlider.css";
import Blog_one from "../Images/blogone.png";
import Blog_two from "../Images/Blogtwo.jpg";
import Blog_Three from "../Images/Blogthree.jpg";
import Blog_four from "../Images/blogfour.jpg";
import Blog_five from "../Images/Blogfive.JPG";
const Blogbanner = () => {
  return (
    <>
      <div className="BlogContainer">
        <div className="BI_Slider"></div>
        <div className="Blog_Item">
          <div className="Bitem_One">
            <img src={Blog_one} alt="Blog_one" className="Item_one" />
            <div className="Blog_description">
              <h4 id="B_One_H">
                VIDHARBHA WEDDING SUTRA BOOK YOUR DATE AND GET 20% OFF
              </h4>
              <p id="B_One_p" _>
                If a fun, fuss-free wedding celebration is what you dream of,
                take a cue from this unique wedding that saw a civil ceremony
                and colorful festivities. Finance Analyst Sanjna Thakeria and
                Tech Professional Kunal Maheshwari tied the knot with a
                beguiling wedding on the banks of Powai lake.
              </p>
            </div>
          </div>
          <div className="Bitem_two">
            <img src={Blog_two} alt="Blog_two" className="Item_two" />
            <div className="Blog_description_two">
              <h4 id="B_Two_H">ROLEX WEDDING DECORATION BOOK YOUR DATE NOW</h4>
              <p id="B_Two_p" _>
                Rolex Wedding decor is one of the most important aspects of a
                couple's big day all over the world. Traditional Indian weddings
                are as diverse as they come given the myriad regional cultures
                in India. From a white wedding in Goa to a red-themed pheras in
                Gujarat or a minimalist Anand Karaj in Punjab.
              </p>
            </div>
          </div>

          <div className="Bitem_three">
            <img src={Blog_Three} alt="Blog_two" className="Item_three" />
            <div className="Blog_description_three">
              <h4 id="B_three_H">
                PLAN YOUR WEDDING WITH EVENTRA EVENT MANAGMENT
              </h4>
              <p id="B_three_p" _>
                Prerika Puri from To The Aisle shares, “With a new appreciation
                for the outdoors and nature, couples are increasingly looking
                for places with natural beauty that can offer the perfect
                backdrop to their big day. While beaches have been popular for a
                while, venues with lakefronts.
              </p>
            </div>
          </div>

          <div className="Bitem_four">
            <img src={Blog_four} alt="Blog_two" className="Item_four" />
            <div className="Blog_description_four">
              <h4 id="B_four_H">SAOUJI CATERING THE TASTE OF WOW</h4>
              <p id="B_four_p" _>
                Saouji has grown to become the most geographically-diversified
                caterer, with a powerful footprint in India and a growing
                influence across the globe with its recent expansion in Turkey,
                UAE, and Europe.
              </p>
            </div>
          </div>

          <div className="Bitem_five">
            <img src={Blog_five} alt="Blog_two" className="Item_five" />
            <div className="Blog_description_five">
              <h4 id="B_five_H">HEIR VIDHARBAS BEST PHOTOGRAPHY TEAM.</h4>
              <p id="B_five_p" _>
                We have the professional Photographer and videographer team with
                more than minimuim 6 year experince you can contact with our
                team to make your special movement memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogbanner;
