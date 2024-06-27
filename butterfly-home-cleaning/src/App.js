import React from 'react';
import './app.css'
import Home from './components/Home/Index';
import Navbar from './components/Navbar';
import About from './components/About';
import { Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App;