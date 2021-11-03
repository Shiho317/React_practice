import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import image from '../images/trip.jpg';

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-image" src={image} alt='back-image'/>
      <h1>Go travel, See world.</h1>

      <div className="hero-btns">
        <Button className='btns' buttonStyles='btn--primary' buttonSize='btn--large'>Get Started<i className="far fa-play-circle"/></Button>
      </div>
    </div>
  )
}

export default HeroSection
