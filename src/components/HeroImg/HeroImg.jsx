import React from 'react'
import Image from 'next/image'

import './heroimg.scss'

import boat from '../../assets/boat.png'

export default function HeroImg() {
  return (
    <div className='hero-image' id='hero-image'>
        <h1 className='hero-image__text'>
            Fleet Management Solutions
            <a href="#features" className='btn btn-primary-red'>
                Learn More
            </a>
        </h1>

        <div className="hero-image__boat">
            <Image src={boat} alt='Sailboat tracked with a KentallTech GPS device' priority sizes="(max-width: 1140px) 100vw, 720px" />
        </div>
    </div>
  )
}
