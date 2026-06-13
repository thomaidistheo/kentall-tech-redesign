import React from 'react'
import Link from 'next/link'

import './contact-cta-section.scss'

function ContactCTASection() {
  return (
    <div className='contact-cta-cont'>
        <div className="contact-cta-desc">
            <h2 className='contact-cta-title text-big'>Get a quote</h2>
            <div className='seperator'></div>
            <p className='text-medium'>Fill in the contact form and we will get back to you as soon as possible to discuss your needs!</p>
            <Link href="/contact" className='cta-btn'>
                <button className='btn btn-primary-white'>Contact Us</button>
            </Link>
        </div>

    </div>
  )
}

export default ContactCTASection
