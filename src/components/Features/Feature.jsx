import React from 'react'

import './feature.scss'

function Feature({ icon, title, desc }) {
  return (
    <div className="feature">
        <div className="circle">
          {icon}
        </div>

        <h3 className="feature-title text-medium">{title}</h3>
        <span className="seperator"></span>
        <p className="feature-desc">{desc}</p>
    </div>
  )
}

export default Feature
