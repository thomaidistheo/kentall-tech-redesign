import React from 'react'

import './FeatureStrip.scss'

function FeatureStrip({
    featureOne,
    featureTwo,
    featureThree,
    featureFour,
    featureOneIcon,
    featureTwoIcon,
    featureThreeIcon,
    featureFourIcon
}) {
    const features = [
        [featureOne, featureOneIcon],
        [featureTwo, featureTwoIcon],
        [featureThree, featureThreeIcon],
        [featureFour, featureFourIcon],
    ]

    return (
        <div className='featurestrip-cont'>
            {features.map(([title, icon]) => (
                <div className="product-feature" key={title}>
                    <div className="icon">{icon}</div>
                    <div className='title'>{title}</div>
                </div>
            ))}
        </div>
    )
}

export default FeatureStrip
