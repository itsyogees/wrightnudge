import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          <img src="/image/logo.png" alt="Logo" />
          <div className="footerLogoContent">
            <div className="footerLinks">
              <h2>Contact Us</h2>
              <p>WRIGHTS TRAINING & Consulting </p>
              <p>Chennai, Tamil Nadu</p>
              <p>India.</p>
            </div>
            <div className="footerLinks">
              <a href="mailto:britto@wights.ai">britto@wights.ai</a>
            </div>
            <div className="footerLinks">
              <p>Follow us on:</p>
              <div className="socialIcons">
                <a
                  href="https://www.linkedin.com/company/wrights-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footerLists">
          <div className="footerList">
            <h2>Home</h2>
            <p>Take a tour</p>
            <p>2X results</p>
            <p>Testimonial</p>
          </div>
          <div className="footerList">
            <h2>About Us</h2>
            <p>Our Story</p>
            <p>Our Vision</p>
            <p>Our Values</p>
            <p>Our Teams</p>
          </div>
          <div className="footerList">
            <h2>Product</h2>
            <p>Key features</p>
            <p>How it works</p>
            <p>Why Choose us</p>
          </div>
          <div className="footerList">
            <h2>Solution</h2>
            <p>Our Methodology</p>
            <p>Key Focus Area</p>
            <p>Benefits</p>
          </div>
        </div>
      </div>
      <div className="footerLast">
        <p>
          @ 2024 Wrights Training and Consulting. All right reserved Terms &
          Conditions Privacy policy
        </p>
      </div>
    </div>
  );
};

export default Footer;