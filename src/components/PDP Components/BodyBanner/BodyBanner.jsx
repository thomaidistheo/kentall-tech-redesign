import React from 'react'
import Image from 'next/image'

import './BodyBanner.scss'

function BodyBanner({ desktop, mobile, alt = 'Product banner' }) {
    return (
        <div className="body-banner">
            <Image className="body-banner__desktop" src={desktop} alt={alt} sizes="100vw" />
            <Image className="body-banner__mobile" src={mobile} alt={alt} sizes="100vw" />
        </div>
        )
    }

export default BodyBanner
