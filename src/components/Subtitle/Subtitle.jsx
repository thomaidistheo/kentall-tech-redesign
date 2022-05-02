import React from 'react'
import { Link } from 'react-router-dom'

import './subtitle.css'

export default function Subtitle() {
  return (
      <div className='subtitle-cont'>
        <div className='subtitle'>
            <span className='subtitle__text'>We can help you track and secure your assets.</span>
        </div>

        <Link className='subtitle__cta' to='/' >Check out our devices</Link>
      </div>
  )
}
