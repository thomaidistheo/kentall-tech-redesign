import React from 'react'
import { Link } from 'react-router-dom'

import './contact-cta-section.css'

function ContactCTASection() {
  return (
    <div className='contact-cta-cont'>
        <div className="contact-cta-desc">
            <p className='contact-cta-title text-big'>Get a quote</p>
            <div className='seperator'></div>
            <p className='text-medium'>Fill in the contact form and we will get back to you as soon as possible to discuss your needs!</p>
            <Link to="/contact" className='cta-btn'>
                <button className='btn btn-primary-white'>Contact Us</button>
            </Link>
        </div>
        
    </div>
  )
}

export default ContactCTASection