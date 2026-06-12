import React from 'react'

import './pagetitle.scss'

export default function PageTitle({ title }) {
  
    return (
        <>
            <h1 className='page-title text-bigger'>
                {title}
                <span className="full-divider"></span>
            </h1>
        </>
     )
}
