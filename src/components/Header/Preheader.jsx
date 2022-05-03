import React from 'react'

import './header.css'

import {ReactComponent as IconMail} from '../../assets/icons/mail-icon.svg'
import {ReactComponent as IconTel} from '../../assets/icons/phone-icon.svg'

export default function Preheader() {
  return (
    <div className="preheader">
      <ul>
        <li>
          <a href="tel:6948465991">
            <span className='preheader-icon'><IconTel /></span>
            <span className="link-text preheader-text">6948465991</span>
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
  )
}