import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './platform-cta-section.scss'

import laptopAndPhoneImg from '../../assets/laptop-phone.png'

function PlatformCTASection() {
  return (
    <div className="platform-cta">
      <div className="img-cont">
        <Image alt="The Kentall tracking platform on a laptop and a smartphone" src={laptopAndPhoneImg} sizes="(max-width: 1140px) 100vw, 640px" />
      </div>

        <div className="desc">
            <p className="text-big">Visit our <span className="highlight">Tracking Platform</span> from your PC or Smartphone device! <a href="https://www.kentalltrack.com">www.kentalltrack.com</a></p>

            <Link href="/platform-links">
                <button className='btn btn-primary-blue'>Download</button>
            </Link>

        </div>
    </div>
  )
}

export default PlatformCTASection
