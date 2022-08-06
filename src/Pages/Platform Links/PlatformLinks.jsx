import React from 'react'
import PlatformLink from '../../components/Platform Link/PlatformLink'
import PageTitle from '../../components/PageTitle/PageTitle'

import './platform-links.css'

// device images
import laptop from '../../assets/laptop.png'
import iphone from '../../assets/iphone.png'
// import android from '../../assets/iphone.png'

// button images 
import webLink from '../../assets/weblink.png'
import appStore from '../../assets/appstore.png'
import playStore from '../../assets/playstore.png'

function PlatformLinks() {
  return (
    <>
      <PageTitle title='Available on PC, iOS and Android' />

      <div className='platform-links-cont'>
          <PlatformLink 
              photo={laptop}
              device="PC - Browser"
              linkImg={webLink}
              webLink="https://www.kentalltrack.com"
          />
          <PlatformLink 
              photo={iphone}
              device="iPhone / iPad"
              linkImg={appStore}
              webLink=""
          />
          <PlatformLink 
              photo={iphone}
              device="Android"
              linkImg={playStore}
              webLink=""
          />
      </div>
    </>
  )
}

export default PlatformLinks