import React from "react";
import "./about.css";
import butterfly from "../../images/butterfly-img.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="wrapper">
        <h1>ABOUT</h1>
      </div>
      <div className="about-wrapper">
        <h3>Eco-FRIENDLY HOME AND CONSTRUCTION CLEANING</h3>
        <br />
        <p>
          YEARS OF EXPERIENCE, DETAIL ORIENTED, HOME AND CONSTRUCTION CLEANING. WE USE NON-TOXIC,
          ENVIRONMENTALLY-FRIENDLY CLEANING PRODUCTS
        </p>
 
        <div className="about-table">
          <ul className="about-list">
            <li>HOME CLEANING - WEEKLY, BI-WEEKLY, MONTHLY, ONE TIME</li>
            <li>RENTAL CLEANING - AIRBNB, VRBO</li>
            <li>COMMERCIAL CLEANING</li>
            <li>CONSTRUCTION CLEAN-UP</li>
            <li>MOVE-IN / MOVE-OUT</li>
          </ul>
          <div>
            <img className="butterfly" src={butterfly} alt="butterfly image" />
          </div>
        </div>
      </div>
      <div className="contact">PLEASE CONTACT US @ (503)719-3044 FOR A CONSULTATION</div>
    </div>
  );
};

export default About;
