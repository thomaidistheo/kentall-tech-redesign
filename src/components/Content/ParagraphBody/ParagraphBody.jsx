import React from 'react'
import PropTypes from 'prop-types'

import './paragraph-body.css'

export default function ParagraphBody({ content, width }) {
  const style = {
    maxWidth: `${width}px`
  }

  return (
    <div className='paragraph-content text-medium' style={style}>{content}</div>
  )
}

ParagraphBody.propTypes = {
  content: PropTypes.string,
  maxWidth: PropTypes.number,
}