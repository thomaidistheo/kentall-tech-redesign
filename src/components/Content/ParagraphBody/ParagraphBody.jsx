import React from 'react'

import './paragraph-body.css'

function ParagraphBody({ content }) {
  return (
    <div className='paragraph-content text-medium'>{content}</div>
  )
}

export default ParagraphBody