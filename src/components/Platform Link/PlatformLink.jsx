import React from 'react'

import './platform-link.scss'

function PlatformLink({ photo, device, desc, linkImg, webLink, ctaLabel }) {
    const available = Boolean(webLink)

    return (
        <div className={`platform-link-cont${available ? '' : ' unavailable'}`}>
            <div className='device-name text-medium'>{device}</div>

            <img className='device-img' src={photo} alt={device} />

            {desc && <p className='device-desc text-normal'>{desc}</p>}

            <div className='device-action'>
                {available ? (
                    ctaLabel ? (
                        <a href={webLink}>
                            <button className='btn btn-primary-red'>{ctaLabel}</button>
                        </a>
                    ) : (
                        <a href={webLink}>
                            <img className='link-img' src={linkImg} alt={`Get it for ${device}`} />
                        </a>
                    )
                ) : (
                    <span className='coming-soon'>Coming soon</span>
                )}
            </div>
        </div>
    )
}

export default PlatformLink
