import React from 'react'

import './heroimg.css'

import boat from '../../assets/boat.png'

export default function HeroImg() {
  return (
    <div className='hero-image' id='hero-image'>
        <div className='hero-image__text'>
            Fleet Management Solutions
            <a href="#features" className='btn btn-primary-red'>
                Learn More
            </a>
        </div>

        <div className="hero-image__boat">
            <img src={boat} alt='boat'/>
        </div>
    </div>
  )
}
