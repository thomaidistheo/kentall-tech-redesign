import React from 'react'
import HeroImg from '../../components/HeroImg/HeroImg'
import Subtitle from '../../components/Subtitle/Subtitle'
// import SlickSlider from '../../components/Slider/SlickSlider'
import Card from '../../components/Cards/Card'
import Feature from '../../components/Features/Feature'
import PlatformCTASection from '../../components/Platform CTA Section/PlatformCTASection'

// Cards Photos
import motoCard from '../../assets/moto-card.png'
import boatCard from '../../assets/boat-card.png'
import carCard from '../../assets/car-card.png'

// Features Icons
import { ReactComponent as FeatureOne } from '../../assets/icons/map-pin.svg'
import { ReactComponent as FeatureTwo } from '../../assets/icons/report.svg'
import { ReactComponent as FeatureThree } from '../../assets/icons/bell-ringing.svg'
import { ReactComponent as FeatureFour } from '../../assets/icons/device-desktop-analytics.svg'

import './homepage.css'
// import Spacer from '../../components/Spacer/Spacer'
import ContactCTASection from '../../components/Contact CTA Section/ContactCTASection'

export default function Homepage() {
  return (
    <div>     
      <HeroImg />
      <Subtitle />
      <p>test</p>
      {/* Category Cards Section */}
      {/* <SlickSlider /> */}
      <div className="card-cont">
        <Card 
          image={motoCard}
          title="Moto" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          button="#"
        />
        <Card 
          image={boatCard}
          title="Yachting" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          button="#"
        />
        <Card 
          image={carCard}
          title="Car" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          button="#"
        />
      </div>

      {/*  Features Section */}
      <div className="features-section">
        <p className="text-big">Features</p>
        <span className="title-underline"></span>

        <div className="features-desc">
          <p>Kentall Tech offers 2 year Warranty on all devices with experienced technical support.</p>
          <p>Our goal is to achieve the best customer experience on every level</p>
        </div>

        <div className="features-cont">
          <div className="feature-row">
            <Feature 
              icon= {<FeatureOne />}  
              title="Fleet Management"
              desc="Manage your fleet from one account, or create sub user accounts for clients and personnel with ease" 
            />
            <Feature 
              icon= {<FeatureTwo />}
              title="Summary Reports"
              desc="Schedule automated Weekly Summary Reports for your assets to monitor the trips of the week" 
            />
          </div>
          <div className="feature-row">
          <Feature 
              icon= {<FeatureThree />}
              title="Alerts"
              desc="Get notifications from your assets about: Engine ON, driving away or even speeding and more!" 
            />
            <Feature 
              icon= {<FeatureFour />}
              title="Live View"
              desc="Track your assets' position live on the map using our Tracking Platform" 
            />
          </div>

        </div>
      </div>

      {/* Platform CTA Section */}  
      <div className='platform-cta-section'>
        <PlatformCTASection />
      </div>


      {/* Contact CTA Section */}
      <ContactCTASection />

    </div>
  )
}