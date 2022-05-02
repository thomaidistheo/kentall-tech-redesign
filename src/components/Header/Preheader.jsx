import React from 'react'

import './header.css'
import iconMail from '../../assets/icons/mail-icon.png'
import iconTel from '../../assets/icons/phone-icon.png'

export default function Preheader() {
  return (
    <div className="preheader">
      <ul>
        <li>
          <a href="tel:2100000000">
            <img src={iconTel} alt="tel"/>
            <span className="link-text preheader-text">2100000000</span>
          </a>
        </li>
        <li>
          <a href="tel:2100000000">
            <img src={iconMail} alt="mail"/>
            <span className="link-text preheader-text">info@kentall-tech.com</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
