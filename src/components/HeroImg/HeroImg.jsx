import React from 'react'
import { Link } from 'react-router-dom'

import './heroimg.css'

import boat from '../../assets/boat.png'

export default function HeroImg() {
  return (
    <div className='hero-image' id='hero-image'>
        <div className='hero-image__text'>
            Fleet Management Solutions
            <Link to="/about" className='btn btn-primary-red'>
                Learn More
            </Link>
        </div>

        <div className="hero-image__boat">
            <img src={boat} alt='boat'/>
        </div>
    </div>
  )
}
