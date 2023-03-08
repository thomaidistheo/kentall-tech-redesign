import React from 'react'

import './image-section.css'

function ImageSection({ photo, alt }) {
    return (
        <div className='img-section'>
            <img src={photo} alt={alt} />
        </div>
    )
}

export default ImageSection