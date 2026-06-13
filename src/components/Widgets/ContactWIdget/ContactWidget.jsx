import React from 'react'

import './contact-widget.scss'

function ContactWidget( { email }) {

    return (
        <div className='contact-widget-cont'>
        
        <div className='widget-title'>
            Contact Us
            <div className='seperator'></div>
        </div>
        
        <ul>
            <li className="text-normal title">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <rect width="18" height="14" x="3" y="5" rx="2"></rect>
                        <path d="M3 7L12 13 21 7"></path>
                    </svg>
                </span>
                Email
            </li>
            <li className="text-normal"><a href={'mailto:'+ email}>{email}</a></li>
        </ul>

    </div>
  )
}

export default ContactWidget