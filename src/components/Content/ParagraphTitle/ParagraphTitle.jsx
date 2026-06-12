import React from 'react'

import './paragraph-title.scss'

function ParagraphTitle({ title }) {
  return (
    <>
        <p className="paragraph-title text-big">{title}</p>
        <div className='paragraph-title-underline'></div>
    </>
  )
}

export default ParagraphTitle