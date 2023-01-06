import React from "react";
import { NavLink } from "react-router-dom";
import F from "../Routes/F.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import whatsapp from "../Images/whatsapp.png";
import {FacebookShareButton,InstapaperShareButton,TwitterShareButton,EmailShareButton} from "react-share";


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Con">
          <div className="IN_One">
            <h3>Vidharbha Weding Sutra</h3>/
            <button >Contact</button>
          </div>
          <div className="IN_Two">
            <p>
              feel free to email us, phone us, get free consultation for your
              wedding with our expert wedding planners.
            </p>
            <h6>9970588784</h6>
          </div>
        </div>

        <div className="F_Content">
          <div className="F_One">
            {" "}
            <p>Your Wedding Planning Adventure STARTS HERE! </p>
          </div>
          <div className="F_Two">
            <p id="imp_links">Important Links</p>
            <ul>
              <li>
                <NavLink className="FC_one" to="/Aboutus">
                  About_Us
                </NavLink>
              </li>

              <li>
                <NavLink className="FC_two" to="/Contact">
                  Contact_us
                </NavLink>
              </li>
              <li>
                <NavLink className="FC_three" to="/Services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="FC_four" to="/Blogs">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="F_Three">
            <p id="S_Media">Social Media</p>
            <ul>
              <li>
                <FacebookShareButton
                  url="https://www.facebook.com/arpit.gourkar.7"
                  quotes="Add Me On FaceBook"
                >
                  <BsFacebook className="facebook" />
                </FacebookShareButton>
              </li>

              <li>
                <InstapaperShareButton url="https://www.instagram.com/arpitgaurkar000/"
                quotes="Follow Me On Instagram">
                <RiInstagramFill className="instagram" />
                </InstapaperShareButton>
              </li>
              <li>
                <SiYoutubemusic className="youtube" />
              </li>
              <li>
                <TwitterShareButton url="https://twitter.com/ArpitGaurkar"
                quotes="Follo Me On Twitter">
                <AiFillTwitterCircle className="twitter" />
                </TwitterShareButton>
              </li>
              <li>
                <EmailShareButton url="https://gmail.com">
                <MdEmail className="email" />
                </EmailShareButton>
              </li>
            </ul>
          </div>
          <div className="F_Four">
            <p id="V_Fav">Whatsppp Link</p>
            <img src={whatsapp} alt="Whatspp QR Code" className="WQRC" />
          </div>
        </div>

        <div className="Copyright">
          <p id="C_Right">2022 © Vidharbha WeddingSutra(INDIA) Pvt. Ltd</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
