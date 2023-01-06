import React from "react";
import CFORM from "../Routes/CFORM.css";
import { RiContactsFill } from "react-icons/ri";


const Contact = () => {
  return (
    <>
      <div className="form-container">
        <div className="icon">
          <RiContactsFill id="conntact-icon" />
        </div>

        <div className="form-one">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <form
          action="https://formspree.io/f/mrgvzvoe"
          method="POST"
          name="contact-details"
          className="form"
        >
          <p id="contact-heading">VIDHARBHA WEDDING SUTRA</p>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            autoComplete="off"
            required
            placeholder="Enter Your Full Name"
          />
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="Address"
            autoComplete="off"
            required
            placeholder="Address"
          ></input>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            autoComplete="off"
            requiredplaceholder="Example@gmail.com"
          />
          <label htmlFor="Email">Number</label>
          <input
            type="tel"
            name="Number"
            autoComplete="off"
            required
            placeholder="0000000000"
          ></input>

          <select
            htmlFor="Category"
            type="select"
            name="Category"
            placeholder="Select Your Category"
          >
            <option value="Wedding" autoComplete="off" required>
              Wedding
            </option>
            <option value="Ring-Ceremoney" autoComplete="off" required>
              Ring-Ceremoney
            </option>
            <option value="Birthday" autoComplete="off" required>
              Birthday
            </option>
            <option value="Portfolio" autoComplete="off" required>
              Portfolio
            </option>
            <option value="Matrimoney" autoComplete="off" required>
              Matrimoney
            </option>
            <option value="Baby-Shot" autoComplete="off" required>
              Baby-Shot
            </option>
            <option value="Makeup_Shoot " autoComplete="off" required>
              Makeup_Shoot
            </option>
            <option value="Pree-Wedding" autoComplete="off" required>
              Pree-Wedding
            </option>
            <option value="Post-Wedding" autoComplete="off" required>
              Post-Wedding
            </option>
            <option value="Catering" autoComplete="off" required>
              Catering
            </option>
            <option value="Album-Design" autoComplete="off" required>
              Album-Design
            </option>
            <option value="Video-Editing" autoComplete="off" required>
              Video-Editing
            </option>
            <option value="Event-Planner" autoComplete="off" required>
              Event-Planner
            </option>
            <option value="Decoration" autoComplete="off" required>
              Decoration
            </option>
            <option value="Other" autoComplete="off" required>
              Other
            </option>
          </select>

          <label htmlFor="Date">Date</label>
          <input
            type="date"
            name="Date"
            autoComplete="off"
            required
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="Message" autoComplete="off" required>
            Message
          </label>
          <textarea
            name="Message"
            autoComplete="off"
            required
            id="message-box"
          ></textarea>

          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.519495395004!2d79.29074407391958!3d19.944643474132025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d4264f1d0859%3A0x896e0f80704edda0!2sBalaji%20Ward%2C%20Babupeth%2C%20Chandrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1672393362769!5m2!1sen!2sin" 
        ></iframe>
    </>
  );
};

export default Contact;
