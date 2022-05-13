import React from 'react'

import './pagetitle.css'

export default function ({ title }) {
  
    return (
        <>
            <div className='page-title text-bigger'>
                {title}
                <div className="full-divider"></div>
            </div>
        </>
     )
}
