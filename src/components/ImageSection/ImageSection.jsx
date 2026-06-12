import React from 'react'

import './image-section.scss'

function ImageSection({ photo, alt }) {
    return (
        <div className='img-section'>
            <img src={photo} alt={alt} />
        </div>
    )
}

export default ImageSection