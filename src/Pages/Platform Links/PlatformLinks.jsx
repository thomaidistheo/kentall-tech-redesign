import React from 'react';
import PlatformLink from '../../components/Platform Link/PlatformLink'
import PageTitle from '../../components/PageTitle/PageTitle'

import './platform-links.scss'

// device images
import laptop from '../../assets/laptop.png'
import iphone from '../../assets/iphone.png'

// store badges
import appStore from '../../assets/appstore.png'
import playStore from '../../assets/playstore.png'

function PlatformLinks() {
  return (
    <div className="landing-page">
      <PageTitle title='Available on PC, iOS and Android' />

      <p className='platform-links-intro text-medium'>
        The Kentall tracking platform runs in any modern browser — no installation needed.
        Prefer an app? Get it on the App Store or Google Play.
      </p>

      <div className='platform-links-cont'>
          <PlatformLink
              photo={laptop}
              device="Web Platform"
              desc="Full platform access from any browser, on PC or Mac."
              ctaLabel="Open Web Platform"
              webLink="https://www.kentalltrack.com"
          />
          <PlatformLink
              photo={iphone}
              device="iPhone / iPad"
              desc="Native iOS app with live map and push notifications."
              linkImg={appStore}
              webLink="https://apps.apple.com/app/gps-monitor-plus/id1138325623"
          />
          <PlatformLink
              photo={iphone}
              device="Android"
              desc="Native Android app with live map and push notifications."
              linkImg={playStore}
              webLink="https://play.google.com/store/apps/details?id=apps.monitorplus.net"
          />
      </div>

      <div className='platform-links-help'>
        <p className='text-medium'>
          Need help setting up your device or account?
        </p>
        <a href="mailto:info@kentall-tech.com">
          <button className='btn btn-secondary-blue'>Contact us</button>
        </a>
      </div>
    </div>
  )
}

export default PlatformLinks
