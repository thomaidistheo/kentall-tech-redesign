import React from 'react'
import HeroImg from '../../components/HeroImg/HeroImg'
import Subtitle from '../../components/Subtitle/Subtitle'
// import SlickSlider from '../../components/Slider/SlickSlider'
import Card from '../../components/Cards/Card'
import Feature from '../../components/Features/Feature'

// Cards Photos
import motoCard from '../../assets/moto-card.png'
import boatCard from '../../assets/boat-card.png'
import carCard from '../../assets/car-card.png'

// Features Icons

import './homepage.css'
import Spacer from '../../components/Spacer/Spacer'

export default function Homepage() {
  return (
    <div>     
      <HeroImg />
      <Subtitle />

      {/* Category Cards Section */}
      {/* <SlickSlider /> */}
      <div className="card-cont">
        <Card 
          image={motoCard}
          title="Moto" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          button="#"
        />
        <Card 
          image={boatCard}
          title="Yachting" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          button="#"
        />
        <Card 
          image={carCard}
          title="Car" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          button="#"
        />
      </div>

      <Spacer />

      {/*  Features Section */}
      <div className="features-section">
        <p className="text-big">Features</p>
        <span className="title-underline"></span>

        <div className="features-desc">
          <p>Kentall Tech offers 2 year Warranty on all devices with experienced technical support.</p>
          <p>Our goal is to achieve the best customer experience on every level</p>
        </div>

        <div className="features-cont">
          <div className="feature-row">
            <Feature />
            <Feature />
          </div>
          <div className="feature-row">
            <Feature />
            <Feature />
          </div>

        </div>
      </div>

      <Spacer />

    </div>
  )
}