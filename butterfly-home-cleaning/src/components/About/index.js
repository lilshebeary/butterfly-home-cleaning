import React from 'react';
import './about.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className='wrapper'>
            <h1>ABOUT</h1>
        </div>
        <div className='about-wrapper'>
            <h3>Eco-FRIENDLY HOME CLEANING</h3>
            <br />
            <p>YEARS OF EXPERIENCE, DETAIL ORIENTED, HOME CLEANING. WE USE ECO-FRIENDLY PRODUCTS</p>
            <br />
            <ul>
                <li>HOME CLEANING - WEEKLY, BI-WEEKLY, MONTHLY, ONE TIME</li>
                <li>RENTAL CLEANING - AIRBNB, VRBO</li>
                <li>COMMERCIAL CLEANING</li>
                <li>CONSTRUCTION CLEAN-UP</li>
                <li>MOVE-IN / MOVE-OUT</li>
            </ul>
        </div>
    </div>
  )
}

export default About
