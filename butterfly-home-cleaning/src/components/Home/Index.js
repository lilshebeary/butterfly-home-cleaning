import React from 'react'
import hero from '../../images/hero-image.svg'
import './home.css'

const Home = () => {
  return (
    <div className='container'>
        <img 
          className='heroImage'
          src={hero} 
          alt='Butterfly Home Cleanig image of butterfly logo' 
        />
        <div className='title-container'>
          <h1 className='title'>BUTTERFLY HOME & CONSTRUCTION CLEANING</h1>
          <br />
          <h2 className='title-2'>ENVIRONMENTALLY-FRIENDLY </h2>
        </div>
        <div className='title-num'>
          <p className='title'>SERVING GREATER SEATTLE AREA   |   (503) 719-3044</p> 
        </div>
        <div className='hr-container'>
          <hr id='hr-container'/>
        </div>
       
    </div>
  )
}

export default Home;