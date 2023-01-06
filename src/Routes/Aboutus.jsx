import React from "react";
import ab from "../Routes/ab.css";
import abBanner from "../Images/about.png";
import AbFooter from "../Images/aboutfooter.jpg";
import AbFooter2 from "../Images/aboutfooter2.jpeg";
import popone from "../Images/pop1.jpg"
import poptwo from "../Images/pop2.jpg"
import popthree from "../Images/pop3.jpg"

const Aboutus = () => {
  return (
    <>
      <div className="aboutus-container">
        <div id="about-us">
          <h2>About_Us</h2>
        </div>

        <div className="about-content">
          <div className="about-quotes">
            <h4 id="ab-heading">
              We deliver INSPIRATIONAL IDEAS, real world advice and visually
              gorgeous fashion, beauty and lifestyle features to appeal to a
              range of budgets and styles.
            </h4>
          </div>
          <div className="about-text">
            <p id="ap">
              Vidharbha Wedding Sutra.com is India's leading bridal media brand
              that provides comprehensive wedding information and inspiration to
              a target audience of smart, spirited, and sophisticated couples.
              Founded in 2000 by Parthip Thyagarajan and Madhulika Sachdeva
              Mathur the platform was designed to offer a much-neede alternative
              to the outdated and sketchy planning advice. Vidharbha Wedding
              Sutra quickly became the most trusted source of wedding centric
              information reaching out to millions of to-be-weds in India and
              outside.
            </p>
          </div>
        </div>
        <div className="about-banner">
          <div className="bt">
            <p id="banner-text">
              Our audience includes engaged couples and families. Billions of
              rupees are spent on fashion, jewellery, beauty, travel, gifts,
              wedding services and others as millennial couples plan for their
              future. Reaching them at this moment is crucial, as brand
              loyalties are forming and spending patterns are changing —they are
              not only planning for their big day, but also for life beyond it.
            </p>
          </div>
          <div className="abt-banner">
            <img src={abBanner} alt="" id="ab-banner" />
          </div>
        </div>

        <div className="about-footer">
          <div className="inter-about-footer">
            <div className="about-f-img-one">
              <img src={AbFooter} alt="image one" id="ab-fo-img-one" />
            </div>
            <div className="about-footer-text">
              <p id="why-heading">WHY VIDHARBHA WEDDING SUTRA</p>
              <p id="why-content">
                We understand Weddings. We have been writing about and featuring
                weddings since over a decade. It's our love. It's our Life. We
                are completely focused on bringing the best of wedding news,
                trends and advice to our readers, we have the best team in the
                business and we are lucky to work with digital-savvy
                advertisers.
              </p>
            </div>
            <div className="about-f-img-two">
              <img src={AbFooter2} alt="image one" id="ab-fo-img-one" />
            </div>
          </div>
        </div>
        <div className="popular">
          <section id="pop-section">
            <h3 id="popular-heading">
              SOME OF THE MOST POPULAR SECTIONS ON{" "}
              <b>VIDHARBHA WEDDING SUTRA</b>
            </h3>
          </section>
          <div className="pop-images">
            <section id="img-sec-one">
              <img src={popone} alt="image one" id="popular-image" />
            </section>
            <section id="img-sec-two">
            <img src={poptwo} alt="image two" id="popular-image" />
            </section>
            <section id="img-sec-three">
            <img src={popthree} alt="image three" id="popular-image" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
