import React from 'react'

import './link-widget.css'

export default function LinkWidget({ title, item1, item2, item3, item4}) {

  return (
    <div className='link-widget-cont'>
        <div className='widget-title text-medium'> 
          { title }
        </div>

        <ul>
          <li className="text-medium">{item1}</li>
          <li className="text-medium">{item2}</li>
          <li className="text-medium">{item3}</li>
          <li className="text-medium">{item4}</li>
        </ul>
    </div>
  )
}
