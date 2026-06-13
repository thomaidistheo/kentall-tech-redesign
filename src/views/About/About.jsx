import React from 'react';
import Image from 'next/image'
import PageTitle from '../../components/PageTitle/PageTitle'
import Services from '../../components/Services/Services'

import './about.scss'

import laptopMap from '../../assets/laptop.png'

export default function About() {
  return (
    <div>
        <div className="landing-page">
          <PageTitle title="About Kentall Tech Ltd." />
          <div className="about-banner">
            <div className="img-cont">
              <Image src={laptopMap} alt="Laptop showing the Kentall tracking platform" priority />
            </div>
            <div className="text-cont">
              <div>The most advanced Fleet Management</div>
              <div>Available for PC, iPhone & Android</div>
              <div>Feature rich for every tracking need</div>
            </div>
          </div>
          <Services />
        </div>
    </div>
  )
}
