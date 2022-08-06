import React from 'react'

import './feature.css'

function Feature({ icon, title, desc }) {
  return (
    <div className="feature">
        <div className="circle">
          {icon}
        </div>

        <p className="feature-title text-medium">{title}</p>
        <span className="seperator"></span>
        <p className="feature-desc">{desc}</p>
    </div>
  )
}

export default Feature