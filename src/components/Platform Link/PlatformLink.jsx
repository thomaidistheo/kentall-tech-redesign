import React from 'react'

import './platform-link.css'

function PlatformLink({ photo, device, linkImg, webLink }) {
  return (
      <div className='platform-link-cont'>
        <p className='text-medium'>{device}</p>

        <img className='device-img' src={photo} alt="device" />

        
        <a href={webLink}>
            <img className='link-img' src={linkImg} alt="button link" />
        </a>

    </div>
  )
}

export default PlatformLink