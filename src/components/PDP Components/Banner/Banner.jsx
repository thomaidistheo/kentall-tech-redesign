import React from 'react'
import Image from 'next/image'
import './Banner.scss'

function Banner({ imageDesk, imageMob, alt = 'Product banner', title = 'Professional Asset Tracking' }) {
    return (
        <div className="hero-banner-cont">
            <Image className="desk" src={imageDesk} alt={alt} priority sizes="100vw" />
            <Image className="mob" src={imageMob} alt={alt} priority sizes="100vw" />
            <div className="product-page-hero">
                <h1 className="product-page-hero__title">{title}</h1>
                <a href='#sectionOne' className="btn btn-primary-black">Start Now</a>
            </div>

        </div>
    )
}

export default Banner
