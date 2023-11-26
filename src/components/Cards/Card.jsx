import React from 'react'
import { Link } from 'react-router-dom'

import '../Cards/card.css'
import PropTypes from 'prop-types'



export default function Card({ title, text, buttonLink, buttonText, image}) {
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
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
              ></div>
              <div className='title'>{title}</div>
              <div className='text'>{text}</div>
              
              <Link to={buttonLink} className='btn btn-primary-blue'>
                      {buttonText}
              </Link>
              {/* <img src={image} /> */}
          </div>
      </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string
}
