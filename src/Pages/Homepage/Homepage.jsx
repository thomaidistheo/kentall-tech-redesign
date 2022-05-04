import React from 'react'
import HeroImg from '../../components/HeroImg/HeroImg'
import Subtitle from '../../components/Subtitle/Subtitle'
import Card from '../../components/Cards/Card'
import SlickSlider from '../../components/Slider/SlickSlider'

import motoCard from '../../assets/moto-card.png'
import boatCard from '../../assets/boat-card.png'
import carCard from '../../assets/car-card.png'

import './homepage.css'

export default function Homepage() {
  return (
    <div>     
      <HeroImg />
      <Subtitle />

      {/* <div className="card-cont"> */}
        {/* <Card 
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
        /> */}
      <SlickSlider />
      {/* </div> */}

    </div>
  )
}