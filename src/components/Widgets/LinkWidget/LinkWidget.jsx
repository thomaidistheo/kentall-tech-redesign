import React from 'react'

import './link_widget.css'

export default function LinkWidget({ title, item1, item2, item3, item4}) {

  return (
    <div className='link-widget-cont'>
        <div className='widget-title'> 
          { title }
        </div>

        <ul className='widget-link-list'>
          <li className="link-item">{item1}</li>
          <li className="link-item">{item2}</li>
          <li className="link-item">{item3}</li>
          <li className="link-item">{item4}</li>
        </ul>
    </div>
  )
}
