import React from 'react'

import './BodyBanner.css'

function BodyBanner({ desktop, mobile }) {
    return (
        <div className="body-banner">
            <img className="body-banner__desktop" src={desktop} alt="banner" />
            <img className="body-banner__mobile" src={mobile} alt="banner" />
        </div>
        )
    }   

export default BodyBanner