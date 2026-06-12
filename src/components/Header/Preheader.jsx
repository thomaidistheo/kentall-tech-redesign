import React from 'react'

import './header.scss'

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Preheader() {
  return (
    <div className="preheader">
      <div className="preheader__content">
        <ul>
          <li>
            <a href="tel:2170001200">
              <span className='preheader-icon'><PhoneIcon /></span>
              <span className="link-text preheader-text">2170001200</span>
            </a>
          </li>
          <li>
            <a href="mailto:info@kentall-tech.com">
              <span className='preheader-icon'><EnvelopeIcon /></span>
              <span className="link-text preheader-text">info@kentall-tech.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
