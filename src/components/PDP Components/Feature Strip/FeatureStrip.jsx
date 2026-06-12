import React from 'react'
import Image from 'next/image'

import './FeatureStrip.scss'

function FeatureStrip({
    featureOne,
    featureTwo,
    featureThree,
    featureFour,
    featureOneImg,
    featureTwoImg,
    featureThreeImg,
    featureFourImg
}) {
    const features = [
        [featureOne, featureOneImg],
        [featureTwo, featureTwoImg],
        [featureThree, featureThreeImg],
        [featureFour, featureFourImg],
    ]

    return (
        <div className='featurestrip-cont'>
            {features.map(([title, img]) => (
                <div className="product-feature" key={title}>
                    <div className="icon">
                        <Image src={img} alt="" />
                    </div>
                    <div className='title'>{title}</div>
                </div>
            ))}
        </div>
    )
}

export default FeatureStrip
