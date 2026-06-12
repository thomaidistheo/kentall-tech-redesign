import React from 'react'

import './header.scss'

import IconMail from '../../assets/icons/mail-icon.svg?react'
import IconTel from '../../assets/icons/phone-icon.svg?react'

export default function Preheader() {
  return (
    <div className="preheader">
      <div className="preheader__content">
        <ul>
          <li>
            <a href="tel:2170001200">
              <span className='preheader-icon'><IconTel /></span>
              <span className="link-text preheader-text">2170001200</span>
            </a>
          </li>
          <li>
            <a href="mailto:info@kentall-tech.com">
              <span className='preheader-icon'><IconMail /></span>
              <span className="link-text preheader-text">info@kentall-tech.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
