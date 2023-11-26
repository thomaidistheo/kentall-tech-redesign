import React from 'react'

import './FeatureStrip.css'

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
    return (
        <div className='featurestrip-cont'>
            <div className="product-feature">
                <div className="icon">
                    <img src={featureOneImg} alt="feature icon" />
                </div>
                <div className='title'>{featureOne}</div>
            </div>
            <div className="product-feature">
                <div className="icon">
                    <img src={featureTwoImg} alt="feature icon" />
                </div>
                <div className='title'>{featureTwo}</div>
            </div>
            <div className="product-feature">
                <div className="icon">
                    <img src={featureThreeImg} alt="feature icon" />
                </div>
                <div className='title'>{featureThree}</div>
            </div>
            <div className="product-feature">
                <div className="icon">
                    <img src={featureFourImg} alt="feature icon" />
                </div>
                <div className='title'>{featureFour}</div>
            </div>
        </div>
    )
}

export default FeatureStrip