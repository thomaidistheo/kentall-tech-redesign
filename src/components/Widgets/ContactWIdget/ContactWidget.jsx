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
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
                </span>
                Email
            </li>
            <li className="text-normal"><a href={'mailto:'+ email}>{email}</a></li>
        </ul>

        <ul>
            <li className="text-normal title">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                </span>
                Phone
            </li>
            <li className="text-normal phonelist">
                <a href={'tel:'+ phone}>{phone}</a>
                <a href={'tel:'+ phone2}>{phone2}</a>
            </li>
        </ul>
    </div>
  )
}

export default ContactWidget