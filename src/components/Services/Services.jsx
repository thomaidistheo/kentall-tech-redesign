import React from 'react'
import { Link } from 'react-router-dom'
import './service.css'

import imageOne from '../../assets/ourProductsCardImage.svg'
import imageTwo from '../../assets/SoftwareSolutions.svg'
import imageThree from '../../assets/hardwareDevices.svg'

export default function Service({ title, description, photo}) {
  return (
    <div className="service-cards-cont">
      <div className='service-card'> 
          <div className="service-card__content">
              <div className="card-text">    
                  <div className="card-text__title">Our Products</div>
                  <div className="card-text__desc">
                    Kentall Tech offers both hardware and software solutions for your asset tracking needs.
                    <br/><br/>
                    We work with individuals that want to protect their assets such as cars and know their location at all times
                    to feel safe and companies that manage fleets of assets, such as sailboats.
                    <br/><br/>
                    Kentall Tech can set up a hardware device you already have been using on your asset, to work with our advanced tracking platform, and get the best of experience 
                    <br/><br/>
                    Don’t have a hardware tracking device? No problem, we can provide you with a variety of options based on your needs.
                  </div>
              </div>
              <div className="card-img">
                <img src={imageOne} alt="Unavailable"/>
              </div>
          </div>
      </div>
      
      <div className='service-card'> 
          <div className="service-card__content">
              <div className="card-text">    
                  <div className="card-text__title">Software [Tracking Platform]</div>
                  <div className="card-text__desc">
                    Our Tracking Platform has been built around the most important needs for both personal use and business use.
                    <br/><br/>
                    The platform is equipped with the best tools to monitor every aspect of a trip you’re tracking, and also provide analytics and reports for businesses to print and file as expense reports, or for tax purposes.
                    <br/><br/>
                    With our Platform you can view a trip history of up to 6 months, create zones and get reports of entering/leaving those zones, set up email alerts for specific events such as engine on/off or entering/leaving zones and more. Here you can find a guide for all the features our platform has to offer.
                    <br/><br/>
                    If you’re a business that manages fleets of boats, learn more about how we provide tailored reports for the Greek Tax laws <Link to="#" className='link-text'>here.</Link>
                  </div>
              </div>
              <div className="card-img">
                <img src={imageTwo} alt="Unavailable"/>
              </div>
          </div>
      </div>

      <div className='service-card'> 
          <div className="service-card__content">
              <div className="card-text">    
                  <div className="card-text__title">Hardware Devices</div>
                  <div className="card-text__desc">
                    Kentall Tech provides a variety of devices that have been thoroughly tested in order to achieve the most reliable and smooth experience for the client.
                    <br/><br/>
                    Our KEN-M series is a complete package of devices that offer alarm systems, accurate GPS Tracking, shock alerts, engine status and much more features, in order to have the most detailed and tailored to your needs experience.
                    <br/><br/>
                    Find out more about each device’s specifications on our <Link to="#" className='link-text'>Products Page</Link>.
                  </div>
              </div>
              <div className="card-img">
                <img src={imageThree} alt="Unavailable"/>
              </div>
          </div>
      </div>

    </div>
  )
}
