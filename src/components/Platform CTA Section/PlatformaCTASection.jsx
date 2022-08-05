import React from 'react'
import { Link } from 'react-router-dom'

import './platform-cta-section.css'

import laptopAndPhoneImg from '../../assets/laptop-phone.png'

function PlatformaCTASection() {
  return (
    <div className="platform-cta">
      <div className="img-cont">
        <img src={laptopAndPhoneImg}></img>
      </div>

        <div className="desc">
            <p className="text-big">Visit our <span className="highlight">Tracking Platform</span> from your PC or Smartphone device! <a href="https://www.kentalltrack.com>">www.kentalltrack.com</a></p>

            <Link to="/platform-links">
                <button className='btn btn-primary-blue'>Learn More</button>
            </Link>

        </div>
    </div>
  )
}

export default PlatformaCTASection