import React from 'react'
import { Link } from 'react-router-dom'

import '../Cards/card.css'

export default function Card({ title, text, button, image}) {
  return (
    <div className='card'> 
        {/* <div className='square'></div> */}
        {/* <div className='square'></div> */}
        <div className='inner'>
            <div 
                className="image" 
                style={{ 
                    backgroundImage: `url(${image})`,
                    // width: 700,
                    // height: 350,
                    backgroundSize: 'cover'
                  }}
            ></div>
            <div className='title'>{title}</div>
            <div className='text'>{text}</div>
            
            <Link to={button} className='btn btn-primary-blue'>
                    Learn More
            </Link>
            {/* <img src={image} /> */}
        </div>
    </div>
  )
}
