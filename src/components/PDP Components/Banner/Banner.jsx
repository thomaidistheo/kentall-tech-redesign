import React from 'react'
import './Banner.css'

function Banner({ imageDesk, imageMob }) {
    return (
        <div className="hero-banner-cont">
            <img className="desk" src={imageDesk} alt="header of a sailboat" />
            <img className="mob" src={imageMob} alt="header of a sailboat" />
            <div className="product-page-hero">
                <div className="product-page-hero__title">Professional Fleet Management</div>
                <a href='#sectionOne' className="btn btn-primary-black">Start Now</a>
            </div>

        </div>
    )
}

export default Banner