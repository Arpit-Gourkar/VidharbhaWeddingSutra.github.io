import React from "react";
import Sernav from "../Components/Sernav.css";
import photographs from "./Photographs";
import plannerimages from "./Planner";
import Decoration from "./DecIamges";
import Catering from "./CatImages";
import abone from "../Images/Album/one.png";
import albumimg from "./albumimgone";
import albumimgTwo from "./Albumimgtwo";
import Videos from "./VideosBox";
import { AiOutlineArrowUp } from "react-icons/ai";

const Servicenav = () => {
  return (
    <>
      <nav className="sernav">
        <p id="sernav-logo">SERVICES</p>
        <ul id="ser-nav-ul">
          <li>
            <a href="#Photo_Section"> Photographs</a>
          </li>
          <li>
            <a href="#Planner_Section">Planner</a>
          </li>
          <li>
            <a href="#Decoration_Section">Decoration</a>
          </li>
          <li>
            <a href="#Catering_Section"> Catering</a>
          </li>
          <li>
            <a href="#Album_Section">Album_Design</a>
          </li>
          <li>
            <a href="#Video_Section"> Videos_Editing</a>
          </li>
        </ul>
      </nav>
      <div id="Photo_Section">
        {photographs.map((photoimages) => {
          return (
            <>
              <img src={photoimages.src} id="photoimges" alt="photographs" />
            </>
          );
        })}
      </div>
      <div id="Planner_Section">
        {plannerimages.map((plannerimages) => {
          return (
            <>
              <img src={plannerimages.src} id="planimges" />
            </>
          );
        })}
      </div>
      <div id="Planner_Section">
        <>
          <h4>Best Wedding Planners in VIDHARBHA</h4>
          <p>
            The role of a wedding planner can be defined quite simply in one
            word - everything! When a wedding planner is hired to make your
            wedding dreams come true, the planner suggests an action plan
            explaining their role and responsibilities in your wedding event
            planning journey. Wedding planners quote a total amount for your
            wedding depending on the duties they are expected to handle to add
            perfection to your wedding celebrations. Most event planners cover
            everything related to logistics - like referring other wedding
            vendors they have closely worked with, arranging meetings,
            negotiations, and finalizing wedding caterers, wedding decorators,
            wedding DJs, etc., for your celebrations. They discuss the total
            wedding budget with you and plan the remaining negotiations,
            contracts with other vendors and wedding venues according to the
            total budget. If you need customizations that might cross the
            budget, a wedding planner makes you aware of the same and helps you
            plan your wedding costs and execution accordingly. Some of the top
            wedding planners in India have also added 'wedding venue decoration'
            to their services. They handle all creative specifics and
            requirements to turn your wedding venue into a haven as per your
            choice of wedding theme.{" "}
          </p>
        </>
      </div>
      <div id="Decoration_Section">
        {Decoration.map((dec) => {
          return (
            <>
              <img src={dec.src} id="decImages" alt="DEcoration" />
            </>
          );
        })}
      </div>

      <div id="Catering_Section">
        {Catering.map((catimages) => {
          return (
            <>
              <img src={catimages.src} id="catImages" alt="" />
            </>
          );
        })}
      </div>
      <div id="Album_Section">
        <h4 id="album-heading">
          Ready to start? Select your photo book size and layout.
        </h4>
        <strong>
          To begin designing your photo book online, choose from the options
          below – or scroll down to learn more.
        </strong>
        <p id="album-para">
          There’s nothing quite like looking through a wedding album or a
          printed personalised photo album – to see a photo for the first time
          or look back at favourite memories. That’s why we’re proud to offer
          custom photo books that can be a cherished keepsake for years to come.
          <br />
          Looking for a photo wedding album design or a birthday album or simply
          want to create a photo album online to showcase holiday or family
          events? Vistaprint caters to all your printing needs under one roof.
          At Vistaprint, we know you have a wealth of stories worth telling
          through images you’ve accumulated over time. Available in a variety of
          sizes and layouts, these hardcover Marriage Album Book, Birthday Album
          or Baby Photo Album can take you through memory lane whenever you
          want.
        </p>
        <section id="imgone">
          <img src={abone} alt="" />
        </section>
        <section id="abmain">
          <div className="abone">
            {albumimg.map((albumimg) => {
              return (
                <>
                  <img src={albumimg.src} alt="" />
                </>
              );
            })}
          </div>
          <div className="abtwo">
            {albumimgTwo.map((albumtwo) => {
              return (
                <>
                  <img src={albumtwo.src} alt="" />
                </>
              );
            })}
          </div>
        </section>
      </div>
      <div id="Video_Section">
        <h4>...Wedding Films Showcase...</h4>
        <h5> Preview the work of wedding filmers and watch their videos</h5>
        <div className="Video-section-inner">
          <div id="video-1">
            {Videos.map((videoData) => {
              return (
                <>
                  <video
                    src={videoData.src}
                    controls="yes"
                    type="video/mp4"
                  ></video>
                  <p>{videoData.title}</p>
                  <a href="#sernav-logo" id="Go-Top">
                    <AiOutlineArrowUp id="top" />
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicenav;
