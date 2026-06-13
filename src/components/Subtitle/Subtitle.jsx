import React from 'react'
import Link from 'next/link'

import './subtitle.scss'

export default function Subtitle() {
  return (
      <div className='subtitle-cont'>
        <div className='subtitle'>
            <span className='subtitle__text'>We can help you track and secure your assets.</span>
        </div>

        <Link className='subtitle__cta' href='/' >Check out our devices</Link>
      </div>
  )
}
