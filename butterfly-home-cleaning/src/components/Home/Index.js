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
          <h1 className='title'>BUTTERFLY</h1>
          <br />
          <h2 className='title'>ECO-FRIENDLY HOME CLEANING</h2>
        </div>
        <div className='title-num'>
          <p className='title'> (503) 719-3044 </p>
         
        </div>
        <hr />
    </div>
  )
}

export default Home