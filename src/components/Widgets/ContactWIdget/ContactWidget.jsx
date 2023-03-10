import React from 'react'

import './contact-widget.css'

function ContactWidget( { email, phone, phone2}) {

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

        {/* <ul>
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
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"></path>
                    </svg>
                </span>
                Phone
            </li>
            <li className="text-normal phonelist">
                <a href={'tel:'+ phone}>{phone}</a>
            </li>
            <li>
                <a href={'tel:'+ phone2}>{phone2}</a>
            </li>
        </ul> */}
    </div>
  )
}

export default ContactWidget