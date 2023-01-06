import React, { useState } from "react";
import { Link } from "react-router-dom";
import web from "../Images/logo.png";
import Nav from "../Components/Nav.css";
import { NavLink } from "react-router-dom";
import Home from "../Routes/Home";
import Blogs from "../Routes/Blogs";
import Aboutus from "../Routes/Aboutus";
import Services from "../Routes/Services";
import Contact from "../Routes/Contact";
import Footer from "../Routes/Footer";
import { FiMenu } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";

const Navbar = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <NavLink className="camera" to="/">
            <img src={web} alt="Vidharbha Wedding Sutra" className="logo"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon" onClick={() => setshow(!show)}>
              {" "}
              <FiMenu className="Ticon" />
            </span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
              </Link>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blogs">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ABoutus">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Blogs" element={<Blogs />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Navbar;
