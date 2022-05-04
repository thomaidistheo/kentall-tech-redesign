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

      <SlickSlider />


    </div>
  )
}